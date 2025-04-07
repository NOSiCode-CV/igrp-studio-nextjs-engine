import { Port, RenderContext, Volume, WorkspaceProjectsConfig } from '../../interfaces/types';

export const checkDuplicated = (context: RenderContext<WorkspaceProjectsConfig, WorkspaceProjectsConfig>) => {

  /* ports */

  // Projects
  let ports: Port[] = context.resourceConfig.projects.map((proj) => proj.ports);

  // Platform
  ports.push(
    context.resourceConfig.platform.userManager.ports,
    context.resourceConfig.platform.appManager.ports,
    context.resourceConfig.platform.auth.ports,
    context.resourceConfig.platform.ui.ports,
    ...context.resourceConfig.platform.file.ports
  )

  // Datasources
  ports.push(
    context.resourceConfig.platform.dataSource.ports,
    context.resourceConfig.platform.auth.dataSource.ports,
  )

  // Services

  const servicePorts = context.resourceConfig.services.map((service) => service.properties.ports).flat();

  ports.push(
    ...servicePorts
  )

  const extDuplicates = findDuplicateExternalPorts(ports)
  if (extDuplicates.length > 0) {
    throw new Error(
      `The workspace has the following duplicated external ports in usage: ${[...new Set(extDuplicates)].join(', ')}.`
    );
  }

  const intDuplicates = findDuplicateInternalPorts(ports)
  if (intDuplicates.length > 0) {
    throw new Error(
      `The workspace has the following duplicated internal ports in usage: ${[...new Set(intDuplicates)].join(', ')}.`
    );
  }

  /* container name */

  // Projects
  let containers: string[] =
    context.resourceConfig.projects
      .filter((proj) => proj.containerName !== undefined)
      .map((proj) => proj.containerName!);

  // Platform
  containers.push(
    context.resourceConfig.platform.userManager.containerName,
    context.resourceConfig.platform.appManager.containerName,
    context.resourceConfig.platform.auth.containerName,
    context.resourceConfig.platform.ui.containerName,
    context.resourceConfig.platform.file.containerName
  )

  // Datasources

  if(context.resourceConfig.platform.dataSource.containerName)
    containers.push(context.resourceConfig.platform.dataSource.containerName)

  if(context.resourceConfig.platform.auth.dataSource.containerName)
    containers.push(context.resourceConfig.platform.auth.dataSource.containerName)

  // Services

  const serviceContainers =
    context.resourceConfig.services
      .filter((service) => service.properties.container_name !== undefined)
      .map((service) => service.properties.container_name!).flat();

  containers.push(
    ...serviceContainers
  )

  const containerDuplicates = findDuplicateNames(containers)
  if (containerDuplicates.length > 0) {
    throw new Error(
      `The workspace has the following duplicated container names: ${[...new Set(containerDuplicates)].join(', ')}.`
    );
  }

  /* volumes */

  const volumes: string[] = []

  // Platform
  volumes.push(
    context.resourceConfig.platform.auth.volumes.name,
    context.resourceConfig.platform.file.volumes.name
  )

  // Datasources

  volumes.push(
    context.resourceConfig.platform.dataSource.volumes.name,
    context.resourceConfig.platform.auth.dataSource.volumes.name
  )

  // Services

  const serviceVolumes =
    context.resourceConfig.services
      .filter((service) => service.properties.volumes !== undefined)
      .map((service) => service.properties.volumes!)
      .flat()
      .map((it) => it.name);

  volumes.push(
    ...serviceVolumes
  )

  const volumeDuplicates = findDuplicateNames(volumes)
  if (volumeDuplicates.length > 0) {
    throw new Error(
      `The workspace has the following duplicated volume names: ${[...new Set(volumeDuplicates)].join(', ')}.`
    );
  }

  /* hostnames */

  const hostnames: string[] = []

  // Platform
  hostnames.push(
    context.resourceConfig.platform.auth.hostname,
  )

  const serviceHostnames =
    context.resourceConfig.services
      .filter((service) => service.properties.hostname !== undefined)
      .map((service) => service.properties.hostname!)
      .flat();

  hostnames.push(
    ...serviceHostnames
  )

  const hostnamesDuplicates = findDuplicateNames(hostnames)
  if (hostnamesDuplicates.length > 0) {
    throw new Error(
      `The workspace has the following duplicated hostnames: ${[...new Set(hostnamesDuplicates)].join(', ')}.`
    );
  }

  // expose
  const exposed =
    context.resourceConfig.services
      .filter((service) => service.properties.expose !== undefined)
      .map((service) => service.properties.expose!)
      .flat()
      .map((it) => it.port);

  const exposedDuplicates = findDuplicateNumbers(exposed)
  if (exposedDuplicates.length > 0) {
    throw new Error(
      `The workspace has the following duplicated exposed ports: ${[...new Set(exposedDuplicates)].join(', ')}.`
    );
  }

  // domainnames
  const domainNames =
    context.resourceConfig.services
      .filter((service) => service.properties.domainname !== undefined)
      .map((service) => service.properties.domainname!)
      .flat();

  const domainDuplicates = findDuplicateNames(domainNames)
  if (domainDuplicates.length > 0) {
    throw new Error(
      `The workspace has the following duplicated domain names: ${[...new Set(domainDuplicates)].join(', ')}.`
    );
  }

}

const findDuplicateExternalPorts = (arr: Port[]): string[] => {
  const nameCount: Record<string, number> = {};
  const duplicates: string[] = [];

  arr.forEach((e) => {
    nameCount[e.external] = (nameCount[e.external] || 0) + 1;
    if (nameCount[e.external] === 2) {
      duplicates.push(`${e.external}`);
    }
  });

  return duplicates;
};


const findDuplicateInternalPorts = (arr: Port[]): string[] => {
  const nameCount: Record<string, number> = {};
  const duplicates: string[] = [];

  arr.forEach((e) => {
    nameCount[e.internal] = (nameCount[e.internal] || 0) + 1;
    if (nameCount[e.internal] === 2) {
      duplicates.push(`${e.internal}`);
    }
  });

  return duplicates;
};

const findDuplicateNames = (arr: string[]): string[] => {
  const nameCount: Record<string, number> = {};
  const duplicates: string[] = [];

  arr.forEach((e) => {
    nameCount[e] = (nameCount[e] || 0) + 1;
    if (nameCount[e] === 2) {
      duplicates.push(e);
    }
  });

  return duplicates;
};

const findDuplicateNumbers = (arr: number[]): string[] => {
  const nameCount: Record<number, number> = {};
  const duplicates: string[] = [];

  arr.forEach((e) => {
    nameCount[e] = (nameCount[e] || 0) + 1;
    if (nameCount[e] === 2) {
      duplicates.push(`${e}`);
    }
  });

  return duplicates;
};
