import { JSONSchemaType, ValidateFunction } from 'ajv';
import { AppConfig } from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

const appConfigSchema: JSONSchemaType<AppConfig> = {
  type: 'object',
  properties: {
    type: { 
      type: 'string', 
      const: 'baseApp',
      errorMessage: "The app config type attribute must be 'baseApp'."
    },
    appName: {
      type: 'string',
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage: 'The application name must only contain letters and must not have spaces or special characters.'
    },
  },
  required: ['type', 'appName'],
  additionalProperties: false,
};

export const appConfigValidate: ValidateFunction<AppConfig> =
  ajvInstance.compile<AppConfig>(appConfigSchema);
