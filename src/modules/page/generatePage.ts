import { PageConfig, RenderContext } from '../../interfaces/types';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { ERROR_MESSAGE, TEMPLATES } from '../../utils/constants';
import { getPageDir, getApiPath } from '../../utils/helpers';

export const generatePage = async (context: RenderContext<PageConfig>) => {
  const page = await renderPage(context);
  const pageOutputPath = getPagePath(context);

  await saveToFile(page, pageOutputPath);
};

const renderPage = async (context: RenderContext<PageConfig>) => {
  if (!context.resourceConfig) throw ERROR_MESSAGE.INVALID_PAGE_CONFIG;

  return await renderTemplate(TEMPLATES.PAGE, context);
};

const getPagePath = (context: RenderContext<PageConfig>) => getPageDir(context);