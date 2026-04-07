import { RenderContext, WorkspaceConfig } from '../../interfaces/types';
import { extractZipFromUrl } from '../../utils/zipUtils';

export const extractBaseWorkspace
  = async (context: RenderContext<WorkspaceConfig, WorkspaceConfig>): Promise<void> => {
    // TODO: Implement Sonatype download
    // For now, use local template
    const baseWorkspaceUrl = 'https://sonatype.nosi.cv/repository/igrp-templates/@igrp/workspace-template/0.0.1-alpha.0/igrp-workspace-template.zip';
    
    await extractZipFromUrl(baseWorkspaceUrl, context);
  };
