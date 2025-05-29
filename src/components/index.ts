import {
  ChildComponent,
  ComponentRegisterConfig,
  ComponentRegistrationConfig,
  Layout, RegisterReference,
  RegisterState,
} from '../interfaces/types';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';
import { isString, replaceTemplate } from '../utils/helpers';
import { renderLayout } from '../utils/renderLayout';
import { layoutStyleToClasses } from '../helpers/layoutStyleToClasses';
import { spacingToClasses } from '../helpers/spacingToClasses';
import { sizeToClasses } from '../helpers/sizeToClasses';
import { resolveStateDefault } from '../helpers/componentPropertiesHelper';

export type Component = {
  imports: Set<string>;
  interactions: Record<string, any>;
  interactionsMapping: Record<string, any>;
  data: Record<string, any>;
  dataMapping: Record<string, any>;
  style: Record<string, any>;
  styleMapping: Record<string, any>;
  rules: Record<string, any>;
  rulesMapping: Record<string, any>;
  properties: Record<string, any>;
  propertiesMapping: Record<string, any>;
  childProperties: Record<string, any>;
  childPropertiesMapping: Record<string, any>;
  variants: Record<string, any>;
  metadata: Record<string, any>;
  childrenTypes: Set<ChildComponent>;
  acceptedChildren: Set<ChildComponent>;
  states: Set<RegisterState>;
  references: Set<RegisterReference>;
  serviceMethods: Set<string>;
  customClassName?: string;
  customComponentTag?: string;
  codeBlock?: string;
  onTableComponent?: string;
  defaultValue: boolean;
  noClassName: boolean;
  allowTypes: boolean;
  forceStateLoad: boolean;
  forceReferenceLoad: boolean;
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
  loadCustomComponentTag:(tag: string) => void;
  loadCodeBlock:(code: string) => void;
  loadOnTableComponent:(component: string) => void;
  loadDefault:(defaultValue: boolean) => void;
  setNoClassName:(value: boolean) => void;
  setAllowTypes:(value: boolean) => void;
  setForceStateLoad:(value: boolean) => void;
  setForceReferenceLoad:(value: boolean) => void;
  loadLabel:(label: string) => void;
  loadGroup:(group: string) => void;
  loadParent:(parent: string) => void;
  loadComponentClass:(componentClass: string) => void;
  loadTemplatePath:(templatePath?: string) => void;
  loadChildrenMax:(max: number) => void;

  loadVariants: (variants: Record<string, any>) => void;
  loadMetadata: (metadata: Record<string, any>) => void;
  getInteractions: (interactions: Record<string, any>) => void;
  getInteractionsMapping: (mapping: Record<string, any>) => void;
  getData: (data: Record<string, any>) => void;
  getDataMapping: (mapping: Record<string, any>) => void;
  getStyle: (style: Record<string, any>) => void;
  getStyleMapping: (mapping: Record<string, any>) => void;
  getRules: (rule: Record<string, any>) => void;
  getRulesMapping: (mapping: Record<string, any>) => void;
  getProperties: (properties: Record<string, any>) => void;
  getPropertiesMapping: (mapping: Record<string, any>) => void;
  getChildProperties: (properties?: Record<string, any>) => void;
  getChildPropertiesMapping: (mapping?: Record<string, any>) => void;
  loadChildrenTypes: (types: ChildComponent[]) => void;
  loadAcceptedChildren: (types: ChildComponent[]) => void;
  loadStates: (states: RegisterState[]) => void;
  loadReferences: (refs: RegisterReference[]) => void;
  loadServiceMethods: (states: string[]) => void;

  setRenderer: (fn: ((component: Layout<any>, parentComponent?: Layout<any>, element?: Component, parent?: Component, templatePath?: string) => (component: Layout<any>, parentComponent?: Layout<any>) => string)) => void;

  render: (context: Layout, component: Component, parentContext?: Layout<any>, parent?: Component) => string;
};

