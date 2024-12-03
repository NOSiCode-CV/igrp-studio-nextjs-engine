import { newApp } from '../src/index';
import { AppConfig } from '../src/interfaces/types';
import {OUTPUT_TEST} from '../testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const baseConfig: AppConfig = {
  type: 'baseApp',
  appName: 'appTest',
};

describe('Create new nextjs application module', () => {

  test('Should create the application directories', async () => {
    // await newApp(baseConfig, OUTPUT_DIR);
    // expect(async () => await fs.pathExists(OUTPUT_DIR)).toBeTruthy();
  });
});
