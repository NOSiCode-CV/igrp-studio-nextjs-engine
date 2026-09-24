import {
  statsCardMiniProperties,
  statsCardMiniPropertiesMapping,
  statsCardMiniVariants,
  statsCardMiniChildProperties,
  statsCardMiniChildPropertiesMapping,
  statsCardMiniStyle,
  statsCardMiniRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPStatsCardMini');
    component.loadVariants(statsCardMiniVariants());
    component.loadGroup('dataDisplay');
    component.loadLabel('Stats Card Mini');
    component.getProperties(statsCardMiniProperties());
    component.getPropertiesMapping(statsCardMiniPropertiesMapping());
    component.getChildProperties(statsCardMiniChildProperties());
    component.getChildPropertiesMapping(statsCardMiniChildPropertiesMapping());
    component.getStyle(statsCardMiniStyle());
    component.getRules(statsCardMiniRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const STATS_CARD_MINI = 'statsCardMini';
export { STATS_CARD_MINI };
