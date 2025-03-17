import {
  tableInputFilterPropertiesMapping,
  tableInputFilterProperties,
  tableInputFilterVariants,
  tableInputFilterChildProperties,
  tableInputFilterChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTableFilterInput } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableInputFilterVariants());
    component.loadParent(TABLE)
    component.loadLabel('Input Filter')
    component.loadGroup('Filters')
    component.getProperties(tableInputFilterProperties());
    component.getPropertiesMapping(tableInputFilterPropertiesMapping());
    component.getChildProperties(tableInputFilterChildProperties());
    component.getChildPropertiesMapping(tableInputFilterChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_INPUT_FILTER }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_INPUT_FILTER = 'tableInputFilter'

export { TABLE_INPUT_FILTER };