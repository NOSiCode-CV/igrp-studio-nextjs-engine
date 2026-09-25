import {
  iconPropertiesMapping,
  iconProperties,
  iconVariants,
  iconChildProperties,
  iconChildPropertiesMapping, iconRules, iconStyle,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPIcon')
    component.loadVariants(iconVariants());
    component.loadGroup('formElements')
    component.loadLabel('Icon')
    component.getProperties(iconProperties());
    component.getPropertiesMapping(iconPropertiesMapping());
    component.getChildProperties(iconChildProperties());
    component.getChildPropertiesMapping(iconChildPropertiesMapping());
    component.getRules(iconRules())
    component.getStyle(iconStyle())
    component.loadStates([
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const ICON = 'icon'

export { ICON };