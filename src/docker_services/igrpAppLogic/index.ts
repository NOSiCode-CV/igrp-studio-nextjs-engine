import { DockerService, defaultRenderer } from '../index';
import { igrpAppLogicProperties, igrpAppLogicVolumes } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(IGRP_APP_LOGIC);
    dockerService.loadLabel("iGRP App Logic")
    dockerService.getProperties(igrpAppLogicProperties());
    dockerService.loadVolumes(igrpAppLogicVolumes());
    dockerService.setRenderer(defaultRenderer);
  }

};

const IGRP_APP_LOGIC = 'igrpAppLogic'

export { IGRP_APP_LOGIC };