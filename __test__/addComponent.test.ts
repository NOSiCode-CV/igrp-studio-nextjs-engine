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
                      name: 'docid',
                      label: 'Documento de Identificação',
                      required: true,
                      placeholder: 'BI / Passaporte / Cartão de Residência ou Visto de trabalho / Carta de condução',
                      colSize: 4,
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
                      colSize: 5,
                    },
                  },
                  {
                    type: 'PhoneNumberInput',
                    config: {
                      type: 'tel',
                      name: 'telemovel',
                      label: 'Telemóvel',
                      placeholder: 'Enter your first name',
                      colSize: 3,
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
                    type: 'Select2Input',
                    config: {
                      type: 'select',
                      name: 'instituicao',
                      label: 'Instituição',
                      required: true,
                      placeholder:"Seleciona uma op",
                      options: [
                        { value: 'Intituto Superior de Educação', label: 'Intituto Superior de Educação'},
                        { value: 'ISECMAR ', label: 'ISECMAR '},
                        { value: 'Univ. Agunstinho Neto', label: 'Univ. Agustinho Neto'},
                        { value: 'Univ. Complutense de Madrid', label: 'Univ. Complutense de Madrid'},
                        { value: 'Univ. de Havana', label: 'Univ. de Havana'},
                      ],
                      colSize: 4,
                    }
                  },
                  {
                    type: 'Select2Input',
                    config: {
                      type: 'select',
                      name: 'curso',
                      label: 'Curso',
                      required: true,
                      options: [
                        { value: 'Astrofísica', label: 'Astrofísica'},
                        { value: 'Desenho', label: 'Desenho'},
                        { value: 'Engenharia Informática', label: 'Engenharia Informática'},
                        { value: 'Engenharia Mecânica', label: 'Engenharia Mecânica'},
                        { value: 'Medicina', label: 'Medicina'},
                        { value: 'Neurociencia', label: 'Neurociencia'},
                        { value: 'Optometria y Visião', label: 'Optometria y Visião'},
                      ],
                      colSize: 4,
                    }
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
                  { header: "Identificação", accessorKey: "docid", enableColumnFilter: false },
                  { header: "Curso", accessorKey: "curso", enableColumnFilter: false },
                  { header: "Instituição", accessorKey: "instituicao", enableColumnFilter: false },
                  { header: "Grau Académico", accessorKey: "grau", enableColumnFilter: false },
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
                id: 'tablaregistros',
                componentName: 'TableComponent',
                config: {
                  title: 'Registros',
                  showTitle: true,
                  pageSize: 5,
                  isGlobalFilter: true,
                  SearchPlaceholder: 'Search...',
                  isPagination: true,
                  isSortable: true,
                  servrSsidePagination: false,
                  actionTitle: 'Ações',
                },
                fields: [
                  { header: "Nome", accessorKey: "nome", enableColumnFilter: false },
                  { header: "Identificação", accessorKey: "docid", enableColumnFilter: false },
                  { header: "Curso", accessorKey: "curso", enableColumnFilter: false },
                  { header: "Instituição", accessorKey: "instituicao", enableColumnFilter: false },
                  { header: "Grau Académico", accessorKey: "grau", enableColumnFilter: false },
                  { header: "Contato", accessorKey: "telemovel", enableColumnFilter: false }
                ],
                actions: [
                  {
                    id:'removeregistro',
                    type: 'Button',                    
                    config: {
                      icon: 'ri-delete-bin-5-line',
                      className: 'btn-ghost-danger',
                      refreshTable: true,
                      actionType: 'alert',
                      alertTitle:"Eliminar Registro",
                      alertMessage:"Tem certeza que pretende elimanr este registro?",
                      alertConfirmButtonLabel:"Eliminar",
                      alertCancelButtonLabel:"Cancelar"
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
