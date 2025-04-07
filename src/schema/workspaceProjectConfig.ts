import { JSONSchemaType, ValidateFunction } from 'ajv';
import {
  Dependency,
  Environment,
  PlatformAuthConfig,
  PlatformConfig, PlatformFileConfig, PlatformMailConfig,
  PlatformServices, Port, ProjectDataSource, Volume,
  WorkspaceProject,
  WorkspaceProjectsConfig, WorkspaceService,
} from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';
import { dockerContainerConfigSchema } from './dockerContainerConfig';

const dependencySchema: JSONSchemaType<Dependency> = {
  type: 'object',
  properties: {
    service: {
      type: 'string',
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      errorMessage: 'The service must only contain letters and must not have spaces or special characters except underscore (_) and hyphen (-).'
    },
  },
  required: ['service'],
  additionalProperties: false,
};

const environmentSchema: JSONSchemaType<Environment> = {
  type: 'object',
  properties: {
    key: {
      type: 'string',
      errorMessage: 'The key attribute must be a string.'
    },
    value: {
      type: 'string',
      errorMessage: 'The value attribute must be a string.'
    },
  },
  required: ['key', 'value'],
  additionalProperties: false,
};

const portSchema: JSONSchemaType<Port> = {
  type: 'object',
  properties: {
    internal: {
      type: 'number',
      maximum: 65535,
      minimum: 1,
      errorMessage: 'The internal port must be a number that ranges from 1 to 65535.'
    },
    external: {
      type: 'number',
      maximum: 65535,
      minimum: 1,
      errorMessage: 'The external port must be a number that ranges from 1 to 65535.'
    },
  },
  required: ['internal', 'external'],
  additionalProperties: false,
};

const volumeSchema: JSONSchemaType<Volume> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      errorMessage: 'The volume name must be a valid string..'
    },
    path: {
      type: 'string',
      errorMessage: 'The volume path must be a valid string..'
    },
    driver: {
      type: 'string',
      errorMessage: 'The volume driver must be a valid string.'
    },
  },
  required: ['name', 'path', 'driver'],
  additionalProperties: false,
};

const dataSourceSchema: JSONSchemaType<ProjectDataSource> = {
  type: 'object',
  properties: {
    imageVersion: {
      type: 'string',
      nullable: true,
      errorMessage: 'The image version, if provided, must be a valid string.'
    },
    containerName: {
      type: 'string',
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      nullable: true,
      errorMessage: 'The container name, if provided, must only contain letters and must not have spaces or special characters except underscore (_).'
    },
    dbUser: {
      type: 'string',
      nullable: true,
      errorMessage: 'The db user must be a valid string.'
    },
    dbSid: {
      type: 'string',
      nullable: true,
      errorMessage: 'The db SID, if provided, must be a valid string.'
    },
    dbHostName: {
      type: 'string',
      nullable: true,
      errorMessage: 'The db hostname, if provided, must be a valid string.'
    },
    dbPassword: {
      type: 'string',
      errorMessage: 'The db password must be a valid string.'
    },
    dbName: {
      type: 'string',
      errorMessage: 'The db name must be a valid string.'
    },
    ports: {
      type: "object",
      anyOf: [
        portSchema
      ],
      errorMessage: "The 'ports' field must be a valid Port configuration.",
    },
    volumes: {
      type: "object",
      anyOf: [
        volumeSchema
      ],
      errorMessage: "The 'volume' field must be a valid Volume configuration.",
    },
  },
  required: ['dbPassword', 'dbName', 'ports', 'volumes'],
  additionalProperties: false,
};

const platformConfigSchema: JSONSchemaType<PlatformConfig> = {
  type: 'object',
  properties: {
    version: {
      type: 'string',
      nullable: true,
      errorMessage: 'The version, if provided, must be a valid string.'
    },
    containerName: {
      type: 'string',
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      errorMessage: 'The container name, if provided, must only contain letters and must not have spaces or special characters except underscore (_).'
    },
    ports: {
      type: "object",
      anyOf: [
        portSchema
      ],
      errorMessage: "The 'ports' field must be a valid Port configuration.",
    },
  },
  required: ['containerName', 'ports'],
  additionalProperties: false,
};

