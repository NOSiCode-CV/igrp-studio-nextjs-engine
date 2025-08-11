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
    component.loadCodeBlock(
      `
// Create and register step methods
const stepMethods: StepMethods = {
  saveStep: async () => {
    // No validation needed for save
    try {
      return await handleSave();
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to save step data',
      };
    }
  },
  
  completeStep: async () => {
    try {
      return await handleComplete();
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to complete step',
      };
    }
  }
};
// Register methods with parent on mount
useEffect(() => {
  onRegisterMethods?.(stepMethods);
}, []);
      `
    )

  },
};

const PROCESS_STEP = 'processStep'

export { PROCESS_STEP };