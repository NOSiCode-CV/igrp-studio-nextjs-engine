import { DockerService, defaultRenderer } from '../index';
import { apmserverProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(APMSERVER);
    dockerService.loadLabel("Elastic APM Server");
    dockerService.getProperties(apmserverProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const APMSERVER = 'apmserver'

export { APMSERVER };