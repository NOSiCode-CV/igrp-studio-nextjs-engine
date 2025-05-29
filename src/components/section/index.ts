import {
  sectionPropertiesMapping,
  sectionProperties,
  sectionVariants,
  sectionChildProperties,
  sectionChildPropertiesMapping, sectionStyle, sectionRules,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(sectionVariants())
    component.loadGroup('structure')
    component.loadLabel('Section')
    component.getProperties(sectionProperties());
    component.getPropertiesMapping(sectionPropertiesMapping());
    component.getChildProperties(sectionChildProperties());
    component.getChildPropertiesMapping(sectionChildPropertiesMapping());
    component.getStyle(sectionStyle())
    component.getRules(sectionRules())
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const SECTION = 'section'

export { SECTION };