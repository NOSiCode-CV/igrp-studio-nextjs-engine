import {
  areaChartPropertiesMapping,
  areaChartProperties,
  areaChartChildProperties,
  areaChartChildPropertiesMapping, areaChartInteractions, areaChartData, areaChartStyle, areaChartRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      `import { IGRPAreaConfig } from '@igrp/igrp-framework-react-design-system';`
    ]);

    //component.loadVariants(areaChartVariants());
    component.loadComponentClass('IGRPAreaChart')
    component.loadGroup('dataDisplay')
    component.loadLabel('Area Chart')
    component.setAllowTypes(true)
    component.getProperties(areaChartProperties());
    component.getPropertiesMapping(areaChartPropertiesMapping());
    component.getInteractions(areaChartInteractions());
    component.getData(areaChartData());
    component.getChildProperties(areaChartChildProperties());
    component.getChildPropertiesMapping(areaChartChildPropertiesMapping());
    component.getStyle(areaChartStyle())
    component.getRules(areaChartRules())
    component.loadStates([
    ]);
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: AREACHART }))

    component.setRenderer(hbsRenderer);
  },
};

const AREACHART = 'areachart'

export { AREACHART };