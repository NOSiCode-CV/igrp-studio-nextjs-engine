import { Layout, Components } from '../interfaces/types';
import { extractComponentData } from '../utils/helpers';
import { getComponent } from '../components';

export function resolveImports(config: Layout): string {
  const imports = new Set();

  const components = new Set<{ componentName: Components, id: string }>();
  extractComponentData(config, components);

  components.forEach((component) => {
    const metadata = getComponent(component.componentName);
    if (metadata?.imports) {
      if (Array.isArray(metadata.imports)) {
        metadata.imports.forEach((imp) => imports.add(imp));
      } else {
        imports.add(metadata.imports);
      }
    }
  });

  return Array.from(imports).join('\n');
}