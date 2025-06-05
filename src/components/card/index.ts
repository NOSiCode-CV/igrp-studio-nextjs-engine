import {
  cardPropertiesMapping,
  cardProperties,
  cardVariants,
  cardChildProperties,
  cardChildPropertiesMapping, cardStyle, cardRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { CARD_CONTENT } from './children/cardContent';
import { CARD_FOOTER } from './children/cardFooter';
import { CARD_HEADER } from './children/cardHeader';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPCard } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPCard')
    component.loadVariants(cardVariants());
    component.loadChildrenMax(3)
    component.loadGroup('layout')
    component.loadLabel('Card')
    component.getProperties(cardProperties());
    component.getPropertiesMapping(cardPropertiesMapping());
    component.getChildProperties(cardChildProperties());
    component.getChildPropertiesMapping(cardChildPropertiesMapping());
    component.getStyle(cardStyle())
    component.getRules(cardRules())
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: CARD }))
    component.loadChildrenTypes([
      { name: CARD_HEADER, isDefault: true }, { name: CARD_CONTENT, isDefault: true }, { name: CARD_FOOTER, isDefault: true },
    ]);

    component.loadAcceptedChildren([
      { name: CARD_HEADER, isDefault: true }, { name: CARD_CONTENT, isDefault: true }, { name: CARD_FOOTER, isDefault: true },
    ])

    component.setRenderer(hbsRenderer);
  },
};

const CARD = 'card'

export { CARD };