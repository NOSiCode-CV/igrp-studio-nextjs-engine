import { transformValidation } from '../utils/helpers';

export function fieldHelper (component: any) {
  if (component.componentName === 'FormLayout') {
    let fields :any = {};
    component.fields.map((field: any) => {
      fields[field.config.name] = transformValidation(field);
    });
    return JSON.stringify(fields);
  } else{
    return JSON.stringify(component.fields);
  }
}