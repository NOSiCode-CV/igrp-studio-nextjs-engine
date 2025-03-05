import { Layout, Components } from '../interfaces/types';
import { extractComponentData } from '../utils/helpers';
import { Component } from '../components';

export function resolveImports(config: Layout, registry: Record<string, Component>): string {
  const imports = new Set<string>();

  const components = new Set<{ componentName: Components, id: string }>();
  extractComponentData(config, components);

  components.forEach((component) => {
    const metadata = registry[component.componentName];
    console.log("metadata:  : ", metadata)
    if (metadata?.imports) {
      metadata.imports.forEach((imp) => imports.add(imp));
    }
  });

  return Array.from(imports).join('\n');
}