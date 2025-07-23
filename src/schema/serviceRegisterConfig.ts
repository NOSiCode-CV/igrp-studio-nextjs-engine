import { JSONSchemaType, ValidateFunction } from 'ajv';
import { DockerServiceRegisterConfig, DockerServiceRegistrationConfig } from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

const dockerServiceRegisterConfigSchema: JSONSchemaType<DockerServiceRegisterConfig> = {
  type: 'object',
  properties: {
    version: {
      type: 'string',
      nullable: true,
      errorMessage:
        'The engine version attribute must be a valid string.',
    },
    name: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: "The docker service name attribute must only contain alphanumeric characters and must not have spaces or special characters."
    },
    label: {
      type: 'string',
      errorMessage: "The docker service label attribute must be a valid string."
    },
    custom: {
      type: 'string',
      nullable: true,
      errorMessage: "The custom attribute must be a valid YAML formatted string."
    },
    properties: {
      type: 'object'
    },
    propertiesMapping: {
      type: 'object'
    },
    renderer: {
      type: 'string',
      enum: ['hbs', 'default', 'custom'],
      errorMessage: "The renderer attribute must only be 'hbs', 'custom' or 'default'."
    },
    templatePath: {
      type: 'string',
      nullable: true,
      errorMessage: "The template path attribute must be a valid path string."
    },
  },
  required: ['name', 'properties', 'propertiesMapping', 'renderer'],
  additionalProperties: false,
}

const dockerServiceRegistrationConfigSchema: JSONSchemaType<DockerServiceRegistrationConfig> = {
  type: 'object',
  properties: {
    version: {
      type: 'string',
      nullable: true,
      errorMessage:
        'The engine version attribute must be a valid string.',
    },
    services: {
      type: 'array',
      items: dockerServiceRegisterConfigSchema,
      errorMessage: "The dockerServices must be an array of dockerService register configuration."
    },
  },
  required: ['services'],
  additionalProperties: false,
};

export const dockerServiceRegistrationValidate: ValidateFunction<DockerServiceRegistrationConfig> =
  ajvInstance.compile<DockerServiceRegistrationConfig>(dockerServiceRegistrationConfigSchema);
