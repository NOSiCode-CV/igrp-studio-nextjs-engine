import { DockerService, defaultRenderer } from '../index';
import { mysqlProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(MYSQL);
    dockerService.getProperties(mysqlProperties);
    dockerService.setRenderer(defaultRenderer);
  }

};

const MYSQL = 'mysql'

export { MYSQL };