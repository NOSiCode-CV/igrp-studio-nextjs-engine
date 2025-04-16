import { DockerService, defaultRenderer } from '../index';
import { igrpUserManagementProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(IGRP_USER_MANAGEMENT);
    dockerService.loadLabel("iGRP User Management API");
    dockerService.getProperties(igrpUserManagementProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const IGRP_USER_MANAGEMENT = 'igrpUserManagement'

export { IGRP_USER_MANAGEMENT };