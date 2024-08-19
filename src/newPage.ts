import { PageConfig } from './interfaces/types';
import { ERROR_MESSAGE } from './utils/constants';
import { RenderContext } from './interfaces/types';
import { generatePage } from './modules/page/generatePage';
import { savePageConfig } from './modules/page/savePageConfig';
import { generateService } from './modules/page/generateService';

export const newPage = async (pageConfig: PageConfig, basePath: string) => {
  if (!pageConfig.pageName || !pageConfig.path || !pageConfig.type)
    throw ERROR_MESSAGE.INVALID_PAGE_CONFIG;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  await savePageConfig(pageConfig, basePath);

  const context: RenderContext<PageConfig> = {
    resourceConfig: pageConfig,
    basePath: basePath
  }

  await generatePage(context);
  await generateService(context);
};
