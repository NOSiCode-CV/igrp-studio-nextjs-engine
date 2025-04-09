import { DockerService, defaultRenderer } from '../index';
import { tempoProperties, tempoVolumes } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(TEMPO);
    dockerService.loadLabel("Tempo");
    dockerService.getProperties(tempoProperties);
    dockerService.loadVolumes(tempoVolumes())
    dockerService.setRenderer(defaultRenderer);
  }

};

const TEMPO = 'tempo'

export { TEMPO };