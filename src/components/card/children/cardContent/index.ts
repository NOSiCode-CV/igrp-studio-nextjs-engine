import {
  cardContentPropertiesMapping,
  cardContentProperties,
  cardContentVariants,
  cardContentChildProperties,
  cardContentChildPropertiesMapping, cardContentStyle, cardContentRules,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { CARD } from '../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';

export default {
  register(component: Component) {

    component.loadImports([
      `import { IGRPCardContent } from "@igrp/igrp-framework-react-design-system";`,
    ]);

    component.loadComponentClass('IGRPCardContent')
    component.loadVariants(cardContentVariants());
    component.loadParent(CARD)
    component.loadLabel('Card Content')
    component.getProperties(cardContentProperties());
    component.getPropertiesMapping(cardContentPropertiesMapping());
    component.getChildProperties(cardContentChildProperties());
    component.getChildPropertiesMapping(cardContentChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: CARD, name: CARD_CONTENT }))
    component.getStyle(cardContentStyle())
    component.getRules(cardContentRules())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const CARD_CONTENT = 'cardContent'

export { CARD_CONTENT };