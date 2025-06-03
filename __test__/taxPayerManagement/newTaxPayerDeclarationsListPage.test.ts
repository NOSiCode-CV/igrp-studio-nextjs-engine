import { initComponents, newPage, registerComponents } from '../../src';
import { Layout, PageConfig } from '../../src/interfaces/types';
import { OUTPUT_TAXPAYER_TEST } from '../../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TAXPAYER_TEST;

const tableLayout: Layout = {
  id: 'table_declarations',
  tag: 'table_declarations',
  componentName: 'table',
  dataType: 'Declaration',
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
          id: 'numero_contribuinte',
          tag: 'numero_contribuinte',
          componentName: 'tableTextCell',
          properties: {
            headerTitle: "Nº de Contribuinte",
            headerType: "sortToggle",
          },
        },
        {
          id: 'nome_contribuinte',
          tag: 'nome_contribuinte',
          componentName: 'tableTextCell',
          properties: {
            headerTitle: "Nome de Contribuinte",
            headerType: "sortToggle",
          },
        },
        {
          id: 'numero_processo',
          tag: 'numero_processo',
          componentName: 'tableTextCell',
          properties: {
            headerTitle: "Nº de Processo",
            headerType: "sortToggle",
          },
        },
        {
          id: 'periodo_referencia',
          tag: 'periodo_referencia',
          componentName: 'tableTextCell',
          properties: {
            headerTitle: "Período de Referência",
            headerType: "sortToggle",
          },
        },
        {
          id: 'data_entrega',
          tag: 'data_entrega',
          componentName: 'tableDateCell',
          properties: {
            headerTitle: "Data de Entrega",
            headerType: "sortToggle",
          }
        },
        {
          id: 'total_comparticipacao',
          tag: 'total_comparticipacao',
          componentName: 'tableAmountCell',
          properties: {
            headerTitle: "Total Comparticipação",
            currency: 'XOF',
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
                      iconName: 'Search',
                      className: ''
                    },
                    showIcon: true,
                    labelTrigger: 'Visualizar',
                    type: "modal"
                  }
                },
                {
                  id: 'edit',
                  tag: 'dividas',
                  componentName: 'tableModalDropdownItem',
                  properties: {
                    iconProperties: {
                      iconName: 'DollarSign',
                      iconClassName: 'text-amber-500',
                    },
                    showIcon: true,
                    labelTrigger: 'Dívidas',
                    type: "modal"
                  }
                },
                {
                  id: 'validate',
                  tag: 'validar',
                  componentName: 'tableAlertDropdownItem',
                  properties: {
                    iconProperties: {
                      iconName: 'Check',
                      iconClassName: 'text-green-500',
                    },
                    showIcon: true,
                    labelTrigger: 'Validar',
                    type: "alert"
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
                {
                  id: 'print',
                  tag: 'imprimir',
                  componentName: 'tableAlertDropdownItem',
                  properties: {
                    iconProperties: {
                      iconName: 'Printer',
                      iconClassName: 'text-grey-500',
                    },
                    showIcon: true,
                    labelTrigger: 'Imprimir',
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
      id: 'table_declarations_filters',
      tag: 'table_declarations_filters',
      componentName: 'tableFilters',
      properties: {},
      children: [
      ],
    },
  ],
  data: {
    data: {
      state: {
        id: '',
        name: 'contentTabletable_declarations',
        type: 'Declaration[]',
        defaultValue: '[]',
        generate: true
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
  updateTabletable_declarations()
  loadStatusFltCombobox()
},[statusFilter, dateFilter, filterValue, nrContribuinteFilter, nrProcessoFilter, nomeContribuinteFilter, periodoReferenciaFilter])

const updateTabletable_declarations = async () => {
 
  let data: Declaration[] = await getDeclarations();
  
  setHasActiveFilters(false)
  
  if(filterValue) {
    data = data.filter((it) =>
      removeAccents(it.nome_contribuinte).toLowerCase().includes(removeAccents(filterValue).toLowerCase())
    );

    setHasActiveFilters(true)
  }
  
  if(nomeContribuinteFilter) {
    data = data.filter((it) =>
      removeAccents(it.nome_contribuinte).toLowerCase().includes(removeAccents(nomeContribuinteFilter).toLowerCase())
    );

    setHasActiveFilters(true)
  }
  
  if(periodoReferenciaFilter) {
    data = data.filter((it) =>
      removeAccents(it.periodo_referencia).toLowerCase().includes(removeAccents(periodoReferenciaFilter).toLowerCase())
    );

    setHasActiveFilters(true)
  }
  
  if(nrProcessoFilter) {
    data = data.filter((it) => it.numero_processo === nrProcessoFilter);
    setHasActiveFilters(true)
  }
  
  if(nrContribuinteFilter) {
    data = data.filter((it) => it.numero_contribuinte === nrContribuinteFilter);
    setHasActiveFilters(true)
  }
  
  if(statusFilter) {
    data = data.filter((it) => it.estado === statusFilter);
    setHasActiveFilters(true)
  }
 
  if(dateFilter) {
    data = data.filter((it) => {
      const itemDate = new Date(it.data_entrega);
    
      if (!dateFilter.from && !dateFilter.to) {
        return true; // no filtering
      }
    
      const fromDate = dateFilter.from ?? new Date(0); // if null, use epoch
      const toDate = dateFilter.to ?? new Date(); // if null, use today

      return itemDate >= fromDate && itemDate <= toDate;
    });

    setHasActiveFilters(true)
  }
  
  setContentTabletable_declarations(data)
  
  setTotalContribuintes(data.length)
  setAtivosCount(data.filter((c) => c.estado === "ATIVO").length)
  setTotalComparticipacao(\`F CFA \${data.reduce((sum, c) => sum + (c.total_comparticipacao || 0), 0)}\`);
  
}
             
const loadStatusFltCombobox = async () => {
 
  setSelectStatus_fltOptions(await getStatusOptions())
  
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
                title: 'Lista de FOS',
                variant: 'h3',
                description: 'Gerencie as declarações de FOS no sistema de segurança social',
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
                    content: 'Novo',
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
                    content: 'Ação Rápida',
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
            variant: 'cols3',
            className: 'sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 px-6 w-full',
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
                    defaultValue: '0',
                    generate: true
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
                    defaultValue: '0',
                    generate: true
                  }
                }
              }
            },
            {
              id: 'total_compart_stat_box',
              tag: 'total_compart_stat_box',
              componentName: 'statsCard',
              properties: {
                title: 'Total Comparticipação',
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
                    id: 'total_compart_statbox_value_st',
                    name: 'totalComparticipacao',
                    type: 'string',
                    defaultValue: '0 XOF',
                    generate: true
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
                                    defaultValue: ' ',
                                    generate: true
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
                      {(statusFilter !== "" ? 1 : 0) + (nrProcessoFilter !== "" ? 1 : 0) + (dateFilter !== undefined ? 1 : 0) + (nrContribuinteFilter !== "" ? 1 : 0) + (nomeContribuinteFilter !== "" ? 1 : 0)}
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
                                content: 'Exportar declarações',
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
                                content: 'Importar declarações',
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
                                    label: 'Estado',
                                    placeholder: 'Todos Estados'
                                  },
                                  data: {
                                    options: {
                                      state: {
                                        id: 'estado_flt_opt_st',
                                        name: 'selectStatus_fltOptions',
                                        type: 'IGRPOptionsProps[]',
                                        defaultValue: '[]',
                                        generate: true
                                      }
                                    },
                                    value: {
                                      state: {
                                        id: 'status_flt_val_st',
                                        name: 'statusFilter',
                                        type: 'string',
                                        defaultValue: ' ',
                                        generate: true
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
                              id: 'filter_inputs_container_nome_contribuinte',
                              tag: 'filter_inputs_container_nome_contribuinte',
                              componentName: 'container',
                              properties: {
                                className: 'space-y-1 min-w-[160px]'
                              },
                              children: [
                                {
                                  id: 'nome_contribuinte_flt',
                                  tag: 'nome_contribuinte_flt',
                                  componentName: 'inputText',
                                  properties: {
                                    label: 'Nome de Contribuinte',
                                  },
                                  data: {
                                    value: {
                                      state: {
                                        id: 'nome_contribuinte_flt_val_st',
                                        name: 'nomeContribuinteFilter',
                                        type: 'string',
                                        defaultValue: ' ',
                                        generate: true
                                      }
                                    },
                                  },
                                  interactions: {
                                    onChange: {
                                      type: 'function',
                                      function: {
                                        fnName: '(e) => setNomeContribuinteFilter(e.target.value)'
                                      }
                                    }
                                  },
                                },
                              ],
                            },
                            {
                              id: 'filter_inputs_container_periodo_referencia',
                              tag: 'filter_inputs_container_periodo_referencia',
                              componentName: 'container',
                              properties: {
                                className: 'space-y-1 min-w-[160px]'
                              },
                              children: [
                                {
                                  id: 'periodo_ref_flt',
                                  tag: 'periodo_ref_flt',
                                  componentName: 'inputText',
                                  properties: {
                                    label: 'Período de Referência',
                                  },
                                  data: {
                                    value: {
                                      state: {
                                        id: 'periodo_ref_flt_val_st',
                                        name: 'periodoReferenciaFilter',
                                        type: 'string',
                                        defaultValue: ' ',
                                        generate: true
                                      }
                                    },
                                  },
                                  interactions: {
                                    onChange: {
                                      type: 'function',
                                      function: {
                                        fnName: '(e) => setPeriodoReferenciaFilter(e.target.value)'
                                      }
                                    }
                                  },
                                },
                              ],
                            },
                            {
                              id: 'filter_inputs_container_nr_contribuinte',
                              tag: 'filter_inputs_container_nr_contribuinte',
                              componentName: 'container',
                              properties: {
                                className: 'space-y-1 min-w-[160px]'
                              },
                              children: [
                                {
                                  id: 'nr_contribuinte_flt',
                                  tag: 'nr_contribuinte_flt',
                                  componentName: 'inputText',
                                  properties: {
                                    label: 'Nº de Contribuinte',
                                  },
                                  data: {
                                    value: {
                                      state: {
                                        id: 'nr_contribuinte_flt_val_st',
                                        name: 'nrContribuinteFilter',
                                        type: 'string',
                                        defaultValue: ' ',
                                        generate: true
                                      }
                                    },
                                  },
                                  interactions: {
                                    onChange: {
                                      type: 'function',
                                      function: {
                                        fnName: '(e) => setNrContribuinteFilter(e.target.value)'
                                      }
                                    }
                                  },
                                },
                              ],
                            },
                            {
                              id: 'filter_inputs_container_nr_processo',
                              tag: 'filter_inputs_container_nr_processo',
                              componentName: 'container',
                              properties: {
                                className: 'space-y-1 min-w-[160px]'
                              },
                              children: [
                                {
                                  id: 'nr_processo_flt',
                                  tag: 'nr_processo_flt',
                                  componentName: 'inputText',
                                  properties: {
                                    label: 'Nº de Processo',
                                  },
                                  data: {
                                    value: {
                                      state: {
                                        id: 'nr_processo_flt_val_st',
                                        name: 'nrProcessoFilter',
                                        type: 'string',
                                        defaultValue: ' ',
                                        generate: true
                                      }
                                    },
                                  },
                                  interactions: {
                                    onChange: {
                                      type: 'function',
                                      function: {
                                        fnName: '(e) => setNrProcessoFilter(e.target.value)'
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
                                    label: 'Período de Entrega',
                                    placeholder: 'Escolha uma data',
                                  },
                                  data: {
                                    date: {
                                      state: {
                                        id: 'date_flt_val_st',
                                        name: 'dateFilter',
                                        type: 'DateRange | undefined',
                                        defaultValue: 'undefined',
                                        generate: true
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
                                    content: 'Limpar Filtros',
                                    size: 'sm',
                                    variant: 'outline',
                                    className: 'h-9',
                                    iconProperties: {
                                      iconName: 'X',
                                      showIcon: true
                                    },
                                  },
                                  data: {
                                    disabled: {
                                      value: {
                                        id: 'disable_val',
                                        code: `!hasActiveFilters`
                                      }
                                    },
                                  },
                                  interactions: {
                                    onClick: {
                                      function: {
                                        fnCustomSet: `
                                        () => {
                                          setResetFilters(true);
                                          setStatusFilter("");
                                          setNrContribuinteFilter("");
                                          setNrProcessoFilter("");
                                          setNomeContribuinteFilter("");
                                          setDateFilter(undefined);
                                          setFilterValue(""); 
                                       }                                         
                                          `
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

                {nrContribuinteFilter !== "" && (
                  <IGRPBadge variant="soft" className="px-2 py-1 h-6">
                    Nº Contribuinte: {nrContribuinteFilter}
                    <IGRPButton variant="ghost" size="icon" showIcon={true} iconName="X" iconClassName="h-3 w-3" className="ml-1 hover:text-destructive" onClick={() => setNrContribuinteFilter("")}>
                    </IGRPButton>
                  </IGRPBadge>
                )}

                {nrProcessoFilter !== "" && (
                  <IGRPBadge variant="soft" className="px-2 py-1 h-6">
                    Nº Processo: {nrProcessoFilter}
                    <IGRPButton variant="ghost" size="icon" showIcon={true} iconName="X" iconClassName="h-3 w-3" className="ml-1 hover:text-destructive" onClick={() => setNrProcessoFilter("")}>
                    </IGRPButton>
                  </IGRPBadge>
                )}

                {statusFilter !== "" && (
                  <IGRPBadge variant="soft" className="px-2 py-1 h-6">
                    Estado: {statusFilter === "ATIVO" ? "Ativo" : statusFilter === "CESSADO" ? "Cessado" : "Suspenso"}
                    <IGRPButton variant="ghost" size="icon" showIcon={true} iconName="X" iconClassName="h-3 w-3" className="ml-1 hover:text-destructive" onClick={() => setStatusFilter("")}>
                    </IGRPButton>
                  </IGRPBadge>
                )}

                {dateFilter !== undefined && (
                  <IGRPBadge variant="soft" className="px-2 py-1 h-6">
                    Período de Entrega: {dateFilter.from ?? 'sempre'} a {dateFilter.to ?? 'hoje'}
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
      "name": "Declaration",
      "fields": [
        {
          "componentId": "",
          "name": "id",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "numero_contribuinte",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "nome_contribuinte",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "numero_processo",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "periodo_referencia",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "data_entrega",
          "type": "string",
          "required": true
        },
        {
          "componentId": "",
          "name": "total_remuneracao",
          "type": "number",
          "required": true
        },
        {
          "componentId": "",
          "name": "total_comparticipacao",
          "type": "number",
          "required": true
        },
        {
          "componentId": "",
          "name": "estado",
          "type": "string",
          "required": true
        },

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
      code: 'router.push("/declaracoes/novo-form")',
      returnValue: {
        type: 'void',
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
          type: 'Declaration',
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
      code: `updateTabletable_declarations();`,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
  ],
  actions: [
    {
      id: 'mock_tax_payer_list_act',
      name: 'getDeclarations',
      code: '',
      arguments: [],
      path: "@/app/(myapp)/actions/mock-actions",
      returnValue: {
        type: 'Declaration',
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
  ],
  type: 'page',
  pageName: 'declaracoes',
  path: 'declaracoes',
  components: taxPayerLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('FOS List module',() =>{
  it('should save the FOS list page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
