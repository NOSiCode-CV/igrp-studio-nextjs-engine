import { FilterType, TransformType } from '../interfaces/types';

export const PARTIALS = [
  'workspace/igrp-docker-services.hbs',
  'workspace/mysql-docker-service.hbs',
  'workspace/oracle-docker-service.hbs',
  'workspace/postgres-docker-service.hbs',
  'workspace/observability-docker-volumes.hbs',
  'workspace/observability-docker-env.hbs',
  'workspace/observability-env.hbs',
];

export const PATTERNS = {
  VALID_NAME_CONVENTIONAL: "^[a-zA-Z_]+$",
  VALID_APP_NAME_CONVENTIONAL: "^[a-zA-Z-]+$",
  VALID_WORKSPACE_NAME_CONVENTIONAL: "^[a-zA-Z-]+$",
  VALID_ALPHA_NUMERIC_CONVENTIONAL: "^[\\p{L}\\p{N}_ ]+$",
  WITHOUT_HYPHEN_AND_SPECIAL_CHARACTERS: "^[A-Za-z0-9_]+$",
  PATH_SLASH_VALIDATION_PATTERN: '^[A-Za-z][A-Za-z0-9_/ ]*$',
  BUILD_PATH_VALIDATION_PATTERN: '^[A-Za-z0-9._/-]+$',
  HOSTNAME_VALIDATION_PATTERN: '^((\\$\\{?[A-Za-z_][A-Za-z0-9_]*\\}?)|(([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)(\\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*))(:\\d{1,5})?$',
  DOCKER_SERVICE_VALIDATION_PATTERN: '^[a-zA-Z][a-zA-Z0-9_-]*$'
}

export const VALID_SEGMENT_PATTERN =
  '^(?:(?:\\([^)]+\\)|\\[(?:\\.\\.\\.)?[\\w-]+(?:\\|\\^[^\\]]+\\$)?\\]|\\[\\[(?:\\.\\.\\.)?[\\w-]+(?:\\|\\^[^\\]]+\\$)?\\]\\]|[\\w-]+)(?:\\/(?:\\([^)]+\\)|\\[(?:\\.\\.\\.)?[\\w-]+(?:\\|\\^[^\\]]+\\$)?\\]|\\[\\[(?:\\.\\.\\.)?[\\w-]+(?:\\|\\^[^\\]]+\\$)?\\]\\]|[\\w-]+))*)?$';

/*export const VALID_SEGMENT_PATTERNS: string[] = [
  '^[a-zA-Z0-9-_]+$',               // static
  '^\\[[a-zA-Z0-9-_]+\\]$',         // dynamic
  '^\\[\\.\\.\\.[a-zA-Z0-9-_]+\\]$', // catch-all
  '^\\[\\[\\.\\.\\.[a-zA-Z0-9-_]+\\]\\]$', // optional catch-all
  '^\\([a-zA-Z0-9-_]+\\)$',         // group
];*/

export const COMMON_FILES = {
  INIT_IGRP_DB: 'db-init.sh',
  INIT_IGRP_APP_LOGIC: 'app-logic-init.sh',
  IGRP_APP_LOGIC_WORKFLOW_EXPORT: 'igrp-app-logic-workflow-export.sh',
  JSON_IGRP_APP_LOGIC: 'igrp-app-logic.json',
  JSON_IGRP_APP_LOGIC_CREDENTIALS: 'igrp-app-logic-credentials.json',
  JSON_IGRP_APP_LOGIC_WORKFLOWS: 'igrp-app-logic-workflows.json',
  WORKSPACE: 'workspace.json',
  BASE_APP: 'baseApp.json',
  PAGES_META: 'pagesMeta.json',
  COMPONENTS_META: 'componentsMeta.json',
  PAGE_TSX: 'page.tsx',
  COMPONENT_TSX: '{{name}}.tsx',
  MAIN_LAYOUT_TSX: 'MainLayout.tsx',
  MAIN_LAYOUT_CSS: 'MainLayout.module.css',
  LAYOUT_TSX: 'layout.tsx',
  EXPORTS_FILE: 'igrp.config.ts',
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
  EXPORTS_FILE: 'app/igrp.config.ts.hbs',
  COMPONENT: 'app/component/component.hbs',
  ACTION: 'app/page/actions/action.hbs',
  SERVICE: 'app/page/service.hbs',
  MAIN_LAYOUT: 'app/layouts/mainlayout.hbs',
  MAIN_LAYOUT_CSS: 'app/layouts/mainlayoutcss.hbs',
  CONFIG_DEPLOYMENT: 'config/k8s/deploymentyaml.hbs',
  CONFIG_INGRESS: 'config/k8s/ingressyaml.hbs',
  CONFIG_SERVICE: 'config/k8s/serviceyaml.hbs',
  ELEMENT: 'components/{{name}}/{{name}}.hbs',
  DEFAULT_DOCKER_SERVICE: 'docker_services/default/default.hbs',
  DEFAULT_CODE_SNIPPETS: 'code_snippets/default/default.hbs',
  DOCKER_SERVICE: 'docker_services/{{name}}/{{name}}.hbs',
  CODE_SNIPPETS: 'code_snippets/{{name}}/{{name}}.hbs',
  DOCKER_SERVICE_VOLUME: 'docker_services/{{name}}/volumes/{{volume}}.hbs',
  CHILD_ELEMENT: 'components/{{parent}}/children/{{name}}/{{name}}.hbs',
  TYPE_ELEMENT: 'components/{{element}}/types/type.hbs',
  DEFAULT_FUNCTION: 'components/default/functions/function.hbs',
  DEFAULT_STATE: 'components/default/states/state.hbs',
  DEFAULT_REFERENCE: 'components/default/references/reference.hbs',
  DEFAULT_NAVIGATE: 'components/default/navigation/navigate.hbs',
  UNREGISTERED_COMPONENT: 'components/default/unregisteredComponent.hbs',
  UNREGISTERED_SERVICE: 'docker_services/default/unregisteredService.hbs',
  UNREGISTERED_CODE: 'code_snippets/default/unregisteredCode.hbs',
  AM_IGRP_ENV: 'workspace/am-igrp-env.hbs',
  UM_IGRP_ENV: 'workspace/um-igrp-env.hbs',
  UI_IGRP_ENV: 'workspace/ui-igrp-env.hbs',
  IAM_IGRP_ENV: 'workspace/iam-igrp-env.hbs',
  FILE_IGRP_ENV: 'workspace/file-igrp-env.hbs',
  AL_IGRP_ENV: 'workspace/al-igrp-env.hbs',
  IGRP_ENV: 'workspace/igrp-env.hbs',
  SERVICE_ENV: 'workspace/service-env.hbs',
  WORKSPACE_COMPOSE: 'workspace/docker-compose-workspace.hbs',
};

