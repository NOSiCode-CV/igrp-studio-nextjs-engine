import { ComponentConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const componentConfig: ComponentConfig = {
  type: 'component',
  name: 'card',
  pagePath: 'card',
  components: [],
};

describe('Component module', () => {
  it('should save the component configuration file', async () => {
    // await deleteComponent(componentConfig, OUTPUT_DIR);
  });
});
