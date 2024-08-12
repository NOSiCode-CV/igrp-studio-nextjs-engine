import fs from 'fs-extra';
import { dirname } from 'path';
import { ERROR_MESSAGE } from '../../utils/constants';

export const saveToFile = async (content: string, outputPath: string) => {
  if (!content) throw ERROR_MESSAGE.INVALID_APP_CONFIG;
  if (!outputPath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  await fs.mkdir(dirname(outputPath), {recursive: true});
  await fs.writeFile(outputPath, content, 'utf-8');
};
