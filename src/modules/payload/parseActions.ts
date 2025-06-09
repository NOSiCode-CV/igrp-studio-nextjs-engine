import fs from 'fs-extra';
import { ActionDef } from '../../interfaces/types';
import { resolveExportedPath } from '../../utils/helpers';

export function parseActions(actionFilePath: string): ActionDef[] {
  let content = fs.readFileSync(actionFilePath, 'utf-8');
  const actions: ActionDef[] = [];

  // Remove all comment blocks first
  content = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');

  // 1. Parse traditional action declarations
  const actionRegex = /function\s+(\w+)\s*\(\s*([^)]*)\s*\)\s*(?::\s*([^{;]+))?/gs;
  let actionMatch;

  while ((actionMatch = actionRegex.exec(content)) !== null) {
    actions.push(parseActionSignature(
      actionMatch[1],
      actionMatch[2],
      actionMatch[3],
      actionFilePath
    ));
  }

  // 2. Parse arrow action declarations
  const constActionRegex = /const\s+(\w+)\s*=\s*(?:async\s*)?\(\s*([^)]*)\s*\)\s*(?::\s*([^=>]+))?\s*=>/gs;
  let constActionMatch;

  while ((constActionMatch = constActionRegex.exec(content)) !== null) {
    actions.push(parseActionSignature(
      constActionMatch[1],
      constActionMatch[2],
      constActionMatch[3],
      actionFilePath
    ));
  }

  return actions;
}

function parseActionSignature(
  name: string,
  argsString: string,
  returnType: string | undefined,
  filePath: string
): ActionDef {
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
      let type = typeParts.length > 0
        ? typeParts.join(':').trim()
        : 'any';
      const isList = type.endsWith('[]');
      type = type.replace(/\[]$/, '')

      return {
        name,
        type,
        isOptional: optional,
        isList,
        isFunction: false,
        isInterface: false,
        isState: false,
        id: ''
      };
    });

  return {
    name,
    args,
    path: resolveExportedPath(filePath),
    returnType: returnType?.trim() || 'void'
  };
}