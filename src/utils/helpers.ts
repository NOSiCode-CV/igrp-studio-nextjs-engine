import fs from 'fs-extra';
import {
  ActionConfig,
  ComponentConfig,
  Layout,
  PageConfig,
  ProcessConfig,
  RenderContext,
  WorkspaceProjectsConfig,
} from '../interfaces/types';
import path from 'path';
import { COMMON_FILES, DIRECTORIES, EXTENSIONS } from './constants';
import { Component } from '../components';
import { TABLE } from '../components/table';
import { extractProcessSteps } from '../helpers/componentPropertiesHelper';
import { isLayout } from '../modules/page/generatePage';

export const checkIfDirectoryIsEmpty = async (directoryPath: string) =>
  (await fs.readdir(directoryPath)).length === 0;

/**
 * Checks if a string segment is a valid Next.js path segment
 * based on Next.js naming conventions like static, dynamic,
 * catch-all, optional catch-all, and group segments.
 *
 * @param {string} segment - The segment of the path to validate.
 * @returns {boolean} True if the segment matches one of the valid patterns.
 */
export function isValidNextSegment(segment: string): boolean {
  return true; //return VALID_SEGMENT_PATTERNS.some((pattern) => new RegExp(pattern).test(segment));
}

export const getPageDir = (context: RenderContext<PageConfig, PageConfig>) => {
  const segments = context.resourceConfig.path.split('/').filter(Boolean);

  /*for (const segment of segments) {
    if (!isValidNextSegment(segment)) {
      throw new Error(
        `Invalid path segment "${segment}". Must follow Next.js conventions: static, [param], [...param], [[...param]], or (group).`
      );
    }
  }*/

  return path.join(context.basePath, DIRECTORIES.GENERATED, ...segments, COMMON_FILES.PAGE_TSX);
};

export const getComponentDir = (context: RenderContext<ComponentConfig, ComponentConfig>) => {
  const name = context.resourceConfig.name.toLowerCase();
  const pagePath = context.resourceConfig.pagePath;
  return pagePath
    ? path.join(
        context.basePath,
        DIRECTORIES.GENERATED,
        pagePath,
        'components',
        replaceTemplate(COMMON_FILES.COMPONENT_TSX, { name }),
      )
    : path.join(
        context.basePath,
        DIRECTORIES.BASE_COMPONENTS,
        replaceTemplate(COMMON_FILES.COMPONENT_TSX, { name }),
      );
};

export const getProcessStepDir = (
  context: RenderContext<ProcessConfig, ProcessConfig>,
  stepName: string,
) => {
  const version = context.resourceConfig.processVersion;
  const pagePath = path.join(DIRECTORIES.PROCESS, DIRECTORIES.PROCESS_PARAMS);

  return path.join(
    context.basePath,
    DIRECTORIES.GENERATED,
    pagePath,
    'steps',
    version,
    replaceTemplate(COMMON_FILES.COMPONENT_TSX, { name: stepName }),
  );
};

export const getActionDir = (
  context: RenderContext<ActionConfig, ActionConfig>,
  isComponent: boolean = false,
) => {
  const name = context.resourceConfig.actionName.toLowerCase();
  const pageName = context.resourceConfig.pageName.toLowerCase();
  return path.join(
    context.basePath,
    replaceTemplate(isComponent ? DIRECTORIES.ACTIONS_COMPONENT : DIRECTORIES.ACTIONS, {
      pageName,
    }),
    replaceTemplate(COMMON_FILES.COMPONENT_TSX, { name }),
  );
};

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getPageServiceFilePath = (context: RenderContext<PageConfig, PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.SERVICES,
    `${context.resourceConfig.pageName}`.toLowerCase(),
    `${capitalize(context.resourceConfig.pageName)}${COMMON_FILES.SERVICE}`,
  );

export const getPageConfigPath = (context: RenderContext<PageConfig, PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.IGRPSTUDIO_PAGES,
    `${context.resourceConfig.pageName}${EXTENSIONS.JSON}`,
  );

