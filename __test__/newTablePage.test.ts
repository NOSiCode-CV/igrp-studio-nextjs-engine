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
        {
          id: 'expand',
          componentName: 'tableColumns',
          properties: {},
          children: [
            {
              id: 'expand',
              componentName: 'tableExpanderCell',
              properties: {
              }
            },
            {
              id: 'name',
              componentName: 'tableTextCell',
              properties: {
                headerTitle: "Name",
              }
            },
            {
              id: 'email',
              componentName: 'tableTextCell',
              properties: {
                headerTitle: "Email",
                headerType: "sortToggle",
              }
            },
            {
              id: 'role',
              componentName: 'tableTextCell',
              properties: {
                headerTitle: "Role",
                headerType: "sortDropdown",
              }
            },
            {
              id: 'salary',
              componentName: 'tableAmountCell',
              properties: {
                headerTitle: "Salary",
                headerType: "sortDropdown",
              }
            },
          ],
        },
        {
          id: 'table_default_filters',
          componentName: 'tableFilters',
          properties: {},
          children: [

          ],
        },
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
