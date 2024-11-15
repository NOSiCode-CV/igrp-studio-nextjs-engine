import { Component } from '@/interfaces/types';
import * as Handlebars from 'handlebars'

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
  console.log(component.componentName)
  if (component.componentName === 'FormLayout') {
    let fields :any = {};
    component.fields.map((field: any) => {
      fields[field.config.name] = field
    });
    return JSON.stringify(fields);
  } else{
    return JSON.stringify(component.fields);
  }
});


export { Handlebars };