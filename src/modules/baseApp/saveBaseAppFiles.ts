import path from 'path';
import fs from 'fs-extra';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { RenderContext } from '../../interfaces/types';
import {
  COMMON_FILES,
  DIRECTORIES,
  ERROR_MESSAGE,
  TEMPLATES,
  SRC_CONFIG_FILES,
  PACKAGE_JSON,
  DST_CONFIG_FILES
} from '../../utils/constants';
import { appConfigValidate } from '../../schema/baseApp';
import { getPaths } from '../../index';
import { loadProjectConfig, replaceTemplate } from '../../utils/helpers';

export type BASE_CONFIG_FILES = { src: string; dest: string }[];
export type BASE_API_FILES = { output: string; template: string; name: string }[];

/**
 * 
 * @param context 
 */
export const saveFileConfig = async (context: RenderContext) => {
  const baseAppFiles = generateBaseAppFiles(context);
  const baseConfigFiles = generateConfigFiles(context);

  await saveBaseAppFiles(baseAppFiles, baseConfigFiles, context);
};

const generateBaseAppFiles = (context: RenderContext): BASE_API_FILES => {

  const isBaseConfigValid = appConfigValidate(context.baseConfig);

  if (!isBaseConfigValid && appConfigValidate.errors) throw ERROR_MESSAGE.INVALID_APP_CONFIG;

  const mainPath = path.join(context.basePath, DIRECTORIES.APP);
  const kubernetesPath = path.join(context.basePath, 'k8s');

  // Project-scoped docker-compose. Landed alongside the extracted app so
  // `docker compose -f igrp-compose-<name>.yaml up` works from the project
  // root with no extra flags. The `{{name}}` placeholder in the filename
  // resolves to the lower-cased app name — same convention the workspace-
  // side backend template uses (igrp-compose-bibliotheque.yaml, …).
  const composeFileName = replaceTemplate(COMMON_FILES.IGRP_COMPOSE_PROJECT, {
    name: (context.baseConfig?.name ?? 'app').toLowerCase(),
  });

  return [
    { output: mainPath, template: TEMPLATES.EXPORTS_FILE, name: COMMON_FILES.EXPORTS_FILE },
    { output: kubernetesPath, template: TEMPLATES.CONFIG_DEPLOYMENT, name: COMMON_FILES.DEPLOYMENT},
    { output: kubernetesPath, template: TEMPLATES.CONFIG_INGRESS, name: COMMON_FILES.INGRESS},
    { output: kubernetesPath, template: TEMPLATES.CONFIG_SERVICE, name: COMMON_FILES.SERVICE_K8S},
    //{ output: kubernetesPath, template: TEMPLATES.CONFIG_GITLAB_CI_CD, name: DST_CONFIG_FILES.GITLABCIYAML},
    { output: mainPath, template: TEMPLATES.CONFIG_GITLAB_CI_CD, name: DST_CONFIG_FILES.GITLABCIYAML},
    { output: context.basePath, template: TEMPLATES.CONFIG_IGRP_COMPOSE, name: composeFileName },
  ];
};

/**
 * 
 * @param context 
 * @returns 
 */
const generateConfigFiles = (context: RenderContext): BASE_CONFIG_FILES => {

  const CONFIGS = getPaths().configs

  return [
    {src: path.join(CONFIGS, SRC_CONFIG_FILES.VSCODE_SETTINGS), dest: path.join(context.basePath, DST_CONFIG_FILES.VSCODE_SETTINGS)},
    {src: path.join(CONFIGS, SRC_CONFIG_FILES.DOCKERIGNORE), dest: path.join(context.basePath, DST_CONFIG_FILES.DOCKERIGNORE)},
  ]
}

const saveBaseAppFiles = async (baseFiles: BASE_API_FILES, baseConfigFiles: BASE_CONFIG_FILES, context: RenderContext) => {
  await Promise.all(
    baseFiles.map(async (file) => {
      const template = await renderTemplate(file.template, context);
      const outputPath = path.join(file.output, file.name);
      await saveToFile(template, outputPath);
    }),
  );

  await Promise.all(
    baseConfigFiles.map(async file => {
      await fs.copyFile(file.src, file.dest);
    })
  )

  const outputPath = path.join(context.basePath, PACKAGE_JSON.output)
  const configs = await loadProjectConfig<any>(context.basePath)

  if(configs.length > 0) {
    const template = configs[0];
    template.name = context.baseConfig?.name ?? 'igrp-app'
    template.displayName = context.baseConfig?.displayName ?? template.name
    await saveToFile(JSON.stringify(template, null, 2), outputPath);
  }

};
