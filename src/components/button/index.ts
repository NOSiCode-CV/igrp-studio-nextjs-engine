import {
  buttonPropertiesMapping,
  buttonProperties,
  buttonVariants,
  buttonChildProperties,
  buttonChildPropertiesMapping, buttonInteractions, buttonInteractionsMapping, buttonStyle, buttonRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPButton')
    component.loadVariants(buttonVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Button')
    component.getInteractions(buttonInteractions());
    component.getInteractionsMapping(buttonInteractionsMapping());
    component.getProperties(buttonProperties());
    component.getPropertiesMapping(buttonPropertiesMapping());
    component.getChildProperties(buttonChildProperties());
    component.getChildPropertiesMapping(buttonChildPropertiesMapping());
    component.getStyle(buttonStyle())
    component.getRules(buttonRules())
    component.loadStates([
      {
        state: {
          id: '',
          name: '{{id}}Disabled',
          type: 'boolean',
          defaultValue: '{{value}}'
        },
        required: true
      },
    ]);

    component.loadServiceMethods(
      [
        `handle{{id}}Click: (data?: Record<string, unknown>) => void;`
      ]
    )

    component.setRenderer(liquidRenderer);
  },
};

const BUTTON = 'button'

export { BUTTON };
