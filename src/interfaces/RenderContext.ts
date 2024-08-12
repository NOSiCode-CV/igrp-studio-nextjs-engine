import { AppConfig } from "./AppInterface"

export type RenderContext<T = undefined> = {
  resourceConfig: T
  basePath: string
  baseConfig: AppConfig
}