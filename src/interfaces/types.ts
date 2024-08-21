export interface AppConfig {
  type: 'baseApp';
  appName: string;
}

export interface PageConfig {
  type: 'page';
  id?: number;
  pageName: string;
  path: string;
  components?: Component[];
}


export interface Component {
  Row: RowLayout[]
}

interface RowLayout {
  Col: ColumnLayout[]
}

interface ColumnLayout {
  colSize: number;
  componentName: string;
  type: string;
  submitBtnText?: string,
  attributes: string[];
  fields?: Field[];
}

interface Field {
  type: string;
  config: FieldConfig
}

interface FieldConfig {
  type: string,
  name: string;
  label?: string,
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  colSize: number
  placeholder?: string
}

export type RenderContext<T = undefined> = {
  resourceConfig: T;
  basePath: string;
  baseConfig?: AppConfig;
};
