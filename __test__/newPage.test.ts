import { initCodeSnippets, initComponents, newPage, setEngineConfiguration } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST2 } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST2;

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'viewManifestacao',
  path: 'imoveis/fraccao/[uuid]/manifestacao/[idManifestacao]/interesse/view',
  description: 'Visualizar Manifestação de Interesse',
  forceDynamic: false,
  id: 'page_view_manifestacao',
  types: [
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
      id: 'state_modalidade',
      name: 'modalidadeInteresseText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_inquilino',
      name: 'inquilinoText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_nome',
      name: 'nomeText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_sexo',
      name: 'sexoText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_dtNascimento',
      name: 'dataNascimentoText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_nomePai',
      name: 'nomePaiText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_nomeMae',
      name: 'nomeMaeText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_tipoDoc',
      name: 'tipoDocumentoText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_numDoc',
      name: 'numeroDocumentoText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_numBenef',
      name: 'numeroBeneficiarioText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_numFunc',
      name: 'numeroFuncionarioText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_nif',
      name: 'nifText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_localizacao',
      name: 'localizacaoText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_endereco',
      name: 'enderecoText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_nomeComercial',
      name: 'nomeComercialText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_registoComercial',
      name: 'numeroRegistoComercialText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_nifEmpresa',
      name: 'nifEmpresaText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_finalidade',
      name: 'finalidadeAluguelText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_email',
      name: 'emailText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_telefone',
      name: 'telefoneText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_telemovel',
      name: 'telemovelText',
      type: 'string',
      imports: [],
      defaultValue: "'N/A'",
    },
    {
      id: 'state_statusBanner_estado',
      name: 'statusBannerEstado',
      type: 'string',
      imports: [],
      defaultValue: "''",
    },
    {
      id: 'state_statusBanner_codigo',
      name: 'statusBannerCodigo',
      type: 'string',
      imports: [],
      defaultValue: "''",
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
    {
      id: 'arg_idManifestacao',
      type: 'string',
      name: 'idManifestacao',
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
            children: [],
            properties: {
              title: 'Visualizar Manifestação de Interesse',
              description: '',
              variant: 'h3',
              iconProperties: {
                iconBackButton: 'ArrowLeft',
              },
              commonProperties: {
                generateReference: false,
              },
              urlBackButton: 'imoveis/fraccao/[uuid]/manifestacao/interesse',
              showBackButton: true,
              segments: [
                {
                  name: '[uuid]',
                  tag: 'uuid',
                  context: 'pageParam',
                },
              ],
            },
          },
          {
            id: 'statusbanner_manifestacao',
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
              badgeText: {
                state: {
                  id: '',
                  name: 'statusBannerCodigo',
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
                    id: 'infocard_manifestacao',
                    tag: 'infoBasicas',
                    componentName: 'infoCard',
                    label: 'Info Card',
                    children: [
                      {
                        id: 'infoSection_processo',
                        componentName: 'infoSection',
                        label: 'Secção',
                        children: [
                          {
                            id: 'infoitem_modalidade',
                            tag: 'modalidadeInteresse',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'modalidadeInteresseText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Modalidade',
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
                            id: 'infoitem_finalidade',
                            tag: 'finalidadeAluguel',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'finalidadeAluguelText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Finalidade de Aluguel',
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
                            id: 'infoitem_inquilino',
                            tag: 'inquilino',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'inquilinoText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Inquilino',
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
                            children: [],
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
                            id: 'infoitem_nif',
                            tag: 'nif',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'nifText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'NIF',
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
                            id: 'infoitem_numDocumento',
                            tag: 'numeroDocumento',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'numeroDocumentoText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Número Documento',
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
                            id: 'infoitem_endereco',
                            tag: 'endereco',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'enderecoText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Endereço',
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
                            id: 'infoitem_localizacao',
                            tag: 'localizacao',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'localizacaoText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Localização',
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
                            id: 'infoitem_email',
                            tag: 'email',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'emailText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Email',
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
                            id: 'infoitem_telefone',
                            tag: 'telefone',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'telefoneText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Telefone',
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
                            id: 'infoitem_telemovel',
                            tag: 'telemovel',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'telemovelText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Telemóvel',
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
                      {
                        id: 'infoSection_cidadao',
                        componentName: 'infoSection',
                        label: 'Secção',
                        children: [
                          {
                            id: 'infoitem_sexo',
                            tag: 'sexo',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'sexoText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Sexo',
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
                            id: 'infoitem_dtNascimento',
                            tag: 'dataNascimento',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'dataNascimentoText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Data de Nascimento',
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
                            id: 'infoitem_tipoDocumento',
                            tag: 'tipoDocumento',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'tipoDocumentoText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Tipo Documento',
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
                            id: 'infoitem_numBenef',
                            tag: 'numeroBeneficiario',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'numeroBeneficiarioText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Número Beneficiário',
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
                            id: 'infoitem_numFunc',
                            tag: 'numeroFuncionario',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'numeroFuncionarioText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Número Funcionário',
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
                        rules: [
                          {
                            type: 'visibility',
                            condition: "(inquilinoText == 'Cidadão' || inquilinoText == 'CIDADAO')",
                          },
                        ],
                      },
                      {
                        id: 'infoSection_empresa',
                        componentName: 'infoSection',
                        label: 'Secção',
                        children: [
                          {
                            id: 'infoitem_nomeComercial',
                            tag: 'nomeComercial',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
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
                              label: 'Nome Comercial',
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
                            id: 'infoitem_registoComercial',
                            tag: 'numeroRegistoComercial',
                            componentName: 'infoItem',
                            label: 'InfoItem',
                            children: [],
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'numeroRegistoComercialText',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              label: 'Nº Registo Comercial',
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
                        rules: [
                          {
                            type: 'visibility',
                            condition: "(inquilinoText == 'Empresa' || inquilinoText == 'EMPRESA')",
                          },
                        ],
                      },
                    ],
                    properties: {
                      title: 'Informações Básicas',
                      colorSection: 'primary',
                      variantSection: 'solid',
                      orientation: 'vertical',
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    childProperties: {},
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
                properties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              variant: {
                default: 'cols2',
                md: 'cols2',
                lg: 'cols2',
              },
              gap: 4,
              commonProperties: {
                generateReference: false,
              },
              className: 'border rounded-sm',
            },
            childProperties: {},
            style: {},
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
                id: 'import_useManifestacaoHook',
                namespace:
                  "import { useDetalheManifestacao } from '@/app/(myapp)/hooks/use-imovel'",
              },
            ],
            fnCode:
              "const { data: manifestacao } = useDetalheManifestacao(idManifestacao);\n\nuseEffect(() => {\n  if (!manifestacao) return;\n  setModalidadeInteresseText(manifestacao.modalidadeInteresseDesc || manifestacao.modalidadeInteresse || '');\n  setInquilinoText(manifestacao.inquilinoDesc || manifestacao.inquilino || '');\n  setNomeText(manifestacao.nome || '');\n  setSexoText(manifestacao.sexo || '');\n  setDataNascimentoText(manifestacao.dataNascimento || '');\n  setNomePaiText(manifestacao.nomePai || '');\n  setNomeMaeText(manifestacao.nomeMae || '');\n  setTipoDocumentoText(manifestacao.tipoDocumento || '');\n  setNumeroDocumentoText(manifestacao.numeroDocumento || '');\n  setNumeroBeneficiarioText(manifestacao.numeroBeneficiario || '');\n  setNumeroFuncionarioText(manifestacao.numeroFuncionario || '');\n  setNifText(manifestacao.nif || '');\n  setEnderecoText(manifestacao.endereco || '');\n  setLocalizacaoText(manifestacao.localizacao || '');\n  setNomeComercialText(manifestacao.nomeComercial || '');\n  setNumeroRegistoComercialText(manifestacao.numeroRegistoComercial || '');\n  setNifEmpresaText(manifestacao.nifEmpresa || '');\n  setFinalidadeAluguelText(manifestacao.finalidadeAluguelDesc || manifestacao.finalidadeAluguel  || '');\n  setEmailText(manifestacao.email || '');\n  setTelefoneText(manifestacao.telefone || '');\n  setTelemovelText(manifestacao.telemovel || '');\n  setStatusBannerEstado(manifestacao?.estado || 'Não atribuído');\n  setStatusBannerCodigo(manifestacao?.numeroDocumento || '');\n  setContentTabletableDocumentos((manifestacao.documentos || []).map((item: any) => ({ ...item, url: `/api/documento?fileId=${item.url}` })));\n}, [manifestacao]);",
          },
        },
        action: {},
      },
    },
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
