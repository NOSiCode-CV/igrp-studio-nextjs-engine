import {
  baseInteraction, baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function modalDialogProperties() {
  return {
    name: { type: 'string', required: true, default: 'modalDialog' },
    title: { type: 'string', required: false, default: 'Modal Dialog' },
    description: { type: 'string', required: false, default: 'A modal dialog' },
    type: { type: 'string', required: false, enum: ['default', 'alert', 'confirm', 'delete', 'info', 'success', 'warning', 'modal'], default: 'default' },
    size: { type: 'string', required: false, enum: ['sm', 'md', 'lg', 'xl', 'full'], default: 'md' },
    headerClassName: { type: 'string', required: false },
    showTrigger: { type: 'boolean', required: false },
    showFooter: { type: 'boolean', required: false, default: true },
    triggerText: { type: 'string', required: false, default: 'Open Dialog' },
    triggerButton: { type: 'string', required: false },
    triggerVariant: { type: 'string', required: false, enum: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'], default: 'outline' },
    ...iconProperties(),
    footerClassName: { type: 'string', required: false },
    open: { type: 'boolean', required: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function modalDialogPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function modalDialogChildProperties() {
  return {};
}

export function modalDialogChildPropertiesMapping() {
  return {};
}

export function modalDialogVariants() {
  return {};
}

export function modalDialogInteractions() {
  return {
    onOpenChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_OPEN), required: false },
  };
}

export function modalDialogInteractionsMapping() {
  return {

  };
}

export function modalDialogStyle() {
  return {
    ...baseStyle()
  }
}

export function modalDialogRules() {
  return {
    ...baseRules()
  }
}
