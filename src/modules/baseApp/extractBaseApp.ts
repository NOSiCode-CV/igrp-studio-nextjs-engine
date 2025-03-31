import { RenderContext } from '../../interfaces/types';
import { extractZipFile } from '../../utils/zipUtils';
import { getPaths } from '../../index';

export const extractBaseApp
  = async (context: RenderContext): Promise<void> => extractZipFile(
  getPaths().baseApp, context
)