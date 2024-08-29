import { saveToFile } from '../common/saveToFile';
import { PageConfig, Component, RenderContext } from '../../interfaces/types';
import { getPageConfig } from '../page/getPageConfig';
import { getPageConfigPath } from '../../utils/helpers';

/**
 * 
 * @param components 
 * @param context 
 * @returns 
 */
export const addComponentToPageConfig = async (components: Component[], context: RenderContext<PageConfig>) => {

  const pageConfig = await getPageConfig(context);
  const pageConfigPath = getPageConfigPath(context);

  pageConfig.components = components;

  await saveToFile(JSON.stringify(pageConfig), pageConfigPath);

  return pageConfig;
};
