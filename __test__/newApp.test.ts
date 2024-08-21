import fs from 'fs-extra';
import { OUTPUT_DIR, NON_EMPTY_DIRECTORY, ERROR_MESSAGE } from '../src/utils/constants';
import { AppConfig } from '../src/interfaces/types';
import { newApp } from '../src/newApp';
import path from 'path';

const baseConfig: AppConfig = {
  type: 'baseApp',
  appName: 'appTest',
};

beforeEach(async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(path.join(NON_EMPTY_DIRECTORY, 'file'), { recursive: true });
});

afterEach(async () => {
  // await fs.rm(OUTPUT_DIR, { recursive: true });
  await fs.rm(NON_EMPTY_DIRECTORY, { recursive: true });
});

describe('Create new nextjs application module', () => {
  test('should fail when trying to creat a new app with empty appName or hyphen, space appName.', async () => {
    const invalibaseConfig: AppConfig = { ...baseConfig, appName: '' };
    await expect(async () => await newApp(invalibaseConfig, OUTPUT_DIR)).rejects.toEqual(
      ERROR_MESSAGE.INVALID_APP_CONFIG,
    );
  });
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
