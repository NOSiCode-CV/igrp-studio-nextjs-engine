import { Liquid } from 'liquidjs';
import fs from 'fs-extra';
import { resolveImports } from "../helpers/resolveImports";
import { resolveStates } from "../helpers/resolveState";
import {
  capitalize,
  toLowerCase,
  json,
  toProps,
  concat,
  toCamelCaseFromNatural,
  typeResolution, trim, toCamelCase, typeFormatter, singleTypeFormatter,
} from '../helpers/stringHelpers';
import { getAttribute, getIndex, length } from '../helpers/arrayHelpers';
import { greaterThan, equals, and, not, or } from '../helpers/comparisonHelpers';
import { componentNameHelper } from '../helpers/componentNameHelper';
import { fieldHelper } from '../helpers/fieldHelper';
import { Default, isValidation, yupValidation } from '../helpers/validationHelpers';
import { actionType, applyToAll, importActionsType, targetHelper } from '../helpers/actionHelpers';
import { renderLayout } from '../utils/renderLayout';
import { getPropertyByKey, notNullOrEmpty, nullOrEmpty } from '../helpers/objectHelpers';
import {
  addClassNameFromChildProperties,
  addClassNameFromProperties,
  addClassNameFromStyle,
  extractCardContent,
  extractCardFooter, extractInfoItem, extractInfoSection,
  extractMenuNavigationItems,
  extractTableColumns,
  extractTableRowSubcomponent,
  extractTableFilters,
  extractTabsItem,
  extractTextListItemContent,
  extractTextListItems,
  extractTextListItemSubItems,
  indexedTag,
  renderData,
  renderInteractions,
  renderProperties, replaceId, replaceType, replaceValue, resolveClassNameProperty,
  resolveComponent,
  resolveFirstType, resolveFunctionArgs, resolveArgNames,
  resolveQueryParams, resolveArrayElementRules,
  resolveSegmentPath,
  resolveStateDefault,
  resolveZodTypes, checkRules, extractAccordionItem, extractCardDetailsItem,
} from '../helpers/componentPropertiesHelper';
import { resolveCodeBlocks } from '../helpers/resolveCodeBlocks';
import { resolveServiceInterfaceMethods } from '../helpers/resolveServiceInterfaceMethods';
import { renderTableRow } from '../helpers/renderTableRow';
import { registry } from '../components';
import { replaceTemplate } from '../utils/helpers';
import { getPaths } from '../index';
import { PARTIALS } from '../utils/constants';
import { resolveTypes } from '../helpers/resolveTypes';
import { resolveReferences } from '../helpers/resolveReference';
import { renderTextListItem } from '../helpers/renderTextListItem';

export const engine = new Liquid({
  strictFilters: false,
  dynamicPartials: true,
  jsTruthy: true,
  extname: '.liquid',
});

const partialTemplates = new Map<string, string>();

const registerFilter = (name: string, fn: (...args: any[]) => any) => {
  engine.registerFilter(name, (input: any, ...args: any[]) => {
    if (input === '' || input === undefined || input === null) {
      return fn(...args);
    }
    return fn(input, ...args);
  });
};

