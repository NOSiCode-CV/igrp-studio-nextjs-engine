import { Project, ts } from 'ts-morph';
import { TypeDef } from "../../interfaces/types";
import path from 'path';

export function parseTypeFile(filePath: string): TypeDef {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  const typeDef: TypeDef = {
    name: path.basename(filePath, '.ts'),
    path: filePath,
    fields: []
  };

  // Handle interfaces
  sourceFile.getInterfaces().forEach(interfaceDec => {
    typeDef.name = interfaceDec.getName();
    interfaceDec.getProperties().forEach(property => {
      typeDef.fields.push({
        name: property.getName(),
        type: property.getType().getText(property),
        required: !property.hasQuestionToken()
      });
    });
  });

  // Handle type aliases with object literals
  sourceFile.getTypeAliases().forEach(typeAlias => {
    const typeNode = typeAlias.getTypeNode();
    if (typeNode?.isKind(ts.SyntaxKind.TypeLiteral)) {
      typeDef.name = typeAlias.getName();
      typeNode.getMembers().forEach(member => {
        if (member.isKind(ts.SyntaxKind.PropertySignature)) {
          const prop = member.asKindOrThrow(ts.SyntaxKind.PropertySignature);
          typeDef.fields.push({
            name: prop.getName(),
            type: prop.getType().getText(prop),
            required: !prop.hasQuestionToken()
          });
        }
      });
    }
  });

  return typeDef;
}