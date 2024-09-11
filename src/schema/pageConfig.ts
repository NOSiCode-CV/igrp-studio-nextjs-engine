import { JSONSchemaType, ValidateFunction } from 'ajv';
import { PageConfig, Component, FieldConfig, ColumnLayout, RowLayout, Field, ComponentConfig } from '../interfaces/types';
import { COMPONENTS_NAMES, COMPONENTS_TYPES, FIELD_TYPES, PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';


const fieldConfigSchema: JSONSchemaType<FieldConfig> = {
  type: 'object',
  properties: {
    type: {
      type: "string",
      enum: FIELD_TYPES,
      errorMessage: `Field type only must be on of ${FIELD_TYPES}`
    },
    name: {
      type: "string",
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage: `The name attribute must only contain letters and must not have spaces or special characters.`
    },
    label: {
      type: "string",
      pattern: PATTERNS.VALID_ALPHA_NUMERIC_CONVENTIONAL,
      nullable: true,
      errorMessage: `The label attribute must only contain alphanumeric characters and must not have spaces or special characters.`
    },
    colSize: {
      type: "number",
      nullable: true,
      errorMessage: `The number attribute must only contain number and must not have spaces or special characters.`
    },
    placeholder: {
      type: "string",
      nullable: true
    },

  },
  required: ['type', 'name'],
  additionalProperties: false
};


const fieldSchema: JSONSchemaType<Field> = {
  type: 'object',
  properties: {
    type: { type: 'string' },
    config: fieldConfigSchema
  },
  required: ['type', 'config'],
};

const configSchema: JSONSchemaType<ComponentConfig> ={
  type: 'object',
  properties: {
    title: { 
      type: 'string',
      nullable: true,
      pattern: PATTERNS.VALID_ALPHA_NUMERIC_CONVENTIONAL,
      errorMessage: 'The submit button text attribute must only contain alphanumeric and must not have spaces or special characters.'
    },
    submitBtnText: { 
      type: 'string',
      nullable: true,
      pattern: PATTERNS.VALID_ALPHA_NUMERIC_CONVENTIONAL,
      errorMessage: 'The submit button text attribute must only contain alphanumeric and must not have spaces or special characters.'
    },
    colSize: { 
      type: 'number', 
      nullable: true,
      errorMessage: 'Col size must by a number'
    },
  },
  required: [],
  additionalProperties: false
}


const columnLayoutSchema: JSONSchemaType<ColumnLayout> = {
  type: 'object',
  properties: {  
    componentName: { 
      type: 'string',
      errorMessage: `Component name only must be one of ${COMPONENTS_NAMES}`
    },
    config: {
      type: 'object',
      nullable: true,
      items: configSchema,
      errorMessage: 'The column config is not correct'
    },
    fields: {
      type: 'array',
      nullable: true,
      items: fieldSchema,
      errorMessage: 'The fields array must contain a valid field configuration'
    }
  },
  required: ['componentName'],
  additionalProperties: false
};


const rowLayoutSchema: JSONSchemaType<RowLayout> = {
  type: 'object',
  properties: {
    Col: {
      type: 'array',
      items: columnLayoutSchema,
      errorMessage: 'Invalid Col configuration'
    }
  },
  required: ['Col'],
  additionalProperties: false
};


const componentSchema: JSONSchemaType<Component> = {
  type: 'object',
  properties: {
    Row: {
      type: 'array',
      items: rowLayoutSchema
    }
  },
  required: ['Row'],
};


const pageConfigSchema: JSONSchemaType<PageConfig> = {
  type: 'object',
  properties: {
    type: {
      type: "string",
      const: "page",
      errorMessage: "The Page type must be 'page'",
    },
    pageName: {
      type: "string",
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage: 'The page name must only contain letters and must not have spaces or special characters.',
    },
    path: {
      type: "string",
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage: 'The path attribute must only contain letters and must not have spaces or special characters.',
    },
    components: {
      type: 'array',
      nullable: true,
      items: componentSchema,
      errorMessage: 'Components array must contain a valid configuration',
    }
  },
  required: ['type', 'pageName', 'path'],
  additionalProperties: false,
};

export const pageConfigValidate: ValidateFunction<PageConfig> =
  ajvInstance.compile<PageConfig>(pageConfigSchema);
