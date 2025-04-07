import { DockerService, defaultRenderer } from '../index';
import { oracleProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(ORACLE);
    dockerService.getProperties(oracleProperties);
    dockerService.setRenderer(defaultRenderer);
  }

};

const ORACLE = 'oracle'

export { ORACLE };