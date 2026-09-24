import {
  pageHeaderPropertiesMapping,
  pageHeaderProperties,
  pageHeaderVariants,
  pageHeaderChildProperties,
  pageHeaderChildPropertiesMapping, pageHeaderRules, pageHeaderStyle, pageHeaderInteractions,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPPageHeader')
    component.loadVariants(pageHeaderVariants());
    component.loadGroup('layout')
    component.loadLabel('Page Header')
    component.getProperties(pageHeaderProperties());
    component.getPropertiesMapping(pageHeaderPropertiesMapping());
    component.getChildProperties(pageHeaderChildProperties());
    component.getChildPropertiesMapping(pageHeaderChildPropertiesMapping());
    component.getInteractions(pageHeaderInteractions());
    component.getRules(pageHeaderRules())
    component.getStyle(pageHeaderStyle())
    component.loadStates([]);
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: PAGEHEADER }))

    component.setRenderer(liquidRenderer);
  },
};

const PAGEHEADER = 'pageHeader'

export { PAGEHEADER };