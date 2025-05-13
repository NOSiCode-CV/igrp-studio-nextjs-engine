export function formReferenceUsageProperties() {
  return {
    formTag: {
      type: 'string',
      default: '{{id}}',
      required: true
    },
    submitFunction: {
      type: 'string',
      required: true,
    }
  }
}

export function formReferenceUsageDefaultProperties() {
  return {
    formTag: '{{tag}}',
    submitFunction: 'someFunction',
  }
}