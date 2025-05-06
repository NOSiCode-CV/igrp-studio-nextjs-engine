import { Project, ts } from 'ts-morph';

export async function loadPayloadConfig(configPath: string): Promise<any> {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(configPath);

  const defaultExport = sourceFile.getDefaultExportSymbol()?.getDeclarations()[0];

  if (!defaultExport) {
    throw new Error("No default export found in config file");
  }

  // Handle object literal default export
  if (defaultExport.isKind(ts.SyntaxKind.ExportAssignment)) {
    const exportAssignment = defaultExport.asKindOrThrow(ts.SyntaxKind.ExportAssignment);
    const expression = exportAssignment.getExpression();

    if (expression.isKind(ts.SyntaxKind.ObjectLiteralExpression)) {
      const configObject = expression.asKindOrThrow(ts.SyntaxKind.ObjectLiteralExpression);
      const result: any = {};

      configObject.getProperties().forEach(property => {
        if (property.isKind(ts.SyntaxKind.PropertyAssignment)) {
          const prop = property.asKindOrThrow(ts.SyntaxKind.PropertyAssignment);
          const name = prop.getName();
          const initializer = prop.getInitializer();

          if (initializer?.isKind(ts.SyntaxKind.ArrayLiteralExpression)) {
            result[name] = initializer.getElements().map(el => stripQuotes(el.getText()));
          } else {
            result[name] = initializer? stripQuotes(initializer.getText()) : undefined;
          }
        }
      });

      console.log("result: ", result)

      return result;
    }
  }

  throw new Error("Config file must have an object literal default export");
}

function stripQuotes(str: string): string {
  return str.replace(/^['"]|['"]$/g, '');
}