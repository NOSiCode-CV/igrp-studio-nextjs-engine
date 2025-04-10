import { DockerService, defaultRenderer } from '../index';
import { minioProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(MINIO);
    dockerService.getProperties(minioProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const MINIO = 'minio'

export { MINIO };