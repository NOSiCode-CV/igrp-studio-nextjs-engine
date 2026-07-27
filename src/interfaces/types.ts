import { COMPONENTS_NAMES, COMPONENTS_TYPES, CONFIG_TYPES, DEFINITION_TYPES, FIELD_TYPES, RESTART_TYPES } from '../utils/constants';

interface VersionableElement {
  version?: string
}

interface IdentifiableElement {
  id: string
}

export interface AppConfig extends IdentifiableElement, VersionableElement {
  type: 'nextjs';
  workspaceId: string;
  name: string;
  description?: string;
  displayName?: string;
}

export interface PageConfig extends IdentifiableElement, VersionableElement {
  type: 'page';
  useClient?: boolean;
  path: string;
  description?: string;
  parentName?: string;
  pageName: string;
  forceDynamic?: boolean;
  types: TypeDef[];
  imports?: Import[];
  states?: State[];
  references?: Reference[];
  functions?: CustomFunctionConfig[];
  actions?: CustomFunctionConfig[];
  args?: Arguments[];
  components?: Layout | {};
}

export interface Arguments extends IdentifiableElement{
  type: string,
  name: string,
  isList: boolean,
  isOptional: boolean,
  isInterface: boolean,
  isFunction: boolean,
  isState: boolean,
  functionParameters?: Arguments[]
}

export interface Variable {
  variable: string
}

export interface ProcessArtifact {
  projectArtifactId: string,
  taskKey: string,
  name: string,
  artifactVariables: Variable[],
}

export interface ProcessStep extends IdentifiableElement {
  name: string;
  key: string;
}

export interface PageComponentConfig extends IdentifiableElement, VersionableElement {
  type: 'page' | 'component'
  components?: Layout | {};
}

export interface ComponentConfig extends IdentifiableElement, VersionableElement {
  type: 'component';
  useClient?: boolean;
  name: string;
  description?: string;
  pagePath?: string;
  scope: 'app' | 'page';
  pageName?: string;
  icon?: string;
  types?: TypeDef[];
  imports?: Import[];
  states?: State[];
  references?: Reference[];
  functions?: CustomFunctionConfig[];
  actions?: CustomFunctionConfig[];
  args?: Arguments[];
  components?: Layout | {};
  forceDynamic?: boolean;
}

export interface ProcessConfig extends IdentifiableElement, VersionableElement {
  type: 'process';
  name: string;
  description?: string;
  processKey: string;
  processVersion: string;
  steps?: ProcessStep[];
}

export interface ProcessStepConfig extends IdentifiableElement, VersionableElement, ProcessArtifact {
  type: 'processStep';
  useClient?: boolean;
  key: string;
  name: string;
  description?: string;
  processKey: string;
  processVersion: string;
  forceDynamic?: boolean;
  types: TypeDef[];
  imports?: Import[];
  states?: State[];
  references?: Reference[];
  functions?: CustomFunctionConfig[];
  actions?: CustomFunctionConfig[];
  args?: Arguments[];
  components?: Layout | {};
}

export interface Component {
  Row: RowLayout[];
}

export interface RowLayout {
  Col: ColumnLayout[];
}

export interface ColumnLayout {
  id: string;
  colSize: number;
  components?: ColumnComponent[];
}

export interface ColumnComponent {
  id: string;
  formRefs?: any;
  values?: any;
  serviceAction?: any;
  target?: string;
  componentName: ComponentNames;
  config: ColumnConfig;
  fields?: Field[] | TableFields[];
  actions?: IAction[];
}

export interface Field {
  type: string;
  config: FieldConfig;
  validation?: {
    minLeng?: number;
    maxLeng?: number;
    errorMinLeng?: string;
    errorMaxLeng?: string;
    requiredMessage?: string;
  };
}

export interface IAction {
  id: string;
  type: 'Button' | 'Link' | 'IGRP_ButtonInput';
  config: IActionConfig;
}

export interface IActionConfig {
  icon?: string;
  buttonText?: string;
  target?: string;
  className?: string;
  color?: string;
  refreshTable?: boolean;
  actionType?: string,
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
}

export interface IButton {
  formRefs?: any;
  serviceAction?: (data: Record<string, any>) => void;
  buttonText?: string;
  className?: string;
  values?: any;
  icon?: string;
  actionType: string,
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
  
}

