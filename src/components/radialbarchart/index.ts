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
import { Component, liquidRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      `import { IGRPBarConfig } from '@igrp/igrp-framework-react-design-system';`
    ]);

    component.loadComponentClass('IGRPRadialBarChart')
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
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: RADIAL_BAR_CHART }))

    component.loadStates([
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const RADIAL_BAR_CHART = 'radialBarchart'

export { RADIAL_BAR_CHART };