import fs from 'fs-extra';
import { ComponentConfig, RenderContext } from '../../interfaces/types';
import { getComponentConfigPath } from '../../utils/helpers';

/**
* Reads and returns the component configuration from a file on the file system.
*
* @param  context - The context that contains the information needed to locate the component configuration file.
* @returns - A promise that resolves to the component configuration, parsed from the JSON file.
*
* @throws {Error} - Throws an error if the configuration file cannot be read or if the content is not valid JSON.
*/
export const getComponentConfig = async (context: RenderContext<ComponentConfig, ComponentConfig>) => {
  const componentConfigPath = getComponentConfigPath(context);
  const componentConfigContent = await fs.readFile(componentConfigPath, 'utf8');

  return JSON.parse(componentConfigContent);
};
