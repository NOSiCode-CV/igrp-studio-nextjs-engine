import {
  radialBarChartPropertiesMapping,
  radialBarChartProperties,
  radialBarChartChildProperties,
  radialBarChartChildPropertiesMapping,
  radialBarChartInteractions,
  radialBarChartData,
  radialBarChartRules,
  radialBarChartStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPRadialBarChart } from "@igrp/igrp-framework-react-design-system";'
    ]);

    //component.loadVariants(radialBarChartVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Radial Bar Chart')
    component.setAllowTypes(true)
    component.getProperties(radialBarChartProperties());
    component.getPropertiesMapping(radialBarChartPropertiesMapping());
    component.getInteractions(radialBarChartInteractions());
    component.getChildProperties(radialBarChartChildProperties());
    component.getChildPropertiesMapping(radialBarChartChildPropertiesMapping());
    component.getData(radialBarChartData());
    component.getRules(radialBarChartRules())
    component.getStyle(radialBarChartStyle())

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const RADIAL_BAR_CHART = 'radialBarchart'

export { RADIAL_BAR_CHART };