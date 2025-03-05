import { buttonPropertiesMapping, buttonProperties, buttonVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Button } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(buttonVariants());
    component.getParentProperties(buttonProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(buttonProperties());
    component.getPropertiesMapping(buttonPropertiesMapping());

    component.loadStates([
      'const [loading, setLoading] = useState(false);',
      'const [disabled, setDisabled] = useState(false);',
      'const handleClick = () => { console.log("Button clicked"); };'
    ]);

    component.setRenderer(hbsRenderer);
  },
};
