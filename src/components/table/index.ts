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
      'import { IGRPTable } from "@igrp/igrp-framework-react-design-system";',
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
      'const [contentTable{{id}}, setContentTable{{id}}] = useState([]);'
    ]);

    component.loadServiceMethods([
      '{{id}}: { populate: () => Promise<{ rows: any[] }>; };',
    ]);

    component.loadCodeBlock(
    `
    useEffect(() => {
      updateTable()
    },[])

    const updateTable = async () => {
      if (service.{{id}} && service.{{id}}.populate) {
        const fakeData = (await service.{{id}}.populate()).rows
        setContentTable{{id}}([...fakeData])
      }
    }
    `
    )

    component.setRenderer(hbsRenderer);
  },
};

const TABLE = 'table'

export { TABLE };