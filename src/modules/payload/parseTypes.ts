import fs from 'fs';
import path from 'path';
import ts from 'typescript';
import { ElementField, TypeDef } from '../../interfaces/types';

export function parseTypeFile(filePath: string): TypeDef {
  const content = fs.readFileSync(filePath, 'utf-8');
  const source = ts.createSourceFile(filePath, content, ts.ScriptTarget.ESNext, true);

  const fields: ElementField[] = [];
  let name = path.basename(filePath, '.ts');

  ts.forEachChild(source, node => {
    if (ts.isInterfaceDeclaration(node)) {
      name = node.name.text;

      node.members.forEach((member: any) => {
        const fieldName = member.name?.text;
        const type = member.type?.getText(source) ?? 'any';
        const required = !member.questionToken;

        if (fieldName) {
          fields.push({ name: fieldName, type, required });
        }
      });

    } else if (ts.isTypeAliasDeclaration(node) && ts.isTypeLiteralNode(node.type)) {
      name = node.name.text;

      node.type.members.forEach((member: any) => {
        const fieldName = member.name?.text;
        const type = member.type?.getText(source) ?? 'any';
        const required = !member.questionToken;

        if (fieldName) {
          fields.push({ name: fieldName, type, required });
        }
      });
    }
  });

  return {
    name,
    path: filePath,
    fields,
  };
}
