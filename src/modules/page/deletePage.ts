import fs from 'fs-extra';
import { PageConfig, RenderContext } from '@/interfaces/types';
import { getPageConfigPath, getPagePath, getPageServicePath } from '../../utils/helpers';
import { updateMeta } from '../pageMeta/addMetaPage';

/**
 *
 * @param context
 */
export const deletePageConfig = async (context: RenderContext<PageConfig>) => {
  const pageConfigPath = getPageConfigPath(context);
  const pagePath = getPagePath(context);
  const pageServicePath = getPageServicePath(context);

  if (await fs.pathExists(pageConfigPath)) await fs.rm(pageConfigPath, { recursive: true });

  if (await fs.pathExists(pagePath)) {
    await fs.rm(pagePath, { recursive: true });
    await updateMeta(context.basePath)
  }

  if (await fs.pathExists(pageServicePath)) await fs.rm(pageServicePath, { recursive: true });
};
