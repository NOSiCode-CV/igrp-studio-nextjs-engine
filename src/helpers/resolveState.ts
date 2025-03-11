import { Layout } from '../interfaces/types';
import { extractComponentData, replaceTemplate } from '../utils/helpers';
import { Component } from '../components';

export function resolveStates(config: Layout, registry: Record<string, Component>): string {

  if(!config) return ''

  const stateDefinitions = new Set<string>();

  const components = new Set<{ componentName: string, id: string, properties: Record<string, any> }>();
  extractComponentData(config, components);

  components.forEach((component) => {
    const metadata = registry[component.componentName];
    if (metadata?.states) {
      const id = component.id
      const value = isBool(component.componentName) ? component.properties?.disabled ?? 'false'
        : component.properties?.value ?? ''
      metadata.states.forEach((imp: string) => stateDefinitions.add(replaceTemplate(imp, { id, value })));
    }
  });

  const componentConfigs: Layout[] | undefined = config.children?.filter((it) => it.properties?.actions);
  // Define Table states
  if(componentConfigs) {
    componentConfigs.forEach((c) => {
      c.properties?.actions.forEach((e: any) =>
        stateDefinitions.add(
          `const handle${e.id}Click = (e: any) => { ${e.action ? `${e.action}(e)` : `service.${e.id}(e)`} };`,
        ),
      );
    })
  }

  return Array.from(stateDefinitions).join('\n  ');
}

const isBool = (name: string) => {
  return name === 'button'
}