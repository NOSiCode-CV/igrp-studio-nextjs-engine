import { tablePropertiesMapping, tableProperties, tableVariants } from './properties';
import { Component, defaultRenderer, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(tableVariants());
    component.getParentProperties(tableProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(tableProperties());
    component.getPropertiesMapping(tablePropertiesMapping());

    component.loadStates([
      'const [data, setData] = useState([]);'
    ]);

    component.setRenderer(hbsRenderer({
      componentName: 'table',
      properties: component.properties,
      id: ''
    }));
  },
};
