import fs from 'fs-extra';
import { PageConfig, RenderContext } from '../../interfaces/types';
import { getPageConfigPath } from '../../utils/helpers';

/**
* Reads and returns the page configuration from a file on the file system.
*
* @param  context - The context that contains the information needed to locate the page configuration file.
* @returns - A promise that resolves to the page configuration, parsed from the JSON file.
*
* @throws {Error} - Throws an error if the configuration file cannot be read or if the content is not valid JSON.
*/
export const getPageConfig = async (context: RenderContext<PageConfig, PageConfig>) => {
  const pageConfigPath = getPageConfigPath(context);
  const PageCOnfigContent = await fs.readFile(pageConfigPath, 'utf8');

  return JSON.parse(PageCOnfigContent);
};
