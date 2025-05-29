import fs from 'fs-extra';
import path from 'path';
import { ComponentDef } from '../../interfaces/types';
import { resolveExportedPath } from '../../utils/helpers';

export function parseComponents(componentFilePath: string): ComponentDef[] {
  let content = fs.readFileSync(componentFilePath.endsWith('.tsx') ? componentFilePath : componentFilePath + 'x', 'utf-8');
  const components: ComponentDef[] = [];

  // Remove all comment blocks first
  content = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');

  // Match function declarations
  const functionRegex = /(?:export\s+default\s+|export\s+)?function\s+(\w+)\s*\(/g;
  let functionMatch;
  while ((functionMatch = functionRegex.exec(content)) !== null) {
    const name = functionMatch[1];
    const start = functionMatch.index + functionMatch[0].length - 1;
    const extracted = extractBalancedParams(content, start);
    if (!extracted) continue;

    const { props, argumentsInterface } = parseComponentProps(extracted.params);
    if (props || argumentsInterface) {
      components.push({ name, path: resolveExportedPath(componentFilePath), props, argumentsInterface, hooks: [], children: [] });
    }
  }

  // Match arrow functions
  const arrowRegex = /(?:export\s+)?const\s+(\w+)\s*=\s*(?:async\s*)?\(/g;
  let arrowMatch;
  while ((arrowMatch = arrowRegex.exec(content)) !== null) {
    const name = arrowMatch[1];
    const start = arrowMatch.index + arrowMatch[0].length - 1;
    const extracted = extractBalancedParams(content, start);
    if (!extracted) continue;

    const { props, argumentsInterface } = parseComponentProps(extracted.params);
    if (props || argumentsInterface) {
      components.push({ name, path: resolveExportedPath(componentFilePath), props, argumentsInterface, hooks: [], children: [] });
    }
  }

  return components;
}

function extractBalancedParams(str: string, startIndex: number): { params: string, endIndex: number } | null {
  let i = startIndex;
  if (str[i] !== '(') return null;
  let depth = 0;
  let params = '';
  while (i < str.length) {
    const char = str[i];
    if (char === '(') depth++;
    if (char === ')') depth--;
    params += char;
    i++;
    if (depth === 0) break;
  }
  if (depth !== 0) return null;
  return { params: params.slice(1, -1), endIndex: i };
}

function parseComponentProps(propsContent: string): { props: ComponentDef['props']; argumentsInterface?: string } {
  const props: ComponentDef['props'] = [];
  let argumentsInterface: string | undefined;

  const cleanContent = propsContent.trim();

  // Destructured with type reference ({ a, b }: Type)
  const refMatch = cleanContent.match(/^{\s*([^}]*)\s*}\s*:\s*([A-Z][a-zA-Z0-9_]*)/);
  if (refMatch) {
    const propNames = refMatch[1].split(',').map(p => parseNameDefault(p.trim()));
    for (const { name, optional, defaultValue } of propNames) {
      props.push(createPropDefinition(name, 'any', optional, defaultValue));
    }
    argumentsInterface = refMatch[2];
    return { props, argumentsInterface };
  }

  // Destructured with inline type definition
  const inlineMatch = cleanContent.match(/^{\s*([^}]*)\s*}\s*:\s*(\{[\s\S]*?\})(?:\s*[^}])?/);
  if (inlineMatch) {
    const propNames = inlineMatch[1].split(',').map(p => parseNameDefault(p.trim()));
    const typeContent = inlineMatch[2];
    const typeRegex = /(\w+)(\??)\s*:\s*([^;\n}]+)(?=\s*(?:;|\}|\n|$))/g;
    const typeMap = new Map<string, { type: string; optional: boolean }>();
    let typeMatch;
    while ((typeMatch = typeRegex.exec(typeContent)) !== null) {
      typeMap.set(typeMatch[1].trim(), {
        type: typeMatch[3].trim(),
        optional: !!typeMatch[2]
      });
    }
    for (const { name, optional, defaultValue } of propNames) {
      if (typeMap.has(name)) {
        const typeDef = typeMap.get(name)!;
        props.push(createPropDefinition(name, typeDef.type, optional || typeDef.optional, defaultValue));
      } else {
        props.push(createPropDefinition(name, 'any', optional, defaultValue));
      }
    }
    return { props: props.filter((it) => it.name != '') };
  }

  return { props: [], argumentsInterface: undefined };
}

function parseNameDefault(raw: string): { name: string; optional: boolean; defaultValue?: string } {
  const [namePart, defaultValue] = raw.split('=');
  const name = namePart.trim().replace('?', '');
  const optional = namePart.includes('?');
  return { name, optional, defaultValue: defaultValue?.trim() };
}

function createPropDefinition(name: string, type: string, isOptional: boolean, defaultValue?: string): ComponentDef['props'][0] {
  return {
    name,
    type,
    isList: type.includes('[]'),
    isOptional,
    isInterface: /^[A-Z][a-zA-Z]*$/.test(type.replace('[]', '')),
    isFunction: type.includes('=>') || /Function$/.test(type),
    isState: /State$/.test(type) || /Dispatch$/.test(type),
    defaultValue
  };
}

function parseHooks(content: string): string[] {
  const hookRegex = /(use[A-Z][a-zA-Z]*)\s*\(/g;
  const hooks = new Set<string>();
  let hookMatch;

  while ((hookMatch = hookRegex.exec(content)) !== null) {
    hooks.add(hookMatch[1]);
  }

  return Array.from(hooks);
}

function parseChildComponents(returnContent: string): string[] {
  const componentRegex = /<([A-Z][a-zA-Z]*)/g;
  const components = new Set<string>();
  let componentMatch;

  while ((componentMatch = componentRegex.exec(returnContent)) !== null) {
    components.add(componentMatch[1]);
  }

  return Array.from(components);
}