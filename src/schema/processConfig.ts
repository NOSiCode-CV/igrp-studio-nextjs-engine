import { JSONSchemaType, ValidateFunction } from 'ajv';
import {
  ProcessConfig,
  ProcessStep,
} from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

const stepSchema: JSONSchemaType<ProcessStep> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    name: {
      type: 'string',
      errorMessage: 'The artifact name must be a valid string.'
    },
  },
  required: ['id', 'name'],
  additionalProperties: false,
}

// Schema para ProcessConfig (la configuración de la página)
const processConfigSchema: JSONSchemaType<ProcessConfig> = {
  type: 'object',
  properties: {
    version: {
      type: 'string',
      nullable: true,
      errorMessage:
        'The engine version attribute must be a valid string.',
    },
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    type: {
      type: "string",
      const: "process",
      errorMessage: "The type must be 'process'.",
    },
    name: {
      type: "string",
      pattern: PATTERNS.PROCESS_NAME_VALIDATION_PATTERN,
      errorMessage: 'The process name must only contain letters and must not have spaces or special characters except underscore (_), hyphen (-) and dot (.).',
    },
    description: {
      type: 'string',
      nullable: true,
      pattern: PATTERNS.VALID_ALPHA_NUMERIC_CONVENTIONAL,
      errorMessage:
        'The description, if provided, must only contain letters, numbers and spaces and must not have special characters.',
    },
    processKey: {
      type: 'string',
      errorMessage: 'The process key attribute must be a valid string.'
    },
    processVersion: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The process version attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    steps: {
      type: 'array',
      nullable: true,
      items: stepSchema,
      errorMessage: 'The artifacts attribute must be an array of valid artifact definition configuration.'
    },
  },
  required: ['type', 'name'],
  additionalProperties: false,
};

export const processConfigValidate: ValidateFunction<ProcessConfig> =
  ajvInstance.compile<ProcessConfig>(processConfigSchema);
