import { DockerService, defaultRenderer } from '../index';
import { igrpApplicationCenterProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(IGRP_APPLICATION_CENTER);
    dockerService.loadLabel("iGRP UI App");
    dockerService.getProperties(igrpApplicationCenterProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const IGRP_APPLICATION_CENTER = 'igrpApplicationCenter'

export { IGRP_APPLICATION_CENTER };