import { RenderContext } from '../../interfaces/types';
import { extractZipFile, extractZipFromUrl } from '../../utils/zipUtils';
import { getPaths } from '../../index';

export const extractBaseApp
  = async (context: RenderContext): Promise<void> => extractZipFromUrl(
  getPaths().baseApp, context
)