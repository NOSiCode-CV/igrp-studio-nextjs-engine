import { COMMON_FILES, DIRECTORIES, ERROR_MESSAGE } from './utils/constants';
import { appConfigValidate } from './schema/baseApp';
import { checkIfDirectoryIsEmpty } from './utils/helpers';
import { generatePage } from './modules/page/generatePage';
import { savePageConfig } from './modules/page/savePageConfig';
import { saveFileConfig } from './modules/baseApp/saveBaseAppFiles';
import { saveBaseAppFileConfig } from './modules/baseApp/saveBaseAppConfig';
import { createAppDirectories } from './modules/baseApp/createAppDirectories';
import {
  AppConfig,
  ComponentConfig,
  ComponentRegistrationConfig,
  DeleteConfig,
  PageComponentConfig,
  PageConfig,
  AppExportsConfig,
  RenderContext,
  PathConfig,
  CodeSnippetsRegistrationConfig,
  CodeSnippetConfig,
  ProcessConfig,
  ProcessStepConfig,
  CustomFunctionConfig,
  EngineConfigurationSettings,
} from './interfaces/types';
import { loadExportsConfig } from './modules/payload/loadExportsConfig';
import { parseExportsConfig } from './modules/payload/parseExportsConfig';
import { pageConfigValidate } from './schema/pageConfig';
import { componentConfigValidate } from './schema/componentConfig';
import { saveComponentConfig } from './modules/components/saveComponentConfig';
import { pageComponentConfigValidate } from './schema/pageComponentConfig';
import { generateComponent } from './modules/components/generateComponent';
import {
  register,
  registryAsObject,
  liquidRenderer as componentLiquidRenderer,
  markBuiltInsRegistered,
  clearComponents as clearComponentsInternal,
  clearCustomComponents,
} from './components';
import { configurationAsObject, setConfiguration } from './config';
import { processConfigValidate } from './schema/processConfig';
import { saveProcessConfig } from './modules/process/saveProcessConfig';
import { processStepConfigValidate } from './schema/processStepConfig';
import { saveProcessStepConfig } from './modules/process/saveProcessStepConfig';
import { renderCode } from './utils/renderCode';
import { IGRPComponent, JsonSchema, jsonSchemaToIGRPForm } from './modules/converters/jsonSchemaToForm';
import path from 'path';
import { extractBaseApp } from './modules/baseApp/extractBaseApp';
import { deleteValidation } from './schema/deleteConfig';
import { generateProcessStep } from './modules/process/generateProcessStep';
import { deleteElementConfig } from './modules/delete/deleteElementConfig';
import { updateAndRenderPage } from './modules/components/updateAndRenderPage';
import { registerAllComponents } from './components/register';
import { registerAllCodeSnippets } from './code_snippets/register';
import defaultModule from './components/default';
import defaultCodeModule from './code_snippets/default';
import defaultEngineModule from './config/default';
import { componentRegistrationValidate } from './schema/componentRegisterConfig';
import { codeSnippetsRegistrationValidate } from './schema/codeRegisterConfig';
import { codeRegistryAsObject, register as registerCode } from './code_snippets/index';
import { engineConfigurationRegistrationValidate } from './schema/engineConfigurationRegisterConfig';


export function getPaths(version?: string): PathConfig {
  const environment = loadEngineConfiguration().environment;
  const PROJECT_TEMPLATE_VERSION = version ?? '0.0.1-alpha.0';

  if (environment === 'production') {
    return {
      configs: path.join(__dirname, './configs'),
      template: path.join(__dirname, './templates'),
      baseApp: `https://sonatype.nosi.cv/repository/igrp-templates/@igrp/framework-next/${PROJECT_TEMPLATE_VERSION}/igrp-next-template.zip`,
      componentPartials: path.join(__dirname, './templates/components/{{name}}/partials'),
      genericPartials: path.join(__dirname, './templates/partials'),
    };
  } else {
    return {
      configs: path.join(__dirname, '../public/configs'),
      template: path.join(__dirname, '../public/templates'),
      baseApp: `https://sonatype.nosi.cv/repository/igrp-templates/@igrp/framework-next/${PROJECT_TEMPLATE_VERSION}/igrp-next-template.zip`,
      componentPartials: path.join(__dirname, '../public/templates/components/{{name}}/partials'),
      genericPartials: path.join(__dirname, '../public/templates/partials'),
    };
  }
}

