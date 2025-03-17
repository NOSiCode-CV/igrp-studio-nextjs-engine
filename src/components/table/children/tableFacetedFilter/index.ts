import {
  tableFacetedFilterPropertiesMapping,
  tableFacetedFilterProperties,
  tableFacetedFilterVariants,
  tableFacetedFilterChildProperties,
  tableFacetedFilterChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTableFilterFaceted } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableFacetedFilterVariants());
    component.loadParent(TABLE)
    component.loadLabel('Faceted Filter')
    component.loadGroup('Filters')
    component.getProperties(tableFacetedFilterProperties());
    component.getPropertiesMapping(tableFacetedFilterPropertiesMapping());
    component.getChildProperties(tableFacetedFilterChildProperties());
    component.getChildPropertiesMapping(tableFacetedFilterChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_FACETED_FILTER }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_FACETED_FILTER = 'tableFacetedFilter'

export { TABLE_FACETED_FILTER };