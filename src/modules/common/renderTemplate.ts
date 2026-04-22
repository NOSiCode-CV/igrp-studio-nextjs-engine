import path from 'path';
import fs from 'fs-extra';
import { Handlebars, loadComponentPartials, loadPartials } from '../../registries/helperRegistry';
import { ERROR_MESSAGE } from '../../utils/constants';
import { registry } from '../../components';
import { registry as registryCode } from '../../code_snippets';
import { getPaths } from '../../index';

/**
 * Generates content from a template and a context.
 * @param templateName - The name of the template located in the template directory.
 * @param context - An object containing all the variables or information needed to generate content from the template.
 * @returns The content generated as a string.
 * @throws Throws an error if the template name is not provided or if the context is empty.
 */
export const renderTemplate = async (templateName: string, context: any) => {
  if (!templateName) {
    throw ERROR_MESSAGE.TEMPLATE_NAME_REQUIRED;
  }

  if (!context) {
    throw ERROR_MESSAGE.EMPTY_CONTEXT;
  }

  loadComponentPartials();

  loadPartials();

  context.registry = registry

  const templatePath = path.join(getPaths().template, templateName);
  const templateContent = await fs.readFile(templatePath, 'utf-8');
  const template = Handlebars.compile(templateContent);

  return template(context);
};

/**
 * Generates content from a template and a context.
 * @param templateName - The name of the template located in the template directory.
 * @param context - An object containing all the variables or information needed to generate content from the template.
 * @returns The content generated as a string.
 * @throws Throws an error if the template name is not provided or if the context is empty.
 */
export const renderSyncTemplate = (templateName: string, context: any) => {
  if (!templateName) {
    throw ERROR_MESSAGE.TEMPLATE_NAME_REQUIRED;
  }

  if (!context) {
    throw ERROR_MESSAGE.EMPTY_CONTEXT;
  }

  loadComponentPartials();

  context.registry = registry

  const templatePath = path.join(getPaths().template, templateName);
  const templateContent = fs.readFileSync(templatePath, 'utf-8');
  const template = Handlebars.compile(templateContent);

  return template(context);
};

/**
 * Generates content from a template and a context.
 * @param templateName - The name of the template located in the template directory.
 * @param context - An object containing all the variables or information needed to generate content from the template.
 * @param isShellScript - Check if it is a shell script file for correct file encoding
 * @returns The content generated as a string.
 * @throws Throws an error if the template name is not provided or if the context is empty.
 */
export const renderServiceTemplate = (templateName: string, context: any, isShellScript: boolean = false) => {
  if (!templateName) {
    throw ERROR_MESSAGE.TEMPLATE_NAME_REQUIRED;
  }

  if (!context) {
    throw ERROR_MESSAGE.EMPTY_CONTEXT;
  }

  loadPartials();

  const templatePath = path.join(getPaths().template, templateName);
  let templateContent = fs.readFileSync(templatePath, 'utf-8');
  
  const template = Handlebars.compile(templateContent);

  if (isShellScript) {
    return template(context).replace(/\r\n/g, '\n');
  } else {
    return template(context);
  }

};

/**
 * Generates content from a template and a context.
 * @param templateName - The name of the template located in the template directory.
 * @param context - An object containing all the variables or information needed to generate content from the template.
 * @returns The content generated as a string.
 * @throws Throws an error if the template name is not provided or if the context is empty.
 */
export const renderCodeTemplate = (templateName: string, context: any) => {
  if (!templateName) {
    throw ERROR_MESSAGE.TEMPLATE_NAME_REQUIRED;
  }

  if (!context) {
    throw ERROR_MESSAGE.EMPTY_CONTEXT;
  }

  loadPartials();

  context.registryCode = registryCode

  const templatePath = path.join(getPaths().template, templateName);
  let templateContent = fs.readFileSync(templatePath, 'utf-8');

  const template = Handlebars.compile(templateContent);

  return template(context);

};