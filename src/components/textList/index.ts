import {
  textListPropertiesMapping,
  textListProperties,
  textListVariants,
  textListChildProperties,
  textListChildPropertiesMapping, textListStyle, textListRules,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPTextList } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadComponentClass('IGRPTextList')
    component.loadVariants(textListVariants());
    component.loadGroup('typography')
    component.loadLabel('TextList')
    component.getProperties(textListProperties());
    component.getPropertiesMapping(textListPropertiesMapping());
    component.getChildProperties(textListChildProperties());
    component.getChildPropertiesMapping(textListChildPropertiesMapping());
    component.getStyle(textListStyle())
    component.getRules(textListRules())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TEXT_LIST = 'textList'

export { TEXT_LIST };