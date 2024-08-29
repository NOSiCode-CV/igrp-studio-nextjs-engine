import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { AppConfig } from '../../interfaces/types';
import { COMMON_FILES, DIRECTORIES } from '../../utils/constants';

/**
 * 
 * @param baseConfig 
 * @param basePath 
 */
export const saveBaseAppFileConfig = async (baseConfig: AppConfig, basePath: string) => {
  const baseAppFileOutputPath = path.join(basePath, DIRECTORIES.IGRPSTUDIO, COMMON_FILES.BASE_APP);
  await saveToFile(JSON.stringify(baseConfig), baseAppFileOutputPath);
}