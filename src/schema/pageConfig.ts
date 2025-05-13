import { JSONSchemaType, ValidateFunction } from 'ajv';
import {
  PageConfig,
  IAction,
  IActionConfig,
  Layout,
  LayoutProperties,
  CommonProperties,
  TypeDef,
  ElementField,
  CustomFunctionConfig,
  ReturnValue,
  Argument,
  Import, State,
} from '../interfaces/types';
import { PATTERNS, VALID_SEGMENT_PATTERN } from '../utils/constants';
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
  },
  required: ['id', 'type', 'name'],
  additionalProperties: false,
}

const returnValueSchema: JSONSchemaType<ReturnValue> = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      errorMessage: 'The type must be a valid string.'
    },
    isList: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The isList attribute must be a valid boolean.'
    },
    isNullable: {
      type: 'boolean',
      errorMessage: 'The isList attribute must be a valid boolean.'
    },
  },
  required: ['type', 'isNullable'],
  additionalProperties: false,
}

const argumentSchema: JSONSchemaType<Argument> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    name: {
      type: 'string',
      errorMessage: 'The name must be a valid string.'
    },
    type: {
      type: 'string',
      errorMessage: 'The type must be a valid string.'
    },
    isList: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The isList attribute must be a valid boolean.'
    },
    isNullable: {
      type: 'boolean',
      errorMessage: 'The isList attribute must be a valid boolean.'
    },
  },
  required: ['name', 'type', 'id', 'isNullable'],
  additionalProperties: false,
}

const functionSchema: JSONSchemaType<CustomFunctionConfig> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    name: {
      type: 'string',
      errorMessage: 'The name must be a valid string.'
    },
    code: {
      type: 'string',
      errorMessage: 'The code must be a valid string.'
    },
    returnValue: returnValueSchema,
    arguments: {
      type: 'array',
      items: argumentSchema,
      errorMessage: 'The fields must be an array of valid field configuration.'
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
    }
  },
  required: ['name', 'code', 'id', 'returnValue', 'arguments'],
  additionalProperties: false,
};

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
  },
  required: ['name', 'path', 'fields'],
  additionalProperties: false,
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

// Schema for LayoutProperties
const layoutPropertiesSchema: JSONSchemaType<LayoutProperties> = {
  type: "object",
  properties: {
    variant: { type: "string", nullable: true },
    className: { type: "string", nullable: true },
  },
  required: [],
  additionalProperties: false,
};

// Schema for CommonProperties (extends LayoutProperties)
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
      errorMessage:
        'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.',
    },
    componentName: {
      type: 'string',
      errorMessage: `Component name only must be a valid string`,
    },
    properties: {
      type: 'object',
      nullable: true,
      anyOf: [commonPropertiesSchema],
      errorMessage: 'Properties must match the LayoutProperties schema, if provided.',
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
    childProperties: {
      type: 'object',
      nullable: true,
      anyOf: [commonPropertiesSchema],
      errorMessage: 'Child Properties must match the LayoutProperties schema, if provided.',
    },
    parentProperties: {
      type: 'object',
      nullable: true,
      anyOf: [commonPropertiesSchema],
      errorMessage: 'Parent Properties must match the LayoutProperties schema, if provided.',
    },
    content: {
      type: 'string',
      nullable: true,
      errorMessage: 'The Content must be a string.',
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
      errorMessage: 'Invalid children configuration.',
    },
  },
  required: ['id', 'componentName'],
  //definitions: {
  //  layout: {} as JSONSchemaType<Layout> // Will be replaced with this schema itself for recursion
  //},
  additionalProperties: false,
};

//componentSchema.definitions!.layout = componentSchema;

// Schema para PageConfig (la configuración de la página)
const pageConfigSchema: JSONSchemaType<PageConfig> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    type: {
      type: 'string',
      const: 'page',
      errorMessage: "The Page type must be 'page'.",
    },
    forceDynamic: {
      type: 'boolean',
      nullable: true,
      errorMessage: "The force dynamic attribute, if provided, must be valid boolean.",
    },
    pageName: {
      type: 'string',
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage:
        'The page name must only contain letters and must not have spaces or special characters.',
    },
    description: {
      type: 'string',
      nullable: true,
      pattern: PATTERNS.VALID_ALPHA_NUMERIC_CONVENTIONAL,
      errorMessage:
        'The description, if provided, must only contain letters, numbers and spaces and must not have special characters.',
    },
    path: {
      type: 'string',
      pattern: VALID_SEGMENT_PATTERN,
      errorMessage: {
        anyOf: 'The path attribute must follow Next.js path conventions: static, [param], [...param], [[...param]], or (group).',
      },
    },
    components: {
      type: 'object',
      nullable: true,
      anyOf: [componentSchema, {}], // Ensure this matches the correct definition of `componentSchema`
      errorMessage: 'Components must contain valid configuration.',
    },
    types: {
      type: 'array',
      items: typeDefSchema,
      errorMessage: 'The types attribute must be an array of valid type definition configuration.'
    },
    functions: {
      type: 'array',
      nullable: true,
      items: functionSchema,
      errorMessage: 'The functions attribute must be an array of valid function definition configuration.'
    },
    actions: {
      type: 'array',
      nullable: true,
      items: functionSchema,
      errorMessage: 'The actions attribute must be an array of valid function definition configuration.'
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
    }
  },
  required: ['type', 'pageName', 'path', 'types'],
  additionalProperties: false
};

export const pageConfigValidate: ValidateFunction<PageConfig> =
  ajvInstance.compile<PageConfig>(pageConfigSchema);
