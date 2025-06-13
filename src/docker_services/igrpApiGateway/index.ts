import { DockerService, defaultRenderer } from '../index';
import { igrpApiGatewayProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(IGRP_API_GATEWAY);
    dockerService.loadLabel("iGRP API Gateway API");
    dockerService.getProperties(igrpApiGatewayProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const IGRP_API_GATEWAY = 'igrpApiGateway'

export { IGRP_API_GATEWAY };