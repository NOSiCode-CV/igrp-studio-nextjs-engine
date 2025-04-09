import {
  ProjectWorkspace, ServiceWorkspace,
  WorkspaceProjectsConfig,
} from '../../interfaces/types';
import { loadWorkspaceConfig } from '../../utils/helpers';

// Projects

export const mapProjectToWorkspace = async (
  config: ProjectWorkspace,
  basePath: string,
): Promise<WorkspaceProjectsConfig> => {
  const workspace = await loadWorkspaceConfig(basePath);

  const isSpringBoot = config.config.type === 'stringboot';
  const basePort = isSpringBoot ? 8083 : 3001;
  const index = isSpringBoot
    ? workspace.projects.filter((proj) => proj.config.type === 'stringboot').length
    : workspace.projects.filter((proj) => !(proj.config.type === 'stringboot')).length;

  workspace.projects.push({
    config: config.config,
    basePath: `${config.config.appName ?? config.config.apiName}`,
    environments: [],
    ports: {
      internal: basePort + index,
      external: basePort + index, // ensure uniqueness by index
    },
    dependsOn: [],
    dataSource: isSpringBoot? {
      dbPassword: "password",
      dbName: `${config.config.apiName}_db`,
      ports: {
        internal: 5434 + index,
        external: 5434 + index,
      },
      volumes: {
        name: `${config.config.apiName}_data`,
        path: '/var/lib/postgresql/data2',
        driver: 'local'
      }
    } : undefined
  });

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

  const isSpringBoot = config.config.type === 'stringboot';
  const basePort = isSpringBoot ? 8083 : 3001;
  const index = isSpringBoot
    ? workspace.projects.filter((proj) => proj.config.type === 'stringboot').length - 1
    : workspace.projects.filter((proj) => proj.config.type !== 'stringboot').length - 1;

  workspace.projects[projectIndex] = {
    config: config.config,
    basePath: `${config.config.appName ?? config.config.apiName}`,
    environments: [],
    ports: {
      internal: basePort + index,
      external: basePort + index,
    },
    dependsOn: [],
  };

  return workspace;
};

export const removeProjectInWorkspace = async (projectId: string, basePath: string): Promise<WorkspaceProjectsConfig> => {

  const workspace = await loadWorkspaceConfig(basePath);

  const projectIndex = workspace.projects.findIndex(p => p.config?.id === projectId);

  if (projectIndex === -1) {
    throw new Error(`Project with id "${projectId}" not found in workspace`);
  }

  workspace.projects.splice(projectIndex, 1);

  return workspace;
};

// Services

export const mapServiceToWorkspace = async (
  config: ServiceWorkspace,
  basePath: string,
): Promise<WorkspaceProjectsConfig> => {

  const workspace = await loadWorkspaceConfig(basePath);

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

export const removeServiceInWorkspace = async (serviceId: string, basePath: string): Promise<WorkspaceProjectsConfig> => {

  const workspace = await loadWorkspaceConfig(basePath);

  const serviceIndex = workspace.services.findIndex((s) => s.id === serviceId);

  if (serviceIndex === -1) {
    throw new Error(`Service with id "${serviceId}" not found in workspace`);
  }

  workspace.services.splice(serviceIndex, 1);

  return workspace;
};
