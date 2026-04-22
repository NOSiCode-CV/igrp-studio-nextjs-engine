import {
  tableLinkActionPropertiesMapping,
  tableLinkActionProperties,
  tableLinkActionVariants,
  tableLinkActionChildProperties,
  tableLinkActionChildPropertiesMapping,
  tableLinkActionInteractions,
  tableLinkActionInteractionsMapping,
  tableLinkActionRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_ACTION_LIST_CELL } from '../tableActionListCell';

export default {
  register(component: Component) {

    component.loadImports([
    ]);

    component.loadComponentClass('IGRPDataTableButtonLink');
    component.loadVariants(tableLinkActionVariants());
    component.loadParent(TABLE_ACTION_LIST_CELL);
    component.loadGroup('Columns');
    component.loadLabel('Link Action');
    component.getProperties(tableLinkActionProperties());
    component.getPropertiesMapping(tableLinkActionPropertiesMapping());
    component.getInteractions(tableLinkActionInteractions());
    component.getInteractionsMapping(tableLinkActionInteractionsMapping());
    component.getChildProperties(tableLinkActionChildProperties());
    component.getChildPropertiesMapping(tableLinkActionChildPropertiesMapping());
    component.getRules(tableLinkActionRules());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_LINK_ACTION}));

    component.loadStates([]);

    component.setRenderer(liquidRenderer);
  },
};

const TABLE_LINK_ACTION = 'tableLinkAction'

export { TABLE_LINK_ACTION };