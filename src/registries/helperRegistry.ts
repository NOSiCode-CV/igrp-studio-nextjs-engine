import * as Handlebars from 'handlebars'
import { resolveImports } from "../helpers/resolveImports";
import { resolveStates } from "../helpers/resolveState";
import { capitalize, toLowerCase, json, toProps } from '../helpers/stringHelpers';
import { length } from '../helpers/arrayHelpers';
import { greaterThan, equals } from '../helpers/comparisonHelpers';
import { componentNameHelper } from '../helpers/componentNameHelper';
import { fieldHelper } from '../helpers/fieldHelper';
import { Default, isValidation, yupValidation } from '../helpers/validationHelpers';
import { actionType, applyToAll, importActionsType, targetHelper } from '../helpers/actionHelpers';
import { renderLayout } from '../utils/renderLayout';
import { notNullOrEmpty } from '../helpers/objectHelpers';

// Components
Handlebars.registerHelper("resolve-imports", resolveImports);
Handlebars.registerHelper("resolve-states", resolveStates);
Handlebars.registerHelper("component-name-helper", componentNameHelper);
Handlebars.registerHelper("field-helper", fieldHelper);
Handlebars.registerHelper("render-layout", renderLayout);

// String
Handlebars.registerHelper('toLowerCase', toLowerCase);
Handlebars.registerHelper("capitalize", capitalize);
Handlebars.registerHelper("json", json);
Handlebars.registerHelper("toProps", toProps);

// Array
Handlebars.registerHelper("length", length);

// Comparison
Handlebars.registerHelper("gt", greaterThan);
Handlebars.registerHelper("eq", equals);

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

export { Handlebars };