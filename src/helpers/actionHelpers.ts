export function targetHelper (action: any) {
  return new Handlebars.SafeString(`values={cell.row.original}`);
}

export function importActionsType (components: any) {
  let imports: string[] = [];
  components.forEach((component: any) => {
    component.Row.forEach((row: any) => {
      row.Col.forEach((col: any) => {
        col.components.forEach((cp: any) => {
          if (cp.actions) {
            cp.actions.forEach((action: any) => {
              imports.push(`import { ${action.type} } from 'reactstrap';`);
            });
          }
        });
      });
    });
  });
  // Eliminar duplicados y retornar como texto plano
  return Array.from(new Set(imports)).join('\n');
}

export function actionType (config: any) {
  return ['submit', 'submitAll'].includes(config?.actionType) || config.targetForms?.length > 0;
}

export function applyToAll (config: any) {
  return config?.actionType === 'submitAll' || config?.applyToAllForms;
}