import { RenderContext } from '../../interfaces/types';
import { extractZipFromUrl } from '../../utils/zipUtils';

export const extractBaseApp
  = async (context: RenderContext): Promise<void> => extractZipFromUrl(context)