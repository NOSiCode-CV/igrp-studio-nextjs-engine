import { Project } from "ts-morph";
import { ActionDef } from "../../interfaces/types";

export function parseActionFile(filePath: string): ActionDef {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  const actionDef: ActionDef = {
    name: '',
    path: filePath,
    args: [],
    returnType: 'void'
  };

  sourceFile.getFunctions().forEach(func => {
    if (!func.getName()) return;

    actionDef.name = func.getName()!;
    actionDef.returnType = func.getReturnType().getText(func);

    func.getParameters().forEach(param => {
      actionDef.args.push({
        name: param.getName(),
        type: param.getType().getText(param),
        optional: param.isOptional()
      });
    });
  });

  return actionDef;
}