import {
  spanPropertiesMapping,
  spanProperties,
  spanVariants,
  spanChildProperties,
  spanChildPropertiesMapping, spanStyle, spanRules,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(spanVariants())
    component.loadGroup('typography')
    component.loadLabel('Span')
    component.loadCustomComponentTag('span')
    component.loadCustomClassName("")
    component.getProperties(spanProperties());
    component.getPropertiesMapping(spanPropertiesMapping());
    component.getChildProperties(spanChildProperties());
    component.getChildPropertiesMapping(spanChildPropertiesMapping());
    component.getStyle(spanStyle())
    component.getRules(spanRules())
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const SPAN = 'span'

export { SPAN };