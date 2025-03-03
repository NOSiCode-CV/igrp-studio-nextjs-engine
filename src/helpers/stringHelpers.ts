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