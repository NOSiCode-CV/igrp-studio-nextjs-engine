import {
  bannerProperties,
  bannerPropertiesMapping,
  bannerVariants,
  bannerChildProperties,
  bannerChildPropertiesMapping,
  bannerStyle,
  bannerRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPBanner');
    component.loadVariants(bannerVariants());
    component.loadGroup('feedback');
    component.loadLabel('Banner');
    component.getProperties(bannerProperties());
    component.getPropertiesMapping(bannerPropertiesMapping());
    component.getChildProperties(bannerChildProperties());
    component.getChildPropertiesMapping(bannerChildPropertiesMapping());
    component.getStyle(bannerStyle());
    component.getRules(bannerRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const BANNER = 'banner';
export { BANNER };
