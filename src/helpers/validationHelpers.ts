import { removeQuotes } from '../utils/helpers';

export function isValidation (field: any) {
  return field.validation || field.config.required? true : false;
}

export function yupValidation (c: any) {
  const stringTypes = ['text', 'tel', 'select']
  if (c.validation || c.config.required) {
    const type = stringTypes.includes(c.config.type) ? 'string' : c.config.type;
    let validation = c.validation;
    // let yupValidation = type ==='select'? `yup.string()` : `yup.${type}()`;
    let yupValidation = `yup.${type}()`;

    if (c.config.required) {
      yupValidation += `.required('${validation && validation.requiredMessage? validation.requiredMessage: 'This field is required'}')`;
    }
    if (validation) {
      if (validation.minLeng) {
        yupValidation += `.min(${validation.minLeng}, '${validation.errorMinLeng}')`;
      }
      if (validation.maxLeng) {
        yupValidation += `.max(${validation.maxLeng}, '${validation.errorMaxLeng}')`;
      }
    }
    return removeQuotes(yupValidation)
  } return

}

export function Default() {
  const translations = {
    RecentAppsDropdown: "translations.RecentAppsDropdown",
    ProfileDropdown: "translations.ProfileDropdown"
  }
  return removeQuotes(translations)
}