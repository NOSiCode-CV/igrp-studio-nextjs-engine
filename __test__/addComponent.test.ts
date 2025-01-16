import { addComponentToPage } from '../src/index';
import { PageConfig, Component } from '../src/interfaces/types';
import {OUTPUT_TEST} from '../testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'formulario',
  path: 'formulario',
  components: [],
};

const regPage: PageConfig = {
  type: 'page',
  pageName: 'registros',
  path: 'registros',
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
            colSize: 12,
            components: [
              {
                id: 'utente',
                componentName: 'FormLayout',
                config: {
                  title: 'Identificação do Utente',
                  showTitle: true,
                },
                fields: [
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'docId',
                      label: 'Documento de Identificação',
                      required: true,
                      placeholder: 'BI / Passaporte / Cartão de Residência ou Visto de trabalho / Carta de condução',
                      colSize: 6,
                    },
                  },
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'nome',
                      label: 'Nome',
                      required: true,
                      placeholder: 'Seu nome completo',
                      colSize: 6,
                    },
                  },
                  {
                    type: 'SelectInput',
                    config: {
                      type: 'select',
                      name: 'sexo',
                      label: 'Sexo',
                      required: true,
                      options: [
                        { value: 'M', label: 'Masculino' },
                        { value: 'F', label: 'Femenino' }
                      ],
                      colSize: 4,
                    }
                  },
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'nacionalidad',
                      label: 'Nacionalidad',
                      required: false,
                      colSize: 4,
                    },
                  },
                  {
                    type: 'PhoneNumberInput',
                    config: {
                      type: 'tel',
                      name: 'telemovel',
                      label: 'Telemóvel',
                      placeholder: 'Enter your first name',
                      colSize: 4,
                    },
                    validation: {
                      requiredMessage: 'Phone Number is required'
                    },
                  },
                  // {
                  //   type: 'IGRP_ButtonInput',
                  //   config: {
                  //     type: 'button',
                  //     name: 'formButton',
                  //     targetForms:['personalInfo'],
                  //     actionType: 'submit',
                  //     refreshTable: false,
                  //     label: 'Personal',
                  //     colSize: 2,
                  //     className: 'btn-info mb-2 mt-2',
                  //   },
                  // },
                  // {
                  //   type: 'IGRP_ButtonInput',
                  //   config: {
                  //     type: 'button',
                  //     name: 'pageButton',
                  //     targetForms:['companyInfo'],
                  //     actionType: 'alert',
                  //     refreshTable: false,            
                  //     label: 'Company',
                  //     colSize: 2,
                  //     className: 'btn-success mb-2 mt-2'
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

  // // add company form component 
  {
    Row: [
      {
        Col: [
          {
            id: 'col_nihdj',
            colSize: 12,
            components: [
              {
                id: 'curso',
                componentName: 'FormLayout',
                config: {
                  title: 'Curso e IES',
                  showTitle: true,
                },
                fields: [
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'instituicao',
                      label: 'Instituição',
                      required: true,
                      placeholder: 'Instituição de Ensino Superior',
                      colSize: 6,
                    },
                  },
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'curso',
                      label: 'Curso',
                      required: true,
                      placeholder: 'Curso',
                      colSize: 6,
                    },
                  },
                  {
                    type: 'SelectInput',
                    config: {
                      type: 'select',
                      name: 'grau',
                      label: 'Grau Académico',
                      required: true,
                      options: [
                        { value: 'Licenciado(a)', label: 'Licenciado(a)'},
                        { value: 'Mestre', label: 'Mestre'},
                        { value: 'Doutor', label: 'Doutor'}
                      ],
                      colSize: 4,
                    }
                  },
                  {
                    type: 'Select2Input',
                    config: {
                      type: 'select',
                      name: 'pais',
                      label: 'País de Formação',
                      required: true,
                      options: [
                        { value: 'Angola', label: 'Angola'},
                        { value: 'Espanha', label: 'Espanha'},
                        { value: 'Cabo Verde', label: 'Cabo Verde'}
                      ],
                      colSize: 4,
                    }
                  },
                  {
                    type: 'DateRangeInput',
                    config: {
                      type: 'range',
                      name: 'inicio_fin',
                      label: 'Periodo de formação',
                      colSize: 4,
                    }
                  }
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // add page button
  {
    Row: [
      {
        Col: [
          {
            id: 'buttoncomponent',
            colSize: 6,
            components: [
              {
                id: 'pageButton',
                componentName: 'Button',
                config: {
                  applyToAllForms: true,
                  refreshTable: true,
                  actionType: 'submitAll',
                  buttonText: 'Guardar',
                  className: 'btn-info mb-2 mx-2',
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // // add cliente side table component
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
                  title: 'Registros',
                  showTitle: true,
                  pageSize: 5,
                  isGlobalFilter: false,
                  SearchPlaceholder: 'Search...',
                  isPagination: false,
                  isSortable: false,
                  servrSsidePagination: false,
                  actionTitle: 'Actions'
                },
                fields: [
                  { header: "Nome", accessorKey: "nome", enableColumnFilter: false },
                  { header: "Identificação", accessorKey: "docId", enableColumnFilter: false },
                  { header: "Sexo", accessorKey: "sexo", enableColumnFilter: false },
                  { header: "Curso", accessorKey: "curso", enableColumnFilter: false },
                  { header: "Grau Académico", accessorKey: "grau", enableColumnFilter: false },
                  { header: "Período de Formação", accessorKey: "inicio_fin", enableColumnFilter: false },
                  { header: "Contato", accessorKey: "telemovel", enableColumnFilter: false },
                ],
                actions: [
                  // {
                  //   id:'editRow',
                  //   type: 'Button',
                  //   config: {
                  //     icon: 'ri-pencil-fill',
                  //     color: 'info',
                  //     className: 'btn-ghost-info',
                  //   },
                  // },
                  {
                    id:'deleteRow',
                    type: 'Button',
                    config: {
                      refreshTable: true,
                      icon: 'ri-delete-bin-5-line',
                      className: 'btn-ghost-danger',
                      actionType: 'alert'
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

const registros: Component[] = [
 
  {
    Row: [
      {
        Col: [
          {
            id: 'col_2',
            colSize: 12,
            components: [
              {
                id: 'tablaRegistros',
                componentName: 'TableComponent',
                config: {
                  title: 'Registros',
                  showTitle: true,
                  pageSize: 10,
                  isGlobalFilter: true,
                  SearchPlaceholder: 'Search...',
                  isPagination: true,
                  isSortable: true,
                  servrSsidePagination: true,
                  actionTitle: 'Actions',
                },
                fields: [
                  { header: "Nome", accessorKey: "nome", enableColumnFilter: false },
                  { header: "Identificação", accessorKey: "docId", enableColumnFilter: false },
                  { header: "Sexo", accessorKey: "sexo", enableColumnFilter: false },
                  { header: "Curso", accessorKey: "curso", enableColumnFilter: false },
                  { header: "Grau Académico", accessorKey: "grau", enableColumnFilter: false },
                  { header: "Período de Formação", accessorKey: "inicio_fin", enableColumnFilter: false },
                  { header: "Contato", accessorKey: "telemovel", enableColumnFilter: false },
                ],
                actions: [
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
  // await addComponentToPage(pageConfig, components, OUTPUT_DIR);

  // await addComponentToPage(regPage, registros, OUTPUT_DIR);
});
