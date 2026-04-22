import {
  copyToPropertiesMapping,
  copyToProperties,
  copyToVariants,
  copyToChildProperties,
  copyToChildPropertiesMapping, copyToRules, copyToStyle, copyToInteractions, copyToData,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPCopyTo')
    component.loadVariants(copyToVariants());
    component.loadGroup('basicElements')
    component.loadLabel('CopyTo')
    component.getProperties(copyToProperties());
    component.getPropertiesMapping(copyToPropertiesMapping());
    component.getChildProperties(copyToChildProperties());
    component.getChildPropertiesMapping(copyToChildPropertiesMapping());
    component.getInteractions(copyToInteractions());
    component.getData(copyToData())
    component.getRules(copyToRules())
    component.getStyle(copyToStyle())
    component.loadStates([
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const COPY_TO = 'copyTo'

export { COPY_TO };