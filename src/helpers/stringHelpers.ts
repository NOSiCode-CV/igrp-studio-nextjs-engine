export function toLowerCase(str: string): string {
  return str.toLowerCase();
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function json(context: any): string {
  return JSON.stringify(context);
}

export function toProps(context: any): string {
  return `{${JSON.stringify(context)}}`
}

export function concat(str1: string, str2: string) {
  return str1 + str2;
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