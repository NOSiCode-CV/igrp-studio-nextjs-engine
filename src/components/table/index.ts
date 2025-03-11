import {
  tablePropertiesMapping,
  tableProperties,
  tableVariants,
  tableChildProperties,
  tableChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { INPUT } from '../input';
import { BUTTON } from '../button';
import { DATE_PICKER } from '../datePicker';
import { DROPDOWN } from '../dropdown';

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

    component.loadChildrenTypes([
      INPUT, DATE_PICKER, BUTTON, DROPDOWN
    ]);

    component.loadStates([
      'const [contentTable{{id}}, setContentTable{{id}}] = useState([]);'
    ]);

    component.loadServiceMethods([
      '{{id}}: { populate: () => Promise<{ rows: any[] }>; };',
    ]);

    component.loadCodeBlock(
  `
  useEffect(() => {
    updateTable{{id}}()
  },[])

  const updateTable{{id}} = async () => {
    if (service.{{id}} && service.{{id}}.populate) {
      const data = (await service.{{id}}.populate()).rows
      setContentTable{{id}}([...data])
    }
  }
  `
    )

    component.setRenderer(hbsRenderer);
  },
};

const TABLE = 'table'

export { TABLE };