const platformAuthConfigSchema: JSONSchemaType<PlatformAuthConfig> = {
  type: 'object',
  properties: {
    version: {
      type: 'string',
      nullable: true,
      errorMessage: 'The version, if provided, must be a valid string.'
    },
    containerName: {
      type: 'string',
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      errorMessage: 'The container name, if provided, must only contain letters and must not have spaces or special characters except underscore (_).'
    },
    ports: {
      type: "object",
      anyOf: [
        portSchema
      ],
      errorMessage: "The 'ports' field must be a valid Port configuration.",
    },
    dataSource: {
      type: "object",
      anyOf: [
        dataSourceSchema
      ],
      errorMessage: "The 'dataSource' field must be a valid Project Data Source configuration.",
    },
    adminUser: {
      type: 'string',
      errorMessage: 'The admin user must be a valid string.'
    },
    adminPassword: {
      type: 'string',
      errorMessage: 'The admin password must be a valid string.'
    },
    hostname: {
      type: 'string',
      errorMessage: 'The hostname must be a valid string.'
    },
    volumes: {
      type: "object",
      anyOf: [
        volumeSchema
      ],
      errorMessage: "The 'volume' field must be a valid Volume configuration.",
    },
  },
  required: ['containerName', 'ports', 'dataSource', 'adminUser', 'adminPassword', 'hostname', 'volumes'],
  additionalProperties: false,
};

const platformFileConfigSchema: JSONSchemaType<PlatformFileConfig> = {
  type: 'object',
  properties: {
    version: {
      type: 'string',
      nullable: true,
      errorMessage: 'The version, if provided, must be a valid string.'
    },
    containerName: {
      type: 'string',
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      errorMessage: 'The container name, if provided, must only contain letters and must not have spaces or special characters except underscore (_).'
    },
    ports: {
      type: 'array',
      items: portSchema,
      errorMessage: "The 'ports' attribute must be a valid port array configuration."
    },
    enableSecurity: {
      type: "boolean",
      nullable: true,
      errorMessage: "The 'enableSecurity', if provided, field must be a valid boolean.",
    },
    adminUser: {
      type: 'string',
      errorMessage: 'The admin user must be a valid string.'
    },
    adminPassword: {
      type: 'string',
      errorMessage: 'The admin password must be a valid string.'
    },
    volumes: {
      type: "object",
      anyOf: [
        volumeSchema
      ],
      errorMessage: "The 'volume' field must be a valid Volume configuration.",
    },
  },
  required: ['containerName', 'ports', 'adminUser', 'adminPassword', 'volumes'],
  additionalProperties: false,
};

const platformMailConfigSchema: JSONSchemaType<PlatformMailConfig> = {
  type: 'object',
  properties: {
    version: {
      type: 'string',
      nullable: true,
      errorMessage: 'The version, if provided, must be a valid string.'
    },
    containerName: {
      type: 'string',
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      errorMessage: 'The container name, if provided, must only contain letters and must not have spaces or special characters except underscore (_).'
    },
    protocol: {
      type: 'string',
      nullable: true,
      errorMessage: 'The protocol, if provided, must be a valid string.'
    },
    sender: {
      type: 'string',
      errorMessage: 'The sender must be a valid string.'
    },
    host: {
      type: 'string',
      errorMessage: 'The host must be a valid string.'
    },
    port: {
      type: 'number',
      errorMessage: 'The host must be a valid number.'
    },
    username: {
      type: 'string',
      errorMessage: 'The username must be a valid string.'
    },
    password: {
      type: 'string',
      errorMessage: 'The password must be a valid string.'
    },
  },
  required: ['sender', 'host', 'port', 'username', 'password'],
  additionalProperties: false,
};

