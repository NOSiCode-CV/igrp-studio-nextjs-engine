import { PageConfig } from '../interfaces/types';
import { ajvInstance } from '../utils/ajv-instance';
import { JSONSchemaType, ValidateFunction } from 'ajv';
import { PATTERNS } from '../utils/constants';

const pageSchema: JSONSchemaType<PageConfig> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: 'page' },
    id: { type: 'number', nullable: true },
    path: { type: 'string', minLength: 2, pattern: PATTERNS.NO_SPACE_AND_HYPHEN },
    pageName: { type: 'string', minLength: 2, pattern: PATTERNS.NO_SPACE_AND_HYPHEN },
    components:[]
  },
  required: ['pageName', 'path', 'type'],
  additionalProperties: false,
};


export const pageValidate:ValidateFunction<PageConfig> = ajvInstance.compile<PageConfig>(pageSchema);



