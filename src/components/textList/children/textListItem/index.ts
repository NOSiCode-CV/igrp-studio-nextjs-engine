import {
  textListsItemPropertiesMapping,
  textListsItemProperties,
  textListsItemVariants,
  textListsItemChildProperties,
  textListsItemChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { TEXT_LIST } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPTextListItem } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(textListsItemVariants());
    component.loadParent(TEXT_LIST)
    component.loadLabel('Text List Item')
    component.getProperties(textListsItemProperties());
    component.getPropertiesMapping(textListsItemPropertiesMapping());
    component.getChildProperties(textListsItemChildProperties());
    component.getChildPropertiesMapping(textListsItemChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TEXT_LIST_ITEM = 'textListItem'

export { TEXT_LIST_ITEM };