export const getComponentConfigPath = (context: RenderContext<ComponentConfig, ComponentConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.IGRPSTUDIO_COMPONENTS,
    `${context.resourceConfig.name}${EXTENSIONS.JSON}`,
  );

export const getProcessConfigPath = (context: RenderContext<ProcessConfig, ProcessConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.IGRPSTUDIO_PROCESS,
    `${context.resourceConfig.name}${EXTENSIONS.JSON}`,
  );

export const getPageServicePath = (context: RenderContext<PageConfig, PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.SERVICES,
    `${context.resourceConfig.pageName}`.toLowerCase(),
  );

export const getPagePath = (context: RenderContext<PageConfig, PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.PAGES,
    `${context.resourceConfig.pageName}`.toLowerCase(),
  );

export const getComponentPath = (context: RenderContext<ComponentConfig, ComponentConfig>) =>
  path.join(context.basePath, DIRECTORIES.COMPONENTS);

export const getProcessPath = (context: RenderContext<ProcessConfig, ProcessConfig>): string[] => {

  const processSteps = extractProcessSteps(
    isLayout(context.resourceConfig.components)
      ? (context.resourceConfig.components.children ?? [])
      : [],
  );

  return processSteps.map((it) => getProcessStepDir(context, it.tag));
};

export const onlyUnique = (value: any, index: any, array: any) => array.indexOf(value) === index;

export const loadConfig = async function <T>(basePath: string): Promise<T[]> {
  if (!(await fs.pathExists(basePath))) {
    return [];
  }

  const files = (await fs.readdir(basePath))
    .filter((f) => f.endsWith('.json'))
    .map((f) => fs.readJSON(path.join(basePath, f)));
  return await Promise.all<T>(files);
};

export const loadProjectConfig = async function <T>(basePath: string): Promise<T[]> {
  if (!(await fs.pathExists(basePath))) {
    return [];
  }

  const files = (await fs.readdir(basePath))
    .filter((f) => f === 'package.json')
    .map((f) => fs.readJSON(path.join(basePath, f)));
  return await Promise.all<T>(files);
};

export const loadWorkspaceConfig = async (basePath: string) => {
  const workspaces = await loadConfig<WorkspaceProjectsConfig>(
    path.join(basePath, DIRECTORIES.IGRPSTUDIO),
  );

  if (workspaces.length > 0) return workspaces[0];
  else throw Error(`Could not find any workspace configuration file on path: ${basePath}`);
};

export const loadPageConfig = async (basePath: string, id: string) => {
  const pages = await loadConfig<PageConfig>(
    path.join(basePath, DIRECTORIES.IGRPSTUDIO, DIRECTORIES.PAGES),
  );

  if (pages.length > 0) return pages.find((it) => it.id === id);

  return undefined;
};

export const loadPagesConfig = async (basePath: string) => {
  const pages = await loadConfig<PageConfig>(path.join(basePath, DIRECTORIES.IGRPSTUDIO_PAGES));

  if (pages.length > 0) return pages;

  return [];
};

export const loadPagesConfigSync = (basePath: string) => {
  const pages = loadConfigSync<PageConfig>(path.join(basePath, DIRECTORIES.IGRPSTUDIO_PAGES));

  if (pages.length > 0) return pages;

  return [];
};

export const loadConfigSync = function <T>(basePath: string): T[] {
  if (!fs.pathExistsSync(basePath)) {
    return [];
  }

  return fs
    .readdirSync(basePath)
    .filter((f) => f.endsWith('.json'))
    .map((f) => fs.readJSONSync(path.join(basePath, f)));
};

export const replaceTemplate = (template: string, replacements: Record<string, string>): string => {
  return template.replace(/{{(.*?)}}/g, (_, key) => replacements[key] || '');
};

