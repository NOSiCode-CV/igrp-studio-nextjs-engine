import {
  formListPropertiesMapping,
  formListProperties,
  formListVariants,
  formListChildProperties,
  formListChildPropertiesMapping, formListRules, formListStyle, formListData,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPFormList')
    component.loadVariants(formListVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Form List')
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: FORM_LIST }))
    component.getProperties(formListProperties());
    component.getPropertiesMapping(formListPropertiesMapping());
    component.getChildProperties(formListChildProperties());
    component.getChildPropertiesMapping(formListChildPropertiesMapping());
    component.getRules(formListRules())
    component.getStyle(formListStyle())
    component.getData(formListData())
    component.setRenderer(liquidRenderer);
  },
};

const FORM_LIST = 'formList'

export { FORM_LIST };
