import {
  formPropertiesMapping,
  formProperties,
  formVariants,
  formInteractions,
  formInteractionsMapping, formData,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { GRID } from '../grid';
import { HEADLINE } from '../headline';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPForm } from "@igrp/igrp-framework-react-design-system";',
      'import { IGRPFormHandle } from "@igrp/igrp-framework-react-design-system";',
      'import { z } from "zod";'
    ]);

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
    component.loadChildrenTypes([{name: HEADLINE, isDefault: true}, {name: GRID, isDefault: true}])
    component.loadAcceptedChildren([{name: HEADLINE, isDefault: true}, {name: GRID, isDefault: true}])

    component.loadStates([
      {
        state: {
          id: '',
          name: 'contentForm{{id}}',
          type: 'z.infer<{{type}}>',
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
          type: 'IGRPFormHandle<{{type}}> | null',
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
