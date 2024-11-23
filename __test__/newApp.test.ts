import fs from 'fs-extra';
import { newApp } from '../src/index';
import { AppConfig } from '../src/interfaces/types';
import testPath from '../testPath';

export const OUTPUT_DIR = testPath.OUTPUT_TEST;

const baseConfig: AppConfig = {
  type: 'baseApp',
  appName: 'appTest',
};

beforeEach(async () => {
  // await fs.mkdir(OUTPUT_DIR, { recursive: true });
});


describe('Create new nextjs application module', () => {

  test('Should create the application directories', async () => {
    // await newApp(baseConfig, OUTPUT_DIR);
    // expect(async () => await fs.pathExists(OUTPUT_DIR)).toBeTruthy();
  });
});
