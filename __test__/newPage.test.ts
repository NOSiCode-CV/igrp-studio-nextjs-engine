import fs from 'fs-extra';
import { newPage } from '../src/index';
import { PageConfig } from '../src/interfaces/types';

export const OUTPUT_DIR = 'C:/Users/Eduardo Fernando/Downloads/myapp';

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'user',
  path: 'users',
  components: [],
};

beforeAll(async () => {
  // await fs.mkdir(OUTPUT_DIR, { recursive: true });
});

afterAll(async () => {
  // await fs.rm(OUTPUT_DIR, { recursive: true });
});

describe('Page module',() =>{
  it('should save the page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
