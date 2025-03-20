import {
  repetitiveListPropertiesMapping,
  repetitiveListProperties,
  repetitiveListVariants,
  repetitiveListChildProperties,
  repetitiveListChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPRepetitiveList } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(repetitiveListVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Dynamic List')
    component.getProperties(repetitiveListProperties());
    component.getPropertiesMapping(repetitiveListPropertiesMapping());
    component.getChildProperties(repetitiveListChildProperties());
    component.getChildPropertiesMapping(repetitiveListChildPropertiesMapping());

    component.setRenderer(hbsRenderer);
  },
};

const REPETITIVE_LIST = 'repetitiveList'

export { REPETITIVE_LIST };
