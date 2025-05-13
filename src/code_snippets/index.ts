import {
  CodeSnippetConfig, CodeSnippetsRegisterConfig, CodeSnippetsRegistrationConfig
} from '../interfaces/types';
import { renderCodeTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';
import { replaceTemplate } from '../utils/helpers';

export type CodeSnippets = {
  imports: Set<string>;
  states: Set<string>;
  properties: Record<string, any>;
  defaultProperties: Record<string, any>;
  propertiesMapping: Record<string, any>;
  name: string;
  title: string;
  description: string;
  templatePath?: string;
  renderer: ((
    codeSnippets: CodeSnippetConfig,
    element?: CodeSnippets,
    templatePath?: string,
  ) => (codeSnippets: CodeSnippetConfig) => string)
  | ((
    codeSnippets: CodeSnippetConfig,
    element?: CodeSnippets,
  ) => (codeSnippets: CodeSnippetConfig) => string);

  loadImports: (imports: string[]) => void;
  loadStates: (states: string[]) => void;
  loadName: (name: string) => void;
  loadTitle: (title: string) => void;
  loadDescription: (description: string) => void;
  loadTemplatePath: (templatePath?: string) => void;
  getDefaultProperties: (properties: Record<string, any>) => void;
  getProperties: (properties: Record<string, any>) => void;
  getPropertiesMapping: (mapping: Record<string, any>) => void;

  setRenderer: (
    fn:
      | ((
          codeSnippets: CodeSnippetConfig,
          element?: CodeSnippets,
        ) => (codeSnippets: CodeSnippetConfig) => string)
      | ((codeSnippets: CodeSnippetConfig, element?: CodeSnippets) => () => string),
  ) => void;

  render: (context: CodeSnippetConfig, codeSnippets: CodeSnippets) => string;
};

function initCodeSnippets(): CodeSnippets {
  return {
    imports: new Set(),
    states: new Set(),
    properties: {},
    defaultProperties: {},
    propertiesMapping: {},
    name: '',
    title: 'Code Snippet',
    description: 'A sample code snippet',
    templatePath: undefined,
    renderer: () => () => "",

    loadImports(imports) {
      imports.forEach((imp) => this.imports.add(imp));
    },

    loadStates(states) {
      states.forEach((state) => this.states.add(state));
    },

    loadName(name: string) {
      this.name = name
    },

    loadTitle(title: string) {
      this.title = title
    },

    loadDescription(description: string) {
      this.description = description
    },

    loadTemplatePath(path?: string) {
      this.templatePath = path
    },

    getProperties(properties) {
      Object.assign(this.properties, properties);
    },

    getDefaultProperties(properties) {
      Object.assign(this.defaultProperties, properties);
    },

    getPropertiesMapping(mapping) {
      Object.assign(this.propertiesMapping, mapping);
    },

    setRenderer(renderer) {
      this.renderer = renderer
    },

    render(context: CodeSnippetConfig, codeSnippets: CodeSnippets) {
      if (this.renderer) {
        return (this.renderer(context, codeSnippets))(context);
      }
      throw new Error("No renderer function defined");
    }
  };
}

export let registry: Record<string, CodeSnippets> = {};

export function register(name: string, registerFn: (codeSnippets: CodeSnippets) => void) {
  const codeSnippetsInstance: CodeSnippets = initCodeSnippets();
  registerFn(codeSnippetsInstance);
  registry[name] = codeSnippetsInstance;
}

export function getCodeSnippets(name: string): CodeSnippets {
  return registry[name];
}

function codeSnippetsAsObject(key: string, value: CodeSnippets): CodeSnippetsRegisterConfig {

  const context: CodeSnippetConfig = {
    id: key,
    name: key,
    properties: value.defaultProperties
  }

  return {
    imports: Array.from(value.imports),
    states: Array.from(value.states),
    name: key,
    code: value.render(context, value),
    title: value.title,
    description: value.description,
    defaultProperties: {},
    properties: {},
    propertiesMapping: {},
    renderer: value.renderer.name.includes('default')? 'default' : value.renderer.name.includes('hbs')? 'hbs' : 'default',
    templatePath: value.templatePath
  }
}

const hiddenCodeSnippets: string [] = [];

export function codeRegistryAsObject(): CodeSnippetsRegistrationConfig {
  const codeSnippets: CodeSnippetsRegisterConfig[] = Object.entries(registry)
    .filter(([key, _]) => !(hiddenCodeSnippets.includes(key)))
    .map(([key, value]) => {
      return codeSnippetsAsObject(key, value)
    });

  return { codes: codeSnippets }
}

export function defaultRenderer(
  codeSnippets: CodeSnippetConfig,
  element?: CodeSnippets
): () => string {
  const name = element?.name ?? "code";

  if (!element) {
    return () => renderCodeTemplate(TEMPLATES.UNREGISTERED_CODE, { name });
  }

  return () =>
    renderCodeTemplate(TEMPLATES.DEFAULT_CODE_SNIPPETS, {
      resourceConfig: codeSnippets,
      codeName: name
    });
}

export function customRenderer(
  codeSnippets: CodeSnippetConfig,
): () => string {

  // element is always the 'custom' code
  if (!codeSnippets.name)
    throw new Error("No code name! You should provide a code name for custom generation");

  return () =>
    renderCodeTemplate(TEMPLATES.DEFAULT_CODE_SNIPPETS, {
      resourceConfig: codeSnippets,
      codeName: codeSnippets.name
    });

}

export function hbsRenderer(
  codeSnippets: CodeSnippetConfig,
  element?: CodeSnippets
): (codeSnippets: CodeSnippetConfig) => string {
  const name = element?.name;
  if (!name) throw new Error("No code name");

  return () =>
    renderCodeTemplate(
      element?.templatePath
        ? element.templatePath
        : replaceTemplate(TEMPLATES.CODE_SNIPPETS, { name }),
      {
        resourceConfig: codeSnippets,
      }
    );
}