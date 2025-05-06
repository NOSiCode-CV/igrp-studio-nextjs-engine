import fs from 'fs-extra';
import path from 'path';
import { TypeDef } from '../../interfaces/types';

export function parseTypes(typeFilePath: string): TypeDef {
  const content = fs.readFileSync(typeFilePath, 'utf-8');
  const name = path.basename(typeFilePath, '.ts');

  // Improved regex that handles:
  // - Multiple properties on same line
  // - Various spacing patterns
  // - Optional properties
  const fieldRegex = /(\w+)\s*\??\s*:\s*([^;\n,]+)(?:\s*,\s*|;|\n|$)/g;

  const fields: TypeDef['fields'] = [];
  let match;

  while ((match = fieldRegex.exec(content)) !== null) {
    const fieldName = match[1].trim();
    let fieldType = match[2].trim();

    // Clean up type by removing trailing commas and whitespace
    fieldType = fieldType.replace(/,\s*$/, '').trim();

    fields.push({
      name: fieldName,
      type: fieldType,
      required: !match[0].includes('?')
    });
  }

  return {
    name,
    fields,
    path: typeFilePath
  };
}