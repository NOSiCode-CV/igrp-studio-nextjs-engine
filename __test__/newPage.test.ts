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
  pageName: 'processosEvacuacoesBO',
  path: 'processos-evacuacoes-bo',
  description: 'Processos de Evacuacoes BO',
  forceDynamic: false,
  id: 'z8y7x6w5v4',
  types: [
    {
      componentId: 'table_2u3v4b5n',
      name: 'table1',
      path: '',
      fields: [
        {
          componentId: 'tabletextcell_1a2s3d4f',
          name: 'processo',
          type: 'string',
          required: false,
        },
        {
          componentId: 'tabletextcell_5g6h7j8k',
          name: 'numero',
          type: 'string',
          required: false,
        },
        {
          componentId: 'tabletextcell_9l0p1o2i',
          name: 'nome',
          type: 'string',
          required: false,
        },
        {
          componentId: 'tabletextcell_3u4y5t6r',
          name: 'dataPedido',
          type: 'string',
          required: false,
        },
        {
          componentId: 'tablebadgecell_7e8w9q0a',
          name: 'estado',
          type: 'string',
          required: false,
        },
      ],
    },
  ],
  states: [],
  functions: [
    {
      id: 'fnc_8U7Y6T',
      name: 'handleRefreshClick',
      code: '',
      returnValue: {
        type: 'void',
        isNullable: true,
        isList: false,
      },
      imports: [],
      isAsync: false,
      arguments: [],
    },
  ],
  args: [],
  components: {
    id: 'page_e3d4c5b6',
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
        id: 'section_a9b8c7d6',
        componentName: 'section',
        label: 'section',
        properties: {
          spaceX: '6',
          spaceY: '6',
          commonProperties: {},
        },
        children: [
          {
            id: 'pageheader_f5g6h7j8',
            tag: 'pageHeader1',
            componentName: 'pageHeader',
            label: 'Page Header',
            type: 'group',
            children: [
              {
                id: 'button_k9l0m1n2',
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
                    },
                    action: {},
                  },
                },
                allowTypes: false,
                data: {},
                properties: {
                  content: 'Recuperar',
                  variant: 'default',
                  size: 'default',
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
              title: 'Processos de Evacuações - BO',
              variant: 'h3',
              iconProperties: {
                iconBackButton: 'Search',
              },
              commonProperties: {
                generateReference: false,
              },
              params: [],
            },
            childProperties: {},
          },
          {
            id: 'container_n3b4v5c6',
            tag: 'container1',
            componentName: 'container',
            label: 'Container',
            type: 'group',
            children: [
              {
                id: 'search_bar_flex_x7z8y9w0',
                tag: 'search_bar_flex',
                componentName: 'flex',
                properties: {
                  variant: 'wrap',
                  commonProperties: {
                    generateReference: false,
                  },
                  className: 'items-center gap-3  px-4 mt-3',
                },
                children: [
                  {
                    id: 'relative_search_bar_s1d2f3g4',
                    tag: 'relative_search_bar',
                    componentName: 'container',
                    properties: {
                      className: 'relative flex-1 min-w-[240px]',
                    },
                    children: [
                      {
                        id: 'search_input_text_h5j6k7l8',
                        tag: 'search_input_text',
                        componentName: 'inputSearch',
                        properties: {
                          showSubmitButton: true,
                          submitButtonLabel: 'Pesquisar',
                          iconProperties: {
                            showStartIcon: true,
                          },
                          placeholder: 'Pesquisar processos...',
                          required: false,
                        },
                        data: {
                          value: {
                            state: {
                              id: '',
                              name: 'filterValue',
                              type: 'string',
                              defaultValue: ' ',
                              generate: true,
                            },
                          },
                        },
                        interactions: {
                          onSearch: {
                            function: {
                              fnCustomSet: '(value) => { setFilterValue(value) }',
                            },
                            type: 'function',
                          },
                        },
                      },
                    ],
                  },
                  {
                    id: 'filter_table_button_m9o8p7i6',
                    tag: 'filter_table_button',
                    componentName: 'button',
                    properties: {
                      size: 'sm',
                      variant: 'ghost',
                      iconProperties: {
                        showIcon: true,
                        iconName: 'SlidersHorizontal',
                      },
                    },
                    children: [
                      {
                        id: 'filter_btn_paragraph_u5y4t3r2',
                        tag: 'filter_btn_paragraph',
                        componentName: 'paragraph',
                        properties: {
                          content: 'Filtros',
                        },
                      },
                      {
                        id: 'filter_btn_container_e1w2q3a4',
                        tag: 'filter_btn_container',
                        componentName: 'container',
                        properties: {
                          content:
                            '{(statusFilter !== "" ? 1 : 0) + (dataInicioFilter !== "" ? 1 : 0)}',
                          className:
                            'ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground',
                        },
                        rules: [
                          {
                            type: 'visibility',
                            condition: 'hasActiveFilters',
                          },
                        ],
                      },
                    ],
                    interactions: {
                      onClick: {
                        function: {
                          fnCustomCode: {
                            states: [
                              {
                                id: 'filter_table_btn_state_s5z6x7c8',
                                name: 'showFilters',
                                type: 'boolean',
                                defaultValue: 'false',
                              },
                            ],
                          },
                          fnCustomSet: '() => setShowFilters(!showFilters)',
                        },
                        type: 'function',
                      },
                    },
                  },
                  {
                    id: 'actions_table_row_v9b8n7m6',
                    tag: 'actions_table_row',
                    componentName: 'flex',
                    properties: {
                      variant: 'items-center',
                      className: 'gap-2',
                    },
                    children: [
                      {
                        id: 'button_refresh_q1a2z3w4',
                        tag: 'button_refresh',
                        componentName: 'button',
                        properties: {
                          content: 'Atualizar lista',
                          size: 'icon',
                          variant: 'outline',
                          className: 'h-10 w-10',
                          iconProperties: {
                            iconName: 'RefreshCw',
                          },
                        },
                        interactions: {
                          onClick: {
                            function: {
                              fnName: 'handleRefreshClick',
                            },
                            type: 'function',
                          },
                        },
                      },
                    ],
                  },
                ],
                childProperties: {},
              },
              {
                id: 'filter_container_s5d6f7g8',
                tag: 'filter_container',
                componentName: 'container',
                properties: {
                  commonProperties: {
                    generateReference: false,
                  },
                  className: 'mt-3 pt-3 border-t px-4',
                },
                children: [
                  {
                    id: 'grid_h9j8k7l6',
                    tag: 'grid1',
                    componentName: 'grid',
                    label: 'Grid',
                    type: 'group',
                    children: [
                      {
                        id: 'inputtext_processo',
                        tag: 'inputTextProcesso',
                        componentName: 'inputText',
                        label: 'Input Text',
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          label: 'Processo',
                          required: false,
                          gridSize: 'full',
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'inputtext_numero_utente',
                        tag: 'inputTextNumeroUtente',
                        componentName: 'inputText',
                        label: 'Input Text',
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          label: 'Número Utente',
                          required: false,
                          gridSize: 'full',
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'inputtext_nome_utente',
                        tag: 'inputTextNomeUtente',
                        componentName: 'inputText',
                        label: 'Input Text',
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          label: 'Nome Utente',
                          required: false,
                          gridSize: 'full',
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'datepicker_de',
                        tag: 'datePickerDe',
                        componentName: 'datePicker',
                        label: 'Date Picker',
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          label: 'De',
                          placeholder: 'Selecione a data',
                          dateFormat: 'dd/MM/yyyy',
                          gridSize: 'full',
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'datepicker_ate',
                        tag: 'datePickerAte',
                        componentName: 'datePicker',
                        label: 'Date Picker',
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          label: 'Até',
                          placeholder: 'Selecione a data',
                          dateFormat: 'dd/MM/yyyy',
                          gridSize: 'full',
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'combobox_estado',
                        tag: 'comboboxEstado',
                        componentName: 'combobox',
                        label: 'Combobox',
                        type: 'group',
                        children: [],
                        interactions: {
                          onChange: {
                            type: 'function',
                            function: {
                              fnCustomSet: '() => {}',
                              type: 'function',
                            },
                            action: {},
                          },
                        },
                        allowTypes: false,
                        data: {
                          options: {
                            state: {
                              id: '',
                              type: 'IGRPOptionsProps[]',
                              name: 'selectEstadoOptions',
                              defaultValue: '[]',
                              imports: [],
                              generate: true,
                            },
                          },
                        },
                        properties: {
                          label: 'Estado',
                          variant: 'single',
                          placeholder: 'Selecione o estado',
                          showSearch: true,
                          commonProperties: {
                            generateReference: false,
                          },
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
                      variant: {
                        default: 'cols1',
                        md: 'cols2',
                        lg: 'cols4',
                      },
                      commonProperties: {},
                    },
                  },
                  {
                    id: 'filter_button_container_clean_x5c6v7b8',
                    tag: 'filter_button_container_clean',
                    componentName: 'container',
                    properties: {
                      className: 'ml-auto',
                    },
                    children: [
                      {
                        id: 'button_clear_filter_n9m8b7v6',
                        tag: 'button_clear_filter',
                        componentName: 'button',
                        properties: {
                          content: 'Limpar Filtros',
                          variant: 'outline',
                          size: 'sm',
                          iconProperties: {
                            showIcon: true,
                            iconName: 'X',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                          className: 'h-9',
                        },
                        data: {
                          disabled: {
                            value: {
                              id: 'disable_val_c5x6z7y8',
                              code: '!hasActiveFilters',
                            },
                          },
                        },
                        interactions: {
                          onClick: {
                            function: {
                              fnCustomSet: '',
                              fnCustomCode: {
                                imports: [],
                              },
                            },
                            type: 'function',
                          },
                        },
                        childProperties: {},
                      },
                    ],
                  },
                ],
                rules: [
                  {
                    type: 'visibility',
                    condition: 'showFilters',
                  },
                ],
                childProperties: {},
              },
              {
                id: 'table_2u3v4b5n',
                tag: 'table1',
                componentName: 'table',
                label: 'Table',
                type: 'group',
                children: [
                  {
                    id: 'tablecolumns_f4g5h6j7',
                    tag: 'tableColumns1',
                    componentName: 'tableColumns',
                    label: 'Table Column',
                    children: [
                      {
                        id: 'tabletextcell_1a2s3d4f',
                        tag: 'processo',
                        componentName: 'tableTextCell',
                        label: 'Text Column',
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          headerTitle: 'Processo',
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
                        id: 'tabletextcell_5g6h7j8k',
                        tag: 'numero',
                        componentName: 'tableTextCell',
                        label: 'Text Column',
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          headerTitle: 'Número',
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
                        id: 'tabletextcell_9l0p1o2i',
                        tag: 'nome',
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
                      {
                        id: 'tabletextcell_3u4y5t6r',
                        tag: 'dataPedido',
                        componentName: 'tableTextCell',
                        label: 'Text Column',
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          headerTitle: 'Data Pedido',
                          dataProperties: {
                            isVirtual: false,
                            isType: true,
                          },
                          variant: 'date',
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'tablebadgecell_7e8w9q0a',
                        tag: 'estado',
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
                        childProperties: {},
                      },
                      {
                        id: 'tableactionlistcell_k9l0m1n2',
                        tag: 'tableActionListCell1',
                        componentName: 'tableActionListCell',
                        label: 'Actions Column',
                        type: '',
                        children: [
                          {
                            id: 'tabledropdownmenucell_o3p4i5u6',
                            tag: 'tableDropdownMenuCell1',
                            componentName: 'tableDropdownMenuCell',
                            label: 'Dropdown Column',
                            type: '',
                            children: [
                              {
                                id: 'tablelinkdropdownitem_y7t8r9e0',
                                tag: 'tableLinkDropdownItem1',
                                componentName: 'tableLinkDropdownItem',
                                label: 'Link Item',
                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  labelTrigger: 'Pesquisa Utente',
                                  showIcon: true,
                                  iconProperties: {
                                    iconName: 'Search',
                                  },
                                  href: '#',
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'tablelinkdropdownitem_w1q2a3s4',
                                tag: 'tableLinkDropdownItem2',
                                componentName: 'tableLinkDropdownItem',
                                label: 'Link Item',
                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  labelTrigger: 'Histórico de Parecer',
                                  showIcon: true,
                                  iconProperties: {
                                    iconName: 'History',
                                  },
                                  href: '#',
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'tablelinkdropdownitem_e5d6c7r8',
                                tag: 'tableLinkDropdownItem3',
                                componentName: 'tableLinkDropdownItem',
                                label: 'Link Item',
                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  labelTrigger: 'Ver Detalhes',
                                  showIcon: true,
                                  iconProperties: {
                                    iconName: 'Eye',
                                  },
                                  href: '#',
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'tablelinkdropdownitem_f4g5h6j7',
                                tag: 'tableLinkDropdownItem4',
                                componentName: 'tableLinkDropdownItem',
                                label: 'Link Item',
                                type: '',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  labelTrigger: 'Verificação CADE',
                                  showIcon: true,
                                  iconProperties: {
                                    iconName: 'CheckCircle',
                                  },
                                  href: '#',
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
                              labelTrigger: 'Ações',
                              iconProperties: {
                                iconName: 'MoreVertical',
                              },
                              variant: 'default',
                              commonProperties: {},
                            },
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
                      type: '{{type}}[]',
                      name: 'contentTable{{id}}',
                      defaultValue: '[]',
                      imports: [],
                      generate: true,
                    },
                  },
                },
                properties: {
                  commonProperties: {
                    generateReference: false,
                  },
                  tableClassName: 'rounded-none',
                },
                childProperties: {},
                dataType: 'table1',
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              commonProperties: {
                generateReference: false,
              },
              className: 'border rounded-lg',
            },
            childProperties: {},
          },
        ],
        tag: 'section2',
        data: {},
        interactions: {},
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
                namespace: "import {useEvacuacoesBO} from '@/app/(myapp)/hooks/use-evacuacoes-bo'",
                id: '2847f6g5h4',
              },
            ],
            fnCode:
              'const {data} = useEvacuacoesBO();\n\nconst [hasActiveFilters, setHasActiveFilters] = useState<boolean>(false);\n\nuseEffect(() => {\n \nsetContentTabletable1(data || [])\n},[data])\n\n',
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
