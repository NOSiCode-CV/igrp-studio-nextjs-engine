import { JSONSchemaType, ValidateFunction } from 'ajv';
import { AppConfig } from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

const appConfigSchema: JSONSchemaType<AppConfig> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage:
        'The project id attribute must only contain alphanumeric characters and must not have spaces or special characters.',
    },
    workspaceId: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage:
        'The workspace id attribute must only contain alphanumeric characters and must not have spaces or special characters.',
    },
    type: { 
      type: 'string', 
      const: 'baseApp',
      errorMessage: "The app config type attribute must be 'baseApp'."
    },
    appName: {
      type: 'string',
      pattern: PATTERNS.VALID_APP_NAME_CONVENTIONAL,
      errorMessage: 'The application name must only contain letters and must not have spaces or special characters except hyphen.'
    },
    description: {
      type: 'string',
      nullable: true,
    },
  },
  required: ['id', 'workspaceId', 'type', 'appName'],
  additionalProperties: false,
};

export const appConfigValidate: ValidateFunction<AppConfig> =
  ajvInstance.compile<AppConfig>(appConfigSchema);
