import { JSONSchemaType, ValidateFunction } from 'ajv';
import { PermissionConfig } from '../interfaces/types';
import { ajvInstance } from '../utils/ajv-instance';

/**
 * AJV schema for a single permission entry in `.igrpstudio/permissions.json`.
 *
 * Rules of thumb:
 *  - `id` must be present; the caller (Studio/CLI) is responsible for
 *    generating it — the engine treats it as opaque so both ULIDs
 *    (`perm_01HZX…`) and any other id shape round-trip untouched.
 *  - `name` matches the framework's dotted-segment convention
 *    (`org.dept.action` / `dept.action` / bare `action`). Empty strings and
 *    whitespace-only values are rejected.
 *  - `description` is optional; empty string allowed for round-trip parity
 *    with UIs that always emit the field.
 *  - `enabled` is required so downstream consumers never have to guess a
 *    default.
 */
const permissionSchema: JSONSchemaType<PermissionConfig> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      minLength: 1,
      errorMessage: {
        minLength: "The 'id' attribute must not be empty.",
        type: "The 'id' attribute must be a string.",
      },
    },
    name: {
      type: 'string',
      pattern: '^\\s*[A-Za-z_][A-Za-z0-9_]*(?:\\.[A-Za-z_][A-Za-z0-9_]*)*\\s*$',
      errorMessage: {
        pattern:
          "The 'name' attribute must be one or more dot-separated identifiers (letters, digits, underscore) — e.g. 'delete_invoice' or 'inss.invoice_list.delete'.",
        type: "The 'name' attribute must be a string.",
      },
    },
    label: {
      type: 'string',
      nullable: true,
    },
    description: {
      type: 'string',
      nullable: true,
    },
    enabled: {
      type: 'boolean',
      errorMessage: {
        type: "The 'enabled' attribute must be a boolean.",
      },
    },
  },
  required: ['id', 'name', 'enabled'],
  additionalProperties: false,
  errorMessage: {
    required: {
      id: "The 'id' attribute is required and cannot be left blank.",
      name: "The 'name' attribute is required and cannot be left blank.",
      enabled: "The 'enabled' attribute is required and cannot be left blank.",
    },
    additionalProperties: 'Extra attributes are not allowed in the permission configuration.',
  },
};

export const permissionConfigValidate: ValidateFunction<PermissionConfig> =
  ajvInstance.compile<PermissionConfig>(permissionSchema);
