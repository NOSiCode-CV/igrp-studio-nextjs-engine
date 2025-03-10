import { ComponentRegisterConfig, ComponentRegistrationConfig, Layout } from '../interfaces/types';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';
import { replaceTemplate } from '../utils/helpers';
import { renderLayout } from '../utils/renderLayout';

export type Component = {
  imports: Set<string>;
  properties: Record<string, any>;
  propertiesMapping: Record<string, any>;
  childProperties: Record<string, any>;
  childPropertiesMapping: Record<string, any>;
  variants: Record<string, any>;
  states: Set<string>;
  customClassName?: string;
  icon: string;
  label: string;
  group: string;
  templatePath?: string;
  renderer: ((component: Layout<any>, parentComponent?: Layout<any>, element?: Component, parent?: Component, templatePath?: string) => (component: Layout<any>, parentComponent?: Layout<any>) => string);

  loadImports: (imports: string[]) => void;
  getImports: () => string[];

  loadCustomClassName:(tag: string) => void;
  loadIcon:(icon: string) => void;
  loadLabel:(label: string) => void;
  loadGroup:(group: string) => void;
  loadTemplatePath:(templatePath?: string) => void;

  loadVariants: (variants: Record<string, any>) => void;
  getProperties: (properties: Record<string, any>) => void;
  getPropertiesMapping: (mapping: Record<string, any>) => void;
  getChildProperties: (properties?: Record<string, any>) => void;
  getChildPropertiesMapping: (mapping?: Record<string, any>) => void;
  loadStates: (states: string[]) => void;

  setRenderer: (fn: ((component: Layout<any>, parentComponent?: Layout<any>, element?: Component, parent?: Component, templatePath?: string) => (component: Layout<any>, parentComponent?: Layout<any>) => string)) => void;

  render: (context: Layout, component: Component, parentContext?: Layout<any>, parent?: Component) => string;
};

function initComponent(): Component {
  return {
    imports: new Set(),
    variants: {},
    properties: {},
    childProperties: {},
    propertiesMapping: {},
    childPropertiesMapping: {},
    states: new Set(),
    customClassName: undefined,
    icon: '',
    label: 'Component',
    group: '',
    templatePath: undefined,
    renderer: () => () => `<div className="text-sm font-medium text-gray-700">Component Not Registered</div>`,

    loadImports(imports) {
      imports.forEach((imp) => this.imports.add(imp));
    },

    loadCustomClassName(tag: string) {
      this.customClassName = tag
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

    getProperties(properties) {
      Object.assign(this.properties, properties);
    },

    getPropertiesMapping(mapping) {
      Object.assign(this.propertiesMapping, mapping);
    },

    getChildProperties(properties?) {
      Object.assign(this.childProperties, properties);
    },

    getChildPropertiesMapping(mapping?) {
      Object.assign(this.childPropertiesMapping, mapping);
    },

    loadStates(states) {
      states.forEach((state) => this.states.add(state));
    },

    setRenderer(renderer) {
      this.renderer = renderer
    },

    render(context: Layout<any>, component: Component, parentContext?: Layout<any>, parent?: Component) {
      if (this.renderer) {
        return this.renderer(context, parentContext, component, parent)(context, parentContext);
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
      childProperties: value.childProperties,
      properties: value.properties,
      propertiesMapping: value.propertiesMapping,
      childPropertiesMapping: value.childPropertiesMapping,
      states: Array.from(value.states),
      renderer: value.renderer.name.includes('default')? 'default' : value.renderer.name.includes('hbs')? 'hbs' : 'default',
      templatePath: value.templatePath
    }
  });

  return { components: components }
}

export function defaultRenderer (component: Layout, parentComponent?: Layout, element?: Component, parentElement?: Component): ((component: Layout, parentComponent?: Layout) => string) {
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
    ? Object.entries(common)
        .map(([key, value]) => {
          return element.propertiesMapping[key]?.className
            ? ` ${element.propertiesMapping[key]?.className ?? key}${value}`
            : ``;
        })
        .join('')
    : ``;

  let childProps = ``
  let childClassNames = ``
  let childVariant = ``

  if (parentComponent?.childProperties) {

    let { variant: childVar, customProperties: childCustomProperties, ...childCommon } = parentComponent?.childProperties;

    childVariant = childVar

    childProps = childCommon
      ? Object.entries(childCommon)
          .map(([key, value]) => {
            return parentElement?.childPropertiesMapping[key]?.property
              ? ` ${parentElement.childPropertiesMapping[key]?.property ?? key}="${value}"`
              : ``;
          })
          .join('')
      : ``;

    childProps += childCustomProperties
      ? Object.entries(childCustomProperties)
          .map(([key, value]) => {
            return ` ${key}="${value}"`;
          })
          .join('')
      : ``;

    childClassNames = childCommon
      ? Object.entries(childCommon)
          .map(([key, value]) => {
            return parentElement?.childPropertiesMapping[key]?.className
              ? ` ${parentElement.childPropertiesMapping[key]?.className ?? key}${value}`
              : ``;
          })
          .join('')
      : ``;

  }

  let str = ""

  str += `<div className="${(element.customClassName !== undefined)? element.customClassName : component.componentName} ${variant ? element.variants[variant] : ``} ${classNames ? classNames : ``} ${childVariant ? element.variants[childVariant] : ``} ${childClassNames ? childClassNames : ``}" ${props} ${childProps} >`

  if (component.children && component.children.length > 0) {
    str += "\n\t"
    str += component.children.map((child) => renderLayout(child, component)).join('\n');
  }

  str += `</div>`

  return () => str
}

export function hbsRenderer (component: Layout, parentComponent?: Layout, _?: Component, __?: Component, templatePath?: string): ((component: Layout, parentComponent?: Layout) => string) {
  const name = component.componentName
  return () => renderSyncTemplate(replaceTemplate((templatePath)? templatePath : TEMPLATES.ELEMENT, { name }), {
    resourceConfig: component,
    parentResourceConfig: parentComponent
  })
}