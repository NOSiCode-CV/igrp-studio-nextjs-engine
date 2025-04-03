import { newApp } from '../../src';
import { AppConfig } from '../../src/interfaces/types';
import { OUTPUT_TODO_TEST } from '../../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TODO_TEST;

const baseConfig: AppConfig = {
  id: 'task-management-project',
  workspaceId: 'none',
  type: 'nextjs',
  appName: 'taskManagement',
};

describe('Create new task management application module', () => {

  test('Should create the application directories', async () => {
     await newApp(baseConfig, OUTPUT_DIR);
  });
});
