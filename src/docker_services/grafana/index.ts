import { DockerService, defaultRenderer } from '../index';
import { grafanaProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(GRAFANA);
    dockerService.loadLabel("Grafana");
    dockerService.getProperties(grafanaProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const GRAFANA = 'grafana'

export { GRAFANA };