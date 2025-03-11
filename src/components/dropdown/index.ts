import {
  dropdownPropertiesMapping,
  dropdownProperties,
  dropdownVariants,
  dropdownChildProperties,
  dropdownChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDropdown } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(dropdownVariants());
    component.loadIcon('DropdownIcon')
    component.loadGroup('basicElements')
    component.loadLabel('Dropdown')
    component.getProperties(dropdownProperties());
    component.getPropertiesMapping(dropdownPropertiesMapping());
    component.getChildProperties(dropdownChildProperties());
    component.getChildPropertiesMapping(dropdownChildPropertiesMapping());

    component.loadStates([
      //'const [{{id}}Loading, set{{id}}Loading] = useState(false);',
      'const [{{id}}Disabled, set{{id}}Disabled] = useState({{value}});',
      'const handle{{id}}Click = (e: any) => { service.handle{{id}}Click(e) };',
    ]);

    component.loadServiceMethods(
      [
        `handle{{id}}Click: (data?: Record<string, unknown>) => void;`
      ]
    )

    component.setRenderer(hbsRenderer);
  },
};

const DROPDOWN = 'dropdown'

export { DROPDOWN };
