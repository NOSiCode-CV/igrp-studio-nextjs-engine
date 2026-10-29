import {
  headlinePropertiesMapping,
  headlineProperties,
  headlineVariants,
  headlineChildProperties,
  headlineChildPropertiesMapping, headlineStyle, headlineRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import type { Layout } from '../../interfaces/types';

function omitDeprecatedColors(props: Record<string, any> = {}) {
  const { roleColor: _roleColor, color: _color, ...rest } = props;
  return rest;
}

function liquidHeadlineRenderer(
  component: Layout,
  parentComponent?: Layout,
  element?: Component,
  parentElement?: Component,
) {
  // Existing page metadata can still hold the deprecated color props. Strip
  // every JSX prop source without changing the saved configuration.
  const properties = omitDeprecatedColors(component.properties);
  if (properties.commonProperties?.customProperties) {
    properties.commonProperties = {
      ...properties.commonProperties,
      customProperties: omitDeprecatedColors(properties.commonProperties.customProperties),
    };
  }
  return liquidRenderer(
    {
      ...component,
      properties,
      data: component.data ? omitDeprecatedColors(component.data) : undefined,
    },
    parentComponent,
    element,
    parentElement,
  );
}

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPHeadline')
    component.loadVariants(headlineVariants());
    component.loadGroup('typography')
    component.loadLabel('Headline')
    component.getProperties(headlineProperties());
    component.getPropertiesMapping(headlinePropertiesMapping());
    component.getChildProperties(headlineChildProperties());
    component.getChildPropertiesMapping(headlineChildPropertiesMapping());
    component.getStyle(headlineStyle())
    component.getRules(headlineRules())
    component.loadStates([]);

    component.setRenderer(liquidHeadlineRenderer);
  },
};

const HEADLINE = 'headline'

export { HEADLINE };
