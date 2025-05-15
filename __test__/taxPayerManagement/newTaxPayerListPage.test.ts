import { initComponents, newPage, registerComponents } from '../../src';
import { Layout, PageConfig } from '../../src/interfaces/types';
import { OUTPUT_TAXPAYER_TEST } from '../../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TAXPAYER_TEST;

const tableLayout: Layout = {
  id: 'table_taxpayers',
  tag: 'table_taxpayers',
  componentName: 'table',
  properties: {
    showFilter: false,
    showPagination: true,
    showToggleColumn: true
  },
  children: [
    {
      id: 'expand',
      tag: 'expand',
      componentName: 'tableColumns',
      properties: {},
      children: [
        {
          id: 'check',
          tag: 'check',
          componentName: 'tableCheckboxCell',
          properties: {
            headerType: "rowsSelect"
          },
        },
        {
          id: 'nif',
          tag: 'nif',
          componentName: 'tableTextCell',
          properties: {
            headerTitle: "NIF",
            headerType: "sortToggle",
          }
        },
        {
          id: 'nome',
          tag: 'nome',
          componentName: 'tableTextCell',
          properties: {
            headerTitle: "Nome",
            headerType: "sortToggle",
          }
        },
        {
          id: 'sector',
          tag: 'sector',
          componentName: 'tableBadgeCell',
          properties: {
            headerTitle: 'Setor',
            headerType: 'sortToggle'
          }
        },
        {
          id: 'status',
          tag: 'status',
          componentName: 'tableBadgeCell',
          properties: {
            headerTitle: 'Status',
            headerType: 'sortToggle'
          }
        },
        {
          id: 'email',
          tag: 'email',
          componentName: 'tableTextCell',
          properties: {
            headerTitle: "Email",
            headerType: "sortToggle",
          }
        },
        {
          id: 'telefone',
          tag: 'telefone',
          componentName: 'tableTextCell',
          properties: {
            headerTitle: "Telefone",
            headerType: "sortToggle",
          }
        },
        {
          id: 'actions',
          tag: 'tbl_actions',
          componentName: 'tableActionListCell',
          properties: {
            type: 'inline',
            headerTitle: 'Actions'
          },
          children: [
            {
              id: 'dropdown',
              tag: 'dropdown',
              componentName: 'tableDropdownMenuCell',
              children: [
                {
                  id: 'view',
                  tag: 'visualizar',
                  componentName: 'tableModalDropdownItem',
                  properties: {
                    iconProperties: {
                      iconName: 'Eye',
                    },
                    showIcon: true,
                    labelTrigger: 'Visualizar',
                    type: "modal"
                  }
                },
                {
                  id: 'edit',
                  tag: 'editar',
                  componentName: 'tableModalDropdownItem',
                  properties: {
                    iconProperties: {
                      iconName: 'Pencil',
                    },
                    showIcon: true,
                    labelTrigger: 'Editar',
                    type: "modal"
                  }
                },
                {
                  id: 'suspend',
                  tag: 'suspender',
                  componentName: 'tableAlertDropdownItem',
                  properties: {
                    iconProperties: {
                      iconName: 'Pause',
                    },
                    showIcon: true,
                    labelTrigger: 'Suspender',
                    type: "alert"
                  }
                },
                {
                  id: 'doc',
                  tag: 'declaracao',
                  componentName: 'tableLinkDropdownItem',
                  properties: {
                    iconProperties: {
                      iconName: 'Link',
                    },
                    showIcon: true,
                    labelTrigger: 'Declaração',
                    href: "https://igrp.cv/",
                    type: "link"
                  }
                },
                {
                  id: 'delete',
                  tag: 'excluir',
                  componentName: 'tableAlertDropdownItem',
                  properties: {
                    iconProperties: {
                      iconName: 'Trash',
                    },
                    showIcon: true,
                    labelTrigger: 'Excluir',
                    type: "alert"
                  }
                },
              ]
            },
          ]
        },
      ],
    },
    {
      id: 'table_taxpayers_filters',
      tag: 'table_taxpayers_filters',
      componentName: 'tableFilters',
      properties: {},
      children: [
        {
          id: 'status_flt',
          tag: 'status_flt',
          componentName: 'tableDropdownFilter',
          properties: {
            placeholder: 'Todos Status',
            options: [
              { value: 'Ativo', label: 'Ativos' },
              { value: 'Inativo', label: 'Inativos' }
            ],
          }
        },
        {
          id: 'setor_flt',
          tag: 'setor_flt',
          componentName: 'tableDropdownFilter',
          properties: {
            placeholder: 'Todos Setores',
            options: [
              { value: 'Público', label: 'Público' },
              { value: 'Público', label: 'Público' }
            ],
          }
        },
      ],
    },
  ],
  data: {
    data: {
      state: {
        id: '',
        name: 'contentTabletable_taxpayers',
        type: 'TaxPayer',
        defaultValue: '[]'
      },
    },
  }
}

