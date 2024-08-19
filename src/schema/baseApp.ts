import { JSONSchemaType, ValidateFunction } from 'ajv';
import { AppConfig } from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

const appConfigSchema: JSONSchemaType<AppConfig> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: 'baseApp' },
    appName: {
      type: 'string',
      minLength: 3,
      pattern: PATTERNS.NO_SPACE_AND_HYPHEN,
    },
  },
  required: ['type', 'appName'],
  additionalProperties: false,
};

export const appConfigValidate: ValidateFunction<AppConfig> =
  ajvInstance.compile<AppConfig>(appConfigSchema);
