import {
  separatorPropertiesMapping,
  separatorProperties,
  separatorVariants,
  separatorChildProperties,
  separatorChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPSeparator } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(separatorVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Separator')
    component.getProperties(separatorProperties());
    component.getPropertiesMapping(separatorPropertiesMapping());
    component.getChildProperties(separatorChildProperties());
    component.getChildPropertiesMapping(separatorChildPropertiesMapping());

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const SEPARATOR = 'separator'

export { SEPARATOR };