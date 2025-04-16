import { JSONSchemaType, ValidateFunction } from 'ajv';
import {
  Dependency,
  Environment, Port, ProjectDataSource, Volume,
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
    reference: {
      type: 'number',
      maximum: 65535,
      minimum: 1,
      nullable: true,
      errorMessage: 'The reference port, if provided, must be a number that ranges from 1 to 65535.'
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
      errorMessage: 'The base path attribute must be a valid string.'
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
    id: {
      type: 'string',
      errorMessage:
        'The id attribute must be a valid string.',
    },
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
  required: ['id', 'name', 'properties'],
  additionalProperties: false,
};

const workspaceProjectConfigSchema: JSONSchemaType<WorkspaceProjectsConfig> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      errorMessage:
        'The id attribute must be a valid string.',
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
  },
  required: ['workspace', 'projects'],
  additionalProperties: false,
};

export const workspaceProjectsConfigValidate: ValidateFunction<WorkspaceProjectsConfig> =
  ajvInstance.compile<WorkspaceProjectsConfig>(workspaceProjectConfigSchema);
