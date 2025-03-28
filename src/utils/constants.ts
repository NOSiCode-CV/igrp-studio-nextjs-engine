import path from 'path';

const isProductionEnv = process.env.ENGINE_IGRP_STUDIO_ENV === 'production'

export const CONFIGS = path.join(__dirname, isProductionEnv? './configs' : '../../public/configs');
export const TEMPLATE_DIR = path.join(__dirname, isProductionEnv? './templates' : '../../public/templates');
export const BASE_APP_ZIP = path.join(__dirname, isProductionEnv? './templates/base_app.zip' : '../../public/templates/base_app.zip');
export const BASE_WORKSPACE_ZIP = path.join(__dirname, isProductionEnv? './templates/base_workspace.zip' : '../../public/templates/base_workspace.zip');
export const PARTIALS_DIR = path.join(__dirname, isProductionEnv? './templates/components/{{name}}/partials' : '../../public/templates/components/{{name}}/partials');

export const PATTERNS = {
  VALID_NAME_CONVENTIONAL: "^[a-zA-Z_]+$",
  VALID_APP_NAME_CONVENTIONAL: "^[a-zA-Z-]+$",
  VALID_ALPHA_NUMERIC_CONVENTIONAL: "^[a-zA-Z0-9_ ]+$",
  WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS: "^[A-Za-z0-9_]+$"
}

export const COMMON_FILES = {
  WORKSPACE: 'workspace.json',
  BASE_APP: 'baseApp.json',
  PAGES_META: 'pagesMeta.json',
  COMPONENTS_META: 'componentsMeta.json',
  PAGE_TSX: 'page.tsx',
  COMPONENT_TSX: '{{name}}.tsx',
  MAIN_LAYOUT_TSX: 'MainLayout.tsx',
  MAIN_LAYOUT_CSS: 'MainLayout.module.css',
  LAYOUT_TSX: 'layout.tsx',
  SERVICE: 'Service.ts',
  DEPLOYMENT: 'deployment.yaml',
  INGRESS: 'ingress.yaml',
  SERVICE_K8S: 'service.yaml',
};

export const EXTENSIONS = {
  JSON: '.json',
  TSX: '.tsx'
}

export const TEMPLATES = {
  WELCOME_PAGE: 'config/page.hbs',
  CONFIG_LAYOUT: 'config/layout.hbs',
  CONFIG_PACKGE_JSON: 'config/package.json.hbs',
  PAGE: 'app/page/page.hbs',
  COMPONENT: 'app/component/component.hbs',
  ACTION: 'app/page/actions/action.hbs',
  SERVICE: 'app/page/service.hbs',
  MAIN_LAYOUT: 'app/layouts/mainlayout.hbs',
  MAIN_LAYOUT_CSS: 'app/layouts/mainlayoutcss.hbs',
  CONFIG_DEPLOYMENT: 'config/k8s/deploymentyaml.hbs',
  CONFIG_INGRESS: 'config/k8s/ingressyaml.hbs',
  CONFIG_SERVICE: 'config/k8s/serviceyaml.hbs',
  ELEMENT: 'components/{{name}}/{{name}}.hbs',
  CHILD_ELEMENT: 'components/{{parent}}/children/{{name}}/{{name}}.hbs',
  UNREGISTERED_COMPONENT: 'components/default/unregisteredComponent.hbs'
};

export const SRC_CONFIG_FILES = {
  DOCKERIGNORE: 'dockerignore_template',
  DOCKERFILE: 'dockerfile_template',
  GITIGNORE: 'gitignore_template',
  WORKSPACE_GITIGNORE: 'workspace_gitignore_template',
  README: 'README.md',
  NEXTCONFIG: 'next.config.mjs',
  NEXTENV: 'nextenv_template',
  GITLABCIYAML: 'gitlab-ci.yaml',
  TSCONFIG: 'tsconfig.json',
  NPMRC: 'npmrc_template',
  LOCAL_ENV: 'local_env',
  ES: 'es',
  PT: 'pt',
  EN: 'en',
};

