import {
  kbdProperties,
  kbdPropertiesMapping,
  kbdVariants,
  kbdChildProperties,
  kbdChildPropertiesMapping,
  kbdStyle,
  kbdRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Kbd');
    component.loadVariants(kbdVariants());
    component.loadGroup('typography');
    component.loadLabel('Keyboard Key');
    component.getProperties(kbdProperties());
    component.getPropertiesMapping(kbdPropertiesMapping());
    component.getChildProperties(kbdChildProperties());
    component.getChildPropertiesMapping(kbdChildPropertiesMapping());
    component.getStyle(kbdStyle());
    component.getRules(kbdRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const KBD = 'kbd';
export { KBD };
