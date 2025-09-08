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
    color: { type: 'string', required: false, default: 'info', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    variant: { type: 'string', required: false, default: 'soft', enum: ['solid', 'outline', 'soft'] },
    linkLabel: { type: 'string', required: false },
    linkUrl: { type: 'string', required: false, 'x-ui-widget': 'uri' },
    showLink: { type: 'boolean', required: false, default: false },
    textColored: { type: 'boolean', required: false, default: true },
    borderColored: { type: 'boolean', required: false, default: true },
    bgColored: { type: 'boolean', required: false, default: true },
    iconProperties: {
      type: 'object',
      properties: {
        showIcon: { type: 'boolean', required: true, default: true },
        iconName: { type: 'string', required: false, default: 'ArrowRight', 'x-ui-widget': 'icon' },
        iconPlacement: { type: 'string', required: true, default: 'end', enum: ['start', 'end' ] },
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
