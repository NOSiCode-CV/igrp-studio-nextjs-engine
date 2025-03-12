//import prettier from '@prettier/sync';
import { Layout } from '../interfaces/types';
import { getComponent } from '../components';

export const renderLayout = function (config: Layout, parent?: Layout): string {
  if (!config.componentName) return '';

  let str: string = ""

  const component = getComponent(config.componentName)

  if(!component) return `<div className="text-sm font-medium text-gray-700">${config.componentName}</div>`

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