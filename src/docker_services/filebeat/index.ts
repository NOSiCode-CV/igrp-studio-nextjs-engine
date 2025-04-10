import { DockerService, defaultRenderer } from '../index';
import { filebeatProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(FILEBEAT);
    dockerService.loadLabel("Filebeat");
    dockerService.getProperties(filebeatProperties);
    dockerService.setRenderer(defaultRenderer);
  }

};

const FILEBEAT = 'filebeat'

export { FILEBEAT };