import {
  textListsItemPropertiesMapping,
  textListsItemProperties,
  textListsItemVariants,
  textListsItemChildProperties,
  textListsItemChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { TEXT_LIST } from '../../index';
import { TEXT_LIST_ITEM_CONTENT } from '../textListItemContent/index';
import { TEXT_LIST_SUBITEMS } from '../textListSubItems/index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPTextListItem')
    component.loadVariants(textListsItemVariants());
    component.loadChildrenMax(2)
    component.loadParent(TEXT_LIST)
    component.loadLabel('Text List Item')
    component.getProperties(textListsItemProperties());
    component.getPropertiesMapping(textListsItemPropertiesMapping());
    component.getChildProperties(textListsItemChildProperties());
    component.getChildPropertiesMapping(textListsItemChildPropertiesMapping());

    component.loadChildrenTypes([
      { name: TEXT_LIST_ITEM_CONTENT, isDefault: true },
      { name: TEXT_LIST_SUBITEMS, isDefault: false }
    ]);

    component.loadAcceptedChildren([
      { name: TEXT_LIST_ITEM_CONTENT, isDefault: true },
      { name: TEXT_LIST_SUBITEMS, isDefault: false }
    ]);

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TEXT_LIST_ITEM = 'textListItem'

export interface IGRPTextListItem {
  id: string;
  badgeText?: string;
  badgeVariant?: string;
  badgeColor?: string;
  icon?: string;
  iconColor?: string;
  variant?: string;
  completed?: boolean;
  disabled?: boolean;
  content?: string; // or JSX.Element in runtime
  subItems?: IGRPTextListItem[];
}

export { TEXT_LIST_ITEM };