import { DockerService, defaultRenderer } from '../index';
import { metricbeatProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(METRICBEAT);
    dockerService.loadLabel("Metricbeat");
    dockerService.getProperties(metricbeatProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const METRICBEAT = 'metricbeat'

export { METRICBEAT };