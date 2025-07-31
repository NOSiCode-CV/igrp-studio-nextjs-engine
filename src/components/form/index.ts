import {
  formPropertiesMapping,
  formProperties,
  formVariants,
  formInteractions,
  formInteractionsMapping, formData, formStyle, formRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { GRID } from '../grid';
import { HEADLINE } from '../headline';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPFormHandle } from "@igrp/igrp-framework-react-design-system";',
      'import { z } from "zod"',
      //'import { useForm } from "react-hook-form";',
      //'import { zodResolver } from "@hookform/resolvers/zod";'
    ]);

    component.loadComponentClass('IGRPForm')
    component.loadVariants(formVariants());
    component.loadGroup('containers')
    component.loadLabel('Form')
    component.setAllowTypes(true)
    component.setForceReferenceLoad(true)
    component.getInteractions(formInteractions())
    component.getInteractionsMapping(formInteractionsMapping())
    component.getData(formData());
    component.getProperties(formProperties());
    component.getPropertiesMapping(formPropertiesMapping());
    component.loadDefaultChildren([{name: HEADLINE}, {name: GRID}])
    component.getStyle(formStyle())
    component.getRules(formRules())
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: FORM }))
    component.loadStates([
      {
        state: {
          id: '',
          name: 'contentForm{{id}}',
          type: 'z.infer<{{type}}ZodType>',
          defaultValue: '{}',
        },
        required: true,
      },
    ]);

    component.loadReferences([
      {
        ref: {
          id: '',
          name: 'form{{id}}Ref',
          type: 'IGRPFormHandle<{{type}}ZodType> | null',
          defaultValue: 'null',
        },
        required: true,
      },
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const FORM = 'form'

export { FORM };