export function extractComponentData(
  layout: Layout,
  components: Set<{
    componentName: string;
    id: string;
    tag: string;
    properties?: Record<string, any>;
    interactions?: Record<string, any>;
    data?: Record<string, any>;
    forceStateLoad?: boolean;
    forceReferenceLoad?: boolean;
    dataType?: string;
  }>,
  registry: Record<string, Component>,
  parent?: Layout,
) {
  components.add({
    componentName:
      parent && registry[parent.componentName]?.parent === TABLE
        ? (registry[layout.componentName]?.onTableComponent ?? layout.componentName)
        : layout.componentName,
    id: layout.id,
    tag: layout.tag,
    properties: layout.properties,
    interactions: layout.interactions,
    data: layout.data,
    forceStateLoad: registry[layout.componentName]?.forceStateLoad,
    forceReferenceLoad: registry[layout.componentName]?.forceReferenceLoad,
    dataType: layout.dataType,
  });
  if (layout.children) {
    layout.children.forEach((child) => extractComponentData(child, components, registry, layout));
  }
}

export function transformValidation(field: any) {
  const { validation, ...rest } = field; // Excluye 'validation' del objeto
  return rest;
}

export function removeQuotes(jsonString: any) {
  return jsonString.replace(/"yup\.string\([^)]*\)"/g, (match: string | any[]) =>
    match.slice(1, -1),
  );
}

/**
 * Converts an absolute file path to a package-style path using @ alias from the `src` root.
 *
 * @param {string} fullPath - The full file path.
 * @returns {string} The path relative to `src` using `@/` aliasing.
 *
 * @example
 * // returns "@/app/[locale]/(myapp)/types/User.ts"
 * resolveExportedPath("C:\\project\\src\\app\\(myapp)\\types\\User.ts");
 */
export function resolveExportedPath(fullPath: string): string {
  const normalized = fullPath.replace(/\\/g, '/');
  const srcIndex = normalized.indexOf('/src/');
  if (srcIndex === -1) {
    throw new Error("Path must include 'src' directory.");
  }
  return '@' + normalized.substring(srcIndex + 4).replace(/\.[^.]+$/, ''); // +4 to skip '/src'
}

/**
 * Converts an absolute file path to a package-style path using @ alias from the `src/app/[locale]/(myapp)` root.
 *
 * @param {string} fullPath - The full file path.
 * @returns {string} The path relative to `src/app/[locale]/(myapp)` using `@/app/[locale]/(myapp)/...` aliasing.
 *
 * @example
 * // returns "@/app/[locale]/(myapp)/types/User.ts"
 * resolveFromMyAppPath("C:\\project\\src\\app\\(myapp)\\types\\User.ts");
 */
export function resolveFromMyAppPath(fullPath: string): string {
  const normalized = fullPath.replace(/\\/g, '/');
  const match = normalized.match(/\/src\/app\/\([^)]+\)/);
  if (!match) {
    throw new Error("Path must include 'src/app/(myapp)' group.");
  }
  return '@' + normalized.substring(normalized.indexOf(match[0]) + 4).replace(/\.[^.]+$/, ''); // skip '/src'
}

/**
 * Extracts the directory path from a given full file path.
 * @param filePath - The full path of the file.
 * @returns The directory path containing the file.
 */
export const getDirectoryPath = (filePath: string): string => {
  return path.dirname(filePath);
};

export const isString = (value: string | undefined) => {
  if (value === undefined || value?.trim() === '') return undefined;

  const trimmed = value.trim();

  return trimmed === 'null' ||
    trimmed === 'undefined' ||
    trimmed === 'true' ||
    trimmed === 'false' ||
    trimmed === '[]' ||
    trimmed === '{}' ||
    (!isNaN(Number(trimmed)) && trimmed !== '') ||
    (trimmed.startsWith('[') && trimmed.endsWith(']')) ||
    (trimmed.startsWith('{') && trimmed.endsWith('}'))
    ? undefined
    : 'string';
};