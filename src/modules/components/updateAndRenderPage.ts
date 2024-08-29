import { generatePage } from '../page/generatePage';
import { Component, PageConfig } from '../../interfaces/types';
import { RenderContext } from '../../interfaces/types';
import { addComponentToPageConfig } from './addComponentToPageConfig';
import { generateService } from '../page/generateService';

/**
 * 
 * @param component 
 * @param context 
 */
export const updateAndRenderPage = async (component: Component[], context: RenderContext<PageConfig>) => {
  
  const updatedPageConfig = await addComponentToPageConfig(component, context);

  const updateContext: RenderContext<PageConfig> = {
    ...context,
    resourceConfig: updatedPageConfig
  }

  await generatePage(updateContext);
  await generateService(updateContext)
};

