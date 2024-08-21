import { saveToFile } from '../common/saveToFile';
import { PageConfig, Component, RenderContext } from '../../interfaces/types';
import { getPageConfig } from '../page/getPageConfig';
import { getPageConfigPath } from '../../utils/helpers';

export const addComponentToPageConfig = async (component: Component, context: RenderContext<PageConfig>) => {

  const pageConfig = await getPageConfig(context);
  const pageConfigPath = getPageConfigPath(context);

  pageConfig.components.push(component);

  await saveToFile(JSON.stringify(pageConfig), pageConfigPath);

  return pageConfig;
};
