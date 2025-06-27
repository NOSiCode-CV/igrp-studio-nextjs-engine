import { DeleteConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { deleteElement } from '../src/index';

export const OUTPUT_DIR = OUTPUT_TEST;

const componentConfig: DeleteConfig = {
  type: 'component',
  name: 'newCompoennt',
  id: '89aw44nlml'
};

describe('Delete Component module', () => {
  it('should delete the component configuration file', async () => {
    await deleteElement(componentConfig, OUTPUT_DIR);
  });
});
