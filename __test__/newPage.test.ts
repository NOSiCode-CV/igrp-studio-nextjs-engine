import { initCodeSnippets, initComponents, newPage, setEngineConfiguration } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST2 } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST2;

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'viewNegociacao',
  path: 'imoveis/negociacao/[uuid]/view',
  description: 'Visualizar Negociação',
  forceDynamic: false,
  id: 'page_view_negociacao',
  types: [
    {
      componentId: 'table_vistorias',
      name: 'TableVistorias',
      path: '',
      fields: [
        {
          componentId: 'tabledatecell_data_vistoria',
          name: 'dataVistoria',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_tipo_vistoria',
          name: 'tipoVistoriaDesc',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_estado',
          name: 'estadoVistoria',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tablehiddencell_id_vistoria',
          name: 'idVistoria',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
      ],
    },
    {
      componentId: 'table_acordos',
      name: 'TableAcordos',
      path: '',
      fields: [
        {
          componentId: 'tabledatecell_data_acordo',
          name: 'dataAcordo',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_tipo_acordo',
          name: 'tipoAcordoDesc',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_valor',
          name: 'valor',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_estado_acordo',
          name: 'estadoAcordo',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tablehiddencell_id_acordo',
          name: 'idAcordo',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
      ],
    },
    {
      componentId: 'table_documentos',
      name: 'TableDocumentos',
      path: '',
      fields: [
        {
          componentId: 'tabletextcell_tipo',
          name: 'descricaoTipoDocumento',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tablelinkcell_url',
          name: 'url',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
      ],
    },
  ],
  states: [
    {
      id: 'state_data_contato',
      name: 'dataContatoText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_forma_contato',
      name: 'formaContatoText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_observacoes',
      name: 'observacoesText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_open_vistoria_modal',
      name: 'openVistoriaModal',
      type: 'boolean',
      defaultValue: 'false',
      imports: [],
      isArray: false,
      isOptional: false,
    },
    {
      id: 'state_selected_vistoria',
      name: 'selectedVistoria',
      type: 'string',
      defaultValue: 'undefined',
      imports: [],
      isArray: false,
      isOptional: true,
    },
  ],
  functions: [],
  parentName: 'imoveis',
  args: [
    {
      id: 'arg_uuid',
      type: 'string',
      name: 'uuid',
      isList: false,
      isOptional: false,
      isInterface: false,
      isFunction: false,
      isState: false,
    },
  ],
  components: {
    id: 'page_root',
    componentName: 'page',

    properties: {
      variant: 'default',
      commonProperties: {
        generateReference: false,
      },
    },
    children: [
      {
        id: 'section_main',
        componentName: 'section',

        properties: {
          spaceX: '6',
          spaceY: '6',
          commonProperties: {
            generateReference: false,
          },
        },
        children: [
          {
            id: 'pageheader_view',
            tag: 'pageHeader1',
            componentName: 'pageHeader',

            children: [
              {
                id: 'button_hsp4wd',
                tag: 'button1',
                componentName: 'button',

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
                  content: 'Agendar Vistoria',
                  variant: 'default',
                  size: 'default',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'CalendarClock',
                  },
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
              },
              {
                id: 'button_s7q5bn',
                tag: 'button2',
                componentName: 'button',

                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'navigate',
                    function: {
                      fnCustomSet: '() => {}',
                      type: 'function',
                      fnCustomCode: {
                        imports: [],
                      },
                    },
                    action: {},
                    navigate: {
                      path: 'imoveis/negociacao/[uuid]/acordo/novo',
                      name: 'goTonovoAcordo',
                      segments: [
                        {
                          name: '[uuid]',
                          tag: 'uuid',
                          context: 'pageParam',
                        },
                      ],
                      params: [],
                    },
                  },
                },
                allowTypes: false,
                data: {},
                properties: {
                  content: 'Registar Acordo',
                  variant: 'secondary',
                  size: 'default',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'BookA',
                  },
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
              },
            ],
            properties: {
              title: 'Visualizar Negociação',
              description: '',
              variant: 'h3',
              iconProperties: {
                iconBackButton: 'ArrowLeft',
              },
              commonProperties: {
                generateReference: false,
              },
              urlBackButton: 'imoveis/negociacao',
              showBackButton: true,
            },
          },
          {
            id: 'grid_04ez8i',
            tag: 'grid1',
            componentName: 'grid',

            type: 'group',
            children: [
              {
                id: 'infocard_negociacao',
                tag: 'infoNegociacao',
                componentName: 'infoCard',

                children: [
                  {
                    id: 'infoSection_detalhes',
                    componentName: 'infoSection',

                    children: [
                      {
                        id: 'infoitem_data_contato',
                        tag: 'dataContato',
                        componentName: 'infoItem',

                        children: [],
                        data: {
                          text: {
                            state: {
                              id: '',
                              name: 'dataContatoText',
                              type: '',
                              imports: [],
                              generate: false,
                            },
                          },
                        },
                        properties: {
                          text: '',
                          colorItem: 'primary',
                          variantItem: 'solid',
                          iconProperties: {
                            showIcon: false,
                            icon: 'Info',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                      },
                      {
                        id: 'infoitem_forma_contato',
                        tag: 'formaContatoDesc',
                        componentName: 'infoItem',

                        children: [],
                        data: {
                          text: {
                            state: {
                              id: '',
                              name: 'formaContatoText',
                              type: '',
                              imports: [],
                              generate: false,
                            },
                          },
                        },
                        properties: {
                          text: '',
                          colorItem: 'primary',
                          variantItem: 'solid',
                          iconProperties: {
                            showIcon: false,
                            icon: 'Info',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                      },
                      {
                        id: 'infoitem_observacoes',
                        tag: 'detalhes',
                        componentName: 'infoItem',

                        children: [],
                        data: {
                          text: {
                            state: {
                              id: '',
                              name: 'observacoesText',
                              type: '',
                              imports: [],
                              generate: false,
                            },
                          },
                        },
                        properties: {
                          text: '',
                          colorItem: 'primary',
                          variantItem: 'solid',
                          iconProperties: {
                            showIcon: false,
                            icon: 'Info',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                      },
                    ],
                    properties: {
                      variant: 'soft',
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                  },
                ],
                properties: {
                  title: 'Informações da Negociação',
                  colorSection: 'primary',
                  variantSection: 'solid',
                  orientation: 'vertical',
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
              },
              {
                id: 'tabs_container',
                tag: 'tabs1',
                componentName: 'tabs',

                type: 'group',
                children: [
                  {
                    id: 'tabsitem_vistorias',
                    tag: 'tabsItem1',
                    componentName: 'tabsItem',

                    children: [
                      {
                        id: 'table_vistorias',
                        tag: 'tableVistorias',
                        componentName: 'table',

                        type: 'group',
                        children: [
                          {
                            id: 'tablecolumns_vistorias',
                            tag: 'tableColumnsVistorias',
                            componentName: 'tableColumns',

                            children: [
                              {
                                id: 'tabledatecell_data_vistoria',
                                tag: 'dataVistoria',
                                componentName: 'tableDateCell',

                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  headerTitle: 'Data Vistoria',
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
                                  },
                                  date: '01/01/2025',
                                  dateFormat: 'dd/MM/yyyy',
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'tabletextcell_tipo_vistoria',
                                tag: 'tipoVistoriaDesc',
                                componentName: 'tableTextCell',

                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  headerTitle: 'Tipo Vistoria',
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
                                id: 'tabletextcell_estado',
                                tag: 'estadoVistoria',
                                componentName: 'tableTextCell',

                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  headerTitle: 'Estado',
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
                                id: 'tableactionlistcell_actions_vistorias',
                                tag: 'tableActionListCell1',
                                componentName: 'tableActionListCell',

                                type: '',
                                children: [
                                  {
                                    id: 'tablelinkaction_editar_vistoria',
                                    tag: 'tableLinkAction2',
                                    componentName: 'tableLinkAction',

                                    type: '',
                                    children: [],
                                    interactions: {
                                      action: {
                                        type: 'function',
                                        function: {
                                          fnCustomSet:
                                            '() => {\n  setOpenVistoriaModal(true);\n  setSelectedVistoria(rowData.idVistoria)\n}',
                                          fnCustomCode: {
                                            imports: [],
                                          },
                                          type: 'function',
                                        },
                                        action: {},
                                      },
                                    },
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      labelTrigger: 'Editar',
                                      iconProperties: {
                                        iconName: 'Edit',
                                      },
                                      variant: 'ghost',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                    childProperties: {},
                                    style: {},
                                  },
                                ],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  headerTitle: '',
                                  type: 'inline',
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'tablehiddencell_id_vistoria',
                                tag: 'idVistoria',
                                componentName: 'tableHiddenCell',

                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  headerTitle: 'ID Vistoria',
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
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
                              commonProperties: {},
                            },
                          },
                        ],
                        interactions: {},
                        allowTypes: true,
                        data: {
                          data: {
                            state: {
                              id: '',
                              type: 'TableVistorias[]',
                              name: 'contentTabletableVistorias',
                              defaultValue: '[]',
                              imports: [],
                              generate: true,
                            },
                          },
                        },
                        properties: {
                          pageSizePagination: [],
                          commonProperties: {},
                        },
                        dataType: 'TableVistorias',
                      },
                      {
                        id: 'vistoriamodal_negociacao',
                        tag: 'VistoriaModal1',
                        componentName: 'VistoriaFormModal',

                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {
                          isOpen: {
                            state: {
                              id: '',
                              name: 'openVistoriaModal',
                              type: '',
                              imports: [],
                              generate: false,
                            },
                          },
                          uuid: {
                            state: {
                              id: '',
                              name: 'selectedVistoria',
                              type: '',
                              imports: [],
                              generate: false,
                            },
                          },
                        },
                        properties: {
                          customProperties: {
                            isEdit: true,
                          },
                        },
                        childProperties: {},
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      value: 'vistorias',

                      iconProperties: {
                        icon: 'SearchCheck',
                      },
                      badgeVariant: 'solid',
                      badgeColor: 'primary',
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    childProperties: {},
                  },
                  {
                    id: 'tabsitem_acordos',
                    tag: 'tabsItem2',
                    componentName: 'tabsItem',

                    children: [
                      {
                        id: 'table_acordos',
                        tag: 'tableAcordos',
                        componentName: 'table',

                        type: 'group',
                        children: [
                          {
                            id: 'tablecolumns_acordos',
                            tag: 'tableColumnsAcordos',
                            componentName: 'tableColumns',

                            children: [
                              {
                                id: 'tabledatecell_data_acordo',
                                tag: 'dataAcordo',
                                componentName: 'tableDateCell',

                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  headerTitle: 'Data Acordo',
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
                                  },
                                  date: '01/01/2025',
                                  dateFormat: 'dd/MM/yyyy',
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'tabletextcell_tipo_acordo',
                                tag: 'tipoAcordoDesc',
                                componentName: 'tableTextCell',

                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  headerTitle: 'Tipo Acordo',
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
                                id: 'tabletextcell_valor',
                                tag: 'valor',
                                componentName: 'tableTextCell',

                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  headerTitle: 'Valor',
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
                                id: 'tabletextcell_estado_acordo',
                                tag: 'estadoAcordo',
                                componentName: 'tableTextCell',

                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  headerTitle: 'Estado',
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
                                id: 'tableactionlistcell_efb8zy',
                                tag: 'tableActionListCell2',
                                componentName: 'tableActionListCell',

                                type: '',
                                children: [
                                  {
                                    id: 'tablelinkaction_7x2uon',
                                    tag: 'tableLinkAction1',
                                    componentName: 'tableLinkAction',

                                    type: '',
                                    children: [],
                                    interactions: {
                                      action: {
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
                                      labelTrigger: 'Editar',
                                      iconProperties: {
                                        iconName: 'Pencil',
                                      },
                                      variant: 'ghost',
                                      href: 'imoveis/negociacao/acordo/[uuid]/edit',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                      segments: [
                                        {
                                          name: '[uuid]',
                                          tag: 'idAcordo',
                                          context: 'column',
                                        },
                                      ],
                                      params: [],
                                    },
                                    childProperties: {},
                                  },
                                ],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  headerTitle: 'Actions Column',
                                  type: 'inline',
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'tablehiddencell_id_acordo',
                                tag: 'idAcordo',
                                componentName: 'tableHiddenCell',

                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  headerTitle: 'ID Acordo',
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
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
                              commonProperties: {},
                            },
                          },
                        ],
                        interactions: {},
                        allowTypes: true,
                        data: {
                          data: {
                            state: {
                              id: '',
                              type: 'TableAcordos[]',
                              name: 'contentTabletableAcordos',
                              defaultValue: '[]',
                              imports: [],
                              generate: true,
                            },
                          },
                        },
                        properties: {
                          pageSizePagination: [],
                          commonProperties: {},
                        },
                        dataType: 'TableAcordos',
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      value: 'acordos',

                      iconProperties: {
                        icon: 'FileSignature',
                      },
                      badgeVariant: 'solid',
                      badgeColor: 'primary',
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    childProperties: {},
                  },
                  {
                    id: 'tabsitem_anexos',
                    tag: 'tabsItem3',
                    componentName: 'tabsItem',

                    children: [
                      {
                        id: 'table_documentos',
                        tag: 'tableDocumentos',
                        componentName: 'table',

                        children: [
                          {
                            id: 'tablecolumns_docs',
                            tag: 'tableColumnsDocs',
                            componentName: 'tableColumns',

                            children: [
                              {
                                id: 'tabletextcell_tipo',
                                tag: 'descricaoTipoDocumento',
                                componentName: 'tableTextCell',

                                properties: {
                                  headerTitle: 'Tipo de Documento',
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
                                  },
                                  variant: 'default',
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                              },
                              {
                                id: 'tablelinkcell_url',
                                tag: 'url',
                                componentName: 'tableLinkCell',

                                children: [],
                                properties: {
                                  headerTitle: 'Documento',
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
                                  },
                                  href: '${row.original.url}',
                                  target: '_blank',
                                  color: 'secondary',
                                  iconProperties: {
                                    showIcon: true,
                                    iconName: 'FileText',
                                  },
                                  variant: 'solid',
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                  content: 'Ver Documento',
                                  params: [],
                                },
                              },
                            ],
                            properties: {
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                          },
                        ],
                        properties: {
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        data: {
                          data: {
                            state: {
                              id: '',
                              name: 'contentTabletableDocumentos',
                              type: 'TableDocumentos[]',
                              defaultValue: '[]',
                              generate: true,
                            },
                          },
                        },
                        dataType: 'tableDocumentos',
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      value: 'anexos',

                      iconProperties: {
                        icon: 'Paperclip',
                      },
                      badgeVariant: 'solid',
                      badgeColor: 'primary',
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
                  variant: 'default',
                  badgePlacement: 'end',
                  orientation: 'horizontal',
                  iconProperties: {
                    showIcon: false,
                    iconPlacement: 'start',
                  },
                  commonProperties: {
                    generateReference: false,
                  },
                  items: [],
                },
                childProperties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              gap: 4,
              variant: {
                default: 'cols2',
                md: 'cols2',
                lg: 'cols2',
              },
              commonProperties: {
                generateReference: false,
              },
            },
            childProperties: {
              className: 'col-span-1',
            },
          },
        ],
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
                id: 'import_D3TZb5',
                namespace:
                  "import { usePageVisualizarNegociacao } from '@/app/(myapp)/hooks/use-imovel'",
              },
            ],
            fnCode:
              "const { negociacao, vistorias, acordos, loadingUnique } = usePageVisualizarNegociacao(uuid);\n\nuseEffect(() => {\n  if (!negociacao) return;\n\n  setDataContatoText(negociacao.dataContato || '');\n  setFormaContatoText(\n    negociacao.formaContatoDesc || negociacao.formaContato || ''\n  );\n  setObservacoesText(negociacao.detalhes || '');\n\n  setContentTabletableDocumentos(\n    (negociacao.documentos || []).map((item: any) => ({\n      ...item,\n      url: `/api/documento?fileId=${item.url}`,\n    }))\n  );\n}, [negociacao]);\n\nuseEffect(() => {\n  setContentTabletableVistorias(vistorias || []);\n}, [vistorias]);\n\nuseEffect(() => {\n  setContentTabletableAcordos(acordos || []);\n}, [acordos]);\n",
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
  setEngineConfiguration({ environment: 'development' });
});

describe('Page module', () => {
  it('should save the page configuration file', async () => {
    await newPage(pageConfig, OUTPUT_DIR);
  });
});
