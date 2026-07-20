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

/**
 * Concatenates all arguments into a single string. Undefined/null entries
 * are dropped so an unset optional filter argument doesn't produce the
 * literal "undefined".
 *
 * Historical note: this used to do `strings.pop()` before joining, which
 * silently dropped the LAST argument every call. That was the root cause
 * of style-derived classes (e.g. `bg-[#33e651] bg-cover ...` produced by
 * `addClassNameFromStyle`) never appearing in the emitted
 * `className={cn(...)}` — default.liquid passes styleClassNames as the
 * third argument to `concat`, so it was the one being dropped.
 */
export function concat(...strings: any[]): string {
  return strings.filter((s) => s !== undefined && s !== null).join('');
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
  // Same "options object" trap the `concat`/`and`/`or` helpers had —
  // LiquidJS doesn't append a trailing arg, so the pop dropped a real
  // type from the emitted generic parameter list.
  return `<${data.filter((v) => v !== undefined && v !== null).join(', ')}>`
}

export function typeFormatter(type: string | undefined): string {
  return `<${type ? capitalize(type) : 'any'}, ${type ? capitalize(type) : 'any'}>`
}

export function singleTypeFormatter(type: string | undefined): string {
  return `<${type ? capitalize(type) : 'any'}>`
}

