import fs from 'fs-extra';
import { addComponentToPage } from '../src/index';
import { PageConfig, Component } from '../src/interfaces/types';

export const OUTPUT_DIR = 'C:/Users/Eduardo Fernando/Downloads/frontend';

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'pokemon',
  path: 'pokemon',
  components: [],
};

const components: Component[] = [
  {
    Row: [
      {
        Col: [
          {
            id: 'col_nihdj',
            colSize: 6,
            components: [
              {
                id: 'company',
                componentName: 'FormLayout',
                config: {
                  title: 'Form Test',
                  showTitle: false,
                },
                fields: [
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'firstName',
                      label: 'First Name',
                      placeholder: 'Enter your first name',
                      colSize: 4,
                    },
                  },
                  {
                    type: 'NumberInput',
                    config: {
                      type: 'number',
                      name: 'age',
                      label: 'Age',
                      placeholder: 'Enter your age',
                      colSize: 6,
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 'col_2',
            colSize: 6,
            components: [
              {
                id: 'tablecomponent',
                componentName: 'TableComponent',
                config: {
                  title: 'Pokemon Table',
                  showTitle: true,
                  pageSize: 5,
                  isPagination: true,
                  isGlobalFilter: true,
                  SearchPlaceholder: 'Search Pokemon',
                  isSortable: true,
                  actionTitle: 'Actions',
                  servrSsidePagination: true,
                },
                fields: [
                  { header: 'Name', accessorKey: 'name', enableColumnFilter: true },
                  { header: 'Url', accessorKey: 'url', enableColumnFilter: true },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

beforeEach(async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  // await newApp(appConfig, OUTPUT_DIR);
});

it('should create a new page', async () => {
  pageConfig.components = components;
  await addComponentToPage(pageConfig, components, OUTPUT_DIR);
});
