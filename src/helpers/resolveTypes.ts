import { Layout, TypeDef } from '../interfaces/types';
import { extractComponentData, replaceTemplate } from '../utils/helpers';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';

export function resolveTypes(context: any): string {
  if (!context) return '';

  const typeDefinitions = new Set<string>();

  const components = new Set<{
    componentName: string;
    id: string;
    tag: string;
    properties: Record<string, any>;
    interactions: Record<string, any>;
    forceStateLoad: boolean;
    dataType?: string;
  }>();
  extractComponentData(context.resourceConfig.components, components, context.registry);

  const types = context.resourceConfig.types;

  if (!components || !types) return '';

  // add default component types
  components.forEach((component: Layout) => {
    typeDefinitions.add(renderTypeDefinition(component, types, context));
  });

  return Array.from(typeDefinitions).join('\n  ');
}

const renderTypeDefinition = (component: Layout, types: TypeDef[], context: any) => {
  const element = context.registry[component.componentName];
  if (!element || !element.allowTypes) return '';

  // Filter types specific to the current component
  const filteredTypes = types.filter(type => type.componentId === component.id);

  const specContext = {
    ...context,
    resourceConfig: {
      ...context.resourceConfig,
      types: filteredTypes // Inject only the relevant types
    }
  }

  return renderSyncTemplate(
    replaceTemplate(TEMPLATES.TYPE_ELEMENT, { element: component.componentName }),
    specContext
  );
};
