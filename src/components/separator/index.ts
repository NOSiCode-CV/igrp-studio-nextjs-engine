import {
  separatorPropertiesMapping,
  separatorProperties,
  separatorVariants,
  separatorChildProperties,
  separatorChildPropertiesMapping, separatorStyle, separatorRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPSeparator } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPSeparator')
    component.loadVariants(separatorVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Separator')
    component.getProperties(separatorProperties());
    component.getPropertiesMapping(separatorPropertiesMapping());
    component.getChildProperties(separatorChildProperties());
    component.getChildPropertiesMapping(separatorChildPropertiesMapping());
    component.getStyle(separatorStyle())
    component.getRules(separatorRules())

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const SEPARATOR = 'separator'

export { SEPARATOR };