import { DockerService, defaultRenderer } from '../index';
import { eurekaProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(EUREKA);
    dockerService.loadLabel("Eureka");
    dockerService.getProperties(eurekaProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const EUREKA = 'eureka'

export { EUREKA };