export interface ColumnConfig {
  title?: string;
  showTitle?: boolean;
  colSize?: number;
  pageSize?: number;
  isPagination?: boolean;
  isGlobalFilter?: boolean;
  SearchPlaceholder?: string;
  isSortable?: boolean;
  actionTitle?: string;
  servrSsidePagination?: boolean;
  buttonText?: string;
  className?: string;
  applyToAllForms?: boolean; 
  targetForms?: string[], 
  refreshTable?: boolean,
  actionType?: string
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
}

export interface TableFields {
  header?: string;
  accessorKey?: string;
  enableColumnFilter?: boolean;
}

export interface FieldConfig {
  type: FieldTypes;
  name: string;
  label?: string;
  colSize?: number;
  required?: boolean;
  placeholder?: string;
  color?: string;
  className?: string;
  buttonText?: string;
  actionType?: string;
  targetForms?: string[];
  applyToAllForms?: boolean;
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
  refreshTable?: boolean
  options?: {
    value: string;
    label: string;
  }[];
}

export interface PageMetaConfig {
  type: "UI"; //aplication type
  url: string; // application url
  description: string; //aplication description
  resourceItems?: {
    name: string; // page name
    url: string; //page path,
    resourceItemType: 'PAGE';
    description: string; // page description
  }[];
}

export interface Layout<S = any> extends IdentifiableElement{
  componentName: string;
  properties?: Record<string, any>;
  interactions?: Record<string, any>;
  data?: Record<string, any>;
  style?: StyleDefinition,
  rules?: RuleDefinition[],
  childProperties?: Record<string, any>;
  parentProperties?: Record<string, any>;
  content?: string,
  tag: string,
  dataType?: string,
  children?: Layout[];
}

/**
 * Legacy shape kept as-is: `{ type: 'visibility', condition: string }`.
 * `RuleDefinition` is now a discriminated union — either the classic
 * visibility rule OR a new permission rule (added in `0.2.0-beta.23`).
 * Existing consumers that hand-wrote `{ type: 'visibility', ... }` keep
 * working unchanged because that shape is one arm of the union.
 */
export type RuleDefinition = VisibilityRuleDefinition | PermissionRuleDefinition;

export interface VisibilityRuleDefinition {
  type: 'visibility',
  condition: string
}

/**
 * Gates a node by the current user's permissions, backed by
 * `@igrp/framework-next` + `@igrp/framework-next-ui`. See the
 * framework's Permissions guide for the underlying claims model.
 *
 * `permission` is ALWAYS an array — Studio surfaces it as a
 * multi-select so single-vs-array complexity never leaks into the UI.
 * A single-entry array is fine (`["delete_invoice"]`).
 *
 * `mode` matters only when multiple permissions are listed:
 *   - `"all"` (default) — user must hold every listed permission.
 *   - `"any"`           — user needs at least one.
 *
 * `action` selects the enforcement shape emitted into TSX:
 *   - `"hide"`     (default) — wrap node in `<IGRPAuthorization>` with
 *                              no fallback. Denied users see nothing.
 *   - `"disable"`            — inject `disabled` (or `disabledProp`)
 *                              onto the node, composed with any
 *                              existing disabled binding via `||`.
 *                              Requires `usePermissions()` in scope
 *                              — the engine hoists it automatically.
 *   - `"replace"`           — wrap node in `<IGRPAuthorization>` with
 *                              `fallback` rendered from a sibling
 *                              Layout subtree. Fallbacks are cosmetic:
 *                              their state/data bindings are NOT hoisted
 *                              into the parent component.
 *   - `"assert"`            — server-side page/component/processStep
 *                              gate. ONLY valid on the root of a page /
 *                              component / processStep JSON. Non-root
 *                              usage is downgraded to `"hide"` at
 *                              codegen time with a console warning.
 *
 * `fallback` is a full Layout subtree — same shape as any other child
 * — and is required when `action === "replace"`. Ignored otherwise.
 *
 * `disabledProp` overrides the prop name injected when `action ===
 * "disable"`. Defaults to `"disabled"`; use `"readOnly"` for form
 * inputs where the semantic is read-only rather than fully disabled.
 */
export interface PermissionRuleDefinition {
  type: 'permission',
  permission: string[],
  mode?: 'all' | 'any',
  action?: 'hide' | 'disable' | 'replace' | 'assert',
  fallback?: Layout,
  disabledProp?: string,
}

