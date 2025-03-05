//import prettier from '@prettier/sync';
import { Layout } from '../interfaces/types';
import { getComponent } from '../components';

export const renderLayout = function (config: Layout): string {
  if (!config.componentName) return '';

  const component = getComponent(config.componentName)

  console.log("Config: ", config)
  console.log("Component name: ", config.componentName)
  console.log("Renderer: ", typeof component.renderer)

  const str = component.render(config)

  console.log("Rendered!: ", config.componentName)

  if (config.children && config.children.length > 0) {
    config.children.map((child) => renderLayout(child)).join('');
  }

  return str

  /*return prettier.format(str, {
    parser: 'angular'
  });*/

};