import {
  fragmentPropertiesMapping,
  fragmentProperties,
  fragmentVariants,
  fragmentChildProperties,
  fragmentChildPropertiesMapping, fragmentRules, fragmentStyle,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadGroup('structure');
    component.loadLabel('Fragment');
    component.loadCustomComponentTag("");
    component.loadCustomClassName("");
    component.setNoClassName(true);
    component.loadVariants(fragmentVariants())
    component.getProperties(fragmentProperties());
    component.getPropertiesMapping(fragmentPropertiesMapping());
    component.getChildProperties(fragmentChildProperties());
    component.getChildPropertiesMapping(fragmentChildPropertiesMapping());
    component.getRules(fragmentRules())
    component.getStyle(fragmentStyle())
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const FRAGMENT = 'fragment'

export { FRAGMENT };