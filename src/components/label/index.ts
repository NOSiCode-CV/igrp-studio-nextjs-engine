import {
  labelPropertiesMapping,
  labelProperties,
  labelVariants,
  labelChildProperties,
  labelChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPLabel } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(labelVariants());
    component.loadGroup('formElements')
    component.loadLabel('Label')
    component.getProperties(labelProperties());
    component.getPropertiesMapping(labelPropertiesMapping());
    component.getChildProperties(labelChildProperties());
    component.getChildPropertiesMapping(labelChildPropertiesMapping());

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const LABEL = 'label'

export { LABEL };