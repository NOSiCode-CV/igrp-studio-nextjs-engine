import { PageConfig, RenderContext } from '../../interfaces/types';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { ERROR_MESSAGE, TEMPLATES } from '../../utils/constants';
import { getApiPath } from '../../utils/helpers';

export const generateService = async (context: RenderContext<PageConfig>) => {
  const sercice = await renderService(context);
  const pageApiOutputPath = getApiPagePath(context);

  await saveToFile(sercice, pageApiOutputPath);
};

const renderService = async (context: RenderContext<PageConfig>) => {
  if (!context.resourceConfig) throw ERROR_MESSAGE.INVALID_PAGE_CONFIG;

  return await renderTemplate(TEMPLATES.SERVICE, context);
};

const getApiPagePath = (context: RenderContext<PageConfig>) => getApiPath(context);
