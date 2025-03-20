import {
  dynamicListPropertiesMapping,
  dynamicListProperties,
  dynamicListVariants,
  dynamicListChildProperties,
  dynamicListChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDynamicList } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(dynamicListVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Dynamic List')
    component.getProperties(dynamicListProperties());
    component.getPropertiesMapping(dynamicListPropertiesMapping());
    component.getChildProperties(dynamicListChildProperties());
    component.getChildPropertiesMapping(dynamicListChildPropertiesMapping());

    component.setRenderer(hbsRenderer);
  },
};

const DYNAMIC_LIST = 'dynamicList'

export { DYNAMIC_LIST };
