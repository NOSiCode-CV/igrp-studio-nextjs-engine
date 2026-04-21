import {
  chatPropertiesMapping,
  chatProperties,
  chatVariants,
  chatChildProperties,
  chatChildPropertiesMapping, chatStyle, chatRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPChat')
    component.loadVariants(chatVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Chat')
    component.setAllowTypes(true)
    component.getProperties(chatProperties());
    component.getPropertiesMapping(chatPropertiesMapping());
    component.getChildProperties(chatChildProperties());
    component.getChildPropertiesMapping(chatChildPropertiesMapping());
    component.getStyle(chatStyle())
    component.getRules(chatRules())
    component.loadStates([
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const CHAT = 'chat'

export { CHAT };