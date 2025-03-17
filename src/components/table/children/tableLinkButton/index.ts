import {
  tableLinkButtonPropertiesMapping,
  tableLinkButtonProperties,
  tableLinkButtonVariants,
  tableLinkButtonChildProperties,
  tableLinkButtonChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_BUTTON_LIST_CELL } from '../tableButtonListCell';

export default {
  register(component: Component) {

    component.loadComponentClass('IGRPDataTableButtonLink')

    component.loadImports([
      `import { ${component.componentClass} } from "@igrp/igrp-framework-react-design-system";`,
    ]);

    component.loadVariants(tableLinkButtonVariants());
    component.loadParent(TABLE_BUTTON_LIST_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Link Button')
    component.getProperties(tableLinkButtonProperties());
    component.getPropertiesMapping(tableLinkButtonPropertiesMapping());
    component.getChildProperties(tableLinkButtonChildProperties());
    component.getChildPropertiesMapping(tableLinkButtonChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_LINK_BUTTON }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_LINK_BUTTON = 'tableLinkButton'

export { TABLE_LINK_BUTTON };