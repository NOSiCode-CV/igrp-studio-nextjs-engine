import {
  textPropertiesMapping,
  textProperties,
  textVariants,
  textChildProperties,
  textChildPropertiesMapping, textStyle, textRules, textData,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPText')
    component.loadVariants(textVariants());
    component.loadGroup('typography')
    component.loadLabel('Text')
    component.getProperties(textProperties());
    component.getPropertiesMapping(textPropertiesMapping());
    component.getChildProperties(textChildProperties());
    component.getChildPropertiesMapping(textChildPropertiesMapping());
    component.getStyle(textStyle())
    component.getRules(textRules())
    component.getData(textData())
    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const TEXT = 'text'

export { TEXT };