export interface LayoutProperties {
  variant?: string;
  className?: string;
}

export interface ActionConfig extends IdentifiableElement {
  pageName: string,
  actionName: string,
  imports?: Import[],
  code: string
}

export interface Import extends IdentifiableElement {
  namespace: string
}

export interface State extends IdentifiableElement {
  name: string,
  type: string,
  isArray?: boolean,
  isOptional?: boolean,
  imports?: Import[],
  defaultValue?: string,
  generate?: boolean
}

export interface RegisterState {
  state: State,
  required: boolean
}

export interface Reference extends IdentifiableElement {
  name: string,
  type: string,
  imports?: Import[],
  defaultValue?: string,
}

export interface RegisterReference {
  ref: Reference,
  required: boolean
}

export interface Navigate extends IdentifiableElement {
  name: string,
  tag: string,
  path: string,
  params?: Segment[],
  inRow?: boolean,
  segments?: Segment[]
}

export interface RegisterNavigate {
  navigate: Navigate,
  required: boolean
}

export interface CommonProperties extends LayoutProperties{
  padding?: string; // p-1, p-2, etc.
  paddingX?: string; // px-1, px-2, etc.
  paddingY?: string; // py-1, py-2, etc.
  paddingTop?: string; // pt-1, pt-2, etc.
  paddingBottom?: string; // pb-1, pb-2, etc.
  paddingLeft?: string; // pl-1, pl-2, etc.
  paddingRight?: string; // pr-1, pr-2, etc.

  margin?: string; // m-1, m-2, etc.
  marginX?: string; // mx-1, mx-2, etc.
  marginY?: string; // my-1, my-2, etc.
  marginTop?: string; // mt-1, mt-2, etc.
  marginBottom?: string; // mb-1, mb-2, etc.
  marginLeft?: string; // ml-1, ml-2, etc.
  marginRight?: string; // mr-1, mr-2, etc.

  width?: string; // w-1/2, w-full, w-screen, etc.
  height?: string; // h-1/2, h-full, h-screen, etc.

  visibility?: "visible" | "invisible" | "hidden"; // Tailwind visibility classes
}

export interface DeleteConfig extends IdentifiableElement {
  name: string,
  type: ConfigTypes
}

export interface ComponentRegistrationConfig extends VersionableElement {
  components: ComponentRegisterConfig[]
}

export interface ComponentRegisterConfig extends VersionableElement {
  name: string;
  imports: string[];
  defaultValue: boolean;
  allowTypes: boolean;
  allowChildren?: boolean;
  deprecated?: boolean;
  replacedBy?: string;
  group: string;
  label: string;
  customClassName?: string;
  customComponentTag?: string;
  variants: Record<string, any>;
  metadata: Record<string, any>;
  properties: Record<string, any>;
  propertiesMapping: Record<string, any>;
  interactions: Record<string, any>;
  interactionsMapping: Record<string, any>;
  data: Record<string, any>;
  dataMapping: Record<string, any>;
  style: Record<string, any>;
  styleMapping: Record<string, any>;
  rules: Record<string, any>;
  rulesMapping: Record<string, any>;
  childProperties?: Record<string, any>;
  childPropertiesMapping?: Record<string, any>;
  states: RegisterState[];
  childrenTypes: ComponentRegisterConfig[];
  acceptedChildren: ComponentRegisterConfig[];
  defaultChildren: DefaultChildComponent[];
  renderer: 'default' | 'liquid' | 'custom' | 'none';
  templatePath?: string;
}

export interface Visibility {
  visible: boolean
}

export interface InteractionCustomCodeFieldVisibility {
  imports: Visibility,
  states: Visibility,
  fnCode: Visibility,
  actionCode: Visibility
}

export interface InteractionFieldVisibility {
  fnName: Visibility,
  actionName: Visibility,
  fnCustomSet: Visibility,
  fnCustomCode: InteractionCustomCodeFieldVisibility,
}

export interface PartialConfig {
  name: string,
  path: string
}

export interface ChildComponent {
  name: string,
  isDefault: boolean
}

export interface DefaultChildComponent {
  name: string,
  children?: DefaultChildComponent[]
}

// Style

// First, update your types.ts (or wherever you define LayoutStyle)
export interface FlexProperties {
  direction?: string;
  wrap?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
}

export interface GridProperties {
  templateColumns?: string;
  templateRows?: string;
  gap?: string;
  justifyItems?: string;
  alignItems?: string;
  direction?: string;
  dense?: boolean;
}

