import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableDateCellProperties() {
  return {
    date: {type: 'string', required: true, default: '01/01/2025'},
    dateFormat: {type: 'string', required: false, default: 'dd/MM/YYYY', enum: ['dd/MM/yyyy', 'dd-MM-YYYY', 'yyyy/MM/dd', 'yyyy-MM-dd']},
    ...commonProperties(),
  };
}

export function tableDateCellPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function tableDateCellChildProperties() {
  return {

  };
}

export function tableDateCellChildPropertiesMapping() {
  return {

  };
}


export function tableDateCellVariants() {
  return {
    default: ''
  };
}
