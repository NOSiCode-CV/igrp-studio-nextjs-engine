import { RenderContext } from '@/interfaces/types';

import AdmZip from 'adm-zip';
import path from "path";
import fs from "fs/promises";

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
  try {
    const zipPath = path.resolve("base_app.zip"); // Ensure absolute path to the ZIP file
    const outputPath = path.resolve(context.basePath); // Ensure absolute output path

    // Ensure the output directory exists
    await fs.mkdir(outputPath, { recursive: true });

    // Extract the ZIP file
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(outputPath, true);

    console.log(`Extraction completed successfully to: ${outputPath}`);
  } catch (error) {
    console.error("Error extracting base_app.zip:", error);
    throw error;
  }
};
