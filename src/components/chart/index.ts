import { chartPropertiesMapping, chartProperties, chartVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(chartVariants());
    component.getParentProperties(chartProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(chartProperties());
    component.getPropertiesMapping(chartPropertiesMapping());

    component.loadStates([
      'const [chartData, setChartData] = useState([]);'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const CHART = 'chart'

export { CHART };