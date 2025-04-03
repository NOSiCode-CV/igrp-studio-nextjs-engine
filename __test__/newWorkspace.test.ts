import { newWorkspace } from '../src';
import { WorkspaceConfig } from '../src/interfaces/types';
import { OUTPUT_WORKSPACE_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_WORKSPACE_TEST;

const baseConfig: WorkspaceConfig = {
  id: 'a03Yl1rsM1P1',
  name: 'My Workspace',
  slug: 'my-workspace',
  description: 'A demo workspace',
};

describe('Create new workspace module', () => {

  test('Should create the workspace directories', async () => {
     await newWorkspace(baseConfig, OUTPUT_DIR);
  });
});
