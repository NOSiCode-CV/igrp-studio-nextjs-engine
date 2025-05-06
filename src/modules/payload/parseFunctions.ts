import { Project } from "ts-morph";
import { FunctionDef } from "../../interfaces/types";

export function parseFunctionFile(filePath: string): FunctionDef {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  const functionDef: FunctionDef = {
    name: '',
    path: filePath,
    args: [],
    returnType: 'void'
  };

  sourceFile.getFunctions().forEach(func => {
    if (!func.getName()) return;

    functionDef.name = func.getName()!;
    functionDef.returnType = func.getReturnType().getText(func);

    func.getParameters().forEach(param => {
      functionDef.args.push({
        name: param.getName(),
        type: param.getType().getText(param),
        optional: param.isOptional()
      });
    });
  });

  return functionDef;
}