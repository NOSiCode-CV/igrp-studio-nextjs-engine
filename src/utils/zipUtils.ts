import fs from 'fs-extra';
import { RenderContext } from '@/interfaces/types';

const JSZip = require('jszip');

export const extractZipFile = (filePath: string, context: RenderContext<any, any>) => {
  try {
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;

      JSZip.loadAsync(data).then((zip: any) => {
        Object.keys(zip.files).forEach((filename) => {
          zip.files[filename].async('nodebuffer').then((content: any) => {
            if(filename.includes('.')) fs.writeFile(`${context.basePath}/${filename}`, content);
          });
        });
      });
    });
  } catch (e) {
    console.error("Error on extracting: ", e)
  }
}