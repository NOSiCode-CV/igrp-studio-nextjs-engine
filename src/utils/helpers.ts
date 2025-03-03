import fs from 'fs-extra';
import { ComponentConfig, Layout, RenderContext } from '../interfaces/types';
import { PageConfig } from '../interfaces/types';
import path from 'path';
import { COMMON_FILES, DIRECTORIES, EXTENSIONS } from './constants';
import { Components } from '@/registries/componentRegistry';

export const checkIfDirectoryIsEmpty = async (directoryPath: string) =>
  (await fs.readdir(directoryPath)).length === 0;

export const getPageDir = (context: RenderContext<PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.PAGES,
    `${context.resourceConfig.pageName}`.toLowerCase(),
    COMMON_FILES.PAGE_TSX,
  );

export const getComponentDir = (context: RenderContext<ComponentConfig>) => {
  const name = context.resourceConfig.name.toLowerCase();
  return path.join(
    context.basePath,
    DIRECTORIES.COMPONENTS,
    replaceTemplate(COMMON_FILES.COMPONENT_TSX, { name }),
  );
}

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getPageServiceFilePath = (context: RenderContext<PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.SERVICES,
    `${context.resourceConfig.pageName}`.toLowerCase(),
    `${capitalize(context.resourceConfig.pageName)}${COMMON_FILES.SERVICE}`,
  );
  
export const getPageConfigPath = (context: RenderContext<PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.IGRPSTUDIO_PAGES,
    `${context.resourceConfig.pageName}${EXTENSIONS.JSON}`,
  );

export const getComponentConfigPath = (context: RenderContext<ComponentConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.IGRPSTUDIO_COMPONENTS,
    `${context.resourceConfig.name}${EXTENSIONS.JSON}`,
  );

export const getPageServicePath = (context: RenderContext<PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.SERVICES,
    `${context.resourceConfig.pageName}`.toLowerCase(),
  );

export const getPagePath = (context: RenderContext<PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.PAGES,
    `${context.resourceConfig.pageName}`.toLowerCase(),
  );

export const getComponentPath = (context: RenderContext<ComponentConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.COMPONENTS
  );

export const onlyUnique = (value:any, index:any, array: any) => array.indexOf(value) === index

export const loadConfig = async function<T> (basePath: string): Promise<T[]> {
  console.log(basePath)
  if (!(await fs.pathExists(basePath))) {
    return [];
  }

  
  const files = (await fs.readdir(basePath))
    .filter(f => f.endsWith('.json'))
    .map(f => fs.readJSON(path.join(basePath,f)));
  return await Promise.all<T>(files);
}

export const replaceTemplate = (template: string, replacements: Record<string, string>): string => {
  return template.replace(/{{(.*?)}}/g, (_, key) => replacements[key] || '');
};

export function extractComponentData(layout: Layout, components: Set<{ componentName: Components, id: string }>) {
  components.add({ componentName: layout.componentName, id: layout.id });
  if (layout.children) {
    layout.children.forEach((child) => extractComponentData(child, components));
  }
}

export function transformValidation(field: any) {
  const { validation, ...rest } = field; // Excluye 'validation' del objeto
  return rest;
}

export function removeQuotes(jsonString: any) {
  return jsonString.replace(/"yup\.string\([^)]*\)"/g, (match: string | any[]) => match.slice(1, -1));
}