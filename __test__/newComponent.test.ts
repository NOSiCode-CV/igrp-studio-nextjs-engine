import { initComponents, newComponent } from '../src';
import { ComponentConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const componentConfig: ComponentConfig = {
  id: 'e34RfF3',
  type: 'component',
  name: 'card',
  path: 'card',
  components: {}
};

beforeAll(async () => {
  await initComponents();
});

describe('Component module',() =>{
  it('should save the component configuration file', async()=> {
    await newComponent(componentConfig, OUTPUT_DIR);
  })

})
