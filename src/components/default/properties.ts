import { PATTERNS } from '../../utils/constants';
import { InteractionFieldVisibility, State } from '../../interfaces/types';

export function commonProperties() {
  return {
    commonProperties: {
      type: 'object',
      properties: {
        generateReference: { type: 'boolean', required: false, default: false, 'x-ui-widget': 'switch', 'x-meta': { label: 'Generate Reference'} },
        customProperties: {
          type: 'object',
        },
      },
    },
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
  return {};
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
        iconName: { type: 'string', required: false, 'x-ui-widget': 'icon' },
        iconPlacement: { type: 'string', required: false, enum: ['start', 'center', 'end'] },
        iconClassName: { type: 'string', required: false },
        iconSize: { type: 'number', required: false },
      },
    },
  };
}

export function dataCommonProperties() {
  return {
    dataProperties: {
      type: 'object',
      properties: {
        isVirtual: { type: 'boolean', required: false, default: false, 'x-ui-widget': 'switch', 'x-meta': { label: 'Is Virtual'} },
        isType: { type: 'boolean', required: false, default: true, 'x-ui-widget': 'switch', 'x-meta': { label: 'Is Type'} },
      },
    },
  };
}

export function baseInteraction(
  defaultCustomSet?: string,
  label?: string,
  defaultStates?: {
    state: string;
  }[],
  visibility?: InteractionFieldVisibility,
) {
  return {
    type: 'object',
    label: label,
    properties: {
      type: {
        type: 'string',
        required: true,
        enum: ['function', 'action', 'navigate', 'formSubmit', 'appLogic'],
        default: 'function',
      },
      function: {
        type: 'object',
        properties: {
          fnName: {
            type: 'string',
            required: false,
            visible: visibility?.fnName.visible ?? false,
          },
          actionName: {
            type: 'string',
            required: false,
            visible: visibility?.actionName.visible ?? false,
          },
          fnCustomSet: {
            type: 'string',
            required: false,
            default: defaultCustomSet,
            visible: visibility?.fnCustomSet.visible ?? false,
          },
          fnCustomCode: {
            type: 'object',
            visible:
              (visibility?.fnCustomCode.imports.visible ||
                visibility?.fnCustomCode.states.visible ||
                visibility?.fnCustomCode.fnCode.visible ||
                visibility?.fnCustomCode.actionCode.visible) ??
              false,
            required: false,
            properties: {
              imports: {
                type: 'array',
                required: false,
                visible: visibility?.fnCustomCode.imports.visible ?? false,
                items: {
                  type: 'object',
                  properties: {
                    namespace: {
                      type: 'string',
                      required: true,
                    },
                  },
                },
              },
              states: {
                type: 'array',
                required: false,
                visible: visibility?.fnCustomCode.states.visible ?? false,
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      required: true,
                      default: '',
                    },
                    type: {
                      type: 'string',
                      required: true,
                      default: 'any',
                    },
                    name: {
                      type: 'string',
                      required: true,
                      default: '',
                    },
                    defaultValue: {
                      type: 'string',
                      required: false,
                      default: 'undefined',
                    },
                  },
                },
                default: defaultStates,
              },
              fnCode: {
                type: 'string',
                required: false,
                visible: visibility?.fnCustomCode.fnCode.visible ?? false,
              },
              actionCode: {
                type: 'string',
                required: false,
                visible: visibility?.fnCustomCode.actionCode.visible ?? false,
              },
            },
          },
          type: {
            type: 'string',
            required: true,
            enum: ['function', 'action', 'both'],
            default: 'function',
          },
        },
      },
      action: {
        type: 'object',
        properties: {
          actionName: {
            type: 'string',
            required: false,
            visible: false//visibility?.actionName.visible ?? false,
          },
          actionCustomSet: {
            type: 'string',
            required: false,
            default: defaultCustomSet,
            visible: false//visibility?.fnCustomSet.visible ?? false,
          },
          actionCustomCode: {
            type: 'object',
            visible:
              /*(visibility?.fnCustomCode.imports.visible ||
                visibility?.fnCustomCode.states.visible ||
                visibility?.fnCustomCode.fnCode.visible ||
                visibility?.fnCustomCode.actionCode.visible) ??*/
              false,
            required: false,
            properties: {
              imports: {
                type: 'array',
                required: false,
                visible: visibility?.fnCustomCode.imports.visible ?? false,
                items: {
                  type: 'object',
                  properties: {
                    namespace: {
                      type: 'string',
                      required: true,
                    },
                  },
                },
              },
              states: {
                type: 'array',
                required: false,
                visible: false,//visibility?.fnCustomCode.states.visible ?? false,
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      required: true,
                      default: '',
                    },
                    type: {
                      type: 'string',
                      required: true,
                      default: 'any',
                    },
                    name: {
                      type: 'string',
                      required: true,
                      default: '',
                    },
                    defaultValue: {
                      type: 'string',
                      required: false,
                      default: 'undefined',
                    },
                  },
                },
                default: defaultStates,
              },
              actionCode: {
                type: 'string',
                required: false,
                visible: false//visibility?.fnCustomCode.actionCode.visible ?? false,
              },
            },
          },
        },
      },
      navigate: {
        type: 'object',
        required: false,
        properties: {
          name: { type: 'string', required: true, default: 'handle{{id}}Navigation' },
          path: { type: 'string', required: true, default: '/' },
          params: { type: 'object', required: false, default: '{}' },
          inRow: { type: 'boolean', required: false, default: false },
        },
      },
      appLogic: {
        type: 'object',
        properties: {
          endpoint: { type: 'string', required: true },
          method: { type: 'string', default: 'GET', enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'], required: true },
          dataType: { type: 'string', required: true },
          auth: {
            type: 'object',
            properties: {
              authType: { type: 'string', default: 'bearer', enum: ['bearer', 'header', 'basic', 'none'], required: true },
              authKey: { type: 'string', required: true },
              authValue: { type: 'string', required: true }
            },
            required: false
          }
        },
        required: false
      }
    },
  };
}