registerFilter("resolve-imports", resolveImports);
registerFilter("resolve-states", resolveStates);
registerFilter("resolve-references", resolveReferences);
registerFilter("resolve-types", resolveTypes);
registerFilter("resolve-code-blocks", resolveCodeBlocks);
registerFilter("resolve-service-interface-methods", resolveServiceInterfaceMethods);
registerFilter("resolve-query-params", resolveQueryParams);
registerFilter("resolve-segment-path", resolveSegmentPath);
registerFilter("component-name-helper", componentNameHelper);
registerFilter("field-helper", fieldHelper);
registerFilter("render-layout", renderLayout);
registerFilter("render-table-row", renderTableRow);
registerFilter("render-text-list-item", renderTextListItem);
registerFilter("addClassNameFromProperties", addClassNameFromProperties);
registerFilter("addClassNameFromChildProperties", addClassNameFromChildProperties);
registerFilter("addClassNameFromStyle", addClassNameFromStyle);
registerFilter("resolveFirstType", resolveFirstType);
registerFilter("resolveStateDefault", resolveStateDefault);
registerFilter("resolveZodTypes", resolveZodTypes);
registerFilter("resolveFunctionArgs", resolveFunctionArgs);
registerFilter("resolveArgNames", resolveArgNames);
registerFilter("resolveArrayElementRules", resolveArrayElementRules);
registerFilter("checkRules", checkRules);
registerFilter("extractTableColumns", extractTableColumns);
registerFilter("extractTableRowSubcomponent", extractTableRowSubcomponent);
registerFilter("extractTableFilters", extractTableFilters);
registerFilter("extractCardContent", extractCardContent);
registerFilter("extractCardFooter", extractCardFooter);
registerFilter("extractTabsItem", extractTabsItem);
registerFilter("extractMenuNavigationItems", extractMenuNavigationItems);
registerFilter("extractTextListItems", extractTextListItems);
registerFilter("extractTextListItemSubItems", extractTextListItemSubItems);
registerFilter("extractTextListItemContent", extractTextListItemContent);
registerFilter("extractInfoSection", extractInfoSection);
registerFilter("extractInfoItem", extractInfoItem);
registerFilter("extractCardDetailsItem", extractCardDetailsItem);
registerFilter("extractAccordionItem", extractAccordionItem);
registerFilter("resolveComponent", resolveComponent);
registerFilter("indexedTag", indexedTag);
registerFilter("replaceId", replaceId);
registerFilter("replaceType", replaceType);
registerFilter("replaceValue", replaceValue);
registerFilter("resolveClassNameProperty", resolveClassNameProperty);
registerFilter("render-properties", renderProperties);
registerFilter("render-interactions", renderInteractions);
registerFilter("render-data", renderData);
registerFilter("extractVolumes", extractVolumes);
registerFilter("render-service", renderService);
registerFilter("normalizeHostname", normalizeHostname);
registerFilter('toLowerCase', toLowerCase);
registerFilter('toCamelCase', toCamelCase);
registerFilter("capitalize", capitalize);
registerFilter("trim", trim);
registerFilter("json", json);
registerFilter("toProps", toProps);
registerFilter("concat", concat);
registerFilter("toCamelCaseFromNatural", toCamelCaseFromNatural);
registerFilter("typeResolution", typeResolution);
registerFilter("typeFormatter", typeFormatter);
registerFilter("singleTypeFormatter", singleTypeFormatter);
registerFilter("length", length);
registerFilter("getIndex", getIndex);
registerFilter("getAttribute", getAttribute);
registerFilter('emptyArray', () => []);
registerFilter("gt", greaterThan);
registerFilter("eq", equals);
registerFilter("and", and);
registerFilter("or", or);
registerFilter("not", not);
registerFilter("isValidation", isValidation);
registerFilter("yup-validation", yupValidation);
registerFilter("target-helper", targetHelper);
registerFilter("import-actions-type", importActionsType);
registerFilter("action-type", actionType);
registerFilter("applyToAll", applyToAll);
registerFilter("default", Default);
registerFilter("notNullOrEmpty", notNullOrEmpty);
registerFilter("nullOrEmpty", nullOrEmpty);
registerFilter("getPropertyByKey", getPropertyByKey);

engine.registerTag('indent', {
  parse(this: any, tagToken: any, remainTokens: any[]) {
    this.spaces = Number(tagToken.args?.trim() || 0);
    this.templates = [];
    const stream = this.liquid.parser.parseStream(remainTokens);
    stream.on('tag:endindent', () => stream.stop());
    stream.on('template', (tpl: any) => this.templates.push(tpl));
    stream.start();
  },
  * render(this: any, ctx: any, emitter: any): Generator<any, void, any> {
    const html = yield this.liquid.renderer.renderTemplates(this.templates, ctx);
    const pad = ' '.repeat(this.spaces);
    const indented = String(html).split('\n').map((line) => (line ? pad + line : line)).join('\n');
    emitter.write(indented);
  },
});

engine.registerTag('partial', {
  parse(this: any, tagToken: any) {
    this.args = tagToken.args;
  },
  render(this: any, ctx: any) {
    const rawArgs = String(this.args || '').split(',').map((x) => x.trim()).filter(Boolean);
    const nameArg = rawArgs.shift() || '';
    const partialName = nameArg.replace(/^['"]|['"]$/g, '');
    const source = partialTemplates.get(partialName);
    if (!source) return '';
    const hash: Record<string, any> = {};
    rawArgs.forEach((arg, index) => {
      if (arg.includes(':')) {
        const [k, ...rest] = arg.split(':');
        const valueExpr = rest.join(':').trim();
        hash[k.trim()] = ctx.get([valueExpr]);
      } else {
        hash[`value${index}`] = ctx.get([arg]);
      }
    });
    const ast = engine.parse(source);
    const renderContext: Record<string, any> = { ...ctx.environments };
    const primaryContext = hash.value0;
    if (primaryContext && typeof primaryContext === 'object' && !Array.isArray(primaryContext)) {
      Object.assign(renderContext, primaryContext);
    }
    Object.assign(renderContext, hash);
    return engine.renderSync(ast, renderContext);
  },
});

export const loadComponentPartials = (): void => {
  try {
    Object.entries(registry).forEach(([name]) => {
      const partialsPath = replaceTemplate(getPaths().componentPartials, { name });
      if (fs.pathExistsSync(partialsPath)) {
        const partialDir = fs.readdirSync(partialsPath);
        partialDir.forEach((partial) => {
          const partialName = partial.replace('.liquid', '');
          const partialContent: string = fs.readFileSync(`${partialsPath}/${partial}`, 'utf-8');
          partialTemplates.set(partialName, partialContent.trim());
        });
      }
    });
  } catch (error) {
    console.error('Error loading partials:', error);
  }
};

export const loadPartials = (): void => {
  try {
    PARTIALS.forEach((file) => {
      const partialName = file.split('/').pop()?.replace('.liquid', '') ?? file.replace('.liquid', '');
      const partialContent: string = fs.readFileSync(`${getPaths().genericPartials}/${file}`, 'utf-8');
      partialTemplates.set(partialName, partialContent);
    });
  } catch (error) {
    console.error('Error loading partials:', error);
  }
};
