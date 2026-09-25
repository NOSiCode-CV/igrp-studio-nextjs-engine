import {
  accordionItemPropertiesMapping,
  accordionItemProperties,
  accordionItemVariants,
  accordionItemChildProperties,
  accordionItemChildPropertiesMapping, accordionItemStyle, accordionItemRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { ACCORDION } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadParent(ACCORDION)
    component.loadVariants(accordionItemVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Accordion Item')
    component.getProperties(accordionItemProperties());
    component.getPropertiesMapping(accordionItemPropertiesMapping());
    component.getChildProperties(accordionItemChildProperties());
    component.getChildPropertiesMapping(accordionItemChildPropertiesMapping());

    component.loadStates([
    ]);
    component.getStyle(accordionItemStyle())
    component.getRules(accordionItemRules())
    component.setRenderer(liquidRenderer);
  },
};

const ACCORDION_ITEM = 'accordionItem'

export { ACCORDION_ITEM };
