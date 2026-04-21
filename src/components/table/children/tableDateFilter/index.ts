import {
  tableDateFilterPropertiesMapping,
  tableDateFilterProperties,
  tableDateFilterVariants,
  tableDateFilterChildProperties,
  tableDateFilterChildPropertiesMapping,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPDataTableFilterDate')
    component.loadVariants(tableDateFilterVariants());
    component.loadParent(TABLE)
    component.loadLabel('Date Filter')
    component.loadGroup('Filters')
    component.getProperties(tableDateFilterProperties());
    component.getPropertiesMapping(tableDateFilterPropertiesMapping());
    component.getChildProperties(tableDateFilterChildProperties());
    component.getChildPropertiesMapping(tableDateFilterChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_DATE_FILTER }))

    component.loadStates([]);

    component.setRenderer(liquidRenderer);
  },
};

const TABLE_DATE_FILTER = 'tableDateFilter'

export { TABLE_DATE_FILTER };