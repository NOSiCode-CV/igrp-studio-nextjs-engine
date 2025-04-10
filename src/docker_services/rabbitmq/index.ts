import { DockerService, defaultRenderer } from '../index';
import { rabbitmqProperties } from './properties';

export default {

  register(dockerService: DockerService) {
    dockerService.loadDefaultName(RABBITMQ);
    dockerService.loadLabel("RabbitMQ Server");
    dockerService.getProperties(rabbitmqProperties());
    dockerService.setRenderer(defaultRenderer);
  }

};

const RABBITMQ = 'rabbitmq'

export { RABBITMQ };