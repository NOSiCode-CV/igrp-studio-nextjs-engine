import { COMPONENTS_NAMES, COMPONENTS_TYPES, CONFIG_TYPES, FIELD_TYPES } from '../utils/constants';

interface IdentifiableElement {
  id: string
}

export interface AppConfig {
  type: 'baseApp';
  appName: string;
  description?: string
}

export interface PageConfig extends IdentifiableElement {
  type: 'page';
  path: string;
  pageName: string;
  components?: Layout | {};
}

export interface PageComponentConfig extends IdentifiableElement {
  type: 'page' | 'component'
  components?: Layout | {};
}

export interface ComponentConfig extends IdentifiableElement {
  type: 'component';
  name: string;
  path: string;
  icon?: string;
  components?: Layout | {};
}

export interface Component {
  Row: RowLayout[];
}

export interface RowLayout {
  Col: ColumnLayout[];
}

export interface ColumnLayout {
  id: string;
  colSize: number;
  components?: ColumnComponent[];
}

export interface ColumnComponent {
  id: string;
  formRefs?: any;
  values?: any;
  serviceAction?: any;
  target?: string;
  componentName: ComponentNames;
  config: ColumnConfig;
  fields?: Field[] | TableFields[];
  actions?: IAction[];
}

export interface Field {
  type: string;
  config: FieldConfig;
  validation?: {
    minLeng?: number;
    maxLeng?: number;
    errorMinLeng?: string;
    errorMaxLeng?: string;
    requiredMessage?: string;
  };
}

export interface IAction {
  id: string;
  type: 'Button' | 'Link' | 'IGRP_ButtonInput';
  config: IActionConfig;
}

export interface IActionConfig {
  icon?: string;
  buttonText?: string;
  target?: string;
  className?: string;
  color?: string;
  refreshTable?: boolean;
  actionType?: string,
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
}

export interface IButton {
  formRefs?: any;
  serviceAction?: (data: Record<string, any>) => void;
  buttonText?: string;
  className?: string;
  values?: any;
  icon?: string;
  actionType: string,
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
  
}

export interface ColumnConfig {
  title?: string;
  showTitle?: boolean;
  colSize?: number;
  pageSize?: number;
  isPagination?: boolean;
  isGlobalFilter?: boolean;
  SearchPlaceholder?: string;
  isSortable?: boolean;
  actionTitle?: string;
  servrSsidePagination?: boolean;
  buttonText?: string;
  className?: string;
  applyToAllForms?: boolean; 
  targetForms?: string[], 
  refreshTable?: boolean,
  actionType?: string
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
}

export interface TableFields {
  header?: string;
  accessorKey?: string;
  enableColumnFilter?: boolean;
}

export interface FieldConfig {
  type: FieldTypes;
  name: string;
  label?: string;
  colSize?: number;
  required?: boolean;
  placeholder?: string;
  color?: string;
  className?: string;
  buttonText?: string;
  actionType?: string;
  targetForms?: string[];
  applyToAllForms?: boolean;
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
  refreshTable?: boolean
  options?: {
    value: string;
    label: string;
  }[];
}

export interface PageMetaConfig {
  type: "UI"; //aplication type
  url: string; // application url
  description: string; //aplication description
  resourceItems?: {
    name: string; // page name
    url: string; //page path,
    resourceItemType: 'PAGE';
    description: string; // page description
  }[];
}

export interface Layout<S = any> extends IdentifiableElement{
  componentName: string;
  properties?: Record<string, any>;
  childProperties?: Record<string, any>;
  parentProperties?: Record<string, any>;
  content?: string,
  children?: Layout[];
}

export interface LayoutProperties {
  variant?: string;
  className?: string;
}

export interface CommonProperties extends LayoutProperties{
  padding?: string; // p-1, p-2, etc.
  paddingX?: string; // px-1, px-2, etc.
  paddingY?: string; // py-1, py-2, etc.
  paddingTop?: string; // pt-1, pt-2, etc.
  paddingBottom?: string; // pb-1, pb-2, etc.
  paddingLeft?: string; // pl-1, pl-2, etc.
  paddingRight?: string; // pr-1, pr-2, etc.

  margin?: string; // m-1, m-2, etc.
  marginX?: string; // mx-1, mx-2, etc.
  marginY?: string; // my-1, my-2, etc.
  marginTop?: string; // mt-1, mt-2, etc.
  marginBottom?: string; // mb-1, mb-2, etc.
  marginLeft?: string; // ml-1, ml-2, etc.
  marginRight?: string; // mr-1, mr-2, etc.

  width?: string; // w-1/2, w-full, w-screen, etc.
  height?: string; // h-1/2, h-full, h-screen, etc.

  visibility?: "visible" | "invisible" | "hidden"; // Tailwind visibility classes
}

export interface DeleteConfig {
  name: string,
  type: ConfigTypes
}

export interface ComponentRegistrationConfig {
  components: ComponentRegisterConfig[]
}

export interface ComponentRegisterConfig {
  name: string,
  imports: string[],
  defaultValue: boolean,
  group: string,
  label: string,
  variants: Record<string, any>,
  properties: Record<string, any>,
  propertiesMapping: Record<string, any>,
  childProperties?: Record<string, any>,
  childPropertiesMapping?: Record<string, any>,
  states: string[],
  childrenTypes: ComponentRegisterConfig[],
  acceptedChildren: ComponentRegisterConfig[],
  renderer: 'default' | 'hbs',
  templatePath?: string
}

export interface PartialConfig {
  name: string,
  path: string
}

export interface ChildComponent {
  name: string,
  isDefault: boolean
}

export type RenderContext<T = undefined, P = undefined> = {
  resourceConfig: T;
  parentResourceConfig?: P;
  basePath: string;
  baseConfig?: AppConfig;
  registry?: Record<string, Component>,
  velzonImports?: string[];
  formRefs?: string[];
};

export type FieldTypes = (typeof FIELD_TYPES)[number];
export type ComponentTypes = (typeof COMPONENTS_TYPES)[number];
export type ComponentNames = (typeof COMPONENTS_NAMES)[number];
export type ConfigTypes = (typeof CONFIG_TYPES)[number];