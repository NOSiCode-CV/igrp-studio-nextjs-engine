export function toastCustomProperties() {
  return {
    title: {
      type: 'string',
      default: 'Custom!',
      required: false
    },
    description: {
      type: 'string',
      default: 'A custom description.',
      required: false
    },
    content: {
      type: 'string',
      default: 'Custom!',
      required: false
    },
    promise: {
      type: 'string',
      default: 'new Promise((resolve) => setTimeout(resolve, 2000)',
      required: false
    },
    action: {
      type: 'object',
      required: false,
      properties: {
        label: {
          type: 'string',
          default: 'Undo',
          required: true
        },
        onClick: {
          type: 'string',
          default: '() => console.log("Undo")',
          required: true
        },
      }
    },
    loading: {
      type: 'string',
      default: 'Loading...',
      required: false
    },
    success: {
      type: 'string',
      default: 'Operation was executed successfully!',
      required: false
    },
    error: {
      type: 'string',
      default: 'Operation has failed!',
      required: false
    },
  }
}

export function toastCustomDefaultProperties() {
  return {
    content: `<div className="p-4 bg-blue-500 text-white rounded-lg">🚀 Custom Toast</div>`,
  }
}