import { DockerService, defaultRenderer } from '../index';
import { fleetserverProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(FLEETSERVER);
    dockerService.loadLabel("Elastic Fleet Server");
    dockerService.getProperties(fleetserverProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const FLEETSERVER = 'fleetserver'

export { FLEETSERVER };