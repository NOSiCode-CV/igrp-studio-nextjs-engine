import path from 'path';
import fs from 'fs-extra';
import { AppConfig } from '../../interfaces/AppInterface';
import { COMMON_FILES, DIRECTORIES, ERROR_MESSAGE } from '../../utils/constants';


export const baseAppCOnfig = async (basePath: string): Promise<AppConfig> => {
  const appConfig = await fs.readJson(path.join(basePath, DIRECTORIES.IGRPSTUDIO, COMMON_FILES.BASE_APP));
  
  if(!appConfig?.type || !appConfig?.appName) throw ERROR_MESSAGE.INVALID_APP_CONFIG

  return <AppConfig> appConfig;
}