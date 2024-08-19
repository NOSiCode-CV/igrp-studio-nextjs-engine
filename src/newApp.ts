import { AppConfig } from './interfaces/types';
import { RenderContext } from './interfaces/types';
import { createAppDirectories } from './modules/baseApp/createAppDirectories';
import { saveBaseAppFileConfig } from './modules/baseApp/saveBaseAppConfig';
import { saveFileConfig } from './modules/baseApp/saveBaseAppFiles';
import { appConfigValidate } from './schema/baseApp';
import { ERROR_MESSAGE } from './utils/constants';
import { checkIfDirectoryIsEmpty } from './utils/helpers';

export const newApp = async (baseConfig: AppConfig, basePath: string) => {
  const isBaseCofigValid = appConfigValidate(baseConfig);

  if (!isBaseCofigValid && appConfigValidate.errors) throw ERROR_MESSAGE.INVALID_APP_CONFIG;
  
  if (!basePath) throw ERROR_MESSAGE.INVALID_APP_CONFIG;

  if(!(await checkIfDirectoryIsEmpty(basePath)))
    throw ERROR_MESSAGE.DIRECTORY_ALREADY_IN_USE;

  await saveBaseAppFileConfig(baseConfig, basePath);

  const context: RenderContext = {
    resourceConfig: undefined, // On base API, there is no specific config.
    basePath,
    baseConfig
  }

  /**
   * Creates the folder structure needed for the APP.
   */
  await createAppDirectories(context);


  /**
   * Creates the configuration files
   */
  await saveFileConfig(context);
};
