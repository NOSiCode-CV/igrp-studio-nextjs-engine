import {
  chatPropertiesMapping,
  chatProperties,
  chatVariants,
  chatChildProperties,
  chatChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPChat } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(chatVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Chat')
    component.setAllowTypes(true)
    component.getProperties(chatProperties());
    component.getPropertiesMapping(chatPropertiesMapping());
    component.getChildProperties(chatChildProperties());
    component.getChildPropertiesMapping(chatChildPropertiesMapping());

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const CHAT = 'chat'

export { CHAT };