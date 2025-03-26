export function commonProperties() {
  return {
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
  };
}

export function commonPropertiesMapping() {
  return {
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
  };
}

export function iconProperties() {
  return {
    iconProperties: {
      hasIcon: { type: 'boolean', required: false, default: false },
      iconName: { type: 'string', required: false },
      iconPosition: { type: 'string', required: false, enum: ['start', 'end']  },
      iconClassName: { type: 'string', required: false },
      iconSize: { type: 'number', required: false },
    }
  }
}

export function baseInteraction() {
  return {
    type: 'object',
    properties: {
      fnName: {
        type: 'string', required: false
      },
      actionName: {
        type: 'string', required: false
      },
      fnCustomSet: {
        type: 'string', required: false
      },
      fnCustomCode: {
        type: 'object',
        properties: {
          imports: {
            type: 'array', required: false,
            items: {
              type: 'string', required: false
            },
          },
          fnCode: {
            type: 'string', required: false
          },
          actionCode: {
            type: 'string', required: false
          },
        }
      }
    }
  };
}
