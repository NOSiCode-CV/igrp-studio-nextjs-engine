import { JSONSchemaType, ValidateFunction } from 'ajv';
import {
  ComponentRegisterConfig,
  ComponentRegistrationConfig, DefaultChildComponent,
  Import,
  RegisterState,
  State,
} from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

const importSchema: JSONSchemaType<Import> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    namespace: {
      type: 'string',
      errorMessage: 'The namespace must be a valid string.'
    },
  },
  required: ['namespace'],
  additionalProperties: false,
}

const stateSchema: JSONSchemaType<State> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    type: {
      type: 'string',
      errorMessage: 'The type must be a valid string.'
    },
    name: {
      type: 'string',
      errorMessage: 'The name must be a valid string.'
    },
    defaultValue: {
      type: 'string',
      nullable: true,
      errorMessage: 'The default value, if provided, must be a valid string.'
    },
    generate: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The generate value, if provided, must be a valid boolean.'
    },
    isArray: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The is array value, if provided, must be a valid boolean.'
    },
    isOptional: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The is optional value, if provided, must be a valid boolean.'
    },
    imports: {
      type: 'array',
      nullable: true,
      items: importSchema,
      errorMessage: 'The imports attribute must be an array of valid import definition configuration.'
    },
  },
  required: ['id', 'type', 'name'],
  additionalProperties: false,
}

const registryStateSchema: JSONSchemaType<RegisterState> = {
  type: 'object',
  properties: {
    state: stateSchema,
    required: {
      type: 'boolean',
      errorMessage: "The code must be a boolean."
    },
  },
  required: ['state', 'required'],
  additionalProperties: false,
};

const defaultChildSchema: JSONSchemaType<DefaultChildComponent> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      errorMessage: `Component name only must be a valid string`,
    },
    children: {
      type: 'array',
      items: { type: 'object', required: ['name'] },
      nullable: true,
      errorMessage: 'Children property must be a valid array of default child object definition'
    }
  },
  required: ['name'],
  additionalProperties: false,
}

const componentRegisterConfigSchema: JSONSchemaType<ComponentRegisterConfig> = {
  type: 'object',
  properties: {
    version: {
      type: 'string',
      nullable: true,
      errorMessage: 'The engine version attribute must be a valid string.',
    },
    name: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage:
        'The component name attribute must only contain alphanumeric characters and must not have spaces or special characters.',
    },
    imports: {
      type: 'array',
      items: { type: 'string' },
      errorMessage: 'The imports must be an array of strings',
    },
    defaultValue: {
      type: 'boolean',
      errorMessage: 'The default value attribute must be a boolean.',
    },
    allowTypes: {
      type: 'boolean',
      errorMessage: 'The allow types attribute must be a boolean.',
    },
    allowChildren: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The allow children, if provided, attribute must be a boolean.',
    },
    deprecated: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The deprecated attribute must be a boolean.',
    },
    replacedBy: {
      type: 'string',
      nullable: true,
      errorMessage: 'The replaced by attribute must be a valid string.',
    },
    group: {
      type: 'string',
      errorMessage: 'The group attribute must be a valid string.',
    },
    label: {
      type: 'string',
      errorMessage: 'The label attribute must be a valid string.',
    },
    customClassName: {
      type: 'string',
      nullable: true,
      errorMessage: 'The label attribute must be a valid string.',
    },
    customComponentTag: {
      type: 'string',
      nullable: true,
      errorMessage: 'The label attribute must be a valid string.',
    },
    variants: {
      type: 'object',
    },
    metadata: {
      type: 'object',
    },
    properties: {
      type: 'object',
    },
    propertiesMapping: {
      type: 'object',
    },
    interactions: {
      type: 'object',
    },
    interactionsMapping: {
      type: 'object',
    },
    data: {
      type: 'object',
    },
    dataMapping: {
      type: 'object',
    },
    style: {
      type: 'object',
    },
    styleMapping: {
      type: 'object',
    },
    rules: {
      type: 'object',
    },
    rulesMapping: {
      type: 'object',
    },
    childProperties: {
      type: 'object',
      nullable: true,
    },
    childPropertiesMapping: {
      type: 'object',
      nullable: true,
    },
    states: {
      type: 'array',
      items: registryStateSchema,
      errorMessage: 'The states must be an array of valid register state definitions',
    },
    childrenTypes: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'name',
          'imports',
          'defaultValue',
          'group',
          'label',
          'variants',
          'properties',
          'propertiesMapping',
          'states',
          'childrenTypes',
          'renderer',
        ],
      },
      errorMessage: 'The children types must be an array of objects',
    },
    acceptedChildren: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'name',
          'imports',
          'defaultValue',
          'group',
          'label',
          'variants',
          'properties',
          'propertiesMapping',
          'states',
          'childrenTypes',
          'renderer',
        ],
      },
      errorMessage: 'The accepted children must be an array of objects',
    },
    defaultChildren: {
      type: 'array',
      items: defaultChildSchema,
      errorMessage: 'The default children must be an array of default child object definition',
    },
    renderer: {
      type: 'string',
      enum: ['hbs', 'default', 'custom', 'none'],
      errorMessage: "The renderer attribute must only be 'hbs', 'custom' or 'default'.",
    },
    templatePath: {
      type: 'string',
      nullable: true,
      errorMessage: 'The template path attribute must be a valid path string.',
    },
  },
  required: [
    'name',
    'imports',
    'defaultValue',
    'allowTypes',
    'group',
    'label',
    'variants',
    'properties',
    'propertiesMapping',
    'states',
    'childrenTypes',
    'renderer',
  ],
  additionalProperties: false,
};

const componentRegistrationConfigSchema: JSONSchemaType<ComponentRegistrationConfig> = {
  type: 'object',
  properties: {
    version: {
      type: 'string',
      nullable: true,
      errorMessage:
        'The engine version attribute must be a valid string.',
    },
    components: {
      type: 'array',
      items: componentRegisterConfigSchema,
      errorMessage: "The components must be an array of component register configuration."
    },
  },
  required: ['components'],
  additionalProperties: false,
};

export const componentRegistrationValidate: ValidateFunction<ComponentRegistrationConfig> =
  ajvInstance.compile<ComponentRegistrationConfig>(componentRegistrationConfigSchema);
