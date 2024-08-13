import path from 'path';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { RenderContext } from '../../interfaces/RenderContext';
import { COMMON_FILES, CONFIG_FILES, DIRECTORIES, ERROR_MESSAGE } from '../../utils/constants';

export type BASE_API_FILES = { output: string; template: string; name: string }[];

export const saveFileConfig = async (context: RenderContext) => {
  const baseAppFiles = generateBaseAppFiles(context);
  await saveBaseAppFiles(baseAppFiles, context);
};

const generateBaseAppFiles = (context: RenderContext): BASE_API_FILES => {
  if (!context.baseConfig || !context.baseConfig.type || !context.baseConfig.appName)
    throw ERROR_MESSAGE.INVALID_APP_CONFIG;

  return [];
};

const saveBaseAppFiles = async (baseFiles: BASE_API_FILES, context: RenderContext) => {
  await Promise.all(
    CONFIG_FILES.map(async (file) => {
      const template = await renderTemplate(file.template, context);
      const outputPath = path.join(context.basePath, file.output);
      await saveToFile(template, outputPath);
    }),
  );
};
