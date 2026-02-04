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

  // Handle type reference ({ a, b }: Type)
  const refMatch = cleanContent.match(/^{\s*([^}]*)\s*}\s*:\s*([A-Z][a-zA-Z0-9_]*)/);
  if (refMatch) {
    const propsStr = refMatch[1];
    const propItems = parsePropsString(propsStr);

    for (const { name, optional, defaultValue } of propItems) {
      props.push(createPropDefinition(name, 'any', optional, defaultValue));
    }
    argumentsInterface = refMatch[2];
    return { props, argumentsInterface };
  }

  // Handle inline type definition
  const inlineMatch = cleanContent.match(/^{\s*([^}]*)\s*}\s*:\s*(\{[\s\S]*?\})(?:\s*[=),])?/);
  if (inlineMatch) {
    const propsStr = inlineMatch[1];
    const typeContent = inlineMatch[2];
    const propItems = parsePropsString(propsStr);

    // Parse the type definition
    const typeMap = parseTypeDefinition(typeContent);

    for (const { name, optional, defaultValue } of propItems) {
      if (typeMap.has(name)) {
        const typeDef = typeMap.get(name)!;
        props.push(createPropDefinition(name, typeDef.type, optional || typeDef.optional, defaultValue));
      } else {
        // Fallback for props not found in type map
        props.push(createPropDefinition(name, 'any', optional, defaultValue));
      }
    }
    return { props: props.filter((it) => it.name !== '') };
  }

  // Try a more robust approach if the regex didn't match
  const propsAndTypeMatch = cleanContent.match(/^\{([^}]*)\}\s*:\s*\{([^}]+)\}/);
  if (propsAndTypeMatch) {
    const propsStr = propsAndTypeMatch[1];
    const typeStr = propsAndTypeMatch[2];

    // Clean up the type string - remove everything after the last complete type
    const cleanTypeStr = typeStr.replace(/;[^;]*$/, '').trim();

    // Reconstruct the type object with braces
    const reconstructedType = `{${cleanTypeStr}}`;

    const propItems = parsePropsString(propsStr);
    const typeMap = parseTypeDefinition(reconstructedType);

    for (const { name, optional, defaultValue } of propItems) {
      if (typeMap.has(name)) {
        const typeDef = typeMap.get(name)!;
        props.push(createPropDefinition(name, typeDef.type, optional || typeDef.optional, defaultValue));
      } else {
        props.push(createPropDefinition(name, 'any', optional, defaultValue));
      }
    }
    return { props: props.filter((it) => it.name !== '') };
  }

  return { props: [], argumentsInterface: undefined };
}

function parseTypeDefinition(typeContent: string): Map<string, { type: string; optional: boolean }> {
  const typeMap = new Map<string, { type: string; optional: boolean }>();

  // Remove outer braces if present
  let content = typeContent.trim();
  if (content.startsWith('{') && content.endsWith('}')) {
    content = content.slice(1, -1).trim();
  }

  let i = 0;

  while (i < content.length) {
    // Skip whitespace
    while (i < content.length && /\s/.test(content[i])) i++;
    if (i >= content.length) break;

    // Parse property name
    let propertyName = '';
    let isOptional = false;

    while (i < content.length && content[i] !== ':' && content[i] !== '?') {
      propertyName += content[i];
      i++;
    }

    propertyName = propertyName.trim();

    // Check for optional marker
    if (i < content.length && content[i] === '?') {
      isOptional = true;
      i++;
    }

    // Skip whitespace after property name
    while (i < content.length && /\s/.test(content[i])) i++;

    // Expect colon
    if (i < content.length && content[i] === ':') {
      i++;
    } else {
      // Skip to next property
      while (i < content.length && content[i] !== ',' && content[i] !== '}') i++;
      i++; // Skip comma or closing brace
      continue;
    }

    // Skip whitespace after colon
    while (i < content.length && /\s/.test(content[i])) i++;

    // Parse type value
    let typeValue = '';
    let depth = 0;
    let inString = false;
    let stringChar = '';

    while (i < content.length) {
      const char = content[i];

      // Handle strings
      if ((char === '"' || char === "'" || char === '`') && !inString) {
        inString = true;
        stringChar = char;
        typeValue += char;
        i++;
        continue;
      } else if (inString && char === stringChar) {
        inString = false;
        typeValue += char;
        i++;
        continue;
      } else if (inString) {
        typeValue += char;
        i++;
        continue;
      }

      // Handle brackets and parentheses
      if (char === '(' || char === '{' || char === '[') {
        depth++;
      } else if (char === ')' || char === '}' || char === ']') {
        depth--;
      }

      // Check for end of type (comma or semicolon at depth 0)
      if ((char === ',' || char === ';') && depth === 0) {
        break;
      }

      typeValue += char;
      i++;
    }

    // Clean up type value
    typeValue = typeValue.trim();

    if (propertyName && typeValue) {
      typeMap.set(propertyName, {
        type: typeValue,
        optional: isOptional
      });
    }

    // Skip the comma or semicolon
    if (i < content.length && (content[i] === ',' || content[i] === ';')) {
      i++;
    }
  }

  return typeMap;
}

