import { DockerService, defaultRenderer } from '../index';
import { wso2isProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(WSO2IS);
    dockerService.getProperties(wso2isProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const WSO2IS = 'wso2is'

export { WSO2IS };