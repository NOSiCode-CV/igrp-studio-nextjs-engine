import { Layout, TypeDef } from '../interfaces/types';
import { extractComponentData, replaceTemplate } from '../utils/helpers';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';
import { registry as componentRegistry } from '../components';

type ResolveTypesContext = {
  resourceConfig: any;
  registry: Record<string, any>;
  [key: string]: any;
};

const normalizeContext = (context: any, registryArg?: Record<string, any>): ResolveTypesContext | null => {
  if (!context) return null;
  const looksLikeResourceConfig = context.components || context.types || context.name || context.pageName;
  if (context.resourceConfig) {
    return {
      ...context,
      registry: registryArg || context.registry || componentRegistry,
    };
  }
  if (looksLikeResourceConfig) {
    return {
      resourceConfig: context,
      registry: registryArg || componentRegistry,
    };
  }
  return null;
};

export function resolveTypes(context: any, registryArg?: Record<string, any>): string {
  const normalizedContext = normalizeContext(context, registryArg);
  if (!normalizedContext) return '';

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
  extractComponentData(normalizedContext.resourceConfig.components, components, normalizedContext.registry);

  const types = normalizedContext.resourceConfig.types;

  if (!components || !types) return '';

  components.forEach((component: Layout) => {
    typeDefinitions.add(renderTypeDefinition(component, types, normalizedContext));
  });

  return Array.from(typeDefinitions).join('\n  ');
}

const renderTypeDefinition = (component: Layout, types: TypeDef[], context: any) => {
  const element = context.registry[component.componentName];
  if (!element || !element.allowTypes) return '';

  const filteredTypes = types.filter(type => type.componentId === component.id);

  const specContext = {
    ...context,
    resourceConfig: {
      ...context.resourceConfig,
      types: filteredTypes
    }
  };

  return renderSyncTemplate(
    replaceTemplate(TEMPLATES.TYPE_ELEMENT, { element: component.componentName }),
    specContext
  );
};
