import fs from 'fs-extra';
import { FunctionDef } from '../../interfaces/types';

export function parseFunctions(functionFilePath: string): FunctionDef | undefined {
  const content = fs.readFileSync(functionFilePath, 'utf-8');

  // Enhanced function regex that handles:
  // - Multi-line declarations
  // - Various spacing patterns
  const funcMatch = content.match(
    /function\s+(\w+)\s*\(\s*([^)]*)\s*\)\s*(?::\s*([^{;]+))?/s
  );

  if (!funcMatch) return undefined

  // Improved parameter parsing
  const args = funcMatch[2]
    .split(',')
    .reduce<string[]>((acc, param) => {
      const trimmed = param.trim();
      if (trimmed) {
        // Handle parameters that might span multiple lines
        const lines = trimmed.split('\n').map(l => l.trim());
        acc.push(...lines.filter(l => l));
      }
      return acc;
    }, [])
    .map(param => {
      const [namePart, ...typeParts] = param.split(':');
      const name = namePart.trim().replace(/\?$/, '');
      const optional = namePart.endsWith('?');
      const type = typeParts.length > 0
        ? typeParts.join(':').trim()
        : 'any';

      return {
        name,
        type,
        isNullable: !optional,
        id: ''
      };
    });

  return {
    name: funcMatch[1],
    args,
    path: functionFilePath,
    returnType: funcMatch[3]?.trim() || 'void'
  };
}