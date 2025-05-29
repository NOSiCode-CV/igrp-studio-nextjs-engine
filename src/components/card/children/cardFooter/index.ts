import {
  cardFooterPropertiesMapping,
  cardFooterProperties,
  cardFooterVariants,
  cardFooterChildProperties,
  cardFooterChildPropertiesMapping, cardFooterRules, cardFooterStyle,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { CARD } from '../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';

export default {
  register(component: Component) {

    component.loadImports([
      `import { IGRPCardFooter } from "@igrp/igrp-framework-react-design-system";`,
    ]);

    component.loadVariants(cardFooterVariants());
    component.loadParent(CARD)
    component.loadLabel('Card Footer')
    component.getProperties(cardFooterProperties());
    component.getPropertiesMapping(cardFooterPropertiesMapping());
    component.getChildProperties(cardFooterChildProperties());
    component.getChildPropertiesMapping(cardFooterChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: CARD, name: CARD_FOOTER }))
    component.getRules(cardFooterRules())
    component.getStyle(cardFooterStyle())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const CARD_FOOTER = 'cardFooter'

export { CARD_FOOTER };