export function greaterThan(a: any, b: any): boolean {
  return a > b;
}

export function equals(a: any, b: any): boolean {
  return a === b;
}

// The previous implementations popped the last argument on the assumption
// that the templating engine appended an options object (Handlebars
// convention). LiquidJS filters do not, and the registerFilter wrapper in
// helperRegistry doesn't either — the pop silently discarded a real
// operand every call. Same root cause as the `concat` fix in 0.2.0-beta.25.
export function and (...args: any[]) {
  return args.every(Boolean);
}

export function or (...args: any[]) {
  return args.some(Boolean);
}

export function not(conditional: any) {
  return !conditional;
}