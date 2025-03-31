import { RenderContext, WorkspaceConfig } from '../../interfaces/types';
import { extractZipFile } from '../../utils/zipUtils';
import { getPaths } from '../../index';

export const extractBaseWorkspace
  = async (context: RenderContext<WorkspaceConfig, WorkspaceConfig>): Promise<void> => extractZipFile(
    getPaths().baseWorkspace, context
 )