import fs from 'fs-extra';
import { TypeDef } from '../../interfaces/types';
import { resolveExportedPath } from '../../utils/helpers';

export function parseTypes(typeFilePath: string): TypeDef[] {
  let content = fs.readFileSync(typeFilePath, 'utf-8');
  const typeDefs: TypeDef[] = [];

  // Remove all comment blocks first
  content = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');

  // 1. Parse interface declarations
  const interfaceRegex = /interface\s+(\w+)\s*{([^}]*)}/gs;
  let interfaceMatch;

  while ((interfaceMatch = interfaceRegex.exec(content)) !== null) {
    typeDefs.push(parseTypeDefinition(
      interfaceMatch[1],
      interfaceMatch[2],
      typeFilePath
    ));
  }

  // 2. Parse type declarations with object literals
  const typeLiteralRegex = /type\s+(\w+)\s*=\s*{([^}]*)}/gs;
  let typeLiteralMatch;

  while ((typeLiteralMatch = typeLiteralRegex.exec(content)) !== null) {
    typeDefs.push(parseTypeDefinition(
      typeLiteralMatch[1],
      typeLiteralMatch[2],
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
  const fieldRegex = /(\w+)\s*\??\s*:\s*([^;\n,]+)(?:\s*,\s*|;|\n|$)/g;
  const fields: TypeDef['fields'] = [];
  let fieldMatch;

  while ((fieldMatch = fieldRegex.exec(bodyContent)) !== null) {
    const fieldName = fieldMatch[1].trim();
    let fieldType = fieldMatch[2].trim();
    fieldType = fieldType.replace(/,\s*$/, '').trim();
    const isList = fieldType.endsWith('[]');
    fieldType = fieldType.replace(/\[]$/, '')
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