import {
  buttonPropertiesMapping,
  buttonProperties,
  buttonVariants,
  buttonChildProperties,
  buttonChildPropertiesMapping, buttonInteractions, buttonInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPButton } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(buttonVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Button')
    component.getInteractions(buttonInteractions());
    component.getInteractionsMapping(buttonInteractionsMapping());
    component.getProperties(buttonProperties());
    component.getPropertiesMapping(buttonPropertiesMapping());
    component.getChildProperties(buttonChildProperties());
    component.getChildPropertiesMapping(buttonChildPropertiesMapping());

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

const BUTTON = 'button'

export { BUTTON };
