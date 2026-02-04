interface JsonSchemaProperty {
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object';
  format?: string;
  enum?: string[];
  items?: JsonSchemaProperty;
  properties?: { [key: string]: JsonSchemaProperty };
  required?: string[];
  title?: string;
  description?: string;
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export interface JsonSchema {
  type: 'object';
  properties: { [key: string]: JsonSchemaProperty };
  required?: string[];
}

export interface IGRPComponent {
  id: string;
  tag?: string;
  componentName: string;
  label: string;
  type?: 'group' | '';
  children: IGRPComponent[];
  interactions: any;
  allowTypes: boolean;
  data: any;
  dataType?: string;
  properties: any;
  childProperties: any;
  style?: any;
  rules?: any[];
}

interface IGRPFormDefinition {
  type: string;
  scope: string;
  pagePath: string;
  pageName: string;
  description: string;
  name: string;
  id: string;
  args: any[];
  components: IGRPComponent;
  functions: any[];
  types: any[];
  states: any[];
  imports: any[];
}

// Helper to generate unique IDs
function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export function jsonSchemaToIGRPForm(schema: JsonSchema): IGRPComponent[] {
  const mainGridId = generateId();

  // Convert schema properties to form fields
  const formFields = convertSchemaPropertiesToFields(schema.properties, schema.required || []);

  return [
      {
id: `headline_${generateId()}`,
        tag: 'headline1',
        componentName: 'headline',
        label: 'Headline',
        children: [],
        interactions: {},
        allowTypes: false,
        data: {},
        properties: {
          title: 'Page Title',
          description: 'Page Description',
          variant: 'h3',
          roleColor: 'solid',
          color: 'primary',
          iconProperties: {},
          commonProperties: {},
        },
        childProperties: {}
      },
      {
        id: `grid_${mainGridId}`,
        tag: 'mainGrid',
        componentName: 'grid',
        label: 'Grid',
        type: 'group',
        children: formFields,
        interactions: {},
        allowTypes: false,
        data: {},
        properties: {
          gap: 4,
          variant: {
            default: 'cols1',
            md: 'cols2',
            lg: 'cols3',
          },
          commonProperties: {
            generateReference: false,
          },
        },
        childProperties: {
          className: 'col-span-1',
        },
      },
    ];

  // Generate form data type from schema
  /*const formType = generateFormType(schema, formName, `form_${formId}`);

  return {
    type: 'component',
    scope: 'page',
    pagePath,
    pageName,
    description: `${formName}Form`,
    name: `${formName.toLowerCase()}Form`,
    id: generateId(),
    args: [
      {
        id: '1',
        name: 'isEdit',
        type: 'boolean',
        isList: false,
        isOptional: true,
        isInterface: false,
        isFunction: false,
        isState: false
      },
      {
        id: '3',
        name: 'initialData',
        type: 'any',
        isList: false,
        isOptional: true,
        isInterface: false,
        isFunction: false,
        isState: false
      },
      {
        id: '5',
        name: 'shouldSubmit',
        type: 'boolean',
        isList: false,
        isOptional: false,
        isInterface: false,
        isFunction: false,
        isState: false
      },
      {
        id: '6',
        name: 'onAfterSubmit',
        type: 'void',
        isList: false,
        isOptional: false,
        isInterface: false,
        isFunction: true,
        isState: false
      }
    ],
    components: formComponent,
    functions: generateDefaultFunctions(formName),
    types: [formType],
    states: generateDefaultStates(formName),
    imports: []
  };*/
}

function convertSchemaPropertiesToFields(
  properties: { [key: string]: JsonSchemaProperty },
  required: string[] = [],
): IGRPComponent[] {
  const fields: IGRPComponent[] = [];

  for (const [key, property] of Object.entries(properties)) {
    const isRequired = required.includes(key);

    if (property.type === 'array' && property.items?.type === 'object') {
      // Handle form lists (arrays of objects)
      fields.push(createFormList(key, property, isRequired));
    } else if (property.type === 'object') {
      // Handle nested objects as field groups
      fields.push(createFieldGroup(key, property, isRequired));
    } else {
      // Handle primitive fields
      fields.push(createInputField(key, property, isRequired));
    }
  }

  return fields;
}

function createInputField(
  name: string,
  property: JsonSchemaProperty,
  isRequired: boolean,
): IGRPComponent {
  const componentName = getComponentNameForType(property);
  const baseField: IGRPComponent = {
    id: `${componentName}_${generateId()}`,
    tag: name,
    componentName,
    label: getLabelFromProperty(property, name),
    type: 'group',
    children: [],
    interactions: {
      onChange: {
        type: 'function',
        function: {
          type: 'function',
        },
        action: {},
      },
    },
    allowTypes: false,
    data: getDataConfigForType(property),
    properties: {
      label: property.title || name,
      required: isRequired,
      dataProperties: {
        isVirtual: false,
        isType: true,
      },
      commonProperties: {
        generateReference: false,
      },
      ...getAdditionalProperties(property),
    },
    childProperties: {},
  };

  return baseField;
}

function getComponentNameForType(property: JsonSchemaProperty): string {
  switch (property.type) {
    case 'string':
      if (property.format === 'date' || property.format === 'date-time') {
        return 'inputDatePicker';
      }
      if (property.enum) {
        return 'combobox';
      }
      if (property.maxLength && property.maxLength > 100) {
        return 'inputTextarea';
      }
      return 'inputText';

    case 'number':
    case 'integer':
      return 'inputNumber';

    case 'boolean':
      return 'checkbox';

    default:
      return 'inputText';
  }
}

function getDataConfigForType(property: JsonSchemaProperty): any {
  if (property.enum) {
    return {
      value: {
        state: {
          id: '',
          type: 'string',
          name: `select{{id}}Value`,
          defaultValue: '',
          imports: [],
          generate: true,
        },
        value: {
          id: '',
          code: '',
        },
      },
      options: {
        state: {
          id: '',
          type: 'IGRPOptionsProps[]',
          name: `select{{id}}Options`,
          defaultValue: '[]',
          imports: [],
          generate: true,
        },
        value: {
          id: '',
          code: '',
        },
      },
    };
  }

  return {};
}

function getAdditionalProperties(property: JsonSchemaProperty): any {
  const additionalProps: any = {};

  switch (property.type) {
    case 'string':
      if (property.enum) {
        additionalProps.variant = 'single';
        additionalProps.placeholder = 'Select an option...';
        additionalProps.selectLabel = 'No option found';
        additionalProps.showSearch = true;
        additionalProps.iconProperties = {
          showIcon: false,
          iconName: 'CornerDownRight',
        };
      } else if (property.format === 'date' || property.format === 'date-time') {
        additionalProps.dateFormat = 'dd/MM/yyyy';
        additionalProps.placeholder = 'Please select a date...';
      }
      break;

    case 'number':
    case 'integer':
      if (property.minimum !== undefined) {
        additionalProps.min = property.minimum;
      }
      if (property.maximum !== undefined) {
        additionalProps.max = property.maximum;
      }
      break;
  }

  return additionalProps;
}

function createFormList(
  name: string,
  property: JsonSchemaProperty,
  isRequired: boolean,
): IGRPComponent {
  if (!property.items || property.items.type !== 'object') {
    throw new Error('Form lists require object items');
  }

  const itemFields = convertSchemaPropertiesToFields(
    property.items.properties || {},
    property.items.required || [],
  );

  const gridChildren = itemFields.map((field) => ({
    ...field,
    tag: name + `.\${index}.` + field.tag,
    properties: {
      ...field.properties,
    },
  }));

  return {
    id: `formlist_${generateId()}`,
    tag: name,
    componentName: 'formList',
    label: 'Form List',
    type: 'group',
    children: [
      {
        id: `grid_${generateId()}`,
        tag: `grid${name}`,
        componentName: 'grid',
        label: 'Grid',
        type: 'group',
        children: gridChildren,
        interactions: {},
        allowTypes: false,
        data: {},
        properties: {
          gap: 4,
          variant: {
            default: 'cols1',
            md: 'cols2',
            lg: 'cols3',
          },
          commonProperties: {
            generateReference: false,
          },
        },
        childProperties: {
          className: 'col-span-1',
        },
      },
    ],
    interactions: {},
    allowTypes: false,
    data: {
      defaultItem: {
        state: {
          id: '',
          type: '{{type}}',
          name: `formList{{id}}Default`,
          defaultValue: '{}',
          imports: [],
          generate: true,
        },
      },
    },
    properties: {
      label: property.title || name,
      description: property.description,
      color: 'primary',
      variant: 'solid',
      computeLabel: {
        code: `\${item.${Object.keys(property.items.properties || {})[0] || 'id'}}`,
      },
      iconProperties: {
        showIcon: true,
        addButtonIconName: 'Plus',
        iconName: getIconForFieldType(property.items),
      },
      addButtonLabel: 'Add',
      commonProperties: {
        generateReference: false,
      },
    },
    childProperties: {},
  };
}

function createFieldGroup(
  name: string,
  property: JsonSchemaProperty,
  isRequired: boolean,
): IGRPComponent {
  const nestedFields = convertSchemaPropertiesToFields(
    property.properties || {},
    property.required || [],
  );

  return {
    id: `container_${generateId()}`,
    tag: name,
    componentName: 'container',
    label: 'Container',
    type: 'group',
    children: [
      {
        id: `text_${generateId()}`,
        tag: `text${name}`,
        componentName: 'text',
        label: 'Text',
        type: 'group',
        children: [],
        interactions: {},
        allowTypes: false,
        data: {
          highlight: {
            state: {
              id: '',
              type: 'string[]',
              name: `highlight{{id}}Text`,
              defaultValue: '[]',
              imports: [],
              generate: true,
            },
          },
        },
        properties: {
          content: property.title || name,
          variant: 'primary',
          weight: 'semibold',
          size: 'sm',
          align: 'left',
          commonProperties: {
            generateReference: false,
          },
        },
        childProperties: {},
      },
      ...nestedFields,
    ],
    interactions: {},
    allowTypes: false,
    data: {},
    properties: {
      commonProperties: {
        generateReference: true,
      },
      className: 'border rounded-sm p-2',
    },
    childProperties: {},
  };
}

function getLabelFromProperty(property: JsonSchemaProperty, fallback: string): string {
  if (property.title) return property.title;

  // Convert camelCase to Title Case
  return fallback
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

function getIconForFieldType(property: JsonSchemaProperty): string {
  switch (property.type) {
    case 'object':
      return 'Folder';
    case 'array':
      return 'List';
    case 'string':
      return property.format === 'date' ? 'Calendar' : 'FileText';
    case 'number':
      return 'Hash';
    case 'boolean':
      return 'CheckSquare';
    default:
      return 'FileText';
  }
}

function generateFormType(schema: JsonSchema, formName: string, componentId: string): any {
  const fields: any[] = [];

  for (const [key, property] of Object.entries(schema.properties)) {
    const isRequired = (schema.required || []).includes(key);

    if (property.type === 'array' && property.items?.type === 'object') {
      // Array field
      const itemFields = (
        property.items.properties ? Object.entries(property.items.properties) : []
      ).map(([itemKey, itemProperty]) => ({
        componentId: `${componentId}_${itemKey}`,
        name: itemKey,
        type: mapSchemaTypeToIGRPType(itemProperty.type),
        required: (property.items?.required || []).includes(itemKey),
        defaultValue: getDefaultValue(itemProperty),
        label: itemProperty.title || itemKey,
        isList: false,
      }));

      fields.push({
        componentId: `${componentId}_${key}`,
        name: key,
        type: 'object',
        required: isRequired,
        defaultValue: '',
        isList: true,
        fields: itemFields,
      });
    } else {
      // Simple field
      fields.push({
        componentId: `${componentId}_${key}`,
        name: key,
        type: mapSchemaTypeToIGRPType(property.type),
        required: isRequired,
        defaultValue: getDefaultValue(property),
        isList: false,
      });
    }
  }

  return {
    componentId,
    name: formName.toLowerCase(),
    path: '',
    fields,
  };
}

function mapSchemaTypeToIGRPType(schemaType: string): string {
  switch (schemaType) {
    case 'string':
      return 'string';
    case 'number':
    case 'integer':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'array':
      return 'array';
    case 'object':
      return 'object';
    default:
      return 'string';
  }
}

function getDefaultValue(property: JsonSchemaProperty): string {
  switch (property.type) {
    case 'string':
      return "''";
    case 'number':
    case 'integer':
      return '0';
    case 'boolean':
      return 'false';
    case 'array':
      return '[]';
    case 'object':
      return '{}';
    default:
      return "''";
  }
}

function generateDefaultFunctions(formName: string): any[] {
  return [
    {
      id: `fnc_${generateId()}`,
      name: `handle${formName}Submit`,
      code: `// Handle form submission for ${formName}\nconsole.log('Submitting form:', values);`,
      returnValue: {
        type: 'void',
        isNullable: true,
        isList: false,
      },
      imports: [],
      isAsync: true,
      arguments: [
        {
          id: '1',
          name: 'values',
          type: 'any',
          isList: false,
          isOptional: false,
          isInterface: false,
          isFunction: false,
          isState: false,
        },
      ],
    },
  ];
}

function generateDefaultStates(formName: string): any[] {
  return [
    {
      id: `state_${generateId()}`,
      name: `${formName.toLowerCase()}Data`,
      type: 'any',
      imports: [],
      defaultValue: '{}',
    },
  ];
}
