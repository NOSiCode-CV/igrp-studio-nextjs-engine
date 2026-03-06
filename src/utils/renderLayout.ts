//import prettier from '@prettier/sync';
import { Layout } from '../interfaces/types';
import { getComponent } from '../components';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from './constants';

export const renderLayout = function (config: Layout, parent?: Layout): string {
  if (!config.componentName) return '';

  let str: string = ""

  const component = getComponent(config.componentName)
  if (parent) {
    const parentComponent = getComponent(parent.componentName);
    if (parentComponent) {
      const isHandledByTemplate = Array.from(parentComponent.acceptedChildren)
        .some(child => child.name === config.componentName && !child.isDefault);
      if (isHandledByTemplate) return '';  // ignora — o pai trata este filho no seu template
    }
  }

  if(!component) return renderSyncTemplate(TEMPLATES.UNREGISTERED_COMPONENT, { name: config.componentName })

  const componentParent = ((parent)? getComponent(parent.componentName) : undefined)

  if(component.maxChildren && config.children) {
    if (config.children.length > component.maxChildren) {
      throw Error(
        `The component ${config.componentName} allows only ${component.maxChildren} children.`,
      );
    }
  }

  const rendered = component.render(config, component, parent, componentParent)

  const visibilityRules = config.rules?.filter((it) => it.type === 'visibility') ?? []

  str += config.rules && visibilityRules.length > 0 ? `{ ${visibilityRules.map((it) => it.condition)[0]} && (` + rendered + ')}' : rendered

  return str

  /*return prettier.format(str, {
    parser: 'angular'
  });*/

}