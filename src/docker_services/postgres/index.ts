import { DockerService, defaultRenderer } from '../index';
import { postgresProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(POSTGRES);
    dockerService.getProperties(postgresProperties);
    dockerService.setRenderer(defaultRenderer);
  }

};

const POSTGRES = 'postgres'

export { POSTGRES };