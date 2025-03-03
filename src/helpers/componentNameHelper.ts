export function componentNameHelper(component: any): string {
  if (component.componentName === 'FormLayout') {
    return 'I' + component.id.charAt(0).toUpperCase() + component.id.slice(1) + 'Fields';
  }
  return 'any'
}