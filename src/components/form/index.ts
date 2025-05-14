import {
  formPropertiesMapping,
  formProperties,
  formVariants,
  formInteractions,
  formInteractionsMapping, formData,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { formChildProperties, formChildPropertiesMapping } from '../flex/properties';
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
    component.getChildProperties(formChildProperties());
    component.loadChildrenTypes([{name: HEADLINE, isDefault: true}, {name: GRID, isDefault: true}])
    component.loadAcceptedChildren([{name: HEADLINE, isDefault: true}, {name: GRID, isDefault: true}])
    component.getPropertiesMapping(formChildPropertiesMapping());

    component.loadStates([
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
