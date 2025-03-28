import { RenderContext } from '../../interfaces/types';
import { BASE_APP_ZIP } from '../../utils/constants';
import { extractZipFile } from '../../utils/zipUtils';

export const extractBaseApp
  = async (context: RenderContext): Promise<void> => extractZipFile(
  BASE_APP_ZIP, context
)