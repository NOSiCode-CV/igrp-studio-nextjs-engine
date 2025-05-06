import {
  pieChartPropertiesMapping,
  pieChartProperties,
  pieChartChildProperties,
  pieChartChildPropertiesMapping, pieChartInteractions,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPPieChart } from "@igrp/igrp-framework-react-design-system";'
    ]);

    //component.loadVariants(pieChartVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Pie Chart')
    component.setAllowTypes(true)
    component.getProperties(pieChartProperties());
    component.getPropertiesMapping(pieChartPropertiesMapping());
    component.getInteractions(pieChartInteractions());
    component.getChildProperties(pieChartChildProperties());
    component.getChildPropertiesMapping(pieChartChildPropertiesMapping());

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const PIECHART = 'piechart'

export { PIECHART };