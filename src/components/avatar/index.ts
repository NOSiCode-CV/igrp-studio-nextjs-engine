import {
  avatarPropertiesMapping,
  avatarProperties,
  avatarVariants,
  avatarChildProperties,
  avatarChildPropertiesMapping, avatarRules, avatarStyle,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPAvatar')
    component.loadVariants(avatarVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Avatar')
    component.getProperties(avatarProperties());
    component.getPropertiesMapping(avatarPropertiesMapping());
    component.getChildProperties(avatarChildProperties());
    component.getChildPropertiesMapping(avatarChildPropertiesMapping());
    component.getRules(avatarRules())
    component.getStyle(avatarStyle())
    component.loadStates([
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const AVATAR = 'avatar'

export { AVATAR };