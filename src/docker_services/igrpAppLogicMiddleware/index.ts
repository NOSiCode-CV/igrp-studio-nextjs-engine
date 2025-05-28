import { DockerService, defaultRenderer } from '../index';
import { igrpAppLogicMiddlewareProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(IGRP_APP_LOGIC_MIDDLEWARE);
    dockerService.loadLabel("iGRP App Logic Middleware API");
    dockerService.getProperties(igrpAppLogicMiddlewareProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const IGRP_APP_LOGIC_MIDDLEWARE = 'igrpAppLogicMiddleware'

export { IGRP_APP_LOGIC_MIDDLEWARE };