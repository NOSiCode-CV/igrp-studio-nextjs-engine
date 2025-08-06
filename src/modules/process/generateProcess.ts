import { getProcessStepDir } from '../../utils/helpers';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { DIRECTORIES, ERROR_MESSAGE, TEMPLATES } from '../../utils/constants';
import { Layout, ProcessConfig, RenderContext } from '../../interfaces/types';
import { extractProcessSteps } from '../../helpers/componentPropertiesHelper';
import { isLayout } from '../page/generatePage';

/**
 *
 * @param context
 */
export const generateProcess = async (context: RenderContext<ProcessConfig, ProcessConfig>) => {

  const processSteps = extractProcessSteps(
    isLayout(context.resourceConfig.components)
      ? (context.resourceConfig.components.children ?? [])
      : [],
  );

  for (const step of processSteps) {

    const stepOutputPath = getProcessStepDir(context, step.tag)

    const process = await renderProcess(context, step);

    await saveToFile(process, stepOutputPath, true, DIRECTORIES.PROCESS, context.resourceConfig.id, context.basePath);
  }

};

/**
 *
 * @param context
 * @param step
 * @returns
 */
const renderProcess = async (context: RenderContext<ProcessConfig, ProcessConfig>, step: Layout) => {
  if (!context.resourceConfig) throw ERROR_MESSAGE.INVALID_PROCESS_CONFIG;

  const templateContext = { ...context, resourceConfig: { ...context.resourceConfig, name: step.tag, components: step } }

  console.log(templateContext)

  return await renderTemplate(TEMPLATES.COMPONENT, templateContext );
};
