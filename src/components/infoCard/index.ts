import {
  infoCardPropertiesMapping,
  infoCardProperties,
  infoCardVariants,
  infoCardChildProperties,
  infoCardChildPropertiesMapping,
  infoCardStyle,
  infoCardRules,
  infoCardData,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { INFO_ITEM } from './children/infoItem/index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';
import { INFO_SECTION } from './children/infoSection/index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInfoCard } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadComponentClass('IGRPInfoCard');
    component.loadVariants(infoCardVariants());
    component.loadGroup('basicElements');
    component.loadLabel('Info Card');
    component.getProperties(infoCardProperties());
    component.getPropertiesMapping(infoCardPropertiesMapping());
    component.getChildProperties(infoCardChildProperties());
    component.getChildPropertiesMapping(infoCardChildPropertiesMapping());
    component.getStyle(infoCardStyle());
    component.getRules(infoCardRules());
    component.getData(infoCardData());
    component.loadStates([
    ]);
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: INFO_CARD }))

    component.loadChildrenTypes([
      { name: INFO_SECTION, isDefault: true }
    ]);

    component.loadAcceptedChildren([
      { name: INFO_SECTION, isDefault: true }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INFO_CARD = 'infoCard';

export { INFO_CARD };