export const taxPayerLayout: Layout = {
  id: 'main_page',
  tag: 'main_page',
  componentName: 'page',
  interactions: {
    onLoad: {
      fnCustomCode: {
        fnCode: `
        
const totalContribuintes = mockTaxPayerList().length
const ativosCount = mockTaxPayerList().filter((c) => c.status === "Ativo").length
const inativosCount = mockTaxPayerList().filter((c) => c.status === "Inativo").length
const publicoCount = mockTaxPayerList().filter((c) => c.setor === "Público").length
const privadoCount = mockTaxPayerList().filter((c) => c.setor === "Privado").length

useEffect(() => {
  updateTabletable_taxpayers()
},[])

const updateTabletable_taxpayers = async () => {
 
  setContentTabletable_taxpayers(mockTaxPayerList())
  
}
        
        `,
      },
      type: 'function',
    },
  },
  children: [
    {
      id: 'main_layout',
      tag: 'main_layout',
      componentName: 'flex',
      properties: {
        variant: 'col',
        className: 'h-full w-full',
      },
      children: [
        {
          id: 'headline_row',
          tag: 'headline_row',
          componentName: 'flex',
          properties: {
            variant: 'items-center',
            className: 'justify-between px-6 pt-6 pb-4 w-full',
          },
          children: [
            {
              id: 'page_header1',
              tag: 'page_title',
              componentName: 'pageHeader',
              properties: {
                title: 'Contribuintes',
                variant: 'h3',
                description: 'Gerencie os contribuintes do sistema de segurança social',
              },
            },
            {
              id: 'headline_actions',
              tag: 'headline_actions',
              componentName: 'flex',
              properties: {
                variant: 'items-center',
                className: 'gap-2',
              },
              children: [
                {
                  id: 'button_new',
                  tag: 'button_new',
                  componentName: 'button',
                  properties: {
                    label: 'Novo',
                    size: 'sm',
                    variant: 'outline',
                    iconProperties: {
                      iconName: 'Plus',
                    },
                  },
                  interactions: {
                    onClick: {
                      fnName: 'handleNovoClick',
                      type: 'function',
                    },
                  },
                },
                {
                  id: 'button_quick_action',
                  tag: 'button_quick_action',
                  componentName: 'button',
                  properties: {
                    label: 'Ação Rápida',
                    size: 'sm',
                    iconProperties: {
                      iconName: 'Plus',
                    },
                  },
                  interactions: {
                    onClick: {
                      fnCustomCode: {
                        states: [
                          {
                            id: 'quick_action_btn_state',
                            name: 'isAddDialogOpen',
                            type: 'boolean',
                            defaultValue: 'false'
                          }
                        ],
                      },
                      fnCustomSet: '() => setIsAddDialogOpen(true)',
                      type: 'function'
                    }
                  },
                },
                /*{
                  id: "button_quick_action",
                  tag: "button_quick_action",
                  componentName: "modalDialog",
                  properties: {
                    title: "Adicionar Novo Contribuinte",
                    description: "Preencha os dados básicos do contribuinte. Você poderá completar as informações adicionais posteriormente.",
                    type: "modal",
                    size: "full",
                    iconProperties: {
                      iconPosition: "modal",
                    },
                    triggerText: "Ação Rápida",
                    triggerVariant: "default"
                  },
                  children: [
                    // TODO: add page call
                  ],
                  interactions: {
                    onOpenChange: {
                      fnCustomCode: {
                        states: [
                          {
                            id: 'quick_action_btn_state',
                            name: 'isAddDialogOpen',
                            type: 'boolean',
                            defaultValue: 'false'
                          }
                        ],
                      },
                      fnCustomSet: '() => setIsAddDialogOpen(true)',
                      type: 'function'
                    }
                  }
                }*/
              ],
            },
          ],
        },
        {
          id: 'stats_grid',
          tag: 'stats_grid',
          componentName: 'grid',
          properties: {
            variant: 'cols2',
            className: 'sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4 px-6 w-full',
          },
          children: [
            {
              id: 'total_stat_box',
              tag: 'total_stat_box',
              componentName: 'card',
              properties: {
                className: 'overflow-hidden',
              },
              children: [
                // TODO: <div className="h-1 bg-blue-500 w-full" />
                {
                  id: 'total_stat_box_colored_line',
                  tag: 'total_stat_box_colored_line',
                  componentName: 'section',
                  properties: {
                    className: 'h-1 bg-blue-500 w-full',
                  },
                },
                {
                  id: 'total_stat_box_content',
                  tag: 'total_stat_box_content',
                  componentName: 'cardContent',
                  properties: {
                    className: 'p-3',
                  },
                  children: [
                    {
                      id: 'total_stat_box_content_row',
                      tag: 'total_stat_box_content_row',
                      componentName: 'flex',
                      properties: {
                        variant: 'justify-between',
                        className: 'items-center',
                      },
                      children: [
                        // TODO: handle this with div instead of section
                        {
                          id: 'total_stat_box_texts',
                          tag: 'total_stat_box_texts',
                          componentName: 'section',
                          properties: {},
                          children: [
                            {
                              id: 'total_stat_box_total_p',
                              tag: 'total_stat_box_total_p',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-xs text-muted-foreground font-medium',
                              },
                              content: 'Total',
                            },
                            {
                              id: 'total_stat_box_total_v',
                              tag: 'total_stat_box_total_v',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-2xl font-bold',
                              },
                              content: '{totalContribuintes}',
                            },
                          ],
                        },
                        {
                          id: 'total_stat_box_icon',
                          tag: 'total_stat_box_icon',
                          componentName: 'section',
                          properties: {
                            className:
                              'h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center',
                          },
                          children: [
                            {
                              id: 'total_building_icon',
                              tag: 'total_building_icon',
                              componentName: 'icon',
                              properties: {
                                iconName: 'Building',
                                className: 'h-4 w-4 text-blue-500',
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
            {
              id: 'ativos_stat_box',
              tag: 'ativos_stat_box',
              componentName: 'card',
              properties: {
                className: 'overflow-hidden',
              },
              children: [
                // TODO: <div className="h-1 bg-green-500 w-full" />
                {
                  id: 'ativos_stat_box_colored_line',
                  tag: 'ativos_stat_box_colored_line',
                  componentName: 'section',
                  properties: {
                    className: 'h-1 bg-green-500 w-full',
                  },
                },
                {
                  id: 'ativos_stat_box_content',
                  tag: 'ativos_stat_box_content',
                  componentName: 'cardContent',
                  properties: {
                    className: 'p-3',
                  },
                  children: [
                    {
                      id: 'ativos_stat_box_content_row',
                      tag: 'ativos_stat_box_content_row',
                      componentName: 'flex',
                      properties: {
                        variant: 'justify-between',
                        className: 'items-center',
                      },
                      children: [
                        // TODO: handle this with div instead of section
                        {
                          id: 'ativos_stat_box_texts',
                          tag: 'ativos_stat_box_texts',
                          componentName: 'section',
                          properties: {},
                          children: [
                            {
                              id: 'ativos_stat_box_total_p',
                              tag: 'ativos_stat_box_total_p',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-xs text-muted-foreground font-medium',
                              },
                              content: 'Ativos',
                            },
                            {
                              id: 'ativos_stat_box_total_v',
                              tag: 'ativos_stat_box_total_v',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-2xl font-bold',
                              },
                              content: '{ativosCount}',
                            },
                          ],
                        },
                        {
                          id: 'ativos_stat_box_icon',
                          tag: 'ativos_stat_box_icon',
                          componentName: 'section',
                          properties: {
                            className:
                              'h-8 w-8 rounded-full bg-green-100 flex items-center justify-center',
                          },
                          children: [
                            {
                              id: 'total_check_circle_icon',
                              tag: 'total_check_circle_icon',
                              componentName: 'icon',
                              properties: {
                                iconName: 'CircleCheck',
                                className: 'h-4 w-4 text-green-500',
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
            {
              id: 'inativos_stat_box',
              tag: 'inativos_stat_box',
              componentName: 'card',
              properties: {
                className: 'overflow-hidden',
              },
              children: [
                // TODO: <div className="h-1 bg-red-500 w-full" />
                {
                  id: 'inativos_stat_box_colored_line',
                  tag: 'inativos_stat_box_colored_line',
                  componentName: 'section',
                  properties: {
                    className: 'h-1 bg-red-500 w-full',
                  },
                },
                {
                  id: 'inativos_stat_box_content',
                  tag: 'inativos_stat_box_content',
                  componentName: 'cardContent',
                  properties: {
                    className: 'p-3',
                  },
                  children: [
                    {
                      id: 'inativos_stat_box_content_row',
                      tag: 'inativos_stat_box_content_row',
                      componentName: 'flex',
                      properties: {
                        variant: 'justify-between',
                        className: 'items-center',
                      },
                      children: [
                        // TODO: handle this with div instead of section
                        {
                          id: 'inativos_stat_box_texts',
                          tag: 'inativos_stat_box_texts',
                          componentName: 'section',
                          properties: {},
                          children: [
                            {
                              id: 'inativos_stat_box_total_p',
                              tag: 'inativos_stat_box_total_p',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-xs text-muted-foreground font-medium',
                              },
                              content: 'Inativos',
                            },
                            {
                              id: 'inativos_stat_box_total_v',
                              tag: 'inativos_stat_box_total_v',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-2xl font-bold',
                              },
                              content: '{inativosCount}',
                            },
                          ],
                        },
                        {
                          id: 'inativos_stat_box_icon',
                          tag: 'inativos_stat_box_icon',
                          componentName: 'section',
                          properties: {
                            className:
                              'h-8 w-8 rounded-full bg-red-100 flex items-center justify-center',
                          },
                          children: [
                            {
                              id: 'inativos_check_circle_icon',
                              tag: 'inativos_check_circle_icon',
                              componentName: 'icon',
                              properties: {
                                iconName: 'CircleX',
                                className: 'h-4 w-4 text-red-500',
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
            {
              id: 'publico_stat_box',
              tag: 'publico_stat_box',
              componentName: 'card',
              properties: {
                className: 'overflow-hidden',
              },
              children: [
                // TODO: <div className="h-1 bg-blue-500 w-full" />
                {
                  id: 'publico_stat_box_colored_line',
                  tag: 'publico_stat_box_colored_line',
                  componentName: 'section',
                  properties: {
                    className: 'h-1 bg-purple-500 w-full',
                  },
                },
                {
                  id: 'publico_stat_box_content',
                  tag: 'publico_stat_box_content',
                  componentName: 'cardContent',
                  properties: {
                    className: 'p-3',
                  },
                  children: [
                    {
                      id: 'publico_stat_box_content_row',
                      tag: 'publico_stat_box_content_row',
                      componentName: 'flex',
                      properties: {
                        variant: 'justify-between',
                        className: 'items-center',
                      },
                      children: [
                        // TODO: handle this with div instead of section
                        {
                          id: 'publico_stat_box_texts',
                          tag: 'publico_stat_box_texts',
                          componentName: 'section',
                          properties: {},
                          children: [
                            {
                              id: 'publico_stat_box_total_p',
                              tag: 'publico_stat_box_total_p',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-xs text-muted-foreground font-medium',
                              },
                              content: 'Setor Público',
                            },
                            {
                              id: 'publico_stat_box_total_v',
                              tag: 'publico_stat_box_total_v',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-2xl font-bold',
                              },
                              content: '{publicoCount}',
                            },
                          ],
                        },
                        {
                          id: 'publico_stat_box_icon',
                          tag: 'publico_stat_box_icon',
                          componentName: 'section',
                          properties: {
                            className:
                              'h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center',
                          },
                          children: [
                            {
                              id: 'publico_briefcase_icon',
                              tag: 'publico_briefcase_icon',
                              componentName: 'icon',
                              properties: {
                                iconName: 'Briefcase',
                                className: 'h-4 w-4 text-purple-500',
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
            {
              id: 'privado_stat_box',
              tag: 'privado_stat_box',
              componentName: 'card',
              properties: {
                className: 'overflow-hidden',
              },
              children: [
                // TODO: <div className="h-1 bg-amber-500 w-full" />
                {
                  id: 'privado_stat_box_colored_line',
                  tag: 'privado_stat_box_colored_line',
                  componentName: 'section',
                  properties: {
                    className: 'h-1 bg-amber-500 w-full',
                  },
                },
                {
                  id: 'privado_stat_box_content',
                  tag: 'privado_stat_box_content',
                  componentName: 'cardContent',
                  properties: {
                    className: 'p-3',
                  },
                  children: [
                    {
                      id: 'privado_stat_box_content_row',
                      tag: 'privado_stat_box_content_row',
                      componentName: 'flex',
                      properties: {
                        variant: 'justify-between',
                        className: 'items-center',
                      },
                      children: [
                        // TODO: handle this with div instead of section
                        {
                          id: 'privado_stat_box_texts',
                          tag: 'privado_stat_box_texts',
                          componentName: 'section',
                          properties: {},
                          children: [
                            {
                              id: 'privado_stat_box_total_p',
                              tag: 'privado_stat_box_total_p',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-xs text-muted-foreground font-medium',
                              },
                              content: 'Setor Privado',
                            },
                            {
                              id: 'privado_stat_box_total_v',
                              tag: 'privado_stat_box_total_v',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-2xl font-bold',
                              },
                              content: '{privadoCount}',
                            },
                          ],
                        },
                        {
                          id: 'privado_stat_box_icon',
                          tag: 'privado_stat_box_icon',
                          componentName: 'section',
                          properties: {
                            className:
                              'h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center',
                          },
                          children: [
                            {
                              id: 'privado_users_icon',
                              tag: 'privado_users_icon',
                              componentName: 'icon',
                              properties: {
                                iconName: 'Users',
                                className: 'h-4 w-4 text-amber-500',
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
          ],
        },
        {
          id: 'main_content_flex',
          tag: 'main_content_flex',
          componentName: 'flex',
          properties: {
            variant: 'flex1',
            className: 'px-6 pb-6 w-full',
          },
          children: [
            {
              id: 'main_content_card',
              tag: 'main_content_card',
              componentName: 'card',
              properties: {
                className: 'shadow-sm w-full',
              },
              children: [
                // TODO: replace with div instead of section
                {
                  id: 'table_section',
                  tag: 'table_section',
                  componentName: 'section',
                  properties: {
                    className: 'p4 border-b bg-white',
                  },
                  children: [
                    {
                      id: 'search_bar_flex',
                      tag: 'search_bar_flex',
                      componentName: 'flex',
                      properties: {
                        variant: 'wrap',
                        className: 'items-center gap-3',
                      },
                      children: [
                        // TODO: replace with div instead of section
                        {
                          id: 'relative_search_bar',
                          tag: 'relative_search_bar',
                          componentName: 'section',
                          properties: {
                            className: 'relative flex-1 min-w-[240px]',
                          },
                          children: [
                            {
                              id: 'absolute_search_bar',
                              tag: 'absolute_search_bar',
                              componentName: 'section',
                              properties: {
                                className:
                                  'absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none',
                              },
                              children: [
                                {
                                  id: 'search_input_icon',
                                  tag: 'search_input_icon',
                                  componentName: 'icon',
                                  properties: {
                                    iconName: 'Search',
                                    className: 'h-4 w-4 text-muted-foreground',
                                  },
                                },
                              ],
                            },
                            {
                              id: 'search_input_text',
                              tag: 'search_input_text',
                              componentName: 'inputText',
                              properties: {
                                placeholder: 'Pesquisar contribuintes...',
                                required: false,
                                className: 'pl-10 pr-16 h-10 w-full'
                              },
                              data: {
                                value: {
                                  state: {
                                    id: '',
                                    name: 'filterValue',
                                    type: 'string',
                                    defaultValue: ''
                                  },
                                },
                              },
                              interactions: {
                                onChange: {
                                  fnCustomSet: '(e) => setFilterValue(e.target.value)',
                                  type: 'function'
                                }
                              }
                            },
                            {
                              id: 'filter_table_button',
                              tag: 'filter_table_button',
                              componentName: 'button',
                              properties: {
                                label: 'Filtros',
                                size: 'sm',
                                variant: 'ghost',
                                iconProperties: {
                                  iconName: 'SliderHorizontal',
                                },
                              },
                              children: [
                                {
                                  id: 'filter_btn_fragment',
                                  tag: 'filter_btn_fragment',
                                  componentName: 'fragment',
                                  content: `
                                  {hasActiveFilters && (
                    <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                      {(statusFilter !== "all" ? 1 : 0) + (sectorFilter !== "all" ? 1 : 0)}
                    </span>
                  )}
                                  `
                                }
                              ],
                              interactions: {
                                onClick: {
                                  fnCustomCode: {
                                    states: [
                                      {
                                        id: 'filter_table_btn_state',
                                        name: 'showFilters',
                                        type: 'boolean',
                                        defaultValue: 'false'
                                      }
                                    ],
                                  },
                                  fnCustomSet: '() => setShowFilters(!showFilters)',
                                  type: 'function'
                                }
                              },
                            },
                          ],
                        },
                        {
                          id: 'actions_table_row',
                          tag: 'actions_table_row',
                          componentName: 'flex',
                          properties: {
                            variant: 'items-center',
                            className: 'gap-2',
                          },
                          children: [
                            {
                              id: 'button_download',
                              tag: 'button_download',
                              componentName: 'button',
                              properties: {
                                label: 'Exportar contribuintes',
                                size: 'icon',
                                variant: 'outline',
                                className: 'h-10 w-10',
                                iconProperties: {
                                  iconName: 'Download',
                                },
                              },
                              interactions: {
                                onClick: {
                                  fnName: 'handleDownloadClick',
                                  type: 'function',
                                },
                              },
                            },
                            {
                              id: 'button_import',
                              tag: 'button_import',
                              componentName: 'button',
                              properties: {
                                label: 'Importar contribuintes',
                                size: 'icon',
                                variant: 'outline',
                                className: 'h-10 w-10',
                                iconProperties: {
                                  iconName: 'Upload',
                                },
                              },
                              interactions: {
                                onClick: {
                                  fnName: 'handleImportClick',
                                  type: 'function',
                                },
                              },
                            },
                            {
                              id: 'button_refresh',
                              tag: 'button_refresh',
                              componentName: 'button',
                              properties: {
                                label: 'Atualizar lista',
                                size: 'icon',
                                variant: 'outline',
                                className: 'h-10 w-10',
                                iconProperties: {
                                  iconName: 'RefreshCw',
                                },
                              },
                              interactions: {
                                onClick: {
                                  fnName: 'handleRefreshClick',
                                  type: 'function',
                                },
                              },
                            },
                          ]
                        },
                        {
                          id: 'filter_expanded_btn_fragment',
                          tag: 'filter_expanded_btn_fragment',
                          componentName: 'fragment',
                          content: `
              {showFilters && (
              <div className="mt-3 pt-3 border-t">
                <div className="flex flex-wrap items-end gap-4">
                  <div className="space-y-1 min-w-[160px]">
                    <IGRPSelect 
                      name="status_flt"
                      label="Status"
                      value={statusFilter} 
                      onValueChange={setStatusFilter}
                      placeholder="Status"
                      options={selectStatus_fltOptions}
                    >
                    </IGRPSelect>
                  </div>

                  <div className="space-y-1 min-w-[160px]">
                    <IGRPSelect 
                      name="sector_flt"
                      label="Setor"
                      value={sectorFilter} 
                      onValueChange={setSectorFilter}
                      placeholder="Setor"
                      options={selectSector_fltOptions}
                    >
                    </IGRPSelect>
                  </div>

                  <div className="space-y-1 min-w-[160px]">
                    <IGRPSelect 
                      name="status_flt"
                      label="Região"
                      disabled
                      value={regiaoFilter} 
                      onValueChange={setRegiaoFilter}
                      placeholder="Todas Regiões"
                      options={selectRegiao_fltOptions}
                    >
                    </IGRPSelect>
                  </div>

                 
                  <div className="ml-auto">
                    <IGRPButton
                      variant="outline"
                      size="sm"
                      className="h-9"
                      label="Limpar Filtros"
                      iconName="X"
                      iconClassName="mr-2 h-4 w-4"
                      onClick={resetFilters}
                      disabled={!hasActiveFilters}
                    >
                    </IGRPButton>
                  </div>
                </div>
              </div>
            )}
                                  `
                        },
                        {
                          id: 'filter_actives_btn_fragment',
                          tag: 'filter_actives_btn_fragment',
                          componentName: 'fragment',
                          content: `
              {hasActiveFilters && !showFilters && (
              <div className="mt-3 pt-3 border-t flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted-foreground">Filtros ativos:</span>

                {statusFilter !== "all" && (
                  <IGRPBadge variant="secondary" className="px-2 py-1 h-6">
                    Status: {statusFilter === "active" ? "Ativos" : "Inativos"}
                    <IGRPButton iconName="X" iconClassName="h-3 w-3" className="ml-1 hover:text-destructive" onClick={() => setStatusFilter("all")}>
                    </IGRPButton>
                  </IGRPBadge>
                )}

                {sectorFilter !== "all" && (
                  <IGRPBadge variant="secondary" className="px-2 py-1 h-6">
                    Setor: {sectorFilter === "public" ? "Público" : "Privado"}
                    <IGRPButton iconName="X" iconClassName="h-3 w-3" className="ml-1 hover:text-destructive" onClick={() => setStatusFilter("all")}>
                    </IGRPButton>
                  </IGRPBadge>
                )}

                <IGRPButton
                  label="Limpar Todos"
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
                  onClick={resetFilters}
                >
                </IGRPButton>
              </div>
            )}
                                  `
                        },
                        {
                          id: 'table_select_rows_fragment',
                          tag: 'table_select_rows_fragment',
                          componentName: 'fragment',
                          content: `
              {selectedRows.length > 0 && (
              <div className="mt-3 pt-3 border-t flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm font-medium">{selectedRows.length} item(s) selecionado(s)</div>
                <div className="flex flex-wrap items-center gap-2">
                  <IGRPButton label="Suspender" iconName="AlertCircle" iconClassName="mr-2 h-3.5 w-3.5 text-amber-500" variant="outline" size="sm" className="h-8">
                  </IGRPButton>
                  <IGRPButton
                    label="Excluir"
                    iconName="Trash"
                    iconClassName="mr-2 h-3.5 w-3.5"
                    variant="outline"
                    size="sm"
                    className="h-8 text-destructive border-destructive hover:bg-destructive/10"
                  >
                  </IGRPButton>
                </div>
              </div>
            )}
                                  `
                        }
                      ],
                    },
                    tableLayout
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const pageConfig: PageConfig = {
  id: 'gb6Typ9lm2m1',
  types: [
    {
      componentId: "",
      "name": "TaxPayer",
      "fields": [
        {
          "componentId": "",
          "name": "nif",
          "type": "number",
          "required": true
        },
        {
          "componentId": "",
          "name": "nome",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "setor",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "status",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "email",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "telefone",
          "type": "string",
          "required": true
        }
      ],
      "path": "C:\\nextjs-engine\\taxPayerManagement\\src\\app\\(myapp)\\data\\types.ts"
    }
  ],
  functions: [
    {
      id: 'new_button_fn',
      name: 'handleNovoClick',
      arguments: [],
      imports: [
        {
          id: 'router_new_button',
          namespace: 'import {router} from "next/client";'
        }
      ],
      code: 'router.push("/contribuintes/novo-form")',
      returnValue: {
        type: 'void',
        isNullable: false
      }
    },
    {
      "id": 'mock_tax_payer_list_fn',
      "name": "mockTaxPayerList",
      "code": '',
      "arguments": [],
      "path": "C:\\nextjs-engine\\taxPayerManagement\\src\\app\\(myapp)\\data\\mockData.ts",
      "returnValue": {
        type: "TaxPayer",
        isList: true,
        isNullable: false
      }
    }
  ],
  type: 'page',
  pageName: 'contribuintes',
  path: 'contribuintes',
  components: taxPayerLayout,
};

beforeAll(async () => {
  await initComponents();
  /*registerComponents({
    components: [
      {
        name: "todolist",
        imports: [`import Todolist from "@/components/todolist/todolist"`],
        group: "custom",
        label: "Todolist",
        customComponentTag: "Todolist",
        customClassName: "",
        states: [],
        renderer: 'custom',
        defaultValue: false,
        variants: {},
        properties: {},
        propertiesMapping: {},
        childrenTypes: [],
        acceptedChildren: []
      },
      {
        name: "addTodo",
        customClassName: "",
        imports: [`import AddTodo from "@/components/addtodo/addtodo"`],
        group: "custom",
        label: "Add Todo",
        customComponentTag: "AddTodo",
        states: [],
        renderer: 'custom',
        defaultValue: false,
        variants: {},
        properties: {},
        propertiesMapping: {},
        childrenTypes: [],
        acceptedChildren: []
      }
    ]
  })*/
});

describe('Tax Payer Page module',() =>{
  it('should save the tax payer page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
