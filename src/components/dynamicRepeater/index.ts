import {
  dynamicRepeaterPropertiesMapping,
  dynamicRepeaterProperties,
  dynamicRepeaterVariants,
  dynamicRepeaterChildProperties,
  dynamicRepeaterChildPropertiesMapping, dynamicRepeaterRules, dynamicRepeaterStyle, dynamicRepeaterData,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';
import { FORM } from '../form/index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDynamicRepeater } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPDynamicRepeater')
    component.loadVariants(dynamicRepeaterVariants());
    component.loadParent(FORM)
    component.loadGroup('basicElements')
    component.loadLabel('Dynamic Repeater')
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: DYNAMIC_REPEATER }))
    component.getProperties(dynamicRepeaterProperties());
    component.getPropertiesMapping(dynamicRepeaterPropertiesMapping());
    component.getChildProperties(dynamicRepeaterChildProperties());
    component.getChildPropertiesMapping(dynamicRepeaterChildPropertiesMapping());
    component.getRules(dynamicRepeaterRules())
    component.getStyle(dynamicRepeaterStyle())
    component.getData(dynamicRepeaterData())
    component.setRenderer(hbsRenderer);
  },
};

const DYNAMIC_REPEATER = 'dynamicRepeater'

export { DYNAMIC_REPEATER };
