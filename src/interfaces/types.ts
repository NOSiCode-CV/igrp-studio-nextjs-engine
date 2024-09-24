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
  components?: ColumnComponent[]; 
}

export interface ColumnComponent {
  id: string;
  componentName: ComponentNames
  config: ColumnConfig;
  fields?: Field[]; 
}

export interface Field {
  type: string;
  config: FieldConfig;
}

export interface ColumnConfig {
  title?: string;
  colSize: number;
}

export interface FieldConfig {
  type: FieldTypes;
  name: string;
  label?: string;
  colSize?: number;
  placeholder?: string;
}

export type RenderContext<T = undefined> = {
  resourceConfig: T;
  basePath: string;
  baseConfig?: AppConfig;
  velzonImports?: string[];
};


export type FieldTypes = (typeof FIELD_TYPES)[number];
export type ComponentTypes = (typeof COMPONENTS_TYPES)[number];
export type ComponentNames = (typeof COMPONENTS_NAMES)[number];
