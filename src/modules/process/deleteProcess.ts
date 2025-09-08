import fs from 'fs-extra';
import { ProcessConfig, RenderContext } from '../../interfaces/types';
import { getProcessConfigPath, getProcessPath } from '../../utils/helpers';

/**
 *
 * @param context
 */
export const deleteProcessConfig = async (context: RenderContext<ProcessConfig, ProcessConfig>) => {
  const processConfigPath = getProcessConfigPath(context);
  const processPaths = getProcessPath(context);

  if (await fs.pathExists(processConfigPath)) await fs.rm(processConfigPath, { recursive: true });

  for (const processPath of processPaths) {
    if (await fs.pathExists(processPath)) {
      await fs.rm(processPath, { recursive: true });
    }
  }

};
