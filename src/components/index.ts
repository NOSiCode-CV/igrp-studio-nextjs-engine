import { ComponentRegisterConfig, ComponentRegistrationConfig, Layout } from '../interfaces/types';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';
import { replaceTemplate } from '../utils/helpers';
import { renderLayout } from '../utils/renderLayout';

export type Component = {
  imports: Set<string>;
  parentProperties: Record<string, any>;
  properties: Record<string, any>;
  propertiesMapping: Record<string, any>;
  variants: Record<string, any>;
  states: Set<string>;
  icon: string;
  label: string;
  group: string;
  templatePath?: string;
  renderer: ((component: Layout<any>, element?: Component, templatePath?: string) => (component: Layout<any>) => string);

  loadImports: (imports: string[]) => void;
  getImports: () => string[];

  loadIcon:(icon: string) => void;
  loadLabel:(label: string) => void;
  loadGroup:(group: string) => void;
  loadTemplatePath:(templatePath?: string) => void;

  getParentProperties: (properties: Record<string, any>) => void;
  loadVariants: (variants: Record<string, any>) => void;
  getProperties: (properties: Record<string, any>) => void;
  getPropertiesMapping: (mapping: Record<string, any>) => void;
  loadStates: (states: string[]) => void;

  setRenderer: (fn: ((component: Layout<any>, element?: Component, templatePath?: string) => (component: Layout<any>) => string)) => void;

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
    icon: '',
    label: 'Component',
    group: '',
    templatePath: undefined,
    renderer: () => () => `<div className="text-sm font-medium text-gray-700">Component Not Registered</div>`,

    loadImports(imports) {
      imports.forEach((imp) => this.imports.add(imp));
    },

    loadIcon(icon: string) {
      this.icon = icon
    },

    loadLabel(label: string) {
      this.label = label
    },

    loadGroup(group: string) {
      this.group = group
    },

    loadTemplatePath(path?: string) {
      this.templatePath = path
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

export let registry: Record<string, Component> = {};

export function register(name: string, registerFn: (component: Component) => void) {
  const componentInstance: Component = initComponent();
  registerFn(componentInstance);
  registry[name] = componentInstance;
}

export function getComponent(name: string): Component {
  return registry[name];
}

export function registryAsObject(): ComponentRegistrationConfig {
  const components: ComponentRegisterConfig[] = Object.entries(registry).map(([key, value]) => {
    return {
      name: key,
      imports: Array.from(value.imports),
      icon: value.icon,
      group: value.group,
      label: value.label,
      variants: value.variants,
      parentProperties: value.parentProperties,
      properties: value.properties,
      propertiesMapping: value.propertiesMapping,
      states: Array.from(value.states),
      renderer: value.renderer.name.includes('default')? 'default' : value.renderer.name.includes('hbs')? 'hbs' : 'default',
      templatePath: value.templatePath
    }
  });

  return { components: components }
}

export function defaultRenderer (component: Layout, element?: Component): ((component: Layout) => string) {
  if(!element) return () => `<div className="text-sm font-medium text-gray-700">${component.componentName}</div>`

  let { variant, customProperties, ...common } = component.properties!;

  let props = common
    ? Object.entries(common).map(([key, value]) => {
      return element.propertiesMapping[key]?.property? ` ${element.propertiesMapping[key]?.property ?? key}="${value}"` : ``;
    }).join("")
    : ``

  props += customProperties
    ? Object.entries(customProperties).map(([key, value]) => {
      return ` ${key}="${value}"`;
    }).join("")
    : ``

  const classNames = common
    ? Object.entries(common).map(([key, value]) => {
      return element.propertiesMapping[key]?.className? ` ${element.propertiesMapping[key]?.className ?? key}${value}` : ``;
    }).join("")
    : ``

  let str = ""

  str += `<div className="${component.componentName} ${variant ? element.variants[variant] : ``} ${classNames ? classNames : ``}" ${props} >`

  if (component.children && component.children.length > 0) {
    str += "\n\t"
    str += component.children.map((child) => renderLayout(child)).join('\n');
  }

  str += `</div>`

  return () => str
}

export function hbsRenderer (component: Layout, _?: Component, templatePath?: string): ((component: Layout) => string) {
  const name = component.componentName
  return () => renderSyncTemplate(replaceTemplate((templatePath)? templatePath : TEMPLATES.ELEMENT, { name }), {
    resourceConfig: component
  })
}