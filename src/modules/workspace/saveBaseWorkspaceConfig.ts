import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { AppConfig, WorkspaceConfig, WorkspaceProjectsConfig } from '../../interfaces/types';
import { COMMON_FILES, DIRECTORIES } from '../../utils/constants';

/**
 * 
 * @param baseConfig 
 * @param basePath 
 */
export const saveBaseWorkspaceFileConfig = async (baseConfig: WorkspaceConfig | WorkspaceProjectsConfig, basePath: string) => {
  const baseAppFileOutputPath = path.join(basePath, DIRECTORIES.IGRPSTUDIO, COMMON_FILES.WORKSPACE);
  await saveToFile(JSON.stringify(baseConfig), baseAppFileOutputPath);
}