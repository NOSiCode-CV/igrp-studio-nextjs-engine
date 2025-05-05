import { COMMON_FILES, DIRECTORIES, ERROR_MESSAGE } from './utils/constants';
import { appConfigValidate } from './schema/baseApp';
import { checkIfDirectoryIsEmpty } from './utils/helpers';
import { generatePage } from './modules/page/generatePage';
import { savePageConfig } from './modules/page/savePageConfig';
import { generateService } from './modules/page/generateService';
import { saveFileConfig } from './modules/baseApp/saveBaseAppFiles';
import { saveWorkspaceFileConfig } from './modules/workspace/saveBaseWorkspaceFiles';
import { saveBaseAppFileConfig } from './modules/baseApp/saveBaseAppConfig';
import { createAppDirectories } from './modules/baseApp/createAppDirectories';
import {
  AppConfig,
  ComponentConfig,
  ComponentRegistrationConfig,
  DeleteConfig,
  DockerServiceRegistrationConfig,
  PageComponentConfig,
  PageConfig,
  PageMetaConfig,
  PathConfig,
  PayloadConfig,
  ProjectWorkspace,
  RenderContext,
  ServiceWorkspace,
  WorkspaceConfig,
  WorkspaceProjectsConfig,
} from './interfaces/types';
import { savePagesMeta } from './modules/pageMeta/savePagesMeta';
import { pageConfigValidate } from './schema/pageConfig';
import { componentConfigValidate } from './schema/componentConfig';
import { saveComponentConfig } from './modules/components/saveComponentConfig';
import { generateComponent } from './modules/components/generateComponent';
import { register, registryAsObject } from './components';
import { dockerRegistryAsObject, register as registerService } from './docker_services';
import { deleteValidation } from './schema/deleteConfig';
import { deleteElementConfig } from './modules/delete/deleteElementConfig';
import { updateAndRenderPage } from './modules/components/updateAndRenderPage';
import { pageComponentConfigValidate } from './schema/pageComponentConfig';
import { registerAllComponents } from './components/register';
import { extractBaseApp } from './modules/baseApp/extractBaseApp';
import defaultModule from './components/default';
import defaultServiceModule from './docker_services/default';
import { componentRegistrationValidate } from './schema/componentRegisterConfig';
import { workspaceConfigValidate } from './schema/baseWorkspace';
import { saveBaseWorkspaceFileConfig } from './modules/workspace/saveBaseWorkspaceConfig';
import { createWorkspaceDirectories } from './modules/workspace/createWorkspaceDirectories';
import path from 'path';
import { generateWorkspaceFiles } from './modules/workspace/generateWorkspaceFiles';
import { registerAllServices } from './docker_services/register';
import { dockerServiceRegistrationValidate } from './schema/serviceRegisterConfig';
import { saveWorkspaceComposeFile } from './modules/workspace/saveWorkspaceComposeFile';
import {
  mapProjectToWorkspace,
  mapServiceToWorkspace,
  removeProjectInWorkspace,
  removeServiceInWorkspace,
  updateProjectInWorkspace,
  updateServiceInWorkspace,
} from './modules/workspace/workspaceMapper';
import { loadPayloadConfig } from './modules/payload/loadPayloadConfig';
import { parsePayloadConfig } from './modules/payload/parsePayloadConfig';

export function getPaths(): PathConfig {
  const environment = process.env.VITE_ENGINE_IGRP_STUDIO_ENV;

  if (environment === 'production') {
    return {
      configs: path.join(__dirname, './configs'),
      template: path.join(__dirname, './templates'),
      baseApp: path.join(__dirname, './templates/base_app.zip'),
      baseWorkspace: path.join(__dirname, './templates/base_workspace.zip'),
      componentPartials: path.join(__dirname, './templates/components/{{name}}/partials'),
      genericPartials: path.join(__dirname, './templates/partials'),
    };
  } else {
    return {
      configs: path.join(__dirname, '../public/configs'),
      template: path.join(__dirname, '../public/templates'),
      baseApp: path.join(__dirname, '../public/templates/base_app.zip'),
      baseWorkspace: path.join(__dirname, '../public/templates/base_workspace.zip'),
      componentPartials: path.join(__dirname, '../public/templates/components/{{name}}/partials'),
      genericPartials: path.join(__dirname, '../public/templates/partials'),
    };
  }
}

/**
 * Initializes a new workspace by validating configuration, checking directory status,
 * and creating necessary files and folders.
 *
 * @async
 * @function newWorkspace
 * @param {AppConfig} baseConfig - The base configuration object for the workspace.
 * @param {string} basePath - The base path where the workspace directories and files will be created.
 *
 * @throws {Error} Throws an error if:
 * - The base configuration is invalid or has validation errors (`ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG`).
 * - The base path is not provided (`ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG`).
 * - The base path directory is not empty (`ERROR_MESSAGE.DIRECTORY_ALREADY_IN_USE`).
 *
 * @returns {Promise<void>} A promise that resolves when the workspace has been successfully initialized.
 *
 */
