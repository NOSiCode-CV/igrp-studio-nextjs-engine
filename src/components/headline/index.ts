import {
  headlinePropertiesMapping,
  headlineProperties,
  headlineVariants,
  headlineChildProperties,
  headlineChildPropertiesMapping, headlineStyle, headlineRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPHeadline')
    component.loadVariants(headlineVariants());
    component.loadGroup('typography')
    component.loadLabel('Headline')
    component.getProperties(headlineProperties());
    component.getPropertiesMapping(headlinePropertiesMapping());
    component.getChildProperties(headlineChildProperties());
    component.getChildPropertiesMapping(headlineChildPropertiesMapping());
    component.getStyle(headlineStyle())
    component.getRules(headlineRules())
    component.loadStates([]);

    component.setRenderer(liquidRenderer);
  },
};

const HEADLINE = 'headline'

export { HEADLINE };