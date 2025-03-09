import {
  pageHeaderPropertiesMapping,
  pageHeaderProperties,
  pageHeaderVariants,
  pageHeaderChildProperties,
  pageHeaderChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { PageHeader } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(pageHeaderVariants());
    component.loadIcon('')
    component.loadGroup('layout')
    component.loadLabel('Page Header')
    component.getProperties(pageHeaderProperties());
    component.getPropertiesMapping(pageHeaderPropertiesMapping());
    component.getChildProperties(pageHeaderChildProperties());
    component.getChildPropertiesMapping(pageHeaderChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const PAGEHEADER = 'pageHeader'

export { PAGEHEADER };