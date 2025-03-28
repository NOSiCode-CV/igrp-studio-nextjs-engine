import path from 'path';
import fs from 'fs-extra';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { RenderContext, WorkspaceConfig } from '../../interfaces/types';
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
import { workspaceConfigValidate } from '../../schema/baseWorkspace';

export type BASE_CONFIG_FILES = { src: string; dest: string }[];
export type BASE_API_FILES = { output: string; template: string; name: string }[];

/**
 * 
 * @param context 
 */
export const saveWorkspaceFileConfig = async (context: RenderContext<WorkspaceConfig, WorkspaceConfig>) => {
  const baseWorkspaceFiles = generateBaseWorkspaceFiles(context);
  const baseConfigFiles = generateConfigFiles(context);

  await saveBaseWorkspaceFiles(baseWorkspaceFiles, baseConfigFiles, context);
};

const generateBaseWorkspaceFiles = (context: RenderContext<WorkspaceConfig, WorkspaceConfig>): BASE_API_FILES => {

  const isBaseConfigValid = workspaceConfigValidate(context.resourceConfig);

  if (!isBaseConfigValid && workspaceConfigValidate.errors) throw ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG;

  return [
    // nothing for now
  ];

};

/**
 * 
 * @param context 
 * @returns 
 */
const generateConfigFiles = (context: RenderContext<WorkspaceConfig, WorkspaceConfig>): BASE_CONFIG_FILES => {
  return [
    {src: path.join(CONFIGS, SRC_CONFIG_FILES.WORKSPACE_GITIGNORE), dest: path.join(context.basePath, DST_CONFIG_FILES.GITIGNORE)},
  ]
}

const saveBaseWorkspaceFiles = async (baseFiles: BASE_API_FILES, baseConfigFiles: BASE_CONFIG_FILES, context: RenderContext<WorkspaceConfig, WorkspaceConfig>) => {
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

};
