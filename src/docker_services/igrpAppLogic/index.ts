import { DockerService, defaultRenderer } from '../index';
import { igrpAppLogicProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(IGRP_APP_LOGIC);
    dockerService.loadLabel("iGRP App Logic")
    dockerService.getProperties(igrpAppLogicProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const IGRP_APP_LOGIC = 'igrpAppLogic'

export { IGRP_APP_LOGIC };