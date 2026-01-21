import {
  cardDetailsPropertiesMapping,
  cardDetailsProperties,
  cardDetailsVariants,
  cardDetailsChildProperties,
  cardDetailsChildPropertiesMapping,
  cardDetailsStyle,
  cardDetailsRules,
  cardDetailsData,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';
import { CARD_DETAILS_ITEM } from './children/cardDetailsItem/index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPCardDetails');
    component.loadVariants(cardDetailsVariants());
    component.loadGroup('basicElements');
    component.loadLabel('Card Details');
    component.getProperties(cardDetailsProperties());
    component.getPropertiesMapping(cardDetailsPropertiesMapping());
    component.getChildProperties(cardDetailsChildProperties());
    component.getChildPropertiesMapping(cardDetailsChildPropertiesMapping());
    component.getStyle(cardDetailsStyle());
    component.getRules(cardDetailsRules());
    component.getData(cardDetailsData());
    component.loadStates([
    ]);
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: CARD_DETAILS }))

    component.loadChildrenTypes([
      { name: CARD_DETAILS_ITEM, isDefault: true },
    ]);

    component.loadAcceptedChildren([
      { name: CARD_DETAILS_ITEM, isDefault: true }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const CARD_DETAILS = 'cardDetails';

export { CARD_DETAILS };
