import { getComponentDir } from '../../utils/helpers';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { ERROR_MESSAGE, TEMPLATES } from '../../utils/constants';
import { ComponentConfig, RenderContext } from '../../interfaces/types';

/**
 *
 * @param context
 */
export const generateComponent = async (context: RenderContext<ComponentConfig>) => {
  const component = await renderComponent(context);
  const componentOutputPath = getComponentDir(context);

  await saveToFile(component, componentOutputPath);
};

/**
 *
 * @param context
 * @returns
 */
const renderComponent = async (context: RenderContext<ComponentConfig>) => {
  if (!context.resourceConfig) throw ERROR_MESSAGE.INVALID_COMPONENT_CONFIG;

  return await renderTemplate(TEMPLATES.COMPONENT, context);
};
