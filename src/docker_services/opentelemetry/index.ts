import { DockerService, defaultRenderer } from '../index';
import { opentelemetryProperties, opentelemetryVolumes } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(OPENTELEMETRY);
    dockerService.loadLabel("OpenTelemetry Collector");
    dockerService.getProperties(opentelemetryProperties());
    dockerService.loadVolumes(opentelemetryVolumes())
    dockerService.setRenderer(defaultRenderer);
  }

};

const OPENTELEMETRY = 'opentelemetry'

export { OPENTELEMETRY };