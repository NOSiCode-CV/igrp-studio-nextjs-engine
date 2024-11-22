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
  const formRefs = formReferences(components);

  const updateContext: RenderContext<PageConfig> = {
    ...context,
    resourceConfig: updatedPageConfig,
    velzonImports: componentsToImport,
    formRefs: formRefs
  }  

  await generatePage(updateContext);
};

const uniquesImports = (components: Component[]) => {
  let componentsToImport: string [] =[]

  components.forEach(comp => {
    comp.Row.forEach(row => {
      row.Col.forEach(col => {
        col.components?.forEach(component => {
          componentsToImport.push(component.componentName);
          if(component.actions){
            component.actions.forEach(action => {
              componentsToImport.push(action.type);
            });
          }
        })
      });
    });
  });

  return [...new Set(componentsToImport)];
}

const formReferences = (components: Component[]) => {
  let formRefs: string [] = [];

  components.forEach(comp => {
    comp.Row.forEach(row => {
      row.Col.forEach(col => {
        col.components?.forEach(component => {
          if(component.componentName === 'FormLayout'){
            formRefs.push(component.id);
          }
        })
      });
    });
  });

  return formRefs;
}