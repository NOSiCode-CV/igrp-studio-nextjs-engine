import {
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';

export function tableTooltipCellProperties() {
  return {
    ...cellProperties('Tooltip Column'),
    ...dataCommonProperties(),
    text: { type: 'string', required: true },
    maxChars: { type: 'number', required: false },
    maxTriggerWidth: { type: 'string', required: false },
    side: { type: 'string', required: false, default: 'top', enum: ['top', 'bottom', 'left', 'right'] },
    align: { type: 'string', required: false, default: 'start', enum: ['start', 'center', 'end'] },
    ...commonProperties(),
  };
}

export function tableTooltipCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableTooltipCellChildProperties() {
  return {

  };
}

export function tableTooltipCellChildPropertiesMapping() {
  return {

  };
}


export function tableTooltipCellVariants() {
  return {
    default: ''
  };
}
