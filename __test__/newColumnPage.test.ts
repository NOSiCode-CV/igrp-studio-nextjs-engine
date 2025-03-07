import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const columnLayout: Layout = {
  id: "default_columns",
  componentName: "column",
  properties: {
    variant: "defaultMultiple"
  },
  children: [
    {
      id: "default_column",
      componentName: "column",
      properties: {
        variant: "defaultSingle"
      },
      children: [
        // your components
      ]
    }
  ]
};

const pageConfig: PageConfig = {
  id: 'c76Typ9l1op4',
  type: 'page',
  pageName: 'columns',
  path: 'columns',
  components: columnLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Columns module',() =>{
  it('should save the column page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