export interface BlockProperties {
  // Add block-specific properties here if needed
}

export type LayoutType = 'block' | 'flex' | 'grid' | 'inline-block' | 'inline-flex' | 'inline-grid' | 'inline' | 'none';

export interface LayoutStyle {
  type: LayoutType;
  flex?: FlexProperties;
  grid?: GridProperties;
  block?: BlockProperties;
}

export interface SizeValue {
  value: string;
  unit: string;
}

export interface SizeStyle {
  width: SizeValue;
  height: SizeValue;
  minWidth: SizeValue;
  maxWidth: SizeValue;
  minHeight: SizeValue;
  maxHeight: SizeValue;
  aspectRatio: string;
  overflowX: string;
  overflowY: string;
  aspectRatioLocked: boolean;
}

//Typography
export interface TypographyValue {
  value: string;
  unit: string;
}

export interface TypographyStyle {
  fontSize: TypographyValue;
  lineHeight: TypographyValue;
  letterSpacing: TypographyValue;
  wordSpacing: TypographyValue;
  textAlign: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  textTransform: string;
  fontFamily: string;
}

//Borders
export interface BorderValue {
  width: string;
  style: string;
  color: string;
}

export interface BorderRadius {
  topLeft: string;
  topRight: string;
  bottomRight: string;
  bottomLeft: string;
}

export interface BordersStyle {
  borders: Record<string, BorderValue>;
  borderRadius: BorderRadius;
}

//Position

export interface PositionValue {
  value: string;
  unit: string;
}

export type PositionType = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export interface PositionStyle {
  type: PositionType;
  positions: Record<Side, PositionValue>;
  zIndex: string;
  linked: boolean;
}

// Shadow Types
export interface ShadowValue {
  x: string;
  y: string;
  blur: string;
  spread: string;
  color: string;
  inset: boolean;
}
export interface InteractionValue {
  fnCustomSet?: string;
  fnName?: string;
  fnCustomCode?: {
    fnCode?: string;
    imports?: Import[];
  }
}

// Filter Types
export interface FilterValue {
  type: string;
  value: string;
  unit: string;
}

export interface FilterType {
  name: string;
  min: string;
  max: string;
  unit: string;
}

// Transform Types
export interface TransformValue {
  type: string;
  value: string;
  unit: string;
}

export interface TransformType {
  name: string;
  units: string[];
}

// Transition Types
export interface TransitionValue {
  property: string;
  duration: string;
  timing: string;
  delay: string;
}

// Background Types
export interface GradientStop {
  color: string;
  position: string;
}

export interface GradientValue {
  type: 'linear' | 'radial' | 'conic';
  angle: string;
  stops: GradientStop[];
}

export interface BackgroundStyle {
  type: 'color' | 'image' | 'gradient';
  value: string | GradientValue;
  size: string;
  position: string;
  repeat: string;
  attachment: string;
  blendMode: string;
}

export interface StyleDefinition {
  layout?: LayoutStyle;
  spacing?: SpacingState;
  size?: SizeStyle;
  typography?: TypographyStyle;
  borders?: BordersStyle;
  position?: PositionStyle;
  backgrounds?: BackgroundStyle[]
}

export type Side = 'top' | 'right' | 'bottom' | 'left';
export type SpacingType = 'margin' | 'padding';
export type Unit = 'px' | 'rem' | '%' | 'em' | 'auto';

export interface SpacingValue {
  value?: string;
  unit?: Unit;
}

export interface Segment {
  name: string,
  tag?: string,
  value?: string,
  context: 'column' | 'variable'
}

export interface RouteSegment {
  name: string
  type: "static" | "dynamic" | "catch-all" | "optional-catch-all" | "route-group"
  required: boolean
  originalSegment: string
}

type SpacingValues = Record<Side, SpacingValue>;
export type SpacingState = Record<SpacingType, SpacingValues>;

// Paths
export interface PathConfig {
  configs: string,
  template: string,
  baseApp: string,
  componentPartials: string,
  genericPartials: string,
}

// Payload configuration

export interface FieldValidation {
  minLength?: number;
  maxLength?: number;
  regex?: string;
  email?: boolean;
  url?: boolean;
  uuid?: boolean;
  startsWith?: string;
  endsWith?: string;
  includes?: string;

