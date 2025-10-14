import { newApp, setEngineConfiguration } from '../src';
import { AppConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const baseConfig: AppConfig = {
  "name": "teste",
  "description": "",
  "workspaceId": "4458e73c-b016-4d5f-bea5-2da4cd79a7e0",
  "id": "baf55807-6fcf-4b91-85b8-680a5601ba8b",
  "version": "0.1.0-beta.1",
  "type": "nextjs"
};

beforeAll(async () => {
  setEngineConfiguration({ environment: 'development' });
});

describe('Create new nextjs application module', () => {

  test('Should create the application directories', async () => {
     await newApp(baseConfig, OUTPUT_DIR);
  });
});
