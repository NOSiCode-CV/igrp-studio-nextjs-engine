import { generatePage } from '../page/generatePage';
import { ColumnLayout, Component, PageConfig } from '../../interfaces/types';
import { RenderContext } from '../../interfaces/types';
import { addComponentToPageConfig } from './addComponentToPageConfig';
import { generateService } from '../page/generateService';

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
  await generateService(updateContext)
};

const uniquesImports = (components: Component[]) => {
  let componentsToImport: string [] =[]

  components.forEach(comp => {
    comp.Row.forEach(row => {
      row.Col.forEach(col => {
        componentsToImport.push(col.componentName);
        if (col.fields && col.fields.length > 0) {
          col.fields.forEach(field => {
            componentsToImport.push(`${field.type}Props`);
          });
        }
        componentsToImport.push(`${col.componentName}Fields`);
        componentsToImport.push(`${col.componentName}Props`);
        componentsToImport.push(`${col.componentName}ActionFunction`);
        componentsToImport.push(`${col.componentName}PopulateFunction`);
      });
    });
  });

  return [...new Set(componentsToImport)];
}