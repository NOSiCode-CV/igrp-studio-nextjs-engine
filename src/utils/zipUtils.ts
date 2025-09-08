import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import { RenderContext } from '../interfaces/types';

const JSZip = require('jszip');

const API_URL = 'https://sonatype.nosi.cv/service/rest/v1/assets?repository=igrp-templates';
const TARGET_DIR = '@igrp/framework-next';
const TARGET_FILE = 'igrp-next-template.zip';

async function getLatestUploadedTemplate(): Promise<string | undefined> {
  try {
    const response = await axios.get(API_URL);
    const items = response.data.items;

    const filtered = items
      .filter((item: any) =>
        item.path.startsWith(`${TARGET_DIR}/`) &&
        item.path.endsWith(`/${TARGET_FILE}`) &&
        item.lastModified
      )
      .map((item: any) => ({
        version: item.path.split('/')[2], // Extract version from path
        lastModified: new Date(item.lastModified),
        downloadUrl: item.downloadUrl,
      }));

    if (filtered.length === 0) {
      console.log('No valid template files found.');
      return undefined;
    }

    // Sort by lastModified descending
    filtered.sort((a: any, b: any) => b.lastModified - a.lastModified);

    const latest: any = filtered[0];
    console.log('Latest Uploaded Version:', latest.version);
    console.log('Upload Date:', latest.lastModified.toISOString());
    console.log('Download URL:', latest.downloadUrl);
    return latest.downloadUrl;
  } catch (error) {
    console.error('Error fetching assets:', error);
  }
}

export const extractZipFile = (filePath: string, context: RenderContext<any, any>) => {
  try {
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;

      JSZip.loadAsync(data).then((zip: any) => {
        Object.keys(zip.files).forEach((filename) => {
          zip.files[filename].async('nodebuffer').then((content: any) => {
            if (filename.includes('.')) fs.writeFile(`${context.basePath}/${filename}`, content);
          });
        });
      });
    });
  } catch (e) {
    console.error("Error on extracting: ", e);
  }
};

/**
 * Downloads a ZIP file from a URL and extracts its contents into the context's base path.
 * Automatically creates necessary directories.
 * If the initial URL fails, retries by replacing the version with a fallback version.
 */
export const extractZipFromUrl = async (context: RenderContext) => {
  const fallbackVersion = '0.0.1-alpha.0';

  const zipUrl = await getLatestUploadedTemplate();

  if (!zipUrl) { throw Error("No template available for the current version, try again later.")}

  const tryDownloadAndExtract = async (url: string) => {
    const data = await downloadZip(url);
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
  };

  try {
    await tryDownloadAndExtract(zipUrl);
  } catch (error) {
    try {
      const fallbackUrl = zipUrl.replace(
        context.baseConfig?.version ?? fallbackVersion,
        fallbackVersion
      );
      await tryDownloadAndExtract(fallbackUrl);
    } catch (fallbackError) {
      console.error('Error extracting ZIP:', fallbackError);
    }
  }
};

/**
 * Downloads a file from the given URL and returns it as a buffer using axios.
 */
const downloadZip = async (url: string): Promise<Buffer> => {
  const response = await axios.get(url, {
    responseType: 'arraybuffer',
    validateStatus: (status) => status >= 200 && status < 300,
  });
  return Buffer.from(response.data);
};
