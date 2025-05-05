import fs from 'fs';
import ts from 'typescript';
import { Argument, ActionDef } from '../../interfaces/types';

export function parseActionFile(filePath: string): ActionDef {
  const content = fs.readFileSync(filePath, 'utf-8');
  const source = ts.createSourceFile(filePath, content, ts.ScriptTarget.ESNext, true);

  let name = '';
  const args: Argument[] = [];
  let returnType = 'void';

  ts.forEachChild(source, node => {
    if (ts.isFunctionDeclaration(node) && node.name) {
      name = node.name.text;
      node.parameters.forEach(param => {
        args.push({
          name: (param.name as ts.Identifier).text,
          type: param.type?.getText(source) || 'any',
        });
      });
      returnType = node.type?.getText(source) || 'void';
    }
  });

  return {
    name,
    path: filePath,
    args,
    returnType,
  };
}
