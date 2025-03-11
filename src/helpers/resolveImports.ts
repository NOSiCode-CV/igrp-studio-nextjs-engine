import { Layout } from '../interfaces/types';
import { capitalize, extractComponentData } from '../utils/helpers';
import { Component } from '../components';

export function resolveImports(config: Layout, registry: Record<string, Component>): string {

  if(!config) return ''

  const imports = new Set<string>();

  const components = new Set<{ componentName: string, id: string }>();
  extractComponentData(config, components);

  components.forEach((component) => {
    const metadata = registry[component.componentName];
    if (metadata?.imports) {
      metadata.imports.forEach((imp) => imports.add(imp));
    }
  });

  // Define actions imports
  const componentConfigs: Layout[] | undefined = config.children?.filter((it) => it.properties?.actions);

  if(componentConfigs) {
    imports.add('import { IGRPButton } from "@igrp/igrp-framework-react-design-system";')
  }

  return Array.from(imports).join('\n');
}