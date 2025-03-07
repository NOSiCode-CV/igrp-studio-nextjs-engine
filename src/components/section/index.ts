import {
  sectionPropertiesMapping,
  sectionProperties,
  sectionVariants,
  sectionChildProperties,
  sectionChildPropertiesMapping,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(sectionVariants())
    component.loadIcon('')
    component.loadGroup('structure')
    component.loadLabel('Section')
    component.getProperties(sectionProperties());
    component.getPropertiesMapping(sectionPropertiesMapping());
    component.getChildProperties(sectionChildProperties());
    component.getChildPropertiesMapping(sectionChildPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const SECTION = 'section'

export { SECTION };