import { DockerService, defaultRenderer } from '../index';
import { igrpAccessManagementProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(IGRP_ACCESS_MANAGEMENT);
    dockerService.loadLabel("iGRP Access Management API");
    dockerService.getProperties(igrpAccessManagementProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const IGRP_ACCESS_MANAGEMENT = 'igrpAccessManagement'

export { IGRP_ACCESS_MANAGEMENT };