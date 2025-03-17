import { ChildComponent, ComponentRegisterConfig, ComponentRegistrationConfig, Layout } from '../interfaces/types';
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
  childrenTypes: Set<ChildComponent>;
  acceptedChildren: Set<ChildComponent>;
  states: Set<string>;
  serviceMethods: Set<string>;
  customClassName?: string;
  codeBlock?: string;
  onTableComponent?: string;
  defaultValue: boolean;
  label: string;
  group: string;
  parent: string;
  componentClass: string;
  maxChildren?: number;
  templatePath?: string;
  renderer: ((component: Layout<any>, parentComponent?: Layout<any>, element?: Component, parent?: Component, templatePath?: string) => (component: Layout<any>, parentComponent?: Layout<any>) => string);

  loadImports: (imports: string[]) => void;
  getImports: () => string[];

  loadCustomClassName:(tag: string) => void;
  loadCodeBlock:(code: string) => void;
  loadOnTableComponent:(component: string) => void;
  loadDefault:(defaultValue: boolean) => void;
  loadLabel:(label: string) => void;
  loadGroup:(group: string) => void;
  loadParent:(parent: string) => void;
  loadComponentClass:(componentClass: string) => void;
  loadTemplatePath:(templatePath?: string) => void;
  loadChildrenMax:(max: number) => void;

  loadVariants: (variants: Record<string, any>) => void;
  getProperties: (properties: Record<string, any>) => void;
  getPropertiesMapping: (mapping: Record<string, any>) => void;
  getChildProperties: (properties?: Record<string, any>) => void;
  getChildPropertiesMapping: (mapping?: Record<string, any>) => void;
  loadChildrenTypes: (types: ChildComponent[]) => void;
  loadAcceptedChildren: (types: ChildComponent[]) => void;
  loadStates: (states: string[]) => void;
  loadServiceMethods: (states: string[]) => void;

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
    acceptedChildren: new Set(),
    childrenTypes: new Set(),
    states: new Set(),
    serviceMethods: new Set(),
    customClassName: undefined,
    codeBlock: undefined,
    onTableComponent: undefined,
    defaultValue: false,
    label: 'Component',
    group: '',
    parent: '',
    componentClass: '',
    maxChildren: undefined,
    templatePath: undefined,
    renderer: () => () => `<div className="text-sm font-medium text-gray-700">Component Not Registered</div>`,

    loadImports(imports) {
      imports.forEach((imp) => this.imports.add(imp));
    },

    loadCustomClassName(tag: string) {
      this.customClassName = tag
    },

    loadCodeBlock(code: string) {
      this.codeBlock = code
    },

    loadOnTableComponent(component: string) {
      this.onTableComponent = component
    },

    loadDefault(defaultValue: boolean) {
      this.defaultValue = defaultValue
    },

    loadLabel(label: string) {
      this.label = label
    },

    loadGroup(group: string) {
      this.group = group
    },

    loadParent(parent: string) {
      this.parent = parent
    },

    loadComponentClass(componentClass: string) {
      this.componentClass = componentClass
    },

    loadTemplatePath(path?: string) {
      this.templatePath = path
    },

    loadChildrenMax(max: number) {
      this.maxChildren = max
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

    loadChildrenTypes(types) {
      types.forEach((type) => this.childrenTypes.add(type));
    },

    loadAcceptedChildren(types) {
      types.forEach((type) => this.acceptedChildren.add(type));
    },

    loadServiceMethods(methods) {
      methods.forEach((method) => this.serviceMethods.add(method));
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

function componentAsObject(key: string, value: Component, isDefault?: boolean): ComponentRegisterConfig {
  const { defaultValue } = value;
  return {
    name: key,
    imports: [],
    defaultValue: isDefault ?? defaultValue,
    group: value.group,
    label: value.label,
    variants: value.variants,
    childProperties: value.childProperties,
    properties: value.properties,
    propertiesMapping: {},
    childPropertiesMapping: {},
    childrenTypes: Array.from(value.childrenTypes).map((it) => componentAsObject(it.name,
      registry[it.name], it.isDefault)),
    acceptedChildren: Array.from(value.acceptedChildren).map((it) => componentAsObject(it.name,
      registry[it.name], it.isDefault)),
    states: [],
    renderer: value.renderer.name.includes('default')? 'default' : value.renderer.name.includes('hbs')? 'hbs' : 'default',
    templatePath: value.templatePath
  }
}

const hiddenComponents: string [] = [];

export function registryAsObject(): ComponentRegistrationConfig {
  const components: ComponentRegisterConfig[] = Object.entries(registry)
    .filter(([key, itValue]) => !(registry[itValue.parent] || hiddenComponents.includes(key)))
    .map(([key, value]) => {
      return componentAsObject(key, value)
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

export function hbsRenderer (component: Layout, parentComponent?: Layout, element?: Component, __?: Component): ((component: Layout, parentComponent?: Layout) => string) {
  const name = component.componentName
  return () => renderSyncTemplate((element?.templatePath)? element.templatePath : replaceTemplate(TEMPLATES.ELEMENT, { name }), {
    resourceConfig: component,
    parentResourceConfig: parentComponent
  })
}