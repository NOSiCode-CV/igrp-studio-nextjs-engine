import path from 'path';
import fs from 'fs-extra';
import { RenderContext } from '../../interfaces/RenderContext';
import { AppConfig } from '../../interfaces/AppInterface';
import { DIRECTORIES } from '../../utils/constants';

export const createAppDirectories = async (context: RenderContext) => {
  const directories = getDirectoriesToCreate(context.basePath);
  saveAppDirectories(directories);
};

const getDirectoriesToCreate = (basePath: string) => {
  return [
    path.join(basePath, DIRECTORIES.APP),
    path.join(basePath, DIRECTORIES.API),
    path.join(basePath, DIRECTORIES.PUBLIC),
    path.join(basePath, DIRECTORIES.DESIGN_SYSTEM),
    path.join(basePath, DIRECTORIES.IGRPSTUDIO),
    path.join(basePath, DIRECTORIES.STUDIO),
  ];
};


const saveAppDirectories = async (directories: string[]) => {
  await Promise.all(directories.map(dir => fs.mkdir(dir, {recursive: true})));
}