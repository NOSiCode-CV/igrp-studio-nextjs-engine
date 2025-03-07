import { carouselPropertiesMapping, carouselProperties, carouselVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Carousel, CarouselItem } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(carouselVariants());
    component.getParentProperties(carouselProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(carouselProperties());
    component.getPropertiesMapping(carouselPropertiesMapping());

    component.loadStates([
      'const [currentIndex, setCurrentIndex] = useState(0);'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const CAROUSEL = 'carousel'

export { CAROUSEL };