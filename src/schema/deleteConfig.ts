import { DeleteConfig } from '../interfaces/types';
import { ajvInstance } from "../utils/ajv-instance";
import { JSONSchemaType, ValidateFunction } from "ajv";
import { CONFIG_TYPES, PATTERNS } from '../utils/constants';


const deleteSchema: JSONSchemaType<DeleteConfig> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      errorMessage:
        'The id attribute must be a valid string.',
    },
    type: {
      type: "string",
      enum: CONFIG_TYPES,
      errorMessage: {
        enum: `The 'type' attribute cannot be empty and must be one of the following: ${CONFIG_TYPES.join(", ")}.`
      }
    },
    subType: {
      type: "string",
      nullable: true,
      errorMessage: 'The subType must be a valid string.'
    },
    name: {
      type: "string",
      pattern: PATTERNS.VALID_NAME_CONVENTIONAL,
      errorMessage: {
        pattern: "The 'name' attribute must not be empty and cannot contain spaces, hyphens, or special characters. Only alphanumeric characters are allowed."
      }
    }
  },
  required: ["id", "type", "name"],
  additionalProperties: false,
  errorMessage: {
    required: {
      type: "The 'type' attribute is required and must be specified.",
      name: "The 'name' attribute is required and cannot be left blank.",
      basePath: "The 'basePath' attribute is required and cannot be left blank.",
    },
    additionalProperties: "Extra attributes are not allowed in the API configuration."
  }
};


export const deleteValidation: ValidateFunction<DeleteConfig> = ajvInstance.compile<DeleteConfig>(deleteSchema);


