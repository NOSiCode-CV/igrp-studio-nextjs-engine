import {
  lineChartPropertiesMapping,
  lineChartProperties,
  lineChartChildProperties,
  lineChartChildPropertiesMapping, lineChartInteractions, lineChartData, lineChartRules, lineChartStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPLineChart } from "@igrp/igrp-framework-react-design-system";'
    ]);

    //component.loadVariants(lineChartVariants());
    component.loadComponentClass('IGRPLineChart')
    component.loadGroup('dataDisplay')
    component.loadLabel('Line Chart')
    component.getProperties(lineChartProperties());
    component.getPropertiesMapping(lineChartPropertiesMapping());
    component.getInteractions(lineChartInteractions());
    component.getChildProperties(lineChartChildProperties());
    component.getChildPropertiesMapping(lineChartChildPropertiesMapping());
    component.getData(lineChartData());
    component.getRules(lineChartRules());
    component.getStyle(lineChartStyle());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: LINECHART }))

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const LINECHART = 'linechart'

export { LINECHART };