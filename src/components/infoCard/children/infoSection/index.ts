import {
  infoSectionPropertiesMapping,
  infoSectionProperties,
  infoSectionVariants,
  infoSectionChildProperties,
  infoSectionChildPropertiesMapping, infoSectionInteractions, infoSectionInteractionsMapping, infoSectionStyle, infoSectionRules,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { INFO_CARD } from '../../index';
import { INFO_ITEM } from '../infoItem/index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInfoSection } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadParent(INFO_CARD)
    component.loadComponentClass('IGRPInfoSection')
    component.loadVariants(infoSectionVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Info Section')
    component.getInteractions(infoSectionInteractions());
    component.getInteractionsMapping(infoSectionInteractionsMapping());
    component.getProperties(infoSectionProperties());
    component.getPropertiesMapping(infoSectionPropertiesMapping());
    component.getChildProperties(infoSectionChildProperties());
    component.getChildPropertiesMapping(infoSectionChildPropertiesMapping());

    component.loadStates([
    ]);
    component.getStyle(infoSectionStyle())
    component.getRules(infoSectionRules())

    component.loadChildrenTypes([
      { name: INFO_ITEM, isDefault: true }
    ]);

    component.loadAcceptedChildren([
      { name: INFO_ITEM, isDefault: true }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INFO_SECTION = 'infoSection'

export { INFO_SECTION };
