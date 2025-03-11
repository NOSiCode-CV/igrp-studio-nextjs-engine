import * as Handlebars from 'handlebars'
import { resolveImports } from "../helpers/resolveImports";
import { resolveStates } from "../helpers/resolveState";
import {
  capitalize,
  toLowerCase,
  json,
  toProps,
  concat,
  toCamelCaseFromNatural,
  typeResolution,
} from '../helpers/stringHelpers';
import { length } from '../helpers/arrayHelpers';
import { greaterThan, equals, and, not } from '../helpers/comparisonHelpers';
import { componentNameHelper } from '../helpers/componentNameHelper';
import { fieldHelper } from '../helpers/fieldHelper';
import { Default, isValidation, yupValidation } from '../helpers/validationHelpers';
import { actionType, applyToAll, importActionsType, targetHelper } from '../helpers/actionHelpers';
import { renderLayout } from '../utils/renderLayout';
import { notNullOrEmpty, nullOrEmpty } from '../helpers/objectHelpers';
import {
  addClassNameFromChildProperties,
  addClassNameFromProperties,
  resolveFirstType,
} from '../helpers/componentPropertiesHelper';
import { resolveCodeBlocks } from '../helpers/resolveCodeBlocks';
import { resolveServiceInterfaceMethods } from '../helpers/resolveServiceInterfaceMethods';
import { renderTableRow } from '../helpers/renderTableRow';

// Components
Handlebars.registerHelper("resolve-imports", resolveImports);
Handlebars.registerHelper("resolve-states", resolveStates);
Handlebars.registerHelper("resolve-code-blocks", resolveCodeBlocks);
Handlebars.registerHelper("resolve-service-interface-methods", resolveServiceInterfaceMethods);
Handlebars.registerHelper("component-name-helper", componentNameHelper);
Handlebars.registerHelper("field-helper", fieldHelper);
Handlebars.registerHelper("render-layout", renderLayout);
Handlebars.registerHelper("render-table-row", renderTableRow);
Handlebars.registerHelper("addClassNameFromProperties", addClassNameFromProperties);
Handlebars.registerHelper("addClassNameFromChildProperties", addClassNameFromChildProperties);
Handlebars.registerHelper("resolveFirstType", resolveFirstType);

// String
Handlebars.registerHelper('toLowerCase', toLowerCase);
Handlebars.registerHelper("capitalize", capitalize);
Handlebars.registerHelper("json", json);
Handlebars.registerHelper("toProps", toProps);
Handlebars.registerHelper("concat", concat);
Handlebars.registerHelper("toCamelCaseFromNatural", toCamelCaseFromNatural);
Handlebars.registerHelper("typeResolution", typeResolution);

// Array
Handlebars.registerHelper("length", length);

// Comparison
Handlebars.registerHelper("gt", greaterThan);
Handlebars.registerHelper("eq", equals);
Handlebars.registerHelper("and", and);
Handlebars.registerHelper("not", not);

// Validation
Handlebars.registerHelper("isValidation", isValidation)
Handlebars.registerHelper("yup-validation", yupValidation)

// Actions
Handlebars.registerHelper("target-helper", targetHelper)
Handlebars.registerHelper("import-actions-type", importActionsType)
Handlebars.registerHelper("action-type", actionType)
Handlebars.registerHelper("applyToAll", applyToAll)
Handlebars.registerHelper("default", Default)

// Objects
Handlebars.registerHelper("notNullOrEmpty", notNullOrEmpty)
Handlebars.registerHelper("nullOrEmpty", nullOrEmpty)

export { Handlebars };