import {
  textListPropertiesMapping,
  textListProperties,
  textListVariants,
  textListChildProperties,
  textListChildPropertiesMapping,
  textListStyle,
  textListRules,
  textListData, textListInteractions,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { TEXT_LIST_ITEM } from './children/textListItem/index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPTextList');
    component.loadVariants(textListVariants());
    component.loadGroup('typography');
    component.loadLabel('Text List');
    component.getProperties(textListProperties());
    component.getPropertiesMapping(textListPropertiesMapping());
    component.getChildProperties(textListChildProperties());
    component.getChildPropertiesMapping(textListChildPropertiesMapping());
    component.getStyle(textListStyle());
    component.getRules(textListRules());
    component.getData(textListData());
    component.getInteractions(textListInteractions());
    component.loadStates([
    ]);

    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: TEXT_LIST }))

    component.loadChildrenTypes([
      { name: TEXT_LIST_ITEM, isDefault: true }
    ]);

    component.loadAcceptedChildren([
      { name: TEXT_LIST_ITEM, isDefault: true }
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const TEXT_LIST = 'textList';

export { TEXT_LIST };
