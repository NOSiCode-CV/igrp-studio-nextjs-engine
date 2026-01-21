import {
  accordionPropertiesMapping,
  accordionProperties,
  accordionVariants,
  accordionChildProperties,
  accordionChildPropertiesMapping,
  accordionStyle,
  accordionRules,
  accordionData, accordionInteractions,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';
import { ACCORDION_ITEM } from './children/accordionItem/index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPAccordion');
    component.loadVariants(accordionVariants());
    component.loadGroup('basicElements');
    component.loadLabel('Accordion');
    component.getProperties(accordionProperties());
    component.getPropertiesMapping(accordionPropertiesMapping());
    component.getChildProperties(accordionChildProperties());
    component.getChildPropertiesMapping(accordionChildPropertiesMapping());
    component.getInteractions(accordionInteractions());
    component.getStyle(accordionStyle());
    component.getRules(accordionRules());
    component.getData(accordionData());
    component.loadStates([
    ]);
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: ACCORDION }))

    component.loadChildrenTypes([
      { name: ACCORDION_ITEM, isDefault: true },
    ]);

    component.loadAcceptedChildren([
      { name: ACCORDION_ITEM, isDefault: true }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const ACCORDION = 'accordion';

export { ACCORDION };
