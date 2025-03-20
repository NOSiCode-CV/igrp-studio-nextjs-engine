import {
  cardFooterPropertiesMapping,
  cardFooterProperties,
  cardFooterVariants,
  cardFooterChildProperties,
  cardFooterChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { CARD } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);

    component.loadVariants(cardFooterVariants());
    component.loadParent(CARD)
    component.loadLabel('Card Footer')
    component.getProperties(cardFooterProperties());
    component.getPropertiesMapping(cardFooterPropertiesMapping());
    component.getChildProperties(cardFooterChildProperties());
    component.getChildPropertiesMapping(cardFooterChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const CARD_FOOTER = 'cardFooter'

export { CARD_FOOTER };