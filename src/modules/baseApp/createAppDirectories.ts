import path from 'path';
import fs from 'fs-extra';
import { DIRECTORIES } from '../../utils/constants';
import { RenderContext } from '../../interfaces/types';

/**
 * Creates the necessary application directories based on the provided render context.
 * 
 * @async
 * @function createAppDirectories
 * @param {RenderContext} context - An object containing the base path where the directories will be created.
 * 
 * @returns A promise that resolves when all directories have been created.
 * 
 */
export const createAppDirectories = async (context: RenderContext) => {
  // Get the list of directories to create based on the base path from the context
  const directories = getDirectoriesToCreate(context.basePath);
  
  // Create all the directories asynchronously
  await saveAppDirectories(directories);
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
    path.join(basePath, DIRECTORIES.CONFIG),
    path.join(basePath, DIRECTORIES.TEMP),
    path.join(basePath, DIRECTORIES.TEMP_APPLICATIONS),
    path.join(basePath, DIRECTORIES.TEMP_MENUS),
    path.join(basePath, DIRECTORIES.TEMP_USERS),
    path.join(basePath, DIRECTORIES.FEATURES),
    path.join(basePath, DIRECTORIES.FEATURES_APPLICATIONS),
    path.join(basePath, DIRECTORIES.FEATURES_APPLICATIONS_HOOKS),
    path.join(basePath, DIRECTORIES.FEATURES_AUTH),
    path.join(basePath, DIRECTORIES.FEATURES_AUTH_LIB),
    path.join(basePath, DIRECTORIES.FEATURES_IGRP),
    path.join(basePath, DIRECTORIES.FEATURES_IGRP_CONFIG),
    path.join(basePath, DIRECTORIES.FEATURES_IGRP_LAYOUTS),
    path.join(basePath, DIRECTORIES.FEATURES_IGRP_PROVIDERS),
    path.join(basePath, DIRECTORIES.FEATURES_IGRP_COMPONENTS),
    path.join(basePath, DIRECTORIES.FEATURES_IGRP_COMPONENTS_UI),
    path.join(basePath, DIRECTORIES.FEATURES_MENUS),
    path.join(basePath, DIRECTORIES.FEATURES_MENUS_HOOKS),
    path.join(basePath, DIRECTORIES.FEATURES_USERS),
    path.join(basePath, DIRECTORIES.FEATURES_USERS_COMPONENTS),
    path.join(basePath, DIRECTORIES.FEATURES_USERS_HOOKS),
    path.join(basePath, DIRECTORIES.FEATURES_USERS_SCHEMAS),
    path.join(basePath, DIRECTORIES.HOOKS),
    path.join(basePath, DIRECTORIES.INTERNATIONALIZATION),
    path.join(basePath, DIRECTORIES.LIB),
    path.join(basePath, DIRECTORIES.SRC_TYPES),
    path.join(basePath, DIRECTORIES.TYPES),
    path.join(basePath, DIRECTORIES.APP),
    path.join(basePath, DIRECTORIES.GENERATED),
    path.join(basePath, DIRECTORIES.MYAPP),
    path.join(basePath, DIRECTORIES.IGRP_ACTIONS),
    path.join(basePath, DIRECTORIES.PACKAGE_IGRP),
    path.join(basePath, DIRECTORIES.IGRP_SYS_SETTINGS),
    //path.join(basePath, DIRECTORIES.PAGES),
    path.join(basePath, DIRECTORIES.COMPONENTS),
    path.join(basePath, DIRECTORIES.PUBLIC),
    path.join(basePath, DIRECTORIES.PUBLIC_IGRP),
    path.join(basePath, DIRECTORIES.ASSETS),
    path.join(basePath, DIRECTORIES.STUDIO),
    path.join(basePath, DIRECTORIES.LAYOUTS),
    path.join(basePath, DIRECTORIES.MESSAGES),
    path.join(basePath, DIRECTORIES.SRC_ACTIONS),
    path.join(basePath, DIRECTORIES.ACTIONS_IGRP),
    path.join(basePath, DIRECTORIES.IGRPSTUDIO),
    path.join(basePath, DIRECTORIES.VSCODE),
    path.join(basePath, DIRECTORIES.DESIGN_SYSTEM),
    path.join(basePath, DIRECTORIES.KUBERNETES),
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
const saveAppDirectories = async (directories: string[]) => {
  await Promise.all(directories.map((dir) => fs.mkdir(dir, { recursive: true })));
};
