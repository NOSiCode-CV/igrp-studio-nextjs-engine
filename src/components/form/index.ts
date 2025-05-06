import {
  formPropertiesMapping,
  formProperties,
  formVariants,
  formInteractions,
  formInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { formChildProperties, formChildPropertiesMapping } from '../flex/properties';
import { GRID } from '../grid';
import { HEADLINE } from '../headline';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadVariants(formVariants());
    component.loadGroup('containers')
    component.loadLabel('Form')
    component.setAllowTypes(true)
    component.getInteractions(formInteractions())
    component.getInteractionsMapping(formInteractionsMapping())
    component.getProperties(formProperties());
    component.getPropertiesMapping(formPropertiesMapping());
    component.getChildProperties(formChildProperties());
    component.loadChildrenTypes([{name: HEADLINE, isDefault: true}, {name: GRID, isDefault: true}])
    component.loadAcceptedChildren([{name: HEADLINE, isDefault: true}, {name: GRID, isDefault: true}])
    component.getPropertiesMapping(formChildPropertiesMapping());

    component.loadStates([

    ]);

    component.setRenderer(hbsRenderer);
  },
};

const FORM = 'form'

export { FORM };
