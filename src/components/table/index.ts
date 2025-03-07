import {
  tablePropertiesMapping,
  tableProperties,
  tableVariants,
  tableChildProperties,
  tableChildPropertiesMapping,
} from './properties';
import { Component, defaultRenderer, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(tableVariants());
    component.loadIcon('Table')
    component.loadGroup('dataDisplay')
    component.loadLabel('Table')
    component.getProperties(tableProperties());
    component.getPropertiesMapping(tablePropertiesMapping());
    component.getChildProperties(tableChildProperties());
    component.getChildPropertiesMapping(tableChildPropertiesMapping());

    component.loadStates([
      'const [data, setData] = useState([]);'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE = 'table'

export { TABLE };