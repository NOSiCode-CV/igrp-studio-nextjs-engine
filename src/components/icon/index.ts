import {
  iconPropertiesMapping,
  iconProperties,
  iconVariants,
  iconChildProperties,
  iconChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPIcon } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(iconVariants());
    component.loadGroup('formElements')
    component.loadLabel('Icon')
    component.getProperties(iconProperties());
    component.getPropertiesMapping(iconPropertiesMapping());
    component.getChildProperties(iconChildProperties());
    component.getChildPropertiesMapping(iconChildPropertiesMapping());

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const ICON = 'icon'

export { ICON };