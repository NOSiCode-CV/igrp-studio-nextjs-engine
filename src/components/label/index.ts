import {
  labelPropertiesMapping,
  labelProperties,
  labelVariants,
  labelChildProperties,
  labelChildPropertiesMapping, labelStyle, labelRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPLabel')
    component.loadVariants(labelVariants());
    component.loadGroup('formElements')
    component.loadLabel('Label')
    component.getProperties(labelProperties());
    component.getPropertiesMapping(labelPropertiesMapping());
    component.getChildProperties(labelChildProperties());
    component.getChildPropertiesMapping(labelChildPropertiesMapping());
    component.getStyle(labelStyle())
    component.getRules(labelRules())
    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const LABEL = 'label'

export { LABEL };