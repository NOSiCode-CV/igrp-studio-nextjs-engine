import fs from 'fs-extra';
import { ProcessConfig, RenderContext } from '../../interfaces/types';
import { getProcessConfigPath } from '../../utils/helpers';

/**
* Reads and returns the process configuration from a file on the file system.
*
* @param  context - The context that contains the information needed to locate the process configuration file.
* @returns - A promise that resolves to the process configuration, parsed from the JSON file.
*
* @throws {Error} - Throws an error if the configuration file cannot be read or if the content is not valid JSON.
*/
export const getProcessConfig = async (context: RenderContext<ProcessConfig, ProcessConfig>) => {
  const processConfigPath = getProcessConfigPath(context);
  const processConfigContent = await fs.readFile(processConfigPath, 'utf8');

  return JSON.parse(processConfigContent);
};
