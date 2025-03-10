export function notNullOrEmpty(config?: any | undefined) {
  return config && Object.entries(config).length > 0
}

export function nullOrEmpty(config?: any | undefined) {
  return !config || Object.entries(config).length > 0 || config == ''
}