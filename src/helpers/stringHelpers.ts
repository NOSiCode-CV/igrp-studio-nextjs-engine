export function toLowerCase(str: string): string {
  return str.toLowerCase();
}

export function toCamelCase(str: string): string {
  if (!str) return '';
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function trim(str: string): string {
  return str.trim()
}

export function json(context: any): string {
  return JSON.stringify(context);
}

export function toProps(context: any): string {
  return `{${JSON.stringify(context)}}`
}

export function concat(...strings: any[]): string {
  strings.pop();
  return strings.join('');
}

export function toCamelCaseFromNatural (str: string) {
if (!str) return '';

return str
  .toLowerCase()
  .split(' ')
  .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
  .join('');
}



export function typeResolution(...data: any[]): string {
  data.pop();
  return `<${data.join(', ')}>`
}

export function typeFormatter(type: string | undefined): string {
  return `<${type ? capitalize(type) : 'any'}, ${type ? capitalize(type) : 'any'}>`
}

export function singleTypeFormatter(type: string | undefined): string {
  return `<${type ? capitalize(type) : 'any'}>`
}

