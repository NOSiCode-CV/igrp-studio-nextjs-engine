import { PATTERNS } from '../../utils/constants';
import { State } from '../../interfaces/types';

export function commonProperties() {
  return {
    commonProperties: {
      type: 'object',
      properties: {
        //isVirtual: { type: 'boolean', required: false, default: false}
      }
    }
  };
  /*return {
    commonProperties: {
      padding: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'], default: '3' },
      paddingHorizontal: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },
      paddingVertical: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },
      paddingTop: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },
      paddingBottom: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },
      paddingLeft: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },
      paddingRight: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },

      margin: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },
      marginHorizontal: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },
      marginVertical: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },
      marginTop: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },
      marginBottom: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },
      marginLeft: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },
      marginRight: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64'] },

      width: { type: 'string', required: false, enum: ['1/2', '1/3', '1/4', '1/5', '1/6', 'full', 'screen', 'auto'] },
      height: { type: 'string', required: false, enum: ['1/2', '1/3', '1/4', '1/5', '1/6', 'full', 'screen', 'auto'] },

      visibility: { type: 'string', required: false, enum: ['visible', 'invisible', 'hidden'] }
    }
  };*/
}

export function commonPropertiesMapping() {
  return {

  };
  /*return {
    padding: { className: 'p-' },
    paddingHorizontal: { className: 'px-' },
    paddingVertical: { className: 'py-' },
    paddingTop: { className: 'pt-' },
    paddingBottom: { className: 'pb-' },
    paddingLeft: { className: 'pl-' },
    paddingRight: { className: 'pr-' },

    margin: { className: 'm-' },
    marginHorizontal: { className: 'mx-' },
    marginVertical: { className: 'my-' },
    marginTop: { className: 'mt-' },
    marginBottom: { className: 'mb-' },
    marginLeft: { className: 'ml-' },
    marginRight: { className: 'mr-' },

    width: { className: 'w-' },
    height: { className: 'h-' },

    visibility: { className: '' } // Visibility classes don't need a prefix
  };*/
}

export function iconProperties() {
  return {
    iconProperties: {
      type: 'object',
      properties: {
        showIcon: { type: 'boolean', required: false, default: false },
        iconName: { type: 'string', required: false },
        iconPlacement: { type: 'string', required: false, enum: ['start', 'end']  },
        iconClassName: { type: 'string', required: false },
        iconSize: { type: 'number', required: false },
      }
    }
  }
}

export function inputCommonProperties() {
  return {
    dataProperties: {
      type: 'object',
      properties: {
        isVirtual: { type: 'boolean', required: false, default: false},
        isType: { type: 'boolean', required: false, default: true}
      }
    }
  };
}

export function baseInteraction(defaultCustomSet?: string, label?: string, defaultStates?: {state: string}[] ) {
  return {
    type: 'object',
    label: label,
    properties: {
      fnName: {
        type: 'string', required: false
      },
      actionName: {
        type: 'string', required: false
      },
      fnCustomSet: {
        type: 'string', required: false, default: defaultCustomSet
      },
      fnCustomCode: {
        type: 'object',
        properties: {
          imports: {
            type: 'array', required: false,
            items: {
              type: 'object',
              properties: {
                namespace: {
                  type: 'string', required: true
                }
              }
            },
          },
          states: {
            type: 'array', required: false,
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  required: true,
                  default: ''
                },
                type: {
                  type: 'string',
                  required: true,
                  default: 'any'
                },
                name: {
                  type: 'string',
                  required: true,
                  default: ''
                },
                defaultValue: {
                  type: 'string',
                  required: false,
                  default: 'undefined'
                }
              }
            },
            default: defaultStates
          },
          fnCode: {
            type: 'string', required: false
          },
          actionCode: {
            type: 'string', required: false
          },
        }
      },
      type: {
        type: 'string',
        required: true,
        enum: ["function", "action", "both"],
        default: "function"
      }
    }
  };
}

export function baseData(defaultValue?: string, label?: string, state?: State, isStateRequired?: boolean) {
  return {
    type: 'object',
    label: label,
    properties: {
      state: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            required: true,
            default: state?.id ?? ''
          },
          type: {
            type: 'string',
            required: true,
            default: state?.type ?? 'any'
          },
          name: {
            type: 'string',
            required: true,
            default: state?.name ?? ''
          },
          defaultValue: {
            type: 'string',
            required: false,
            default: state?.defaultValue ?? defaultValue ?? 'undefined'
          },
          imports: {
            type: 'array',
            required: false,
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  required: true,
                  default: ''
                },
                namespace: {
                  type: 'string',
                  required: true,
                  default: ''
                },
              },
            }
          },
        },
        required: isStateRequired ?? false
      }
    }
  };
}
