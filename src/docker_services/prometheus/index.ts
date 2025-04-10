import { DockerService, defaultRenderer } from '../index';
import { prometheusProperties, prometheusVolumes } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(PROMETHEUS);
    dockerService.loadLabel("Prometheus");
    dockerService.getProperties(prometheusProperties());
    dockerService.loadVolumes(prometheusVolumes());
    dockerService.setRenderer(defaultRenderer);
  }

};

const PROMETHEUS = 'prometheus'

export { PROMETHEUS };