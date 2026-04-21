import {
  infoItemPropertiesMapping,
  infoItemProperties,
  infoItemVariants,
  infoItemChildProperties,
  infoItemChildPropertiesMapping, infoItemInteractions, infoItemInteractionsMapping, infoItemStyle, infoItemRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { INFO_SECTION } from '../infoSection/index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadParent(INFO_SECTION)
    component.loadComponentClass('IGRPInfoItem')
    component.loadVariants(infoItemVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Info Item')
    component.getInteractions(infoItemInteractions());
    component.getInteractionsMapping(infoItemInteractionsMapping());
    component.getProperties(infoItemProperties());
    component.getPropertiesMapping(infoItemPropertiesMapping());
    component.getChildProperties(infoItemChildProperties());
    component.getChildPropertiesMapping(infoItemChildPropertiesMapping());

    component.loadStates([
    ]);
    component.getStyle(infoItemStyle())
    component.getRules(infoItemRules())
    component.setRenderer(liquidRenderer);
  },
};

const INFO_ITEM = 'infoItem'

export { INFO_ITEM };
