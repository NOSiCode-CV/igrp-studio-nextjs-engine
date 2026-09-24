import {
  commandProperties,
  commandPropertiesMapping,
  commandVariants,
  commandChildProperties,
  commandChildPropertiesMapping,
  commandStyle,
  commandRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Command');
    component.loadVariants(commandVariants());
    component.loadGroup('overlays');
    component.loadLabel('Command (Search Palette)');
    component.getProperties(commandProperties());
    component.getPropertiesMapping(commandPropertiesMapping());
    component.getChildProperties(commandChildProperties());
    component.getChildPropertiesMapping(commandChildPropertiesMapping());
    component.getStyle(commandStyle());
    component.getRules(commandRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const COMMAND = 'command';
export { COMMAND };
