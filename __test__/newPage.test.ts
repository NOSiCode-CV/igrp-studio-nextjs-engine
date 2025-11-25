import { initCodeSnippets, initComponents, newPage, setEngineConfiguration } from '../src';
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
  pageName: 'viewImovel',
  path: 'imoveis/[uuid]',
  description: 'Visualizar Imóvel',
  forceDynamic: false,
  id: 'page_view_imovel',
  types: [
    {
      componentId: 'table_fracoes',
      name: 'tableFracoes',
      path: '',
      fields: [
        {
          componentId: 'tabletextcell_codigo',
          name: 'codigo',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_tipologia',
          name: 'tipologia',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_area',
          name: 'area',
          type: 'number',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_valor',
          name: 'valor',
          type: 'number',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tablebadgecell_estado',
          name: 'estado',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
      ],
    },
    {
      componentId: 'table_documentos',
      name: 'tableDocumentos',
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
      id: 'state_codigo',
      name: 'codigoText',
      type: 'string',
      imports: [],
      defaultValue: "''",
    },
    {
      id: 'state_tipo',
      name: 'tipoImovelText',
      type: 'string',
      imports: [],
      defaultValue: "''",
    },
    {
      id: 'state_nome',
      name: 'nomeText',
      type: 'string',
      imports: [],
      defaultValue: "''",
    },
    {
      id: 'state_rua',
      name: 'ruaText',
      type: 'string',
      imports: [],
      defaultValue: "''",
    },
    {
      id: 'state_valor',
      name: 'valorText',
      type: 'string',
      imports: [],
      defaultValue: "''",
    },
    {
      id: 'state_area_tc',
      name: 'areaTotalConstruidaText',
      type: 'string',
      imports: [],
      defaultValue: "''",
    },
    {
      id: 'state_area_td',
      name: 'areaTotalDescobertaText',
      type: 'string',
      imports: [],
      defaultValue: "''",
    },
    {
      id: 'state_area_tt',
      name: 'areaTotalText',
      type: 'string',
      imports: [],
      defaultValue: "''",
    },
    {
      id: 'state_statusBanner',
      name: 'statusBannerEstado',
      type: 'string',
      imports: [],
      defaultValue: "''",
    },
    {
      id: 'state_tbl_fracoes',
      name: 'contentTabletableFracoes',
      type: 'tableFracoes[]',
      imports: [],
      defaultValue: '[]',
    },
    {
      id: 'state_tbl_documentos',
      name: 'contentTabletableDocumentos',
      type: 'tableDocumentos[]',
      imports: [],
      defaultValue: '[]',
    },
  ],
  functions: [
    {
      id: 'fnc_goToEdit',
      name: 'goToEdit',
      code: 'router.push(`/imoveis/${uuid}/edit`)',
      returnValue: {
        type: 'void',
        isNullable: true,
        isList: false,
      },
      imports: [
        {
          id: 'import_router',
          namespace: 'import { useRouter } from "next/navigation";',
        },
      ],
      arguments: [],
      isAsync: false,
    },
  ],
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
    label: 'page',
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
            id: 'pageheader_view',
            tag: 'pageHeader1',
            componentName: 'pageHeader',
            label: 'Page Header',
            properties: {
              title: 'Visualizar Imóvel',
              description: '',
              variant: 'h3',
              iconProperties: {
                iconBackButton: 'ArrowLeft',
              },
              commonProperties: {
                generateReference: false,
              },
              showBackButton: true,
              urlBackButton: 'imoveis',
            },
          },
          {
            id: 'statusbanner_imovel',
            tag: 'statusBanner1',
            componentName: 'statusBanner',
            label: 'Status Banner',
            data: {
              text: {
                state: {
                  id: '',
                  name: 'statusBannerEstado',
                  type: '',
                  imports: [],
                  generate: false,
                },
              },
            },
            properties: {
              color: 'success',
              variant: 'soft',
              text: '',
              badgeColor: 'secondary',
              badgeVariant: 'solid',
              badgeText: '',
              commonProperties: {
                generateReference: false,
              },
            },
          },
          {
            id: 'columns_basic',
            tag: 'columns1',
            componentName: 'columns',
            label: 'Columns',
            children: [
              {
                id: 'column_left',
                tag: 'column1',
                componentName: 'column',
                label: 'Column',
                children: [
                  {
                    id: 'infocard_basic',
                    tag: 'infoBasicas',
                    componentName: 'infoCard',
                    label: 'Info Card',
                    children: [
                      {
                        id: 'infosection_basic1',
                        tag: 'infoSection1',
                        componentName: 'infoSection',
                        label: 'Info Section',
                        children: [
                          {
                            id: 'infoitem_codigo',
                            tag: 'codigo',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'codigoText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Código',
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
                            id: 'infoitem_tipo',
                            tag: 'tipoImovel',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'tipoImovelText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Tipo de Imóvel',
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
                            id: 'infoitem_nome',
                            tag: 'nome',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'nomeText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Nome',
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
                            id: 'infoitem_rua',
                            tag: 'rua',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'ruaText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Rua',
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
                            id: 'infoitem_valor',
                            tag: 'valor',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'valorText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Valor',
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
                      },
                      {
                        id: 'infosection_basic2',
                        tag: 'infoSection2',
                        componentName: 'infoSection',
                        label: 'Info Section',
                        children: [
                          {
                            id: 'infoitem_area_tc',
                            tag: 'areaTC',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'areaTotalConstruidaText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Área Total Construída',
                              text: '',
                              colorItem: 'primary',
                              variantItem: 'solid',
                              iconProperties: {
                                icon: 'Square',
                                showIcon: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                          },
                          {
                            id: 'infoitem_area_td',
                            tag: 'areaTD',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'areaTotalDescobertaText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Área Total Descoberta',
                              text: '',
                              colorItem: 'primary',
                              variantItem: 'solid',
                              iconProperties: {
                                icon: 'Square',
                                showIcon: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                          },
                          {
                            id: 'infoitem_area_tt',
                            tag: 'areaTT',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'areaTotalText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Área Total',
                              text: '',
                              colorItem: 'primary',
                              variantItem: 'solid',
                              iconProperties: {
                                icon: 'Square',
                                showIcon: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                          },
                        ],
                      },
                    ],
                    properties: {
                      colorSection: 'primary',
                      variantSection: 'solid',
                      commonProperties: {
                        generateReference: false,
                      },
                      title: 'Informações Básicas',
                    },
                  },
                ],
                properties: {
                  variant: {
                    default: 'span1',
                  },
                  commonProperties: {
                    generateReference: false,
                  },
                },
              },
              {
                id: 'column_right',
                tag: 'column2',
                componentName: 'column',
                label: 'Column',
                children: [
                  {
                    id: 'tabs_imovel',
                    tag: 'tabs1',
                    componentName: 'tabs',
                    label: 'Tabs',
                    children: [
                      {
                        id: 'tabsitem_fracoes',
                        tag: 'tabsItemFrac',
                        componentName: 'tabsItem',
                        label: 'Tabs Item',
                        children: [
                          {
                            id: 'table_fracoes',
                            tag: 'tableFracoes',
                            componentName: 'table',
                            label: 'Table',
                            children: [
                              {
                                id: 'tablecolumns_fracoes',
                                tag: 'tableColumnsFrac',
                                componentName: 'tableColumns',
                                label: 'Table Column',
                                children: [
                                  {
                                    id: 'tabletextcell_codigo',
                                    tag: 'codigo2',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    properties: {
                                      headerTitle: 'Código',
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
                                    id: 'tabletextcell_tipologia',
                                    tag: 'tipologia',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    properties: {
                                      headerTitle: 'Tipologia',
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
                                    id: 'tabletextcell_area',
                                    tag: 'area',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
                                    properties: {
                                      headerTitle: 'Área',
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
                                    id: 'tabletextcell_valor',
                                    tag: 'valor2',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
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
                                  },
                                  {
                                    id: 'tablebadgecell_estado',
                                    tag: 'estado',
                                    componentName: 'tableBadgeCell',
                                    label: 'Badge Column',
                                    properties: {
                                      headerTitle: 'Estado',
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
                                  },
                                ],
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
                                  name: 'contentTabletableFracoes',
                                  type: 'tableFracoes[]',
                                  defaultValue: '[]',
                                  generate: true,
                                },
                              },
                            },
                            dataType: 'tableFracoes',
                          },
                        ],
                        properties: {
                          value: 'fracoes',
                          label: 'Fracções',
                          iconProperties: {
                            icon: 'Blocks',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                      },
                      {
                        id: 'tabsitem_documentos',
                        tag: 'tabsItemDocs',
                        componentName: 'tabsItem',
                        label: 'Tabs Item',
                        children: [
                          {
                            id: 'table_documentos',
                            tag: 'tableDocumentos',
                            componentName: 'table',
                            label: 'Table',
                            children: [
                              {
                                id: 'tablecolumns_docs',
                                tag: 'tableColumnsDocs',
                                componentName: 'tableColumns',
                                label: 'Table Column',
                                children: [
                                  {
                                    id: 'tabletextcell_tipo',
                                    tag: 'descricaoTipoDocumento',
                                    componentName: 'tableTextCell',
                                    label: 'Text Column',
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
                                    label: 'Link Column',
                                    properties: {
                                      headerTitle: 'URL',
                                      dataProperties: {
                                        isVirtual: false,
                                        isType: true,
                                      },
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                  },
                                ],
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
                                  type: 'tableDocumentos[]',
                                  defaultValue: '[]',
                                  generate: true,
                                },
                              },
                            },
                            dataType: 'tableDocumentos',
                          },
                        ],
                        properties: {
                          value: 'documentos',
                          label: 'Documentos',
                          iconProperties: {
                            icon: 'Attachment',
                          },
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
              gap: 4,
              variant: {
                default: 'cols2',
                md: 'cols2',
              },
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
                id: 'import_useImovelHook',
                namespace: "import { useDetalheImovel } from '@/app/(myapp)/hooks/use-imovel';",
              },
              {
                id: 'import_imovel_api',
                namespace:
                  "import { fetchFracoes, fetchImovelDocumentos } from '@/app/(myapp)/functions/imovel';",
              },
            ],
            fnCode:
              "const { data, isLoading } = useDetalheImovel(uuid);\n\nuseEffect(() => {\n  if (isLoading || !data) return;\n\n  // Fill info items\n  setCodigoText(data?.codigo || '');\n  setTipoImovelText(data?.tipoImovel || '');\n  setNomeText(data?.nome || '');\n  setRuaText(data?.rua || '');\n  setValorText(typeof data?.valor === 'number' ? `F CFA ${data.valor.toLocaleString('pt-PT')}` : '');\n  setAreaTotalConstruidaText(typeof data?.areaTotalConstruida === 'number' ? String(data.areaTotalConstruida) : '');\n  setAreaTotalDescobertaText(typeof data?.areaTotalDescoberta === 'number' ? String(data.areaTotalDescoberta) : '');\n  setAreaTotalText(typeof data?.areaTotal === 'number' ? String(data.areaTotal) : '');\n  setStatusBannerEstado(data?.estado || '');\n\n  // Fill tables (Fracções and Documentos)\n  (async () => {\n    const imovelId = data?.imovelId || data?.uuid || '';\n    try {\n      const fracoesResp = await fetchFracoes(imovelId);\n      setContentTabletableFracoes((fracoesResp?.content || []).map((item: any) => ({ ...item })));\n    } catch (e) { /* noop */ }\n    try {\n      const docsResp = await fetchImovelDocumentos(imovelId);\n      setContentTabletableDocumentos((docsResp?.content || []).map((item: any) => ({ ...item })));\n    } catch (e) { /* noop */ }\n  })();\n}, [isLoading, data]);",
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
