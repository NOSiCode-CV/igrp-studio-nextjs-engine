import {
  cardPropertiesMapping,
  cardProperties,
  cardVariants,
  cardChildProperties,
  cardChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Card, CardHeader, CardBody, CardFooter, CardTitle, CardSubtitle } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(cardVariants());
    component.getProperties(cardProperties());
    component.getPropertiesMapping(cardPropertiesMapping());
    component.getChildProperties(cardChildProperties());
    component.getChildPropertiesMapping(cardChildPropertiesMapping());

    component.loadStates([
      'const [cardData, setCardData] = useState({ title: "", body: "", footer: "" });'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const CARD = 'card'

export { CARD };