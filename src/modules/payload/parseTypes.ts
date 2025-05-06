import fs from 'fs-extra';
import path from 'path';
import { TypeDef } from '../../interfaces/types';

// For other parsers (types, actions, functions), we'll use similar lightweight approaches
export function parseTypes(typeFilePath: string): TypeDef {
  const content = fs.readFileSync(typeFilePath, 'utf-8');
  const name = path.basename(typeFilePath, '.ts');

  // Simple interface/type extraction
  const fields = [...content.matchAll(/(\w+)\??:\s*([^\n;]+)/g)]
    .map(match => ({
      name: match[1],
      type: match[2].trim(),
      required: !match[0].includes('?')
    }));

  return { name, fields, path: typeFilePath};
}