//import prettier from '@prettier/sync';
import { Layout } from '../interfaces/types';
import { getComponent } from '../components';
import { renderServiceTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from './constants';

export const renderLayout = function (config: Layout, parent?: Layout): string {
  if (!config.componentName) return '';

  let str: string = ""

  const component = getComponent(config.componentName)

  if(!component) return renderServiceTemplate(TEMPLATES.UNREGISTERED_COMPONENT, { name: config.componentName })

  const componentParent = ((parent)? getComponent(parent.componentName) : undefined)

  if(component.maxChildren && config.children) {
    if (config.children.length > component.maxChildren) {
      throw Error(
        `The component ${config.componentName} allows only ${component.maxChildren} children.`,
      );
    }
  }
  
  str += component.render(config, component, parent, componentParent)

  return str

  /*return prettier.format(str, {
    parser: 'angular'
  });*/

}