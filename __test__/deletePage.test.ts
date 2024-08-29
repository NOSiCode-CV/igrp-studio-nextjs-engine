import fs from 'fs-extra';
import { deletePage } from '../src/index';
import { PageConfig } from '../src/interfaces/types';

export const OUTPUT_DIR = 'C:/Users/Eduardo Fernando/Downloads/laste';
export const NON_EMPTY_DIRECTORY = '';

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'Users',
  path: 'users',
  components: [],
};

beforeAll(async () => {
  // await fs.mkdir(OUTPUT_DIR, { recursive: true });
});

afterAll(async () => {
  // await fs.rm(OUTPUT_DIR, { recursive: true });
});

describe('Page module', () => {
  it('should save the page configuration file', async () => {
    await deletePage(pageConfig, OUTPUT_DIR);
  });
});
