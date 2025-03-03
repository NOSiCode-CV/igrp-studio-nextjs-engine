import { JSONSchemaType, ValidateFunction } from 'ajv';
import {
  ComponentConfig,
  FieldConfig,
  Field,
  ColumnConfig,
  IAction,
  IActionConfig,
  Layout, CommonProperties,
} from '../interfaces/types';
import { COMPONENTS, COMPONENTS_NAMES, FIELD_TYPES, PATTERNS } from '../utils/constants';
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
    applyToAllForms: {
      type: "boolean",
      nullable: true
    },
    refreshTable: {
      type: "boolean",
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
    },
    color: {
      type: "string",
      nullable: true,
      errorMessage: `The buttonColor attribute must be a string.`
    },
    className: {
      type: "string",
      nullable: true,
      errorMessage: `The buttonColor attribute must be a string.`
    },
    buttonText: {
      type: "string",
      nullable: true,
      errorMessage: `The buttonText attribute must be a string.`
    },
    targetForms: {
      type: "array",
      items: {type: "string"},
      nullable: true,
      errorMessage: `The buttonText attribute must be a string.`
    },
    actionType: {
      type: 'string',
      nullable: true,
      errorMessage: 'The action attribute must be a string.'
    },
    alertTitle: {
      type: 'string',
      nullable: true,
    },
    alertMessage: {
      type: 'string',
      nullable: true,
    },
    alertIcon: {
      type: 'string',
      nullable: true,
    },
    alertConfirmButtonLabel: {
      type: 'string',
      nullable: true,
    },
    alertCancelButtonLabel: {
      type: 'string',
      nullable: true,
    },
    alertConfirmButtonClass: {
      type: 'string',
      nullable: true,
    },
    alertCancelButtonClass: {
      type: 'string',
      nullable: true,
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
    applyToAllForms: {
      type: "boolean",
      nullable: true
    },
    refreshTable: {
      type: "boolean",
      nullable: true
    },
    targetForms: {
      type: "array",
      items: {type: "string"},
      nullable: true,
      errorMessage: `The buttonText attribute must be a string.`
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
    className: {
      type: 'string',
      nullable: true,
      errorMessage: 'The buttonColor attribute must be a string.'
    },
    actionType: {
      type: 'string',
      nullable: true,
      errorMessage: 'The action attribute must be a string.'
    },
    alertTitle: {
      type: 'string',
      nullable: true,
    },
    alertMessage: {
      type: 'string',
      nullable: true,
    },
    alertIcon: {
      type: 'string',
      nullable: true,
    },
    alertConfirmButtonLabel: {
      type: 'string',
      nullable: true,
    },
    alertCancelButtonLabel: {
      type: 'string',
      nullable: true,
    },
    alertConfirmButtonClass: {
      type: 'string',
      nullable: true,
    },
    alertCancelButtonClass: {
      type: 'string',
      nullable: true,
    },
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
    actionType: {
      type: 'string',
      nullable: true,
      errorMessage: 'The action attribute must be a string.'
    },
    target: {
      type: 'string',
      nullable: true,
      errorMessage: 'The target attribute must be a string.'
    },
    className: {
      type: 'string',
      nullable: true,
      errorMessage: 'The className attribute must be a string.'
    },
    color: {
      type: 'string',
      nullable: true,
      errorMessage: 'The color attribute must be a string.'
    },
    buttonText: {
      type: 'string',
      nullable: true,
      errorMessage: 'The text attribute must be a string.'
    },
    refreshTable: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The text attribute must be a string.'
    },
    alertTitle: {
      type: 'string',
      nullable: true,
    },
    alertMessage: {
      type: 'string',
      nullable: true,
    },
    alertIcon: {
      type: 'string',
      nullable: true,
    },
    alertConfirmButtonLabel: {
      type: 'string',
      nullable: true,
    },
    alertCancelButtonLabel: {
      type: 'string',
      nullable: true,
    },
    alertConfirmButtonClass: {
      type: 'string',
      nullable: true,
    },
    alertCancelButtonClass: {
      type: 'string',
      nullable: true,
    },
  },
  required: [],
  additionalProperties: false
}
const actionSchema: JSONSchemaType<IAction> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
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
const commonPropertiesSchema: JSONSchemaType<CommonProperties> = {
  type: "object",
  properties: {
    variant: { type: "string", nullable: true },
    className: { type: "string", nullable: true },

    padding: { type: "string", nullable: true },
    paddingX: { type: "string", nullable: true },
    paddingY: { type: "string", nullable: true },
    paddingTop: { type: "string", nullable: true },
    paddingBottom: { type: "string", nullable: true },
    paddingLeft: { type: "string", nullable: true },
    paddingRight: { type: "string", nullable: true },

    margin: { type: "string", nullable: true },
    marginX: { type: "string", nullable: true },
    marginY: { type: "string", nullable: true },
    marginTop: { type: "string", nullable: true },
    marginBottom: { type: "string", nullable: true },
    marginLeft: { type: "string", nullable: true },
    marginRight: { type: "string", nullable: true },

    width: { type: "string", nullable: true },
    height: { type: "string", nullable: true },
    gap: { type: "string", nullable: true },

    visibility: {
      type: "string",
      enum: ["visible", "invisible", "hidden"],
      nullable: true,
    },
  },
  additionalProperties: false,
  errorMessage: {
    additionalProperties: "Additional properties are not allowed",
  },
};

// Schema para Component (los componentes que contienen filas)
const componentSchema: JSONSchemaType<Layout> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    componentName: {
      type: 'string',
      enum: COMPONENTS,
      errorMessage: `Component name only must be one of ${COMPONENTS_NAMES}`
    },
    properties: {
      type: "object",
      nullable: true,
      anyOf: [commonPropertiesSchema],
      errorMessage: "Properties must match the LayoutProperties schema, if provided."
    },
    content: {
      type: 'string',
      nullable: true,
      errorMessage: "The Content must be a string.",
    },
    specs: {
      type: "object",
      nullable: true,
      errorMessage: "Properties must match the component specification schema, if provided."
    },
    children: {
      type: 'array',
      nullable: true,
      default: [],
      //items: { type: 'object', $ref: "#/definitions/layout", required: ['id', 'componentName', 'properties'] },
      items: { type: 'object', required: ['id', 'componentName'] },
      errorMessage: 'Invalid children configuration.'
    }
  },
  required: ['id', 'componentName'],
  //definitions: {
  //  layout: {} as JSONSchemaType<Layout> // Will be replaced with this schema itself for recursion
  //},
  additionalProperties: false
};


// Schema para ComponentConfig (la configuración de la página)
const componentConfigSchema: JSONSchemaType<ComponentConfig> = {
  type: 'object',
  properties: {
    type: {
      type: "string",
      const: "component",
      errorMessage: "The Component type must be 'component'.",
    },
    name: {
      type: "string",
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage: 'The component name must only contain letters and must not have spaces or special characters.',
    },
    path: {
      type: "string",
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage: 'The path attribute must only contain letters and must not have spaces or special characters.',
    },
    components: {
      type: 'object',
      nullable: true,
      oneOf: [componentSchema], // Ensure this matches the correct definition of `componentSchema`
      errorMessage: 'Components must contain valid configuration.',
    },
  },
  required: ['type', 'name', 'path'],
  additionalProperties: false,
};

export const componentConfigValidate: ValidateFunction<ComponentConfig> =
  ajvInstance.compile<ComponentConfig>(componentConfigSchema);
