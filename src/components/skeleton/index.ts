import {
  skeletonProperties,
  skeletonPropertiesMapping,
  skeletonVariants,
  skeletonChildProperties,
  skeletonChildPropertiesMapping,
  skeletonStyle,
  skeletonRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Skeleton');
    component.loadVariants(skeletonVariants());
    component.loadGroup('feedback');
    component.loadLabel('Skeleton');
    component.getProperties(skeletonProperties());
    component.getPropertiesMapping(skeletonPropertiesMapping());
    component.getChildProperties(skeletonChildProperties());
    component.getChildPropertiesMapping(skeletonChildPropertiesMapping());
    component.getStyle(skeletonStyle());
    component.getRules(skeletonRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const SKELETON = 'skeleton';
export { SKELETON };
