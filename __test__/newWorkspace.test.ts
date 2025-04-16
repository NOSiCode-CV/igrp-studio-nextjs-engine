import { initServices, newWorkspace } from '../src';
import { WorkspaceConfig } from '../src/interfaces/types';
import { OUTPUT_WORKSPACE_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_WORKSPACE_TEST;

const baseConfig: WorkspaceConfig = {
  name: 'My Workspace',
  slug: 'my-workspace',
  description: 'My development workspace with Docker projects',
  id: '5bce7a73-45a4-4fa8-a87d-497583123951',
  //projects: [ { type: 'nextjs', name: 'ewewe', description: 'ew' } ],
  //workspace: 'my-workspace'
};

beforeAll(async () => {
  await initServices();
});

describe('Create new workspace module', () => {

  test('Should create the workspace directories', async () => {
     await newWorkspace(baseConfig, OUTPUT_DIR);
  });
});
