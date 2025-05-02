import { DockerService, defaultRenderer } from '../index';
import { keycloakProperties, keycloakVolumes } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(KEYCLOAK);
    dockerService.loadLabel("Keycloak Server");
    dockerService.getProperties(keycloakProperties());
    dockerService.loadVolumes(keycloakVolumes());
    dockerService.setRenderer(defaultRenderer);
  }

};

const KEYCLOAK = 'keycloak'

export { KEYCLOAK };