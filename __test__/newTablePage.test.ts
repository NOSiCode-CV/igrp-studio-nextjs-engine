import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const tableLayout: Layout = {
  id: 'section_tables',
  componentName: 'section',
  properties: {
    variant: 'compact'
  },
  children: [
    {
      id: 'table_default',
      componentName: 'table',
      children: [

      ],
    },
  ],
};

const pageConfig: PageConfig = {
  id: 't21Mus9lm2m1',
  type: 'page',
  pageName: 'tables',
  path: 'tables',
  components: tableLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Tables module',() =>{
  it('should save the table page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
