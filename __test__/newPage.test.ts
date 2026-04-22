import { initCodeSnippets, initComponents, newPage, setEngineConfiguration } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST2 } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST2;

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'caixaDias',
  path: 'caixa/dias',
  description: 'Operacoes de Caixa',
  forceDynamic: false,
  id: 'k7m2p9',
  types: [
    {
      componentId: 'table_q3w8r1',
      name: 'table1',
      path: '',
      fields: [
        {
          componentId: 'thc_a4b6c8',
          name: 'id',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'ttc_d9e1f3',
          name: 'dia',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'ttc_g5h7j2',
          name: 'utilizador',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'tbc_k4l6m8',
          name: 'estado',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'ttc_n0p2q4',
          name: 'dataAbertura',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'ttc_r6s8t1',
          name: 'dataFecho',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
      ],
    },
  ],
  states: [
    { id: 'state_x3y5z7', name: 'showFilter', type: 'boolean', defaultValue: 'false', imports: [] },
    { id: 'state_a1b3c5', name: 'searchValue', type: 'string', defaultValue: "''", imports: [] },
    { id: 'state_d7e9f2', name: 'datePickerRangeDate', type: 'any', imports: [] },
  ],
  functions: [
    {
      id: 'fnc_g4h6j8',
      name: 'clearFilters',
      code: 'setSearchValue("")\nsetSelectidUpsFltValue("")\nsetSelectestadoFltValue("")\nsetDatePickerRangeDate(undefined)\n\nrefreshList();',
      returnValue: { type: 'void', isNullable: true, isList: false },
      imports: [],
      isAsync: false,
      arguments: [],
    },
    {
      id: 'fnc_k1l3m5',
      name: 'refreshList',
      code: "queryClient.invalidateQueries({ queryKey: ['caixa'] });",
      returnValue: { type: 'void', isNullable: true, isList: false },
      imports: [],
      isAsync: false,
      arguments: [],
    },
  ],
  components: {
    id: 'page_n7p9q2',
    componentName: 'page',
    
    properties: { variant: 'default', commonProperties: { generateReference: false } },
    children: [
      {
        id: 'sect_r4s6t8',
        componentName: 'section',
        
        properties: { spaceX: '3', spaceY: '6', commonProperties: {} },
        children: [
          {
            id: 'phdr_u1v3w5',
            tag: 'pageHeader1',
            componentName: 'pageHeader',
            
            type: 'group',
            children: [
              {
                id: 'btn_x7y9z2',
                tag: 'button1',
                componentName: 'button',
                
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'navigate',
                    function: { type: 'function', fnCustomCode: { imports: [] } },
                    action: {},
                    navigate: { path: 'caixa/dias/novo', name: 'goToAbrirDia', params: [] },
                  },
                },
                allowTypes: false,
                data: {},
                properties: {
                  content: 'Abrir Novo Dia',
                  variant: 'default',
                  size: 'default',
                  iconProperties: { showIcon: true, iconName: 'Play' },
                  commonProperties: { generateReference: false },
                },
                childProperties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              title: 'Operacoes de Caixa',
              description: 'Gestao de abertura e fecho de dia e caixas atendedores.',
              variant: 'h3',
              commonProperties: { generateReference: false },
            },
            childProperties: {},
          },
          {
            id: 'grid_a3b5c7',
            tag: 'grid1',
            componentName: 'grid',
            
            type: 'group',
            children: [
              {
                id: 'stc_d8e0f2',
                tag: 'statsCard1',
                componentName: 'statsCard',
                
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'function',
                    function: { fnCustomSet: '() => {}', type: 'function' },
                    action: { actionCustomSet: '() => {}' },
                  },
                },
                allowTypes: false,
                data: {
                  value: {
                    state: {
                      id: '',
                      type: 'string | number',
                      name: 'statstatsCard1Value',
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
                  title: 'Dias Abertos',
                  titleSize: 'sm',
                  valueSize: 'sm',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'CalendarDays',
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
                id: 'stc_g4h6j8',
                tag: 'statsCard2',
                componentName: 'statsCard',
                
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'function',
                    function: { fnCustomSet: '() => {}', type: 'function' },
                    action: { actionCustomSet: '() => {}' },
                  },
                },
                allowTypes: false,
                data: {
                  value: {
                    state: {
                      id: '',
                      type: 'string | number',
                      name: 'statstatsCard2Value',
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
                  title: 'Total Atendedores',
                  titleSize: 'sm',
                  valueSize: 'sm',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'Users',
                    iconSize: 'md',
                    iconVariant: 'success',
                    iconPlacement: 'end',
                  },
                  itemPlacement: 'start',
                  commonProperties: { generateReference: false },
                  showIconBackground: true,
                },
                childProperties: {},
              },
              {
                id: 'stc_k1l3m5',
                tag: 'statsCard3',
                componentName: 'statsCard',
                
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'function',
                    function: { fnCustomSet: '() => {}', type: 'function' },
                    action: { actionCustomSet: '() => {}' },
                  },
                },
                allowTypes: false,
                data: {
                  value: {
                    state: {
                      id: '',
                      type: 'string | number',
                      name: 'statstatsCard3Value',
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
                  title: 'Total Entregue',
                  titleSize: 'sm',
                  valueSize: 'sm',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'ArrowUpRight',
                    iconSize: 'md',
                    iconVariant: 'indigo',
                    iconPlacement: 'end',
                  },
                  itemPlacement: 'start',
                  commonProperties: { generateReference: false },
                  showIconBackground: true,
                },
                childProperties: {},
              },
              {
                id: 'stc_n7p9q2',
                tag: 'statsCard4',
                componentName: 'statsCard',
                
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'function',
                    function: { fnCustomSet: '() => {}', type: 'function' },
                    action: { actionCustomSet: '() => {}' },
                  },
                },
                allowTypes: false,
                data: {
                  value: {
                    state: {
                      id: '',
                      type: 'string | number',
                      name: 'statstatsCard4Value',
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
                  cardVariant: 'warning',
                  iconBackground: 'rounded',
                  title: 'Saldo em Caixas',
                  titleSize: 'sm',
                  valueSize: 'sm',
                  iconProperties: {
                    showIcon: true,
                    iconName: 'Wallet',
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
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              gap: 4,
              variant: { default: 'cols4', md: 'cols2', lg: 'cols4', xs: '', xl: '' },
              commonProperties: { generateReference: false },
            },
            childProperties: { className: 'col-span-1' },
          },
          {
            id: 'cntr_r4s6t8',
            tag: 'container4',
            componentName: 'container',
            
            type: 'group',
            children: [
              {
                id: 'cntr_u1v3w5',
                tag: 'container1',
                componentName: 'container',
                
                type: 'group',
                children: [
                  {
                    id: 'cntr_x7y9z2',
                    tag: 'container2',
                    componentName: 'container',
                    
                    type: 'group',
                    children: [
                      {
                        id: 'cntr_a3b5c7',
                        tag: 'container3',
                        componentName: 'container',
                        
                        type: 'group',
                        children: [
                          {
                            id: 'isrc_d8e0f2',
                            tag: 'inputSearch2',
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
                                  fnCustomSet: '(value) => setSearchValue(value)\n',
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
                              placeholder: 'Pesquisar dias por utilizador ou UPS...',
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
                        id: 'flex_g4h6j8',
                        tag: 'flex1',
                        componentName: 'flex',
                        
                        type: 'group',
                        children: [
                          {
                            id: 'btn_k1l3m5',
                            tag: 'button3',
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
                    id: 'sepr_n7p9q2',
                    tag: 'separator1',
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
                    id: 'grid_r4s6t8',
                    tag: 'grid2',
                    componentName: 'grid',
                    
                    type: 'group',
                    children: [
                      {
                        id: 'cmbx_u1v3w5',
                        tag: 'idUpsFlt',
                        componentName: 'combobox',
                        
                        type: 'group',
                        children: [],
                        interactions: {
                          onChange: {
                            type: 'function',
                            function: {
                              fnCustomSet:
                                '(value) => { setSelectidUpsFltValue(value as string) }\n',
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
                        id: 'cmbx_x7y9z2',
                        tag: 'estadoFlt',
                        componentName: 'combobox',
                        
                        type: 'group',
                        children: [],
                        interactions: {
                          onChange: {
                            type: 'function',
                            function: {
                              fnCustomSet:
                                '(value) => { setSelectestadoFltValue(value as string) }',
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
                          options: [],
                        },
                        childProperties: {},
                      },
                      {
                        id: 'dpr_a3b5c7',
                        tag: 'datePickerRange1',
                        componentName: 'datePickerRange',
                        
                        type: 'group',
                        children: [],
                        interactions: {
                          onDateChange: {
                            type: 'function',
                            function: {
                              fnCustomCode: { imports: [] },
                              fnCustomSet: 'setDatePickerRangeDate\n',
                            },
                          },
                        },
                        allowTypes: false,
                        data: {
                          date: {
                            state: {
                              id: '',
                              name: 'datePickerRangeDate',
                              type: '',
                              imports: [],
                              generate: false,
                            },
                          },
                        },
                        properties: {
                          placeholder: 'Enter the date',
                          dateFormat: 'dd/MM/yyyy',
                          dataProperties: { isVirtual: false, isType: true },
                          commonProperties: { generateReference: false },
                          
                        },
                        childProperties: {},
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      gap: 4,
                      variant: { default: 'cols4', md: 'cols2', lg: 'cols4' },
                      commonProperties: { generateReference: false },
                    },
                    childProperties: { className: 'col-span-1 ' },
                    style: {},
                    rules: [{ type: 'visibility', condition: 'showFilter' }],
                  },
                  {
                    id: 'flex_d8e0f2',
                    tag: 'flex2',
                    componentName: 'flex',
                    
                    type: 'group',
                    children: [
                      {
                        id: 'btn_g4h6j8',
                        tag: 'button5',
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
              {
                id: 'table_q3w8r1',
                tag: 'table1',
                componentName: 'table',
                
                type: 'group',
                children: [
                  {
                    id: 'tcols_k1l3m5',
                    tag: 'tableColumns1',
                    componentName: 'tableColumns',
                    
                    children: [
                      {
                        id: 'thc_a4b6c8',
                        tag: 'id',
                        componentName: 'tableHiddenCell',
                        
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          headerTitle: 'id',
                          value: '',
                          dataProperties: { isVirtual: false, isType: true },
                          commonProperties: {},
                        },
                        childProperties: {},
                      },
                      {
                        id: 'ttc_d9e1f3',
                        tag: 'dia',
                        componentName: 'tableTextCell',
                        
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          headerTitle: 'Dia',
                          dataProperties: { isVirtual: false, isType: true },
                          variant: 'default',
                          commonProperties: { generateReference: false },
                          headerType: 'sortToggle',
                        },
                        childProperties: {},
                      },
                      {
                        id: 'ttc_g5h7j2',
                        tag: 'utilizador',
                        componentName: 'tableTextCell',
                        
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          headerTitle: 'Utilizador',
                          dataProperties: { isVirtual: false, isType: true },
                          variant: 'default',
                          commonProperties: { generateReference: false },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'tbc_k4l6m8',
                        tag: 'estado',
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
                                      "import {getCaixaEstadoColor} from '@/app/(myapp)/functions/caixa-utils'",
                                    id: 'imp_n7p9q2',
                                  },
                                ],
                              },
                              fnName: 'getCaixaEstadoColor',
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
                        id: 'ttc_n0p2q4',
                        tag: 'dataAbertura',
                        componentName: 'tableTextCell',
                        
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          headerTitle: 'Data Abertura',
                          dataProperties: { isVirtual: false, isType: true },
                          variant: 'default',
                          commonProperties: { generateReference: false },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'ttc_r6s8t1',
                        tag: 'dataFecho',
                        componentName: 'tableTextCell',
                        
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          headerTitle: 'Data Fecho',
                          dataProperties: { isVirtual: false, isType: true },
                          variant: 'default',
                          commonProperties: { generateReference: false },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'talc_u1v3w5',
                        tag: 'tableActionListCell1',
                        componentName: 'tableActionListCell',
                        
                        type: '',
                        children: [
                          {
                            id: 'tlka_x7y9z2',
                            tag: 'tableLinkAction1',
                            componentName: 'tableLinkAction',
                            
                            type: '',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              labelTrigger: 'Atendedores',
                              iconProperties: { iconName: 'Eye' },
                              variant: 'ghost',
                              href: 'caixa/dias/[uuid]/atendedores',
                              commonProperties: { generateReference: false },
                              segments: [{ name: '[uuid]', tag: 'id', context: 'column' }],
                              params: [],
                            },
                            childProperties: {},
                          },
                          {
                            id: 'tadi_a3b5c7',
                            tag: 'tableAlertDropdownItem1',
                            componentName: 'tableAlertDropdownItem',
                            
                            type: '',
                            children: [],
                            interactions: {
                              onClickConfirm: {
                                type: 'function',
                                function: {
                                  fnCustomSet:
                                    "()=> submitFecharDia(rowData.id, { utilizadorFecho: rowData.utilizador || '' }).then(() => refreshList())",
                                  type: 'function',
                                  fnCustomCode: { imports: [] },
                                },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {
                              showIcon: true,
                              iconProperties: { iconName: 'Lock' },
                              modalTitle: 'Fechar Dia',
                              content: 'Deseja fechar este dia?',
                              showCancel: true,
                              labelCancel: 'Cancelar',
                              variantCancel: 'outline',
                              showConfirm: true,
                              labelConfirm: 'Confirmar',
                              variantConfirm: 'destructive',
                              commonProperties: { generateReference: false },
                              labelTrigger: 'Fechar Dia',
                            },
                            childProperties: {},
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          headerTitle: '',
                          type: 'inline',
                          commonProperties: { generateReference: false },
                          className: 'text-center',
                        },
                        childProperties: {},
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: { commonProperties: {} },
                    childProperties: {},
                  },
                  {
                    id: 'tflt_d8e0f2',
                    tag: 'tableFilters1',
                    componentName: 'tableFilters',
                    
                    children: [],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: { commonProperties: {} },
                  },
                ],
                interactions: {},
                allowTypes: true,
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
                  showFilter: true,
                  showPagination: true,
                  tableClassName: 'rounded-none',
                  paginationClassName: 'px-3 pb-3',
                },
                dataType: 'table1',
                childProperties: {},
                rules: [{ type: 'visibility', condition: '!isLoading' }],
              },
              {
                id: 'ldpg_g4h6j8',
                tag: 'LoadingPage1',
                componentName: 'LoadingPage',
                
                type: 'group',
                children: [],
                interactions: {},
                allowTypes: false,
                data: { isLoading: { value: { id: '', code: 'isLoading' } } },
                properties: { customProperties: {} },
                childProperties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: { className: 'border rounded-sm', commonProperties: {} },
            childProperties: {},
          },
        ],
        tag: 'section2',
        data: {},
        interactions: {},
        childProperties: {},
      },
    ],
    tag: 'page2',
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
                  "import {useCaixaDias, useCaixaComboboxUps, submitFecharDia} from '@/app/(myapp)/hooks/use-caixa'",
                id: 'imp_k1l3m5',
              },
              {
                namespace: "import { useQueryClient } from '@tanstack/react-query';",
                id: 'imp_r4s6t8',
              },
            ],
            fnCode:
              "const router = useRouter();\nconst queryClient = useQueryClient();\n\nconst { data, isLoading } = useCaixaDias({\n  de: '',\n  ate: '',\n  idUps: selectidUpsFltValue ? Number(selectidUpsFltValue) : undefined,\n  utilizador: searchValue || undefined,\n});\n\nconst { data: upsOptions, isLoading: isLoadingUps } = useCaixaComboboxUps();\n\nuseEffect(() => {\n  if (isLoadingUps || !upsOptions) return;\n  setSelectidUpsFltOptions(upsOptions.map((u) => ({ value: String(u.value), label: u.label })));\n}, [isLoadingUps, upsOptions]);\n\nconst estadoOptions = [\n  { value: 'ABERTO', label: 'Aberto' },\n  { value: 'FECHADO', label: 'Fechado' },\n];\nsetSelectestadoFltOptions(estadoOptions);\n\nuseEffect(() => {\n  if (isLoading || !data?.content) return;\n  setContentTabletable1(\n    (data.content || []).map((item) => ({ ...item }))\n  );\n}, [isLoading, data]);\n",
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
