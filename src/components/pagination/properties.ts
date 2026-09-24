import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function paginationProperties() {
  return {
    currentPage: { type: 'number', required: false, default: 1 },
    totalPages: { type: 'number', required: false, default: 1 },
    previousLabel: { type: 'string', required: false, default: 'Previous' },
    nextLabel: { type: 'string', required: false, default: 'Next' },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function paginationPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function paginationChildProperties() { return {}; }
export function paginationChildPropertiesMapping() { return {}; }
export function paginationVariants() { return {}; }
export function paginationStyle() { return { ...baseStyle() }; }
export function paginationRules() { return { ...baseRules() }; }
