import { DockerService, defaultRenderer } from '../index';
import { elasticsearchProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(ELASTICSEARCH);
    dockerService.loadLabel("Elastic Search");
    dockerService.getProperties(elasticsearchProperties);
    dockerService.setRenderer(defaultRenderer);
  }

};

const ELASTICSEARCH = 'elasticsearch'

export { ELASTICSEARCH };