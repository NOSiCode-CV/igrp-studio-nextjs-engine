import {
  imagePropertiesMapping,
  imageProperties,
  imageVariants,
  imageChildProperties,
  imageChildPropertiesMapping, imageRules, imageStyle, imageInteractions,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPImage')
    component.loadVariants(imageVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Image')
    component.getProperties(imageProperties());
    component.getPropertiesMapping(imagePropertiesMapping());
    component.getChildProperties(imageChildProperties());
    component.getChildPropertiesMapping(imageChildPropertiesMapping());
    component.getInteractions(imageInteractions());
    component.getRules(imageRules())
    component.getStyle(imageStyle())
    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const IMAGE = 'image'

export { IMAGE };