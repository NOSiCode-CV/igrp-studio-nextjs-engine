import {
  pieChartPropertiesMapping,
  pieChartProperties,
  pieChartChildProperties,
  pieChartChildPropertiesMapping, pieChartInteractions, pieChartData, pieChartRules, pieChartStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPPieChart } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPPieChart')
    //component.loadVariants(pieChartVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Pie Chart')
    component.setAllowTypes(true)
    component.getProperties(pieChartProperties());
    component.getPropertiesMapping(pieChartPropertiesMapping());
    component.getInteractions(pieChartInteractions());
    component.getChildProperties(pieChartChildProperties());
    component.getChildPropertiesMapping(pieChartChildPropertiesMapping());
    component.getData(pieChartData());
    component.getRules(pieChartRules())
    component.getStyle(pieChartStyle())
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: PIECHART }))

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const PIECHART = 'piechart'

export { PIECHART };