export const newWorkspace = async (
  baseConfig: WorkspaceConfig,
  basePath: string,
): Promise<void> => {
  const isBaseConfigValid = workspaceConfigValidate(baseConfig);

  if (!isBaseConfigValid && workspaceConfigValidate.errors) throw workspaceConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG;

  if (!(await checkIfDirectoryIsEmpty(basePath))) throw ERROR_MESSAGE.DIRECTORY_ALREADY_IN_USE;

  const context: RenderContext<WorkspaceConfig, WorkspaceConfig> = {
    resourceConfig: baseConfig,
    basePath,
  };

  /**
   * Creates the folder structure needed for the workspace.
   */
  await createWorkspaceDirectories(context);

  /**
   * Extracts the folder structure needed for the workspace.
   */
  // No need to extract from ZIP for now
  //await extractBaseWorkspace(context);

  /**
   * Creates the configuration files based on the provided context.
   */
  await saveWorkspaceFileConfig(context);
};

/**
 * Initializes a new application by validating configuration, checking directory status,
 * and creating necessary files and folders.
 *
 * @async
 * @function newApp
 * @param {AppConfig} baseConfig - The base configuration object for the application.
 * @param {string} basePath - The base path where the application directories and files will be created.
 *
 * @throws {Error} Throws an error if:
 * - The base configuration is invalid or has validation errors (`ERROR_MESSAGE.INVALID_APP_CONFIG`).
 * - The base path is not provided (`ERROR_MESSAGE.INVALID_APP_CONFIG`).
 * - The base path directory is not empty (`ERROR_MESSAGE.DIRECTORY_ALREADY_IN_USE`).
 *
 * @returns {Promise<void>} A promise that resolves when the application has been successfully initialized.
 *
 */
export const newApp = async (baseConfig: AppConfig, basePath: string): Promise<void> => {
  const isBaseConfigValid = appConfigValidate(baseConfig);

  if (!isBaseConfigValid && appConfigValidate.errors) throw appConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_APP_CONFIG;

  if (!(await checkIfDirectoryIsEmpty(basePath))) throw ERROR_MESSAGE.DIRECTORY_ALREADY_IN_USE;

  await saveBaseAppFileConfig(baseConfig, basePath);

  const context: RenderContext = {
    resourceConfig: undefined, // No specific config for base API
    basePath,
    baseConfig,
  };

  /**
   * Creates the folder structure needed for the application.
   */
  await createAppDirectories(context);

  /**
   * Extracts the folder structure needed for the application.
   */
  await extractBaseApp(context);

  /**
   * Creates the configuration files based on the provided context.
   */
  await saveFileConfig(context);

  const pageMetaConfig: PageMetaConfig = {
    type: 'UI',
    url: '',
    description: baseConfig.description || 'Web description',
    resourceItems: [],
  };

  await savePagesMeta(pageMetaConfig, basePath);
};

/**
 *
 * @param pageConfig
 * @param basePath
 */

export const newPage = async (pageConfig: PageConfig, basePath: string) => {
  const isPageConfigValid = pageConfigValidate(pageConfig);

  if (!isPageConfigValid && pageConfigValidate.errors) throw pageConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const context: RenderContext<PageConfig, PageConfig> = {
    resourceConfig: pageConfig,
    basePath: basePath,
  };

  await generatePage(context);
  await generateService(context);

  await savePageConfig(pageConfig, basePath);
};

/**
 *
 * @param componentConfig
 * @param basePath
 */

export const newComponent = async (componentConfig: ComponentConfig, basePath: string) => {
  const isComponentConfigValid = componentConfigValidate(componentConfig);

  if (!isComponentConfigValid && componentConfigValidate.errors)
    throw componentConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const context: RenderContext<ComponentConfig, ComponentConfig> = {
    resourceConfig: componentConfig,
    basePath: basePath,
  };

  await generateComponent(context);

  await saveComponentConfig(componentConfig, basePath);
};

/**
 *
 * @param pageConfig
 * @param component
 * @param basePath
 */
export const addComponentToPage = async (config: PageComponentConfig, basePath: string) => {
  const isConfigValid = pageComponentConfigValidate(config);

  if (!isConfigValid && pageComponentConfigValidate.errors)
    throw pageComponentConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const context: RenderContext<PageComponentConfig> = {
    resourceConfig: config,
    basePath: basePath,
  };
  await updateAndRenderPage(context);
};

export const addProjectToWorkspace = async (config: ProjectWorkspace, basePath: string) => {
  const workspaceConfig = await mapProjectToWorkspace(config, basePath);

  await addProjectsToWorkspace(workspaceConfig, basePath);
};

