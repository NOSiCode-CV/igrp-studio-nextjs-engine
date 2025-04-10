import { DockerService, defaultRenderer } from '../index';
import { logstashProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(LOGSTASH);
    dockerService.loadLabel("Logstash");
    dockerService.getProperties(logstashProperties);
    dockerService.setRenderer(defaultRenderer);
  }

};

const LOGSTASH = 'logstash'

export { LOGSTASH };