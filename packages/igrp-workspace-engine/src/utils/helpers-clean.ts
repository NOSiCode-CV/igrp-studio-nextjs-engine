import fs from 'fs-extra';
import {
  RenderContext,
  WorkspaceProjectsConfig,
} from '../interfaces/types';
import path from 'path';
import { COMMON_FILES, DIRECTORIES } from './workspace-constants';

export const checkIfDirectoryIsEmpty = async (directoryPath: string) =>
  (await fs.readdir(directoryPath)).length === 0;

export const loadWorkspaceConfig = async (basePath: string) => {
  const workspacePath = path.join(basePath, DIRECTORIES.WORKSPACE, COMMON_FILES.WORKSPACE_CONFIG);
  
  if (!(await fs.pathExists(workspacePath))) {
    throw Error(`Could not find workspace configuration file at: ${workspacePath}`);
  }
  
  return await fs.readJSON(workspacePath);
};
