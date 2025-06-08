import {
  baseInteraction, baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { buttonProperties } from '../button/properties';

export function alertProperties() {
  return {
    variant: { type: 'string', required: false, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    color: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    linkLabel: { type: 'string', required: false },
    linkUrl: { type: 'string', required: false },
    descriptionClassName: { type: 'string', required: false },
    showLink: { type: 'boolean', required: false, default: false },
    textColored: { type: 'boolean', required: false, default: false },
    borderColored: { type: 'boolean', required: false, default: false },
    bgColored: { type: 'boolean', required: false, default: false },
    iconProperties: {
      type: 'object',
      properties: {
        icon: { type: 'string', required: false, default: 'ArrowRight', 'x-ui-widget': 'icon' },
        linkIcon: { type: 'string', required: false, default: 'ArrowRight', 'x-ui-widget': 'icon' },
        iconClassName: { type: 'string', required: false },
      },
      required: false
    },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function alertPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function alertChildProperties() {
  return {};
}

export function alertChildPropertiesMapping() {
  return {};
}

export function alertVariants() {
  return {};
}

export function alertInteractions() {
  return {
  };
}

export function alertInteractionsMapping() {
  return {

  };
}

export function alertStyle() {
  return {
    ...baseStyle()
  }
}

export function alertRules() {
  return {
    ...baseRules()
  }
}
