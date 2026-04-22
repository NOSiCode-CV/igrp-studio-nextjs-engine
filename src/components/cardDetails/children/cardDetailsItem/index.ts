import {
  cardDetailsItemPropertiesMapping,
  cardDetailsItemProperties,
  cardDetailsItemVariants,
  cardDetailsItemChildProperties,
  cardDetailsItemChildPropertiesMapping, cardDetailsItemStyle, cardDetailsItemRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { CARD_DETAILS } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadParent(CARD_DETAILS)
    component.loadVariants(cardDetailsItemVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Card Details Item')
    component.getProperties(cardDetailsItemProperties());
    component.getPropertiesMapping(cardDetailsItemPropertiesMapping());
    component.getChildProperties(cardDetailsItemChildProperties());
    component.getChildPropertiesMapping(cardDetailsItemChildPropertiesMapping());

    component.loadStates([
    ]);
    component.getStyle(cardDetailsItemStyle())
    component.getRules(cardDetailsItemRules())
    component.setRenderer(liquidRenderer);
  },
};

const CARD_DETAILS_ITEM = 'cardDetailsItem'

export { CARD_DETAILS_ITEM };
