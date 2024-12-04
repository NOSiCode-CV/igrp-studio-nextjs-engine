import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { PageMetaCOnfig} from '../../interfaces/types';
import { COMMON_FILES, DIRECTORIES } from '../../utils/constants';

export const savePagesMeta = async (pageMetaConfig: PageMetaCOnfig, basePath: string) => {
 
  const baseAppFileOutputPath = path.join(basePath, DIRECTORIES.IGRPSTUDIO, COMMON_FILES.PAGES_META);
  await saveToFile(JSON.stringify(pageMetaConfig), baseAppFileOutputPath);
}