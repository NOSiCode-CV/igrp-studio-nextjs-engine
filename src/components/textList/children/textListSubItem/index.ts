import {
  textListsSubItemPropertiesMapping,
  textListsSubItemProperties,
  textListsSubItemVariants,
  textListsSubItemChildProperties,
  textListsSubItemChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { TEXT_LIST } from '../../index';
import { TEXT_LIST_ITEM } from '../textListItem/index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadVariants(textListsSubItemVariants());
    component.loadParent(TEXT_LIST_ITEM)
    component.loadLabel('Text List Sub Item')
    component.getProperties(textListsSubItemProperties());
    component.getPropertiesMapping(textListsSubItemPropertiesMapping());
    component.getChildProperties(textListsSubItemChildProperties());
    component.getChildPropertiesMapping(textListsSubItemChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TEXT_LIST_SUBITEM = 'textListSubItem'

export { TEXT_LIST_SUBITEM };