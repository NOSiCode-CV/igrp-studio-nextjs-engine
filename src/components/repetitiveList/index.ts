import {
  repetitiveListPropertiesMapping,
  repetitiveListProperties,
  repetitiveListVariants,
  repetitiveListChildProperties,
  repetitiveListChildPropertiesMapping, repetitiveListRules, repetitiveListStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPRepetitiveComponent } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPRepetitiveComponent')
    component.loadVariants(repetitiveListVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Repetitive Component')
    component.getProperties(repetitiveListProperties());
    component.getPropertiesMapping(repetitiveListPropertiesMapping());
    component.getChildProperties(repetitiveListChildProperties());
    component.getChildPropertiesMapping(repetitiveListChildPropertiesMapping());
    component.getRules(repetitiveListRules())
    component.getStyle(repetitiveListStyle())
    component.setRenderer(hbsRenderer);
  },
};

const REPETITIVE_LIST = 'repetitiveList'

export { REPETITIVE_LIST };
