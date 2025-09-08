import { DockerService, defaultRenderer } from '../index';
import { nginxProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(NGINX);
    dockerService.loadLabel("nginx");
    dockerService.getProperties(nginxProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const NGINX = 'nginx'

export { NGINX };