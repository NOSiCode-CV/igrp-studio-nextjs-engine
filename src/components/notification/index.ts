import {
  notificationProperties,
  notificationPropertiesMapping,
  notificationVariants,
  notificationChildProperties,
  notificationChildPropertiesMapping,
  notificationStyle,
  notificationRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPNotification');
    component.loadVariants(notificationVariants());
    component.loadGroup('feedback');
    component.loadLabel('Notification');
    component.getProperties(notificationProperties());
    component.getPropertiesMapping(notificationPropertiesMapping());
    component.getChildProperties(notificationChildProperties());
    component.getChildPropertiesMapping(notificationChildPropertiesMapping());
    component.getStyle(notificationStyle());
    component.getRules(notificationRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const NOTIFICATION = 'notification';
export { NOTIFICATION };
