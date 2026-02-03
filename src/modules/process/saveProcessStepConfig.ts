import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { ProcessStepConfig, RenderContext } from '../../interfaces/types';
import { DIRECTORIES, ERROR_MESSAGE, EXTENSIONS } from '../../utils/constants';
import { saveProcessConfig } from './saveProcessConfig';
import { loadProcessConfig, loadProcessStepConfig } from '../../utils/helpers';
import { generateProcessStep } from './generateProcessStep';

/**
 * Saves the process configuration to a JSON file in the specified directory.
 *
 * @async
 * @function saveProcessStepConfig
 * @param {ProcessStepConfig} processStepConfig - The configuration object for the process to be saved.
 * @param {string} basePath - The base directory path where the process configuration file will be saved.
 *
 * @throws {Error} Throws an error if there is a problem saving the file (handled by `saveToFile`).
 *
 * @returns {Promise<void>} A promise that resolves when the process configuration has been successfully saved.
 ```
 */
export const saveProcessStepConfig = async (
  processStepConfig: ProcessStepConfig,
  basePath: string,
) => {
  const processStepConfigOutputPath = path.join(
    basePath,
    DIRECTORIES.IGRPSTUDIO_PROCESS,
    processStepConfig.processKey,
    `${processStepConfig.key}${EXTENSIONS.JSON}`,
  );

  await saveToFile(
    JSON.stringify(processStepConfig),
    processStepConfigOutputPath,
    true,
    DIRECTORIES.IGRPSTUDIO_PROCESS,
    processStepConfig.id,
    basePath,
    EXTENSIONS.JSON,
  );

  // Update process version if necessary:
  const process = await loadProcessConfig(basePath, processStepConfig.processKey);

  if (!process) throw Error(ERROR_MESSAGE.INVALID_PROCESS_CONFIG);

  if (processStepConfig.processVersion != process.processVersion) {
    process.steps
      ?.filter((step) => step.name != processStepConfig.name)
      .forEach(async (step) => {
        const config = await loadProcessStepConfig(basePath, step.key, process);
        config.processVersion = processStepConfig.processVersion;
        console.log("Editando : ", config)
        await saveProcessStepConfig(config, basePath);

        const context: RenderContext<ProcessStepConfig, ProcessStepConfig> = {
          resourceConfig: processStepConfig,
          basePath: basePath,
        };

        await generateProcessStep(context);
      });
  }

  process.processVersion = processStepConfig.processVersion;
  // Ensure the process.steps array exists
  process.steps = process.steps ?? [];

  // Check if the step is already in the array by name
  const stepExists = process.steps.some((step) => step.name === processStepConfig.name);

  if (!stepExists) {
    process.steps.push({ id: processStepConfig.id, name: processStepConfig.name, key: processStepConfig.key });
  }

  await saveProcessConfig(process, basePath);
};
