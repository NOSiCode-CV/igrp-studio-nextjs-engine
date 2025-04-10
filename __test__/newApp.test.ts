import { newApp } from '../src';
import { AppConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const baseConfig: AppConfig = {
  id: 'teste',
  type: 'nextjs',
  name: 'testeMan',
  workspaceId: 'none'
};

describe('Create new nextjs application module', () => {

  test('Should create the application directories', async () => {
     await newApp(baseConfig, OUTPUT_DIR);
  });
});
