import { Layout } from '../interfaces/types';
import { COMPONENT_REGISTRY, Components } from '../registries/componentRegistry';
import { extractComponentData } from '../utils/helpers';

export function resolveStates(config: Layout): string {
  const stateDefinitions = new Set();

  const components = new Set<{ componentName: Components, id: string }>();
  extractComponentData(config, components);

  components.forEach((component) => {
    const metadata = COMPONENT_REGISTRY.get(component.componentName);
    if (metadata?.stateTemplate) {
      const capitalizedId = component.id.charAt(0).toUpperCase() + component.id.slice(1);
      stateDefinitions.add(
        metadata.stateTemplate.replace('{{id}}', component.id).replace('{{capitalizedId}}', capitalizedId),
      );
    }
  });

  return Array.from(stateDefinitions).join('\n');
}