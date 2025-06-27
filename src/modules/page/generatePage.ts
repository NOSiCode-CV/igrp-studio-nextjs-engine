import { getPageDir, loadConfig, loadPageConfig, loadPagesConfig } from '../../utils/helpers';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { DIRECTORIES, ERROR_MESSAGE, TEMPLATES } from '../../utils/constants';
import { Layout, PageConfig, RenderContext } from '../../interfaces/types';
import { checkDuplicatedLayouts } from './checkDuplicatedLayouts';

/**
 *
 * @param context
 */
export const generatePage = async (context: RenderContext<PageConfig, PageConfig>) => {

  const page = await renderPage(context);

  const pageOutputPath = getPageDir(context);

  const pages = await loadPagesConfig(context.basePath)

  if(!pages.find(it => it.id === context.resourceConfig.id)) {

    const pageAlready = pages.find(it => it.path === context.resourceConfig.path);

    if(pageAlready) {
      throw Error(`There's already a page with the same path: '${pageAlready.pageName}'`)
    }

  }

  if (isLayout(context.resourceConfig.components)) {
    checkDuplicatedLayouts([context.resourceConfig.components]);
  }

  await saveToFile(page, pageOutputPath, true, DIRECTORIES.PAGES, context.resourceConfig.id, context.basePath);
};

/**
 *
 * @param context
 * @returns
 */
const renderPage = async (context: RenderContext<PageConfig, PageConfig>) => {
  if (!context.resourceConfig) throw ERROR_MESSAGE.INVALID_PAGE_CONFIG;

  return await renderTemplate(TEMPLATES.PAGE, context);
};

export function isLayout(obj: any): obj is Layout {
  return obj && typeof obj === 'object' && 'componentName' in obj && 'tag' in obj;
}