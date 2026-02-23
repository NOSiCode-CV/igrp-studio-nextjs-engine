import { JSONSchemaType, ValidateFunction } from 'ajv';
import {
  ProcessConfig,
  FieldConfig,
  Field,
  ColumnConfig,
  IAction,
  IActionConfig,
  Layout,
  CommonProperties,
  Arguments,
  TypeDef,
  Import,
  State,
  ElementField,
  CustomFunctionConfig,
  Reference,
  ReturnValue,
  FieldValidation,
  ProcessArtifact,
  Variable,
  ProcessStepConfig,
  PermittedActions,
  FieldValidationMetadata,
} from '../interfaces/types';
import { FIELD_TYPES, PATTERNS, VALID_SEGMENT_PATTERN } from '../utils/constants';
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

const argsSchema: JSONSchemaType<Arguments> = {
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
    name: {
      type: 'string',
      errorMessage: 'The name attribute must be a string.'
    },
    isList: {
      type: 'boolean',
      errorMessage: 'The isList attribute must be a boolean.'
    },
    isOptional: {
      type: 'boolean',
      errorMessage: 'The isOptional attribute must be a boolean.'
    },
    isInterface: {
      type: 'boolean',
      errorMessage: 'The isInterface attribute must be a boolean.'
    },
    isFunction: {
      type: 'boolean',
      errorMessage: 'The isFunction attribute must be a boolean.'
    },
    isState: {
      type: 'boolean',
      errorMessage: 'The isState attribute must be a boolean.'
    },
    functionParameters: {
      type: 'array',
      nullable: true,
      items: {
        required: [],
        type: 'object'
      },
      errorMessage: 'The function parameters, if provided, must be an array of valid argument configuration'
    }
  },
  required: ['type', 'name', 'isList', 'isOptional', 'isInterface', 'isFunction', 'isState'],
  additionalProperties: false
};

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

const referenceSchema: JSONSchemaType<Reference> = {
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

const variableSchema: JSONSchemaType<Variable> = {
  type: 'object',
  properties: {
    variable: {
      type: 'string',
      errorMessage: 'The variable must be a valid string.'
    },
  },
  required: ['variable'],
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

const permittedActionsSchema: JSONSchemaType<PermittedActions> = {
  type: 'object',
  properties: {
    deletable: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The deletable, if provided, attribute must be a valid boolean.'
    },
    editable: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The editable, if provided, attribute must be a valid boolean.'
    },
  },
  required: [],
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
    path: {
      type: 'string',
      nullable: true,
      errorMessage: 'The path, if provided, must be a valid string.'
    },
    returnValue: returnValueSchema,
    actions: {
      type: "object",
      nullable: true,
      anyOf: [permittedActionsSchema],
      errorMessage: "Permitted actions must match the PermittedActions schema, if provided."
    },
    arguments: {
      type: 'array',
      items: argsSchema,
      errorMessage: 'The fields must be an array of valid argument configuration.'
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
    isAsync: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The is async argument must be a valid boolean.'
    },
  },
  required: ['name', 'code', 'id', 'returnValue', 'arguments'],
  additionalProperties: false,
};

const fieldValidationMetadataSchema: JSONSchemaType<FieldValidationMetadata> = {
  type: 'object',
  properties: {
    validationKey: {
      type: 'string',
    },
    message: {
      type: 'string',
      nullable: true,
    },
  },
  required: [],
};


const fieldValidationSchema: JSONSchemaType<FieldValidation> = {
  type: 'object',
  properties: {
    minLength: {
      type: 'number',
      minimum: 0,
      nullable: true,
      errorMessage: 'The attribute minLength, if provided, must be a positive number',
    },
    maxLength: {
      type: 'number',
      minimum: 0,
      nullable: true,
      errorMessage: 'The attribute maxLength, if provided, must be a positive number',
    },
    regex: {
      type: 'string',
      nullable: true,
      errorMessage: 'The attribute regex, if provided, must be a valid string'
    },
    email: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The attribute email, if provided, must be a valid boolean'
    },
    url: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The attribute url, if provided, must be a valid boolean'
    },
    uuid: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The attribute uuid, if provided, must be a valid boolean'
    },
    startsWith: {
      type: 'string',
      nullable: true,
      errorMessage: 'The attribute startsWith, if provided, must be a valid string'
    },
    endsWith: {
      type: 'string',
      nullable: true,
      errorMessage: 'The attribute endsWith, if provided, must be a valid string'
    },
    includes: {
      type: 'string',
      nullable: true,
      errorMessage: 'The attribute includes, if provided, must be a valid string'
    },
    min: {
      type: 'number',
      nullable: true,
      errorMessage: 'The attribute min, if provided, must be a valid number',
    },
    max: {
      type: 'number',
      nullable: true,
      errorMessage: 'The attribute max, if provided, must be a valid number',
    },
    positive: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The attribute positive, if provided, must be a valid boolean'
    },
    negative: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The attribute negative, if provided, must be a valid boolean'
    },
    int: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The attribute int, if provided, must be a valid boolean'
    },
    finite: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The attribute finite, if provided, must be a valid boolean'
    },
    minDate: {
      type: 'string',
      nullable: true,
      errorMessage: 'The attribute minDate, if provided, must be a valid string',
    },
    maxDate: {
      type: 'string',
      nullable: true,
      errorMessage: 'The attribute maxDate, if provided, must be a valid string',
    },
    errors: {
      type: 'array',
      items: fieldValidationMetadataSchema
    }
  },
  required: [],
  errorMessage: 'The validation, if provided, must be a valid validation object definition.',
  additionalProperties: false
}

