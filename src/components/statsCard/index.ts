import {
  statsCardPropertiesMapping,
  statsCardProperties,
  statsCardVariants,
  statsCardChildProperties,
  statsCardChildPropertiesMapping,
  statsCardInteractions,
  statsCardInteractionsMapping,
  statsCardData,
  statsCardRules,
  statsCardStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPStatsCard } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPStatsCard')
    component.loadVariants(statsCardVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Stats Card')
    component.getInteractions(statsCardInteractions());
    component.getInteractionsMapping(statsCardInteractionsMapping());
    component.getProperties(statsCardProperties());
    component.getPropertiesMapping(statsCardPropertiesMapping());
    component.getChildProperties(statsCardChildProperties());
    component.getChildPropertiesMapping(statsCardChildPropertiesMapping());
    component.getData(statsCardData());
    component.getRules(statsCardRules())
    component.getStyle(statsCardStyle())

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const STATS_CARD = 'statsCard'

export { STATS_CARD };
