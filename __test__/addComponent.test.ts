import { addComponentToPage } from '../src/index';
import { PageConfig, Component } from '../src/interfaces/types';
import testPath from '../testPath';

export const OUTPUT_DIR = testPath.OUTPUT_TEST;

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'user',
  path: 'user',
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
                      required: true,
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
                      placeholder: 'Enter your first name',
                      colSize: 4,
                    },
                    validation: { minLeng: 13, errorMinLeng: 'Min 13', maxLeng: 100, errorMaxLeng: 'Max 100' },
                  },
                  {
                    type: 'Select2Input',
                    config: {
                      type: 'select',
                      name: 'userOptions',
                      label: 'User Options',
                      placeholder: 'select an option',
                      colSize: 4,
                      options: [
                        { value: "Admin", label: "Admin" },
                        { value: "Dev", label: "Dev" },
                        { value: "QA", label: "QA" },
                      ],
                    },
                  },
                ],
              }
            ],
          },
        ],
      },
    ],
  },

  // add button component
  {
    Row: [
      {
        Col: [
          {
            id: 'buttoncomponent',
            colSize: 6,
            components: [
              {
                id:'button',
                componentName: 'Button',
                target:'sendData',
                config: {
                  buttonText: 'Submit',
                  buttonColor: 'btn-primary',
                }
              }
            ],
          },
        ],
      },
    ],
  },

  // add table component
  {
    Row: [
      {
        Col: [
          {
              id: 'col_2',
            colSize: 6,
            components: [
              {
                id: 'tablecomponent',
                componentName: 'TableComponent',
                config: {
                  title: 'Pokemons',
                  showTitle: true,
                  pageSize: 5,
                  isGlobalFilter: true,
                  SearchPlaceholder: 'Search...',
                  isPagination: true,
                  isSortable: true,
                  servrSsidePagination: true,
                  actionTitle: 'Actions',
                },
                fields: [
                  { header: 'Name', accessorKey: 'name', enableColumnFilter: false },
                  { header: 'Url', accessorKey: 'url', enableColumnFilter: false },
                ],
                actions: [
                  {
                    type: 'Button',
                    config: {target:'sendRow', icon: 'ri-pencil-line', buttonColor: 'btn-ghost-info mx-1'}
                  },
                  {
                    type: 'Button',
                    config: {target:'deleteRow', icon: 'ri-delete-bin-5-line', buttonColor: 'btn-ghost-danger mx-1'}
                  }
                ]
              },
            ],
          },
        ],
      },
    ],
  },
];

it('should create a new page', async () => {
  pageConfig.components = components;
  // await addComponentToPage(pageConfig, components, OUTPUT_DIR);
});