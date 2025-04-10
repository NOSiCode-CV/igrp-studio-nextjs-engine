import { DockerService, defaultRenderer } from '../index';
import { promtailProperties, promtailVolumes } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(PROMTAIL);
    dockerService.loadLabel("Promtail");
    dockerService.getProperties(promtailProperties());
    dockerService.loadVolumes(promtailVolumes())
    dockerService.setRenderer(defaultRenderer);
  }

};

const PROMTAIL = 'promtail'

export { PROMTAIL };