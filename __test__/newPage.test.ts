import fs from 'fs-extra';
import { newApp } from '../src/newApp';
import { newPage } from '../src/newPage';
import { AppConfig, PageConfig } from '../src/interfaces/types';

export const OUTPUT_DIR = 'C:/Users/Eduardo Fernando/Downloads/nextjs_projects_test';
export const NON_EMPTY_DIRECTORY = 'C:/Users/Eduardo Fernando/Downloads/non_empty';

const appConfig: AppConfig = {
  type: 'baseApp',
  appName: 'Next-app-test',
};

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'Invoices',
  path: 'invoices',
  components: [],
};

beforeAll(async () => {
  // await fs.mkdir(OUTPUT_DIR, { recursive: true });
  // await newApp(appConfig, OUTPUT_DIR);
});

afterAll(async () => {
  // await fs.rm(OUTPUT_DIR, { recursive: true });
});

describe('Page module',() =>{

  it('should save the page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
