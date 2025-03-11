import { Layout } from '../interfaces/types';
import { capitalize, extractComponentData, replaceTemplate } from '../utils/helpers';
import { Component } from '../components';

export function resolveServiceInterfaceMethods(config: Layout, registry: Record<string, Component>): string {

  if(!config) return ''

  const methodDefinitions = new Set<string>();

  const baseComponent = registry[config.componentName]

  if(baseComponent) {
    const id = config.id
    if(baseComponent.serviceMethods) baseComponent.serviceMethods.forEach((method) => {
      methodDefinitions.add(replaceTemplate(method, { id }))
    })
    config.children?.forEach((child) => methodDefinitions.add(resolveServiceInterfaceMethods(child, registry)))
  }

  const componentConfigs: Layout[] | undefined = config.children?.filter((it) => it.properties?.actions);
  // Define Table action methods
  if(componentConfigs) {
    componentConfigs.forEach((c) => {
      c.properties?.actions.forEach((e: any) =>
        methodDefinitions.add(
          `${e.id}: ((data?: Record<string, any>) => void);`,
        ),
      );
    })
  }

  return Array.from(methodDefinitions).join('\n  ');

}