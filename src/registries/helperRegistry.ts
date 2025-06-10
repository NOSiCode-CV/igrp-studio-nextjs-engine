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
  typeResolution, trim, toCamelCase, typeFormatter,
} from '../helpers/stringHelpers';
import { getAttribute, getIndex, length } from '../helpers/arrayHelpers';
import { greaterThan, equals, and, not, or } from '../helpers/comparisonHelpers';
import { componentNameHelper } from '../helpers/componentNameHelper';
import { fieldHelper } from '../helpers/fieldHelper';
import { Default, isValidation, yupValidation } from '../helpers/validationHelpers';
import { actionType, applyToAll, importActionsType, targetHelper } from '../helpers/actionHelpers';
import { renderLayout } from '../utils/renderLayout';
import { notNullOrEmpty, nullOrEmpty } from '../helpers/objectHelpers';
import {
  addClassNameFromChildProperties,
  addClassNameFromProperties, addClassNameFromStyle, extractCardContent, extractCardFooter, extractMenuNavigationItems,
  extractTableColumns,
  extractTableFilters, extractTabsItem, indexedTag, renderData,
  renderInteractions,
  renderProperties,
  resolveComponent,
  resolveFirstType, resolveQueryParams, resolveSegmentPath, resolveStateDefault, resolveZodTypes,
} from '../helpers/componentPropertiesHelper';
import { resolveCodeBlocks } from '../helpers/resolveCodeBlocks';
import { resolveServiceInterfaceMethods } from '../helpers/resolveServiceInterfaceMethods';
import { renderTableRow } from '../helpers/renderTableRow';
import { registry } from '../components';
import fs from 'fs-extra';
import { replaceTemplate } from '../utils/helpers';
import { getPaths } from '../index';
import { extractVolumes, indent, normalizeHostname } from '../helpers/workspaceHelper';
import { PARTIALS } from '../utils/constants';
import { renderService } from '../utils/renderService';
import { resolveTypes } from '../helpers/resolveTypes';
import { resolveReferences } from '../helpers/resolveReference';

// Components
Handlebars.registerHelper("resolve-imports", resolveImports);
Handlebars.registerHelper("resolve-states", resolveStates);
Handlebars.registerHelper("resolve-references", resolveReferences);
Handlebars.registerHelper("resolve-types", resolveTypes);
Handlebars.registerHelper("resolve-code-blocks", resolveCodeBlocks);
Handlebars.registerHelper("resolve-service-interface-methods", resolveServiceInterfaceMethods);
Handlebars.registerHelper("resolve-query-params", resolveQueryParams);
Handlebars.registerHelper("resolve-segment-path", resolveSegmentPath);
Handlebars.registerHelper("component-name-helper", componentNameHelper);
Handlebars.registerHelper("field-helper", fieldHelper);
Handlebars.registerHelper("render-layout", renderLayout);
Handlebars.registerHelper("render-table-row", renderTableRow);
Handlebars.registerHelper("addClassNameFromProperties", addClassNameFromProperties);
Handlebars.registerHelper("addClassNameFromChildProperties", addClassNameFromChildProperties);
Handlebars.registerHelper("addClassNameFromStyle", addClassNameFromStyle);
Handlebars.registerHelper("resolveFirstType", resolveFirstType);
Handlebars.registerHelper("resolveStateDefault", resolveStateDefault);
Handlebars.registerHelper("resolveZodTypes", resolveZodTypes);
Handlebars.registerHelper("extractTableColumns", extractTableColumns);
Handlebars.registerHelper("extractTableFilters", extractTableFilters);
Handlebars.registerHelper("extractCardContent", extractCardContent);
Handlebars.registerHelper("extractCardFooter", extractCardFooter);
Handlebars.registerHelper("extractTabsItem", extractTabsItem);
Handlebars.registerHelper("extractMenuNavigationItems", extractMenuNavigationItems);
Handlebars.registerHelper("resolveComponent", resolveComponent);
Handlebars.registerHelper("indexedTag", indexedTag);
Handlebars.registerHelper("render-properties", renderProperties);
Handlebars.registerHelper("render-interactions", renderInteractions);
Handlebars.registerHelper("render-data", renderData);

// Workspace
Handlebars.registerHelper("extractVolumes", extractVolumes)
Handlebars.registerHelper("render-service", renderService)
Handlebars.registerHelper("indent", indent)
Handlebars.registerHelper("normalizeHostname", normalizeHostname)

// String
Handlebars.registerHelper('toLowerCase', toLowerCase);
Handlebars.registerHelper('toCamelCase', toCamelCase);
Handlebars.registerHelper("capitalize", capitalize);
Handlebars.registerHelper("trim", trim);
Handlebars.registerHelper("json", json);
Handlebars.registerHelper("toProps", toProps);
Handlebars.registerHelper("concat", concat);
Handlebars.registerHelper("toCamelCaseFromNatural", toCamelCaseFromNatural);
Handlebars.registerHelper("typeResolution", typeResolution);
Handlebars.registerHelper("typeFormatter", typeFormatter);

// Array
Handlebars.registerHelper("length", length);
Handlebars.registerHelper("getIndex", getIndex);
Handlebars.registerHelper("getAttribute", getAttribute);
Handlebars.registerHelper('emptyArray', () => []);

// Comparison
Handlebars.registerHelper("gt", greaterThan);
Handlebars.registerHelper("eq", equals);
Handlebars.registerHelper("and", and);
Handlebars.registerHelper("or", or);
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

/**
 * Dynamically loads and registers Handlebars partials in a React.js application.
 */
export const loadComponentPartials = () : void => {
  try {
    // Fetch a list of partial files (You may need to hardcode or retrieve this list from a backend API)
    // Fetch each partial and register it
    Object.entries(registry).map(async ([name, _]) => {
      const partialsPath = replaceTemplate(getPaths().componentPartials, { name });
      if (fs.pathExistsSync(partialsPath)) {
        const partialDir = fs.readdirSync(partialsPath);
        partialDir.forEach((partial) => {
          const partialName = partial.replace('.hbs', '');
          const partialContent: string = fs.readFileSync(`${partialsPath}/${partial}`, 'utf-8');
          if (!partialContent) {
            throw new Error(`Failed to load partial: ${partialName}`);
          }
          Handlebars.registerPartial(partialName, partialContent.trim()); // Register the partial
        });
      }
    });

  } catch (error) {
    console.error('Error loading partials:', error);
  }
};

/**
 * Dynamically loads and registers Handlebars partials in a React.js application.
 */
export const loadPartials = (): void => {
  try {
    // Fetch a list of partial files (You may need to hardcode or retrieve this list from a backend API)
    // Fetch each partial and register it
    PARTIALS.map((file) => {
      const partialName = file.split('/').pop()?.replace('.hbs', '') ?? file.replace('.hbs', '');
      const partialContent: string = fs.readFileSync(`${getPaths().genericPartials}/${file}`, 'utf-8');
      if (!partialContent) {
        throw new Error(`Failed to load partial: ${file}`);
      }
      Handlebars.registerPartial(partialName, partialContent); // Register the partial
    });
  } catch (error) {
    console.error('Error loading partials:', error);
  }
};

export { Handlebars };