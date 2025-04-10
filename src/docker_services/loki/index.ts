import { DockerService, defaultRenderer } from '../index';
import { lokiProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(LOKI);
    dockerService.loadLabel("Loki");
    dockerService.getProperties(lokiProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const LOKI = 'loki'

export { LOKI };