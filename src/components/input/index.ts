import { inputPropertiesMapping, inputProperties, inputVariants } from './properties';
import { Component, defaultRenderer, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInput } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputVariants());
    component.getParentProperties(inputProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(inputProperties());
    component.getPropertiesMapping(inputPropertiesMapping());

    component.loadStates([
      'const [input{{id}}Value, setInput{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT = 'input'

export { INPUT };