import * as Handlebars from 'handlebars'

Handlebars.registerHelper('toLowerCase', (str: string) => {
  return str.toLowerCase();
});

export { Handlebars };