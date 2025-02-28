import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { ComponentConfig } from '../../interfaces/types';
import { DIRECTORIES, EXTENSIONS } from '../../utils/constants';

/**
 * Saves the component configuration to a JSON file in the specified directory.
 *
 * @async
 * @function saveComponentConfig
 * @param {ComponentConfig} componentConfig - The configuration object for the component to be saved.
 * @param {string} basePath - The base directory path where the component configuration file will be saved.
 * 
 * @throws {Error} Throws an error if there is a problem saving the file (handled by `saveToFile`).
 * 
 * @returns {Promise<void>} A promise that resolves when the component configuration has been successfully saved.
 ```
 */
export const saveComponentConfig = async (componentConfig: ComponentConfig, basePath: string) => {
  
  const componentConfigOutputPath = path.join(
    basePath,
    DIRECTORIES.IGRPSTUDIO_COMPONENTS,
    `${componentConfig.name}${EXTENSIONS.JSON}`,
  );
  
  await saveToFile(JSON.stringify(componentConfig), componentConfigOutputPath);
};
