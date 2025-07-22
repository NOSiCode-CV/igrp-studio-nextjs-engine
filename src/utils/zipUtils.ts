import fs from 'fs-extra';
import { RenderContext } from '../interfaces/types';
import path from 'path';
import * as https from 'https';
import * as http from 'http';

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

/**
 * Downloads a ZIP file from a URL and extracts its contents into the context's base path.
 * Automatically creates necessary directories.
 */
export const extractZipFromUrl = async (zipUrl: string, context: RenderContext) => {
  try {
    const data = await downloadZip(zipUrl);
    const zip = await JSZip.loadAsync(data);

    await Promise.all(
      Object.keys(zip.files).map(async (filename) => {
        const entry = zip.files[filename];
        const destPath = path.join(context.basePath, filename);

        if (entry.dir) {
          await fs.promises.mkdir(destPath, { recursive: true });
        } else {
          await fs.promises.mkdir(path.dirname(destPath), { recursive: true });
          const content = await entry.async('nodebuffer');
          await fs.promises.writeFile(destPath, content);
        }
      })
    );
  } catch (error) {
    console.error('Error extracting ZIP:', error);
  }
};

/**
 * Downloads a file from the given URL and returns it as a buffer.
 */
const downloadZip = (url: string): Promise<Buffer> => {
  const client = url.startsWith('https') ? https : http;

  return new Promise((resolve, reject) => {
    client.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get ZIP file. Status code: ${res.statusCode}`));
      }

      const data: Uint8Array[] = [];
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
};
