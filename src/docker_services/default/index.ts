import { DockerService, customRenderer, defaultRenderer, liquidRenderer } from '../index';
import { DockerServiceRegisterConfig } from '../../interfaces/types';

export default {
  register(dockerService: DockerService, config: DockerServiceRegisterConfig) {

    dockerService.loadDefaultName(config.name);

    if(config.custom !== undefined)
      dockerService.loadCustom(config.custom);

    dockerService.loadTemplatePath(config.templatePath);
    dockerService.getProperties(config.properties);
    dockerService.getPropertiesMapping(config.propertiesMapping);
    dockerService.setRenderer(config.renderer === 'default' ? defaultRenderer : config.renderer === 'liquid' ? liquidRenderer : customRenderer);

  }
};