import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { PageMetaConfig} from '../../interfaces/types';
import { COMMON_FILES, DIRECTORIES } from '../../utils/constants';

export const savePagesMeta = async (pageMetaConfig: PageMetaConfig, basePath: string) => {
 
  const baseAppFileOutputPath = path.join(basePath, DIRECTORIES.IGRPSTUDIO, COMMON_FILES.PAGES_META);
  await saveToFile(JSON.stringify(pageMetaConfig), baseAppFileOutputPath);
}