import fs from 'fs-extra';
import { ActionDef } from '../../interfaces/types';

export function parseActions(actionFilePath: string): ActionDef {
  const content = fs.readFileSync(actionFilePath, 'utf-8');

  // Extract function declaration
  const funcMatch = content.match(/function\s+(\w+)\s*\(([^)]*)\)\s*(?::\s*([^{]+))?/);
  if (!funcMatch) return { name: '', args: [], returnType: 'void', path: '' };

  const args = funcMatch[2].split(',')
    .map(arg => arg.trim())
    .filter(Boolean)
    .map(arg => {
      const [name, type] = arg.split(':').map(s => s.trim());
      return { name, type: type || 'any', optional: false };
    });

  return {
    name: funcMatch[1],
    args,
    path: actionFilePath,
    returnType: funcMatch[3]?.trim() || 'void'
  };
}