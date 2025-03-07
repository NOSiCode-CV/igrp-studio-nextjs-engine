import { Layout } from '../interfaces/types';
import { extractComponentData } from '../utils/helpers';
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

  return Array.from(imports).join('\n');
}