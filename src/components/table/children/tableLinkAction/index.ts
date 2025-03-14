import {
  tableLinkActionPropertiesMapping,
  tableLinkActionProperties,
  tableLinkActionVariants,
  tableLinkActionChildProperties,
  tableLinkActionChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_ACTION_LIST_CELL } from '../tableActionListCell';

export default {
  register(component: Component) {

    component.loadImports([
      `import { IGRPDataTableButtonLink } from "@igrp/igrp-framework-react-design-system";`,
    ]);

    component.loadVariants(tableLinkActionVariants());
    component.loadIcon('default')
    component.loadParent(TABLE_ACTION_LIST_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Link Action')
    component.getProperties(tableLinkActionProperties());
    component.getPropertiesMapping(tableLinkActionPropertiesMapping());
    component.getChildProperties(tableLinkActionChildProperties());
    component.getChildPropertiesMapping(tableLinkActionChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: "tableActionButton"}))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_LINK_ACTION = 'tableLinkAction'

export { TABLE_LINK_ACTION };