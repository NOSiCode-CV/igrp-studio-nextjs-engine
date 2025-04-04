import { getActionDir } from '../../utils/helpers';
import { saveToFileSync } from '../common/saveToFile';
import { renderServiceTemplate } from '../common/renderTemplate';
import { DIRECTORIES, ERROR_MESSAGE, TEMPLATES } from '../../utils/constants';
import { ActionConfig, RenderContext } from '../../interfaces/types';

/**
 *
 * @param context
 * @param isComponent
 */
export const generateAction = (context: RenderContext<ActionConfig, ActionConfig>, isComponent: boolean = false) => {
  const component = renderAction(context);
  const componentOutputPath = getActionDir(context, isComponent);

  saveToFileSync(component, componentOutputPath, true, DIRECTORIES.COMPONENTS, context.resourceConfig.id, context.basePath);
};

/**
 *
 * @param context
 * @returns
 */
const renderAction = (context: RenderContext<ActionConfig, ActionConfig>) => {
  if (!context.resourceConfig) throw ERROR_MESSAGE.INVALID_ACTION_CONFIG;

  return renderServiceTemplate(TEMPLATES.ACTION, context);
};
