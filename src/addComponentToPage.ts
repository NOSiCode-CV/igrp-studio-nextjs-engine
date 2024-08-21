import { updateAndRenderPage } from "./modules/components/updateAndRenderPage";
import { Component, RenderContext } from "./interfaces/types";
import { PageConfig } from "./interfaces/types";
import { ERROR_MESSAGE, OUTPUT_DIR } from './utils/constants';
import { addComponentToPageConfig } from "./modules/components/addComponentToPageConfig";


export const addComponentToPage = async (pageConfig: PageConfig, component: Component, basePath: string) => {
  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH

  const context: RenderContext<PageConfig> = {
    resourceConfig: pageConfig,
    basePath: basePath
  }

  await updateAndRenderPage(component, context);
}