import { RenderContext, WorkspaceConfig } from '../../interfaces/types';
import { extractZipFile } from '../../utils/zipUtils';
import { BASE_WORKSPACE_ZIP } from '../../utils/constants';

export const extractBaseWorkspace
  = async (context: RenderContext<WorkspaceConfig, WorkspaceConfig>): Promise<void> => extractZipFile(
    BASE_WORKSPACE_ZIP, context
 )