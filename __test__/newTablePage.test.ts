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
      properties: {
        columns: [
          /*{
            id: 'checkbox_selected',
            componentName: 'checkbox',
            properties: {
              type: 'text',
              labelText: 'Selected'
            },
          },*/
          {
            id: 'name',
            componentName: 'input',
            properties: {
              type: 'text',
              labelText: 'Name'
            },
          },
          {
            id: 'email',
            componentName: 'input',
            properties: {
              type: 'email',
              labelText: 'Email'
            },
          },
          {
            id: 'role',
            componentName: 'select',
            properties: {
              options: [
                { value: 'Admin', label: 'Admin' },
                { value: 'User', label: 'User' },
                { value: 'Guest', label: 'Guest' },
              ],
            },
          },
        ],
        actions: [
          {
            id: "action_edit",
            componentName: "button",
            properties: {
              variant: 'ghost',
              size: 'icon',
              iconName: 'Pencil'
            }
          },
          {
            id: "action_delete",
            componentName: "button",
            properties: {
              variant: 'destructive',
              size: 'icon',
              iconName: 'Trash'
            }
          },
        ]
      },
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
