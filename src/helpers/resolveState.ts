import { ActionConfig, CustomFunctionConfig, Layout, RenderContext, State } from '../interfaces/types';
import { extractComponentData, replaceTemplate } from '../utils/helpers';
import { Component } from '../components';
import { generateAction } from '../modules/actions/generateAction';
import { capitalize } from './stringHelpers';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';

export function resolveStates(config: Layout, registry: Record<string, Component>): string {

  if(!config) return ''

  const stateDefinitions = new Set<string>();

  const components = new Set<{ componentName: string, id: string, tag: string, properties: Record<string, any>, interactions: Record<string, any>, forceStateLoad: boolean, dataType?: string}>();
  extractComponentData(config, components, registry);

  // add default component states
  components.forEach((component) => {
    if(config.properties?.generateState || component.forceStateLoad) {
      const metadata = registry[component.componentName];
      if (metadata?.states) {
        const value = isBool(component.componentName)
          ? (component.properties?.disabled ?? 'false')
          : (component.properties?.value ?? '');
        const type = component.dataType ? capitalize(component.dataType) : 'any';
        metadata.states.forEach((imp: string) =>
          stateDefinitions.add(replaceTemplate(imp, { id: component.tag, value, type: type })),
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