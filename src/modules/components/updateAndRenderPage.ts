import { generatePage } from '../page/generatePage';
import { Component, PageConfig } from '../../interfaces/types';
import { RenderContext } from '../../interfaces/types';
import { addComponentToPageConfig } from './addComponentToPageConfig';

/**
 * 
 * @param component 
 * @param context 
 */
export const updateAndRenderPage = async (components: Component[], context: RenderContext<PageConfig>) => {
  
  const updatedPageConfig = await addComponentToPageConfig(components, context);
  const componentsToImport = uniquesImports(components);

  const updateContext: RenderContext<PageConfig> = {
    ...context,
    resourceConfig: updatedPageConfig,
    velzonImports: componentsToImport
  }  

  await generatePage(updateContext);
};

const uniquesImports = (components: Component[]) => {
  let componentsToImport: string [] =[]

  components.forEach(comp => {
    comp.Row.forEach(row => {
      row.Col.forEach(col => {
        componentsToImport.push(col.componentName);
      });
    });
  });

  return [...new Set(componentsToImport)];
}