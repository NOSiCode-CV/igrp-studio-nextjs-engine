import { initCodeSnippets, initComponents, newPage, registerComponents } from '../../src';
import { Layout, PageConfig } from '../../src/interfaces/types';
import { OUTPUT_TAXPAYER_TEST } from '../../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TAXPAYER_TEST;

const formLayout: Layout = {
  id: 'form_taxpayers',
  tag: 'form_taxpayers',
  componentName: 'form',
  dataType: 'NewTaxPayerRequest',
  properties: {
    formClassName: 'space-y-6',
  },
  children: [
    {
      id: 'basic_information_card',
      tag: 'basic_information_card',
      componentName: 'card',
      properties: {
        className: 'shadow-sm',
        customProperties: {
          ref: 'basicRef',
        },
      },
      children: [
        {
          id: 'basic_information_card_header',
          tag: 'basic_information_card_header',
          componentName: 'cardHeader',
          properties: {
            className: 'py-3 px-4 border-b flex flex-row items-center justify-between',
          },
          children: [
            {
              id: 'basic_information_building_icon',
              tag: 'basic_information_building_icon',
              componentName: 'icon',
              properties: {
                name: 'Building',
                className: 'h-4 w-4 text-muted-foreground',
              },
            },
            {
              id: 'basic_information_headline',
              tag: 'basic_information_headline',
              componentName: 'headline',
              properties: {
                variant: 'h6',
                title: 'Informações Básicas',
                description: 'Dados principais do contribuinte',
              },
            },
            {
              id: 'basic_information_badge',
              tag: 'basic_information_badge',
              componentName: 'badge',
              properties: {
                variant: 'outline',
                color: 'secondary',
                className: 'font-normal text-xs',
                label: 'Obrigatório',
              },
            },
          ],
        },
        {
          id: 'basic_information_card_content',
          tag: 'basic_information_card_content',
          componentName: 'cardContent',
          properties: {
            className: 'p-4',
          },
          children: [
            {
              id: 'basic_information_form_grid',
              tag: 'basic_information_form_grid',
              componentName: 'grid',
              childProperties: {
                className: 'col-span-1'
              },
              properties: {
                variant: 'cols1',
                className: 'md:grid-cols-2 gap-4'
              },
              children: [
                // inputs
                {
                  id: 'basic_information_tp_documento',
                  tag: 'tipo_documento',
                  componentName: 'select',
                  properties: {
                    label: 'Tipo de documento de inscrição',
                    required: true,
                    placeholder: 'Selecione o tipo de documento'
                  },
                  /*interactions: {
                    onValueChange: {
                      type: 'function',
                      function: {
                        fnName: 'setSelectTipo_documentoValue'
                      }
                    }
                  },*/
                  data: {
                    options: {
                      state: {
                        id: 'basic_information_tp_documento_opt_st',
                        name: 'selectTipo_documentoOptions',
                        type: 'IGRPOptionsProps[]',
                        defaultValue: '[]'
                      }
                    },
                    /*value: {
                      state: {
                        id: 'basic_information_tp_documento_val_st',
                        name: 'selectTipo_documentoValue',
                        type: 'string',
                        defaultValue: ''
                      }
                    },*/
                  }
                },
                {
                  id: 'numero_documento',
                  tag: 'numero_documento',
                  componentName: 'inputText',
                  properties: {
                    label: "Número de documento de inscrição",
                    required: true,
                  },
                },
                {
                  id: 'denominacao_social',
                  tag: 'denominacao_social',
                  componentName: 'inputText',
                  properties: {
                    label: "Denominação Social",
                    required: true,
                  },
                },
                {
                  id: 'nome_comercial',
                  tag: 'nome_comercial',
                  componentName: 'inputText',
                  properties: {
                    label: "Nome Comercial",
                    required: true,
                  },
                },
                {
                  id: 'basic_information_estatuto',
                  tag: 'estatuto',
                  componentName: 'select',
                  properties: {
                    label: 'Estatuto Jurídico',
                    required: true,
                    placeholder: 'Selecione o estatuto jurídico'
                  },
                  data: {
                    options: {
                      state: {
                        id: 'basic_information_estatuto_opt_st',
                        name: 'selectEstatutoOptions',
                        type: 'IGRPOptionsProps[]',
                        defaultValue: '[]'
                      }
                    },
                  },
                  /*interactions: {
                    onValueChange: {
                      type: 'function',
                      function: {
                        fnName: 'setSelectTipo_documentoValue'
                      }
                    }
                  },*/
                },
                {
                  id: 'basic_information_tipo_representacao',
                  tag: 'tipo_representacao',
                  componentName: 'select',
                  properties: {
                    label: 'Tipo de representação',
                    required: true,
                    placeholder: 'Selecione o tipo de representação'
                  },
                  data: {
                    options: {
                      state: {
                        id: 'basic_information_tipo_representacao_opt_st',
                        name: 'selectTipo_representacaoOptions',
                        type: 'IGRPOptionsProps[]',
                        defaultValue: '[]'
                      }
                    },
                  },
                  /*interactions: {
                    onValueChange: {
                      type: 'function',
                      function: {
                        fnName: 'setSelectTipo_documentoValue'
                      }
                    }
                  },*/
                },
                {
                  id: 'dt_inicio_actividade',
                  tag: 'dt_inicio_actividade',
                  componentName: 'inputDatePicker',
                  properties: {
                    label: "Data de Início de Atividade",
                    placeholder: 'Escolha uma data',
                    required: true,
                  },
                },
              ]
            }
          ],
        },
      ],
    },
  ],
  interactions: {
    onSubmit: {
      type: 'function',
      function: {
        fnCustomSet: 'async (values) => await onSubmit(values)',
      },
    },
  },
  data: {
    defaultValues: {
      state: {
        id: 'form_tax_payer_content_st',
        name: 'contentForm{{id}}',
        type: 'z.infer<{{type}}ZodType>',
        defaultValue: 'init{{type}}',
      },
    },
  },
};

