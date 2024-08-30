import fs from 'fs-extra';
import { deletePage } from '../src/index';
import { PageConfig } from '../src/interfaces/types';

export const OUTPUT_DIR = '';

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'test',
  path: 'test',
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
