export function useEffectProperties() {
  return {
    dependencies: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          state: {
            type: 'string',
            default: '',
            required: true
          }
        }
      }
    }
  }
}

export function useEffectDefaultProperties() {
  return {
    dependencies: []
  }
}