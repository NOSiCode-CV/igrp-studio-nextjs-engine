import { JSONSchemaType, ValidateFunction } from 'ajv';
import { CodeSnippetsRegisterConfig, CodeSnippetsRegistrationConfig } from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

const codeSnippetsRegisterConfigSchema: JSONSchemaType<CodeSnippetsRegisterConfig> = {
  type: 'object',
  properties: {
    engineVersion: {
      type: 'string',
      nullable: true,
      errorMessage:
        'The engine version attribute must be a valid string.',
    },
    name: {
      type: 'string',
      pattern: PATTERNS.WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS,
      errorMessage: "The code snippet name attribute must only contain alphanumeric characters and must not have spaces or special characters."
    },
    title: {
      type: 'string',
      errorMessage: "The code snippet title attribute must be a valid string."
    },
    description: {
      type: 'string',
      errorMessage: "The code snippet description attribute must be a valid string."
    },
    code: {
      type: 'string',
      errorMessage: "The code attribute must be a valid string."
    },
    defaultProperties: {
      type: 'object'
    },
    properties: {
      type: 'object'
    },
    propertiesMapping: {
      type: 'object'
    },
    renderer: {
      type: 'string',
      enum: ['hbs', 'default', 'custom'],
      errorMessage: "The renderer attribute must only be 'hbs', 'custom' or 'default'."
    },
    templatePath: {
      type: 'string',
      nullable: true,
      errorMessage: "The template path attribute must be a valid path string."
    },
    imports: {
      type: 'array',
      items: { type: 'string' },
      errorMessage: "The imports must be an array of strings"
    },
    states: {
      type: 'array',
      items: { type: 'string' },
      errorMessage: "The states must be an array of strings"
    },
  },
  required: ['name', 'title', 'description', 'properties', 'propertiesMapping', 'renderer'],
  additionalProperties: false,
}

const codeSnippetsRegistrationConfigSchema: JSONSchemaType<CodeSnippetsRegistrationConfig> = {
  type: 'object',
  properties: {
    engineVersion: {
      type: 'string',
      nullable: true,
      errorMessage:
        'The engine version attribute must be a valid string.',
    },
    codes: {
      type: 'array',
      items: codeSnippetsRegisterConfigSchema,
      errorMessage: "The codes must be an array of code snippets register configuration."
    },
  },
  required: ['codes'],
  additionalProperties: false,
};

export const codeSnippetsRegistrationValidate: ValidateFunction<CodeSnippetsRegistrationConfig> =
  ajvInstance.compile<CodeSnippetsRegistrationConfig>(codeSnippetsRegistrationConfigSchema);
