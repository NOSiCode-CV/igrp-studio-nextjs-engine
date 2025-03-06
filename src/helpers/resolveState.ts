import { Layout, Components } from '../interfaces/types';
import { extractComponentData } from '../utils/helpers';
import { Component } from '../components';

export function resolveStates(config: Layout, registry: Record<string, Component>): string {

  if(!config) return ''

  const stateDefinitions = new Set<string>();

  const components = new Set<{ componentName: Components, id: string }>();
  extractComponentData(config, components);

  components.forEach((component) => {
    const metadata = registry[component.componentName];
    if (metadata?.states) {
      metadata.states.forEach((imp: string) => stateDefinitions.add(imp));
    }
  });

  return Array.from(stateDefinitions).join('\n  ');
}