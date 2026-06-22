import {
  imageCropperProperties,
  imageCropperPropertiesMapping,
  imageCropperVariants,
  imageCropperChildProperties,
  imageCropperChildPropertiesMapping,
  imageCropperStyle,
  imageCropperRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPImageCropper');
    component.loadVariants(imageCropperVariants());
    component.loadGroup('media');
    component.loadLabel('Image Cropper');
    component.getProperties(imageCropperProperties());
    component.getPropertiesMapping(imageCropperPropertiesMapping());
    component.getChildProperties(imageCropperChildProperties());
    component.getChildPropertiesMapping(imageCropperChildPropertiesMapping());
    component.getStyle(imageCropperStyle());
    component.getRules(imageCropperRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const IMAGE_CROPPER = 'imageCropper';
export { IMAGE_CROPPER };
