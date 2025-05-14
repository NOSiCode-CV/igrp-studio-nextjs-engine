import fs from 'fs-extra';
import { FunctionDef } from '../../interfaces/types';

export function parseFunctions(functionFilePath: string): FunctionDef[] {
  let content = fs.readFileSync(functionFilePath, 'utf-8');
  const functions: FunctionDef[] = [];

  // Remove all comment blocks first
  content = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');

  // 1. Parse traditional function declarations
  const functionRegex = /function\s+(\w+)\s*\(\s*([^)]*)\s*\)\s*(?::\s*([^{;]+))?/gs;
  let functionMatch;

  while ((functionMatch = functionRegex.exec(content)) !== null) {
    functions.push(parseFunctionSignature(
      functionMatch[1],
      functionMatch[2],
      functionMatch[3],
      functionFilePath
    ));
  }

  // 2. Parse arrow function declarations
  const constFunctionRegex = /const\s+(\w+)\s*=\s*(?:async\s*)?\(\s*([^)]*)\s*\)\s*(?::\s*([^=>]+))?\s*=>/gs;
  let constFunctionMatch;

  while ((constFunctionMatch = constFunctionRegex.exec(content)) !== null) {
    functions.push(parseFunctionSignature(
      constFunctionMatch[1],
      constFunctionMatch[2],
      constFunctionMatch[3],
      functionFilePath
    ));
  }

  return functions;
}

function parseFunctionSignature(
  name: string,
  argsString: string,
  returnType: string | undefined,
  filePath: string
): FunctionDef {
  const args = argsString
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
        isNullable: optional,
        id: ''
      };
    });

  return {
    name,
    args,
    path: filePath,
    returnType: returnType?.trim() || 'void'
  };
}