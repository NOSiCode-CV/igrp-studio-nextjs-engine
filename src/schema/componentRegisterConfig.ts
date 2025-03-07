import { JSONSchemaType, ValidateFunction } from 'ajv';
import { AppConfig, ComponentRegisterConfig, ComponentRegistrationConfig } from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

const componentRegisterConfigSchema: JSONSchemaType<ComponentRegisterConfig> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: "The component name attribute must only contain alphanumeric characters and must not have spaces or special characters."
    },
    imports: {
      type: 'array',
      items: { type: 'string' },
      errorMessage: "The imports must be an array of strings"
    },
    icon: {
      type: 'string',
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage: "The icon attribute must only contain letters and must not have spaces or special characters."
    },
    group: {
      type: 'string',
      errorMessage: "The group attribute must be a valid string."
    },
    label: {
      type: 'string',
      errorMessage: "The label attribute must be a valid string."
    },
    variants: {
      type: 'object'
    },
    parentProperties: {
      type: 'object'
    },
    properties: {
      type: 'object'
    },
    propertiesMapping: {
      type: 'object'
    },
    states: {
      type: 'array',
      items: { type: 'string' },
      errorMessage: "The states must be an array of strings"
    },
    renderer: {
      type: 'string',
      enum: ['hbs', 'default'],
      errorMessage: "The renderer attribute must only be 'hbs' or 'default'."
    },
    templatePath: {
      type: 'string',
      nullable: true,
      errorMessage: "The template path attribute must be a valid path string."
    },
  },
  required: ['name', 'imports', 'icon', 'group', 'label', 'variants', 'parentProperties', 'properties', 'propertiesMapping', 'states', 'renderer'],
  additionalProperties: false,
}

const componentRegistrationConfigSchema: JSONSchemaType<ComponentRegistrationConfig> = {
  type: 'object',
  properties: {
    components: {
      type: 'array',
      items: componentRegisterConfigSchema,
      errorMessage: "The components must be an array of component register configuration."
    },
  },
  required: ['components'],
  additionalProperties: false,
};

export const componentRegistrationValidate: ValidateFunction<AppConfig> =
  ajvInstance.compile<AppConfig>(componentRegistrationConfigSchema);
