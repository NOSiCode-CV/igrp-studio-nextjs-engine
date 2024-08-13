import fs from 'fs-extra';
import { OUTPUT_DIR, NON_EMPTY_DIRECTORY, ERROR_MESSAGE } from '../src/utils/constants';
import { AppConfig } from '../src/interfaces/AppInterface';
import { newApp } from '../src/newApp';
import path from 'path';

const baseConfig: AppConfig = {
  type: 'baseApp',
  appName: 'appTest',
};

beforeAll(async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(path.join(NON_EMPTY_DIRECTORY, 'file'), { recursive: true });
});

afterAll(async () => {
  await fs.rm(OUTPUT_DIR, { recursive: true });
  await fs.rm(NON_EMPTY_DIRECTORY, { recursive: true });
});

describe('Create new nextjs application module', () => {
  //To run this test, provide an non-empty directory
  test('Should fail because the output path is non-empty', async () => {
    expect(async () => await newApp(baseConfig, NON_EMPTY_DIRECTORY)).rejects.toEqual(
      ERROR_MESSAGE.DIRECTORY_ALREADY_IN_USE,
    );
  });

  test('Should create the application directories', async () => {
    await newApp(baseConfig, OUTPUT_DIR);
    expect(async () => await fs.pathExists(OUTPUT_DIR)).toBeTruthy();
  });
});
