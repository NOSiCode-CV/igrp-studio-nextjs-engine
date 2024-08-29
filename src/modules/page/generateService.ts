import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { getPageServiceFilePath } from '../../utils/helpers';
import { ERROR_MESSAGE, TEMPLATES } from '../../utils/constants';
import { PageConfig, RenderContext } from '../../interfaces/types';


/**
 * 
 * @param context 
 */
export const generateService = async (context: RenderContext<PageConfig>) => {
  const sercice = await renderService(context);
  const pageServicePath = getPageServiceFilePath(context);

  await saveToFile(sercice, pageServicePath);
};

/**
 * 
 * @param context 
 * @returns 
 */
const renderService = async (context: RenderContext<PageConfig>) => {
  if (!context.resourceConfig) throw ERROR_MESSAGE.INVALID_PAGE_CONFIG;

  return await renderTemplate(TEMPLATES.SERVICE, context);
};
