import { Layout } from '../interfaces/types';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';
import { getCommonPropertiesClasses } from './properties';
import { replaceTemplate } from '../utils/helpers';

export type Component = {
  imports: Set<string>;
  parentProperties: Record<string, any>;
  properties: Record<string, any>;
  propertiesMapping: Record<string, any>;
  variants: Record<string, any>;
  states: Record<string, any>;
  renderer: ((component: Layout) => string) | null;

  loadImports: (imports: string | string[]) => void;
  getImports: () => string[];

  getParentProperties: (properties: Record<string, any>) => void;
  loadVariants: (variants: Record<string, any>) => void;
  getProperties: (properties: Record<string, any>) => void;
  getPropertiesMapping: (mapping: Record<string, any>) => void;
  loadStates: (states: Record<string, any>) => void;

  setRenderer: (fn: ((component: Layout) => string)) => void;

  render: (context: any) => string;
};

function initComponent(): Component {
  return {
    imports: new Set(),
    variants: {},
    parentProperties: {},
    properties: {},
    propertiesMapping: {},
    states: {},
    renderer: null,

    loadImports(imports) {
      if (Array.isArray(imports)) {
        imports.forEach((imp) => this.imports.add(imp));
      } else {
        this.imports.add(imports);
      }
    },

    getImports() {
      return Array.from(this.imports);
    },

    loadVariants(variants) {
      Object.assign(this.variants, variants);
    },

    getParentProperties(properties) {
      Object.assign(this.parentProperties, properties);
    },

    getProperties(properties) {
      Object.assign(this.properties, properties);
    },

    getPropertiesMapping(mapping) {
      Object.assign(this.propertiesMapping, mapping);
    },

    loadStates(states) {
      Object.assign(this.states, states);
    },

    setRenderer(renderer) {
      this.renderer = renderer
    },

    render(context) {
      if (this.renderer) {
        return this.renderer(context);
      }
      throw new Error("No renderer function defined");
    },
  };
}

const registry: Record<string, Component> = {};

export function register(name: string, registerFn: (component: Component) => void) {
  const componentInstance: Component = initComponent();
  registerFn(componentInstance);
  registry[name] = componentInstance;
}

export function getComponent(name: string): Component {
  return registry[name];
}

export function defaultRenderer (component: Layout): ((component: Layout) => string) {
  const element: Component = getComponent(component.componentName)
  if(!element) return () => `<div className="text-sm font-medium text-gray-700">${component.componentName}`

  let { variant, className, ...common } = component.properties!;

  const props = common
    ? Object.entries(common).map(([key, value]) => {
      return ` ${element.propertiesMapping[key] ?? key}="${value}"`;
    })
    : ``

  return () => `<div className="${component.componentName} ${variant ? element.variants[variant] : ``} ${common ? getCommonPropertiesClasses(common) : ``}" ${props} </div>`
}

export function hbsRenderer (component: Layout): ((component: Layout) => string) {
  const componentName = component.componentName
  return () => renderSyncTemplate(replaceTemplate(TEMPLATES.ELEMENT, { componentName }), {
    resourceConfig: component
  })
}