export const DST_CONFIG_FILES ={
  DOCKERIGNORE: '.dockerignore',
  DOCKERFILE: 'Dockerfile',
  GITIGNORE: '.gitignore',
  README: 'README.md',
  NEXTCONFIG: 'next.config.mjs',
  NEXTENV: 'next-env.d.ts',
  GITLABCIYAML: '.gitlab-ci.yml',
  TSCONFIG: 'tsconfig.json',
  NPMRC: '.npmrc',
  ENV: '.env.local',
  ES: 'messages/es.json',
  PT: 'messages/pt.json',
  EN: 'messages/en.json',
}

export const INTERACTIONS_TYPES = {

  // Events
  ON_CLICK: 'Mouse click (tap)',
  ON_CLICK_CONFIRM: "Confirm Mouse click (tap)",
  ON_HOVER: 'Mouse hover',
  ON_CHANGE: 'On change',
  ON_PICK: 'On pick',
  ON_SELECT_CHANGE: 'On select',
  ON_CHECK: "On check",
  ON_KEY_DOWN: "On key down",
  ACTION: "Action",

  // Values
  CHECKED: "Checked",
  DATA: "Data",
  DATE: "Date",
  VALUE: "Value"
}

export const INTERACTIONS_DEFAULTS = {
  ON_CLICK_NO_EVENT: '() => {}',
  ON_CLICK_WITH_EVENT: '(e) => {}',
  NULLABLE: 'null',

}

export const PACKAGE_JSON = {template: 'config/package.json.hbs', output: 'package.json'}

export const DIRECTORIES = {
  APP: 'src/app',
  SERVICES: 'src/services',
  LAYOUTS: 'src/layouts',
  ASSETS: 'src/assets',
  DESIGN_SYSTEM: 'design-system',
  PUBLIC: 'public',
  PROJECTS: 'projects',
  PAGES: 'src/app/pages',
  ACTIONS: 'src/app/pages/{{pageName}}/actions',
  ACTIONS_COMPONENT: 'src/components/{{pageName}}/actions',
  STUDIO: 'public/studio',
  IGRPSTUDIO: '.igrpstudio',
  MESSAGES: 'messages',
  IGRPSTUDIO_PAGES: '.igrpstudio/pages',
  IGRPSTUDIO_COMPONENTS: '.igrpstudio/components',
  KUBERNETES: 'k8s',
  COMPONENTS: 'src/components',
};

export const ERROR_MESSAGE = {
  DIRECTORY_ALREADY_IN_USE:
    'The specified directory is already in use. Please select a different directory or remove the existing files.',
  EMPTY_CONTEXT: 'Provide a valid context. The context must not be empty.',
  INVALID_APP_CONFIG:
    'The provided APP configuration is invalid. Please verify the APP details and try again.',
  INVALID_WORKSPACE_CONFIG:
    'The provided workspace configuration is invalid. Please verify the workspace details and try again.',
  INVALID_OUTPUT_PATH: 'The provided output path is invalid or does not exist.',
  TEMPLATE_NAME_REQUIRED: 'The name of the template must be provided.',
  INVALID_PAGE_CONFIG: 'The provided page configuration is invalid. Please verify the page details and try again',
  INVALID_COMPONENT_CONFIG: 'The provided component configuration is invalid. Please verify the page details and try again',
  INVALID_ACTION_CONFIG: 'The provided action configuration is invalid. Please verify the page details and try again'
};



export const FIELD_TYPES = ['text',
  'number',
  'select2',
  'select',
  'password',
  'color',
  'checkbox',
  'switch',
  'radio',
  'file',
  'tel',
  'range',
  'time',
  'date',
  'button',] as const;
export const COMPONENTS_NAMES = ['FormLayout', 'TableComponent', 'Button', 'IGRP_ButtonInput'] as const
export const COMPONENTS_TYPES = ['Form', 'Table', 'Flex'] as const
export const COMPONENTS = [
  "grid",
  "flex",
  "container",
  "section",
  "card",
  "aspect",
  "stack",
  "input",
  "label",
  "button",
  "checkbox",
  "form",
  "table",
  "chart",
  "carousel",
  "datePicker",
  "password",
  "textarea",
  "select",
  "radio",
  "switch",
  "slider",
  "tabs"
] as const;

export const CONFIG_TYPES = [
  'page',
  'component'
] as const;