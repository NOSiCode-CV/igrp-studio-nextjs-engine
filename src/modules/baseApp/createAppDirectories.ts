import path from 'path';
import fs from 'fs-extra';
import { DIRECTORIES } from '../../utils/constants';
import { RenderContext } from '../../interfaces/types';

export const createAppDirectories = async (context: RenderContext) => {
  const directories = getDirectoriesToCreate(context.basePath);
  saveAppDirectories(directories);
  // copyVelzonStyles(context.basePath);
};

const getDirectoriesToCreate = (basePath: string) => {
  return [
    path.join(basePath, DIRECTORIES.APP),
    path.join(basePath, DIRECTORIES.SERVICES),
    path.join(basePath, DIRECTORIES.PAGES),
    path.join(basePath, DIRECTORIES.PUBLIC),
    path.join(basePath, DIRECTORIES.ASSETS),
    path.join(basePath, DIRECTORIES.STUDIO),
    path.join(basePath, DIRECTORIES.IGRPSTUDIO),
    path.join(basePath, DIRECTORIES.DESIGN_SYSTEM)
  ];
};

const saveAppDirectories = async (directories: string[]) => {
  await Promise.all(directories.map((dir) => fs.mkdir(dir, { recursive: true })));
};

// const copyVelzonStyles = (basePath: string) => {
//   fs.cpSync(VELZON_SRC, path.join(basePath, DIRECTORIES.ASSETS), { recursive: true });
// };