export function baseData(
  defaultValue?: string,
  label?: string,
  state?: State,
  isStateRequired?: boolean,
  defaultCode?: string,
) {
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
            default: state?.id ?? '',
          },
          type: {
            type: 'string',
            required: true,
            default: state?.type ?? 'any',
          },
          name: {
            type: 'string',
            required: true,
            default: state?.name ?? '',
          },
          defaultValue: {
            type: 'string',
            required: false,
            default: state?.defaultValue ?? defaultValue ?? 'undefined',
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
                  default: '',
                },
                namespace: {
                  type: 'string',
                  required: true,
                  default: '',
                },
              },
            },
          },
          generate: {
            type: 'boolean',
            required: isStateRequired,
            default: true
          }
        },
        required: isStateRequired ?? false,
      },
      value: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            required: true,
            default: '',
          },
          code: {
            type: 'string',
            required: true,
            default: defaultCode ?? '',
          },
        },
        required: false,
      },
    },
    required: isStateRequired ?? false
  };
}

export function baseStyle() {
  return {
    type: 'object',
    properties: {
      layout: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: [
              'block',
              'flex',
              'grid',
              'inline-block',
              'inline-flex',
              'inline-grid',
              'inline',
              'none',
            ],
            required: true,
          },
          flex: {
            type: 'object',
            properties: {
              direction: { type: 'string', required: true },
              wrap: { type: 'string', required: true },
              alignItems: { type: 'string', required: true },
              justifyContent: { type: 'string', required: true },
              gap: { type: 'string', required: true },
            },
          },
          grid: {
            type: 'object',
            properties: {
              templateColumns: { type: 'string', required: true },
              templateRows: { type: 'string', required: true },
              gap: { type: 'string', required: true },
              justifyItems: { type: 'string', required: true },
              alignItems: { type: 'string', required: true },
              direction: { type: 'string', required: true },
              dense: { type: 'boolean', required: true },
            },
          },
          block: {
            type: 'object',
          },
        },
      },
      spacing: {
        type: 'object',
        properties: {
          margin: {
            type: 'object',
            properties: {
              top: {
                type: 'object',
                properties: {
                  value: { type: 'number', required: true },
                  unit: {
                    type: 'string',
                    enum: ['px', 'rem', '%', 'em', 'auto'],
                    required: true,
                  },
                },
              },
              right: {
                type: 'object',
                properties: {
                  value: { type: 'number', required: true },
                  unit: {
                    type: 'string',
                    enum: ['px', 'rem', '%', 'em', 'auto'],
                    required: true,
                  },
                },
              },
              bottom: {
                type: 'object',
                properties: {
                  value: { type: 'number', required: true },
                  unit: {
                    type: 'string',
                    enum: ['px', 'rem', '%', 'em', 'auto'],
                    required: true,
                  },
                },
              },
              left: {
                type: 'object',
                properties: {
                  value: { type: 'number', required: true },
                  unit: {
                    type: 'string',
                    enum: ['px', 'rem', '%', 'em', 'auto'],
                    required: true,
                  },
                },
              },
            },
          },
          padding: {
            type: 'object',
            properties: {
              top: {
                type: 'object',
                properties: {
                  value: { type: 'number', required: true },
                  unit: {
                    type: 'string',
                    enum: ['px', 'rem', '%', 'em', 'auto'],
                    required: true,
                  },
                },
              },
              right: {
                type: 'object',
                properties: {
                  value: { type: 'number', required: true },
                  unit: {
                    type: 'string',
                    enum: ['px', 'rem', '%', 'em', 'auto'],
                    required: true,
                  },
                },
              },
              bottom: {
                type: 'object',
                properties: {
                  value: { type: 'number', required: true },
                  unit: {
                    type: 'string',
                    enum: ['px', 'rem', '%', 'em', 'auto'],
                    required: true,
                  },
                },
              },
              left: {
                type: 'object',
                properties: {
                  value: { type: 'number', required: true },
                  unit: {
                    type: 'string',
                    enum: ['px', 'rem', '%', 'em', 'auto'],
                    required: true,
                  },
                },
              },
            },
          },
        },
      },
      size: {
        type: 'object',
        required: false,
        properties: {
          width: {
            type: 'object',
            required: false,
            properties: {
              value: { type: 'string', required: true },
              unit: { type: 'string', required: true },
            }
          },
          height: {
            type: 'object',
            required: false,
            properties: {
              value: { type: 'string', required: true },
              unit: { type: 'string', required: true },
            }
          },
          minWidth: {
            type: 'object',
            required: false,
            properties: {
              value: { type: 'string', required: true },
              unit: { type: 'string', required: true },
            }
          },
          maxWidth: {
            type: 'object',
            required: false,
            properties: {
              value: { type: 'string', required: true },
              unit: { type: 'string', required: true },
            }
          },
          minHeight: {
            type: 'object',
            required: false,
            properties: {
              value: { type: 'string', required: true },
              unit: { type: 'string', required: true },
            }
          },
          maxHeight: {
            type: 'object',
            required: false,
            properties: {
              value: { type: 'string', required: true },
              unit: { type: 'string', required: true },
            }
          },
          aspectRatio: {
            type: 'string',
            required: false
          },
          overflowX: {
            type: 'string',
            required: false
          },
          overflowY: {
            type: 'string',
            required: false
          },
          aspectRatioLocked: {
            type: 'boolean',
            required: false
          },
        }
      },
      typography: {
        type: 'object',
      },
      borders: {
        type: 'object',
      },

    },
  };
}

export function baseRules() {
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
        condition: {
          type: 'string',
          required: true,
          default: 'true',
        },
      },
    }
  };
}