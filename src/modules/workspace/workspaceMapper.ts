import {
  ProjectWorkspace, RestartTypes, ServiceWorkspace,
  WorkspaceProjectsConfig,
} from '../../interfaces/types';
import { loadWorkspaceConfig } from '../../utils/helpers';
import { normalizeHostname } from '../../helpers/workspaceHelper';

// Projects

export const mapProjectToWorkspace = async (
  config: ProjectWorkspace,
  basePath: string,
): Promise<WorkspaceProjectsConfig> => {
  const workspace = await loadWorkspaceConfig(basePath);

  const addProjectId = config.config.id;
  const projectIndex = workspace.projects.findIndex((p) => p.config?.id === addProjectId);

  if (projectIndex === 1) {
    throw new Error(`Project with id "${addProjectId}" is in the workspace already`);
  }

  const isSpringBoot = config.config.type === 'springboot';
  const basePort = isSpringBoot ? 8083 : 3001;

  const index = isSpringBoot
    ? workspace.projects.filter((proj) => proj.config.type === 'springboot').length
    : workspace.projects.filter((proj) => !(proj.config.type === 'springboot')).length;

  const indexService = workspace.services.filter((serv) => serv.name === normalizeDatabase(config.config.database)).length

  workspace.projects.push({
    config: config.config,
    basePath: `${config.config.name}`,
    environments: isSpringBoot? [
      { key: 'EUREKA_CLIENT_ENABLED', value: 'true' },
      { key: 'SPRING_CLOUD_DISCOVERY_ENABLED', value: 'true' },
      { key: 'EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE', value: '${EUREKA_SERVICE_URL}' },
      { key: 'EUREKA_CLIENT_SERVICEURL_DEFAULTZONE', value: '${EUREKA_SERVICE_URL}' },
      { key: 'EUREKA_SERVICE_URL', value: '${EUREKA_SERVICE_URL}' },
    ] : [],
    ports: {
      internal: basePort + index,
      external: basePort + index, // ensure uniqueness by index
    },
    dependsOn: isSpringBoot? [
      { service: normalizeHostname(`${config.config.name.toLowerCase()}-db`) }
    ] : [],
  });

  if(isSpringBoot && config.config.database !== 'H2') {
    workspace.services.push(
      {
        id: `${config.config.id}-db`,
        name: normalizeDatabase(config.config.database),
        properties: {
          image: normalizeDatabaseImg(config.config.database),
          container_name: normalizeHostname(`${config.config.name.toLowerCase()}-db`),
          restart: "always" as RestartTypes,
          hostname: normalizeHostname(`${config.config.name.toLowerCase()}-db`),
          environments: [
            { key: "POSTGRES_DB", value: `${config.config.name.toLowerCase()}_db`, },
            { key: "POSTGRES_USER", value: "postgres" },
            { key: "POSTGRES_PASSWORD", value: "password" },
          ],
          volumes: [
            {
              name: `${config.config.name.toLowerCase()}_data`,
              path: '/var/lib/postgresql/data2',
              driver: 'local'
            }
          ],
          ports: [
            {
              internal: normalizeDefaultPort(config.config.database) + indexService,
              external: normalizeDefaultPort(config.config.database) + indexService,
            }
          ],
          networks: [
            { network: `${workspace.workspace}-network` }
          ],
          labels: [
            { key: 'type', value: 'database'},
            { key: 'name', value: normalizeDatabase(config.config.database) }
          ]
        },
      }
    )
  }

  return workspace;
};

