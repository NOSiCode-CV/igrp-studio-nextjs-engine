import { DockerService, defaultRenderer } from '../index';
import { igrpUiProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(IGRP_UI);
    dockerService.loadLabel("iGRP UI App");
    dockerService.getProperties(igrpUiProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const IGRP_UI = 'igrpUi'

export { IGRP_UI };