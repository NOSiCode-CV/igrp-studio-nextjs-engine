import { PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'test',
  path: 'test',
  components: [],
};

describe('Page module', () => {
  it('should save the page configuration file', async () => {
    // await deletePage(pageConfig, OUTPUT_DIR);
  });
});
