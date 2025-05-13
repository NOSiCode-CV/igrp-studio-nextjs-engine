import fs from 'fs-extra';

export function loadExportsConfig(configPath: string) {
  let configContent = fs.readFileSync(configPath, 'utf-8');

  // Remove all comment blocks first
  configContent = configContent.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');

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