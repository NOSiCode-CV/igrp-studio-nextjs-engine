import { COMMON_FILES, DIRECTORIES, ERROR_MESSAGE } from './utils/workspace-constants';
import { workspaceConfigValidate } from './schema/baseWorkspace';
import { checkIfDirectoryIsEmpty } from './utils/helpers';
import { createWorkspaceDirectories } from './modules/workspace/createWorkspaceDirectories';
import { saveBaseWorkspaceFileConfig } from './modules/workspace/saveBaseWorkspaceConfig';
import { generateWorkspaceFiles } from './modules/workspace/generateWorkspaceFiles';
import { saveWorkspaceComposeFile } from './modules/workspace/saveWorkspaceComposeFile';
import {
  mapProjectToWorkspace,
  mapServiceToWorkspace,
  removeProjectInWorkspace,
  removeServiceInWorkspace,
  updateProjectInWorkspace,
  updateServiceInWorkspace,
} from './modules/workspace/workspaceMapper';
import path from 'path';
import {
  WorkspaceConfig,
  ProjectWorkspace,
  ServiceWorkspace,
  WorkspaceProjectsConfig,
  RenderContext,
} from './interfaces/types';

/**
 * Initializes a new workspace by validating configuration, checking directory status,
 * and creating necessary files and folders.
 *
 * @async
 * @function newWorkspace
 * @param {WorkspaceConfig} baseConfig - The base configuration object for workspace.
 * @param {string} basePath - The base path where workspace directories and files will be created.
 *
 * @throws {Error} Throws an error if:
 * - The base configuration is invalid or has validation errors (`ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG`).
 * - The base path is not provided (`ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG`).
 * - The base path directory is not empty (`ERROR_MESSAGE.DIRECTORY_ALREADY_IN_USE`).
 *
 * @returns {Promise<void>} A promise that resolves when workspace has been successfully initialized.
 *
 */
export const newWorkspace = async (
  baseConfig: WorkspaceConfig,
  basePath: string,
): Promise<void> => {
  const isBaseConfigValid = workspaceConfigValidate(baseConfig);

  if (!isBaseConfigValid && workspaceConfigValidate.errors) throw workspaceConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG;

  if (!(await checkIfDirectoryIsEmpty(basePath))) throw ERROR_MESSAGE.DIRECTORY_ALREADY_IN_USE;

  const context: RenderContext<WorkspaceConfig, WorkspaceConfig> = {
    resourceConfig: baseConfig,
    basePath,
  };

  /**
   * Creates folder structure needed for workspace.
   */
  await createWorkspaceDirectories(context);

  /**
   * Extracts folder structure needed for workspace.
   */
  // TODO: Implement Sonatype download
  //await extractBaseWorkspace(context);

  /**
   * Creates configuration files based on provided context.
   */
  await saveBaseWorkspaceFileConfig(baseConfig, basePath);
};

/**
 * Add project to a workspace
 *
 * @async
 * @function addProjectToWorkspace
 * @param {ProjectWorkspace} config - The project configuration
 * @param {string} basePath - The base path where workspace is located
 *
 * @returns {Promise<void>} A promise that resolves when project is added
 */
export const addProjectToWorkspace = async (config: ProjectWorkspace, basePath: string): Promise<void> => {
  const workspaceConfig = await mapProjectToWorkspace(config, basePath);
  await addProjectsToWorkspace(workspaceConfig, basePath);
};

/**
 * Update project in a workspace
 *
 * @async
 * @function updateProjectToWorkspace
 * @param {ProjectWorkspace} config - The project configuration
 * @param {string} basePath - The base path where workspace is located
 *
 * @returns {Promise<void>} A promise that resolves when project is updated
 */
export const updateProjectToWorkspace = async (config: ProjectWorkspace, basePath: string): Promise<void> => {
  const workspaceConfig = await updateProjectInWorkspace(config, basePath);
  await addProjectsToWorkspace(workspaceConfig, basePath);
};

