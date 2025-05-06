import {
  areaChartPropertiesMapping,
  areaChartProperties,
  areaChartChildProperties,
  areaChartChildPropertiesMapping, areaChartInteractions,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPAreaChart } from "@igrp/igrp-framework-react-design-system";'
    ]);

    //component.loadVariants(areaChartVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Area Chart')
    component.setAllowTypes(true)
    component.getProperties(areaChartProperties());
    component.getPropertiesMapping(areaChartPropertiesMapping());
    component.getInteractions(areaChartInteractions());
    component.getChildProperties(areaChartChildProperties());
    component.getChildPropertiesMapping(areaChartChildPropertiesMapping());

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const AREACHART = 'areachart'

export { AREACHART };