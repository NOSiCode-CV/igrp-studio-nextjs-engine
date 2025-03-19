import fs from 'fs-extra';
import path, { dirname, join } from 'path';
import { DIRECTORIES, ERROR_MESSAGE, EXTENSIONS } from '../../utils/constants';
import { getDirectoryPath, loadConfig, loadConfigSync } from '../../utils/helpers';
import { ComponentConfig, PageConfig } from '../../interfaces/types';

/**
 * Saves the rendered template into the specified file. It will create the dir if it does not exist.
 * @param {string} content - The content to save in the file.
 * @param {string} outputPath - The output path where the content will be saved.
 * @param {boolean} override - Overrides the file if true
 * @param {string | undefined} type - The type of the element to be saved
 * @param {string | undefined} id - The element's identifier
 * @param {string | undefined} module - The element's module
 * @param {string | undefined} basePath - The application base path
 * @param {string} extension - The file extension
 * @throws {Error} - Throws an error if the content or output path is invalid.
 */
export const saveToFile = async (content: string, outputPath: string, override: boolean = true, type: (string | undefined) = undefined, id: (string | undefined) = undefined, basePath: (string | undefined) = undefined, extension: string = EXTENSIONS.TSX) => {
  const exists = (await fs.pathExists(outputPath));
  if (!content) throw ERROR_MESSAGE.INVALID_APP_CONFIG;
  if (!outputPath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;
  if (!override && exists) return;

  if(type && id) {
    if(!basePath) throw ERROR_MESSAGE.INVALID_APP_CONFIG;
    if(type === DIRECTORIES.PAGES || type === DIRECTORIES.IGRPSTUDIO_PAGES) {
      const pages: PageConfig[] = await loadConfig(path.join(basePath, DIRECTORIES.IGRPSTUDIO_PAGES));
      const page = pages.find((it) => it.id === id);
      if (page) {
        let sourcePath;
        if(extension === EXTENSIONS.JSON)
          sourcePath = join(getDirectoryPath(outputPath), page.pageName.concat(extension));
        else {
          sourcePath = join(
            getDirectoryPath(getDirectoryPath(outputPath)),
            page.pageName.toLowerCase(),
          );
        }

        if(sourcePath != outputPath && sourcePath != getDirectoryPath(outputPath)) {
          await fs.remove(sourcePath);
        }

      }

    } else if(type === DIRECTORIES.COMPONENTS || type === DIRECTORIES.IGRPSTUDIO_COMPONENTS) {
      const components: ComponentConfig[] = await loadConfig(path.join(basePath, DIRECTORIES.IGRPSTUDIO_COMPONENTS));
      const component = components.find((it) => it.id === id);
      if (component) {
        let sourcePath;
        if(extension === EXTENSIONS.JSON)
          sourcePath = join(getDirectoryPath(outputPath), component.name.concat(extension));
        else {
          sourcePath = join(
            getDirectoryPath(outputPath),
            component.name.toLowerCase(),
          );
        }

        if(sourcePath != outputPath && sourcePath != getDirectoryPath(outputPath)) {
          await fs.remove(sourcePath);
        }

      }

    }

  }

  await fs.mkdir(dirname(outputPath), {recursive: true});

  await fs.writeFile(outputPath, content, 'utf-8');

};


/**
 * Saves the rendered template into the specified file. It will create the dir if it does not exist.
 * @param {string} content - The content to save in the file.
 * @param {string} outputPath - The output path where the content will be saved.
 * @param {boolean} override - Overrides the file if true
 * @param {string | undefined} type - The type of the element to be saved
 * @param {string | undefined} id - The element's identifier
 * @param {string | undefined} module - The element's module
 * @param {string | undefined} basePath - The application base path
 * @param {string} extension - The file extension
 * @throws {Error} - Throws an error if the content or output path is invalid.
 */
export const saveToFileSync = (content: string, outputPath: string, override: boolean = true, type: (string | undefined) = undefined, id: (string | undefined) = undefined, basePath: (string | undefined) = undefined, extension: string = EXTENSIONS.TSX) => {
  const exists = (fs.pathExistsSync(outputPath));
  if (!content) throw ERROR_MESSAGE.INVALID_APP_CONFIG;
  if (!outputPath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;
  if (!override && exists) return;

  if(type && id) {
    if(!basePath) throw ERROR_MESSAGE.INVALID_APP_CONFIG;
    if(type === DIRECTORIES.PAGES || type === DIRECTORIES.IGRPSTUDIO_PAGES) {
      const pages: PageConfig[] = loadConfigSync(path.join(basePath, DIRECTORIES.IGRPSTUDIO_PAGES));
      const page = pages.find((it) => it.id === id);
      if (page) {
        let sourcePath;
        if(extension === EXTENSIONS.JSON)
          sourcePath = join(getDirectoryPath(outputPath), page.pageName.concat(extension));
        else {
          sourcePath = join(
            getDirectoryPath(getDirectoryPath(outputPath)),
            page.pageName.toLowerCase(),
          );
        }

        if(sourcePath != outputPath && sourcePath != getDirectoryPath(outputPath)) {
          fs.removeSync(sourcePath);
        }

      }

    } else if(type === DIRECTORIES.COMPONENTS || type === DIRECTORIES.IGRPSTUDIO_COMPONENTS) {
      const components: ComponentConfig[] = loadConfigSync(path.join(basePath, DIRECTORIES.IGRPSTUDIO_COMPONENTS));
      const component = components.find((it) => it.id === id);
      if (component) {
        let sourcePath;
        if(extension === EXTENSIONS.JSON)
          sourcePath = join(getDirectoryPath(outputPath), component.name.concat(extension));
        else {
          sourcePath = join(
            getDirectoryPath(outputPath),
            component.name.toLowerCase(),
          );
        }

        if(sourcePath != outputPath && sourcePath != getDirectoryPath(outputPath)) {
          fs.removeSync(sourcePath);
        }

      }

    }

  }

  fs.mkdirSync(dirname(outputPath), {recursive: true});

  fs.writeFileSync(outputPath, content, 'utf-8');

};
