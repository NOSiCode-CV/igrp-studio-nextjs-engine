import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { PageConfig } from '../../interfaces/types';
import { DIRECTORIES, EXTENSIONS } from '../../utils/constants';

export const savePageConfig = async (pageConfig: PageConfig, baseBapth: string) => {
  const pageConfigOutputPath = path.join(baseBapth, DIRECTORIES.IGRPSTUDIO_PAGES, `${pageConfig.pageName}${EXTENSIONS.JSON}`);
  saveToFile(JSON.stringify(pageConfig), pageConfigOutputPath);
};
