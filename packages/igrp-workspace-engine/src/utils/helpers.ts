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

export const loadConfig = async function <T>(basePath: string): Promise<T[]> {
  if (!(await fs.pathExists(basePath))) {
    return [];
  }

  const files = (await fs.readdir(basePath))
    .filter((f) => f.endsWith('.json'))
    .map((f) => fs.readJSON(path.join(basePath, f)));
  return await Promise.all<T>(files);
};

export const getDirectoryPath = (filePath: string): string => {
  return path.dirname(filePath);
};

export const loadConfigSync = function <T>(basePath: string): T[] {
  if (!fs.pathExistsSync(basePath)) {
    return [];
  }

  return fs
    .readdirSync(basePath)
    .filter((f) => f.endsWith('.json'))
    .map((f) => fs.readJSONSync(path.join(basePath, f)));
};
