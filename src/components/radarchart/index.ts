import {
  radarChartPropertiesMapping,
  radarChartProperties,
  radarChartChildProperties,
  radarChartChildPropertiesMapping, radarChartInteractions, radarChartData, radarChartStyle, radarChartRules,
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
    component.setAllowTypes(true)
    component.getProperties(radarChartProperties());
    component.getPropertiesMapping(radarChartPropertiesMapping());
    component.getInteractions(radarChartInteractions());
    component.getChildProperties(radarChartChildProperties());
    component.getChildPropertiesMapping(radarChartChildPropertiesMapping());
    component.getData(radarChartData());
    component.getStyle(radarChartStyle())
    component.getRules(radarChartRules())

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const RADARCHART = 'radarchart'

export { RADARCHART };