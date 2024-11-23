import { JSONSchemaType, ValidateFunction } from 'ajv';
import { PageConfig, ColumnComponent, FieldConfig, ColumnLayout, RowLayout, Field, Component, ColumnConfig, IAction, IActionConfig } from '../interfaces/types';
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
    required: {
      type: "boolean",
      nullable: true,
      errorMessage: `The required attribute must be true or false.`
    },
    options: {
      type: "array",
      nullable: true,
      items: {
        type: "object",
        properties: {
          label: {
            type: "string",
            errorMessage: `The label attribute must be a string.`
          },
          value: {
            type: "string",
            errorMessage: `The value attribute must be a string.`
          }
        },
        required: ["label", "value"],
        additionalProperties: false
      },
      errorMessage: `The options attribute must be an array.`
    }
  },
  required: ['type', 'name'],
  additionalProperties: false
};

// Schema para Field
const fieldSchema: JSONSchemaType<Field> = {
  type: 'object',
  properties: {
    type: { type: 'string' },
    config: fieldConfigSchema,
    validation: {
      type: 'object',
      nullable: true,
      properties: {
        minLeng: { type: 'number', nullable: true },
        maxLeng: { type: 'number', nullable: true },
        errorMinLeng: { type: 'string', nullable: true },
        errorMaxLeng: { type: 'string', nullable: true },
        requiredMessage: { type: 'string', nullable: true },
      },
      additionalProperties: false
    }
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
    showTitle: {
      type:'boolean',
      nullable: true,
      errorMessage: 'The showTitle attribute must be true or false.'
    },

    colSize: {
      type: 'number',
      nullable: true,
      errorMessage: 'The colSize attribute must be a number.'
    },
    pageSize: {
      type: 'number',
      nullable: true,
      errorMessage: 'The pageSize attribute must be a number.'
    },
    isPagination: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The isPagination attribute must be true or false.'
    },
    isGlobalFilter: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The isGlobalFilter attribute must be true or false.'
    },
    SearchPlaceholder: {
      type: 'string',
      nullable: true,
      errorMessage: 'The SearchPlaceholder attribute must be a string.'
    },
    isSortable: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The isSortable attribute must be true or false.'
    },
    actionTitle: {
      type: 'string',
      nullable: true,
      errorMessage: 'The actionTitle attribute must be a string.'
    },
    servrSsidePagination: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The servrSsidePagination attribute must be true or false.'
    },
    buttonText: {
      type: 'string',
      nullable: true,
      errorMessage: 'The buttonText attribute must be a string.'
    },
    buttonColor: {
      type: 'string',
      nullable: true,
      errorMessage: 'The buttonColor attribute must be a string.'
    }
  },
  required: [],
  additionalProperties: false
};
const actionConfigSchema: JSONSchemaType<IActionConfig> = {
  type: 'object',
  properties: {
    icon: {
      type: 'string',
      nullable: true,
      errorMessage: 'The icon attribute must be a string.'
    },
    label: {
      type: 'string',
      nullable: true,
      errorMessage: 'The label attribute must be a string.'
    },
    action: {
      type: 'string',
      nullable: true,
      errorMessage: 'The action attribute must be a string.'
    },
    target: {
      type: 'string',
      nullable: true,
      errorMessage: 'The target attribute must be a string.'
    },
    buttonColor: {
      type: 'string',
      nullable: true,
      errorMessage: 'The color attribute must be a string.'
    },
    buttonText: {
      type: 'string',
      nullable: true,
      errorMessage: 'The text attribute must be a string.'
    }
  },
  required: [],
  additionalProperties: false
}
const actionSchema: JSONSchemaType<IAction> = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      errorMessage: 'The type attribute must be a string.'
    },
    config: actionConfigSchema
  },
  required: ['type'],
  additionalProperties: true
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
    },
    actions: {
      type: 'array',
      nullable: true,
      items: actionSchema,
      errorMessage: 'The actions array must contain valid action configurations.'
    },
    formRefs: {
      type: 'object',
      nullable: true,
      errorMessage: 'The formRefs attribute must be an object.'
    },
    values: {
      type: 'object',
      nullable: true,
      errorMessage: 'The values attribute must be an object.'
    },
    serviceAction: {
      type: 'object',
      nullable: true,
      errorMessage: 'The serviceAction attribute must be an object.'
    },
    target: {
      type: 'string',
      nullable: true,
      errorMessage: 'The target attribute must be a string.'
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
    colSize: {
      type: 'number',
      errorMessage: 'The colSize attribute must be a number.'
    },
    components: {
      type: 'array',
      nullable: true,
      items: columnComponentSchema,
      errorMessage: 'Components array must contain valid component configurations.'
    }
  },
  required: ['id', 'colSize'],
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
