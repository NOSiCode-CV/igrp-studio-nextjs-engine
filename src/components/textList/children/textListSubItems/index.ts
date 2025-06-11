import {
  textListsSubItemsPropertiesMapping,
  textListsSubItemsProperties,
  textListsSubItemsVariants,
  textListsSubItemsChildProperties,
  textListsSubItemsChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { TEXT_LIST_ITEM } from '../textListItem/index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadVariants(textListsSubItemsVariants());
    component.loadParent(TEXT_LIST_ITEM)
    component.loadLabel('Text List Sub Items')
    component.getProperties(textListsSubItemsProperties());
    component.getPropertiesMapping(textListsSubItemsPropertiesMapping());
    component.getChildProperties(textListsSubItemsChildProperties());
    component.getChildPropertiesMapping(textListsSubItemsChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TEXT_LIST_SUBITEMS = 'textListSubItems'

export { TEXT_LIST_SUBITEMS };