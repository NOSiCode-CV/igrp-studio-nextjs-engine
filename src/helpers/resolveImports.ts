import { Layout } from '../interfaces/types';
import { COMPONENT_REGISTRY, Components } from '../registries/componentRegistry';
import { extractComponentData } from '../utils/helpers';

export function resolveImports(config: Layout): string {
  const imports = new Set();

  const components = new Set<{ componentName: Components, id: string }>();
  extractComponentData(config, components);

  components.forEach((component) => {
    const metadata = COMPONENT_REGISTRY.get(component.componentName);
    if (metadata?.import) {
      if (Array.isArray(metadata.import)) {
        metadata.import.forEach((imp) => imports.add(imp));
      } else {
        imports.add(metadata.import);
      }
    }
  });

  return Array.from(imports).join('\n');
}