import fs from 'fs-extra';
import { PageConfig, RenderContext } from '../../interfaces/types';
import { getPageConfigPath } from '../../utils/helpers';

/**
 *
 * @param context
 * @returns
 */
export const getPageConfig = async (context: RenderContext<PageConfig>) => {
  const pageConfigPath = getPageConfigPath(context);
  const PageCOnfigContent = await fs.readFile(pageConfigPath, 'utf8');

  return JSON.parse(PageCOnfigContent);
};
