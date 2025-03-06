import path from 'path';
import fs from 'fs-extra';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { RenderContext } from '../../interfaces/types';
import {
  COMMON_FILES,
  CONFIGS,
  DIRECTORIES,
  ERROR_MESSAGE,
  TEMPLATES,
  SRC_CONFIG_FILES,
  PACKAGE_JSON,
  DST_CONFIG_FILES
} from '../../utils/constants';
import { appConfigValidate } from '../../schema/baseApp';

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
  const mainLayoutPath = path.join(context.basePath, DIRECTORIES.LAYOUTS)
  const kubernetesPath = path.join(context.basePath, 'k8s');

  return [
    //{ output: mainPath, template: TEMPLATES.WELCOME_PAGE, name: COMMON_FILES.PAGE_TSX },
    //{ output: mainPath, template: TEMPLATES.CONFIG_LAYOUT, name: COMMON_FILES.LAYOUT_TSX },
    //{ output: mainLayoutPath, template: TEMPLATES.MAIN_LAYOUT, name: COMMON_FILES.MAIN_LAYOUT_TSX },
    //{ output: mainLayoutPath, template: TEMPLATES.MAIN_LAYOUT_CSS, name: COMMON_FILES.MAIN_LAYOUT_CSS },
    { output: kubernetesPath, template: TEMPLATES.CONFIG_DEPLOYMENT, name: COMMON_FILES.DEPLOYMENT},
    { output: kubernetesPath, template: TEMPLATES.CONFIG_INGRESS, name: COMMON_FILES.INGRESS},
    { output: kubernetesPath, template: TEMPLATES.CONFIG_SERVICE, name: COMMON_FILES.SERVICE_K8S}
  ];
};

/**
 * 
 * @param context 
 * @returns 
 */
const generateConfigFiles = (context: RenderContext): BASE_CONFIG_FILES => {
  return [
    {src: path.join(CONFIGS, SRC_CONFIG_FILES.EN), dest: path.join(context.basePath, DST_CONFIG_FILES.EN)},
    {src: path.join(CONFIGS, SRC_CONFIG_FILES.ES), dest: path.join(context.basePath, DST_CONFIG_FILES.ES)},
    {src: path.join(CONFIGS, SRC_CONFIG_FILES.PT), dest: path.join(context.basePath, DST_CONFIG_FILES.PT)},
    {src: path.join(CONFIGS, SRC_CONFIG_FILES.NPMRC), dest: path.join(context.basePath, DST_CONFIG_FILES.NPMRC)},
    {src: path.join(CONFIGS, SRC_CONFIG_FILES.LOCAL_ENV), dest: path.join(context.basePath, DST_CONFIG_FILES.ENV)},
    //{src: path.join(CONFIGS, SRC_CONFIG_FILES.README), dest: path.join(context.basePath, DST_CONFIG_FILES.README)},
    //{src: path.join(CONFIGS, SRC_CONFIG_FILES.NEXTENV), dest: path.join(context.basePath, DST_CONFIG_FILES.NEXTENV)},
    //{src: path.join(CONFIGS, SRC_CONFIG_FILES.TSCONFIG), dest: path.join(context.basePath, DST_CONFIG_FILES.TSCONFIG)},
    //{src: path.join(CONFIGS, SRC_CONFIG_FILES.GITIGNORE), dest: path.join(context.basePath, DST_CONFIG_FILES.GITIGNORE)},
    //{src: path.join(CONFIGS, SRC_CONFIG_FILES.NEXTCONFIG), dest: path.join(context.basePath, DST_CONFIG_FILES.NEXTCONFIG)},
    {src: path.join(CONFIGS, SRC_CONFIG_FILES.GITLABCIYAML), dest: path.join(context.basePath, DST_CONFIG_FILES.GITLABCIYAML)},
    {src: path.join(CONFIGS, SRC_CONFIG_FILES.DOCKERFILE), dest: path.join(context.basePath, DST_CONFIG_FILES.DOCKERFILE)},
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

  const template = await renderTemplate(PACKAGE_JSON.template, context)
  const outputPath = path.join(context.basePath, PACKAGE_JSON.output)
  await saveToFile(template, outputPath);
};
