import fs from 'fs-extra';
import { ComponentConfig, RenderContext } from '../../interfaces/types';
import { getComponentConfigPath, getComponentPath } from '../../utils/helpers';

/**
 *
 * @param context
 */
export const deleteComponentConfig = async (context: RenderContext<ComponentConfig, ComponentConfig>) => {
  const componentConfigPath = getComponentConfigPath(context);
  const componentPath = getComponentPath(context);

  if (await fs.pathExists(componentConfigPath)) await fs.rm(componentConfigPath, { recursive: true });

  if (await fs.pathExists(componentPath)) {
    await fs.rm(componentPath, { recursive: true });
  }
};