export const ENVIRONMENT_FILES = {
  AM_IGRP_ENV: '.am.igrp.env',
  UM_IGRP_ENV: '.um.igrp.env',
  UI_IGRP_ENV: '.ui.igrp.env',
  IAM_IGRP_ENV: '.iam.igrp.env',
  FILE_IGRP_ENV: '.file.igrp.env',
  APP_LOGIC_IGRP_ENV: '.al.igrp.env',
  IGRP_ENV: '.igrp.env',
}

export const SRC_CONFIG_FILES = {
  IGRP_COMPOSE: 'igrp-compose.yaml',
  INIT_IGRP_DB: 'igrp-init-db.sh',
  INIT_IGRP_APP_LOGIC: 'igrp-init-app-logic.sh',
  JSON_IGRP_APP_LOGIC: 'igrp-app-logic.json',
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
  VSCODE_SETTINGS: 'vscode_settings.json',
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
  VSCODE_SETTINGS: '.vscode/settings.json',
}

export const INTERACTIONS_TYPES = {

  // Events
  ON_CLICK: 'Mouse click (tap)',
  ON_NEXT_CLICK: 'On next click (tap)',
  ON_CLICK_CONFIRM: "Confirm Mouse click (tap)",
  ON_HOVER: 'Mouse hover',
  ON_CHANGE: 'On change',
  ON_DATE_CHANGE: 'On date change',
  ON_MONTH_CHANGE: 'On month change',
  ON_OPEN: 'On open',
  ON_SEARCH: 'On search',
  ON_LOAD: 'On load',
  ON_CANCEL: 'On cancel',
  ON_CONFIRM: 'On confirm',
  ON_SUBMIT: 'On submit',
  ON_PICK: 'On pick',
  ON_SELECT_CHANGE: 'On select',
  ON_CHECK: "On check",
  ON_KEY_DOWN: "On key down",
  ACTION: "Action",
  LABEL_FORMATTER: "Label Formatter",
  VALUE_FORMATTER: "Label Formatter",
  EXPOSE_FORM: "Expose Form",
  CANCEL_ACTION: "Cancel Action",
  VALUE_CHANGE: "Value Change",

  // Values
  CHECKED: "Checked",
  DATA: "Data",
  DATE: "Date",
  VALUE: "Value",
  DEFAULT_VALUE: "Default Value",
  OPTIONS: "Options",
  CUSTOMIZE: "Customize"
}

export const INTERACTIONS_DEFAULTS = {
  ON_CLICK_NO_EVENT: '() => {}',
  ON_CLICK_WITH_EVENT: '(e) => {}',
  FUNCTION_WITH_VALUE: '(value) => {}',
  FUNCTION_WITH_STRING_VALUE: `(value) => ''`,
  EXPOSE_FORM: `(form) => (form{{id}}Ref.current = form)`,
  UNDEFINED: 'undefined',
  INIT_TYPE: 'init{{type}}',
  NULLABLE: 'null',
  ZERO: '0',
  EMPTY_ARRAY: '[]',

}

export const PACKAGE_JSON = {template: 'config/package.json.hbs', output: 'package.json'}

