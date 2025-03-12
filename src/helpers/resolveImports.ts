import { Layout } from '../interfaces/types';
import { capitalize, extractComponentData } from '../utils/helpers';
import { Component } from '../components';

export function resolveImports(config: Layout, registry: Record<string, Component>): string {

  if(!config) return ''

  const imports = new Set<string>();

  const components = new Set<{ componentName: string, id: string }>();
  extractComponentData(config, components, registry);

  components.forEach((component) => {
    const metadata = registry[component.componentName];
    console.log("Component: ", component.componentName)
    if (metadata?.imports) {
      metadata.imports.forEach((imp) => imports.add(imp));
    }
  });

  // Define actions imports
  const actionConfigs: Layout[] | undefined = config.children?.filter((it) => it.properties?.actions);

  if(actionConfigs) {
    actionConfigs.forEach((component) => {
      component.properties?.actions.forEach((action: Layout) => {
        const metadata = registry[action.componentName];
        if (metadata?.imports) {
          metadata.imports.forEach((imp) => imports.add(imp));
        }
      })
    });
  }

  return Array.from(imports).join('\n');
}