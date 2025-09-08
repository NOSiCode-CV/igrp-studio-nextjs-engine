import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { RenderContext, WorkspaceProject, WorkspaceProjectsConfig } from '../../interfaces/types';
import {
  TEMPLATES,
  SRC_CONFIG_FILES,
} from '../../utils/constants';
import { workspaceProjectsConfigValidate } from '../../schema/workspaceProjectConfig';
import { checkDuplicated } from './checkDuplicated';

export type BASE_FILE = { output: string; template: string; name: string };
export type BASE_FILES = BASE_FILE[];

/**
 * 
 * @param context 
 */
export const generateWorkspaceFiles = async (context: RenderContext<WorkspaceProjectsConfig, WorkspaceProjectsConfig>) => {
  const environmentFiles = await generateFiles(context);

  await saveBaseWorkspaceFiles(environmentFiles, context);

  await generateServiceEnvironmentFiles(context)

};

const generateFiles = async (
  context: RenderContext<WorkspaceProjectsConfig, WorkspaceProjectsConfig>,
): Promise<BASE_FILES> => {
  const isBaseConfigValid = workspaceProjectsConfigValidate(context.resourceConfig);

  if (!isBaseConfigValid && workspaceProjectsConfigValidate.errors)
    throw workspaceProjectsConfigValidate.errors;

  checkDuplicated(context);

  return [
    {
      output: context.basePath,
      template: TEMPLATES.WORKSPACE_COMPOSE,
      name: SRC_CONFIG_FILES.IGRP_COMPOSE,
    },
  ];
};

const generateServiceEnvironmentFiles = async (context: RenderContext<WorkspaceProjectsConfig, WorkspaceProjectsConfig>) => {

  const basePath = context.basePath

  for (const proj of context.resourceConfig.projects) {

    const elementContext: RenderContext<WorkspaceProject, WorkspaceProject> = {
      resourceConfig: proj,
      basePath,
    };

    if (proj.environments && proj.environments.length > 0)
      await saveServiceEnvironmentFiles({
        output: context.basePath,
        template: TEMPLATES.SERVICE_ENV,
        name: `.${(proj.config.name).toLowerCase()}.env`
      }, elementContext)

  }

}

const saveBaseWorkspaceFiles = async (baseFiles: BASE_FILES, context: RenderContext<WorkspaceProjectsConfig, WorkspaceProjectsConfig>) => {
  await Promise.all(
    baseFiles.map(async (file) => {
      const template = await renderTemplate(file.template, context);
      const outputPath = path.join(file.output, file.name);
      await saveToFile(template, outputPath);
    }),
  );
};

const saveServiceEnvironmentFiles = async (file: BASE_FILE, context: RenderContext<WorkspaceProject, WorkspaceProject>) => {
    const template = await renderTemplate(file.template, context);
    const outputPath = path.join(file.output, file.name);
    await saveToFile(template, outputPath);
};
