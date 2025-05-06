import fs from 'fs-extra';

export function loadPayloadConfig(configPath: string) {
  const configContent = fs.readFileSync(configPath, 'utf-8');

  // Extract all quoted strings after each property name
  const extract = (prop: string) => {
    const regex = new RegExp(`${prop}:\\s*\\[([^\\]]*)\\]`, 's');
    const match = configContent.match(regex);
    return match
      ? [...match[1].matchAll(/'([^']+)'/g)].map(m => m[1])
      : [];
  };

  const result = {
    types: extract('types'),
    actions: extract('actions'),
    functions: extract('functions')
  };

  console.log("result: ", result)

  return result
}