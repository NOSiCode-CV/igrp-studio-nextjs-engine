import type { ComponentDef, ComponentRegisterConfig } from '../interfaces/types';
import { capitalize } from './stringHelpers';
import {
  convertComponentsToJSONSchema,
  convertComponentsToInteractionsJSONSchema,
  convertComponentsToRulesJSONSchema,
  getLabel,
} from './registrySchemaHelpers';

/**
 * A parsed `.igrpstudio/components/*.json` manifest entry, in the shape
 * the Studio renderer passes to `EngineService.registerComponent`. The
 * only field actually needed to build a `ComponentRegisterConfig` is
 * `content` (the JSON blob); `customClassName` / `data` / `style` are
 * optional pass-throughs used by the renderer that we forward verbatim
 * when present.
 *
 * Deliberately narrow (no `FileTree` dep from Electron) so headless
 * consumers can construct this by hand from anywhere.
 */
export interface AppComponentEntry {
  content: {
    name: string;
    scope: 'app' | 'page' | 'global';
    pageName?: string;
    pagePath?: string;
    description?: string;
    args: ComponentDef['props'];
    [k: string]: unknown;
  };
  customClassName?: string;
  data?: Record<string, unknown>;
  style?: Record<string, unknown>;
}

/**
 * Input to `buildComponentRegistry`. Both component lists are optional —
 * an empty registry is a valid (if useless) output. The path options
 * default to the Studio Desktop's `RENDERER_CONFIG` values so headless
 * calls behave identically without threading configuration through.
 */
export interface BuildComponentRegistryInput {
  /** Components discovered via `loadAppExports(basePath).components`. */
  customComponents: ComponentDef[];
  /**
   * Parsed `.igrpstudio/components/*.json` manifests. Omit (or pass an
   * empty array) if the consumer manages its own app-component surface.
   */
  appComponents?: AppComponentEntry[];
  /**
   * Name of the page currently open in Studio. If set, `appComponents`
   * with `scope: 'page'` are filtered to only include those whose
   * `pageName` matches. Headless consumers (CLI, CI) usually omit this
   * — the entire set is registered cross-page.
   */
  currentPage?: string;
  /**
   * Import-path root for `scope: 'page'` app components. Defaults to
   * `@/app/(igrp)/(generated)/`, matching Studio's `RENDERER_CONFIG`.
   */
  generatedPath?: string;
  /**
   * Import-path root for `scope: 'app'` app components. Defaults to
   * `@/components/`.
   */
  customComponentsPath?: string;
}

const DEFAULT_GENERATED_PATH = '@/app/(igrp)/(generated)/';
const DEFAULT_CUSTOM_COMPONENTS_PATH = '@/components/';

/**
 * Composes a full `ComponentRegisterConfig[]` from the two shapes the
 * Studio Desktop has been juggling in `EngineService.registerComponent`:
 *
 *   - `customComponents`: React components discovered by
 *     `loadAppExports(basePath).components` — top-level PascalCase
 *     functions under `(myapp)/components/**`.
 *   - `appComponents`:    parsed `.igrpstudio/components/*.json`
 *     manifests describing higher-level composed components.
 *
 * Output is the array the engine's `registerComponents({ components })`
 * expects. Pure function — no I/O, no globals, no engine side-effects.
 * Feed it to `registerComponents` yourself, or call
 * `registerAppComponents(basePath, opts)` for the convenience wrapper.
 *
 * Migrated from the renderer so any headless consumer (CLI, CI, tests)
 * can build the same registry entries without going through
 * `window.engine.registerComponent`.
 */
export function buildComponentRegistry(
  input: BuildComponentRegistryInput,
): ComponentRegisterConfig[] {
  const generatedPath = input.generatedPath ?? DEFAULT_GENERATED_PATH;
  const customComponentsPath = input.customComponentsPath ?? DEFAULT_CUSTOM_COMPONENTS_PATH;

  const custom: ComponentRegisterConfig[] = input.customComponents.map((component) => ({
    name: component.name,
    label: getLabel(component.name),
    properties: {
      customProperties: {
        type: 'object',
        properties: convertComponentsToJSONSchema(component.props),
      },
    },
    interactions: convertComponentsToInteractionsJSONSchema(component.props),
    childrenTypes: [],
    imports: component.path ? [`import {${component.name}} from '${component.path}'`] : [],
    defaultValue: false,
    allowTypes: false,
    group: 'customComponents',
    customClassName: '',
    customComponentTag: component.name,
    variants: {},
    propertiesMapping: {},
    interactionsMapping: {},
    data: {},
    dataMapping: {},
    style: {},
    styleMapping: {},
    rules: convertComponentsToRulesJSONSchema(),
    rulesMapping: {},
    childProperties: {},
    childPropertiesMapping: {},
    states: [],
    acceptedChildren: [],
    renderer: 'custom',
    templatePath: '',
    defaultChildren: [],
    allowChildren: component.allowChildren ?? false,
    metadata: {},
  }));

  const app: ComponentRegisterConfig[] = (input.appComponents ?? [])
    .filter((entry) => {
      // Original renderer filter: include when app-scope, OR page-scope
      // matching `currentPage`, OR the manifest itself doesn't collide
      // with `currentPage`. Without `currentPage` (headless), include all.
      if (!input.currentPage) return true;
      const { scope, pageName, name } = entry.content;
      return (
        scope === 'app' ||
        (scope === 'page' && pageName === input.currentPage) ||
        name !== input.currentPage
      );
    })
    .map((entry) => {
      const nameCap = capitalize(entry.content.name);
      const importPath = entry.content.pageName
        ? `${generatedPath}${entry.content.pagePath}/components/${entry.content.name.toLowerCase()}`
        : `${customComponentsPath}${entry.content.name.toLowerCase()}`;

      return {
        name: nameCap,
        label: entry.content.description || getLabel(entry.content.name),
        properties: {
          customProperties: {
            type: 'object',
            properties: convertComponentsToJSONSchema(entry.content.args),
          },
        },
        interactions: convertComponentsToInteractionsJSONSchema(entry.content.args),
        childrenTypes: [],
        imports: [`import ${nameCap} from '${importPath}'`],
        defaultValue: false,
        allowTypes: false,
        group: 'appComponents',
        customClassName: entry.customClassName ?? '',
        customComponentTag: nameCap,
        variants: {},
        propertiesMapping: {},
        interactionsMapping: {},
        data: entry.data ?? {},
        dataMapping: {},
        style: entry.style ?? {},
        styleMapping: {},
        rules: convertComponentsToRulesJSONSchema(),
        rulesMapping: {},
        childProperties: {},
        childPropertiesMapping: {},
        states: [],
        acceptedChildren: [],
        renderer: 'custom',
        templatePath: '',
        metadata: entry.content,
        defaultChildren: [],
      };
    });

  return [...custom, ...app];
}
