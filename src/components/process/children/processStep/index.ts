import {
  processStepPropertiesMapping,
  processStepProperties,
  processStepVariants,
  processStepChildProperties, processStepChildPropertiesMapping, processStepInteractions, processStepStyle, processStepRules,
} from './properties';
import { Component, defaultRenderer } from '../../../index';
import { PROCESS } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(processStepVariants())
    component.loadGroup('structure')
    component.loadLabel('Process Step Content')
    component.loadParent(PROCESS);
    component.getProperties(processStepProperties());
    component.getPropertiesMapping(processStepPropertiesMapping());
    component.getChildProperties(processStepChildProperties());
    component.getChildPropertiesMapping(processStepChildPropertiesMapping());
    component.getInteractions(processStepInteractions());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
    component.getStyle(processStepStyle());
    component.getRules(processStepRules());
  },
};

const PROCESS_STEP = 'processStep'

export { PROCESS_STEP };