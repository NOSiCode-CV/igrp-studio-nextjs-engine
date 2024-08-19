export interface AppConfig {
  type: 'baseApp',
  appName: string
}

export interface PageConfig {
  type: 'page';
  id?: number;
  pageName: string;
  path: string;
  components?: string []
}


export type RenderContext<T = undefined> = {
  resourceConfig: T
  basePath: string
  baseConfig?: AppConfig
}
