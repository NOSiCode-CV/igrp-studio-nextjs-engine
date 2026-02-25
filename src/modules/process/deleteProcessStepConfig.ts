import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { ProcessStepConfig, RenderContext } from '../../interfaces/types';
import { DIRECTORIES, ERROR_MESSAGE, EXTENSIONS } from '../../utils/constants';
import { saveProcessConfig } from './saveProcessConfig';
import { loadProcessConfig, loadProcessStepConfig } from '../../utils/helpers';
import { generateProcessStep } from './generateProcessStep';
import fs from 'fs-extra';
import { saveProcessStepConfig } from './saveProcessStepConfig';

/**
 * Deletes the process configuration to a JSON file in the specified directory.
 *
 * @async
 * @function deleteProcessStepConfig
 * @param {ProcessStepConfig} processStepConfig - The configuration object for the process to be deleted.
 * @param {string} basePath - The base directory path where the process configuration file will be deleted.
 *
 * @throws {Error} Throws an error if there is a problem saving the file (handled by `deleteToFile`).
 *
 * @returns {Promise<void>} A promise that resolves when the process configuration has been successfully deleted.
 ```
 */
export const deleteProcessStepConfig = async (
  processStepConfig: ProcessStepConfig,
  basePath: string,
) => {
  const processStepConfigOutputPath = path.join(
    basePath,
    DIRECTORIES.IGRPSTUDIO_PROCESS,
    processStepConfig.processKey,
    `${processStepConfig.key}${EXTENSIONS.JSON}`,
  );

  if (await fs.pathExists(processStepConfigOutputPath))
    await fs.rm(processStepConfigOutputPath, { recursive: true });

  // Update process version if necessary:
  const process = await loadProcessConfig(basePath, processStepConfig.processKey);

  if (!process || !process.steps) throw Error(ERROR_MESSAGE.INVALID_PROCESS_CONFIG);

  const stepIndex = process.steps?.findIndex((step) => step.name = processStepConfig.name);

  if (stepIndex === -1) {
    throw new Error(`Step with name "${processStepConfig.name}" not found in process`);
  }

  process.steps.splice(stepIndex, 1);

  process.steps
    .forEach(async (step) => {
      const config = await loadProcessStepConfig(basePath, step.key, process);
      config.processVersion = 'v' + (parseInt(config.processVersion.replace('v', '')) + 1);
      await saveProcessStepConfig(config, basePath);

      const context: RenderContext<ProcessStepConfig, ProcessStepConfig> = {
        resourceConfig: processStepConfig,
        basePath: basePath,
      };

      await generateProcessStep(context);
    });

  process.processVersion = 'v' + (parseInt(process.processVersion.replace('v', '')) + 1);
  await saveProcessConfig(process, basePath);
};
