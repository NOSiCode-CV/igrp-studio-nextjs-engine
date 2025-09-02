import {
  processPropertiesMapping,
  processProperties,
  processVariants,
  processChildProperties, processChildPropertiesMapping, processInteractions, processStyle, processRules,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(processVariants())
    component.loadGroup('structure')
    component.loadLabel('Process Content')
    component.getProperties(processProperties());
    component.getPropertiesMapping(processPropertiesMapping());
    component.getChildProperties(processChildProperties());
    component.getChildPropertiesMapping(processChildPropertiesMapping());
    component.getInteractions(processInteractions());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
    component.getStyle(processStyle());
    component.getRules(processRules());
  },
};

const PROCESS = 'process'

export { PROCESS };