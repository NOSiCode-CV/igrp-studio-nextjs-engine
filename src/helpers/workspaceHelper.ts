import { Volume, WorkspaceProjectsConfig } from '../interfaces/types';
import { generateVolumeFiles } from '../modules/workspace/generateVolumeFiles';
import { DockerService } from '../docker_services/index';

export function extractVolumes(config: WorkspaceProjectsConfig, basePath: string, registry: Record<string, DockerService>): Volume[] {

  let volumes: Set<Volume> = new Set<Volume>()

  config.services.forEach((serv) => {
    if(serv.properties.volumes)
      serv.properties.volumes.forEach((vol) => {
        if(vol.driver !== "none")
          volumes.add(vol);
        else
          generateVolumeFiles(serv, vol, basePath, registry)
      });
  })

  return Array.from(volumes)

}

/**
 * Indents each line of a block by the given number of spaces.
 * @param spaces - Number of spaces to indent.
 * @param options - Handlebars options object containing the block content.
 * @returns Indented string.
 */
export function indent(this: any, spaces: number, options: { fn: (context: any) => string }): string {
  const pad = ' '.repeat(spaces);
  return options.fn(this)
    .split('\n')
    .map(line => line ? pad + line : line)
    .join('\n');
}

/**
 * Normalizes a string to be a valid Docker hostname.
 * - Lowercases the string
 * - Replaces invalid characters with hyphens
 * - Removes leading/trailing hyphens
 * - Trims to 63 characters
 */
export function normalizeHostname(name: string): string {
  // Convert to lowercase
  let normalized = name.toLowerCase();

  // Replace invalid characters with hyphen
  normalized = normalized.replace(/[^a-z0-9-]/g, '-');

  // Remove leading and trailing hyphens
  normalized = normalized.replace(/^-+|-+$/g, '');

  // Ensure max length of 63 characters
  if (normalized.length > 63) {
    normalized = normalized.substring(0, 63);
  }

  // Edge case: If empty after sanitization, fallback
  if (normalized.length === 0) {
    normalized = 'host';
  }

  return normalized;
}
