import {
  horizontalBarChartPropertiesMapping,
  horizontalBarChartProperties,
  horizontalBarChartChildProperties,
  horizontalBarChartChildPropertiesMapping, horizontalBarChartInteractions,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPHorizontalBarChart } from "@igrp/igrp-framework-react-design-system";'
    ]);

    //component.loadVariants(horizontalBarChartVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Horizontal Bar Chart')
    component.getProperties(horizontalBarChartProperties());
    component.getPropertiesMapping(horizontalBarChartPropertiesMapping());
    component.getInteractions(horizontalBarChartInteractions());
    component.getChildProperties(horizontalBarChartChildProperties());
    component.getChildPropertiesMapping(horizontalBarChartChildPropertiesMapping());

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const HORIZONTAL_BAR_CHART = 'horizontalBarchart'

export { HORIZONTAL_BAR_CHART };