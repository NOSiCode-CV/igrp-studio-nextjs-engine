import fs from 'fs-extra';
import { newApp } from '../src/newApp';
import { OUTPUT_DIR } from '../src/utils/constants';
import { AppConfig, PageConfig } from '../src/interfaces/types';
import { newPage } from '../src/newPage';

const appConfig: AppConfig = {
  type: 'baseApp',
  appName: 'Next-app-test',
};

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'Forms',
  path: 'forms',
  components: [],
};

beforeAll(async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await newApp(appConfig, OUTPUT_DIR);
});

afterAll(async () => {
  // await fs.rm(OUTPUT_DIR, { recursive: true });
});

describe('Page module',() =>{

  it('should save the page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