export const updateProjectInWorkspace = async (
  config: ProjectWorkspace,
  basePath: string,
): Promise<WorkspaceProjectsConfig> => {
  const workspace = await loadWorkspaceConfig(basePath);

  const updatedProjectId = config.config.id;
  const projectIndex = workspace.projects.findIndex((p) => p.config?.id === updatedProjectId);

  if (projectIndex === -1) {
    throw new Error(`Project with id "${updatedProjectId}" not found in workspace`);
  }

  const isSpringBoot = config.config.type === 'springboot';
  const basePort = isSpringBoot ? 8083 : 3001;
  const index = isSpringBoot
    ? workspace.projects.filter((proj) => proj.config.type === 'springboot').length - 1
    : workspace.projects.filter((proj) => proj.config.type !== 'springboot').length - 1;

  workspace.projects[projectIndex] = {
    config: config.config,
    basePath: `${config.config.name}`,
    environments: config.service && config.service.properties.environments && config.service.properties.environments.length > 0? config.service.properties.environments : [],
    ports: {
      internal: config.service && (config.service.properties.ports?.length ?? 0) > 0? config.service.properties.ports![0].internal : basePort + index,
      external: config.service && (config.service.properties.ports?.length ?? 0) > 0? config.service.properties.ports![0].internal : basePort + index,
    },
    dependsOn: config.service && config.service.properties.dependsOn && config.service.properties.dependsOn.length > 0? config.service.properties.dependsOn : [],
  };

  return workspace;
};

export const removeProjectInWorkspace = async (projectId: string, basePath: string): Promise<WorkspaceProjectsConfig> => {

  const workspace = await loadWorkspaceConfig(basePath);

  const projectIndex = workspace.projects.findIndex(p => p.config?.id === projectId);

  if (projectIndex === -1) {
    throw new Error(`Project with id "${projectId}" not found in workspace`);
  }

  const deletedProject = workspace.projects[projectIndex]

  workspace.projects.splice(projectIndex, 1);

  if(deletedProject.config.type === 'springboot') {

    const serviceIndex = workspace.services.findIndex(p => p?.id === `${projectId}-db`);

    if (serviceIndex !== -1) {
      return await removeServiceInWorkspace(`${projectId}-db`, basePath, workspace);
    }

  }

  return workspace;

};

// Services

export const mapServiceToWorkspace = async (
  config: ServiceWorkspace,
  basePath: string,
): Promise<WorkspaceProjectsConfig> => {

  const workspace = await loadWorkspaceConfig(basePath);

  const addServiceId = config.service.id;
  const serviceIndex = workspace.services.findIndex((s) => s.id === addServiceId);

  if (serviceIndex === 1) {
    throw new Error(`Service with id "${addServiceId}" is in the workspace already`);
  }

  workspace.services.push(config.service);

  return workspace;
};

export const updateServiceInWorkspace = async (
  config: ServiceWorkspace,
  basePath: string,
): Promise<WorkspaceProjectsConfig> => {
  const workspace = await loadWorkspaceConfig(basePath);

  const updatedServiceId = config.service.id;
  const serviceIndex = workspace.services.findIndex((s) => s.id === updatedServiceId);

  if (serviceIndex === -1) {
    throw new Error(`Service with id "${updatedServiceId}" not found in workspace`);
  }

  workspace.services[serviceIndex] = config.service;

  return workspace;
};

export const removeServiceInWorkspace = async (serviceId: string, basePath: string, ws?: WorkspaceProjectsConfig): Promise<WorkspaceProjectsConfig> => {

  const workspace = ws? ws : await loadWorkspaceConfig(basePath);

  const serviceIndex = workspace.services.findIndex((s) => s.id === serviceId);

  if (serviceIndex === -1) {
    throw new Error(`Service with id "${serviceId}" not found in workspace`);
  }

  workspace.services.splice(serviceIndex, 1);

  return workspace;
};

const normalizeDatabase = (database: string) => {
  switch (database) {
    case "Postgresql":
      return "postgres"
    case "MySQL":
      return "mysql"
    case "Oracle":
      return "oracle"
    default:
      return database
  }
}

const normalizeDefaultPort = (database: string) => {
  switch (database) {
    case "Postgresql":
      return 5434
    case "MySQL":
      return 3306
    case "Oracle":
      return 1521
    default:
      return 6000
  }
}

const normalizeDatabaseImg = (database: string) => {
  switch (database) {
    case "Postgresql":
      return "postgres:16-alpine"
    case "MySQL":
      return "mysql:8.0"
    case "Oracle":
      return "gvenzl/oracle-free:latest"
    default:
      return database
  }
}