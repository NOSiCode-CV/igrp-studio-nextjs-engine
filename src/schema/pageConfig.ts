import { JSONSchemaType, ValidateFunction } from 'ajv';
import {
  PageConfig,
  IAction,
  IActionConfig,
  Layout, LayoutProperties, CommonProperties,
} from '../interfaces/types';
import { COMPONENTS, COMPONENTS_NAMES, PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

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
      anyOf: [commonPropertiesSchema],
      errorMessage: "Properties must match the LayoutProperties schema."
    },
    children: {
      type: 'array',
      nullable: true,
      default: [],
      //items: { type: 'object', $ref: "#/definitions/layout", required: ['id', 'componentName', 'properties'] },
      items: { type: 'object', required: ['id', 'componentName', 'properties'] },
      errorMessage: 'Invalid children configuration.'
    }
  },
  required: ['id', 'componentName', 'properties'],
  //definitions: {
  //  layout: {} as JSONSchemaType<Layout> // Will be replaced with this schema itself for recursion
  //},
  additionalProperties: false
};

//componentSchema.definitions!.layout = componentSchema;

// Schema para PageConfig (la configuración de la página)
const pageConfigSchema: JSONSchemaType<PageConfig> = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      const: 'page',
      errorMessage: "The Page type must be 'page'.",
    },
    pageName: {
      type: 'string',
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage:
        'The page name must only contain letters and must not have spaces or special characters.',
    },
    path: {
      type: 'string',
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage:
        'The path attribute must only contain letters and must not have spaces or special characters.',
    },
    components: {
      type: 'object',
      nullable: true,
      oneOf: [componentSchema], // Ensure this matches the correct definition of `componentSchema`
      required: ['id', 'componentName', 'properties'],
      errorMessage: 'Components array must contain valid configurations.',
    },
  },
  required: ['type', 'pageName', 'path'],
  additionalProperties: false
};

export const pageConfigValidate: ValidateFunction<PageConfig> =
  ajvInstance.compile<PageConfig>(pageConfigSchema);
