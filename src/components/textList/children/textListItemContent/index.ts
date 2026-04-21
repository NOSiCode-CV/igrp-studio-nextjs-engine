import {
  textListItemContentPropertiesMapping,
  textListItemContentProperties,
  textListItemContentVariants,
  textListItemContentChildProperties,
  textListItemContentChildPropertiesMapping,
} from './properties';
import { Component, defaultRenderer, liquidRenderer } from '../../../index';
import { TEXT_LIST } from '../../index';
import { TEXT_LIST_ITEM } from '../textListItem/index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadVariants(textListItemContentVariants());
    component.loadCustomComponentTag("");
    component.loadCustomClassName("");
    component.setNoClassName(true);
    component.loadParent(TEXT_LIST_ITEM)
    component.loadLabel('Text List Item Content')
    component.getProperties(textListItemContentProperties());
    component.getPropertiesMapping(textListItemContentPropertiesMapping());
    component.getChildProperties(textListItemContentChildProperties());
    component.getChildPropertiesMapping(textListItemContentChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(defaultRenderer);
  },
};

const TEXT_LIST_ITEM_CONTENT = 'textListItemContent'

export { TEXT_LIST_ITEM_CONTENT };