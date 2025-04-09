import { Volume, WorkspaceService } from '../../interfaces/types';
import { DockerService } from '../../docker_services/index';
import { renderServiceTemplate } from '../common/renderTemplate';
import path from 'path';
import { saveToFileSync } from '../common/saveToFile';

export const generateVolumeFiles = (service: WorkspaceService, volume: Volume, basePath: string, registry: Record<string, DockerService>) => {

  const serviceElement = registry[service.name]

  if (Object.entries(serviceElement.volumes).length > 0) {
    const file = serviceElement.volumes[volume.path]
    if(!file) return
    const template = renderServiceTemplate(file.template, { ...file.context, port: service.properties.ports[0] });
    const outputPath = path.join(basePath, volume.name);
    saveToFileSync(template, outputPath, false);
  }

}