/**
 * Initializes a new application by validating configuration, checking directory status,
 * and creating necessary files and folders.
 *
 * @async
 * @function newApp
 * @param {AppConfig} baseConfig - The base configuration object for application.
 * @param {string} basePath - The base path where application directories and files will be created.
 *
 * @throws {Error} Throws an error if:
 * - The base configuration is invalid or has validation errors (`ERROR_MESSAGE.INVALID_APP_CONFIG`).
 * - The base path is not provided (`ERROR_MESSAGE.INVALID_APP_CONFIG`).
 * - The base path directory is not empty (`ERROR_MESSAGE.DIRECTORY_ALREADY_IN_USE`).
 *
 * @returns {Promise<void>} A promise that resolves when the application has been successfully initialized.
 *
 */
export const newApp = async (baseConfig: AppConfig, basePath: string): Promise<void> => {
  const isBaseConfigValid = appConfigValidate(baseConfig);

  if (!isBaseConfigValid && appConfigValidate.errors) throw appConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_APP_CONFIG;

  if (!(await checkIfDirectoryIsEmpty(basePath))) throw ERROR_MESSAGE.DIRECTORY_ALREADY_IN_USE;

  await saveBaseAppFileConfig(baseConfig, basePath);

  const context: RenderContext = {
    resourceConfig: undefined, // No specific config for base API
    basePath,
    baseConfig,
  };

  /**
   * Creates the folder structure needed for the application.
   */
  await createAppDirectories(context);

  /**
   * Extracts the folder structure needed for the application.
   */
  await extractBaseApp(context);

  /**
   * Creates the configuration files based on the provided context.
   */
  await saveFileConfig(context);
};

/**
 *
 * @param pageConfig
 * @param basePath
 */

export const newPage = async (pageConfig: PageConfig, basePath: string) => {
  const isPageConfigValid = pageConfigValidate(pageConfig);

  if (!isPageConfigValid && pageConfigValidate.errors) throw pageConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const context: RenderContext<PageConfig, PageConfig> = {
    resourceConfig: pageConfig,
    basePath: basePath,
  };

  await generatePage(context);
  //await generateService(context);

  await savePageConfig(pageConfig, basePath);
};

/**
 *
 * @param componentConfig
 * @param basePath
 */

export const newComponent = async (componentConfig: ComponentConfig, basePath: string) => {
  const isComponentConfigValid = componentConfigValidate(componentConfig);

  if (!isComponentConfigValid && componentConfigValidate.errors)
    throw componentConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const context: RenderContext<ComponentConfig, ComponentConfig> = {
    resourceConfig: componentConfig,
    basePath: basePath,
  };

  await generateComponent(context);

  await saveComponentConfig(componentConfig, basePath);
};

/**
 *
 * @param processConfig
 * @param basePath
 */

export const newProcess = async (processConfig: ProcessConfig, basePath: string) => {
  const isProcessConfigValid = processConfigValidate(processConfig);

  if (!isProcessConfigValid && processConfigValidate.errors)
    throw processConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  await saveProcessConfig(processConfig, basePath);

};

/**
 *
 * @param processStepConfig
 * @param basePath
 */
