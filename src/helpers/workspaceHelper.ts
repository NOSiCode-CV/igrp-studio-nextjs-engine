import { Volume, WorkspaceProjectsConfig } from '../interfaces/types';

export function extractVolumes(config: WorkspaceProjectsConfig): Volume[] {

  let volumes: Set<Volume> = new Set<Volume>()

  config.projects.forEach((proj) => {
    if(proj.dataSource) volumes.add(proj.dataSource.volumes)
  })

  volumes.add(config.platform.auth.volumes)
  volumes.add(config.platform.file.volumes)

  return Array.from(volumes)

}
