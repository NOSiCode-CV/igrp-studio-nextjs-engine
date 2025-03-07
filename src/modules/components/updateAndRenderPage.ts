import { generatePage } from '../page/generatePage';
import { Component, ComponentConfig, PageComponentConfig, PageConfig } from '../../interfaces/types';
import { RenderContext } from '../../interfaces/types';
import { addComponentToPageConfig } from './addComponentToPageConfig';
import { generateComponent } from './generateComponent';

/**
 * 
 * @param component 
 * @param context 
 */
export const updateAndRenderPage = async (context: RenderContext<PageComponentConfig>) => {
  
  const updatedConfig = await addComponentToPageConfig(context);
  
  if (context.resourceConfig.type === 'page') {
    const updateContext: RenderContext<PageConfig, PageConfig> = {
      ...context,
      resourceConfig: updatedConfig,
    };

    await generatePage(updateContext);
  }

  if (context.resourceConfig.type === 'component') {
    const updateContext: RenderContext<ComponentConfig, ComponentConfig> = {
      ...context,
      resourceConfig: updatedConfig,
    };

    await generateComponent(updateContext);
  }

};