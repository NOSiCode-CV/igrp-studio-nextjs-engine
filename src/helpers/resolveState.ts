import { Layout, Components } from '../interfaces/types';
import { extractComponentData } from '../utils/helpers';
import { getComponent } from '../components';

export function resolveStates(config: Layout): string {
  const stateDefinitions = new Set();

  const components = new Set<{ componentName: Components, id: string }>();
  extractComponentData(config, components);

  components.forEach((component) => {
    const metadata = getComponent(component.componentName);
    if (metadata?.states) {
      if (Array.isArray(metadata.states)) {
        metadata.states.forEach((imp) => stateDefinitions.add(imp));
      } else {
        stateDefinitions.add(metadata.states);
      }
    }
  });

  return Array.from(stateDefinitions).join('\n');
}