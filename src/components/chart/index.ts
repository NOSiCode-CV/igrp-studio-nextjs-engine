import {
  chartPropertiesMapping,
  chartProperties,
  chartVariants,
  chartChildProperties,
  chartChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(chartVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Chart')
    component.getProperties(chartProperties());
    component.getPropertiesMapping(chartPropertiesMapping());
    component.getChildProperties(chartChildProperties());
    component.getChildPropertiesMapping(chartChildPropertiesMapping());

    component.loadStates([
      'const [chartData, setChartData] = useState([]);'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const CHART = 'chart'

export { CHART };