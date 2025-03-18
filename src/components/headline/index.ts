import {
  headlinePropertiesMapping,
  headlineProperties,
  headlineVariants,
  headlineChildProperties,
  headlineChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPHeadline } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(headlineVariants());
    component.loadGroup('typography')
    component.loadLabel('Headline')
    component.getProperties(headlineProperties());
    component.getPropertiesMapping(headlinePropertiesMapping());
    component.getChildProperties(headlineChildProperties());
    component.getChildPropertiesMapping(headlineChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const HEADLINE = 'headline'

export { HEADLINE };