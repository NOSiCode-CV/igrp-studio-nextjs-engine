import path from "path";


export const OUTPUT_DIR = 'C:/nextjs_projects_test';
export const NON_EMPTY_DIRECTORY = 'C:/non_empty';

export const TEMPLATE_DIR = path.join(__dirname, '../../src/templates');

export const COMMON_FILES = {
  BASE_APP: 'baseApp.json',
}

export const DIRECTORIES = {
  APP: 'src/app',
  API: 'src/api',
  DESIGN_SYSTEM: 'design-system',
  IGRPSTUDIO: '.igrpstudio',
  PUBLIC: 'public',
  STUDIO: 'public/studio',
};

export const ERROR_MESSAGE = {
  DIRECTORY_ALREADY_IN_USE: 'The specified directory is already in use. Please select a different directory or remove the existing files.',
  EMPTY_CONTEXT: 'Provide a valid context. The context must not be empty.',
  INVALID_APP_CONFIG: 'The provided APP configuration is invalid. Please verify the APP details and try again.',
  INVALID_OUTPUT_PATH: 'The provided output path is invalid or does not exist.',
  TEMPLATE_NAME_REQUIRED: 'The name of the template must be provided.',
};
