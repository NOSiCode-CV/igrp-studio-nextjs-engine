import {
  inlinePropertiesMapping,
  inlineProperties,
  inlineVariants,
  inlineChildPropertiesMapping,
  inlineChildProperties,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(inlineVariants())
    component.getProperties(inlineProperties());
    component.getPropertiesMapping(inlinePropertiesMapping());
    component.getChildProperties(inlineChildProperties());
    component.getChildPropertiesMapping(inlineChildPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const INLINE = 'inline'

export { INLINE };