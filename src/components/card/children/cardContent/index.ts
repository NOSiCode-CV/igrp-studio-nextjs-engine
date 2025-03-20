import {
  cardContentPropertiesMapping,
  cardContentProperties,
  cardContentVariants,
  cardContentChildProperties,
  cardContentChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { CARD } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);

    component.loadVariants(cardContentVariants());
    component.loadParent(CARD)
    component.loadLabel('Card Content')
    component.getProperties(cardContentProperties());
    component.getPropertiesMapping(cardContentPropertiesMapping());
    component.getChildProperties(cardContentChildProperties());
    component.getChildPropertiesMapping(cardContentChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const CARD_CONTENT = 'cardContent'

export { CARD_CONTENT };