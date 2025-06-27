import { initCodeSnippets, initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST2 } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST2;

const dashboardLayout: Layout = {
  id: 'grid_dashboard',
  tag: 'grid_dashboard',
  componentName: 'grid',
  properties: {
    variant: 'cols2',
    className: 'border rounded-lg',
    padding: '4',
  },
  children: [
    {
      id: 'flex_sidebar',
      tag: 'flex_sidebar',
      componentName: 'flex',
      properties: {
        variant: 'col',
        className: 'border-r',
        width: '1/4',
        padding: '4',
      },
      children: [
        {
          id: 'card_profile',
          tag: 'card_profile',
          componentName: 'card',
          properties: {
            variant: 'bordered',
          },
        },
      ],
    },
    {
      id: 'container_main',
      tag: 'container_main',
      componentName: 'container',
      properties: {
        variant: 'default',
      },
      children: [
        {
          id: 'section_content',
          tag: 'section_content',
          componentName: 'section',
          properties: {
            className: 'bg-gray-100 rounded-lg',
            padding: '6',
          },
        },
        {
          id: 'label_field',
          tag: 'label_field',
          componentName: 'label',
          content: 'Name',
        },
        {
          id: 'input_field',
          tag: 'input_field',
          componentName: 'input',
          properties: {
            placeholder: 'Enter the name',
          },
        },
        {
          id: 'checkbox_1',
          tag: 'checkbox_1',
          componentName: 'checkbox',
        },
        {
          id: 'button_submit',
          tag: 'button_submit',
          componentName: 'button',
          content: 'Submit',
          interactions: {
            onClick: {
              formSubmit: {
                targetForm: 'form1',
              },
            },
          },
        },
      ],
    },
  ],
};

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'view',
  path: '(contribuinte)/contribuintes/[uuid]/view',
  description: 'Visualizar contribuinte',
  forceDynamic: false,
  id: 'xcblrtpadq',
  types: [
    {
      componentId: 'table_0ui9bz',
      name: 'tableAnexos',
      path: '',
      fields: [
        {
          componentId: 'tabletextcell_c18rla',
          name: 'descricaoTipoDocumento',
          type: 'number',
          required: false,
          defaultValue: '',
        },
        {
          componentId: 'tabletextcell_5ax9xk',
          name: 'url',
          type: 'string',
          required: false,
          defaultValue: '',
        },
      ],
    },
    {
      componentId: 'table_w0340b',
      name: 'tableatividades',
      path: '',
      fields: [
        {
          componentId: 'tabletextcell_j45wd3',
          name: 'idActividadeEconomica',
          type: 'string',
          required: false,
          defaultValue: '',
        },
        {
          componentId: 'tabletextcell_3nbnyu',
          name: 'designacao',
          type: 'string',
          required: false,
          defaultValue: '',
        },
        {
          componentId: 'tablebadgecell_8stkmr',
          name: 'tableBadgeCell1',
          type: 'string',
          required: false,
          defaultValue: '',
        },
      ],
    },
  ],
  states: [
    {
      id: 'state_yZGfQt',
      name: 'dataRegistoText',
      type: 'string',
      imports: [],
      defaultValue: '',
    },
    {
      id: 'state_U5non5',
      name: 'nomeComercialText',
      type: 'string',
      imports: [],
      defaultValue: '',
    },
  ],
  functions: [
    {
      id: 'fnc_YogiYU',
      name: 'goToEdit',
      code: '\nconst contribuinteId = params.uuid as string;\nrouter.push(`/contribuintes/${contribuinteId}/edit`)',
      returnValue: {
        type: 'void',
        isNullable: true,
        isList: false,
      },
      imports: [
        {
          id: 'import_swoaPO',
          namespace: 'import { useRouter } from "next/navigation";',
        },
        {
          id: 'import__SRua',
          namespace: "import { useParams } from 'next/navigation';",
        },
      ],
      arguments: [],
    },
  ],
  parentName: 'contribuintes',
  components: {
    id: 'page_watl8d',
    componentName: 'page',
    label: 'page',
    properties: {
      variant: 'default',
      commonProperties: {
        generateReference: false,
      },
    },
    children: [
      {
        id: 'section_1qw9o9',
        componentName: 'section',
        label: 'section',
        properties: {
          spaceX: '6',
          spaceY: '6',
          commonProperties: {
            generateReference: false,
          },
        },
        children: [
          {
            id: 'pageheader_w5f2n4',
            tag: 'pageHeader1',
            componentName: 'pageHeader',
            label: 'Page Header',
            type: 'group',
            children: [
              {
                id: 'button_ozx9fr',
                tag: 'button2',
                componentName: 'button',
                label: 'Button',
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'function',
                    function: {
                      fnCustomSet: '() => {}',
                      type: 'function',
                    },
                    action: {},
                  },
                },
                allowTypes: false,
                data: {},
                properties: {
                  content: 'Imprimir',
                  variant: 'outline',
                  size: 'default',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'Printer',
                  },
                  disabled: false,
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
              },
              {
                id: 'button_2a2pgw',
                tag: 'button1',
                componentName: 'button',
                label: 'Button',
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'function',
                    function: {
                      fnCustomSet: '() => {}',
                      type: 'function',
                      fnCustomCode: {
                        imports: [
                          {
                            id: 'import_uXuvCY',
                            namespace: "import { useParams } from 'next/navigation';",
                          },
                        ],
                      },
                      fnName: 'goToEdit',
                    },
                    action: {},
                  },
                },
                allowTypes: false,
                data: {},
                properties: {
                  content: 'Editar',
                  variant: 'default',
                  size: 'default',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'Pen',
                  },
                  disabled: false,
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              title: 'Visualizar Contribuinte',
              description: '',
              variant: 'h3',
              showBackButton: true,
              urlBackButton: '(contribuinte)/contribuintes',
              iconProperties: {
                iconBackButton: 'ArrowLeft',
              },
              commonProperties: {
                generateReference: false,
              },
            },
            childProperties: {},
          },
          {
            id: 'statusbanner_v9o5zf',
            tag: 'statusBanner1',
            componentName: 'statusBanner',
            label: 'Status Banner',
            type: 'group',
            children: [],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              color: 'success',
              variant: 'soft',
              text: 'Status: Ativo',
              badgeColor: 'secondary',
              badgeVariant: 'solid',
              badgeText: 'Privado',
              commonProperties: {
                generateReference: false,
              },
            },
            childProperties: {},
          },
          {
            id: 'columns_bdi9wt',
            tag: 'columns1',
            componentName: 'columns',
            label: 'Columns',
            type: 'group',
            children: [
              {
                id: 'column_ju1g22',
                tag: 'column1',
                componentName: 'column',
                label: 'Column',
                children: [
                  {
                    id: 'infocard_yhw4m2',
                    tag: 'inforBasicas',
                    componentName: 'infoCard',
                    label: 'Info Card',
                    type: 'group',
                    children: [
                      {
                        id: 'infosection_sy91xi',
                        tag: 'infoSection1',
                        componentName: 'infoSection',
                        label: 'Info Section',
                        children: [
                          {
                            id: 'infoitem_z5gtim',
                            tag: 'infoItem1',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            type: '',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              label: 'NIF',
                              text: '',
                              colorItem: 'primary',
                              variantItem: 'solid',
                              iconProperties: {
                                icon: 'Info',
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'infoitem_isr63s',
                            tag: 'nomeComercial',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            type: '',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'nomeComercialText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Nome/Razão Social',
                              text: '',
                              colorItem: 'primary',
                              variantItem: 'solid',
                              iconProperties: {
                                icon: 'AlignVerticalJustifyCenter',
                                showIcon: false,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'infoitem_6agqhr',
                            tag: 'infoItem3',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            type: '',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              label: 'Setor',
                              text: '',
                              colorItem: 'primary',
                              variantItem: 'solid',
                              iconProperties: {
                                icon: 'Info',
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {},
                        childProperties: {},
                      },
                      {
                        id: 'infosection_437qj1',
                        tag: 'infoSection2',
                        componentName: 'infoSection',
                        label: 'Info Section',
                        type: '',
                        children: [
                          {
                            id: 'infoitem_axxrxe',
                            tag: 'infoItem12',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              label: 'Email',
                              text: '',
                              colorItem: 'primary',
                              variantItem: 'solid',
                              iconProperties: {
                                icon: 'Info',
                                showIcon: false,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'infoitem_ll0vyf',
                            tag: 'infoItem123',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            type: '',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              label: 'Telefone',
                              text: '',
                              colorItem: 'primary',
                              variantItem: 'solid',
                              iconProperties: {
                                icon: 'Info',
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'infoitem_ysopbc',
                            tag: 'infoItem2',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            type: '',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              label: 'Endereço',
                              text: '',
                              colorItem: 'primary',
                              variantItem: 'solid',
                              iconProperties: {
                                icon: 'Calendar',
                                showIcon: false,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {},
                        childProperties: {},
                      },
                      {
                        id: 'infosection_3endrt',
                        tag: 'infoSection2f',
                        componentName: 'infoSection',
                        label: 'Info Section',
                        type: '',
                        children: [
                          {
                            id: 'infoitem_t4ztkk',
                            tag: 'dataRegisto',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'dataRegistoText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Data de Registro',
                              text: '',
                              colorItem: 'primary',
                              variantItem: 'solid',
                              iconProperties: {
                                icon: 'Calendar',
                                showIcon: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {},
                        childProperties: {},
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      colorSection: 'primary',
                      variantSection: 'solid',
                      commonProperties: {
                        generateReference: false,
                      },
                      title: 'Informações Básicas',
                    },
                    childProperties: {},
                  },
                ],
                interactions: {},
                allowTypes: false,
                data: {},
                properties: {
                  variant: 'span3',
                },
              },
              {
                id: 'column_hyz4tv',
                tag: 'column2',
                componentName: 'column',
                label: 'Column',
                type: '',
                children: [
                  {
                    id: 'tabs_klrfst',
                    tag: 'tabs1',
                    componentName: 'tabs',
                    label: 'Tabs',
                    type: 'group',
                    children: [
                      {
                        id: 'tabsitem_k0tfb3',
                        tag: 'tabsItem2',
                        componentName: 'tabsItem',
                        label: 'Tabs Item',
                        children: [
                          {
                            id: 'headline_ss1ib4',
                            tag: 'headline1',
                            componentName: 'headline',
                            label: 'Headline',
                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              title: 'Actividades Económicas',
                              description: '',
                              variant: 'h3',
                              roleColor: 'solid',
                              color: 'primary',
                              iconProperties: {
                                showIcon: false,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'table_w0340b',
                            tag: 'table1',
                            componentName: 'table',
                            label: 'Table',
                            type: 'group',
                            children: [
                              {
                                id: 'tablecolumns_c09txg',
                                tag: 'tableColumns1',
                                componentName: 'tableColumns',
                                label: 'Table Column',
                                children: [
                                  {
                                    id: 'tabletextcell_j45wd3',
                                    tag: 'idActividadeEconomica',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Codigo',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      variant: 'default',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                  },
                                  {
                                    id: 'tabletextcell_3nbnyu',
                                    tag: 'designacao',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Descriçāo',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      variant: 'default',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                  },
                                  {
                                    id: 'tablebadgecell_8stkmr',
                                    tag: 'tableBadgeCell1',
                                    componentName: 'tableBadgeCell',
                                    label: 'Badge Column',
                                    type: '',
                                    children: [],
                                    interactions: {
                                      customize: {
                                        type: 'function',
                                        function: {
                                          type: 'function',
                                        },
                                        action: {},
                                      },
                                    },
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Principal',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      iconProperties: {
                                        showIcon: false,
                                        iconName: 'Info',
                                        iconPlacement: 'start',
                                      },
                                      variant: 'soft',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                  },
                                ],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'tablefilters_kuwmg4',
                                tag: 'tableFilters1',
                                componentName: 'tableFilters',
                                label: 'Table Filter',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                              },
                            ],
                            interactions: {},
                            allowTypes: true,
                            data: {
                              data: {
                                state: {
                                  id: '',
                                  type: '{{type}}[]',
                                  name: 'contentTable{{id}}',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              showFilter: false,
                              showPagination: false,
                              showToggleColumn: false,
                              isNumericPagination: false,
                              isServerSide: false,
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            dataType: 'tableatividades',
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          value: 'actividades',
                          label: 'Actividades',
                          iconProperties: {
                            icon: 'Briefcase',
                          },
                          disabled: false,
                          commonProperties: {
                            generateReference: false,
                          },
                          className: '',
                        },
                        childProperties: {},
                      },
                      {
                        id: 'tabsitem_am033v',
                        tag: 'tabsItem133',
                        componentName: 'tabsItem',
                        label: 'Tabs Item',
                        type: '',
                        children: [
                          {
                            id: 'headline_os5qql',
                            tag: 'headline2',
                            componentName: 'headline',
                            label: 'Headline',
                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              title: 'Contactos',
                              description: '',
                              variant: 'h3',
                              roleColor: 'solid',
                              color: 'primary',
                              iconProperties: {
                                showIcon: false,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'table_xmvdvw',
                            tag: 'tableContactos',
                            componentName: 'table',
                            label: 'Table',
                            type: 'group',
                            children: [
                              {
                                id: 'tablecolumns_eihmjy',
                                tag: 'tableColumns2',
                                componentName: 'tableColumns',
                                label: 'Table Column',
                                children: [
                                  {
                                    id: 'tabletextcell_5g3g58',
                                    tag: 'tipoContactoDesc',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Tipo',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      variant: 'default',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                  },
                                  {
                                    id: 'tabletextcell_6qvi60',
                                    tag: 'contacto',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Contacto',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      variant: 'default',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                  },
                                ],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'tablefilters_xr5lbj',
                                tag: 'tableFilters2',
                                componentName: 'tableFilters',
                                label: 'Table Filter',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                              },
                            ],
                            interactions: {},
                            allowTypes: true,
                            data: {
                              data: {
                                state: {
                                  id: '',
                                  type: '{{type}}[]',
                                  name: 'contentTable{{id}}',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              showFilter: false,
                              showPagination: false,
                              showToggleColumn: false,
                              isNumericPagination: false,
                              isServerSide: false,
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            dataType: 'tableContactos',
                            childProperties: {},
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          value: 'contactos',
                          label: 'Contactos',
                          iconProperties: {
                            icon: 'Phone',
                          },
                          disabled: false,
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'tabsitem_qnzl0z',
                        tag: 'tabsItem1',
                        componentName: 'tabsItem',
                        label: 'Tabs Item',
                        type: '',
                        children: [
                          {
                            id: 'headline_6p0cms',
                            tag: 'headline3',
                            componentName: 'headline',
                            label: 'Headline',
                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              title: 'Endereços',
                              description: '',
                              variant: 'h3',
                              roleColor: 'solid',
                              color: 'primary',
                              iconProperties: {
                                showIcon: false,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'table_ulbzb3',
                            tag: 'tableTableEndereco',
                            componentName: 'table',
                            label: 'Table',
                            type: 'group',
                            children: [
                              {
                                id: 'tablecolumns_nrc3jj',
                                tag: 'tableColumns3',
                                componentName: 'tableColumns',
                                label: 'Table Column',
                                children: [
                                  {
                                    id: 'tabletextcell_ahz8y2',
                                    tag: 'tipoEnderecoDesc',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Tipo',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      variant: 'default',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                  },
                                  {
                                    id: 'tabletextcell_ks985e',
                                    tag: 'rua',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Endereço',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      variant: 'default',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                  },
                                ],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                              },
                              {
                                id: 'tablefilters_uq4pzw',
                                tag: 'tableFilters3',
                                componentName: 'tableFilters',
                                label: 'Table Filter',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                              },
                            ],
                            interactions: {},
                            allowTypes: true,
                            data: {
                              data: {
                                state: {
                                  id: '',
                                  type: '{{type}}[]',
                                  name: 'contentTable{{id}}',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              showFilter: false,
                              showPagination: false,
                              showToggleColumn: false,
                              isNumericPagination: false,
                              isServerSide: false,
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            dataType: 'tableEndereco',
                            childProperties: {},
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          value: 'tabsItemEndereco',
                          label: 'Endereços',
                          iconProperties: {
                            icon: 'MapPin',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'tabsitem_rncxpp',
                        tag: 'tabsItem5',
                        componentName: 'tabsItem',
                        label: 'Tabs Item',
                        type: '',
                        children: [
                          {
                            id: 'headline_a097tt',
                            tag: 'headline4',
                            componentName: 'headline',
                            label: 'Headline',
                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              title: 'Dados Bancários',
                              description: '',
                              variant: 'h3',
                              roleColor: 'solid',
                              color: 'primary',
                              iconProperties: {
                                showIcon: false,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'table_1bw4yu',
                            tag: 'tableBancaria',
                            componentName: 'table',
                            label: 'Table',
                            type: 'group',
                            children: [
                              {
                                id: 'tablecolumns_7e2h8n',
                                tag: 'tableColumns4',
                                componentName: 'tableColumns',
                                label: 'Table Column',
                                children: [
                                  {
                                    id: 'tabletextcell_o7mtx1',
                                    tag: 'operadoraDesc',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Banco',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      variant: 'default',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                  },
                                  {
                                    id: 'tabletextcell_m0tfat',
                                    tag: 'numConta',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Conta',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      variant: 'default',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                  },
                                ],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                              },
                              {
                                id: 'tablefilters_i8fs2x',
                                tag: 'tableFilters4',
                                componentName: 'tableFilters',
                                label: 'Table Filter',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                              },
                            ],
                            interactions: {},
                            allowTypes: true,
                            data: {
                              data: {
                                state: {
                                  id: '',
                                  type: '{{type}}[]',
                                  name: 'contentTable{{id}}',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              showFilter: false,
                              showPagination: false,
                              showToggleColumn: false,
                              isNumericPagination: false,
                              isServerSide: false,
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                            dataType: 'tableBancaria',
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          value: 'bancaria',
                          label: 'Bancários',
                          iconProperties: {
                            icon: 'CreditCard',
                          },
                          disabled: false,
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'tabsitem_o6lgi4',
                        tag: 'tabsItem6',
                        componentName: 'tabsItem',
                        label: 'Tabs Item',
                        type: '',
                        children: [
                          {
                            id: 'headline_wfbtxb',
                            tag: 'headline5',
                            componentName: 'headline',
                            label: 'Headline',
                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              title: 'Anexos',
                              description: '',
                              variant: 'h3',
                              roleColor: 'solid',
                              color: 'primary',
                              iconProperties: {
                                showIcon: false,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'table_0ui9bz',
                            tag: 'tableAnexos',
                            componentName: 'table',
                            label: 'Table',
                            type: 'group',
                            children: [
                              {
                                id: 'tablecolumns_vl5dhf',
                                tag: 'tableColumns5',
                                componentName: 'tableColumns',
                                label: 'Table Column',
                                children: [
                                  {
                                    id: 'tabletextcell_c18rla',
                                    tag: 'descricaoTipoDocumento',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Tipo',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      variant: 'default',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                  },
                                  {
                                    id: 'tabletextcell_5ax9xk',
                                    tag: 'url',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Nome',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      variant: 'default',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                  },
                                ],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'tablefilters_bgp5so',
                                tag: 'tableFilters5',
                                componentName: 'tableFilters',
                                label: 'Table Filter',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                              },
                            ],
                            interactions: {},
                            allowTypes: true,
                            data: {
                              data: {
                                state: {
                                  id: '',
                                  type: '{{type}}[]',
                                  name: 'contentTable{{id}}',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              showFilter: false,
                              showPagination: false,
                              showToggleColumn: false,
                              isNumericPagination: false,
                              isServerSide: false,
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                            dataType: 'tableAnexos',
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          value: 'anexos',
                          label: 'Anexos',
                          iconProperties: {
                            icon: 'FileText',
                          },
                          disabled: false,
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {
                      items: {
                        state: {
                          id: '',
                          type: 'IGRPTabItem[]',
                          name: 'tabs{{id}}Items',
                          defaultValue: '[]',
                          imports: [],
                          generate: true,
                        },
                      },
                    },
                    properties: {
                      variant: 'default',
                      iconProperties: {
                        showIcon: true,
                        iconPlacement: 'start',
                      },
                      contentBorder: true,
                      fullWidth: true,
                      commonProperties: {
                        generateReference: false,
                      },
                      tabContentClassName: 'border rounded-lg border-transparent-none',
                    },
                    childProperties: {},
                  },
                ],
                interactions: {},
                allowTypes: false,
                data: {},
                properties: {
                  variant: 'span9',
                },
                childProperties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              variant: 'cols12',
              gap: 4,
              commonProperties: {
                generateReference: false,
              },
            },
          },
          {
            id: 'columns_do455u',
            tag: 'columns2',
            componentName: 'columns',
            label: 'Columns',
            type: 'group',
            children: [
              {
                id: 'column_7uh7g3',
                tag: 'column3',
                componentName: 'column',
                label: 'Column',
                children: [
                  {
                    id: 'container_6bjo66',
                    tag: 'container1',
                    componentName: 'container',
                    label: 'Container',
                    type: 'group',
                    children: [
                      {
                        id: 'headline_a2b34q',
                        tag: 'headline6',
                        componentName: 'headline',
                        label: 'Headline',
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          title: 'Funcionários',
                          description: '',
                          variant: 'h3',
                          roleColor: 'solid',
                          color: 'primary',
                          iconProperties: {
                            showIcon: false,
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      className: 'border p-4 rounded-lg',
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    childProperties: {},
                  },
                ],
                interactions: {},
                allowTypes: false,
                data: {},
                properties: {
                  variant: 'span6',
                },
                childProperties: {},
              },
              {
                id: 'column_2_h45w3m',
                componentName: 'column',
                label: 'Column 2',
                properties: {
                  variant: 'span6',
                },
                children: [
                  {
                    id: 'container_rx5c1o',
                    tag: 'container2',
                    componentName: 'container',
                    label: 'Container',
                    type: 'group',
                    children: [
                      {
                        id: 'headline_xdskzb',
                        tag: 'headline7',
                        componentName: 'headline',
                        label: 'Headline',
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          title: 'Pagamentos',
                          description: '',
                          variant: 'h3',
                          roleColor: 'solid',
                          color: 'primary',
                          iconProperties: {
                            showIcon: false,
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      className: 'border p-4 rounded-lg',
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    childProperties: {},
                  },
                ],
                interactions: [],
                tag: '',
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              variant: 'cols12',
              gap: 4,
              commonProperties: {
                generateReference: false,
              },
            },
          },
        ],
        tag: 'section1',
        data: {},
        interactions: {},
      },
    ],
    tag: 'page1',
    data: {},
    interactions: {
      onLoad: {
        type: 'function',
        function: {
          type: 'function',
          fnCustomCode: {
            imports: [
              {
                namespace:
                  "import {useDetalheContribuinte} from '@/app/[locale]/(myapp)/hooks/use-contribuinte'",
                id: 'y542kpea3o',
              },
            ],
            fnCode:
              "const router = useRouter();\nconst params = useParams();\nconst { data, isLoading } = useDetalheContribuinte()\n\nuseEffect(() => {\n  if (isLoading && !data) return\n  setDataRegistoText(data?.dataEntrada || '')\n  setNomeComercialText(data?.nomeComercial || '')\n\n  setContentTabletable1((data?.actividadesEconomicas || []).map(item => ({\n    idActividadeEconomica: item.idActividadeEconomica?.toString() || '',\n    designacao: item.designacao || '',\n    tableBadgeCell1: item.nivelActividade ? 'Principal' : 'Secundária'\n  })))\n  setContentTabletableContactos(data?.contactos || [])\n  setContentTabletableTableEndereco(data?.enderecos || [])\n  setContentTabletableBancaria((data?.dadosBancarios || []).map(item => ({\n    operadoraDesc: item.operadoraDesc || '',\n    numConta: item.numConta?.toString() || ''\n  })))\n  setContentTabletableAnexos((data?.anexos || []).map(item => ({\n    descricaoTipoDocumento: parseInt(item.descricaoTipoDocumento) || 0,\n    url: item.url || ''\n  })))\n\n}, [data])",
          },
        },
        action: {},
      },
    },
    childProperties: {},
  },
  imports: [],
};

beforeAll(async () => {
  await initComponents();
  await initCodeSnippets();
});

describe('Page module', () => {
  it('should save the page configuration file', async () => {
    await newPage(pageConfig, OUTPUT_DIR);
  });
});
