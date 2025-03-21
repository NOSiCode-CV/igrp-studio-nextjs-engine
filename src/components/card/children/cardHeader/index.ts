import {
  cardHeaderPropertiesMapping,
  cardHeaderProperties,
  cardHeaderVariants,
  cardHeaderChildProperties,
  cardHeaderChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { CARD } from '../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';

export default {
  register(component: Component) {

    component.loadImports([
      `import { IGRPCardHeader } from "@igrp/igrp-framework-react-design-system";`,
    ]);

    component.loadVariants(cardHeaderVariants());
    component.loadParent(CARD)
    component.loadLabel('Card Header')
    component.getProperties(cardHeaderProperties());
    component.getPropertiesMapping(cardHeaderPropertiesMapping());
    component.getChildProperties(cardHeaderChildProperties());
    component.getChildPropertiesMapping(cardHeaderChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: CARD, name: CARD_HEADER }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const CARD_HEADER = 'cardHeader'

export { CARD_HEADER };