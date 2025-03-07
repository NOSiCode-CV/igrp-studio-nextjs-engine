import { getComponentDir } from '../../utils/helpers';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { DIRECTORIES, ERROR_MESSAGE, TEMPLATES } from '../../utils/constants';
import { ComponentConfig, RenderContext } from '../../interfaces/types';

/**
 *
 * @param context
 */
export const generateComponent = async (context: RenderContext<ComponentConfig, ComponentConfig>) => {
  const component = await renderComponent(context);
  const componentOutputPath = getComponentDir(context);

  await saveToFile(component, componentOutputPath, true, DIRECTORIES.COMPONENTS, context.resourceConfig.id, context.basePath);
};

/**
 *
 * @param context
 * @returns
 */
const renderComponent = async (context: RenderContext<ComponentConfig, ComponentConfig>) => {
  if (!context.resourceConfig) throw ERROR_MESSAGE.INVALID_COMPONENT_CONFIG;

  return await renderTemplate(TEMPLATES.COMPONENT, context);
};
