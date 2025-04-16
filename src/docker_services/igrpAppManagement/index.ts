import { DockerService, defaultRenderer } from '../index';
import { igrpAppManagementProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(IGRP_APP_MANAGEMENT);
    dockerService.loadLabel("iGRP App Management API");
    dockerService.getProperties(igrpAppManagementProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const IGRP_APP_MANAGEMENT = 'igrpAppManagement'

export { IGRP_APP_MANAGEMENT };