import {
  lineChartPropertiesMapping,
  lineChartProperties,
  lineChartChildProperties,
  lineChartChildPropertiesMapping, lineChartInteractions,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPLineChart } from "@igrp/igrp-framework-react-design-system";'
    ]);

    //component.loadVariants(lineChartVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Line Chart')
    component.getProperties(lineChartProperties());
    component.getPropertiesMapping(lineChartPropertiesMapping());
    component.getInteractions(lineChartInteractions());
    component.getChildProperties(lineChartChildProperties());
    component.getChildPropertiesMapping(lineChartChildPropertiesMapping());

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const LINECHART = 'linechart'

export { LINECHART };