function initComponent(): Component {
  return {
    imports: new Set(),
    variants: {},
    metadata: {},
    properties: {},
    interactions: {},
    interactionsMapping: {},
    data: {},
    dataMapping: {},
    style: {},
    styleMapping: {},
    rules: {},
    rulesMapping: {},
    childProperties: {},
    propertiesMapping: {},
    childPropertiesMapping: {},
    acceptedChildren: new Set(),
    childrenTypes: new Set(),
    states: new Set(),
    references: new Set(),
    serviceMethods: new Set(),
    customClassName: undefined,
    customComponentTag: undefined,
    codeBlock: undefined,
    onTableComponent: undefined,
    defaultValue: false,
    noClassName: false,
    allowTypes: false,
    forceStateLoad: false,
    forceReferenceLoad: false,
    label: 'Component',
    group: '',
    parent: '',
    componentClass: '',
    maxChildren: undefined,
    templatePath: undefined,
    renderer: () => () => renderSyncTemplate(TEMPLATES.UNREGISTERED_COMPONENT, { name: "Not registered" }),

    loadImports(imports) {
      imports.forEach((imp) => this.imports.add(imp));
    },

    loadCustomClassName(tag: string) {
      this.customClassName = tag
    },

    loadCustomComponentTag(tag: string) {
      this.customComponentTag = tag
    },

    loadCodeBlock(code: string) {
      this.codeBlock = code
    },

    loadOnTableComponent(component: string) {
      this.onTableComponent = component
    },

    setNoClassName(value: boolean) {
      this.noClassName = value
    },

    setAllowTypes(value: boolean) {
      this.allowTypes = value
    },

    setForceStateLoad(value: boolean) {
      this.forceStateLoad = value
    },

    setForceReferenceLoad(value: boolean) {
      this.forceReferenceLoad = value
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

    loadMetadata(metadata) {
      Object.assign(this.metadata, metadata);
    },

    getInteractions(interactions) {
      Object.assign(this.interactions, interactions);
    },

    getInteractionsMapping(mapping) {
      Object.assign(this.interactionsMapping, mapping);
    },

    getData(data) {
      Object.assign(this.data, data);
    },

    getDataMapping(mapping) {
      Object.assign(this.dataMapping, mapping);
    },

    getStyle(style) {
      Object.assign(this.style, style);
    },

    getStyleMapping(mapping) {
      Object.assign(this.styleMapping, mapping);
    },

    getRules(rules) {
      Object.assign(this.rules, rules);
    },

    getRulesMapping(mapping) {
      Object.assign(this.rulesMapping, mapping);
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

    loadReferences(references) {
      references.forEach((ref) => this.references.add(ref));
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
    allowTypes: value.allowTypes,
    group: value.group,
    label: value.label,
    customClassName: value.customClassName,
    customComponentTag: value.customComponentTag,
    variants: value.variants,
    metadata: value.metadata,
    childProperties: value.childProperties,
    properties: value.properties,
    propertiesMapping: {},
    interactions: value.interactions,
    interactionsMapping: value.interactionsMapping,
    data: value.data,
    dataMapping: value.dataMapping,
    style: value.style,
    styleMapping: value.styleMapping,
    rules: value.rules,
    rulesMapping: value.rulesMapping,
    childPropertiesMapping: {},
    childrenTypes: Array.from(value.childrenTypes).map((it) => componentAsObject(it.name,
      registry[it.name], it.isDefault)),
    acceptedChildren: Array.from(value.acceptedChildren).map((it) => componentAsObject(it.name,
      registry[it.name], it.isDefault)),
    states: Array.from(value.states),
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
  if(!element) return () => renderSyncTemplate(TEMPLATES.UNREGISTERED_COMPONENT, { name: component.componentName })

  let { layout, spacing, size } = component.style ?? {}
  let { variant, customProperties, className: cn, ...common } = component.properties ?? {};

  let props = common
    ? Object.entries(common).map(([key, value]) => {
      return element.propertiesMapping[key]?.property? ` ${element.propertiesMapping[key]?.property ?? key}="${value}"` : ``;
    }).join("")
    : ``

  props += customProperties
    ? Object.entries(customProperties).map(([key, value]) => {
      return (key === "className")? `` : ` ${key}="${value}"`;
    }).join("")
    : ``

  let classNames = common
    ? Object.entries(common)
      .map(([key, value]) => {
        return element.propertiesMapping[key]?.className
          ? ` ${element.propertiesMapping[key]?.className ?? key}${value}`
          : ``;
      })
      .join('')
    : ``;

  if(cn) classNames += ` ${cn}`;

  let displayClasses = ``
  let spacingClasses = ``
  let sizeClasses = ``
  let childProps = ``
  let childClassNames = ``
  let childVariant = ``

  if(layout) {
    displayClasses += layoutStyleToClasses(layout)
  }

  if(spacing) {
    spacingClasses += spacingToClasses(spacing);
  }

  if(size) {
    sizeClasses += sizeToClasses(size);
  }

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

  str += `<${element.customComponentTag ?? 'div'} ${element.noClassName ? `` : `className={ cn(${element.customClassName !== undefined ? (element.customClassName !== '' ? `'${element.customClassName}',` : ``) : `'${component.componentName}',`}`}${variant ? (element.variants[variant] !== '' && element.variants[variant] !== undefined? `'${element.variants[variant]}',` : ``) : ``}${displayClasses !== '' ? `'${displayClasses}',` : ``}${spacingClasses !== '' ? `'${spacingClasses}',` : ``}${sizeClasses !== '' ? `'${sizeClasses}',` : ``}${classNames !== '' ? `'${classNames}',` : ``}${childVariant ? (element.variants[childVariant] !== '' && element.variants[childVariant] !== undefined? `'${element.variants[childVariant]}',` : ``) : ``}${childClassNames !== '' ? `'${childClassNames}',` : ``}${element.noClassName ? `` : `)}`} ${props} ${childProps} >`;

  if (component.children && component.children.length > 0) {
    str += "\n\t"
    str += component.children.map((child) => renderLayout(child, component)).join('\n');
  }

  if(component.content) {
    str += "\n\t"
    str += component.content
  }

  str += `</${element.customComponentTag ?? 'div'}>`

  return () => str
}

export function customRenderer (component: Layout, parentComponent?: Layout, element?: Component, parentElement?: Component): ((component: Layout, parentComponent?: Layout) => string) {
  if(!element) return () => renderSyncTemplate(TEMPLATES.UNREGISTERED_COMPONENT, { name: component.componentName })

  let { customProperties, className: cn, ...common } = component.properties ?? {};

  let props = common
    ? Object.entries(common).map(([key, value]) => {
      return element.propertiesMapping[key]?.property? ` ${element.propertiesMapping[key]?.property ?? key}="${value}"` : ``;
    }).join("")
    : ``

  props += customProperties
    ? Object.entries(customProperties).map(([key, value]) => {
      return ` ${key}={ ${resolveStateDefault(`${value}`, isString(value? `${value}` : undefined ))} }`;
    }).join("")
    : ``

  let childProps = ``

  if (parentComponent?.childProperties) {

    let { customProperties: childCustomProperties, ...childCommon } = parentComponent?.childProperties;

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
          return ` ${key}=${value}`;
        })
        .join('')
      : ``;

  }

  let str = ""

  str += `<${element.customComponentTag ?? 'div'} ${props} ${childProps} >`

  if (component.children && component.children.length > 0) {
    str += "\n\t"
    str += component.children.map((child) => renderLayout(child, component)).join('\n');
  }

  if(component.content) {
    str += "\n\t"
    str += component.content
  }

  str += `</${element.customComponentTag ?? 'div'}>`

  return () => str
}

export function hbsRenderer (component: Layout, parentComponent?: Layout, element?: Component, __?: Component): ((component: Layout, parentComponent?: Layout) => string) {
  const name = component.componentName
  return () => renderSyncTemplate((element?.templatePath)? element.templatePath : replaceTemplate(TEMPLATES.ELEMENT, { name }), {
    resourceConfig: component,
    parentResourceConfig: parentComponent
  })
}