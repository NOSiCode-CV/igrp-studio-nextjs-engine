import {
  verticalBarChartPropertiesMapping,
  verticalBarChartProperties,
  verticalBarChartChildProperties,
  verticalBarChartChildPropertiesMapping,
  verticalBarChartInteractions,
  verticalBarChartData,
  verticalBarChartStyle,
  verticalBarChartRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPVerticalBarChart')
    //component.loadVariants(verticalBarChartVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Vertical Bar Chart')
    component.setAllowTypes(true)
    component.getProperties(verticalBarChartProperties());
    component.getPropertiesMapping(verticalBarChartPropertiesMapping());
    component.getInteractions(verticalBarChartInteractions());
    component.getChildProperties(verticalBarChartChildProperties());
    component.getChildPropertiesMapping(verticalBarChartChildPropertiesMapping());
    component.getData(verticalBarChartData());
    component.getStyle(verticalBarChartStyle())
    component.getRules(verticalBarChartRules())
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: VERTICAL_BAR_CHART }))

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const VERTICAL_BAR_CHART = 'verticalBarchart'

export { VERTICAL_BAR_CHART };