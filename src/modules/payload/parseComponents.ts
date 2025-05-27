import fs from 'fs-extra';
import path from 'path';
import { ComponentDef } from '../../interfaces/types';
import { resolveExportedPath } from '../../utils/helpers';

export function parseComponents(componentFilePath: string): ComponentDef[] {
  let content = fs.readFileSync(componentFilePath + "x", 'utf-8');
  const components: ComponentDef[] = [];

  // Remove all comment blocks first
  content = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');

  // First extract the entire component function signature
  const componentRegex = /export\s+default\s+function\s+(\w+)\s*\(([\s\S]*?)\)\s*{[\s\S]*?return\s*\(([\s\S]*?)\)[\s\S]*?}/g;
  let componentMatch;

  while ((componentMatch = componentRegex.exec(content)) !== null) {
    const componentName = componentMatch[1];
    const propsContent = componentMatch[2];
    const returnContent = componentMatch[3];

    const props = parseComponentProps(propsContent);
    const hooks = parseHooks(content);
    const children = parseChildComponents(returnContent);

    components.push({
      name: componentName,
      path: resolveExportedPath(componentFilePath),
      props,
      hooks,
      children
    });
  }

  return components;
}

function parseComponentProps(propsContent: string): ComponentDef['props'] {
  const props: ComponentDef['props'] = [];

  // First handle destructured props with type ({ a, b }: Type)
  const destructuredMatch = propsContent.match(/^{\s*([^}]*)\s*}\s*:\s*\w+/);
  if (destructuredMatch) {
    const innerProps = destructuredMatch[1].split(',').map(p => p.trim());
    for (const prop of innerProps) {
      if (prop) {
        const isOptional = prop.includes('?');
        props.push(createPropDefinition(prop.replace('?', ''), 'any', isOptional));
      }
    }
    return props;
  }

  // Handle regular parameter list
  let currentPos = 0;
  let depth = 0;
  let startPos = 0;
  const result: string[] = [];

  // Split by commas but respect nested structures
  while (currentPos < propsContent.length) {
    const char = propsContent[currentPos];
    if (char === '(' || char === '{' || char === '[') depth++;
    if (char === ')' || char === '}' || char === ']') depth--;

    if (char === ',' && depth === 0) {
      result.push(propsContent.slice(startPos, currentPos).trim());
      startPos = currentPos + 1;
    }
    currentPos++;
  }
  result.push(propsContent.slice(startPos).trim());

  // Parse each individual prop
  for (const propStr of result) {
    if (!propStr) continue;

    const propMatch = propStr.match(/^(\w+)(\??)(?:\s*:\s*((?:[^{}=>]|\([^)]*\)\s*=>\s*[^{}=>]+)+))?(?:\s*=\s*([^;]+))?/);
    if (propMatch) {
      const name = propMatch[1].trim();
      const isOptional = !!propMatch[2];
      let type = propMatch[3]?.trim() || 'any';
      const defaultValue = propMatch[4]?.trim();

      // Clean up function type formatting
      if (type.includes('=>')) {
        type = type.replace(/\s+/g, ' ').trim();
      }

      props.push({
        name,
        type,
        isList: type.includes('[]') && !type.startsWith('('),
        isOptional,
        isInterface: /^[A-Z][a-zA-Z]*$/.test(type.replace('[]', '')),
        isFunction: type.includes('=>') || type.includes('()') || /Function$/.test(type),
        isState: /State$/.test(type) || /Dispatch$/.test(type),
        defaultValue: defaultValue && !defaultValue.includes('>') ? defaultValue : undefined
      });
    }
  }

  return props;
}

function createPropDefinition(name: string, type: string, isOptional: boolean): ComponentDef['props'][0] {
  return {
    name,
    type,
    isList: type.includes('[]'),
    isOptional,
    isInterface: /^[A-Z][a-zA-Z]*$/.test(type.replace('[]', '')),
    isFunction: type.includes('=>') || /Function$/.test(type),
    isState: /State$/.test(type) || /Dispatch$/.test(type),
    defaultValue: undefined
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