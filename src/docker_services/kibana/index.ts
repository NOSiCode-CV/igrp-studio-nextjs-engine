import { DockerService, defaultRenderer } from '../index';
import { kibanaProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(KIBANA);
    dockerService.loadLabel("Kibana");
    dockerService.getProperties(kibanaProperties);
    dockerService.setRenderer(defaultRenderer);
  }

};

const KIBANA = 'kibana'

export { KIBANA };