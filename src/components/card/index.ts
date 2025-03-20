import {
  cardPropertiesMapping,
  cardProperties,
  cardVariants,
  cardChildProperties,
  cardChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { CARD_CONTENT } from './children/cardContent';
import { CARD_FOOTER } from './children/cardFooter';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPCard } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(cardVariants());
    component.loadChildrenMax(2)
    component.loadGroup('layout')
    component.loadLabel('Card')
    component.getProperties(cardProperties());
    component.getPropertiesMapping(cardPropertiesMapping());
    component.getChildProperties(cardChildProperties());
    component.getChildPropertiesMapping(cardChildPropertiesMapping());

    component.loadChildrenTypes([
      { name: CARD_CONTENT, isDefault: true }, { name: CARD_FOOTER, isDefault: true }
    ]);

    component.loadAcceptedChildren([
      { name: CARD_CONTENT, isDefault: true }, { name: CARD_FOOTER, isDefault: true }
    ])

    component.setRenderer(hbsRenderer);
  },
};

const CARD = 'card'

export { CARD };