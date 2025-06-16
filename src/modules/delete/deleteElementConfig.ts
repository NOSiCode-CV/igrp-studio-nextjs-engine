import fs from 'fs-extra';
import {
  getComponentConfigPath, getComponentDir, getComponentPath,
  getPageConfigPath,
  getPagePath,
  getPageServicePath,
  loadConfig,
} from '../../utils/helpers';
import { ComponentConfig, DeleteConfig, PageConfig, RenderContext } from '../../interfaces/types';
import { DIRECTORIES } from '../../utils/constants';
import path from 'path';
import { updateMeta } from '../pageMeta/updatePageMeta';

/**
* @param {RenderContext<DeleteConfig>} context - Context for the deletion of configuration.
* @param {boolean} force - Delete without checking dependency.
 */
export const deleteElementConfig = async (context: RenderContext<DeleteConfig>, force: boolean = false) => {

  if(context.resourceConfig.type === 'page') {

    const pages: PageConfig[] = await loadConfig(path.join(context.basePath, DIRECTORIES.IGRPSTUDIO, 'pages'));

    const page = pages.find((it) => it.id = context.resourceConfig.id)

    if(!page) throw Error(`Page '${context.resourceConfig.name}' does not exist!`)

    const contextPage: RenderContext<PageConfig, PageConfig> = {
      resourceConfig: page,
      basePath: context.basePath,
    };

    const pageConfigPath = getPageConfigPath(contextPage);
    const pagePath = getPagePath(contextPage);
    const pageServicePath = getPageServicePath(contextPage);

    if (await fs.pathExists(pageConfigPath)) await fs.rm(pageConfigPath, { recursive: true });

    if (await fs.pathExists(pagePath)) {
      await fs.rm(pagePath, { recursive: true });
      await updateMeta(contextPage.basePath)
    }

    if (await fs.pathExists(pageServicePath)) await fs.rm(pageServicePath, { recursive: true });

  }

  if(context.resourceConfig.type === 'component') {

    const components: ComponentConfig[] = await loadConfig(path.join(context.basePath, DIRECTORIES.IGRPSTUDIO, 'components'));

    const component = components.find((it) => it.id = context.resourceConfig.id)

    if(!component) throw Error(`Component '${context.resourceConfig.name}' does not exist!`)

    const contextComponent: RenderContext<ComponentConfig, ComponentConfig> = {
      resourceConfig: component,
      basePath: context.basePath,
    };

    const componentPath = getComponentDir(contextComponent);

    const componentConfigPath = getComponentConfigPath(contextComponent);

    if (await fs.pathExists(componentPath)) {
      await fs.rm(componentPath, { recursive: true });
    }

    if (await fs.pathExists(componentConfigPath)) await fs.rm(componentConfigPath, { recursive: true });

  }

};