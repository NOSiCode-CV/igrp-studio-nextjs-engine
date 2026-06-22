import {
  userAvatarProperties,
  userAvatarPropertiesMapping,
  userAvatarVariants,
  userAvatarChildProperties,
  userAvatarChildPropertiesMapping,
  userAvatarStyle,
  userAvatarRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPUserAvatar');
    component.loadVariants(userAvatarVariants());
    component.loadGroup('dataDisplay');
    component.loadLabel('User Avatar');
    component.getProperties(userAvatarProperties());
    component.getPropertiesMapping(userAvatarPropertiesMapping());
    component.getChildProperties(userAvatarChildProperties());
    component.getChildPropertiesMapping(userAvatarChildPropertiesMapping());
    component.getStyle(userAvatarStyle());
    component.getRules(userAvatarRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const USER_AVATAR = 'userAvatar';
export { USER_AVATAR };
