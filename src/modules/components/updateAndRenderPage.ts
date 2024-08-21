import { generatePage } from '../page/generatePage';
import { Component, PageConfig } from '../../interfaces/types';
import { RenderContext } from '../../interfaces/types';
import { addComponentToPageConfig } from './addComponentToPageConfig';

export const updateAndRenderPage = async (component: Component, context: RenderContext<PageConfig>) => {
  
  const updatedPageConfig = await addComponentToPageConfig(component, context);

  const updateContext: RenderContext<PageConfig> = {
    ...context,
    resourceConfig: updatedPageConfig
  } 

  console.log(updatedPageConfig)

  await generatePage(updateContext);
};

