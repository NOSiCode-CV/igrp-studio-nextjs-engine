import { RenderContext } from '@/interfaces/types';
import fs from 'fs-extra';
import { BASE_APP_ZIP } from '../../utils/constants';

const JSZip = require('jszip');

/*export const extractBaseApp = async (context: RenderContext): Promise<void> => {

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
*/

export const extractBaseApp = async (context: RenderContext): Promise<void> => {
  try {
    fs.readFile(BASE_APP_ZIP, (err, data) => {
      if (err) throw err;

      JSZip.loadAsync(data).then((zip: any) => {
        Object.keys(zip.files).forEach((filename) => {
          zip.files[filename].async('nodebuffer').then((content: any) => {
            fs.writeFileSync(`${context.basePath}/${filename}`, content);
          });
        });
      });
    });
  } catch (e) {
    console.error("Error on extracting: ", e)
  }
}