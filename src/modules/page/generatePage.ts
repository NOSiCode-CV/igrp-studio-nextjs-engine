import { getPageDir } from '../../utils/helpers';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { ERROR_MESSAGE, TEMPLATES } from '../../utils/constants';
import { PageConfig, RenderContext } from '../../interfaces/types';

/**
 *
 * @param context
 */
export const generatePage = async (context: RenderContext<PageConfig>) => {
  const page = await renderPage(context);
  const pageOutputPath = getPageDir(context);

  await saveToFile(page, pageOutputPath);
};

/**
 *
 * @param context
 * @returns
 */
const renderPage = async (context: RenderContext<PageConfig>) => {
  if (!context.resourceConfig) throw ERROR_MESSAGE.INVALID_PAGE_CONFIG;

  return await renderTemplate(TEMPLATES.PAGE, context);
};
