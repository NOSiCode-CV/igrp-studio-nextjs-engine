import { Volume, WorkspaceProjectsConfig } from '../interfaces/types';

export function extractVolumes(config: WorkspaceProjectsConfig): Volume[] {

  let volumes: Set<Volume> = new Set<Volume>()

  config.projects.forEach((proj) => {
    volumes.add(proj.dataSource.volume)
  })

  return Array.from(volumes)

}
