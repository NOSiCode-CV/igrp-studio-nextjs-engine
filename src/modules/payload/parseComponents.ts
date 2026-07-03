import fs from 'fs-extra';
import path from 'path';
import { ComponentDef } from '../../interfaces/types';
import { resolveExportedPath } from '../../utils/helpers';

export function parseComponents(componentFilePath: string): ComponentDef[] {
  let content = fs.readFileSync(componentFilePath.endsWith('.tsx') ? componentFilePath : componentFilePath + 'x', 'utf-8');

  // Remove all comment blocks first
  content = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');

  // Build a map of every character position → nesting depth of the surrounding
  // curly braces (0 = module top-level, 1 = inside one function body, etc.).
  // The scanner is string- and JSX-aware so `{` inside a string literal or a
  // JSX expression container isn't confused with a real block boundary.
  const depthAt = buildDepthMap(content);

  const seen = new Set<string>();
  const components: ComponentDef[] = [];

  const push = (name: string, params: string) => {
    // A React component's first (and typically only) argument is a destructured
    // props object: `({ a, b }: Props)` or `({ a, b }: { ... })` or `(props: X)`.
    // Event handlers / helpers like `(idx: number, patch: Partial<X>) => …`
    // take positional args and are correctly rejected by parseComponentProps
    // (returns props=[] with no argumentsInterface).
    const { props, argumentsInterface } = parseComponentProps(params);
    // Fixed: `[]` is truthy in JS, so `props || argumentsInterface` was always
    // true and let non-components through. A real component either has parsed
    // props (props.length > 0) or a props-type name (argumentsInterface).
    if (props.length === 0 && !argumentsInterface) return;
    if (seen.has(name)) return;
    seen.add(name);
    const allowChildren = detectChildrenProp(props);
    components.push({
      name,
      path: resolveExportedPath(componentFilePath),
      props,
      argumentsInterface,
      hooks: [],
      children: [],
      allowChildren,
    });
  };

  // -- function declarations: `function Name(...)` at module top-level only --
  const functionRegex = /(?:export\s+default\s+|export\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let functionMatch;
  while ((functionMatch = functionRegex.exec(content)) !== null) {
    const name = functionMatch[1];
    // Only accept PascalCase names — React convention. `updateRow`, `useX`,
    // `handleY` fall out. `SomeComponent` is kept.
    if (!isPascalCase(name)) continue;
    // Only top-level declarations. `depthAt[i]` is the depth immediately
    // BEFORE the character at position i, so a top-level declaration starts
    // at a position where depth === 0.
    if (depthAt[functionMatch.index] !== 0) continue;

    const start = functionMatch.index + functionMatch[0].length - 1;
    const extracted = extractBalancedParams(content, start);
    if (!extracted) continue;
    push(name, extracted.params);
  }

  // -- arrow / function-expression variables: `const Name = (…) =>` or
  //    `const Name = function (…) {`. Same top-level + PascalCase filter. --
  const arrowRegex = /(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*(?::\s*[^=]+)?=\s*(?:async\s+)?(?:function\s*(?:[A-Za-z_$][\w$]*)?\s*)?\(/g;
  let arrowMatch;
  while ((arrowMatch = arrowRegex.exec(content)) !== null) {
    const name = arrowMatch[1];
    if (!isPascalCase(name)) continue;
    if (depthAt[arrowMatch.index] !== 0) continue;

    const start = arrowMatch.index + arrowMatch[0].length - 1;
    const extracted = extractBalancedParams(content, start);
    if (!extracted) continue;
    push(name, extracted.params);
  }

  return components;
}

/** React-component naming convention: starts with an uppercase ASCII letter. */
function isPascalCase(name: string): boolean {
  return /^[A-Z]/.test(name);
}

/**
 * Returns an array where `depthAt[i]` is the curly-brace nesting depth just
 * before the character at index `i`. Tokens INSIDE string literals, template
 * literals (including `${…}` interpolations), and regex literals do not count
 * toward depth. JSX braces `{expr}` are treated as regular JS braces, which is
 * fine — a JSX return already puts us inside a function body (depth ≥ 1), so a
 * spurious `{` inside JSX just further increments an already-non-zero depth
 * and never mis-classifies a nested declaration as top-level.
 */
function buildDepthMap(content: string): Int16Array {
  const n = content.length;
  const depth = new Int16Array(n + 1);
  let d = 0;
  // template-literal state: 0 = not in string; 1 = single/double; 2 = template
  // (needs to track ${...} balance).
  let mode: 0 | 1 | 2 = 0;
  let quote = '';
  let templDollar = 0; // nesting of `${…}` interpolations inside a template
  let inLineComment = false;
  let inBlockComment = false;

  for (let i = 0; i < n; i++) {
    depth[i] = d;
    const c = content[i];
    const next = content[i + 1];

    if (inLineComment) {
      if (c === '\n') inLineComment = false;
      continue;
    }
    if (inBlockComment) {
      if (c === '*' && next === '/') { inBlockComment = false; i++; depth[i] = d; }
      continue;
    }

    if (mode === 0) {
      // top-level or code region
      if (c === '/' && next === '/') { inLineComment = true; i++; depth[i] = d; continue; }
      if (c === '/' && next === '*') { inBlockComment = true; i++; depth[i] = d; continue; }
      if (c === '"' || c === "'") { mode = 1; quote = c; continue; }
      if (c === '`') { mode = 2; templDollar = 0; continue; }
      if (c === '{') d++;
      else if (c === '}') d = Math.max(0, d - 1);
    } else if (mode === 1) {
      if (c === '\\') { i++; depth[i] = d; continue; }
      if (c === quote) mode = 0;
    } else if (mode === 2) {
      if (c === '\\') { i++; depth[i] = d; continue; }
      if (c === '`' && templDollar === 0) { mode = 0; continue; }
      if (c === '$' && next === '{') {
        templDollar++;
        i++; depth[i] = d;
        continue;
      }
      if (c === '}' && templDollar > 0) {
        templDollar--;
        continue;
      }
    }
  }
  depth[n] = d;
  return depth;
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

function detectChildrenProp(props: { name: string; type: string }[]): boolean {
  return props.some(
    (p) =>
      p.name === 'children' &&
      (p.type.includes('ReactNode') ||
        p.type.includes('ReactElement') ||
        p.type.includes('JSX.Element') ||
        p.type === 'any')
  );
}