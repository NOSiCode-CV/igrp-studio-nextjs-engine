import { Layout } from '../interfaces/types';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';
import { getCommonPropertiesClasses } from './properties';
import { replaceTemplate } from '../utils/helpers';
import { renderLayout } from '../utils/renderLayout';

export type Component = {
  imports: Set<string>;
  parentProperties: Record<string, any>;
  properties: Record<string, any>;
  propertiesMapping: Record<string, any>;
  variants: Record<string, any>;
  states: Set<string>;
  renderer: ((component: Layout<any>, element?: Component) => (component: Layout<any>) => string);

  loadImports: (imports: string[]) => void;
  getImports: () => string[];

  getParentProperties: (properties: Record<string, any>) => void;
  loadVariants: (variants: Record<string, any>) => void;
  getProperties: (properties: Record<string, any>) => void;
  getPropertiesMapping: (mapping: Record<string, any>) => void;
  loadStates: (states: string[]) => void;

  setRenderer: (fn: ((component: Layout<any>, element?: Component) => (component: Layout<any>) => string)) => void;

  render: (context: Layout, component: Component) => string;
};

function initComponent(): Component {
  return {
    imports: new Set(),
    variants: {},
    parentProperties: {},
    properties: {},
    propertiesMapping: {},
    states: new Set(),
    renderer: () => () => `<div className="text-sm font-medium text-gray-700">Component Not Registered</div>`,

    loadImports(imports) {
      imports.forEach((imp) => this.imports.add(imp));
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
      states.forEach((state) => this.states.add(state));
    },

    setRenderer(renderer) {
      this.renderer = renderer
    },

    render(context: Layout<any>, component: Component) {
      if (this.renderer) {
        return this.renderer(context, component)(context);
      }
      throw new Error("No renderer function defined");
    }
  };
}

export const registry: Record<string, Component> = {};

export function register(name: string, registerFn: (component: Component) => void) {
  const componentInstance: Component = initComponent();
  registerFn(componentInstance);
  registry[name] = componentInstance;
}

export function getComponent(name: string): Component {
  return registry[name];
}

export function defaultRenderer (component: Layout, element?: Component): ((component: Layout) => string) {
  if(!element) return () => `<div className="text-sm font-medium text-gray-700">${component.componentName}</div>`

  let { variant, className, ...common } = component.properties!;

  const props = common
    ? Object.entries(common).map(([key, value]) => {
      return ` ${element.propertiesMapping[key] ?? key}="${value}"`;
    })
    : ``

  let str = ""

  str += `<div className="${component.componentName} ${variant ? element.variants[variant] : ``} ${common ? getCommonPropertiesClasses(common) : ``}" ${props} `

  if (component.children && component.children.length > 0) {
    str += "\n\t"
    str += component.children.map((child) => renderLayout(child)).join('\n');
  }

  str += `</div>`

  return () => str
}

export function hbsRenderer (component: Layout): ((component: Layout) => string) {
  const name = component.componentName
  return () => renderSyncTemplate(replaceTemplate(TEMPLATES.ELEMENT, { name }), {
    resourceConfig: component
  })
}