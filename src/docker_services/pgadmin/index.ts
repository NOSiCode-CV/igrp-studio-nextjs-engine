import { DockerService, defaultRenderer } from '../index';
import { pgadminProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(PGADMIN);
    dockerService.loadLabel("pgAdmin");
    dockerService.getProperties(pgadminProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const PGADMIN = 'pgadmin'

export { PGADMIN };