import { JSONSchemaType, ValidateFunction } from 'ajv';
import { PageConfig, ColumnComponent, FieldConfig, ColumnLayout, RowLayout, Field, Component, ColumnConfig } from '../interfaces/types';
import { COMPONENTS_NAMES, FIELD_TYPES, PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

// Schema para FieldConfig
const fieldConfigSchema: JSONSchemaType<FieldConfig> = {
  type: 'object',
  properties: {
    type: {
      type: "string",
      enum: FIELD_TYPES,
      errorMessage: `Field type must be one of ${FIELD_TYPES}`
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
      errorMessage: `The colSize attribute must be a number.`
    },
    placeholder: {
      type: "string",
      nullable: true
    },
  },
  required: ['type', 'name'],
  additionalProperties: false
};

// Schema para Field
const fieldSchema: JSONSchemaType<Field> = {
  type: 'object',
  properties: {
    type: { type: 'string' },
    config: fieldConfigSchema
  },
  required: ['type', 'config'],
};

// Schema para ConlumnConfig
const columnConfigSchema: JSONSchemaType<ColumnConfig> = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      nullable: true,
      pattern: PATTERNS.VALID_ALPHA_NUMERIC_CONVENTIONAL,
      errorMessage: 'The title attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    colSize: {
      type: 'number',
      errorMessage: 'The colSize attribute must be a number.'
    },
  },
  required: ['colSize'],
  additionalProperties: false
};

// Schema para ColumnComponent (los componentes anidados dentro de las columnas)
const columnComponentSchema: JSONSchemaType<ColumnComponent> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    componentName: {
      type: 'string',
      enum: COMPONENTS_NAMES,
      errorMessage: `Component name only must be one of ${COMPONENTS_NAMES}`
    },
    config: columnConfigSchema,
    fields: {
      type: 'array',
      nullable: true,
      items: fieldSchema,
      errorMessage: 'The fields array must contain valid field configurations.'
    }
  },
  required: ['id', 'componentName'],
  additionalProperties: false
};

// Schema para ColumnLayout (las columnas que contienen componentes)
const columnLayoutSchema: JSONSchemaType<ColumnLayout> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    components: {
      type: 'array',
      nullable: true,
      items: columnComponentSchema,
      errorMessage: 'Components array must contain valid component configurations.'
    }
  },
  required: ['id'],
  additionalProperties: false
};

// Schema para RowLayout (las filas que contienen columnas)
const rowLayoutSchema: JSONSchemaType<RowLayout> = {
  type: 'object',
  properties: {
    Col: {
      type: 'array',
      items: columnLayoutSchema,
      errorMessage: 'Invalid Col configuration.'
    }
  },
  required: ['Col'],
  additionalProperties: false
};

// Schema para Component (los componentes que contienen filas)
const componentSchema: JSONSchemaType<Component> = {
  type: 'object',
  properties: {
    Row: {
      type: 'array',
      items: rowLayoutSchema,
      errorMessage: 'Invalid Row configuration.'
    }
  },
  required: ['Row'],
  additionalProperties: false
};

// Schema para PageConfig (la configuración de la página)
const pageConfigSchema: JSONSchemaType<PageConfig> = {
  type: 'object',
  properties: {
    type: {
      type: "string",
      const: "page",
      errorMessage: "The Page type must be 'page'.",
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
      errorMessage: 'Components array must contain valid configurations.'
    }
  },
  required: ['type', 'pageName', 'path'],
  additionalProperties: false,
};

export const pageConfigValidate: ValidateFunction<PageConfig> =
  ajvInstance.compile<PageConfig>(pageConfigSchema);
