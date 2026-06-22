import {
  menubarLabelProperties,
  menubarLabelPropertiesMapping,
  menubarLabelVariants,
  menubarLabelChildProperties,
  menubarLabelChildPropertiesMapping,
  menubarLabelStyle,
  menubarLabelRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarLabel');
    component.loadVariants(menubarLabelVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Label');
    component.getProperties(menubarLabelProperties());
    component.getPropertiesMapping(menubarLabelPropertiesMapping());
    component.getChildProperties(menubarLabelChildProperties());
    component.getChildPropertiesMapping(menubarLabelChildPropertiesMapping());
    component.getStyle(menubarLabelStyle());
    component.getRules(menubarLabelRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_LABEL = 'menubarLabel';
export { MENUBAR_LABEL };
