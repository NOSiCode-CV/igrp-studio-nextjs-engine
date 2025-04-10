import { DockerService, defaultRenderer } from '../index';
import { redisProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(REDIS);
    dockerService.loadLabel("Redis Server");
    dockerService.getProperties(redisProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const REDIS = 'redis'

export { REDIS };