export const updateProjectToWorkspace = async (config: ProjectWorkspace, basePath: string) => {
  const workspaceConfig = await updateProjectInWorkspace(config, basePath);

  await addProjectsToWorkspace(workspaceConfig, basePath);
};

export const removeProjectFromWorkspace = async (projectId: string, basePath: string) => {
  const workspaceConfig = await removeProjectInWorkspace(projectId, basePath);

  await addProjectsToWorkspace(workspaceConfig, basePath);
};

export const addServiceToWorkspace = async (config: ServiceWorkspace, basePath: string) => {
  const workspaceConfig = await mapServiceToWorkspace(config, basePath);

  await addProjectsToWorkspace(workspaceConfig, basePath);
};

export const updateServiceToWorkspace = async (config: ServiceWorkspace, basePath: string) => {
  const workspaceConfig = await updateServiceInWorkspace(config, basePath);

  await addProjectsToWorkspace(workspaceConfig, basePath);
};

export const removeServiceFromWorkspace = async (serviceId: string, basePath: string) => {
  const workspaceConfig = await removeServiceInWorkspace(serviceId, basePath);

  await addProjectsToWorkspace(workspaceConfig, basePath);
};

/**
 * Add projects to a workspace by validating configuration, checking directory status,
 * and creating necessary files (.env and igrp-compose.yaml).
 *
 * @async
 * @function addProjectsToWorkspace
 * @param {WorkspaceProjectsConfig} baseConfig - The base configuration object for the workspace.
 * @param {string} basePath - The base path where the workspace directories and files will be created.
 *
 * @throws {Error} Throws an error if:
 * - The base configuration is invalid or has validation errors (`ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG`).
 * - The base path is not provided (`ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG`).
 *
 * @returns {Promise<void>} A promise that resolves when the workspace has been successfully initialized.
 *
 */
const addProjectsToWorkspace = async (
  baseConfig: WorkspaceProjectsConfig,
  basePath: string,
): Promise<void> => {
  if (!basePath) throw ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG;

  const context: RenderContext<WorkspaceProjectsConfig, WorkspaceProjectsConfig> = {
    resourceConfig: baseConfig,
    basePath,
  };

  /**
   * Generates the environment files and compose file
   */
  await generateWorkspaceFiles(context);

  await saveBaseWorkspaceFileConfig(baseConfig, basePath);
};

export const saveCustomWorkspaceComposeFile = async (yaml: object, basePath: string) => {
  await saveWorkspaceComposeFile(yaml, basePath);
};

export const deleteElement = async (config: DeleteConfig, basePath: string) => {
  const valid = deleteValidation(config);

  if (!valid && deleteValidation.errors) {
    throw deleteValidation.errors;
  }

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const context: RenderContext<DeleteConfig> = {
    resourceConfig: config,
    basePath,
  };

  await deleteElementConfig(context);
};

export const initComponents = async () => {
  try {
    registerAllComponents();
    console.log(`✅ Registered components`);
  } catch (error) {
    console.error(`❌ Failed to load components`, error);
  }
};

export const initServices = async () => {
  try {
    registerAllServices();
    console.log(`✅ Registered Docker services`);
  } catch (error) {
    console.error(`❌ Failed to load Docker services`, error);
  }
};

export const registerComponents = (config: ComponentRegistrationConfig) => {
  const isConfigValid = componentRegistrationValidate(config);

  if (!isConfigValid && componentRegistrationValidate.errors)
    throw componentRegistrationValidate.errors;

  config.components.forEach((component) =>
    register(component.name, (e) => defaultModule.register(e, component)),
  );
};

export const registerServices = (config: DockerServiceRegistrationConfig) => {
  const isConfigValid = dockerServiceRegistrationValidate(config);

  if (!isConfigValid && dockerServiceRegistrationValidate.errors)
    throw dockerServiceRegistrationValidate.errors;

  config.services.forEach((service) =>
    registerService(service.name, (e) => defaultServiceModule.register(e, service)),
  );
};

export const loadRegistry = () => {
  return registryAsObject();
};

export const loadServiceRegistry = () => {
  return dockerRegistryAsObject();
};

/**
 * Loads and parses the Payload configuration from the given base path.
 *
 * @param {string} basePath - The root path of the target project.
 * @returns {Promise<PayloadConfig>} The structured JSON output.
 */
export async function loadPayloadMetadata(basePath: string): Promise<PayloadConfig> {
  const configPath = path.join(basePath, `${DIRECTORIES.APP}/${COMMON_FILES.PAYLOAD_FILE}`);
  const resolvedConfig = await loadPayloadConfig(configPath);
  return await parsePayloadConfig(resolvedConfig, basePath);
}