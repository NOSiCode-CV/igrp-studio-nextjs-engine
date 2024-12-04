import * as Handlebars from 'handlebars'
import { json } from 'stream/consumers';


Handlebars.registerHelper('toLowerCase', (str: string) => {
  return str.toLowerCase();
});

Handlebars.registerHelper('capitalize', (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

Handlebars.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

Handlebars.registerHelper('toProps', function(context) {
  return `{${JSON.stringify(context)}}`
});

Handlebars.registerHelper('length', function (array) {
  return array.length;
});

Handlebars.registerHelper('gt', function (a, b) {
  return a > b;
});

Handlebars.registerHelper('eq', function (a, b) {
  return a === b;
});

Handlebars.registerHelper('component-name-helper', function (component: any) {
  if (component.componentName === 'FormLayout') {
    const id = 'I'+ component.id.charAt(0).toUpperCase() +  component.id.slice(1)+'Fields';
    return id;
  }
  return 'any'
});

Handlebars.registerHelper('field-helper', function (component: any) {
  if (component.componentName === 'FormLayout') {
    let fields :any = {};
    component.fields.map((field: any) => {
      fields[field.config.name] = transformValidation(field);
    });
    return JSON.stringify(fields);
  } else{
    return JSON.stringify(component.fields);
  }
});

Handlebars.registerHelper('isValidation', function (field: any) {
  return field.validation || field.config.required? true : false;
});

Handlebars.registerHelper('target-helper', function (action: any) {
  return new Handlebars.SafeString(`values={cell.row.original}`);
});

Handlebars.registerHelper('import-actions-type', function (components: any) {
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
});

Handlebars.registerHelper('yup-validation', function (c: any) {
  const stringTypes = ['text', 'tel', 'select']
  if (c.validation || c.config.required) {
    const type = stringTypes.includes(c.config.type) ? 'string' : c.config.type;
    let validation = c.validation;
    // let yupValidation = type ==='select'? `yup.string()` : `yup.${type}()`;
    let yupValidation = `yup.${type}()`;

    if (c.config.required) {
      yupValidation += `.required('${validation && validation.requiredMessage? validation.requiredMessage: 'This field is required'}')`;
    }
    if (validation) {
      if (validation.minLeng) {
        yupValidation += `.min(${validation.minLeng}, '${validation.errorMinLeng}')`;
      }
      if (validation.maxLeng) {
        yupValidation += `.max(${validation.maxLeng}, '${validation.errorMaxLeng}')`;
      }
    }
      return removeQuotes(yupValidation)
  } return
    
});


function transformValidation(field: any) {
  const { validation, ...rest } = field; // Excluye 'validation' del objeto
  return rest;
}

function removeQuotes(jsonString: any) {
  return jsonString.replace(/"yup\.string\([^)]*\)"/g, (match: string | any[]) => match.slice(1, -1));
}



export { Handlebars };