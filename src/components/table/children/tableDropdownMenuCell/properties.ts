import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import {
  actionProperties,
  actionPropertiesMapping,
} from '../tableColumns/properties';

export function tableDropdownMenuCellProperties() {
  return {
    ...actionProperties('Dropdown Actions'),
    ...commonProperties(),
  };
}

export function tableDropdownMenuCellPropertiesMapping() {
  return {
    ...actionPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableDropdownMenuCellChildProperties() {
  return {

  };
}

export function tableDropdownMenuCellChildPropertiesMapping() {
  return {

  };
}


export function tableDropdownMenuCellVariants() {
  return {
    default: ''
  };
}
