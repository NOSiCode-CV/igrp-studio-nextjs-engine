//import prettier from '@prettier/sync';
import { Layout } from '../interfaces/types';
import { getComponent } from '../components';

export const renderLayout = function (config: Layout): string {
  if (!config.componentName) return '';

  let str: string = ""

  const component = getComponent(config.componentName)

  if(!component) return `<div className="text-sm font-medium text-gray-700">${config.componentName}</div>`

  str += component.render(config, component)

  return str

  /*return prettier.format(str, {
    parser: 'angular'
  });*/

}