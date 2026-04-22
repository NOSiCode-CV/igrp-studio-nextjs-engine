import {
  infoSectionPropertiesMapping,
  infoSectionProperties,
  infoSectionVariants,
  infoSectionChildProperties,
  infoSectionChildPropertiesMapping,
  infoSectionInteractions,
  infoSectionInteractionsMapping,
  infoSectionStyle,
  infoSectionRules,
  infoSectionData,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { INFO_CARD } from '../../index';
import { INFO_ITEM } from '../infoItem/index';

export default {
  register(component: Component) {
    component.loadImports([
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
    component.getData(infoSectionData())

    component.loadChildrenTypes([
      { name: INFO_ITEM, isDefault: true }
    ]);

    component.loadAcceptedChildren([
      { name: INFO_ITEM, isDefault: true }
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const INFO_SECTION = 'infoSection'

export { INFO_SECTION };
