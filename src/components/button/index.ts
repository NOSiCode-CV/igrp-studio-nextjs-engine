import { buttonPropertiesMapping, buttonProperties, buttonVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPButton } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(buttonVariants());
    component.getParentProperties(buttonProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(buttonProperties());
    component.getPropertiesMapping(buttonPropertiesMapping());

    component.loadStates([
      //'const [{{id}}Loading, set{{id}}Loading] = useState(false);',
      'const [{{id}}Disabled, set{{id}}Disabled] = useState({{value}});',
      'const handle{{id}}Click = () => { console.log("Button {{id}} clicked"); };',
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const BUTTON = 'button'

export { BUTTON };
