import { ActionConfig, Layout, RenderContext } from '../interfaces/types';
import { extractComponentData, replaceTemplate } from '../utils/helpers';
import { Component } from '../components';
import { generateAction } from '../modules/actions/generateAction';

export function resolveStates(config: Layout, registry: Record<string, Component>): string {

  if(!config) return ''

  const stateDefinitions = new Set<string>();

  const components = new Set<{ componentName: string, id: string, tag: string, properties: Record<string, any>, interactions: Record<string, any>, }>();
  extractComponentData(config, components, registry);

  // add default component states
  components.forEach((component) => {
    if(config.properties?.generateState) {
      const metadata = registry[component.componentName];
      if (metadata?.states) {
        const id = component.id;
        const value = isBool(component.componentName)
          ? (component.properties?.disabled ?? 'false')
          : (component.properties?.value ?? '');
        metadata.states.forEach((imp: string) =>
          stateDefinitions.add(replaceTemplate(imp, { id, value })),
        );
      }
    }
  });

  // Define actions imports
  const actionsConfigs: Layout[] | undefined = Array.from(components)?.filter((it) => it.interactions);

  // Define Table states
  if(actionsConfigs) {
    actionsConfigs.forEach((c) => {
      Object.entries(c.interactions!).forEach(([_, value]) => {
        value?.fnCustomCode?.states?.forEach((state: any) => stateDefinitions.add(state.state));
      })
    })
  }

  return Array.from(stateDefinitions).join('\n  ');
}

const isBool = (name: string) => {
  return name === 'button'
}