const pageContent: Layout = {
  id: 'main_content',
  tag: 'main_content',
  componentName: 'container',
  properties: {
    className: 'relative',
  },
  children: [
    {
      id: 'main_grid',
      tag: 'main_grid',
      componentName: 'grid',
      properties: {
        variant: 'cols1',
        gap: 4,
        className: 'lg:grid-cols-4',
      },
      children: [
        // TODO: sidebar navigation
        {
          id: 'main_form_content',
          tag: 'main_form_content',
          componentName: 'section',
          properties: {
            className: 'lg:col-span-3',
          },
          children: [formLayout],
        },
      ],
    },
    {
      id: 'footer_with_actions',
      tag: 'footer_with_actions',
      componentName: 'stack', // TODO: replace with 'sticky'?
      properties: {
        className:
          'bottom-0 left-0 right-0 mt-6 bg-background border-t shadow-md py-2 px-4 z-10',
      },
      children: [
        {
          id: 'footer_flex',
          tag: 'footer_flex',
          componentName: 'flex',
          properties: {
            variant: 'justify-between',
            className: 'items-center w-full',
          },
          children: [
            {
              id: 'footer_flex_child1',
              tag: 'footer_flex_child1',
              componentName: 'flex',
              properties: {
                variant: 'items-center',
                className: 'gap-2',
              },
              children: [
                {
                  id: 'footer_badge_fragment',
                  tag: 'footer_badge_fragment',
                  componentName: 'fragment',
                  content: `
              {isEdit ? (
                <IGRPBadge variant="outline" showIcon={true} iconName="CircleCheck" className="bg-blue-50 text-blue-700 border-blue-200">
                  Editando Contribuinte
                </IGRPBadge>
              ) : (
                <IGRPBadge variant="outline" showIcon={true} iconName="Plus" className="bg-green-50 text-green-700 border-green-200">
                  Novo Contribuinte
                </IGRPBadge>
              )}
                                  `,
                },
                {
                  id: 'footer_filling_info',
                  tag: 'footer_filling_info',
                  componentName: 'paragraph',
                  properties: {
                    className: 'text-xs text-muted-foreground',
                  },
                  content: 'Preencha os campos obrigatórios marcados com *',
                },
              ],
            },
            {
              id: 'footer_flex_child2',
              tag: 'footer_flex_child2',
              componentName: 'flex',
              properties: {
                className: 'gap-3',
              },
              children: [
                {
                  id: 'footer_cancel_fragment',
                  tag: 'footer_cancel_fragment',
                  componentName: 'fragment',
                  content: `
              {onCancel && (
                <IGRPButton type="button" variant="outline" onClick={onCancel}>
                  Cancelar
                </IGRPButton>
              )}
                                  `,
                },
                {
                  id: 'button_form_tax_payer_submit',
                  tag: 'button_form_tax_payer_submit',
                  componentName: 'button',
                  properties: {
                    type: 'submit',
                    disabled: 'isSubmitting',
                    className: 'min-w-[150px]',
                  },
                  children: [
                    {
                      id: 'button_submit_content_fragment',
                      tag: 'button_submit_content_fragment',
                      componentName: 'fragment',
                      content: `
              {isSubmitting ? (
                <>
                  <span className="animate-pulse">Processando...</span>
                </>
              ) : isEdit ? (
                "Salvar Alterações"
              ) : (
                "Salvar Contribuinte"
              )}
                                  `,
                    },
                  ],
                  interactions: {
                    onClick: {
                      formSubmit: {
                        targetForm: 'form_taxpayers',
                      },
                      type: 'formSubmit',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const taxPayerLayout: Layout = {
  id: 'main_page',
  tag: 'main_page',
  componentName: 'page',
  interactions: {
    onLoad: {
      function: {
        fnCustomCode: {
          imports: [
            {
              namespace: 'import { useIGRPToast } from "@igrp/igrp-framework-react-design-system";',
            },
          ],
          fnCode: `
        
  const { igrpToast } = useIGRPToast()  
  // Field arrays for multiple items
  /*const {
    fields: actividadesFields,
    append: appendActividade,
    remove: removeActividade,
    update: updateActividade,
  } = useFieldArray({
    control: formform_taxpayersRef.current?.control,
    name: "atividades",
  })

  const {
    fields: enderecosFields,
    append: appendEndereco,
    remove: removeEndereco,
    update: updateEndereco,
  } = useFieldArray({
    control: formform_taxpayersRef.current?.control,
    name: "enderecos",
  })

  const {
    fields: contatosFields,
    append: appendContato,
    remove: removeContato,
    update: updateContato,
  } = useFieldArray({
    control: formform_taxpayersRef.current?.control,
    name: "contatos",
  })

  const {
    fields: contasBancariasFields,
    append: appendContaBancaria,
    remove: removeContaBancaria,
    update: updateContaBancaria,
  } = useFieldArray({
    control: formform_taxpayersRef.current?.control,
    name: "contas_bancarias",
  })

  const {
    fields: anexosFields,
    append: appendAnexo,
    remove: removeAnexo,
  } = useFieldArray({
    control: formform_taxpayersRef.current?.control,
    name: "anexos",
  })*/

useEffect(() => {
  const actividades = formform_taxpayersRef.current?.getValues("atividades") as Atividade[]
  if (actividades && actividades.length > 0) {
    const total = actividades.reduce((sum, act) => sum + (Number.parseFloat(act.soat) || 0), 0)
    const weighted = (total / actividades.length).toFixed(2)
    setSoatPonderado(weighted)
  } else {
    setSoatPonderado("0.00")
  }
  
  loadFormFields()
  
}, [formform_taxpayersRef.current?.watch("atividades")])
        
const loadFormFields = async () => {
 
  setSelectTipo_documentoOptions(await getTiposDocumentoOptions())
  setSelectEstatutoOptions(await getEstatutoJuridicosOptions())
  
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
        className: 'min-h-full'
      },
      children: [
        {
          id: 'main_sticky',
          tag: 'main_sticky',
          componentName: 'stack',
          properties: {
            className: 'top-0 z-10 bg-background'
          },
          children: [
            {
              id: 'main_flex',
              tag: 'main_flex',
              componentName: 'flex',
              properties: {
                variant: 'items-center',
                className: 'justify-between mb-4'
              },
              children: [
                {
                  id: 'main_flex_child1',
                  tag: 'main_flex_child1',
                  componentName: 'flex',
                  properties: {
                    variant: 'items-center',
                    className: 'gap-2'
                  },
                  children: [
                    {
                      id: "button_nav_back",
                      tag: "button_nav_back",
                      componentName: "button",
                      properties: {
                        variant: 'outline',
                        size: 'icon',
                        iconProperties: {
                          showIcon: true,
                          iconName: 'ArrowLeft'
                        }
                      },
                      interactions: {
                        onClick: {
                          type: 'navigate',
                          navigate: {
                            name: 'handlebutton_nav_backNavigation',
                            path: '/contribuintes'
                          }
                        }
                      }
                    },
                    {
                      id: 'page_headline',
                      tag: 'page_headline',
                      componentName: 'headline',
                      properties: {
                        variant: 'h3',
                        title: 'Novo Contribuinte',
                      },
                    },
                  ],
                },
                {
                  id: 'main_flex_child2',
                  tag: 'main_flex_child2',
                  componentName: 'flex',
                  properties: {
                    variant: 'items-center',
                    className: 'gap-2'
                  },
                  children: [
                    {
                      id: 'button_cancelar',
                      tag: 'button_cancelar',
                      componentName: 'button',
                      properties: {
                        label: 'Cancelar',
                        size: 'sm',
                        variant: 'outline',
                        iconProperties: {
                        },
                      },
                      interactions: {
                        onClick: {
                          navigate: {
                            name: 'handlebutton_cancelarNavigation',
                            path: '/contribuintes'
                          },
                          type: 'navigate',
                        },
                      },
                    },
                    {
                      id: 'button_save',
                      tag: 'button_save',
                      componentName: 'button',
                      properties: {
                        label: 'Salvar Contribuinte',
                        size: 'sm',
                        iconProperties: {

                        },
                      },
                      interactions: {
                        onClick: {
                          formSubmit: {
                            targetForm: 'form_taxpayers',
                          },
                          type: 'formSubmit',
                        },
                      },
                    },
                  ],
                }
              ],
            },
            {
              id: 'main_content_flex',
              tag: 'main_content_flex',
              componentName: 'flex',
              properties: {
                variant: 'flex1',
                className: 'px-4 pb-6'
              },
              children: [
                pageContent
              ]
            }
          ],
        }
      ],
    }
  ],
};

const pageConfig: PageConfig = {
  id: 'gb87Xk1rU1s0',
  imports: [
    {
      id: 'use_field_array_imp',
      namespace: 'import { useFieldArray } from "react-hook-form";',
    },
  ],
  states: [
    {
      id: 'active_section_st',
      name: 'activeSection',
      type: 'string',
      defaultValue: 'basic',
    },
    {
      id: 'soat_ponderado_st',
      name: 'soatPonderado',
      type: 'string',
      defaultValue: '0.00',
    },
    {
      id: 'is_submitted_st',
      name: 'isSubmitted',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      id: 'is_submitting_st',
      name: 'isSubmitting',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      id: 'is_edit_st',
      name: 'isEdit',
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  references: [
    {
      id: 'basic_ref',
      name: 'basicRef',
      type: 'HTMLDivElement',
      defaultValue: 'null',
    },
    {
      id: 'activities_ref',
      name: 'activitiesRef',
      type: 'HTMLDivElement',
      defaultValue: 'null',
    },
    {
      id: 'contacts_ref',
      name: 'contactsRef',
      type: 'HTMLDivElement',
      defaultValue: 'null',
    },
    {
      id: 'banking_ref',
      name: 'bankingRef',
      type: 'HTMLDivElement',
      defaultValue: 'null',
    },
    {
      id: 'documents_ref',
      name: 'documentsRef',
      type: 'HTMLDivElement',
      defaultValue: 'null',
    },
  ],
  types: [
    {
      componentId: '',
      name: 'TaxPayer',
      fields: [
        {
          componentId: '',
          name: 'id',
          type: 'string',
          required: true,
        },
        {
          componentId: '',
          name: 'numero',
          type: 'string',
          required: true,
        },
        {
          componentId: '',
          name: 'nome',
          type: 'string',
          required: true,
        },
        {
          componentId: '',
          name: 'regime',
          type: 'string',
          required: true,
        },
        {
          componentId: '',
          name: 'dataInicio',
          type: 'string',
          required: true,
        },
        {
          componentId: '',
          name: 'estatuto',
          type: 'string',
          required: true,
        },
        {
          componentId: '',
          name: 'estado',
          type: 'string',
          required: true,
        },
        {
          componentId: '',
          name: 'email',
          type: 'string',
          required: true,
        },
        {
          componentId: '',
          name: 'telefone',
          type: 'string',
          required: true,
        },
        {
          componentId: '',
          name: 'endereco',
          type: 'string',
          required: true,
        },
      ],
      path: '@/app/(myapp)/data/types',
    },
    {
      componentId: 'form_taxpayers',
      name: 'Atividade',
      fields: [
        {
          componentId: '',
          name: 'id',
          type: 'string',
          required: false,
        },
        {
          componentId: '',
          name: 'codigo',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'descricao',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'principal',
          type: 'boolean',
          required: true,
          defaultValue: 'true',
        },
        {
          componentId: '',
          name: 'soat',
          type: 'string',
          required: true,
          defaultValue: '0.00',
        },
      ],
      path: '@/app/(myapp)/data/types',
    },
    {
      componentId: 'form_taxpayers',
      name: 'Endereco',
      fields: [
        {
          componentId: '',
          name: 'id',
          type: 'string',
          required: false,
        },
        {
          componentId: '',
          name: 'tipo',
          type: 'string',
          required: true,
          defaultValue: 'PRINCIPAL',
        },
        {
          componentId: '',
          name: 'endereco',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'cidade',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'regiao',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'isPrincipal',
          type: 'boolean',
          required: true,
          defaultValue: 'true',
        },
      ],
      path: '@/app/(myapp)/data/types',
    },
    {
      componentId: 'form_taxpayers',
      name: 'Contato',
      fields: [
        {
          componentId: '',
          name: 'id',
          type: 'string',
          required: false,
        },
        {
          componentId: '',
          name: 'tipo',
          type: 'string',
          required: true,
          defaultValue: 'TELEFONE',
        },
        {
          componentId: '',
          name: 'valor',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'principal',
          type: 'boolean',
          required: true,
          defaultValue: 'true',
        },
      ],
      path: '@/app/(myapp)/data/types',
    },
    {
      componentId: 'form_taxpayers',
      name: 'ContaBancaria',
      fields: [
        {
          componentId: '',
          name: 'id',
          type: 'string',
          required: false,
        },
        {
          componentId: '',
          name: 'banco',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'agencia',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'conta',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'nib',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'principal',
          type: 'boolean',
          required: true,
          defaultValue: 'true',
        },
      ],
      path: '@/app/(myapp)/data/types',
    },
    {
      componentId: 'form_taxpayers',
      name: 'Anexo',
      fields: [
        {
          componentId: '',
          name: 'id',
          type: 'string',
          required: false,
        },
        {
          componentId: '',
          name: 'tipo',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'nome',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'data',
          type: 'Date',
          required: true,
          defaultValue: 'new Date()',
        },
        {
          componentId: '',
          name: 'arquivo',
          type: 'string',
          required: false,
          defaultValue: '',
        },
      ],
      path: '@/app/(myapp)/data/types',
    },
    {
      componentId: 'form_taxpayers',
      name: 'NewTaxPayerRequest',
      isMainType: true,
      fields: [
        {
          componentId: '',
          name: 'tipo_documento',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'numero_documento',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'denominacao_social',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'nome_comercial',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'estatuto_juridico',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'tipo_representacao',
          type: 'string',
          required: true,
          defaultValue: 'SEDE',
        },
        {
          componentId: '',
          name: 'contribuinte_sede',
          type: 'string',
          required: false,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'nome_contribuinte_sede',
          type: 'string',
          required: false,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'setor',
          type: 'string',
          required: false,
          defaultValue: '',
        },
        {
          componentId: '',
          name: 'dt_inicio_actividade',
          type: 'Date',
          required: true,
          defaultValue: 'new Date()',
        },
        {
          componentId: '',
          name: 'atividades',
          type: 'Atividade',
          isList: true,
          required: true,
          defaultValue: '[initAtividade]',
        },
        {
          componentId: '',
          name: 'contatos',
          type: 'Contato',
          isList: true,
          required: true,
          defaultValue: '[initContato]',
        },
        {
          componentId: '',
          name: 'enderecos',
          type: 'Endereco',
          isList: true,
          required: true,
          defaultValue: '[initEndereco]',
        },
        {
          componentId: '',
          name: 'contas_bancarias',
          type: 'ContaBancaria',
          isList: true,
          required: true,
          defaultValue: '[]',
        },
        {
          componentId: '',
          name: 'anexos',
          type: 'Anexo',
          isList: true,
          required: true,
          defaultValue: '[]',
        },
      ],
      path: '@/app/(myapp)/data/types',
    },
  ],
  functions: [
    {
      id: 'form_submit_fn',
      name: 'onSubmit',
      isAsync: true,
      arguments: [
        {
          id: 'form_values',
          name: 'values',
          type: 'NewTaxPayerRequest',
          isNullable: false,
        },
      ],
      imports: [],
      code: `
      
      setIsSubmitting(true)

      try {
        await onSubmitForm(values)
        igrpToast({
          title: isEdit ? "Contribuinte atualizado" : "Contribuinte adicionado",
          description: \`\${values.nome_comercial} foi \${isEdit ? "atualizado" : "adicionado"} com sucesso.\`,
        })
      } catch (error) {
        igrpToast({
          title: "Erro",
          description: "Ocorreu um erro ao processar o formulário.",
          type: "error",
        })
      } finally {
        setIsSubmitting(false)
      }
      
      `,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'handle_nif_search_fn',
      name: 'handleNifSearch',
      arguments: [],
      imports: [],
      code: `
      const numeroDocumento: string | undefined = formform_taxpayersRef.current?.getValues("numero_documento")
      if (!numeroDocumento) {
        igrpToast({
          title: "Erro",
          description: "Por favor, insira um número de documento para pesquisar.",
          type: "error",
        })
        return
      }
  
      // Simulate API call
      igrpToast({
        title: "Pesquisando",
        description: \`Pesquisando NIF: \${numeroDocumento}...\`,
      })
  
      // Simulate API response
      setTimeout(() => {
        // Mock data for demonstration
        if (numeroDocumento === "123456789") {
          formform_taxpayersRef.current?.setValue("denominacao_social", "Empresa Exemplo, Lda")
          formform_taxpayersRef.current?.setValue("nome_comercial", "Empresa Exemplo")
          formform_taxpayersRef.current?.setValue("estatuto_juridico", "7")
  
          igrpToast({
            title: "Sucesso",
            description: "Dados do contribuinte encontrados e preenchidos.",
          })
        } else {
          igrpToast({
            title: "Não encontrado",
            description: "Nenhum contribuinte encontrado com este NIF.",
            type: "error",
          })
        }
      }, 1000)
      `,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'principal_activity_fn',
      name: 'handlePrincipalActivity',
      arguments: [
        {
          id: 'arg_value1',
          name: 'index',
          type: 'number',
          isNullable: false,
        },
      ],
      imports: [],
      code: `
      /*actividadesFields.forEach((_, i) => {
        const actividade: Atividade = formform_taxpayersRef.current?.getValues(\`atividades.\${i}\`)
        updateActividade(i, {
          ...actividade,
          principal: i === index,
        })
      })*/
      `,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },

    {
      id: 'principal_address_fn',
      name: 'handlePrincipalAddress',
      arguments: [
        {
          id: 'arg_value2',
          name: 'index',
          type: 'number',
          isNullable: false,
        },
      ],
      imports: [],
      code: `
      /*enderecosFields.forEach((_, i) => {
        const endereco = formform_taxpayersRef.current?.getValues(\`enderecos.\${i}\`) as Endereco
        updateEndereco(i, {
          ...endereco,
          isPrincipal: i === index,
        })
      })*/
      `,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },

    {
      id: 'principal_contact_fn',
      name: 'handlePrincipalContact',
      arguments: [
        {
          id: 'arg_value3',
          name: 'index',
          type: 'number',
          isNullable: false,
        },
      ],
      imports: [],
      code: `
      /*contatosFields.forEach((_, i) => {
        const contato = formform_taxpayersRef.current?.getValues(\`contatos.\${i}\`) as Contato
        updateContato(i, {
          ...contato,
          principal: i === index,
        })
      })*/
      `,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },

    {
      id: 'principal_bank_fn',
      name: 'handlePrincipalBankAccount',
      arguments: [
        {
          id: 'arg_value4',
          name: 'index',
          type: 'number',
          isNullable: false,
        },
      ],
      imports: [],
      code: `
      /*contasBancariasFields.forEach((_, i) => {
        const contaBancaria = formform_taxpayersRef.current?.getValues(\`contas_bancarias.\${i}\`) as ContaBancaria
        updateContaBancaria(i, {
          ...contaBancaria,
          principal: i === index,
        })
      })*/
      `,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'scroll_to_section_fn',
      name: 'scrollToSection',
      arguments: [
        {
          id: 'arg_value5',
          name: 'sectionId',
          type: 'string',
          isNullable: false,
        },
      ],
      imports: [],
      code: `
      setActiveSection(sectionId)
      const sectionRefs = {
        basic: basicRef,
        activities: activitiesRef,
        contacts: contactsRef,
        banking: bankingRef,
        documents: documentsRef,
      };
    
      const sectionRef = sectionRefs[sectionId as keyof typeof sectionRefs];
      if (sectionRef?.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
      `,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'on_cancel_fn',
      name: 'onCancel',
      arguments: [],
      imports: [],
      code: `
      
      `,
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
  ],
  actions: [
    {
      id: 'action_1',
      code: '',
      name: 'getTaxPayers',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_2',
      code: '',
      name: 'getStatusOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_3',
      code: '',
      name: 'getRegimeOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_4',
      code: '',
      name: 'getLegalStatusOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_5',
      code: '',
      name: 'getTipoDocumentoInscricaoOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_6',
      code: '',
      name: 'getEstatutoJuridicosOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_7',
      code: '',
      name: 'getSetoresOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_8',
      code: '',
      name: 'getTiposRepresentacaoOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_9',
      code: '',
      name: 'getTiposEnderecoOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_10',
      code: '',
      name: 'getTiposContactoOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_11',
      code: '',
      name: 'getBancosOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_12',
      code: '',
      name: 'getTiposDocumentoOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_13',
      code: '',
      name: 'getFormSectionsOptions',
      arguments: [],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
    {
      id: 'action_14',
      name: 'onSubmitForm',
      code: '',
      arguments: [
        {
          name: 'values',
          type: 'NewTaxPayerRequest',
          isNullable: false,
          isList: false,
          id: 'arg_value6',
        },
      ],
      path: '@/app/(myapp)/actions/mock-actions',
      returnValue: {
        type: 'void',
        isNullable: false,
      },
    },
  ],
  type: 'page',
  pageName: 'novoContribuinte',
  path: 'contribuintes/novo',
  components: taxPayerLayout,
};

beforeAll(async () => {
  await initComponents();
  await initCodeSnippets();
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

describe('Tax Payer Form module', () => {
  it('should save the tax payer form page configuration file', async () => {
    await newPage(pageConfig, OUTPUT_DIR);
  });
});
