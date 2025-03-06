import { RenderContext } from '@/interfaces/types';

import path from "path";
import AdmZip from 'adm-zip';
import fs from 'fs-extra';
import { BASE_APP_ZIP } from '../../utils/constants';

/**
 * Extracts the necessary application directories based on the template.
 *
 * @async
 * @function extractBaseApp
 * @param {RenderContext} context - An object containing the base path where the directories will be created.
 *
 * @returns {Promise<void>} A promise that resolves when all directories have been created.
 */
export const extractBaseApp = async (context: RenderContext): Promise<void> => {

  const zipPath = BASE_APP_ZIP; // Ensure absolute path to the ZIP file

  if(!fs.existsSync(zipPath)) throw Error(`The base app was not found ${zipPath}`)

  const outputPath = path.resolve(context.basePath); // Ensure absolute output path

  try {
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(outputPath, true);
    console.log(`Extraction completed successfully to: ${outputPath}`);
  } catch (error) {
    console.error("Error extracting base_app.zip:", error);
    throw error;
  }

};
