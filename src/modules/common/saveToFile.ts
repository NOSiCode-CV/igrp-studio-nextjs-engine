import fs from 'fs-extra';
import { dirname } from 'path';
import { ERROR_MESSAGE } from '../../utils/constants';

/**
 * Saves the provided content to a file at the specified output path.
 * 
 * @async
 * @function saveToFile
 * @param {string} content - The content to be saved in the file. Must be a string.
 * @param {string} outputPath - The full path where the file will be saved.
 * 
 * @throws {Error} Throws an error if the content or output path is invalid. Error messages are defined in `ERROR_MESSAGE`.
 *  
 */
export const saveToFile = async (content: string, outputPath: string, override: boolean = true) => {
  if (!content) throw ERROR_MESSAGE.INVALID_APP_CONFIG;
  if (!outputPath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;
  if (!override && (await fs.pathExists(outputPath))) return

  await fs.mkdir(dirname(outputPath), {recursive: true});

  await fs.writeFile(outputPath, content, 'utf-8');

};
