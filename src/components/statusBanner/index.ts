import {
  statusBannerPropertiesMapping,
  statusBannerProperties,
  statusBannerVariants,
  statusBannerChildProperties,
  statusBannerChildPropertiesMapping, statusBannerInteractions, statusBannerInteractionsMapping, statusBannerStyle, statusBannerRules,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPStatusBanner')
    component.loadVariants(statusBannerVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Status Banner')
    component.getInteractions(statusBannerInteractions());
    component.getInteractionsMapping(statusBannerInteractionsMapping());
    component.getProperties(statusBannerProperties());
    component.getPropertiesMapping(statusBannerPropertiesMapping());
    component.getChildProperties(statusBannerChildProperties());
    component.getChildPropertiesMapping(statusBannerChildPropertiesMapping());

    component.loadStates([
    ]);
    component.getStyle(statusBannerStyle())
    component.getRules(statusBannerRules())
    component.setRenderer(hbsRenderer);
  },
};

const STATUS_BANNER = 'statusBanner'

export { STATUS_BANNER };
