import { saveToFile } from '../common/saveToFile';
import { PageConfig, Component, RenderContext, PageComponentConfig, ComponentConfig } from '../../interfaces/types';
import { getPageConfig } from '../page/getPageConfig';
import { getComponentConfigPath, getPageConfigPath, loadConfig } from '../../utils/helpers';
import path from 'path';
import { DIRECTORIES } from '@/utils/constants';
import { getComponentConfig } from '@/modules/components/getComponentConfig';

/**
 * 
 * @param components 
 * @param context 
 * @returns 
 */
export const addComponentToPageConfig = async (context: RenderContext<PageComponentConfig>) => {

  if (context.resourceConfig.type === 'page') {

    const pages: PageConfig[] = await loadConfig(path.join(context.basePath, DIRECTORIES.IGRPSTUDIO_PAGES));

    const page = pages.find((it) => it.id === context.resourceConfig.id)

    if(!page) throw Error(`No page found for ID '${context.resourceConfig.id}'`)

    const pageContext: RenderContext<PageConfig> = {
      ...context,
      resourceConfig: page,
    };

    const pageConfig = await getPageConfig(pageContext);
    const pageConfigPath = getPageConfigPath(pageContext);

    pageConfig.components = context.resourceConfig.components;

    await saveToFile(JSON.stringify(pageConfig), pageConfigPath);

    return pageConfig;
  }

  if (context.resourceConfig.type === 'component') {

    const components: ComponentConfig[] = await loadConfig(path.join(context.basePath, DIRECTORIES.IGRPSTUDIO_COMPONENTS));

    const component = components.find((it) => it.id === context.resourceConfig.id)

    if(!component) throw Error(`No component found for ID '${context.resourceConfig.id}'`)

    const componentContext: RenderContext<ComponentConfig> = {
      ...context,
      resourceConfig: component,
    };

    const componentConfig = await getComponentConfig(componentContext);
    const componentConfigPath = getComponentConfigPath(componentContext);

    componentConfig.components = context.resourceConfig.components;

    await saveToFile(JSON.stringify(componentConfig), componentConfigPath);

    return componentConfig;
  }
};