/**
 * Remove project from a workspace
 *
 * @async
 * @function removeProjectFromWorkspace
 * @param {string} projectId - The project ID to remove
 * @param {string} basePath - The base path where workspace is located
 *
 * @returns {Promise<void>} A promise that resolves when project is removed
 */
export const removeProjectFromWorkspace = async (projectId: string, basePath: string): Promise<void> => {
  const workspaceConfig = await removeProjectInWorkspace(projectId, basePath);
  await addProjectsToWorkspace(workspaceConfig, basePath);
};

/**
 * Add service to a workspace
 *
 * @async
 * @function addServiceToWorkspace
 * @param {ServiceWorkspace} config - The service configuration
 * @param {string} basePath - The base path where workspace is located
 *
 * @returns {Promise<void>} A promise that resolves when service is added
 */
export const addServiceToWorkspace = async (config: ServiceWorkspace, basePath: string): Promise<void> => {
  const workspaceConfig = await mapServiceToWorkspace(config, basePath);
  await addProjectsToWorkspace(workspaceConfig, basePath);
};

/**
 * Update service in a workspace
 *
 * @async
 * @function updateServiceToWorkspace
 * @param {ServiceWorkspace} config - The service configuration
 * @param {string} basePath - The base path where workspace is located
 *
 * @returns {Promise<void>} A promise that resolves when service is updated
 */
export const updateServiceToWorkspace = async (config: ServiceWorkspace, basePath: string): Promise<void> => {
  const workspaceConfig = await updateServiceInWorkspace(config, basePath);
  await addProjectsToWorkspace(workspaceConfig, basePath);
};

/**
 * Remove service from a workspace
 *
 * @async
 * @function removeServiceFromWorkspace
 * @param {string} serviceId - The service ID to remove
 * @param {string} basePath - The base path where workspace is located
 *
 * @returns {Promise<void>} A promise that resolves when service is removed
 */
export const removeServiceFromWorkspace = async (serviceId: string, basePath: string): Promise<void> => {
  const workspaceConfig = await removeServiceInWorkspace(serviceId, basePath);
  await addProjectsToWorkspace(workspaceConfig, basePath);
};

/**
 * Add projects to a workspace by validating configuration, checking directory status,
 * and creating necessary files (.env and igrp-compose.yaml).
 *
 * @async
 * @function addProjectsToWorkspace
 * @param {WorkspaceProjectsConfig} baseConfig - The base configuration object for workspace.
 * @param {string} basePath - The base path where workspace directories and files will be created.
 *
 * @throws {Error} Throws an error if:
 * - The base configuration is invalid or has validation errors (`ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG`).
 * - The base path is not provided (`ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG`).
 *
 * @returns {Promise<void>} A promise that resolves when workspace has been successfully initialized.
 *
 */
const addProjectsToWorkspace = async (
  baseConfig: WorkspaceProjectsConfig,
  basePath: string,
): Promise<void> => {
  if (!basePath) throw ERROR_MESSAGE.INVALID_WORKSPACE_CONFIG;

  const context: RenderContext<WorkspaceProjectsConfig, WorkspaceProjectsConfig> = {
    resourceConfig: baseConfig,
    basePath,
  };

  /**
   * Generates the environment files and compose file
   */
  await generateWorkspaceFiles(context);

  await saveBaseWorkspaceFileConfig(baseConfig, basePath);
};

/**
 * Save custom workspace compose file
 *
 * @async
 * @function saveCustomWorkspaceComposeFile
 * @param {object} yaml - The YAML configuration
 * @param {string} basePath - The base path where workspace is located
 *
 * @returns {Promise<void>} A promise that resolves when compose file is saved
 */
export const saveCustomWorkspaceComposeFile = async (yaml: object, basePath: string): Promise<void> => {
  await saveWorkspaceComposeFile(yaml, basePath);
};
