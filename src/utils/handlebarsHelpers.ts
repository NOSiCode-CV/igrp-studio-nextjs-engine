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

Handlebars.registerHelper('unique', function(array){
  return array.filter(onlyUnique);
})

const onlyUnique = (value:any, index:any, array: any) => array.indexOf(value) === index

export { Handlebars };