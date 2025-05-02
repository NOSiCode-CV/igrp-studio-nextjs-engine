import { DockerService, defaultRenderer } from '../index';
import { minioProperties, minioVolumes } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(MINIO);
    dockerService.loadLabel("minIO");
    dockerService.getProperties(minioProperties());
    dockerService.loadVolumes(minioVolumes());
    dockerService.setRenderer(defaultRenderer);
  }

};

const MINIO = 'minio'

export { MINIO };