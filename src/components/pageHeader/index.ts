import {
  pageHeaderPropertiesMapping,
  pageHeaderProperties,
  pageHeaderVariants,
  pageHeaderChildProperties,
  pageHeaderChildPropertiesMapping, pageHeaderRules, pageHeaderStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPPageHeader } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadComponentClass('IGRPPageHeader')
    component.loadVariants(pageHeaderVariants());
    component.loadGroup('layout')
    component.loadLabel('Page Header')
    component.getProperties(pageHeaderProperties());
    component.getPropertiesMapping(pageHeaderPropertiesMapping());
    component.getChildProperties(pageHeaderChildProperties());
    component.getChildPropertiesMapping(pageHeaderChildPropertiesMapping());
    component.getRules(pageHeaderRules())
    component.getStyle(pageHeaderStyle())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const PAGEHEADER = 'pageHeader'

export { PAGEHEADER };