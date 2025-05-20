export function formReferenceUsageProperties() {
  return {
    formTag: {
      type: 'string',
      default: '{{id}}',
      required: true
    }
  }
}

export function formReferenceUsageDefaultProperties() {
  return {
    formTag: '{{tag}}',
  }
}