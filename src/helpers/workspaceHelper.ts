import { Volume, WorkspaceProjectsConfig } from '../interfaces/types';
import { HelperOptions } from 'handlebars';

export function extractVolumes(config: WorkspaceProjectsConfig): Volume[] {

  let volumes: Set<Volume> = new Set<Volume>()

  config.projects.forEach((proj) => {
    if(proj.dataSource) volumes.add(proj.dataSource.volumes)
  })

  volumes.add(config.platform.auth.volumes)
  volumes.add(config.platform.file.volumes)

  config.services.forEach((serv) => {
    if(serv.properties.volumes)
      serv.properties.volumes.forEach((vol) => volumes.add(vol));
  })

  return Array.from(volumes)

}

/**
 * Indents each line of a block by the given number of spaces.
 * @param spaces - Number of spaces to indent.
 * @param options - Handlebars options object containing the block content.
 * @returns Indented string.
 */
export function indent(this: any, spaces: number, options: HelperOptions): string {
  const pad = ' '.repeat(spaces);
  return options.fn(this)
    .split('\n')
    .map(line => line ? pad + line : line)
    .join('\n');
}
