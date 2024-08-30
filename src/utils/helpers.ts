import fs from 'fs-extra';
import { RenderContext } from '../interfaces/types';
import { PageConfig } from '../interfaces/types';
import path from 'path';
import { COMMON_FILES, DIRECTORIES, EXTENSIONS } from './constants';

export const checkIfDirectoryIsEmpty = async (directoryPath: string) =>
  (await fs.readdir(directoryPath)).length === 0;

export const getPageDir = (context: RenderContext<PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.PAGES,
    `${context.resourceConfig.pageName}`.toLowerCase(),
    COMMON_FILES.PAGE_TSX,
  );

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getPageServiceFilePath = (context: RenderContext<PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.SERVICES,
    `${context.resourceConfig.pageName}`.toLowerCase(),
    `${capitalize(context.resourceConfig.pageName)}${COMMON_FILES.SERVICE}`,
  );
  
export const getPageConfigPath = (context: RenderContext<PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.IGRPSTUDIO_PAGES,
    `${context.resourceConfig.pageName}${EXTENSIONS.JSON}`,
  );

export const getPageServicePath = (context: RenderContext<PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.SERVICES,
    `${context.resourceConfig.pageName}`.toLowerCase(),
  );

export const getPagePath = (context: RenderContext<PageConfig>) =>
  path.join(
    context.basePath,
    DIRECTORIES.PAGES,
    `${context.resourceConfig.pageName}`.toLowerCase(),
  );

export const onlyUnique = (value:any, index:any, array: any) => array.indexOf(value) === index