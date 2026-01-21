import { DockerService, defaultRenderer } from '../index';
import { igrpProcessManagementApiProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(IGRP_PROCESS_MANAGEMENT_API);
    dockerService.loadLabel("iGRP Process Management API");
    dockerService.getProperties(igrpProcessManagementApiProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const IGRP_PROCESS_MANAGEMENT_API = 'igrpProcessManagementApi'

export { IGRP_PROCESS_MANAGEMENT_API };