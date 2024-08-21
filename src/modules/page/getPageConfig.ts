import path from 'path';
import fs from 'fs-extra';
import { PageConfig, RenderContext } from '../../interfaces/types';
import { getPageConfigPath } from '../../utils/helpers';

export const getPageConfig = async (context: RenderContext<PageConfig>) => {
  const pageConfigPath = getpageConfig(context);

  const PageCOnfigContent = await fs.readFile(pageConfigPath, 'utf8');

  return JSON.parse(PageCOnfigContent);
};

const getpageConfig = (context: RenderContext<PageConfig>) => getPageConfigPath(context);
