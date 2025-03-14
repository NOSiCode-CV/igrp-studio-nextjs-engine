import {
  tableAlertButtonPropertiesMapping,
  tableAlertButtonProperties,
  tableAlertButtonVariants,
  tableAlertButtonChildProperties,
  tableAlertButtonChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_BUTTON_LIST_CELL } from '../tableButtonListCell';

export default {
  register(component: Component) {

    component.loadComponentClass('IGRPDataTableButtonAlert')

    component.loadImports([
      `import { ${component.componentClass} } from "@igrp/igrp-framework-react-design-system";`,
    ]);

    component.loadVariants(tableAlertButtonVariants());
    component.loadIcon('default')
    component.loadParent(TABLE_BUTTON_LIST_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Alert Button')
    component.getProperties(tableAlertButtonProperties());
    component.getPropertiesMapping(tableAlertButtonPropertiesMapping());
    component.getChildProperties(tableAlertButtonChildProperties());
    component.getChildPropertiesMapping(tableAlertButtonChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_ALERT_BUTTON }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_ALERT_BUTTON = 'tableAlertButton'

export { TABLE_ALERT_BUTTON };