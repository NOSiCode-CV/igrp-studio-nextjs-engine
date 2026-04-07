import { COMPONENTS_NAMES, COMPONENTS_TYPES, CONFIG_TYPES, DEFINITION_TYPES, FIELD_TYPES, RESTART_TYPES } from '../utils/constants';

interface VersionableElement {
  version?: string
}

interface IdentifiableElement {
  id: string
}

export interface RenderContext<T = any, U = any> {
  resourceConfig: T;
  baseConfig?: U;
  basePath: string;
}

// Workspace

export interface WorkspaceConfig extends IdentifiableElement, VersionableElement {
  name: string;
  slug: string;
  description?: string;
  projects?: any[];
}

export interface ProjectWorkspace extends IdentifiableElement {
  config: any,
  service?: any
}

export interface ServiceWorkspace extends IdentifiableElement {
  service: any
}

export interface WorkspaceProjectsConfig extends IdentifiableElement {
  workspace: string,
  projects: any[],
  services: any[]
}

// Docker

export interface Environment {
  key: string;
  value: string;
}

export interface Port {
  internal: number;
  external: number;
}

export interface Volume {
  host: string;
  container: string;
}

export interface Network {
  name: string;
  driver: string;
}

export interface DockerContainer {
  image: string;
  container_name?: string;
  restart?: string;
  ports?: Port[];
  environments?: Environment[];
  volumes?: Volume[];
  networks?: Network[];
  depends_on?: string[];
}

export interface DockerServiceConfig {
  name: string;
  properties: DockerContainer;
}

export interface WorkspaceService extends IdentifiableElement {
  name: string,
  properties: DockerContainer
}

export interface WorkspaceProject {
  config: any,
  containerName?: string,
  basePath: string,
  environments: Environment[],
  ports: Port,
  dependsOn: any[],
}
