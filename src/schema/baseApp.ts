import { JSONSchemaType, ValidateFunction } from 'ajv';
import { AppConfig } from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

const appConfigSchema: JSONSchemaType<AppConfig> = {
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
      errorMessage:
        'The project id attribute must be a valid string.',
    },
    type: { 
      type: 'string', 
      const: 'nextjs',
      errorMessage: "The app config type attribute must be 'nextjs'."
    },
    name: {
      type: 'string',
      pattern: PATTERNS.VALID_APP_NAME_CONVENTIONAL,
      errorMessage: 'The application name must only contain letters and must not have spaces or special characters except hyphen.'
    },
    description: {
      type: 'string',
      nullable: true,
    },
    displayName: {
      type: 'string',
      nullable: true,
    },
  },
  required: ['id', 'type', 'name'],
  additionalProperties: false,
};

export const appConfigValidate: ValidateFunction<AppConfig> =
  ajvInstance.compile<AppConfig>(appConfigSchema);
