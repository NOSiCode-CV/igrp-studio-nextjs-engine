import {
  buttonPropertiesMapping,
  buttonProperties,
  buttonVariants,
  buttonChildProperties,
  buttonChildPropertiesMapping, buttonInteractions, buttonInteractionsMapping, buttonStyle, buttonRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import type { Layout } from '../../interfaces/types';

function liquidButtonRenderer(
  component: Layout,
  parentComponent?: Layout,
  element?: Component,
  parentElement?: Component,
) {
  // The default template only renders children when the button has no text
  // or content binding. Radix Slot also requires exactly one element child.
  const hasSingleElementChild = component.children?.length === 1
    && !component.content
    && !component.properties?.content
    && !component.data?.content;
  if (hasSingleElementChild) {
    return liquidRenderer(component, parentComponent, element, parentElement);
  }

  // Saved metadata can still contain asChild even though it is no longer in
  // the button schema. Remove it from every path that emits JSX props.
  const { asChild: _asChild, ...properties } = component.properties ?? {};
  const { asChild: _dataAsChild, ...data } = component.data ?? {};
  if (properties.commonProperties?.customProperties) {
    const { asChild: _customAsChild, ...customProperties } = properties.commonProperties.customProperties;
    properties.commonProperties = { ...properties.commonProperties, customProperties };
  }
  return liquidRenderer(
    { ...component, properties, data: component.data ? data : undefined },
    parentComponent,
    element,
    parentElement,
  );
}

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

    component.setRenderer(liquidButtonRenderer);
  },
};

const BUTTON = 'button'

export { BUTTON };