export const newProcessStep = async (processStepConfig: ProcessStepConfig, basePath: string) => {
  const isProcessStepConfigValid = processStepConfigValidate(processStepConfig);

  if (!isProcessStepConfigValid && processStepConfigValidate.errors)
    throw processStepConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  processStepConfig.imports = [
    { id: 'process_imports', namespace: `import { IGRPStepComponentConfig, IGRPStepMethods } from '@igrp/platform-process-management-client-ui'` }
  ]

  processStepConfig.args = [
    {
      id: 'config_arg',
      type: "IGRPStepComponentConfig",
      name: "config",
      isList: false,
      isOptional: false,
      isInterface: true,
      isFunction: false,
      isState: false,
    }
  ]

  if((processStepConfig.functions?.length ?? 0) === 0) {

    const functions: CustomFunctionConfig[] = [
      {
        name: 'handleSave',
        arguments: [
        ],
        isAsync: true,
        returnValue: {
          type: 'any',
          isNullable: false
        },
        code: `
    // TODO: Implement save logic
    
    /* 
    
    Example:
    
    formform1Ref.current?.submit();
 
    const data = formform1Ref.current?.getValues()
 
    const variables = data
      ? Object.entries(data).map(([key, value]) => ({
          name: key,
          value: value as string,
        }))
      : []; 
      
    */
    
    return {
      success: true,
      variables: undefined,
      forms: undefined
    };
        `,
        id: 'handleSave_fnc',
        actions: {
          deletable: false,
          editable: true
        }
      },
      {
        name: 'handleComplete',
        arguments: [],
        isAsync: true,
        returnValue: {
          type: 'any',
          isNullable: false
        },
        code: `
    // TODO: Implement complete logic
    
    /* 
    
    Example:
    
    formform1Ref.current?.submit();
 
    const data = formform1Ref.current?.getValues()
 
    const variables = data
      ? Object.entries(data).map(([key, value]) => ({
          name: key,
          value: value as string,
        }))
      : []; 
      
    */
    
    return {
      success: true,
      variables: undefined,
      forms: undefined
    };
        `,
        id: 'handleComplete_fnc',
        actions: {
          deletable: false,
          editable: true
        }
      },
    ]

    if(!processStepConfig.functions)
      processStepConfig.functions = [];

    processStepConfig.functions.push(...functions)
  }

  const context: RenderContext<ProcessStepConfig, ProcessStepConfig> = {
    resourceConfig: processStepConfig,
    basePath: basePath,
  };

  await saveProcessStepConfig(processStepConfig, basePath);

  await generateProcessStep(context);

};

/**
 *
 * @param config
 * @param basePath
 */
export const addComponentToPage = async (config: PageComponentConfig, basePath: string) => {
  const isConfigValid = pageComponentConfigValidate(config);

  if (!isConfigValid && pageComponentConfigValidate.errors)
    throw pageComponentConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const context: RenderContext<PageComponentConfig> = {
    resourceConfig: config,
    basePath: basePath,
  };
  await updateAndRenderPage(context);
};

export const deleteElement = async (config: DeleteConfig, basePath: string) => {
  const valid = deleteValidation(config);

  if (!valid && deleteValidation.errors) {
    throw deleteValidation.errors;
  }

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const context: RenderContext<DeleteConfig> = {
    resourceConfig: config,
    basePath,
  };

  await deleteElementConfig(context);
};

export const initComponents = async () => {
  try {
    registerAllComponents();
    // Snapshot the built-in keys so `resetComponents()` can later drop only
    // the custom/app-registered ones without re-running heavy built-in setup.
    markBuiltInsRegistered();
    console.log(`✅ Registered components`);
  } catch (error) {
    console.error(`❌ Failed to load components`, error);
  }
};

/**
 * Drops every custom / app-registered component from the internal registry,
 * leaving only the built-in engine components. Fast — does NOT re-run
 * `registerAllComponents()`. Intended for isolating the registry per project
 * (e.g. when the Studio IDE opens a new project):
 *
 * ```ts
 * // on project switch
 * engine.resetComponents();
 * engine.registerComponents(currentProjectConfig);
 * ```
 *
 * After this, `loadRegistry()` / `getComponent()` return only built-ins.
 * A subsequent `registerComponents(config)` adds only that config's entries;
 * no residue from previous projects remains.
 *
 * Preserves the exported `registry` reference so modules that already
 * captured it stay valid.
 */
