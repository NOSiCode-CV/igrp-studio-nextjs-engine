import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { ProcessConfig } from '../../interfaces/types';
import { DIRECTORIES, EXTENSIONS } from '../../utils/constants';

/**
 * Saves the process configuration to a JSON file in the specified directory.
 *
 * @async
 * @function saveProcessConfig
 * @param {ProcessConfig} processConfig - The configuration object for the process to be saved.
 * @param {string} basePath - The base directory path where the process configuration file will be saved.
 * 
 * @throws {Error} Throws an error if there is a problem saving the file (handled by `saveToFile`).
 * 
 * @returns {Promise<void>} A promise that resolves when the process configuration has been successfully saved.
 ```
 */
export const saveProcessConfig = async (processConfig: ProcessConfig, basePath: string) => {
  
  const processConfigOutputPath = path.join(
    basePath,
    DIRECTORIES.IGRPSTUDIO_PROCESS,
    processConfig.name,
    `${processConfig.name}${EXTENSIONS.JSON}`,
  );
  
  await saveToFile(JSON.stringify(processConfig), processConfigOutputPath, true, DIRECTORIES.IGRPSTUDIO_PROCESS, processConfig.id, basePath, EXTENSIONS.JSON);
};
