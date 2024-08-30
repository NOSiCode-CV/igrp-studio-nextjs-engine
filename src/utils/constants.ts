import path from 'path';

//Comment the following exports when building the application
// export const CONFIGS = path.join(__dirname, '../../public/configs');
// export const TEMPLATE_DIR = path.join(__dirname, '../../public/templates');

//Uncomment the following exports when building the application
export const TEMPLATE_DIR = path.join(__dirname, './templates');
export const CONFIGS = path.join(__dirname, './configs');

export const PATTERNS = {
  NOT_EMPTY: "^.+$",
  NO_SPACE_AND_HYPHEN: "^[^\\s]+$"
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

export const SRC_CONFIG_FILES = {
  DOCKERIGNORE: 'dockerignore_template',
  GITIGNORE: 'gitignore_template',
  README: 'README.md',
  NEXTCONFIG: 'next.config.mjs',
  NEXTENV: 'nextenv_template',
  GITLABCIYAML: 'gitlab-ci.yaml',
  TSCONFIG: 'tsconfig.json'
};

export const DST_CONFIG_FILES ={
  DOCKERIGNORE: '.dockerignore',
  GITIGNORE: '.gitignore',
  README: 'README.md',
  NEXTCONFIG: 'next.config.mjs',
  NEXTENV: 'next-env.d.ts',
  GITLABCIYAML: 'gitlab-ci.yaml',
  TSCONFIG: 'tsconfig.json'
}

export const PACKAGE_JSON = {template: 'config/package.json.hbs', output: 'package.json'}

export const DIRECTORIES = {
  APP: 'src/app',
  SERVICES: 'src/services',
  ASSETS: 'src/assets',
  DESIGN_SYSTEM: 'design-system',
  PUBLIC: 'public',
  PAGES: 'src/app/pages',
  STUDIO: 'public/studio',
  IGRPSTUDIO: '.igrpstudio',
  IGRPSTUDIO_PAGES: '.igrpstudio/pages',
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
