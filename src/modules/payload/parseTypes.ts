import fs from 'fs-extra';
import { TypeDef } from '../../interfaces/types';
import { resolveExportedPath } from '../../utils/helpers';

export function parseTypes(typeFilePath: string): TypeDef[] {
  let content = fs.readFileSync(typeFilePath, 'utf-8');
  const typeDefs: TypeDef[] = [];

  // Remove all comment blocks first
  content = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');

  // 1. Parse interface declarations (updated to handle generics)
  const interfaceRegex = /interface\s+(\w+)\s*(?:<[^>]+>)?\s*{([\s\S]*?)}/gs;
  let interfaceMatch;

  while ((interfaceMatch = interfaceRegex.exec(content)) !== null) {
    typeDefs.push(parseTypeDefinition(
      interfaceMatch[1],
      interfaceMatch[2],
      typeFilePath
    ));
  }

  // 2. Parse type declarations with object literals (updated to handle generics)
  const typeLiteralRegex = /type\s+(\w+)\s*(?:<[^>]+>)?\s*=\s*{([\s\S]*?)}/gs;
  let typeLiteralMatch;

  while ((typeLiteralMatch = typeLiteralRegex.exec(content)) !== null) {
    typeDefs.push(parseTypeDefinition(
      typeLiteralMatch[1],
      typeLiteralMatch[2],
      typeFilePath
    ));
  }

  // 3. Parse enum declarations (added support for enums)
  const enumRegex = /(?:export\s+)?enum\s+(\w+)\s*{([\s\S]*?)}/gs;
  let enumMatch;

  while ((enumMatch = enumRegex.exec(content)) !== null) {
    typeDefs.push(parseEnumDefinition(
      enumMatch[1],
      enumMatch[2],
      typeFilePath
    ));
  }

  return typeDefs;
}

function parseTypeDefinition(
  name: string,
  bodyContent: string,
  filePath: string
): TypeDef {
  // Updated field regex to handle complex types with angle brackets
  const fieldRegex = /(\w+)\s*\??\s*:\s*([^;\n,<]+(?:<[^>]+>)?[^;\n,]*)(?:\s*,\s*|;|\n|$)/g;
  const fields: TypeDef['fields'] = [];
  let fieldMatch;

  while ((fieldMatch = fieldRegex.exec(bodyContent)) !== null) {
    const fieldName = fieldMatch[1].trim();
    let fieldType = fieldMatch[2].trim();
    fieldType = fieldType.replace(/,\s*$/, '').trim();
    const isList = fieldType.endsWith('[]');
    fieldType = fieldType.replace(/\[]$/, '');
    fields.push({
      componentId: '',
      name: fieldName,
      type: fieldType,
      isList,
      required: !fieldMatch[0].includes('?')
    });
  }

  return {
    componentId: '',
    name,
    fields,
    path: resolveExportedPath(filePath)
  };
}

// New function to parse enum definitions
function parseEnumDefinition(
  name: string,
  bodyContent: string,
  filePath: string
): TypeDef {
  const fields: TypeDef['fields'] = [];
  const memberRegex = /(\w+)\s*(?:=\s*((?:"(?:[^"\\]|\\.)*")|(?:'(?:[^'\\]|\\.)*')|([^,}\n]+)))?\s*(?:,|$)/g;
  let memberMatch;

  while ((memberMatch = memberRegex.exec(bodyContent)) !== null) {
    const fieldName = memberMatch[1].trim();
    let valueStr = (memberMatch[2] || memberMatch[3] || '').trim();
    let type = 'any';
    let defaultValue = '';

    if (valueStr) {
      // Handle string values (both single and double quoted)
      if ((valueStr.startsWith('"') && valueStr.endsWith('"')) ||
        (valueStr.startsWith("'") && valueStr.endsWith("'"))) {
        type = 'string';
        defaultValue = valueStr.slice(1, -1)
          .replace(/\\"/g, '"')
          .replace(/\\'/g, "'")
          .replace(/\\\\/g, '\\');
      }
      // Handle numeric values
      else if (/^-?\d+(\.\d+)?$/.test(valueStr)) {
        type = 'number';
        defaultValue = valueStr;
      }
      // Handle boolean values
      else if (valueStr === 'true' || valueStr === 'false') {
        type = 'boolean';
        defaultValue = valueStr;
      }
      // Handle other values (like identifiers)
      else {
        type = 'any';
        defaultValue = valueStr;
      }
    } else {
      // For enum members without explicit values, use the member name as default
      defaultValue = fieldName;
    }

    fields.push({
      componentId: '',
      name: fieldName,
      type: type,
      isList: false,
      required: true,
      defaultValue: defaultValue
    });
  }

  return {
    componentId: '',
    name,
    fields,
    isEnum: true,  // Mark as enum type
    path: resolveExportedPath(filePath)
  };
}