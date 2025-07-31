import {
  repetitiveListPropertiesMapping,
  repetitiveListProperties,
  repetitiveListVariants,
  repetitiveListChildProperties,
  repetitiveListChildPropertiesMapping, repetitiveListRules, repetitiveListStyle, repetitiveListData,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPRepetitiveComponent')
    component.loadVariants(repetitiveListVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Repetitive Component')
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: REPETITIVE_LIST }))
    component.getProperties(repetitiveListProperties());
    component.getPropertiesMapping(repetitiveListPropertiesMapping());
    component.getChildProperties(repetitiveListChildProperties());
    component.getChildPropertiesMapping(repetitiveListChildPropertiesMapping());
    component.getRules(repetitiveListRules())
    component.getStyle(repetitiveListStyle())
    component.getData(repetitiveListData())
    component.setRenderer(hbsRenderer);
  },
};

const REPETITIVE_LIST = 'repetitiveList'

export { REPETITIVE_LIST };
