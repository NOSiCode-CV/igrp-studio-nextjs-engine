import {
  videoEmbedPropertiesMapping,
  videoEmbedProperties,
  videoEmbedVariants,
  videoEmbedChildProperties,
  videoEmbedChildPropertiesMapping, videoEmbedRules, videoEmbedStyle, videoEmbedInteractions,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPVideoEmbed')
    component.loadVariants(videoEmbedVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Video Embed')
    component.getProperties(videoEmbedProperties());
    component.getPropertiesMapping(videoEmbedPropertiesMapping());
    component.getChildProperties(videoEmbedChildProperties());
    component.getChildPropertiesMapping(videoEmbedChildPropertiesMapping());
    component.getInteractions(videoEmbedInteractions());
    component.getRules(videoEmbedRules())
    component.getStyle(videoEmbedStyle())
    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const VIDEO_EMBED = 'videoEmbed'

export { VIDEO_EMBED };