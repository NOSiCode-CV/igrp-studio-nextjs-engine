import { initComponents, newPage, registerComponents } from '../../src';
import { Layout, PageConfig } from '../../src/interfaces/types';
import { OUTPUT_TAXPAYER_TEST } from '../../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TAXPAYER_TEST;

const tableLayout: Layout = {
  id: 'table_taxpayers',
  tag: 'table_taxpayers',
  componentName: 'table',
  dataType: 'TaxPayer',
  properties: {
    showFilter: false,
    showPagination: true,
    showToggleColumn: false
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
          id: 'numero',
          tag: 'numero',
          componentName: 'tableTextCell',
          properties: {
            headerTitle: "Número",
            headerType: "sortToggle",
          },
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
          id: 'regime',
          tag: 'regime',
          componentName: 'tableBadgeCell',
          properties: {
            headerTitle: 'Regime',
            variant: 'outline',
            headerType: 'sortToggle'
          },
          data: {
            value: {
              id: 'row_regime_value',
              code: `getRegimeLabel(row.getValue("regime"))`
            }
          }
        },
        {
          id: 'legal_status',
          tag: 'estatuto',
          componentName: 'tableBadgeCell',
          properties: {
            headerTitle: 'Estatuto Jurídico',
            variant: 'outline',
            headerType: 'sortToggle'
          },
          data: {
            value: {
              id: 'row_legal_status_value',
              code: `getLegalStatusLabel(row.getValue("estatuto"))`
            }
          }
        },
        {
          id: 'activity_date',
          tag: 'dataInicio',
          componentName: 'tableDateCell',
          properties: {
            headerTitle: "Data de Início de Actividade",
            headerType: "sortToggle",
          }
        },
        {
          id: 'status',
          tag: 'estado',
          componentName: 'tableBadgeCell',
          properties: {
            headerTitle: 'Estado',
            // TODO: check dynamic variants
            variant: 'secondary',
            headerType: 'sortToggle'
          },
          data: {
            value: {
              id: 'row_status_value',
              code: `getStatusLabel(row.getValue("estado"))`
            }
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
                      className: ''
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
                      iconName: 'CircleAlert',
                      iconClassName: 'text-amber-500',
                    },
                    showIcon: true,
                    labelTrigger: 'Suspender',
                    type: "alert"
                  }
                },
                {
                  id: 'delete',
                  tag: 'cessar',
                  componentName: 'tableAlertDropdownItem',
                  properties: {
                    iconProperties: {
                      iconName: 'Trash',
                      iconClassName: 'text-red-500',
                    },
                    showIcon: true,
                    labelTrigger: 'Cessar',
                    type: "alert"
                  }
                },
                {
                  id: 'advantages',
                  tag: 'beneficios',
                  componentName: 'tableLinkDropdownItem',
                  properties: {
                    iconProperties: {
                      iconName: 'LifeBuoy',
                      iconClassName: 'text-purple-500',
                    },
                    showIcon: true,
                    labelTrigger: 'Benefícios',
                    href: "https://nosi.cv/",
                    type: "link"
                  }
                },
                {
                  id: 'doc',
                  tag: 'declaracao',
                  componentName: 'tableLinkDropdownItem',
                  properties: {
                    iconProperties: {
                      iconName: 'FileText',
                    },
                    showIcon: true,
                    labelTrigger: 'Declaração',
                    href: "https://igrp.cv/",
                    type: "link"
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
          id: 'legal_status_flt',
          tag: 'legal_status_flt',
          componentName: 'tableDropdownFilter',
          properties: {
            columnId: 'estatuto',
            placeholder: 'Todos Estatutos',
            options: [
              { value: 'EMPRESA', label: 'Empresa' },
              { value: 'INDIVIDUAL', label: 'Individual' },
              { value: 'INSTITUICAO', label: 'Instituição' }
            ],
          }
        },
        {
          id: 'regime_flt',
          tag: 'regime_flt',
          componentName: 'tableDropdownFilter',
          properties: {
            columnId: 'regime',
            placeholder: 'Todos Regimes',
            options: [
              { value: 'REGIME_GERAL', label: 'Regime Geral' },
              { value: 'CONTA_PROPRIA', label: 'Conta Própria' }
            ],
          }
        },
        {
          id: 'status_flt',
          tag: 'status_flt',
          componentName: 'tableDropdownFilter',
          properties: {
            columnId: 'estado',
            placeholder: 'Todos Status',
            options: [
              { value: 'ATIVO', label: 'Ativos' },
              { value: 'INATIVO', label: 'Inativos' }
            ],
          }
        },
        {
          id: 'registration_date',
          tag: 'data_inicio_flt',
          componentName: 'tableDateFilter',
          properties: {
            columnId: 'dataInicio'
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
        type: 'TaxPayer[]',
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
        
const totalContribuintes = contentTabletable_taxpayers.length
const ativosCount = contentTabletable_taxpayers.filter((c) => c.estado === "ATIVO").length
const regimeCount = contentTabletable_taxpayers.filter((c) => c.regime === "REGIME_GERAL").length
const privadoCount = contentTabletable_taxpayers.filter((c) => c.regime === "CONTA_PROPRIA").length

useEffect(() => {
  updateTabletable_taxpayers()
  loadLegalStatusFltCombobox()
  loadRegimeFltCombobox()
  loadStatusFltCombobox()
},[statusFilter, legalStatusFilter, regimeFilter, dateFilter, filterValue])

const updateTabletable_taxpayers = async () => {
 
  let data: TaxPayer[] = await getTaxPayers();
  
  setHasActiveFilters(false)
  
  if(filterValue) {
    data = data.filter((it) =>
      removeAccents(it.nome).toLowerCase().includes(removeAccents(filterValue).toLowerCase())
    );

    setHasActiveFilters(true)
  }
  
  if(statusFilter) {
    data = data.filter((it) => it.estado === statusFilter);
    setHasActiveFilters(true)
  }
  
  if(legalStatusFilter) {
    data = data.filter((it) => it.estatuto === legalStatusFilter);
    setHasActiveFilters(true)
  }
  
  if(regimeFilter) {
    data = data.filter((it) => it.regime === regimeFilter);
    setHasActiveFilters(true)
  }
 
  if(dateFilter) {
    data = data.filter((it) => it.dataInicio === dateFilter.toISOString().split("T")[0]);
    setHasActiveFilters(true)
  }
  
  setContentTabletable_taxpayers(data)
  
}
             
const loadStatusFltCombobox = async () => {
 
  setSelectStatus_fltOptions(await getStatusOptions())
  
}

const loadLegalStatusFltCombobox = async () => {
 
  setSelectLegalStatus_fltOptions(await getLegalStatusOptions())
  
}

const loadRegimeFltCombobox = async () => {
 
  setSelectRegime_fltOptions(await getRegimeOptions())
  
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
                      showIcon: true,
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
                      showIcon: true,
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
            variant: 'cols4',
            className: 'sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 px-6 w-full',
          },
          children: [
            {
              id: 'total_stat_box',
              tag: 'total_stat_box',
              componentName: 'card',
              properties: {
                className: 'overflow-hidden p-0',
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
                              content: 'Total Geral',
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
                className: 'overflow-hidden p-0',
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
                              content: 'Total Ativos',
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
            /*{
              id: 'inativos_stat_box',
              tag: 'inativos_stat_box',
              componentName: 'card',
              properties: {
                className: 'overflow-hidden p-0',
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
            },*/
            {
              id: 'regime_stat_box',
              tag: 'regime_stat_box',
              componentName: 'card',
              properties: {
                className: 'overflow-hidden p-0',
              },
              children: [
                // TODO: <div className="h-1 bg-blue-500 w-full" />
                {
                  id: 'regime_stat_box_colored_line',
                  tag: 'regime_stat_box_colored_line',
                  componentName: 'section',
                  properties: {
                    className: 'h-1 bg-purple-500 w-full',
                  },
                },
                {
                  id: 'regime_stat_box_content',
                  tag: 'regime_stat_box_content',
                  componentName: 'cardContent',
                  properties: {
                    className: 'p-3',
                  },
                  children: [
                    {
                      id: 'regime_stat_box_content_row',
                      tag: 'regime_stat_box_content_row',
                      componentName: 'flex',
                      properties: {
                        variant: 'justify-between',
                        className: 'items-center',
                      },
                      children: [
                        // TODO: handle this with div instead of section
                        {
                          id: 'regime_stat_box_texts',
                          tag: 'regime_stat_box_texts',
                          componentName: 'section',
                          properties: {},
                          children: [
                            {
                              id: 'regime_stat_box_total_p',
                              tag: 'regime_stat_box_total_p',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-xs text-muted-foreground font-medium',
                              },
                              content: 'Total Regime Geral',
                            },
                            {
                              id: 'regime_stat_box_total_v',
                              tag: 'regime_stat_box_total_v',
                              componentName: 'paragraph',
                              properties: {
                                className: 'text-2xl font-bold',
                              },
                              content: '{regimeCount}',
                            },
                          ],
                        },
                        {
                          id: 'regime_stat_box_icon',
                          tag: 'regime_stat_box_icon',
                          componentName: 'section',
                          properties: {
                            className:
                              'h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center',
                          },
                          children: [
                            {
                              id: 'regime_briefcase_icon',
                              tag: 'regime_briefcase_icon',
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
                className: 'overflow-hidden p-0',
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
                              content: 'Total Conta Própria',
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
                        className: 'items-center gap-3  px-4',
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
                              id: 'search_input_text',
                              tag: 'search_input_text',
                              componentName: 'inputSearch',
                              properties: {
                                //submitButtonLabel: 'Filtros',
                                showSubmitButton: false,
                                iconProperties: {
                                  showStartIcon: true,
                                  //submitIcon: "SlidersHorizontal",
                                },
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
                                    defaultValue: ' '
                                  },
                                },
                              },
                              interactions: {
                                setValueChange: {
                                  fnCustomSet: '(value) => setFilterValue(value)',
                                  type: 'function'
                                },
                              }
                            },
                          ],
                        },
                        {
                          id: 'filter_table_button',
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
                              id: 'filter_btn_fragment',
                              tag: 'filter_btn_fragment',
                              componentName: 'fragment',
                              content: `
                              Filtros
                                  {hasActiveFilters && (
                    <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                      {(statusFilter !== "" ? 1 : 0) + (regimeFilter !== "" ? 1 : 0) + (dateFilter !== undefined ? 1 : 0) + (legalStatusFilter !== "" ? 1 : 0)}
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
                      ],
                    },
                    {
                      id: 'filter_expanded_btn_fragment',
                      tag: 'filter_expanded_btn_fragment',
                      componentName: 'fragment',
                      content: `
              {showFilters && (
              <div className="mt-3 pt-3 border-t  px-4">
                <div className="flex flex-wrap items-end gap-4">
                  <div className="space-y-1 min-w-[160px]">
                    <IGRPSelect 
                      name="legal_status_flt"
                      label="Estatuto Jurídico"
                      value={legalStatusFilter} 
                      onValueChange={setLegalStatusFilter}
                      placeholder="Todos Estatutos"
                      options={selectLegalStatus_fltOptions}
                    >
                    </IGRPSelect>
                  </div>
                  <div className="space-y-1 min-w-[160px]">
                    <IGRPSelect 
                      name="regime_flt"
                      label="Regime"
                      value={regimeFilter} 
                      onValueChange={setRegimeFilter}
                      placeholder="Todos Regimes"
                      options={selectRegime_fltOptions}
                    >
                    </IGRPSelect>
                  </div>
                  
                  <div className="space-y-1 min-w-[160px]">
                    <IGRPSelect 
                      name="status_flt"
                      label="Estado do Contribuinte"
                      value={statusFilter} 
                      onValueChange={setStatusFilter}
                      placeholder="Todos Estados"
                      options={selectStatus_fltOptions}
                    >
                    </IGRPSelect>
                  </div>

                  <div className="space-y-1 min-w-[160px]">
                    <IGRPDatePicker 
                      name="date_flt"
                      label="Período de Inscrição"
                      startDate={new Date('1900-01-01')}
                      endDate={new Date('2099-12-31')}
                      className=""
                      onDateChange={(e) => setDateFilter(e)}
                      date={dateFilter}
                    >
                    </IGRPDatePicker>
                  </div>
                  
                  <div className="ml-auto">
                    <IGRPButton
                      variant="outline"
                      size="sm"
                      showIcon={ true }
                      className="h-9"
                      iconName="X"
                      iconClassName="mr-2 h-4 w-4"
                      onClick={() => {
                        setResetFilters(true);
                        setStatusFilter("");
                        setLegalStatusFilter("");
                        setRegimeFilter("");
                        setDateFilter(undefined);
                        setFilterValue("");
                      }}
                      disabled={!hasActiveFilters}
                    >
                    Limpar Filtros
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
              <div className="mt-3 pt-3 border-t flex flex-wrap items-center gap-2 px-4">
                <span className="text-xs text-muted-foreground">Filtros ativos:</span>

                {legalStatusFilter !== "" && (
                  <IGRPBadge variant="soft" className="px-2 py-1 h-6">
                    Estatuto Jurídico: {legalStatusFilter === "EMPRESA" ? "Empresa" : legalStatusFilter === "INDIVIDUAL" ? "Individual" : "Instituição"}
                    <IGRPButton variant="ghost" size="icon" showIcon={true} iconName="X" iconClassName="h-3 w-3" className="ml-1 hover:text-destructive" onClick={() => setLegalStatusFilter("")}>
                    </IGRPButton>
                  </IGRPBadge>
                )}

                {regimeFilter !== "" && (
                  <IGRPBadge variant="soft" className="px-2 py-1 h-6">
                    Regime: {regimeFilter === "REGIME_GERAL" ? "Regime Geral" : "Conta Própria"}
                    <IGRPButton variant="ghost" size="icon" showIcon={true} iconName="X" iconClassName="h-3 w-3" className="ml-1 hover:text-destructive" onClick={() => setRegimeFilter("")}>
                    </IGRPButton>
                  </IGRPBadge>
                )}

                {statusFilter !== "" && (
                  <IGRPBadge variant="soft" className="px-2 py-1 h-6">
                    Estado do Contribuinte: {statusFilter === "ATIVO" ? "Ativo" : statusFilter === "CESSADO" ? "Cessado" : "Suspenso"}
                    <IGRPButton variant="ghost" size="icon" showIcon={true} iconName="X" iconClassName="h-3 w-3" className="ml-1 hover:text-destructive" onClick={() => setStatusFilter("")}>
                    </IGRPButton>
                  </IGRPBadge>
                )}

                {dateFilter !== undefined && (
                  <IGRPBadge variant="soft" className="px-2 py-1 h-6">
                    Período de Inscrição: {dateFilter}
                    <IGRPButton variant="ghost" size="icon" showIcon={true} iconName="X" iconClassName="h-3 w-3" className="ml-1 hover:text-destructive" onClick={() => setDateFilter(undefined)}>
                    </IGRPButton>
                  </IGRPBadge>
                )}

                <IGRPButton
                  label="Limpar Todos"
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
                  onClick={() => setResetFilters(true)}
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
                  <IGRPButton label="Suspender" iconName="CircleAlert" iconClassName="mr-2 h-3.5 w-3.5 text-amber-500" variant="outline" size="sm" className="h-8">
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
  imports: [
    { id: 'igrp_select', namespace: 'import { IGRPSelect } from "@igrp/igrp-framework-react-design-system";' },
    { id: 'igrp_badge', namespace: 'import { IGRPBadge } from "@igrp/igrp-framework-react-design-system";' },
    { id: 'igrp_datepicker', namespace: 'import { IGRPDatePicker } from "@igrp/igrp-framework-react-design-system";' },
  ],
  states: [
    {
      id: 'legal_status_filter_st',
      name: 'legalStatusFilter',
      type: 'string',
      defaultValue: ''
    },
    {
      id: 'status_filter_st',
      name: 'statusFilter',
      type: 'string',
      defaultValue: ''
    },
    {
      id: 'regime_filter_st',
      name: 'regimeFilter',
      type: 'string',
      defaultValue: ''
    },
    {
      id: 'date_filter_st',
      name: 'dateFilter',
      type: 'Date | undefined',
      defaultValue: 'undefined'
    },
    {
      id: 'reset_filters_st',
      name: 'resetFilters',
      type: 'boolean',
      defaultValue: 'false'
    },
    {
      id: 'active_filters_st',
      name: 'hasActiveFilters',
      type: 'boolean',
      defaultValue: 'false'
    },
    {
      id: 'slt_legal_status_filter_st',
      name: 'selectLegalStatus_fltOptions',
      type: 'SelectOptions[]',
      defaultValue: '[]'
    },
    {
      id: 'slt_status_filter_st',
      name: 'selectStatus_fltOptions',
      type: 'SelectOptions[]',
      defaultValue: '[]'
    },
    {
      id: 'slt_regime_filter_st',
      name: 'selectRegime_fltOptions',
      type: 'SelectOptions[]',
      defaultValue: '[]'
    },
    {
      id: 'slt_rows_filter_st',
      name: 'selectedRows',
      type: 'number[]',
      defaultValue: '[]'
    },
  ],
  types: [
    {
      "componentId": "",
      "name": "TaxPayer",
      "fields": [
        {
          "componentId": "",
          "name": "id",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "numero",
          "type": "string",
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
          "name": "regime",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "estatuto",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "estado",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "dataInicio",
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
        },
        {
          "componentId": "",
          "name": "endereco",
          "type": "string",
          "required": true
        }
      ],
      "path": "@/app/(myapp)/data/types"
    },
    {
      "componentId": "",
      "name": "SelectOptions",
      "fields": [
        {
          "componentId": "",
          "name": "value",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "label",
          "type": "string",
          "required": true
        }
      ],
      "path": "@/app/(myapp)/data/types"
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
          namespace: 'import {router} from "next/client";',
        },
      ],
      code: 'router.push("/contribuintes/novo-form")',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'legal_status_label_fn',
      name: 'getLegalStatusLabel',
      arguments: [
        {
          id: 'arg_value1',
          name: 'value',
          type: 'string',
          isNullable: true
        }
      ],
      imports: [
      ],
      code: `
      if(!value) return 'N/A'
      return selectLegalStatus_fltOptions.find((it) => it.value === value)?.label ?? 'N/E'
      `,
      returnValue: {
        type: 'string',
        isNullable: false,
      },
    },
    {
      id: 'regime_label_fn',
      name: 'getRegimeLabel',
      arguments: [
        {
          id: 'arg_value1',
          name: 'value',
          type: 'string',
          isNullable: true
        }
      ],
      imports: [
      ],
      code: `
      if(!value) return 'N/A'
      return selectRegime_fltOptions.find((it) => it.value === value)?.label ?? 'N/E'
      `,
      returnValue: {
        type: 'string',
        isNullable: false,
      },
    },
    {
      id: 'status_label_fn',
      name: 'getStatusLabel',
      arguments: [
        {
          id: 'arg_value1',
          name: 'value',
          type: 'string',
          isNullable: true
        }
      ],
      imports: [
      ],
      code: `
      if(!value) return 'N/A'
      return selectStatus_fltOptions.find((it) => it.value === value)?.label ?? 'N/E'
      `,
      returnValue: {
        type: 'string',
        isNullable: false,
      },
    },

    {
      id: 'remove_accents_util_fn',
      name: 'removeAccents',
      code: '',
      arguments: [
        {
          id: 'arg1',
          name: 'str',
          type: 'string',
          isNullable: false
        }
      ],
      path: "@/app/(myapp)/utils/utils",
      returnValue: {
        type: 'string',
        isList: false,
        isNullable: false,
      },
    },
    {
      id: 'download_button_fn',
      name: 'handleDownloadClick',
      arguments: [],
      imports: [
      ],
      code: `console.log("Handling Download")`,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'import_button_fn',
      name: 'handleImportClick',
      arguments: [],
      imports: [
      ],
      code: `console.log("Handling Import")`,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'refresh_button_fn',
      name: 'handleRefreshClick',
      arguments: [],
      imports: [
      ],
      code: `updateTabletable_taxpayers();`,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
  ],
  actions: [
    {
      id: 'mock_tax_payer_list_act',
      name: 'getTaxPayers',
      code: '',
      arguments: [],
      path: "@/app/(myapp)/actions/mock-actions",
      returnValue: {
        type: 'TaxPayer',
        isList: true,
        isNullable: false,
      },
    },
    {
      id: 'mock_status_combobox_act',
      name: 'getStatusOptions',
      code: '',
      arguments: [],
      path: "@/app/(myapp)/actions/mock-actions",
      returnValue: {
        type: 'SelectOptions',
        isList: true,
        isNullable: false,
      },
    },
    {
      id: 'mock_legal_status_combobox_act',
      name: 'getLegalStatusOptions',
      code: '',
      arguments: [],
      path: "@/app/(myapp)/actions/mock-actions",
      returnValue: {
        type: 'SelectOptions',
        isList: true,
        isNullable: false,
      },
    },
    {
      id: 'mock_regime_combobox_act',
      name: 'getRegimeOptions',
      code: '',
      arguments: [],
      path: "@/app/(myapp)/actions/mock-actions",
      returnValue: {
        type: 'SelectOptions',
        isList: true,
        isNullable: false,
      },
    },
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
