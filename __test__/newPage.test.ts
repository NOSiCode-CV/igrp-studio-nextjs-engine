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
    {
      componentId: 'table_uqqko7',
      name: 'table1',
      path: '',
      fields: [
        {
          componentId: 'tabledatecell_ekarp8',
          name: 'dataContato',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_po4aqb',
          name: 'formaContato',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tablehiddencell_mbiud9',
          name: 'idNegociacao',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
      ],
    },
    {
      componentId: 'table_vistorias',
      name: 'TableVistorias',
      path: '',
      fields: [
        {
          componentId: 'tabledatecell_data_vistoria',
          name: 'dataVisita',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_tipo_vistoria',
          name: 'horaVisita',
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
          name: 'dataContrato',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tableamountcell_z0ynip',
          name: 'valorAcordo',
          type: 'number',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tablebadgecell_7193jm',
          name: 'periodicidade',
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
    {
      id: 'state_LftPCb',
      name: 'openDecisaoModal',
      type: 'boolean',
      defaultValue: 'false',
      imports: [],
      isArray: false,
      isOptional: false,
    },
    {
      id: 'state_p1aXdx',
      name: 'openVistoriaModal',
      type: 'boolean',
      defaultValue: 'false',
      imports: [],
      isArray: false,
      isOptional: false,
    },
    {
      id: 'state_HWY8sc',
      name: 'selectedNegociacao',
      type: 'string',
      defaultValue: 'undefined',
      imports: [],
      isArray: false,
      isOptional: true,
    },
    {
      id: 'state_content_vistorias',
      name: 'contentTabletableVistorias',
      type: 'TableVistorias[]',
      defaultValue: '[]',
      imports: [],
      generate: true,
    },
    {
      id: 'state_content_acordos',
      name: 'contentTabletableAcordos',
      type: 'TableAcordos[]',
      defaultValue: '[]',
      imports: [],
      generate: true,
    },
    {
      id: 'state_selectedVistoria',
      name: 'selectedVistoria',
      type: 'string',
      defaultValue: 'undefined',
      imports: [],
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
                id: 'button_69vz4d',
                tag: 'button1',
                componentName: 'button',
                
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'function',
                    function: {
                      fnCustomSet: '() => { setOpenDecisaoModal(true); }',
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
                  content: 'Decisão',
                  variant: 'default',
                  size: 'default',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'Gavel',
                  },
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
              },
              {
                id: 'button_kfw1l3',
                tag: 'button2',
                componentName: 'button',
                
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'navigate',
                    function: {
                      fnCustomSet: '() => {}',
                      fnCustomCode: {
                        imports: [],
                      },
                      type: 'function',
                    },
                    action: {},
                    navigate: {
                      path: 'imoveis/manifestacao/[uuid]/negociacao/novo',
                      name: 'goTonovaNegociacao',
                      segments: [
                        {
                          name: '[uuid]',
                          tag: 'idManifestacao',
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
                  content: 'Nova Negociação',
                  variant: 'secondary',
                  size: 'default',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'Handshake',
                  },
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
                rules: [
                  {
                    type: 'visibility',
                    condition:
                      "manifestacao?.decisao !== null && manifestacao?.decisao.decisao === 'AVANCAR' && negociacoes.length === 0",
                  },
                ],
              },
              {
                id: 'button_yargl9',
                tag: 'button2_copy',
                componentName: 'button',
                
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'navigate',
                    function: {
                      fnCustomSet: '() => {}',
                      fnCustomCode: {
                        imports: [],
                      },
                      type: 'function',
                    },
                    action: {},
                    navigate: {
                      path: 'imoveis/manifestacao/[uuid]/negociacao/edit',
                      name: 'goToeditarNegociacao',
                      segments: [
                        {
                          name: '[uuid]',
                          tag: 'idManifestacao',
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
                  content: 'Editar Negociações',
                  variant: 'secondary',
                  size: 'default',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'Handshake',
                  },
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
                rules: [
                  {
                    type: 'visibility',
                    condition:
                      "manifestacao?.decisao !== null && manifestacao?.decisao.decisao === 'AVANCAR' && negociacoes.length > 0",
                  },
                ],
              },
              {
                id: 'button_registar_acordo',
                tag: 'buttonRegistarAcordo',
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
                      path: 'imoveis/manifestacao/[uuid]/acordo/novo',
                      name: 'goTonovoAcordo',
                      segments: [
                        {
                          name: '[uuid]',
                          tag: 'idManifestacao',
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
                  variant: 'outline',
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
              title: 'Visualizar Manifestação de Interesse',
              description: '',
              variant: 'h3',
              iconProperties: {
                iconBackButton: 'ArrowLeft',
              },
              commonProperties: {
                generateReference: false,
              },
              urlBackButton: 'imoveis/manifestacao/interesse',
              showBackButton: true,
              params: [],
            },
            childProperties: {},
          },
          {
            id: 'statusbanner_manifestacao',
            tag: 'statusBanner1',
            componentName: 'statusBanner',
            
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
            
            children: [
              {
                id: 'column_left',
                tag: 'column1',
                componentName: 'column',
                
                children: [
                  {
                    id: 'infocard_manifestacao',
                    tag: 'infoBasicas',
                    componentName: 'infoCard',
                    
                    children: [
                      {
                        id: 'infoSection_processo',
                        componentName: 'infoSection',
                        
                        children: [
                          {
                            id: 'infoitem_modalidade',
                            tag: 'modalidadeInteresse',
                            componentName: 'infoItem',
                            
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
                        
                        children: [
                          {
                            id: 'infoitem_sexo',
                            tag: 'sexo',
                            componentName: 'infoItem',
                            
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
                        
                        children: [
                          {
                            id: 'infoitem_nomeComercial',
                            tag: 'nomeComercial',
                            componentName: 'infoItem',
                            
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
                      variantSection: 'outline',
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
                
                children: [
                  {
                    id: 'tabs_zypps5',
                    tag: 'tabs1',
                    componentName: 'tabs',
                    
                    type: 'group',
                    children: [
                      {
                        id: 'tabsitem_a1y8yp',
                        tag: 'tabsItem1',
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
                            icon: 'ArrowRight',
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
                        id: 'tabsitem_0u1h7y',
                        tag: 'tabsItem2',
                        componentName: 'tabsItem',
                        
                        type: '',
                        children: [
                          {
                            id: 'table_uqqko7',
                            tag: 'table1',
                            componentName: 'table',
                            
                            type: 'group',
                            children: [
                              {
                                id: 'tablecolumns_q2p7ia',
                                tag: 'tableColumns1',
                                componentName: 'tableColumns',
                                
                                children: [
                                  {
                                    id: 'tabledatecell_ekarp8',
                                    tag: 'dataContato',
                                    componentName: 'tableDateCell',
                                    
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Data de Contacto',
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
                                    id: 'tabletextcell_po4aqb',
                                    tag: 'formaContato',
                                    componentName: 'tableTextCell',
                                    
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'Forma de Contacto',
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
                                    id: 'tableactionlistcell_ujhsd9',
                                    tag: 'tableActionListCell1',
                                    componentName: 'tableActionListCell',
                                    
                                    type: '',
                                    children: [
                                      {
                                        id: 'tablelinkaction_wpvqe7',
                                        tag: 'tableLinkAction2',
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
                                          labelTrigger: 'Visualizar',
                                          iconProperties: {
                                            iconName: 'Eye',
                                          },
                                          variant: 'ghost',
                                          href: 'imoveis/negociacao/[uuid]/view',
                                          commonProperties: {
                                            generateReference: false,
                                          },
                                          segments: [
                                            {
                                              name: '[uuid]',
                                              tag: 'idNegociacao',
                                              context: 'column',
                                            },
                                          ],
                                          params: [],
                                        },
                                        childProperties: {},
                                      },
                                      {
                                        id: 'tablelinkaction_7c571i',
                                        tag: 'tableLinkAction1',
                                        componentName: 'tableLinkAction',
                                        
                                        type: '',
                                        children: [],
                                        interactions: {
                                          action: {
                                            type: 'function',
                                            function: {
                                              fnCustomSet:
                                                '() => {\r\nsetOpenVistoriaModal(true);\r\nsetSelectedNegociacao(rowData.idNegociacao)\r\n}',
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
                                          labelTrigger: 'Vistoria',
                                          iconProperties: {
                                            iconName: 'SearchCheck',
                                          },
                                          variant: 'ghost',
                                          href: '',
                                          commonProperties: {
                                            generateReference: false,
                                          },
                                          segments: [],
                                          params: [],
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
                                    id: 'tablehiddencell_mbiud9',
                                    tag: 'idNegociacao',
                                    componentName: 'tableHiddenCell',
                                    
                                    type: '',
                                    children: [],
                                    interactions: {},
                                    allowTypes: false,
                                    data: {},
                                    properties: {
                                      headerTitle: 'ID Negociacao',
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
                              {
                                id: 'tablefilters_ad5tak',
                                tag: 'tableFilters1',
                                componentName: 'tableFilters',
                                
                                children: [],
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
                                  type: '{{type}}[]',
                                  name: 'contentTable{{id}}',
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
                            dataType: 'table1',
                          },
                          {
                            id: 'vistoriamodal_8i7shf',
                            tag: 'VistoriaModal1',
                            componentName: 'VistoriaFormModal',
                            
                            type: 'group',
                            children: [],
                            interactions: {
                              setIsOpen: {
                                type: 'function',
                                function: {
                                  fnCustomCode: {
                                    imports: [],
                                  },
                                  fnCustomSet: 'setOpenVistoriaModal\r\n',
                                },
                              },
                            },
                            allowTypes: false,
                            data: {
                              manifestacao: {
                                value: {
                                  id: '',
                                  code: 'manifestacao',
                                },
                              },
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
                                  name: 'selectedNegociacao',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              customProperties: {},
                            },
                            childProperties: {},
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          value: 'negociacoes',
                          
                          iconProperties: {
                            icon: 'ArrowRight',
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
                        id: 'tabsitem_vistorias',
                        tag: 'tabsItemVistorias',
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
                                    tag: 'dataVisita',
                                    componentName: 'tableDateCell',
                                    
                                    properties: {
                                      headerTitle: 'Data Vistoria',
                                      dateFormat: 'dd/MM/yyyy',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                  },
                                  {
                                    id: 'tabletextcell_tipo_vistoria',
                                    tag: 'horaVisita',
                                    componentName: 'tableTextCell',
                                    
                                    properties: {
                                      headerTitle: 'Hora Vistoria',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                  },
                                  {
                                    id: 'tabletextcell_estado',
                                    tag: 'estadoVistoria',
                                    componentName: 'tableTextCell',
                                    
                                    properties: {
                                      headerTitle: 'Estado',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                  },
                                  {
                                    id: 'tableactionlistcell_actions_vistorias',
                                    tag: 'tableActionListCell2',
                                    componentName: 'tableActionListCell',
                                    
                                    children: [
                                      {
                                        id: 'tablelinkaction_editar_vistoria',
                                        tag: 'tableLinkAction3',
                                        componentName: 'tableLinkAction',
                                        
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
                                          },
                                        },
                                        properties: {
                                          labelTrigger: 'Editar',
                                          iconProperties: {
                                            iconName: 'Pencil',
                                          },
                                          variant: 'ghost',
                                          commonProperties: {
                                            generateReference: false,
                                          },
                                        },
                                      },
                                    ],
                                    properties: {
                                      headerTitle: 'Ações',
                                      type: 'inline',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                  },
                                  {
                                    id: 'tablehiddencell_id_vistoria',
                                    tag: 'idVistoria',
                                    componentName: 'tableHiddenCell',
                                    
                                    properties: {
                                      headerTitle: 'ID Vistoria',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                  },
                                ],
                              },
                            ],
                            data: {
                              data: {
                                state: {
                                  name: 'contentTabletableVistorias',
                                  generate: true,
                                },
                              },
                            },
                            dataType: 'TableVistorias',
                            childProperties: {},
                            properties: {
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                          },
                          {
                            id: 'vistoriamodal_edit',
                            tag: 'VistoriaModalEdit',
                            componentName: 'VistoriaFormModal',
                            
                            type: 'group',
                            children: [],
                            interactions: {
                              setIsOpen: {
                                type: 'function',
                                function: {
                                  fnCustomCode: {
                                    imports: [],
                                  },
                                  fnCustomSet: 'setOpenVistoriaModal',
                                },
                              },
                            },
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
                        properties: {
                          value: 'vistoria',
                          
                          iconProperties: {
                            icon: 'ArrowRight',
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
                        tag: 'tabsItemAcordos',
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
                                    tag: 'dataContrato',
                                    componentName: 'tableDateCell',
                                    
                                    properties: {
                                      headerTitle: 'Data Acordo',
                                      dateFormat: 'dd/MM/yyyy',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                  },
                                  {
                                    id: 'tableamountcell_z0ynip',
                                    tag: 'valorAcordo',
                                    componentName: 'tableAmountCell',
                                    
                                    properties: {
                                      headerTitle: 'Valor',
                                      currency: 'CVE',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                  },
                                  {
                                    id: 'tablebadgecell_7193jm',
                                    tag: 'periodicidade',
                                    componentName: 'tableBadgeCell',
                                    
                                    properties: {
                                      headerTitle: 'Periodicidade',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                  },
                                  {
                                    id: 'tableactionlistcell_efb8zy',
                                    tag: 'tableActionListCell3',
                                    componentName: 'tableActionListCell',
                                    
                                    children: [
                                      {
                                        id: 'tablelinkaction_7x2uon',
                                        tag: 'tableLinkAction4',
                                        componentName: 'tableLinkAction',
                                        
                                        properties: {
                                          labelTrigger: 'Editar',
                                          iconProperties: {
                                            iconName: 'Pencil',
                                          },
                                          variant: 'ghost',
                                          href: 'imoveis/manifestacao/acordo/[uuid]/edit',
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
                                        },
                                      },
                                    ],
                                    properties: {
                                      headerTitle: 'Ações',
                                      type: 'inline',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                  },
                                  {
                                    id: 'tablehiddencell_id_acordo',
                                    tag: 'idAcordo',
                                    componentName: 'tableHiddenCell',
                                    
                                    properties: {
                                      headerTitle: 'ID Acordo',
                                      commonProperties: {
                                        generateReference: false,
                                      },
                                    },
                                  },
                                ],
                              },
                            ],
                            data: {
                              data: {
                                state: {
                                  name: 'contentTabletableAcordos',
                                  generate: true,
                                },
                              },
                            },
                            dataType: 'TableAcordos',
                          },
                        ],
                        properties: {
                          value: 'acordo',
                          
                          iconProperties: {
                            icon: 'ArrowRight',
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
          {
            id: 'decisaomanifestacaomodal_nlh83q',
            tag: 'DecisaoManifestacaoModal1',
            componentName: 'DecisaoManifestacaoModal',
            
            type: 'group',
            children: [],
            interactions: {
              setIsOpen: {
                type: 'function',
                function: {
                  fnCustomCode: {
                    imports: [],
                  },
                  fnCustomSet: 'setOpenDecisaoModal',
                },
              },
            },
            allowTypes: false,
            data: {
              isOpen: {
                state: {
                  id: '',
                  name: 'openDecisaoModal',
                  type: '',
                  imports: [],
                  generate: false,
                },
              },
              manifestacao: {
                value: {
                  id: '',
                  code: 'manifestacao',
                },
              },
            },
            properties: {
              customProperties: {},
            },
            childProperties: {},
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
                  "import { useDetalheManifestacao , useVistorias, useAcordos } from '@/app/(myapp)/hooks/use-imovel'",
              },
              {
                id: 'import_5r9Swb',
                namespace: "import { useNegociacoes } from '@/app/(myapp)/hooks/use-imovel'",
              },
            ],
            fnCode:
              "const { data: manifestacao } = useDetalheManifestacao(idManifestacao);\n\nconst { data: negociacoes } = useNegociacoes(idManifestacao);\n\nuseEffect(() => {\n  if (!manifestacao) return;\n  manifestacao.id = idManifestacao;\n  setModalidadeInteresseText(manifestacao.modalidadeInteresseDesc || manifestacao.modalidadeInteresse || '');\n  setInquilinoText(manifestacao.inquilinoDesc || manifestacao.inquilino || '');\n  setNomeText(manifestacao.nome || '');\n  setSexoText(manifestacao.sexoDesc || manifestacao.sexo || '');\n  setDataNascimentoText(manifestacao.dataNascimento || '');\n  setNomePaiText(manifestacao.nomePai || '');\n  setNomeMaeText(manifestacao.nomeMae || '');\n  setTipoDocumentoText(manifestacao.tipoDocumento || '');\n  setNumeroDocumentoText(manifestacao.numeroDocumento || '');\n  setNumeroBeneficiarioText(manifestacao.numeroBeneficiario || '');\n  setNumeroFuncionarioText(manifestacao.numeroFuncionario || '');\n  setNifText(manifestacao.nif || '');\n  setEnderecoText(manifestacao.endereco || '');\n  setLocalizacaoText(manifestacao.localizacao || '');\n  setNomeComercialText(manifestacao.nomeComercial || '');\n  setNumeroRegistoComercialText(manifestacao.numeroRegistoComercial || '');\n  setNifEmpresaText(manifestacao.nifEmpresa || '');\n  setFinalidadeAluguelText(manifestacao.finalidadeAluguelDesc || manifestacao.finalidadeAluguel  || '');\n  setEmailText(manifestacao.email || '');\n  setTelefoneText(manifestacao.telefone || '');\n  setTelemovelText(manifestacao.telemovel || '');\n  setStatusBannerEstado(manifestacao?.estado || 'Não atribuído');\n  setStatusBannerCodigo(manifestacao?.numeroDocumento || '');\n  setContentTabletableDocumentos((manifestacao.documentos || []).map((item: any) => ({ ...item, url: `/api/documento?fileId=${item.url}` })));\n  setContentTabletable1((negociacoes || []).map((item: any) => ({...item, dataContato: Date.parse(item.dataContato + 'T00:00:00')})));\n}, [manifestacao, negociacoes]);\n    const { data: vistorias } = useVistorias(idManifestacao);\n    const { data: acordos } = useAcordos(idManifestacao);\n\n    useEffect(() => {\n        setContentTabletableVistorias((vistorias || []).map((item: any) => ({...item, dataVisita: Date.parse(item.dataVisita + 'T00:00:00')})));\n    }, [vistorias]);\n\n    useEffect(() => {\n        setContentTabletableAcordos((acordos || []).map((item: any) => ({...item, dataContrato: Date.parse(item.dataContrato + 'T00:00:00')})));\n    }, [acordos]);\n    ",
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
