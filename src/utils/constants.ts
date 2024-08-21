import path from 'path';

export const OUTPUT_DIR = 'C:/Users/Eduardo Fernando/Downloads/nextjs_projects_test';
export const NON_EMPTY_DIRECTORY = 'C:/Users/Eduardo Fernando/Downloads/non_empty';

export const TEMPLATE_DIR = path.join(__dirname, '../../src/templates');

export const VELZON_SRC = path.join(__dirname, '../velzon/assets');
export const STATIC_SRC = path.join(__dirname, '../static');

export const CONFIGS = path.join(__dirname, '../configs');

export const PATTERNS = {
  NOT_EMPTY: "^.+$",
  NO_SPACE_AND_HYPHEN: "^[^\\s-]+$"
}

export const COMMON_FILES = {
  BASE_APP: 'baseApp.json',
  PAGE_TSX: 'page.tsx',
  LAYOUT_TSX: 'layout.tsx',
  SERVICE: 'Service.ts'
};

export const EXTENSIONS = {
  JSON: '.json'
}

export const TEMPLATES = {
  CONFIG_PAGE: 'config/page.hbs',
  CONFIG_LAYOUT: 'config/layout.hbs',
  CONFIG_PACKGE_JSON: 'config/package.json.hbs',
  PAGE: 'app/page/page.hbs',
  SERVICE: 'app/page/service.hbs'
};

export const CONFIG_FILES = {
  DOCKERIGNORE: '.dockerignore',
  GITIGNORE: '.gitignore',
  README: 'README.md',
  NEXTCONFIG: 'next.config.mjs',
  NEXTENV: 'next-env.d.ts',
  GITLABCIYAML: 'gitlab-ci.yaml',
  TSCONFIG: 'tsconfig.json'
};

export const PACKAGE_JSON = {template: 'config/package.json.hbs', output: 'package.json'}

export const DIRECTORIES = {
  APP: 'src/app',
  API: 'src/api',
  ASSETS: 'src/assets',
  BOOTSTRAP: 'libs/bootstrap',
  DESIGN_SYSTEM: 'design-system',
  IGRPSTUDIO: '.igrpstudio',
  IGRPSTUDIO_PAGES: '.igrpstudio/pages',
  LIBS: 'libs',
  PUBLIC: 'public',
  PAGES: 'src/app/pages',
  STUDIO: 'public/studio',
  STATIC: 'src/static'
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
