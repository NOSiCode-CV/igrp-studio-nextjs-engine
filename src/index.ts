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
import { updateAndRenderPage } from './modules/components/updateAndRenderPage';
import { AppConfig, RenderContext, Component, PageConfig, PageMetaConfig, ComponentConfig } from './interfaces/types';
import { savePagesMeta } from './modules/pageMeta/savePagesMeta';
import { pageConfigValidate } from './schema/pageConfig';
import { componentConfigValidate } from './schema/componentConfig';
import { saveComponentConfig } from './modules/components/saveComponentConfig';
import { generateComponent } from './modules/components/generateComponent';

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

 
  await savePageConfig(pageConfig, basePath);

  const context: RenderContext<PageConfig> = {
    resourceConfig: pageConfig,
    basePath: basePath,
  };
  
  await generatePage(context);
  await generateService(context);

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

  await saveComponentConfig(componentConfig, basePath);

  const context: RenderContext<ComponentConfig> = {
    resourceConfig: componentConfig,
    basePath: basePath,
  };

  await generateComponent(context);

};

/**
 *
 * @param pageConfig
 * @param basePath
 */
export const deletePage = async (pageConfig: PageConfig, basePath: string) => {
  const isPageConfigValid = pageConfigValidate(pageConfig);

  if (!isPageConfigValid && pageConfigValidate.errors)
    throw pageConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const context: RenderContext<PageConfig> = {
    resourceConfig: pageConfig,
    basePath,
  }

  await deletePageConfig(context)
};