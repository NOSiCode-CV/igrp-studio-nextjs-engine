import {
  tableMinMaxFilterPropertiesMapping,
  tableMinMaxFilterProperties,
  tableMinMaxFilterVariants,
  tableMinMaxFilterChildProperties,
  tableMinMaxFilterChildPropertiesMapping,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPDataTableFilterMinMax')
    component.loadVariants(tableMinMaxFilterVariants());
    component.loadParent(TABLE)
    component.loadLabel('Interval Filter')
    component.loadGroup('Filters')
    component.getProperties(tableMinMaxFilterProperties());
    component.getPropertiesMapping(tableMinMaxFilterPropertiesMapping());
    component.getChildProperties(tableMinMaxFilterChildProperties());
    component.getChildPropertiesMapping(tableMinMaxFilterChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_MINMAX_FILTER }))

    component.loadStates([]);

    component.setRenderer(liquidRenderer);
  },
};

const TABLE_MINMAX_FILTER = 'tableMinMaxFilter'

export { TABLE_MINMAX_FILTER };