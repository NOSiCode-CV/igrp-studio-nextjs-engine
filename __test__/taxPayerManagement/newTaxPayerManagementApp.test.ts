import { newApp } from '../../src';
import { AppConfig } from '../../src/interfaces/types';
import { OUTPUT_TAXPAYER_TEST } from '../../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TAXPAYER_TEST;

const baseConfig: AppConfig = {
  id: 'tax-payer-management-project',
  workspaceId: 'none',
  type: 'nextjs',
  name: 'taxPayerManagement',
};

describe('Create new tax payer management application module', () => {

  test('Should create the application directories', async () => {
     await newApp(baseConfig, OUTPUT_DIR);
  });
});
