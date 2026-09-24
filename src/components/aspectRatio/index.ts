import {
  aspectRatioProperties,
  aspectRatioPropertiesMapping,
  aspectRatioVariants,
  aspectRatioChildProperties,
  aspectRatioChildPropertiesMapping,
  aspectRatioStyle,
  aspectRatioRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('AspectRatio');
    component.loadVariants(aspectRatioVariants());
    component.loadGroup('layout');
    component.loadLabel('Aspect Ratio');
    component.getProperties(aspectRatioProperties());
    component.getPropertiesMapping(aspectRatioPropertiesMapping());
    component.getChildProperties(aspectRatioChildProperties());
    component.getChildPropertiesMapping(aspectRatioChildPropertiesMapping());
    component.getStyle(aspectRatioStyle());
    component.getRules(aspectRatioRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const ASPECT_RATIO = 'aspectRatio';
export { ASPECT_RATIO };
