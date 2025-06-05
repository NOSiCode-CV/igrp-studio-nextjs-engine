import {
  horizontalBarChartPropertiesMapping,
  horizontalBarChartProperties,
  horizontalBarChartChildProperties,
  horizontalBarChartChildPropertiesMapping,
  horizontalBarChartInteractions,
  horizontalBarChartData,
  horizontalBarChartRules, horizontalBarChartStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPHorizontalBarChart } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPHorizontalBarChart')
    //component.loadVariants(horizontalBarChartVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Horizontal Bar Chart')
    component.setAllowTypes(true)
    component.getProperties(horizontalBarChartProperties());
    component.getPropertiesMapping(horizontalBarChartPropertiesMapping());
    component.getInteractions(horizontalBarChartInteractions());
    component.getData(horizontalBarChartData());
    component.getChildProperties(horizontalBarChartChildProperties());
    component.getChildPropertiesMapping(horizontalBarChartChildPropertiesMapping());
    component.getRules(horizontalBarChartRules())
    component.getStyle(horizontalBarChartStyle())
    component.loadStates([
    ]);
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: HORIZONTAL_BAR_CHART }))

    component.setRenderer(hbsRenderer);
  },
};

const HORIZONTAL_BAR_CHART = 'horizontalBarchart'

export { HORIZONTAL_BAR_CHART };