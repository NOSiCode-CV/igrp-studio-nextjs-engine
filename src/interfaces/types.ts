import { COMPONENTS_NAMES, COMPONENTS_TYPES, FIELD_TYPES } from '@/utils/constants';

export interface AppConfig {
  type: 'baseApp';
  appName: string;
}

export interface PageConfig {
  type: 'page';
  pageName: string;
  path: string;
  components?: Component[];
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
  componentName: ComponentNames
  config: ColumnConfig;
  fields?: Field[] | TableFields[]; 
  actions?: IAction[]
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
  type: "Button"| "Link";
  config: IActionConfig;
}

export interface IActionConfig {
  icon?: string;
  buttonText?: string;
  target?: string;
  buttonColor?: string;
}

export interface IButton {
  formRefs?: any;
  serviceAction?: (data: Record<string, any>) => void;
  buttonText?: string;
  buttonColor?: string;
  values?: any;
  icon?: string;
};

export interface ColumnConfig {
  title?: string;
  showTitle?: boolean,
  colSize?: number;
  pageSize?: number, 
  isPagination?: boolean, 
  isGlobalFilter?: boolean,
  SearchPlaceholder?: string,
  isSortable?: boolean,
  actionTitle?: string,
  servrSsidePagination?: boolean,
  buttonText?: string,
  buttonColor?: string,
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
  options?: {
    value: string;
    label: string;
  }[];
}

export type RenderContext<T = undefined> = {
  resourceConfig: T;
  basePath: string;
  baseConfig?: AppConfig;
  velzonImports?: string[];
  formRefs?: string[];
};


export type FieldTypes = (typeof FIELD_TYPES)[number];
export type ComponentTypes = (typeof COMPONENTS_TYPES)[number];
export type ComponentNames = (typeof COMPONENTS_NAMES)[number];
