import {
  Layout,
  RegisterReference,
} from '../interfaces/types';
import { extractComponentData, replaceTemplate } from '../utils/helpers';
import { Component } from '../components';
import { capitalize } from './stringHelpers';
import { renderReference } from './resolveCodeBlocks';

export function resolveReferences(config: Layout, registry: Record<string, Component>): string {

  if(!config) return ''

  const referenceDefinitions = new Set<string>();

  const components = new Set<{ componentName: string, id: string, tag: string, properties: Record<string, any>, interactions: Record<string, any>, forceReferenceLoad: boolean, dataType?: string}>();
  extractComponentData(config, components, registry);

  // add default component references
  components.forEach((component) => {
    if(config.properties?.generateReference || component.forceReferenceLoad) {
      const metadata = registry[component.componentName];
      if (metadata?.references) {
        const value = isBool(component.componentName)
          ? (component.properties?.disabled ?? 'false')
          : (component.properties?.value ?? '');
        const type = component.dataType ? capitalize(component.dataType) : 'any';
        metadata.references.forEach((imp: RegisterReference) => {
            imp.ref.name = replaceTemplate(imp.ref.name, { id: component.tag, });
            imp.ref.defaultValue = imp.ref.defaultValue? replaceTemplate(imp.ref.defaultValue, { value }) : undefined;
            imp.ref.type = replaceTemplate(imp.ref.type, { type });
            if(imp.required) {
              referenceDefinitions.add(renderReference(imp.ref));
            }
          }
        );
      }
    }
  });

  // Define actions imports
  const actionsConfigs: Layout[] | undefined = Array.from(components)?.filter((it) => it.interactions);

  // Define Table references
  if(actionsConfigs) {
    actionsConfigs.forEach((c) => {
      Object.entries(c.interactions!).forEach(([_, value]) => {
        value?.fnCustomCode?.references?.forEach((reference: any) => referenceDefinitions.add(reference.reference));
      })
    })
  }

  return Array.from(referenceDefinitions).join('\n  ');
}

const isBool = (name: string) => {
  return name === 'button'
}