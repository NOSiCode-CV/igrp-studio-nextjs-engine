import {
  classProperties,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';

export function tableDateCellProperties() {
  return {
    ...cellProperties('Date Column'),
    ...dataCommonProperties(),
    date: {type: 'string', required: true, default: '01/01/2025'},
    /**
     * BCP 47 language tag forwarded verbatim to IGRPDataTableCellDate's
     * `language` prop (used as the locale for Intl.DateTimeFormat).
     */
    language: { type: 'string', required: false, 'x-meta': { label: 'Locale (BCP 47)' } },
    /**
     * Intl.DateTimeFormatOptions bundle. Mirrors the `iconProperties`
     * pattern — Studio authors set individual sub-keys under
     * `properties.dateOptions.<key>` and the engine emits the whole
     * object as `dateOptions={{ … }}` on the DS component. Only the
     * commonly used keys are enumerated below for discoverability;
     * any additional Intl.DateTimeFormatOptions key still round-trips
     * because the layout schema doesn't deep-validate nested property
     * objects.
     */
    dateOptions: {
      type: 'object',
      properties: {
        year: { type: 'string', required: false, enum: ['numeric', '2-digit'] },
        month: { type: 'string', required: false, enum: ['numeric', '2-digit', 'long', 'short', 'narrow'] },
        day: { type: 'string', required: false, enum: ['numeric', '2-digit'] },
        weekday: { type: 'string', required: false, enum: ['long', 'short', 'narrow'] },
        hour: { type: 'string', required: false, enum: ['numeric', '2-digit'] },
        minute: { type: 'string', required: false, enum: ['numeric', '2-digit'] },
        second: { type: 'string', required: false, enum: ['numeric', '2-digit'] },
        hour12: { type: 'boolean', required: false },
        hourCycle: { type: 'string', required: false, enum: ['h11', 'h12', 'h23', 'h24'] },
        dayPeriod: { type: 'string', required: false, enum: ['narrow', 'short', 'long'] },
        era: { type: 'string', required: false, enum: ['long', 'short', 'narrow'] },
        timeZone: { type: 'string', required: false },
        timeZoneName: { type: 'string', required: false, enum: ['long', 'short', 'longOffset', 'shortOffset', 'longGeneric', 'shortGeneric'] },
        calendar: { type: 'string', required: false },
        numberingSystem: { type: 'string', required: false },
        formatMatcher: { type: 'string', required: false, enum: ['basic', 'best fit'] },
        fractionalSecondDigits: { type: 'number', required: false, enum: [0, 1, 2, 3] },
      },
    },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function tableDateCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
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
