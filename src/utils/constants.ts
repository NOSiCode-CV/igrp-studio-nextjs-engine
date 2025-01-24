import path from 'path';

// Comment the following exports when building the application
export const CONFIGS = path.join(__dirname, '../../public/configs');
export const TEMPLATE_DIR = path.join(__dirname, '../../public/templates');

//Uncomment the following exports when building the application
//export const TEMPLATE_DIR = path.join(__dirname, './templates');
//export const CONFIGS = path.join(__dirname, './configs');

export const PATTERNS = {
  VALID_NAME_CONVENTIONAL: "^[a-zA-Z_]+$",
  VALID_ALPHA_NUMERIC_CONVENTIONAL: "^[a-zA-Z0-9_ ]+$",
  WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS: "^[A-Za-z0-9_]+$"
}

export const COMMON_FILES = {
  BASE_APP: 'baseApp.json',
  PAGES_META: 'pagesMeta.json',
  PAGE_TSX: 'page.tsx',
  MAIN_LAYOUT_TSX: 'MainLayout.tsx',
  MAIN_LAYOUT_CSS: 'MainLayout.module.css',
  LAYOUT_TSX: 'layout.tsx',
  SERVICE: 'Service.ts',
  DEPLOYMENT: 'deployment.yaml',
  INGRESS: 'ingress.yaml',
  SERVICE_K8S: 'service.yaml',
};

export const EXTENSIONS = {
  JSON: '.json'
}

export const TEMPLATES = {
  WELCOME_PAGE: 'config/page.hbs',
  CONFIG_LAYOUT: 'config/layout.hbs',
  CONFIG_PACKGE_JSON: 'config/package.json.hbs',
  PAGE: 'app/page/page.hbs',
  SERVICE: 'app/page/service.hbs',
  MAIN_LAYOUT: 'app/layouts/mainlayout.hbs',
  MAIN_LAYOUT_CSS: 'app/layouts/mainlayoutcss.hbs',
  CONFIG_DEPLOYMENT: 'config/k8s/deploymentyaml.hbs',
  CONFIG_INGRESS: 'config/k8s/ingressyaml.hbs',
  CONFIG_SERVICE: 'config/k8s/serviceyaml.hbs',
};

export const SRC_CONFIG_FILES = {
  DOCKERIGNORE: 'dockerignore_template',
  DOCKERFILE: 'dockerfile_template',
  GITIGNORE: 'gitignore_template',
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

export const PACKAGE_JSON = {template: 'config/package.json.hbs', output: 'package.json'}

export const DIRECTORIES = {
  APP: 'src/app',
  SERVICES: 'src/services',
  LAYOUTS: 'src/layouts',
  ASSETS: 'src/assets',
  DESIGN_SYSTEM: 'design-system',
  PUBLIC: 'public',
  PAGES: 'src/app/pages',
  STUDIO: 'public/studio',
  IGRPSTUDIO: '.igrpstudio',
  MESSAGES: 'messages',
  IGRPSTUDIO_PAGES: '.igrpstudio/pages',
  KUBERNETES: 'k8s'
};

export const ERROR_MESSAGE = {
  DIRECTORY_ALREADY_IN_USE:
    'The specified directory is already in use. Please select a different directory or remove the existing files.',
  EMPTY_CONTEXT: 'Provide a valid context. The context must not be empty.',
  INVALID_APP_CONFIG:
    'The provided APP configuration is invalid. Please verify the APP details and try again.',
  INVALID_OUTPUT_PATH: 'The provided output path is invalid or does not exist.',
  TEMPLATE_NAME_REQUIRED: 'The name of the template must be provided.',
  INVALID_PAGE_CONFIG: 'The provided page configuration is invalid. Please verify the page details and try again'
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
export const COMPONENTS_TYPES = ['Form', 'Table'] as const

