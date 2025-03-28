import path from 'path';
import fs from 'fs-extra';
import { DIRECTORIES } from '../../utils/constants';
import { RenderContext, WorkspaceConfig } from '../../interfaces/types';

/**
 * Creates the necessary workspace directories based on the provided render context.
 * 
 * @async
 * @function createWorkspaceDirectories
 * @param {RenderContext} context - An object containing the base path where the directories will be created.
 * 
 * @returns A promise that resolves when all directories have been created.
 * 
 */
export const createWorkspaceDirectories = async (context: RenderContext<WorkspaceConfig, WorkspaceConfig>) => {
  // Get the list of directories to create based on the base path from the context
  const directories = getDirectoriesToCreate(context.basePath);
  
  // Create all the directories asynchronously
  await saveWorkspaceDirectories(directories);
};

/**
 * Generates an array of directory paths to be created based on the base path.
 * 
 * @param {string} basePath - The base directory path used to build the directory paths.
 * 
 * @returns {string[]} An array of directory paths that need to be created.
 */
const getDirectoriesToCreate = (basePath: string): string[] => {
  return [
    path.join(basePath, DIRECTORIES.PROJECTS),
  ];
};

/**
 * Creates directories asynchronously based on the provided array of directory paths.
 * 
 * @async
 * @param {string[]} directories - An array of directory paths to be created.
 * 
 * @returns - A promise that resolves when all directories have been created.
 */
const saveWorkspaceDirectories = async (directories: string[]) => {
  await Promise.all(directories.map((dir) => fs.mkdir(dir, { recursive: true })));
};