function parsePropsString(propsStr: string): Array<{name: string; optional: boolean; defaultValue?: string}> {
  const result = [];
  let current = '';
  let depth = 0;
  let inString = false;
  let stringChar = '';

  for (let i = 0; i < propsStr.length; i++) {
    const char = propsStr[i];

    // Handle strings
    if ((char === '"' || char === "'" || char === '`') && !inString) {
      inString = true;
      stringChar = char;
      current += char;
      continue;
    } else if (inString && char === stringChar) {
      inString = false;
      current += char;
      continue;
    } else if (inString) {
      current += char;
      continue;
    }

    // Handle brackets and parentheses
    if (char === '(' || char === '{' || char === '[') {
      depth++;
    } else if (char === ')' || char === '}' || char === ']') {
      depth--;
    }

    // Check for comma separator at depth 0
    if (char === ',' && depth === 0 && !inString) {
      const trimmed = current.trim();
      if (trimmed) {
        result.push(parseNameDefault(trimmed));
      }
      current = '';
      continue;
    }

    current += char;
  }

  // Add the last item
  const trimmed = current.trim();
  if (trimmed) {
    result.push(parseNameDefault(trimmed));
  }

  return result;
}

function parseNameDefault(raw: string): { name: string; optional: boolean; defaultValue?: string } {
  // Check if this is a spread operator or empty
  if (raw.startsWith('...') || !raw) {
    return { name: '', optional: false };
  }

  // Split by '=', but be careful with strings and nested structures
  let namePart = raw;
  let defaultValue;

  let depth = 0;
  let inString = false;
  let stringChar = '';
  let splitIndex = -1;

  for (let i = 0; i < raw.length; i++) {
    const char = raw[i];

    // Handle strings
    if ((char === '"' || char === "'" || char === '`') && !inString) {
      inString = true;
      stringChar = char;
      continue;
    } else if (inString && char === stringChar) {
      inString = false;
      continue;
    } else if (inString) {
      continue;
    }

    // Handle brackets and parentheses
    if (char === '(' || char === '{' || char === '[') {
      depth++;
    } else if (char === ')' || char === '}' || char === ']') {
      depth--;
    }

    // Look for '=' only when not in string and at depth 0
    if (char === '=' && depth === 0 && !inString) {
      splitIndex = i;
      break;
    }
  }

  if (splitIndex > -1) {
    namePart = raw.substring(0, splitIndex).trim();
    defaultValue = raw.substring(splitIndex + 1).trim();
  }

  const name = namePart.replace(/\?$/, '').trim();
  const optional = namePart.endsWith('?') || namePart.includes('?:');

  return { name, optional, defaultValue };
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