const platformServiceSchema: JSONSchemaType<PlatformServices> = {
  type: 'object',
  properties: {
    dataSource: {
      type: "object",
      anyOf: [
        dataSourceSchema
      ],
      errorMessage: "The 'dataSource' field must be a valid Project Data Source configuration.",
    },
    appManager: {
      type: "object",
      anyOf: [
        platformConfigSchema
      ],
      errorMessage: "The 'appManager' field must be a valid Platform Element configuration.",
    },
    userManager: {
      type: "object",
      anyOf: [
        platformConfigSchema
      ],
      errorMessage: "The 'userManager' field must be a valid Platform Element configuration.",
    },
    ui: {
      type: "object",
      anyOf: [
        platformConfigSchema
      ],
      errorMessage: "The 'ui' field must be a valid Platform Element configuration.",
    },
    auth: {
      type: "object",
      anyOf: [
        platformAuthConfigSchema
      ],
      errorMessage: "The 'auth' field must be a valid Platform Auth configuration.",
    },
    file: {
      type: "object",
      anyOf: [
        platformFileConfigSchema
      ],
      errorMessage: "The 'file' field must be a valid Platform File Management configuration.",
    },
    mail: {
      type: "object",
      anyOf: [
        platformMailConfigSchema
      ],
      errorMessage: "The 'mail' field must be a valid Platform Mail configuration.",
    },
  },
  required: ['dataSource', 'appManager', 'userManager', 'auth', 'ui', 'file', 'mail'],
  additionalProperties: false,
};

const workspaceProjectSchema: JSONSchemaType<WorkspaceProject> = {
  type: 'object',
  properties: {
    config: {
      type: 'object',
      nullable: true,
      errorMessage: "The attribute 'config' must be a valid project configuration."
    },
    containerName: {
      type: 'string',
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      nullable: true,
      errorMessage: 'The container name, if provided, must only contain letters and must not have spaces or special characters except underscore (_).'
    },
    basePath: {
      type: 'string',
      pattern: PATTERNS.PATH_SLASH_VALIDATION_PATTERN,
      errorMessage: 'The base path attribute can only contain alphanumeric characters and slash, without spaces or other special characters.'
    },
    environments: {
      type: 'array',
      items: environmentSchema,
      errorMessage: "The 'environments' attribute must be a valid environments array configuration."
    },
    ports: {
      type: "object",
      anyOf: [
        portSchema
      ],
      errorMessage: "The 'port' field must be a valid Port configuration.",
    },
    dependsOn: {
      type: 'array',
      items: dependencySchema,
      errorMessage: "The 'dependsOn' attribute must be a valid dependency array configuration."
    },
    dataSource: {
      type: "object",
      nullable: true,
      anyOf: [
        dataSourceSchema
      ],
      errorMessage: "The 'dataSource' field, if provided, must be a valid Project Data Source configuration.",
    },
  },
  required: ['basePath', 'environments', 'ports', 'dependsOn'],
  additionalProperties: false,
};

const workspaceServiceSchema: JSONSchemaType<WorkspaceService> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      errorMessage: 'The service name must only contain letters and must not have spaces or special characters except underscore (_).'
    },
    properties: {
      type: "object",
      anyOf: [
        dockerContainerConfigSchema
      ],
      errorMessage: "The 'properties' field must be a valid Docker Container configuration.",
    },
  },
  required: ['name', 'properties'],
  additionalProperties: false,
};

const workspaceProjectConfigSchema: JSONSchemaType<WorkspaceProjectsConfig> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage:
        'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.',
    },
    workspace: {
      type: 'string',
      pattern: PATTERNS.VALID_WORKSPACE_NAME_CONVENTIONAL,
      errorMessage: 'The workspace slug must only contain letters and must not have spaces or special characters except hyphen.'
    },
    projects: {
      type: 'array',
      items: workspaceProjectSchema,
      errorMessage: "The 'projects' attribute must be a valid workspace project array configuration."
    },
    services: {
      type: 'array',
      items: workspaceServiceSchema,
      errorMessage: "The 'services' attribute must be a valid workspace service array configuration."
    },
    platform: {
      type: "object",
      anyOf: [
        platformServiceSchema
      ],
      errorMessage: "The 'platform' field must be a valid Platform Service configuration.",
    }
  },
  required: ['workspace', 'projects', 'platform'],
  additionalProperties: false,
};

export const workspaceProjectsConfigValidate: ValidateFunction<WorkspaceProjectsConfig> =
  ajvInstance.compile<WorkspaceProjectsConfig>(workspaceProjectConfigSchema);
