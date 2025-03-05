import { ERROR_MESSAGE } from './utils/constants';
import { appConfigValidate } from './schema/baseApp';
import { checkIfDirectoryIsEmpty } from './utils/helpers';
import { generatePage } from './modules/page/generatePage';
import { deletePageConfig } from './modules/page/deletePage';
import { savePageConfig } from './modules/page/savePageConfig';
import { generateService } from './modules/page/generateService';
import { saveFileConfig } from './modules/baseApp/saveBaseAppFiles';
import { saveBaseAppFileConfig } from './modules/baseApp/saveBaseAppConfig';
import { createAppDirectories } from './modules/baseApp/createAppDirectories';
import {
  AppConfig,
  RenderContext,
  PageConfig,
  PageMetaConfig,
  ComponentConfig,
  DeleteConfig, PageComponentConfig,
} from './interfaces/types';
import { savePagesMeta } from './modules/pageMeta/savePagesMeta';
import { pageConfigValidate } from './schema/pageConfig';
import { componentConfigValidate } from './schema/componentConfig';
import { saveComponentConfig } from './modules/components/saveComponentConfig';
import { generateComponent } from './modules/components/generateComponent';
import { getComponent, register } from './components';
import aspectModule from "./components/aspect"
import { deleteValidation } from './schema/deleteConfig';
import { deleteElementConfig } from './modules/delete/deleteElementConfig';
import { updateAndRenderPage } from '@/modules/components/updateAndRenderPage';
import { pageComponentConfigValidate } from '@/schema/pageComponentConfig';

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

  if (!isPageConfigValid && pageConfigValidate.errors) 
    throw pageConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const context: RenderContext<PageConfig> = {
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

  const context: RenderContext<ComponentConfig> = {
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
    register('aspect', aspectModule.register);
    console.log(`✅ Registered components`);
  } catch (error) {
    console.error(`❌ Failed to load components`, error);
  }
}

// for test purposes only
export const getOneComponent = (config: {name: string}) => {
  return getComponent(config.name)
}