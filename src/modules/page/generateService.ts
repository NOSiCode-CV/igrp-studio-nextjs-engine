import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { getPageServiceFilePath } from '../../utils/helpers';
import { ERROR_MESSAGE, TEMPLATES } from '../../utils/constants';
import { PageConfig, RenderContext } from '../../interfaces/types';
/** 
* Renders a service file for a page based on the configuration provided in the context.
*
* @param context - The context that includes the page configuration and resources needed to render the service.
* @returns - A promise that resolves once the service file has been saved.
*
* @throws {Error} - Throws an error if the service file cannot be rendered or if a problem occurs while saving the file.
*/
export const generateService = async (context: RenderContext<PageConfig, PageConfig>) => {
  const service = await renderService(context);
  const pageServicePath = getPageServiceFilePath(context);
  
  await saveToFile(service, pageServicePath, false);
};

/**
* Renders the content of a service based on a template and the page context.
*
* @param context - The context containing the page configuration, including the resources and variables needed to render the service template.
* @returns - A promise that resolves with the rendered content of the service.
*
* @throws {Error} - Throws an error if the resource configuration (`resourceConfig`) is not present in the context.
*/
const renderService = async (context: RenderContext<PageConfig, PageConfig>) => {
  if (!context.resourceConfig) throw ERROR_MESSAGE.INVALID_PAGE_CONFIG;
  return await renderTemplate(TEMPLATES.SERVICE, context);
};


