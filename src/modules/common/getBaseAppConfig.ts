import path from 'path';
import fs from 'fs-extra';
import { AppConfig } from '../../interfaces/types';
import { COMMON_FILES, DIRECTORIES, ERROR_MESSAGE } from '../../utils/constants';

/**
 * Reads and returns the base application configuration from a JSON file.
 * 
 * @async
 * @function baseAppConfig
 * @param {string} basePath - The base directory path where the configuration file is located.
 * 
 * @throws {Error} Throws an error if the configuration is invalid, i.e., if `type` or `name` is missing from the config file.
 * 
 */
export const baseAppCOnfig = async (basePath: string): Promise<AppConfig> => {
  const appConfig = await fs.readJson(path.join(basePath, DIRECTORIES.IGRPSTUDIO, COMMON_FILES.BASE_APP));
  
  if(!appConfig?.type || !appConfig?.name) throw ERROR_MESSAGE.INVALID_APP_CONFIG

  return <AppConfig> appConfig;
}