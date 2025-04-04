import { WorkspaceService } from '../interfaces/types';
import { getDockerService } from '../docker_services';
import { renderServiceTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from './constants';

export const renderService = function (config: WorkspaceService): string {

  if (!config.name) return '';

  const dockerService = getDockerService(config.name)

  if(!dockerService) return renderServiceTemplate(TEMPLATES.UNREGISTERED_SERVICE, { name: config.name })
  
  return dockerService.render(config.properties, dockerService)

}