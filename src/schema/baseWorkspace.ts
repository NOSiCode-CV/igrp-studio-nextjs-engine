import { JSONSchemaType, ValidateFunction } from 'ajv';
import { AppConfig, WorkspaceConfig } from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

const workspaceConfigSchema: JSONSchemaType<WorkspaceConfig> = {
  type: 'object',
  properties: {
    engineVersion: {
      type: 'string',
      nullable: true,
      errorMessage:
        'The engine version attribute must be a valid string.',
    },
    id: {
      type: 'string',
      errorMessage:
        'The id attribute must be a valid string.',
    },
    name: {
      type: 'string'
    },
    slug: {
      type: 'string',
      pattern: PATTERNS.VALID_WORKSPACE_NAME_CONVENTIONAL,
      errorMessage: 'The workspace slug must only contain letters and must not have spaces or special characters except hyphen.'
    },
    description: {
      type: 'string',
      nullable: true,
    },
    projects: {
      type: 'array',
      items: {
        type: 'object'
      },
      nullable: true
    }
  },
  required: ['id', 'name'],
  additionalProperties: false,
};

export const workspaceConfigValidate: ValidateFunction<WorkspaceConfig> =
  ajvInstance.compile<WorkspaceConfig>(workspaceConfigSchema);
