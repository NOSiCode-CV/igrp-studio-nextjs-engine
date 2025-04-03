import path from 'path';
import fs from 'fs-extra';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { RenderContext, WorkspaceConfig, WorkspaceProjectsConfig } from '../../interfaces/types';
import {
  COMMON_FILES,
  DIRECTORIES,
  ERROR_MESSAGE,
  TEMPLATES,
  SRC_CONFIG_FILES,
  PACKAGE_JSON,
  DST_CONFIG_FILES, ENVIRONMENT_FILES,
} from '../../utils/constants';
import { workspaceConfigValidate } from '../../schema/baseWorkspace';
import { getPaths } from '../../index';
import { workspaceProjectsConfigValidate } from '../../schema/workspaceProjectConfig';

export type BASE_FILES = { output: string; template: string; name: string }[];

/**
 * 
 * @param context 
 */
export const generateWorkspaceFiles = async (context: RenderContext<WorkspaceProjectsConfig, WorkspaceProjectsConfig>) => {
  const environmentFiles = generateFiles(context);

  await saveBaseWorkspaceFiles(environmentFiles, context);
};

const generateFiles = (context: RenderContext<WorkspaceProjectsConfig, WorkspaceProjectsConfig>): BASE_FILES => {

  const isBaseConfigValid = workspaceProjectsConfigValidate(context.resourceConfig);

  if (!isBaseConfigValid && workspaceProjectsConfigValidate.errors) throw ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG;

  return [
    { output: context.basePath, template: TEMPLATES.AM_IGRP_ENV, name: ENVIRONMENT_FILES.AM_IGRP_ENV },
    { output: context.basePath, template: TEMPLATES.UM_IGRP_ENV, name: ENVIRONMENT_FILES.UM_IGRP_ENV },
    { output: context.basePath, template: TEMPLATES.IAM_IGRP_ENV, name: ENVIRONMENT_FILES.IAM_IGRP_ENV },
    { output: context.basePath, template: TEMPLATES.FILE_IGRP_ENV, name: ENVIRONMENT_FILES.FILE_IGRP_ENV },
    { output: context.basePath, template: TEMPLATES.IGRP_ENV, name: ENVIRONMENT_FILES.IGRP_ENV },
    { output: context.basePath, template: TEMPLATES.WORKSPACE_COMPOSE, name: SRC_CONFIG_FILES.IGRP_COMPOSE },
  ];

};

const saveBaseWorkspaceFiles = async (baseFiles: BASE_FILES, context: RenderContext<WorkspaceProjectsConfig, WorkspaceProjectsConfig>) => {
  await Promise.all(
    baseFiles.map(async (file) => {
      const template = await renderTemplate(file.template, context);
      const outputPath = path.join(file.output, file.name);
      await saveToFile(template, outputPath);
    }),
  );
};
