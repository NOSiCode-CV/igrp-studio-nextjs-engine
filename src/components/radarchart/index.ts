import {
  radarChartPropertiesMapping,
  radarChartProperties,
  radarChartChildProperties,
  radarChartChildPropertiesMapping, radarChartInteractions,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPRadarChart } from "@igrp/igrp-framework-react-design-system";'
    ]);

    //component.loadVariants(radarChartVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Radar Chart')
    component.getProperties(radarChartProperties());
    component.getPropertiesMapping(radarChartPropertiesMapping());
    component.getInteractions(radarChartInteractions());
    component.getChildProperties(radarChartChildProperties());
    component.getChildPropertiesMapping(radarChartChildPropertiesMapping());

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const RADARCHART = 'radarchart'

export { RADARCHART };