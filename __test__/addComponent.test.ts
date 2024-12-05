import { addComponentToPage } from '../src/index';
import { PageConfig, Component } from '../src/interfaces/types';
import {OUTPUT_TEST} from '../testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'test',
  path: 'test',
  components: [],
};

const pokePage: PageConfig = {
  type: 'page',
  pageName: 'pokemon',
  path: 'pokemon',
  components: [],
};

const components: Component[] = [
  // add personal info form component 
  {
    Row: [
      {
        Col: [
          {
            id: 'col_nihdj',
            colSize: 6,
            components: [
              {
                id: 'personalInfo',
                componentName: 'FormLayout',
                config: {
                  title: 'Personal Info',
                  showTitle: false,
                },
                fields: [
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'name',
                      label: 'Name',
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
                    validation: {
                      minLeng: 13,
                      errorMinLeng: 'Min 13',
                      maxLeng: 100,
                      errorMaxLeng: 'Max 100',
                    },
                  },
                  {
                    type: 'IGRP_ButtonInput',
                    config: {
                      type: 'button',
                      name: 'formButton',
                      label: 'Save',
                      colSize: 6,
                      className: 'btn-info mb-2 mx-2',
                    },
                  },
                  // {
                  //   type: 'IGRP_ButtonInput',
                  //   config: {
                  //     type: 'button',
                  //     name: 'clearForm',
                  //     label: 'Cancel',
                  //     colSize: 6,
                  //     className: 'btn-danger mb-2 mx-2'
                  //   },
                  // },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // add company form component 
  {
    Row: [
      {
        Col: [
          {
            id: 'col_nihdj',
            colSize: 6,
            components: [
              {
                id: 'companyInfo',
                componentName: 'FormLayout',
                config: {
                  title: 'Company Info',
                  showTitle: false,
                },
                fields: [
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'company',
                      label: 'Company',
                      required: true,
                      placeholder: 'Enter your first name',
                      colSize: 4,
                    },
                  },
                  {
                    type: 'SelectInput',
                    config: {
                      type: 'select',
                      name: 'city',
                      label: 'City',
                      options: [
                        { value: 'Madrid', label: 'Madrid' },
                        { value: 'Luanda', label: 'Luanda' },
                        { value: 'Praia', label: 'Praia' },
                      ],
                      colSize: 4,
                    }
                  },
                  // {
                  //   type: 'Select2Input',
                  //   config: {
                  //     type: 'select',
                  //     name: 'role',
                  //     label: 'User Role',
                  //     placeholder: 'select an option',
                  //     colSize: 4,
                  //     options: [
                  //       { value: 'Admin', label: 'Admin' },
                  //       { value: 'Dev', label: 'Dev' },
                  //       { value: 'QA', label: 'QA' },
                  //     ],
                  //   },
                  // },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
   // add submit and clear button component
  {
    Row: [
      {
        Col: [
          {
            id: 'buttoncomponent',
            colSize: 6,
            components: [
              {
                id: 'pageButotn',
                componentName: 'Button',
                config: {
                  buttonText: 'Enviar',
                  className: 'btn-info mb-2 mx-2',
                },
              },
              // {
              //   id: 'clearButton',
              //   componentName: 'Button',
              //   config: {
              //     buttonText: 'Cancel',
              //     className: 'btn-danger mb-2 mx-2',
              //   },
              // },
            ],
          },
        ],
      },
    ],
  },
  // add cliente side table component
  {
    Row: [
      {
        Col: [
          {
            id: 'col_2',
            colSize: 12,
            components: [
              {
                id: 'tablecomponent',
                componentName: 'TableComponent',
                config: {
                  title: 'Members',
                  showTitle: true,
                  pageSize: 5,
                  isGlobalFilter: true,
                  SearchPlaceholder: 'Search...',
                  isPagination: true,
                  isSortable: true,
                  servrSsidePagination: false,
                  actionTitle: 'Actions',
                },
                fields: [
                  { header: 'Name', accessorKey: 'name', enableColumnFilter: false },
                  { header: 'Age', accessorKey: 'age', enableColumnFilter: false },
                  { header: 'City', accessorKey: 'city', enableColumnFilter: false },
                  { header: 'Company', accessorKey: 'company', enableColumnFilter: false },
                ],
                actions: [
                  {
                    id:'editRow',
                    type: 'Button',
                    config: {
                      icon: 'ri-pencil-fill',
                      color: 'info',
                      className: 'btn-ghost-info',
                    },
                  },
                  {
                    id:'deleteRow',
                    type: 'Button',
                    config: {
                      icon: 'ri-delete-bin-5-line',
                      className: 'btn-ghost-danger',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

];

const pokeComponent: Component[] = [
  // add pokemon form component 
  {
    Row: [
      {
        Col: [
          {
            id: 'col_nihdj',
            colSize: 6,
            components: [
              {
                id: 'pokemonInfo',
                componentName: 'FormLayout',
                config: {
                  title: 'Add Pokemon',
                  showTitle: false,
                },
                fields: [
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'name',
                      label: 'Name',
                      required: true,
                      placeholder: 'Enter the pokemon name',
                      colSize: 6,
                    },
                  },
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'url',
                      label: 'Url',
                      placeholder: 'Enter the pokemon url',
                      colSize: 6,
                    }
                  },
                  {
                    type: 'IGRP_ButtonInput',
                    config: {
                      type: 'button',
                      name: 'formButton',
                      label: 'Save',
                      colSize: 6,
                      className: 'btn-info mb-2 mx-2',
                    },
                  }
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // add server side table component
  {
    Row: [
      {
        Col: [
          {
            id: 'col_2',
            colSize: 6,
            components: [
              {
                id: 'pokemonTable',
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
                    id:'editPokemon',
                    type: 'Button',
                    config: {
                      icon: 'ri-pencil-fill',
                      color: 'info',
                      className: 'btn-ghost-info',
                    },
                  },
                  {
                    id:'removePokemon',
                    type: 'Button',
                    config: {
                      icon: 'ri-delete-bin-5-line',
                      className: 'btn-ghost-danger',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

];

it('should create a new page', async () => {
  await addComponentToPage(pageConfig, components, OUTPUT_DIR);

  // await addComponentToPage(pokePage, pokeComponent, OUTPUT_DIR);
});
