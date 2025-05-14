import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { PageConfig } from '../../interfaces/types';
import { updateMeta } from '../pageMeta/updatePageMeta';
import { DIRECTORIES, EXTENSIONS } from '../../utils/constants';

/**
 * Saves the page configuration to a JSON file in the specified directory.
 * 
 * @async
 * @function savePageConfig
 * @param {PageConfig} pageConfig - The configuration object for the page to be saved.
 * @param {string} basePath - The base directory path where the page configuration file will be saved.
 * 
 * @throws {Error} Throws an error if there is a problem saving the file (handled by `saveToFile`).
 * 
 * @returns {Promise<void>} A promise that resolves when the page configuration has been successfully saved.
 ```
 */
export const savePageConfig = async (pageConfig: PageConfig, basePath: string) => {
  
  const pageConfigOutputPath = path.join(
    basePath,
    DIRECTORIES.IGRPSTUDIO_PAGES,
    `${pageConfig.pageName}${EXTENSIONS.JSON}`,
  );
  
  await saveToFile(JSON.stringify(pageConfig), pageConfigOutputPath, true, DIRECTORIES.IGRPSTUDIO_PAGES, pageConfig.id, basePath, EXTENSIONS.JSON);
  //await updateMeta(basePath)
};