  min?: number;
  max?: number;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  positive?: boolean;
  negative?: boolean;
  int?: boolean;
  finite?: boolean;

  minDate?: string; // ISO string or Date string
  maxDate?: string;

  errors: FieldValidationMetadata[];

}

export interface FieldValidationMetadata {
  message?: string,
  validationKey: string
}

export interface ElementField {
  componentId: string;
  name: string;
  type: string;
  validation?: FieldValidation,
  defaultValue?: string,
  isList?: boolean,
  isKey?: boolean,
  fields?: ElementField[]
  required: boolean;
  nullable?: boolean;
}

export interface TypeDef {
  componentId: string;
  name: string;
  path: string;
  tags?: string[];
  isMainType?: boolean,
  isEnum?: boolean,
  definitionType?: DefinitionType,
  customInstanceName?: string,
  customInitInstanceName?: string,
  fields: ElementField[];
}

export interface ReturnValue {
  type: string;
  isList?: boolean;
  isNullable: boolean;
}

export interface ActionDef {
  name: string;
  path: string;
  args: Arguments[];
  returnType: string;
}

export interface FunctionDef {
  name: string;
  path: string;
  args: Arguments[];
  returnType: string;
}

export interface ComponentDef {
  name: string;
  path: string;
  argumentsInterface?: string;
  props: {
    name: string;
    type: string;
    isList: boolean;
    isOptional: boolean;
    isInterface: boolean;
    isFunction: boolean;
    isState: boolean;
    defaultValue?: string;
  }[];
  hooks: string[]; // Names of hooks used
  children: string[]; // Names of child components used
  allowChildren?: boolean;
}

export type ConfigTag = 'FORM' | 'TABLE' | 'CHART';

export interface AppExportsConfig {
  types: TypeDef[];
  actions: ActionDef[];
  functions: FunctionDef[];
  components: ComponentDef[];
}

export interface CustomCodeConfig {
  code: string
}

export interface PermittedActions {
  deletable?: boolean;
  editable?: boolean;
}

export interface CustomFunctionConfig extends CustomCodeConfig, IdentifiableElement {
  name: string,
  arguments: Arguments[],
  imports?: Import[];
  states?: State[];
  isAsync?: boolean;
  path?: string;
  returnValue: ReturnValue;
  actions?: PermittedActions
}

// Code Snippets

export interface CodeSnippetConfig extends IdentifiableElement {
  name: string;
  properties?: Record<string, any>;
}

export interface CodeSnippetsRegisterConfig extends VersionableElement {
  renderer: 'default' | 'liquid' | 'custom';
  name: string;
  title: string;
  description: string;
  code: string;
  defaultProperties: Record<string, any>;
  properties: Record<string, any>;
  propertiesMapping: Record<string, any>;
  templatePath?: string;
  imports: string[];
  states: string[];
}

export interface CodeSnippetsRegistrationConfig extends VersionableElement {
  codes: CodeSnippetsRegisterConfig[]
}

export interface EngineConfigurationSettings {
  environment?: string
}

// Keep your existing interfaces (TypeDef, ActionDef, FunctionDef) the same
export type RenderContext<T = undefined, P = undefined> = {
  resourceConfig: T;
  parentResourceConfig?: P;
  basePath: string;
  baseConfig?: AppConfig;
  registry?: Record<string, Component>,
  velzonImports?: string[];
  formRefs?: string[];
};

export type FieldTypes = (typeof FIELD_TYPES)[number];
export type ComponentTypes = (typeof COMPONENTS_TYPES)[number];
export type ComponentNames = (typeof COMPONENTS_NAMES)[number];
export type ConfigTypes = (typeof CONFIG_TYPES)[number];
export type RestartTypes = (typeof RESTART_TYPES)[number];
export type DefinitionType = (typeof DEFINITION_TYPES)[number];

/**
 * One entry in the app's permission catalog. `name` follows the framework's
 * fail-closed convention (bare suffix resolved against the active org;
 * `dept.suffix` for cross-department references). `enabled: false` keeps
 * the entry in the catalog so its history is preserved, but signals
 * downstream tooling to treat it as inactive.
 */
export interface PermissionConfig extends IdentifiableElement {
  name: string;
  label?: string;
  description?: string;
  enabled: boolean;
}

/**
 * On-disk shape of `.igrpstudio/permissions.json`.
 */
export interface PermissionsFile {
  permissions: PermissionConfig[];
}
