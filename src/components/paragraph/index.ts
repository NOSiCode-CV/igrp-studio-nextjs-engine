import {
  paragraphPropertiesMapping,
  paragraphProperties,
  paragraphVariants,
  paragraphChildProperties,
  paragraphChildPropertiesMapping,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(paragraphVariants())
    component.loadGroup('typography')
    component.loadLabel('Paragraph')
    component.loadCustomComponentTag('p')
    component.loadCustomClassName("")
    component.getProperties(paragraphProperties());
    component.getPropertiesMapping(paragraphPropertiesMapping());
    component.getChildProperties(paragraphChildProperties());
    component.getChildPropertiesMapping(paragraphChildPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const PARAGRAPH = 'paragraph'

export { PARAGRAPH };