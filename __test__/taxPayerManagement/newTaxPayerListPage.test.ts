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
          interactions: {
            customize: {
              type: 'function',
              function: {
                fnName: 'getRegimeLabel'
              }
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
          interactions: {
            customize: {
              type: 'function',
              function: {
                fnName: 'getLegalStatusLabel'
              }
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
            variant: 'soft',
            headerType: 'sortToggle'
          },
          interactions: {
            customize: {
              type: 'function',
              function: {
                fnName: 'getStatusBadge'
              }
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
        /*{
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
        },*/
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
      function: {
        fnCustomCode: {
          fnCode: `

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
    data = data.filter((it) => {
      const itemDate = new Date(it.dataInicio);
    
      if (!dateFilter.from && !dateFilter.to) {
        return true; // no filtering
      }
    
      const fromDate = dateFilter.from ?? new Date(0); // if null, use epoch
      const toDate = dateFilter.to ?? new Date(); // if null, use today

      return itemDate >= fromDate && itemDate <= toDate;
    });

    setHasActiveFilters(true)
  }
  
  setContentTabletable_taxpayers(data)
  
  setTotalContribuintes(data.length)
  setAtivosCount(data.filter((c) => c.estado === "ATIVO").length)
  setRegimeCount(data.filter((c) => c.regime === "REGIME_GERAL").length)
  setPrivadoCount(data.filter((c) => c.regime === "CONTA_PROPRIA").length)
  
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
                      function: {
                        fnName: 'handleNovoClick',
                      },
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
                      function: {
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
                      },
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
                      function: {
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
                      },
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
              componentName: 'statsCard',
              properties: {
                title: 'Total Geral',
                iconProperties: {
                  iconName: 'Building',
                  showIcon: true
                },
                border: true,
                borderPosition: 'top',
                variant: 'primary'
              },
              data: {
                value: {
                  state: {
                    id: 'total_statbox_value_st',
                    name: 'totalContribuintes',
                    type: 'number',
                    defaultValue: '0'
                  }
                }
              }
            },
            {
              id: 'ativos_stat_box',
              tag: 'ativos_stat_box',
              componentName: 'statsCard',
              properties: {
                title: 'Total Ativos',
                iconProperties: {
                  iconName: 'CircleCheck',
                  showIcon: true
                },
                border: true,
                borderPosition: 'top',
                variant: 'success'
              },
              data: {
                value: {
                  state: {
                    id: 'ativos_statbox_value_st',
                    name: 'ativosCount',
                    type: 'number',
                    defaultValue: '0'
                  }
                }
              }
            },
            {
              id: 'regime_stat_box',
              tag: 'regime_stat_box',
              componentName: 'statsCard',
              properties: {
                title: 'Total Regime Geral',
                iconProperties: {
                  iconName: 'Briefcase',
                  showIcon: true
                },
                border: true,
                borderPosition: 'top',
                variant: 'secondary'
              },
              data: {
                value: {
                  state: {
                    id: 'regime_statbox_value_st',
                    name: 'regimeCount',
                    type: 'number',
                    defaultValue: '0'
                  }
                }
              }
            },
            {
              id: 'privado_stat_box',
              tag: 'privado_stat_box',
              componentName: 'statsCard',
              properties: {
                title: 'Total Conta Própria',
                iconProperties: {
                  iconName: 'Users',
                  showIcon: true
                },
                border: true,
                borderPosition: 'top',
                variant: 'indigo'
              },
              data: {
                value: {
                  state: {
                    id: 'privado_statbox_value_st',
                    name: 'privadoCount',
                    type: 'number',
                    defaultValue: '0'
                  }
                }
              }
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
                                  function: {
                                    fnCustomSet: '(value) => setFilterValue(value)',
                                  },
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
                              function: {
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
                              },
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
                                  function: {
                                    fnName: 'handleDownloadClick',
                                  },
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
                                  function: {
                                    fnName: 'handleImportClick',
                                  },
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
                                  function: {
                                    fnName: 'handleRefreshClick',
                                  },
                                  type: 'function',
                                },
                              },
                            },
                          ]
                        },
                      ],
                    },
                    {
                      id: 'filter_container',
                      tag: 'filter_container',
                      componentName: 'container',
                      properties: {
                        className: 'mt-3 pt-3 border-t px-4'
                      },
                      children: [
                        {
                          id: 'filter_container_flex',
                          tag: 'filter_container_flex',
                          componentName: 'flex',
                          properties: {
                            className: 'items-end gap-4',
                            variant: 'wrap'
                          },
                          children: [
                            {
                              id: 'filter_inputs_container_legal_status',
                              tag: 'filter_inputs_container_legal_status',
                              componentName: 'container',
                              properties: {
                                className: 'space-y-1 min-w-[160px]'
                              },
                              children: [
                                {
                                  id: 'legal_status_flt',
                                  tag: 'legal_status_flt',
                                  componentName: 'select',
                                  properties: {
                                    label: 'Estatuto Jurídico',
                                    placeholder: 'Todos Estatutos'
                                  },
                                  data: {
                                    options: {
                                      state: {
                                        id: 'legal_status_flt_opt_st',
                                        name: 'selectLegalStatus_fltOptions',
                                        type: 'IGRPOptionsProps[]',
                                        defaultValue: '[]'
                                      }
                                    },
                                    value: {
                                      state: {
                                        id: 'legal_status_flt_val_st',
                                        name: 'legalStatusFilter',
                                        type: 'string',
                                        defaultValue: ''
                                      }
                                    },
                                  },
                                  interactions: {
                                    onValueChange: {
                                      type: 'function',
                                      function: {
                                        fnName: 'setLegalStatusFilter'
                                      }
                                    }
                                  },
                                },
                              ],
                            },
                            {
                              id: 'filter_inputs_container_regime',
                              tag: 'filter_inputs_container_regime',
                              componentName: 'container',
                              properties: {
                                className: 'space-y-1 min-w-[160px]'
                              },
                              children: [
                                {
                                  id: 'regime_flt',
                                  tag: 'regime_flt',
                                  componentName: 'select',
                                  properties: {
                                    label: 'Regime',
                                    placeholder: 'Todos Regimes'
                                  },
                                  data: {
                                    options: {
                                      state: {
                                        id: 'regime_flt_opt_st',
                                        name: 'selectRegime_fltOptions',
                                        type: 'IGRPOptionsProps[]',
                                        defaultValue: '[]'
                                      }
                                    },
                                    value: {
                                      state: {
                                        id: 'regime_flt_val_st',
                                        name: 'regimeFilter',
                                        type: 'string',
                                        defaultValue: ''
                                      }
                                    },
                                  },
                                  interactions: {
                                    onValueChange: {
                                      type: 'function',
                                      function: {
                                        fnName: 'setRegimeFilter'
                                      }
                                    }
                                  },
                                },
                              ],
                            },
                            {
                              id: 'filter_inputs_container_status',
                              tag: 'filter_inputs_container_status',
                              componentName: 'container',
                              properties: {
                                className: 'space-y-1 min-w-[160px]'
                              },
                              children: [
                                {
                                  id: 'status_flt',
                                  tag: 'status_flt',
                                  componentName: 'select',
                                  properties: {
                                    label: 'Estado do Contribuinte',
                                    placeholder: 'Todos Estados'
                                  },
                                  data: {
                                    options: {
                                      state: {
                                        id: 'estado_flt_opt_st',
                                        name: 'selectStatus_fltOptions',
                                        type: 'IGRPOptionsProps[]',
                                        defaultValue: '[]'
                                      }
                                    },
                                    value: {
                                      state: {
                                        id: 'status_flt_val_st',
                                        name: 'statusFilter',
                                        type: 'string',
                                        defaultValue: ''
                                      }
                                    },
                                  },
                                  interactions: {
                                    onValueChange: {
                                      type: 'function',
                                      function: {
                                        fnName: 'setStatusFilter'
                                      }
                                    }
                                  },
                                },
                              ],
                            },
                            {
                              id: 'filter_inputs_container_date',
                              tag: 'filter_inputs_container_date',
                              componentName: 'container',
                              properties: {
                                className: 'space-y-1 min-w-[160px]'
                              },
                              children: [
                                {
                                  id: 'date_flt',
                                  tag: 'date_flt',
                                  componentName: 'datePickerRange',
                                  properties: {
                                    label: 'Período de Inscrição',
                                    placeholder: 'Escolha uma data',
                                    startDate: '2017-01-01',
                                    endDate: '2025-12-31'
                                  },
                                  data: {
                                    date: {
                                      state: {
                                        id: 'date_flt_val_st',
                                        name: 'dateFilter',
                                        type: 'DateRange | undefined',
                                        defaultValue: 'undefined'
                                      }
                                    },
                                  },
                                  interactions: {
                                    onDateChange: {
                                      type: 'function',
                                      function: {
                                        fnName: 'setDateFilter'
                                      }
                                    }
                                  },
                                },
                              ],
                            },
                            {
                              id: 'filter_button_container_clean',
                              tag: 'filter_button_container_clean',
                              componentName: 'container',
                              properties: {
                                className: 'ml-auto'
                              },
                              children: [
                                {
                                  id: 'button_clear_filter',
                                  tag: 'button_clear_filter',
                                  componentName: 'button',
                                  properties: {
                                    label: 'Limpar Filtros',
                                    size: 'sm',
                                    variant: 'outline',
                                    className: 'h-9',
                                    disabled: '!hasActiveFilters',
                                    iconProperties: {
                                      iconName: 'X',
                                      showIcon: true
                                    },
                                  },
                                  interactions: {
                                    onClick: {
                                      function: {
                                        fnCustomCode: {
                                          fnCustomSet: `
                                          setResetFilters(true);
                                          setStatusFilter("");
                                          setLegalStatusFilter("");
                                          setRegimeFilter("");
                                          setDateFilter(undefined);
                                          setFilterValue("");                                          
                                          `
                                        },
                                      },
                                      type: 'function',
                                    },
                                  },
                                },
                              ],
                            },
                          ]
                        },
                      ],
                      rules: [
                        {
                          type: 'visibility',
                          condition: 'showFilters'
                        }
                      ]
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
                    Período de Inscrição: {dateFilter.from} a {dateFilter.to ?? 'hoje'}
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
    { id: 'igrp_datepicker_range', namespace: 'import { IGRPDatePickerRange } from "@igrp/igrp-framework-react-design-system";' },
    { id: 'igrp_options_props', namespace: 'import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";' },
  ],
  states: [
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
          type: 'TaxPayer',
          isNullable: true
        }
      ],
      imports: [
      ],
      code: `
      if(!value) return {}
      const label = selectLegalStatus_fltOptions.find((it) => it.value === value.estatuto)?.label ?? 'N/E'
      return { label }
      `,
      returnValue: {
        type: '{ iconName?: string, bgClass?: string, textClass?: string, label?: string, className?: string }',
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
          type: 'TaxPayer',
          isNullable: true
        }
      ],
      imports: [
      ],
      code: `
      if(!value) return {}
      const label = selectRegime_fltOptions.find((it) => it.value === value.regime)?.label ?? 'N/E'
      return { label }
      `,
      returnValue: {
        type: '{ iconName?: string, bgClass?: string, textClass?: string, label?: string, className?: string }',
        isNullable: false,
      },
    },
    {
      id: 'status_label_fn',
      name: 'getStatusBadge',
      arguments: [
        {
          id: 'arg_value1',
          name: 'value',
          type: 'TaxPayer',
          isNullable: true
        }
      ],
      imports: [
      ],
      code: `
      if(!value) return {}
      const label = selectStatus_fltOptions.find((it) => it.value === value.estado)?.label ?? 'N/E'
      const bgClass = value.estado === 'ATIVO'? 'bg-green-200' : value.estado === 'CESSADO'? 'bg-red-200' : 'bg-yellow-200' 
      return { label, bgClass }
      `,
      returnValue: {
        type: '{ iconName?: string, bgClass?: string, textClass?: string, label?: string, className?: string }',
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
        type: 'IGRPOptionsProps',
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
        type: 'IGRPOptionsProps',
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
        type: 'IGRPOptionsProps',
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
