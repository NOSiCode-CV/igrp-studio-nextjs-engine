export function greaterThan(a: any, b: any): boolean {
  return a > b;
}

export function equals(a: any, b: any): boolean {
  return a === b;
}

export function and (...args: any[]) {
  args.pop(); // Remove the last element, which is the Handlebars options object
  return args.every(Boolean); // Check if all arguments are truthy
}

export function not(conditional: any) {
  return !conditional;
}