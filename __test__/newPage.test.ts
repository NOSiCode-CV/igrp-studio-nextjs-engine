import { initCodeSnippets, initComponents, newPage, setEngineConfiguration } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST2 } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST2;

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'imoveis',
  path: 'imoveis',
  description: 'Lista de Imóveis',
  forceDynamic: false,
  id: 'imoveis_2wjd8a',
  args: [],
  components: {
    id: 'page_imoveis',
    tag: 'page_imoveis',
    componentName: 'page',
    
    properties: { variant: 'default', commonProperties: { generateReference: false } },
    interactions: {
      onLoad: {
        type: 'function',
        function: {
          type: 'function',
          fnCustomCode: {
            imports: [
              {
                id: 'import_queryClient',
                namespace: "import { useQueryClient } from '@tanstack/react-query';",
              },
              {
                id: 'import_useImovelHooks',
                namespace:
                  "import { useImoveis, useImovelEstatistica } from '@/app/(myapp)/hooks/use-imovel';",
              },
              {
                id: 'import_useEnumOptions',
                namespace:
                  "import { useMultipleEnumOptions } from '@/app/(myapp)/hooks/use-enum-options';",
              },
              {
                id: 'import_deleteImovelFn',
                namespace: "import { deleteImovelFn } from '@/app/(myapp)/hooks/use-imovel';",
              },
            ],
            fnCode:
              'const queryClient = useQueryClient();\n\n// Lista de imóveis com filtros provenientes dos estados da UI\nconst { data, isLoading } = useImoveis({\n  search: searchValue,\n  tipoImovel: selecttipoImovelFltValue,\n  nome: inputnomeValue,\n  areaImovelInicio: inputareaInicialValue,\n  areaImovelFim: inputareaFinalValue,\n  codigoFracao: inputcodigoFracaoValue,\n  estadoImovel: selectestadoImovelFltValue,\n  localizacao: inputruaValue,\n  tipologiaFracao: selecttipologiaFltValue,\n  valorImovelInicio: inputvalorInicialValue,\n  valorImovelFim: inputvalorFinalValue,\n});\n\n// Estatísticas dos imóveis para os cards do topo\nconst { data: statsData } = useImovelEstatistica();\n\n// Carregar opções dos combos via enums\nconst { options, isLoading: isLoadingEnums } = useMultipleEnumOptions([\n  "EstadoImovel",\n  "TipoImovel",\n  "TipologiaFracao",\n]);\n\n// Mapear opções aos estados dos comboboxes\nuseEffect(() => {\n  if (isLoadingEnums) return;\n  setSelectestadoImovelFltOptions(options["EstadoImovel"] || []);\n  setSelecttipoImovelFltOptions(options["TipoImovel"] || []);\n  setSelecttipologiaFltOptions(options["TipologiaFracao"] || []);\n}, [isLoadingEnums]);\n\n// Mapear conteúdo da tabela\nuseEffect(() => {\n  if (isLoading || !data || !data.content) return;\n  setContentTabletable1((data.content || []).map((item: any) => ({\n    ...item,\n  })));\n}, [isLoading, data]);\n\n// Mapear valores dos cards de estatística\nuseEffect(() => {\n  if (!statsData) return;\n  setStatstatsCardTotalImovelValue(statsData?.totalImovel ?? 0);\n  setStatstatsCardImoveisDisponiveisValue(statsData?.imoveisDisponiveis ?? 0);\n  setStatstatsCardContratosActivosValue(statsData?.contratosActivos ?? 0);\n}, [statsData]);',
          },
        },
        action: {},
      },
    },
    children: [
      {
        id: 'section_imoveis',
        componentName: 'section',
        
        properties: { spaceX: '3', spaceY: '6', commonProperties: {} },
        children: [
          {
            id: 'pageheader_imoveis',
            tag: 'pageHeader1',
            componentName: 'pageHeader',
            
            type: 'group',
            children: [
              {
                id: 'button_n2orqd',
                tag: 'button1',
                componentName: 'button',
                
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'navigate',
                    function: {
                      fnCustomSet: '() => {}',
                      fnCustomCode: { imports: [] },
                      type: 'function',
                    },
                    action: {},
                    navigate: { path: 'imoveis/novo', name: 'goTonovoImovel', params: [] },
                  },
                },
                allowTypes: false,
                data: {},
                properties: {
                  content: 'Novo',
                  variant: 'default',
                  size: 'default',
                  iconProperties: { showIcon: true, iconName: 'Plus' },
                  commonProperties: { generateReference: false },
                },
                childProperties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              title: 'Imóveis',
              description: 'Gerencie os imóveis do sistema de segurança social',
              variant: 'h3',
              iconProperties: { iconBackButton: 'Search' },
              commonProperties: { generateReference: false },
            },
            childProperties: {},
          },
          {
            id: 'grid_stats',
            tag: 'grid1',
            componentName: 'grid',
            
            type: 'group',
            children: [
              {
                id: 'statscard_total',
                tag: 'totalImoveis',
                componentName: 'statsCard',
                
                type: 'group',
                children: [],
                interactions: {},
                allowTypes: false,
                data: {
                  value: {
                    state: {
                      id: '',
                      type: 'string | number',
                      name: 'statstatsCardTotalImovelValue',
                      defaultValue: '0',
                      imports: [],
                      generate: true,
                    },
                    value: { id: '', code: '' },
                  },
                },
                properties: {
                  cardBorderPosition: 'top',
                  cardBorder: 'rounded-md',
                  cardVariant: 'info',
                  iconBackground: 'rounded',
                  title: 'Total de Imóveis',
                  titleSize: 'sm',
                  valueSize: 'sm',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'Building',
                    iconSize: 'md',
                    iconVariant: 'info',
                    iconPlacement: 'end',
                  },
                  itemPlacement: 'start',
                  commonProperties: { generateReference: false },
                  showIconBackground: true,
                },
                childProperties: {},
              },
              {
                id: 'statscard_construcao',
                tag: 'statsCard1',
                componentName: 'statsCard',
                
                type: 'group',
                children: [],
                interactions: {},
                allowTypes: false,
                data: {
                  value: {
                    state: {
                      id: '',
                      type: 'string | number',
                      name: 'statstatsCardImoveisDisponiveisValue',
                      defaultValue: '0',
                      imports: [],
                      generate: true,
                    },
                    value: { id: '', code: '' },
                  },
                },
                properties: {
                  cardBorderPosition: 'top',
                  cardBorder: 'rounded-md',
                  cardVariant: 'success',
                  iconBackground: 'rounded',
                  title: 'Imóveis Disponíveis',
                  titleSize: 'sm',
                  valueSize: 'sm',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'Building2',
                    iconSize: 'md',
                    iconVariant: 'success',
                    iconPlacement: 'end',
                  },
                  itemPlacement: 'start',
                  commonProperties: { generateReference: false },
                  showIconBackground: true,
                  showIconBorder: true,
                },
                childProperties: {},
              },
              {
                id: 'statscard_construido',
                tag: 'statsCard3',
                componentName: 'statsCard',
                
                type: 'group',
                children: [],
                interactions: {},
                allowTypes: false,
                data: {
                  value: {
                    state: {
                      id: '',
                      type: 'string | number',
                      name: 'statstatsCardContratosActivosValue',
                      defaultValue: '0',
                      imports: [],
                      generate: true,
                    },
                    value: { id: '', code: '' },
                  },
                },
                properties: {
                  cardBorderPosition: 'top',
                  cardBorder: 'rounded-md',
                  cardVariant: 'indigo',
                  iconBackground: 'rounded',
                  title: 'Contratos Activos',
                  titleSize: 'sm',
                  valueSize: 'sm',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'FileCheck',
                    iconSize: 'md',
                    iconVariant: 'warning',
                    iconPlacement: 'end',
                  },
                  itemPlacement: 'start',
                  commonProperties: { generateReference: false },
                  showIconBackground: true,
                },
                childProperties: {},
              },
              {
                id: 'statscard_projetado',
                tag: 'statsCard4',
                componentName: 'statsCard',
                
                type: 'group',
                children: [],
                interactions: {},
                allowTypes: false,
                data: {
                  value: {
                    state: {
                      id: '',
                      type: 'string | number',
                      name: 'statstatsCardHiddenValue',
                      defaultValue: '0',
                      imports: [],
                      generate: true,
                    },
                    value: { id: '', code: '' },
                  },
                },
                properties: {
                  cardBorderPosition: 'top',
                  cardBorder: 'rounded-md',
                  cardVariant: 'info',
                  iconBackground: 'rounded',
                  title: '',
                  titleSize: 'sm',
                  valueSize: 'sm',
                  iconProperties: {
                    showIcon: false,
                    iconName: 'FileCheck',
                    iconSize: 'md',
                    iconVariant: 'info',
                    iconPlacement: 'end',
                  },
                  itemPlacement: 'start',
                  commonProperties: { generateReference: false },
                  showIconBackground: false,
                  className: 'hidden',
                },
                childProperties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              gap: 4,
              variant: { default: '', md: 'cols2', lg: 'cols3' },
              commonProperties: { generateReference: false },
            },
            childProperties: { className: 'col-span-1' },
          },
          {
            id: 'card_table',
            tag: 'cardTable',
            componentName: 'container',
            
            type: 'group',
            children: [
              {
                id: 'cardheader_filters',
                tag: 'cardHeader1',
                componentName: 'container',
                
                type: 'group',
                children: [
                  {
                    id: 'container_filters_header_card',
                    tag: 'containerFiltersHeader',
                    componentName: 'container',
                    
                    type: 'group',
                    children: [
                      {
                        id: 'container_filters_row_card',
                        tag: 'containerFiltersRow',
                        componentName: 'container',
                        
                        type: 'group',
                        children: [
                          {
                            id: 'container_search_card',
                            tag: 'containerSearchCard',
                            componentName: 'container',
                            
                            type: 'group',
                            children: [
                              {
                                id: 'inputsearch_imoveis_card',
                                tag: 'inputSearchImoveisCard',
                                componentName: 'inputSearch',
                                
                                type: 'group',
                                children: [],
                                interactions: {
                                  setValueChange: {
                                    type: 'function',
                                    function: {
                                      fnCustomSet: '',
                                      type: 'function',
                                      fnCustomCode: { imports: [] },
                                    },
                                    action: { actionCustomSet: "(value) => ''" },
                                  },
                                  onSearch: {
                                    type: 'function',
                                    function: {
                                      fnCustomCode: { imports: [] },
                                      fnCustomSet:
                                        '(value) => { setSearchValue(value); refreshList(); }\n',
                                    },
                                  },
                                },
                                allowTypes: false,
                                data: {
                                  value: {
                                    state: {
                                      id: '',
                                      name: 'searchValue',
                                      type: '',
                                      imports: [],
                                      generate: false,
                                    },
                                  },
                                },
                                properties: {
                                  
                                  iconProperties: {
                                    showStartIcon: true,
                                    startIcon: 'Search',
                                    submitIcon: 'ArrowRight',
                                  },
                                  required: false,
                                  dataProperties: { isVirtual: false, isType: true },
                                  commonProperties: { generateReference: false },
                                  placeholder: 'Pesquisar imóveis por código ou nome...',
                                  showSubmitButton: true,
                                  
                                  className: 'py-1',
                                },
                                childProperties: {},
                              },
                            ],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              commonProperties: { generateReference: false },
                              className: 'flex-1 min-w-[240px]',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'flex_filters_toggle_card',
                            tag: 'flexFiltersToggleCard',
                            componentName: 'flex',
                            
                            type: 'group',
                            children: [
                              {
                                id: 'button_toggle_filters_card',
                                tag: 'buttonToggleFiltersCard',
                                componentName: 'button',
                                
                                type: 'group',
                                children: [],
                                interactions: {
                                  onClick: {
                                    type: 'function',
                                    function: {
                                      fnCustomSet: '() => {setShowFilter(!showFilter)\n}',
                                      fnCustomCode: { imports: [] },
                                      type: 'function',
                                    },
                                    action: {},
                                  },
                                },
                                allowTypes: false,
                                data: {},
                                properties: {
                                  content: 'Filtros',
                                  variant: 'outline',
                                  size: 'default',
                                  iconProperties: { showIcon: true, iconName: 'SlidersHorizontal' },
                                  commonProperties: { generateReference: false },
                                },
                                childProperties: {},
                              },
                            ],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: { commonProperties: {} },
                            childProperties: {},
                            style: {
                              layout: {
                                type: 'flex',
                                flex: {
                                  direction: 'row',
                                  wrap: 'wrap',
                                  alignItems: 'stretch',
                                  justifyContent: 'flex-end',
                                  gap: '2',
                                },
                                grid: {
                                  templateColumns: '1',
                                  templateRows: '1',
                                  gap: '2',
                                  justifyItems: 'start',
                                  alignItems: 'start',
                                  direction: 'row',
                                  dense: false,
                                },
                                block: {},
                              },
                            },
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: { commonProperties: {}, className: '' },
                        childProperties: {},
                        style: {
                          layout: {
                            type: 'flex',
                            flex: {
                              direction: 'row',
                              wrap: 'wrap',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '2',
                            },
                            grid: {
                              templateColumns: '1',
                              templateRows: '1',
                              gap: '2',
                              justifyItems: 'start',
                              alignItems: 'start',
                              direction: 'row',
                              dense: false,
                            },
                            block: {},
                          },
                        },
                      },
                      {
                        id: 'separator_filters_card',
                        tag: 'separatorFiltersCard',
                        componentName: 'separator',
                        
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          orientation: 'horizontal',
                          className: 'my-3',
                          commonProperties: {},
                        },
                        childProperties: {},
                        rules: [{ type: 'visibility', condition: 'showFilter' }],
                      },
                      {
                        id: 'grid_filters_card',
                        tag: 'gridFiltersCard',
                        componentName: 'grid',
                        
                        type: 'group',
                        children: [
                          {
                            id: 'combobox_tipoImovel',
                            tag: 'tipoImovelFlt',
                            componentName: 'combobox',
                            
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: {
                                  fnCustomSet:
                                    '(value) => { setSelecttipoImovelFltValue(value as string) }\n',
                                  type: 'function',
                                  fnCustomCode: { imports: [] },
                                },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  type: 'string',
                                  name: 'select{{id}}Value',
                                  defaultValue: '{{value}}',
                                  imports: [],
                                  generate: true,
                                },
                                value: { id: '', code: '' },
                              },
                              options: {
                                state: {
                                  id: '',
                                  type: 'IGRPOptionsProps[]',
                                  name: 'select{{id}}Options',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                                value: { id: '', code: '' },
                              },
                            },
                            properties: {
                              
                              variant: 'single',
                              placeholder: 'Select an option...',
                              showSearch: true,
                              iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                              gridSize: 'full',
                              options: [],
                            },
                            childProperties: {},
                          },
                          {
                            id: 'combobox_estadoImovel',
                            tag: 'estadoImovelFlt',
                            componentName: 'combobox',
                            
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: {
                                  fnCustomSet:
                                    '(value) => { setSelectestadoImovelFltValue(value as string) }\n',
                                  type: 'function',
                                  fnCustomCode: { imports: [] },
                                },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  type: 'string',
                                  name: 'select{{id}}Value',
                                  defaultValue: '{{value}}',
                                  imports: [],
                                  generate: true,
                                },
                                value: { id: '', code: '' },
                              },
                              options: {
                                state: {
                                  id: '',
                                  type: 'IGRPOptionsProps[]',
                                  name: 'select{{id}}Options',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                                value: { id: '', code: '' },
                              },
                            },
                            properties: {
                              
                              variant: 'single',
                              placeholder: 'Select an option...',
                              showSearch: true,
                              iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                              gridSize: 'full',
                              options: [],
                            },
                            childProperties: {},
                          },
                          {
                            id: 'combobox_tipologia',
                            tag: 'tipologiaFlt',
                            componentName: 'combobox',
                            
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: {
                                  fnCustomSet:
                                    '(value) => { setSelecttipologiaFltValue(value as string) }\n',
                                  type: 'function',
                                  fnCustomCode: { imports: [] },
                                },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  type: 'string',
                                  name: 'select{{id}}Value',
                                  defaultValue: '{{value}}',
                                  imports: [],
                                  generate: true,
                                },
                                value: { id: '', code: '' },
                              },
                              options: {
                                state: {
                                  id: '',
                                  type: 'IGRPOptionsProps[]',
                                  name: 'select{{id}}Options',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                                value: { id: '', code: '' },
                              },
                            },
                            properties: {
                              
                              variant: 'single',
                              placeholder: 'Select an option...',
                              showSearch: true,
                              iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                              gridSize: 'full',
                              options: [],
                            },
                            childProperties: {},
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          gap: 4,
                          variant: { default: '', md: 'cols2', lg: 'cols4' },
                          commonProperties: { generateReference: false },
                        },
                        childProperties: {},
                        style: {},
                        rules: [{ type: 'visibility', condition: 'showFilter' }],
                      },
                      {
                        id: 'flex_clear_filters_card',
                        tag: 'flexClearFiltersCard',
                        componentName: 'flex',
                        
                        type: 'group',
                        children: [
                          {
                            id: 'button_clear_filters_card',
                            tag: 'buttonClearFiltersCard',
                            componentName: 'button',
                            
                            type: 'group',
                            children: [],
                            interactions: {
                              onClick: {
                                type: 'function',
                                function: {
                                  fnCustomSet: '() => {}',
                                  type: 'function',
                                  fnCustomCode: { imports: [] },
                                  fnName: 'clearFilters',
                                },
                                action: { actionCustomSet: '() => {}' },
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {
                              content: 'Limpar Filtros',
                              variant: 'outline',
                              size: 'default',
                              iconProperties: { showIcon: true, iconName: 'X' },
                              commonProperties: { generateReference: false },
                              disabled: false,
                            },
                            childProperties: {},
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: { commonProperties: {}, className: '' },
                        childProperties: {},
                        style: {
                          layout: {
                            type: 'flex',
                            flex: {
                              direction: 'row',
                              wrap: 'wrap',
                              alignItems: 'stretch',
                              justifyContent: 'flex-end',
                              gap: '2',
                            },
                            grid: {
                              templateColumns: '1',
                              templateRows: '1',
                              gap: '2',
                              justifyItems: 'start',
                              alignItems: 'start',
                              direction: 'row',
                              dense: false,
                            },
                            block: {},
                          },
                        },
                        rules: [{ type: 'visibility', condition: 'showFilter' }],
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: { className: 'px-4 pt-2 space-y-3', commonProperties: {} },
                    childProperties: {},
                  },
                ],
              },
              {
                id: 'cardcontent_table',
                tag: 'cardContent2',
                componentName: 'container',
                
                type: 'group',
                children: [
                  {
                    id: 'table_imoveis',
                    tag: 'table1',
                    componentName: 'table',
                    
                    type: 'group',
                    children: [
                      {
                        id: 'tablecolumns_imoveis',
                        tag: 'tableColumns1',
                        componentName: 'tableColumns',
                        
                        children: [
                          {
                            id: 'tablehiddencell_imovelId',
                            tag: 'imovelId',
                            componentName: 'tableHiddenCell',
                            
                            type: '',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              headerTitle: 'imovelId',
                              value: '',
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: {},
                            },
                            childProperties: {},
                          },
                          {
                            id: 'tabletextcell_codigo',
                            tag: 'codigo',
                            componentName: 'tableTextCell',
                            
                            type: '',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              headerTitle: 'Código',
                              dataProperties: { isVirtual: false, isType: true },
                              variant: 'default',
                              commonProperties: { generateReference: false },
                              headerType: 'sortToggle',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'tabletextcell_nome',
                            tag: 'nomeImovel',
                            componentName: 'tableTextCell',
                            
                            type: '',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              headerType: 'sortToggle',
                              headerTitle: 'Nome',
                              dataProperties: { isVirtual: false, isType: true },
                              variant: 'default',
                              commonProperties: {},
                            },
                            childProperties: {},
                          },
                          {
                            id: 'tablebadgecell_oik3cg',
                            tag: 'localizacao',
                            componentName: 'tableBadgeCell',
                            
                            type: '',
                            children: [],
                            interactions: {
                              customize: {
                                type: 'function',
                                function: {
                                  fnName: 'getLocalizacaoBadge',
                                  fnCustomCode: {
                                    imports: [
                                      {
                                        namespace:
                                          "import {getLocalizacaoBadge} from '@/app/(myapp)/functions/global'",
                                        id: '3z050vy36r',
                                      },
                                    ],
                                  },
                                  type: 'function',
                                },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {
                              headerTitle: 'Rua',
                              dataProperties: { isVirtual: false, isType: true },
                              
                              iconProperties: {
                                showIcon: false,
                                iconName: 'Info',
                                iconPlacement: 'start',
                              },
                              variant: 'soft',
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'tabletextcell_area',
                            tag: 'areaTotal',
                            componentName: 'tableTextCell',
                            
                            type: '',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              headerTitle: 'Área (m²)',
                              dataProperties: { isVirtual: false, isType: true },
                              variant: 'default',
                              commonProperties: {},
                            },
                            childProperties: {},
                          },
                          {
                            id: 'tablebadgecell_estado',
                            tag: 'estadoImovelDescricao',
                            componentName: 'tableBadgeCell',
                            
                            type: '',
                            children: [],
                            interactions: {
                              customize: {
                                type: 'function',
                                function: {
                                  type: 'function',
                                  fnCustomCode: {
                                    imports: [
                                      {
                                        namespace:
                                          "import {getStatusColorImovel} from '@/app/(myapp)/functions/global'",
                                        id: 'lzg13tn03k',
                                      },
                                    ],
                                  },
                                  fnName: 'getStatusColorImovel',
                                },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {
                              headerTitle: 'Estado',
                              dataProperties: { isVirtual: false, isType: true },
                              iconProperties: {
                                showIcon: false,
                                iconName: 'Info',
                                iconPlacement: 'start',
                              },
                              variant: 'soft',
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'tabletextcell_valor',
                            tag: 'valorImovel',
                            componentName: 'tableAmountCell',
                            
                            type: '',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              headerTitle: 'Valor',
                              dataProperties: { isVirtual: false, isType: true },
                              currency: 'XOF',
                              language: 'pt-PT',
                              formatStyle: 'currency',
                              variant: 'default',
                              commonProperties: { generateReference: false },
                              headerType: 'sortToggle',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'tableactionlistcell_actions',
                            tag: 'tableActionListCell1',
                            componentName: 'tableActionListCell',
                            
                            type: '',
                            children: [
                              {
                                id: 'tablelinkaction_view',
                                tag: 'tableLinkAction1',
                                componentName: 'tableLinkAction',
                                
                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  labelTrigger: 'Visualizar',
                                  iconProperties: { iconName: 'Eye' },
                                  variant: 'ghost',
                                  href: 'imoveis/[uuid]',
                                  commonProperties: { generateReference: false },
                                  segments: [
                                    { name: '[uuid]', tag: 'imovelId', context: 'column' },
                                  ],
                                  params: [],
                                },
                                childProperties: {},
                              },
                              {
                                id: 'tablelinkaction_edit',
                                tag: 'tableLinkAction2',
                                componentName: 'tableLinkAction',
                                
                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  labelTrigger: 'Editar',
                                  iconProperties: { iconName: 'SquarePen' },
                                  variant: 'ghost',
                                  href: 'imoveis/[uuid]/edit',
                                  commonProperties: { generateReference: false },
                                  segments: [
                                    { name: '[uuid]', tag: 'imovelId', context: 'column' },
                                  ],
                                  params: [],
                                },
                                childProperties: {},
                                rules: [],
                              },
                              {
                                id: 'tablealertaction_delete_imovel',
                                tag: 'tableAlertActionDelete',
                                componentName: 'tableAlertAction',
                                
                                type: '',
                                children: [],
                                interactions: {
                                  onClickConfirm: {
                                    type: 'function',
                                    function: {
                                      fnCustomSet: '() => {deleteImovel(rowData.imovelId)}',
                                      fnCustomCode: { imports: [] },
                                      type: 'function',
                                    },
                                    action: {},
                                  },
                                },
                                allowTypes: false,
                                data: {},
                                properties: {
                                  labelTrigger: 'Eliminar',
                                  iconProperties: { iconName: 'Trash' },
                                  variant: 'ghost',
                                  title: 'Eliminar Imóvel',
                                  showCancel: true,
                                  labelCancel: 'Cancel',
                                  variantCancel: 'outline',
                                  showConfirm: true,
                                  labelConfirm: 'Eliminar',
                                  variantConfirm: 'destructive',
                                  commonProperties: { generateReference: false },
                                  segments: [],
                                  params: [],
                                  content: 'Deseja eliminar o imóvel?',
                                },
                                childProperties: {},
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {
                      data: {
                        state: {
                          id: '',
                          type: 'Table1[]',
                          name: 'contentTabletable1',
                          defaultValue: '[]',
                          imports: [],
                          generate: true,
                        },
                        value: { id: '', code: '' },
                      },
                    },
                    properties: {
                      commonProperties: { generateReference: false },
                      showPagination: true,
                      isNumericPagination: false,
                    },
                    dataType: 'table1',
                    childProperties: {},
                  },
                ],
                interactions: {},
                allowTypes: false,
                data: {},
                properties: { commonProperties: {} },
                childProperties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              className: 'border rounded-sm',
              commonProperties: { generateReference: false },
            },
            childProperties: {},
            style: {},
          },
        ],
      },
    ],
  },
  functions: [
    {
      id: 'fnc_clear',
      name: 'clearFilters',
      code: 'setSearchValue("")\nsetSelecttipoImovelFltValue("")\nsetInputnomeValue("")\nsetInputareaInicialValue(0)\nsetInputareaFinalValue(0)\nsetInputcodigoFracaoValue("")\nsetSelectestadoImovelFltValue("")\nsetInputruaValue("")\nsetSelecttipologiaFltValue("")\nsetInputvalorInicialValue(0)\nsetInputvalorFinalValue(0)\n\nrefreshList();',
      returnValue: { type: 'void', isNullable: true, isList: false },
      imports: [],
      isAsync: false,
      arguments: [],
    },
    {
      id: 'fnc_refresh',
      name: 'refreshList',
      code: "queryClient.invalidateQueries({ queryKey: ['imoveis'] });",
      returnValue: { type: 'void', isNullable: true, isList: false },
      imports: [],
      isAsync: false,
      arguments: [],
    },
    {
      id: 'fnc_delete',
      name: 'deleteImovel',
      code: 'await deleteImovelFn(imovelId);\nrefreshList();',
      returnValue: { type: 'void', isNullable: true, isList: false },
      imports: [],
      isAsync: true,
      arguments: [
        {
          id: '1',
          name: 'imovelId',
          type: 'string',
          isList: false,
          isOptional: false,
          isInterface: false,
          isFunction: false,
          isState: false,
          functionParameters: [],
        },
      ],
    },
  ],
  types: [
    {
      componentId: 'table_imoveis',
      name: 'table1',
      path: '',
      fields: [
        {
          componentId: 'tablehiddencell_imovelId',
          name: 'imovelId',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_codigo',
          name: 'codigo',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_nome',
          name: 'nomeImovel',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_rua',
          name: 'localizacao',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_area',
          name: 'areaTotal',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tablebadgecell_estado',
          name: 'estadoImovelDescricao',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tabletextcell_valor',
          name: 'valorImovel',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
      ],
    },
  ],
  states: [
    { id: 'state_tlz9Y', name: 'showFilter', type: 'boolean', defaultValue: 'false', imports: [] },
    { id: 'state_lDU4Xi', name: 'searchValue', type: 'string', imports: [], defaultValue: "''" },
    { id: 'state_nome', name: 'inputnomeValue', type: 'string', imports: [], defaultValue: "''" },
    {
      id: 'state_areaIni',
      name: 'inputareaInicialValue',
      type: 'number',
      imports: [],
      defaultValue: '0',
    },
    {
      id: 'state_areaFim',
      name: 'inputareaFinalValue',
      type: 'number',
      imports: [],
      defaultValue: '0',
    },
    {
      id: 'state_codigoFracao',
      name: 'inputcodigoFracaoValue',
      type: 'string',
      imports: [],
      defaultValue: "''",
    },
    { id: 'state_rua', name: 'inputruaValue', type: 'string', imports: [], defaultValue: "''" },
    {
      id: 'state_valorIni',
      name: 'inputvalorInicialValue',
      type: 'number',
      imports: [],
      defaultValue: '0',
    },
    {
      id: 'state_valorFim',
      name: 'inputvalorFinalValue',
      type: 'number',
      imports: [],
      defaultValue: '0',
    },
  ],
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
