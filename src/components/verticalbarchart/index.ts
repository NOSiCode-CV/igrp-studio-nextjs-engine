import {
  verticalBarChartPropertiesMapping,
  verticalBarChartProperties,
  verticalBarChartChildProperties,
  verticalBarChartChildPropertiesMapping, verticalBarChartInteractions,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPVerticalBarChart } from "@igrp/igrp-framework-react-design-system";'
    ]);

    //component.loadVariants(verticalBarChartVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Vertical Bar Chart')
    component.setAllowTypes(true)
    component.getProperties(verticalBarChartProperties());
    component.getPropertiesMapping(verticalBarChartPropertiesMapping());
    component.getInteractions(verticalBarChartInteractions());
    component.getChildProperties(verticalBarChartChildProperties());
    component.getChildPropertiesMapping(verticalBarChartChildPropertiesMapping());

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const VERTICAL_BAR_CHART = 'verticalBarchart'

export { VERTICAL_BAR_CHART };