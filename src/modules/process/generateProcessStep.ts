import { getProcessStepDir, replaceTemplate } from '../../utils/helpers';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { DIRECTORIES, ERROR_MESSAGE, TEMPLATES } from '../../utils/constants';
import { ProcessStepConfig, RenderContext } from '../../interfaces/types';

/**
 *
 * @param context
 */
export const generateProcessStep = async (context: RenderContext<ProcessStepConfig, ProcessStepConfig>) => {

  const stepOutputPath = getProcessStepDir(context)

  const process = await renderProcess(context);

  await saveToFile(process, stepOutputPath, true, replaceTemplate(DIRECTORIES.PROCESS_STEP, { name: context.resourceConfig.processKey }), context.resourceConfig.id, context.basePath);

};

/**
 *
 * @param context
 * @returns
 */
const renderProcess = async (context: RenderContext<ProcessStepConfig, ProcessStepConfig>) => {
  if (!context.resourceConfig) throw ERROR_MESSAGE.INVALID_PROCESS_STEP_CONFIG;

  return await renderTemplate(TEMPLATES.COMPONENT, context );

};