export const resetComponents = (): void => {
  clearCustomComponents();
};

/**
 * Nukes the entire registry — built-ins AND custom entries. Rare use case:
 * you generally want `resetComponents()` instead. If you use this, you MUST
 * call `initComponents()` again before any rendering.
 */
export const clearComponents = (): void => {
  clearComponentsInternal();
};

export const initCodeSnippets = async () => {
  try {
    registerAllCodeSnippets();
    console.log(`✅ Registered Code snippets`);
  } catch (error) {
    console.error(`❌ Failed to load Code snippets`, error);
  }
};

export const registerComponents = (config: ComponentRegistrationConfig) => {
  const isConfigValid = componentRegistrationValidate(config);

  if (!isConfigValid && componentRegistrationValidate.errors)
    throw componentRegistrationValidate.errors;

  config.components.forEach((component) =>
    register(component.name, (e) => defaultModule.register(e, component)),
  );
};

export const setEngineConfiguration = (config: EngineConfigurationSettings, name?: string) => {
  const isConfigValid = engineConfigurationRegistrationValidate(config);

  if(!isConfigValid && engineConfigurationRegistrationValidate.errors)
    throw engineConfigurationRegistrationValidate.errors;

  setConfiguration((e) => defaultEngineModule.register(e, config), name)

}

export const registerCodeSnippets = (config: CodeSnippetsRegistrationConfig) => {
  const isConfigValid = codeSnippetsRegistrationValidate(config);

  if (!isConfigValid && codeSnippetsRegistrationValidate.errors)
    throw codeSnippetsRegistrationValidate.errors;

  config.codes.forEach((code) =>
    registerCode(code.name, (e) => defaultCodeModule.register(e, code)),
  );
};

export const loadRegistry = () => {
  return registryAsObject();
};

export const loadCodeSnippetsRegistry = () => {
  return codeRegistryAsObject();
};

export const loadEngineConfiguration = (name?: string) => {
  return configurationAsObject(name);
}

export const addCodeSnippet = (config: CodeSnippetConfig): string => {
  return renderCode(config)
}

/**
 * Loads and parses Payload configuration from the given base path.
 *
 * @param {string} basePath - The root path of the target project.
 * @returns {Promise<AppExportsConfig>} The structured JSON output.
 */
export async function loadAppExports(basePath: string): Promise<AppExportsConfig> {
  const configPath = path.join(basePath, `${DIRECTORIES.APP}/${COMMON_FILES.EXPORTS_FILE}`);
  const resolvedConfig = loadExportsConfig(configPath);
  return await parseExportsConfig(resolvedConfig, basePath);
}

export function convertJsonSchemaToForm(schema: JsonSchema): IGRPComponent[] {
  return jsonSchemaToIGRPForm(schema);
}

export const liquidRenderer = componentLiquidRenderer;

// Custom-component registration helpers for headless consumers (CLI, CI,
// scripts). Migrated from Studio's renderer so any caller can build the
// same registry entries the desktop UI builds today. See:
//   - convertComponentsToJSONSchema / …Interactions / …Rules → raw schema
//   - buildComponentRegistry → composes ComponentRegisterConfig[] from
//     `loadAppExports` output + optional `.igrpstudio/components/*.json`
//     manifests.
//   - registerAppComponents → one-liner: reads basePath, builds, calls
//     registerComponents. Studio flow:
//
//       await engine.initComponents();
//       await engine.registerAppComponents(basePath);
//       await engine.newPage(pageConfig, basePath);
export {
  convertComponentsToJSONSchema,
  convertComponentsToInteractionsJSONSchema,
  convertComponentsToRulesJSONSchema,
  getLabel,
} from './helpers/registrySchemaHelpers';
export {
  buildComponentRegistry,
  type AppComponentEntry,
  type BuildComponentRegistryInput,
} from './helpers/buildComponentRegistry';
export {
  registerAppComponents,
  type RegisterAppComponentsOptions,
} from './helpers/registerAppComponents';