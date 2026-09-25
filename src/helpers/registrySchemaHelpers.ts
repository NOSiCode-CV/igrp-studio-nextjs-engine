import type { ComponentDef } from '../interfaces/types';

/**
 * A single component prop, as produced by `parseComponents` and carried
 * on `ComponentDef.props`. Aliased here so the helpers below don't repeat
 * the seven-field shape inline.
 */
type Prop = ComponentDef['props'][0];

/**
 * Builds the JSON-Schema `properties` object describing the plain-value
 * props of a custom React component (i.e. non-function, non-`ReactNode`
 * props). Consumed by the registry entry as
 * `properties.customProperties.properties`.
 *
 * Migrated from the Studio renderer's `register-schema.ts` so headless
 * consumers (CLI, CI, scripts) can build the same registry entries the
 * Studio Desktop builds today. Behaviour preserved verbatim.
 */
export function convertComponentsToJSONSchema(props: Prop[]): Record<string, { type: string }> {
  const properties: Record<string, { type: string }> = {};
  props
    ?.filter((prop) => prop.name !== '' && !prop.isFunction && prop.type !== 'React.ReactNode')
    .forEach((prop) => {
      properties[prop.name] = { type: mapToJSONSchemaType(prop.type) };
    });
  return properties;
}

/**
 * Builds the interactions schema for the function-valued props of a
 * custom React component (event handlers). Each function prop becomes an
 * interaction slot with the same shape Studio's built-in components use
 * — `fnName` / `fnCustomCode.imports` / `actionName` / `fnCustomSet` /
 * `type`.
 *
 * Renamed from the renderer's `convertCompToInteractinsJSONSchema` to
 * fix the "Interactins" typo AND expand `Comp` → `Components` so the
 * public API name reads normally.
 */
export function convertComponentsToInteractionsJSONSchema(
  props: Prop[],
): Record<string, any> {
  const properties: Record<string, any> = {};
  props
    ?.filter((prop) => prop.name !== '' && prop.isFunction)
    .forEach((prop) => {
      properties[prop.name] = {
        type: 'function',
        properties: {
          function: {
            type: 'object',
            properties: {
              fnName: { type: 'string', required: false, visible: true },
              fnCustomCode: {
                type: 'string',
                required: false,
                visible: false,
                properties: {
                  imports: {
                    type: 'array',
                    required: false,
                    visible: true,
                    items: {
                      type: 'object',
                      properties: {
                        namespace: { type: 'string', required: true },
                      },
                    },
                  },
                },
              },
              actionName: { type: 'string', required: false, visible: false },
              fnCustomSet: {
                type: 'string',
                required: false,
                default: '() => {}',
                visible: true,
              },
              type: { type: 'string', default: 'function' },
            },
          },
        },
      };
    });
  return properties;
}

/**
 * Returns the JSON-Schema for the visibility-rules array a custom
 * component supports. Takes no inputs — the shape is fixed. Renamed
 * from `convertCompToRulesJSONSchema` to match the sibling helpers.
 */
export function convertComponentsToRulesJSONSchema(): Record<string, any> {
  return {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['visibility'],
          required: true,
          default: 'visibility',
        },
        condition: { type: 'string', required: true, default: 'true' },
      },
    },
  };
}

/**
 * Derives a human-friendly label from a component name.
 *   `SearchFalecido`   → `"Search Falecido"`
 *   `search-falecido`  → `"Search Falecido"`
 *   ``                 → `""`
 *
 * Migrated verbatim from the renderer so headless callers get the same
 * palette labels the Studio Desktop shows.
 */
export function getLabel(name: string): string {
  if (!name) return '';
  const parts = name
    .replace(/([A-Z])/g, ' $1')
    .split(/[- ]+/);
  return parts
    .filter((part) => part.length > 0)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Coarse mapping from a TypeScript prop type to a JSON-Schema `type`
 * literal. Unknown types fall through to `"any"` — the registry accepts
 * it and the Studio's inspector renders a raw text input.
 */
function mapToJSONSchemaType(type: string): string {
  switch (type.toLowerCase()) {
    case 'string':
    case 'text':
      return 'string';
    case 'number':
    case 'int':
    case 'float':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'array':
      return 'array';
    case 'object':
      return 'object';
    default:
      return 'any';
  }
}