const elementFieldSchema: JSONSchemaType<ElementField> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      errorMessage: 'The name must be a valid string.',
    },
    componentId: {
      type: 'string',
      errorMessage: 'The component ID must be a valid string.',
    },
    type: {
      type: 'string',
      errorMessage: 'The type must be a valid string.',
    },
    required: {
      type: 'boolean',
      errorMessage: 'The required must be a valid boolean.',
    },
    nullable: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The nullable, if provided, must be a valid boolean.',
    },
    isList: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The is list attribute must be a valid boolean.',
    },
    isKey: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The is key attribute must be a valid boolean.',
    },
    validation: {
      type: 'object',
      nullable: true,
      anyOf: [fieldValidationSchema],
      errorMessage: 'Validation must match the FieldValidation schema, if provided.',
    },
    defaultValue: {
      type: 'string',
      nullable: true,
      errorMessage: 'The default value, if provided, must be a valid string.',
    },
    fields: {
      type: 'array',
      nullable: true,
      items: {
        required: [],
        type: 'object',
      },
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
      errorMessage: 'The name must be a valid string.',
    },
    componentId: {
      type: 'string',
      errorMessage: 'The component ID must be a valid string.',
    },
    path: {
      type: 'string',
      errorMessage: 'The path must be a valid string.',
    },
    tags: {
      type: 'array',
      nullable: true,
      items: {
        type: 'string',
      },
      errorMessage: 'The tag must be a valid string array.',
    },
    fields: {
      type: 'array',
      items: elementFieldSchema,
      errorMessage: 'The fields must be an array of valid field configuration.',
    },
    isMainType: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The main type check, if provided, must be a valid boolean.',
    },
    isEnum: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The enum type check, if provided, must be a valid boolean.',
    },
    definitionType: {
      type: 'string',
      enum: ['zod-object', 'json-schema', 'auto'],
      nullable: true,
      errorMessage: 'The definition type, if provided, must be zod-object, json-schema or auto.',
    },
    customInstanceName: {
      type: 'string',
      nullable: true,
      errorMessage: 'The custom instance name, if provided, must be a valid string.',
    },
    customInitInstanceName: {
      type: 'string',
      nullable: true,
      errorMessage: 'The custom init instance name, if provided, must be a valid string.',
    },
  },
  required: ['name', 'path', 'fields'],
  additionalProperties: false,
};

// Schema para ColumnProcess (los processes anidados dentro de las columnas)
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

// Schema para Process (los processes que contienen filas)
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

const processStepConfigSchema: JSONSchemaType<ProcessStepConfig> = {
  type: 'object',
  properties: {
    version: {
      type: 'string',
      nullable: true,
      errorMessage:
        'The engine version attribute must be a valid string.',
    },
    id: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The id attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    type: {
      type: "string",
      const: "processStep",
      errorMessage: "The type must be 'processStep'.",
    },
    name: {
      type: "string",
      pattern: PATTERNS.PROCESS_NAME_VALIDATION_PATTERN,
      errorMessage: 'The process step name name must only contain letters and must not have spaces or special characters except underscore (_), hyphen (-) and dot (.).',
    },
    key: {
      type: "string",
      errorMessage: 'The process step key must be a string.',
    },
    description: {
      type: 'string',
      nullable: true,
      errorMessage:
        'The description, if provided, must be a string.',
    },
    processKey: {
      type: 'string',
      errorMessage: 'The process key attribute must be a valid string.'
    },
    processVersion: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: 'The process version attribute must only contain alphanumeric characters and must not have spaces or special characters.'
    },
    components: {
      type: 'object',
      nullable: true,
      anyOf: [componentSchema, {}], // Ensure this matches the correct definition of `componentSchema`
      errorMessage: 'Components must contain valid configuration.',
    },
    forceDynamic: {
      type: 'boolean',
      nullable: true,
      errorMessage: "The force dynamic attribute, if provided, must be valid boolean.",
    },
    args: {
      type: 'array',
      items: {
        anyOf: [argsSchema]
      },
      nullable: true,
      errorMessage: 'Arguments must contain valid args configuration.',
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
    references: {
      type: 'array',
      nullable: true,
      items: referenceSchema,
      errorMessage: 'The states attribute must be an array of valid state definition configuration.'
    },
    types: {
      type: 'array',
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
    projectArtifactId: {
      type: 'string',
      errorMessage: 'The project artifact ID must be a valid string.'
    },
    taskKey: {
      type: 'string',
      errorMessage: 'The task key must be a valid string.'
    },
    artifactVariables: {
      type: 'array',
      items: variableSchema,
      errorMessage: 'The artifact variables attribute must be an array of valid variable definition configuration.'
    },
  },
  required: ['type', 'name', 'key', 'projectArtifactId', 'taskKey', 'artifactVariables'],
  additionalProperties: false,
};

export const processStepConfigValidate: ValidateFunction<ProcessStepConfig> =
  ajvInstance.compile<ProcessStepConfig>(processStepConfigSchema);