export const DIRECTORIES = {
  APP: 'src/app',
  GENERATED: 'src/app/[locale]/(igrp)/(generated)',
  MYAPP: 'src/app/[locale]/(myapp)',
  LOCALE: 'src/app/[locale]',
  LOCALE_IGRP: 'src/app/[locale]/(igrp)',
  IGRP_ACTIONS: 'src/app/actions/(igrp)',
  SERVICES: 'src/services',
  LAYOUTS: 'src/layouts',
  ASSETS: 'src/assets',
  CONFIG: 'src/config',
  FEATURES: 'src/features',
  FEATURES_APPLICATIONS: 'src/features/applications',
  FEATURES_APPLICATIONS_HOOKS: 'src/features/applications/hooks',
  FEATURES_AUTH: 'src/features/auth',
  FEATURES_AUTH_LIB: 'src/features/auth/lib',
  FEATURES_MENUS: 'src/features/menus',
  FEATURES_MENUS_HOOKS: 'src/features/menus/hooks',
  FEATURES_USERS: 'src/features/users',
  FEATURES_USERS_COMPONENTS: 'src/features/users/components',
  FEATURES_USERS_HOOKS: 'src/features/users/hooks',
  FEATURES_USERS_SCHEMAS: 'src/features/users/schemas',
  HOOKS: 'src/hooks',
  INTERNATIONALIZATION: 'src/i18n',
  LIB: 'src/lib',
  SRC_TYPES: 'src/types',
  DESIGN_SYSTEM: 'design-system',
  PUBLIC: 'public',
  PUBLIC_IGRP: 'public/igrp',
  PROJECTS: 'projects',
  PAGES: 'src/app/pages',
  ACTIONS: 'src/app/pages/{{pageName}}/actions',
  ACTIONS_COMPONENT: 'src/components/{{pageName}}/actions',
  STUDIO: 'public/studio',
  IGRPSTUDIO: '.igrpstudio',
  VSCODE: '.vscode',
  MESSAGES: 'messages',
  IGRPSTUDIO_PAGES: '.igrpstudio/pages',
  IGRPSTUDIO_COMPONENTS: '.igrpstudio/components',
  KUBERNETES: 'k8s',
  TYPES: 'types',
  BASE_COMPONENTS: 'src/components',
  BASE_COMPONENTS_UI: 'src/components/ui',
  COMPONENTS: 'src/app/[locale]/(igrp)/(generated)/components',
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

export const RESTART_TYPES = [
  'always',
  'no',
  'on-failure',
  'unless-stopped'
] as const;

export const filterTypes: FilterType[] = [
  { name: 'blur', min: '0', max: '20', unit: 'px' },
  { name: 'brightness', min: '0', max: '200', unit: '%' },
  { name: 'contrast', min: '0', max: '200', unit: '%' },
  { name: 'grayscale', min: '0', max: '100', unit: '%' },
  { name: 'hue-rotate', min: '0', max: '360', unit: 'deg' },
  { name: 'invert', min: '0', max: '100', unit: '%' },
  { name: 'opacity', min: '0', max: '100', unit: '%' },
  { name: 'saturate', min: '0', max: '200', unit: '%' },
  { name: 'sepia', min: '0', max: '100', unit: '%' }
];

export const transformTypes: TransformType[] = [
  { name: 'translate', units: ['px', '%', 'rem', 'em'] },
  { name: 'translateX', units: ['px', '%', 'rem', 'em'] },
  { name: 'translateY', units: ['px', '%', 'rem', 'em'] },
  { name: 'scale', units: [''] },
  { name: 'scaleX', units: [''] },
  { name: 'scaleY', units: [''] },
  { name: 'rotate', units: ['deg', 'turn', 'rad'] },
  { name: 'rotateX', units: ['deg', 'turn', 'rad'] },
  { name: 'rotateY', units: ['deg', 'turn', 'rad'] },
  { name: 'rotateZ', units: ['deg', 'turn', 'rad'] },
  { name: 'skew', units: ['deg', 'turn', 'rad'] },
  { name: 'skewX', units: ['deg', 'turn', 'rad'] },
  { name: 'skewY', units: ['deg', 'turn', 'rad'] },
  { name: 'perspective', units: ['px'] }
];

export const transitionProperties = [
  'all',
  'background',
  'border',
  'color',
  'font-size',
  'height',
  'margin',
  'opacity',
  'padding',
  'transform',
  'width'
];

export const timingFunctions = [
  'linear',
  'ease',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'step-start',
  'step-end'
];

export const backgroundSizes = [
  'cover',
  'contain',
  '100% 100%',
  'auto'
];

export const backgroundPositions = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'top left',
  'top right',
  'bottom left',
  'bottom right'
];

export const backgroundRepeats = [
  'no-repeat',
  'repeat',
  'repeat-x',
  'repeat-y',
  'space',
  'round'
];

export const backgroundAttachments = [
  'scroll',
  'fixed',
  'local'
];

export const blendModes = [
  'normal',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity'
];
