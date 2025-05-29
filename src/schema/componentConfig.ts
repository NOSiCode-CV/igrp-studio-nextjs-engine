import { JSONSchemaType, ValidateFunction } from 'ajv';
import {
  ComponentConfig,
  FieldConfig,
  Field,
  ColumnConfig,
  IAction,
  IActionConfig,
  Layout, CommonProperties, Arguments, TypeDef, Import, State, ElementField,
} from '../interfaces/types';
import { COMPONENTS, COMPONENTS_NAMES, FIELD_TYPES, PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';


const elementFieldSchema: JSONSchemaType<ElementField> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      errorMessage: 'The name must be a valid string.'
    },
    componentId: {
      type: 'string',
      errorMessage: 'The component ID must be a valid string.'
    },
    type: {
      type: 'string',
      errorMessage: 'The type must be a valid string.'
    },
    required: {
      type: 'boolean',
      errorMessage: 'The required must be a valid boolean.'
    },
    isList: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The is list attribute must be a valid boolean.'
    },
    validation: {
      type: 'string',
      nullable: true,
      errorMessage: 'The validation, if provided, must be a valid string.'
    },
    defaultValue: {
      type: 'string',
      nullable: true,
      errorMessage: 'The default value, if provided, must be a valid string.'
    },
  },
  required: ['name', 'componentId', 'type', 'required'],
  additionalProperties: false,
};


const typeDefSchema: JSONSchemaType<TypeDef> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      errorMessage: 'The name must be a valid string.'
    },
    componentId: {
      type: 'string',
      errorMessage: 'The component ID must be a valid string.'
    },
    path: {
      type: 'string',
      errorMessage: 'The path must be a valid string.'
    },
    tags: {
      type: 'array',
      nullable: true,
      items: {
        type: 'string'
      },
      errorMessage: 'The tag must be a valid string array.'
    },
    fields: {
      type: 'array',
      items: elementFieldSchema,
      errorMessage: 'The fields must be an array of valid field configuration.'
    },
    isMainType: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The main type check, if provided, must be a valid boolean.'
    },
  },
  required: ['name', 'path', 'fields'],
  additionalProperties: false,
};

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

const argsSchema: JSONSchemaType<Arguments> = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      errorMessage: 'The type attribute must be a string.'
    },
    name: {
      type: 'string',
      errorMessage: 'The name attribute must be a string.'
    },
  },
  required: ['type', 'name'],
  additionalProperties: false
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
      errorMessage: `Component name must be a valid string`
    },
    properties: {
      type: "object",
      nullable: true,
      anyOf: [commonPropertiesSchema],
      errorMessage: "Properties must match the LayoutProperties schema, if provided."
    },
    interactions: {
      type: "object",
      required: [],
      nullable: true,
      additionalProperties: {
        type: "object",
        errorMessage: "Interactions fields are invalid",
        required: [],
        nullable: true,
        anyOf: [
          { type: "object" }, // For dynamic content types
        ],
      },
      errorMessage: "The 'interactions' field must be an object mapping of actions.",
    },
    data: {
      type: "object",
      required: [],
      nullable: true,
      additionalProperties: {
        type: "object",
        errorMessage: "Data fields are invalid",
        required: [],
        nullable: true,
        anyOf: [
          { type: "object" }, // For dynamic content types
        ],
      },
      errorMessage: "The 'data' field must be an object mapping of data.",
    },
    style: {
      type: "object",
      required: [],
      nullable: true,
      errorMessage: "The 'style' field must be an object mapping of style.",
    },
    rules: {
      type: 'array',
      items: {
        type: "object",
        required: [],
        nullable: true,
        errorMessage: "The 'rule' field must be an object mapping of rules.",
      },
      errorMessage: "The 'rules' field must be an array of object mapping of rules.",
      nullable: true
    },
    childProperties: {
      type: "object",
      nullable: true,
      anyOf: [commonPropertiesSchema],
      errorMessage: "Child Properties must match the LayoutProperties schema, if provided."
    },
    parentProperties: {
      type: "object",
      nullable: true,
      anyOf: [commonPropertiesSchema],
      errorMessage: "Parent Properties must match the LayoutProperties schema, if provided."
    },
    content: {
      type: 'string',
      nullable: true,
      errorMessage: "The Content must be a string.",
    },
    tag: {
      type: 'string',
      errorMessage: "The tag must be a string.",
    },
    dataType: {
      type: 'string',
      nullable: true,
      errorMessage: "The data type, if provided, must be a string.",
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
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    type: {
      type: "string",
      const: "component",
      errorMessage: "The Component type must be 'component'.",
    },
    scope: {
      type: "string",
      enum: ['app', 'page'],
      errorMessage: "The Component scope must be 'app' or 'page'.",
    },
    name: {
      type: "string",
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage: 'The component name must only contain letters and must not have spaces or special characters.',
    },
    pagePath: {
      type: "string",
      nullable: true,
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage: 'The path attribute must only contain letters and must not have spaces or special characters.',
    },
    icon: {
      type: "string",
      nullable: true,
      pattern: PATTERNS.VALID_ALPHA_NUMERIC_CONVENTIONAL,
      errorMessage: 'The icon attribute must only contain alphanumeric characters.',
    },
    pageName: {
      type: "string",
      nullable: true,
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage: 'The page name must only contain letters and must not have spaces or special characters.'
    },
    components: {
      type: 'object',
      nullable: true,
      anyOf: [componentSchema, {}], // Ensure this matches the correct definition of `componentSchema`
      errorMessage: 'Components must contain valid configuration.',
    },
    args: {
      type: 'array',
      items: {
        anyOf: [argsSchema]
      },
      nullable: true,
      errorMessage: 'Arguments must contain valid args configuration.',
    },
    types: {
      type: 'array',
      nullable: true,
      items: typeDefSchema,
      errorMessage: 'The types attribute must be an array of valid type definition configuration.'
    },
    imports: {
      type: 'array',
      nullable: true,
      items: importSchema,
      errorMessage: 'The imports attribute must be an array of valid import definition configuration.'
    },
    states: {
      type: 'array',
      nullable: true,
      items: stateSchema,
      errorMessage: 'The states attribute must be an array of valid state definition configuration.'
    },
  },
  required: ['type', 'name'],
  additionalProperties: false,
};

export const componentConfigValidate: ValidateFunction<ComponentConfig> =
  ajvInstance.compile<ComponentConfig>(componentConfigSchema);
