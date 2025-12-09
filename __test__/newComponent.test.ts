import { initComponents, newComponent, setEngineConfiguration } from '../src';
import { ComponentConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const componentConfig2: ComponentConfig = {
  type: 'component',
  scope: 'page',
  pagePath: 'imoveis',
  pageName: 'imoveis',
  description: 'Formulário de Manifestação de Interesse',
  name: 'manifestacaoInteresseForm',
  id: 'm4n1f35t0',
  args: [
    {
      id: '0',
      name: 'fracao',
      type: 'any',
      isList: false,
      isOptional: true,
      isInterface: false,
      isFunction: false,
      isState: false,
    },
    {
      id: '1',
      name: 'isEdit',
      type: 'boolean',
      isList: false,
      isOptional: true,
      isInterface: false,
      isFunction: false,
      isState: false,
    },
    {
      id: '2',
      name: 'initialData',
      type: 'any',
      isList: false,
      isOptional: true,
      isInterface: false,
      isFunction: false,
      isState: false,
    },
    {
      id: '3',
      name: 'shouldSubmit',
      type: 'boolean',
      isList: false,
      isOptional: false,
      isInterface: false,
      isFunction: false,
      isState: false,
    },
    {
      id: '4',
      name: 'onAfterSubmit',
      type: 'void',
      isList: false,
      isOptional: false,
      isInterface: false,
      isFunction: true,
      isState: false,
    },
  ],
  types: [
    {
      componentId: 'form_manifestacao',
      name: 'formManifestacao',
      path: '',
      fields: [
        {
          componentId: 'radio_modalidade',
          name: 'modalidade',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'radio_finalidade',
          name: 'finalidade',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'combobox_tipopessoa',
          name: 'tipoPessoa',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'combobox_tipodocumento',
          name: 'tipoDocumento',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'input_nif',
          name: 'nif',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'input_nome',
          name: 'nome',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'date_nascimento',
          name: 'dataNascimento',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'combobox_sexo',
          name: 'sexo',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'input_pai',
          name: 'nomePai',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'input_mae',
          name: 'nomeMae',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'input_num_func',
          name: 'numFuncionarioInss',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'combobox_estadocivil',
          name: 'estadoCivil',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'input_reg_com',
          name: 'numRegistoComercial',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'search_localizacao',
          name: 'localizacao',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'input_endereco',
          name: 'endereco',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'input_telefone',
          name: 'telefone',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'input_email',
          name: 'email',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'input_telemovel',
          name: 'telemovel',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'formlist_documentos',
          name: 'documentos',
          type: 'object',
          required: false,
          defaultValue: '',
          isList: true,
          fields: [
            {
              componentId: 'combobox_id_tipo_doc',
              name: 'idTipoDocumento',
              type: 'string',
              required: true,
              
              defaultValue: '',
              isList: false,
            },
            {
              componentId: 'combobox_obrigatoriedade',
              name: 'obrigatoriedade',
              type: 'string',
              required: false,
              
              isList: false,
            },
            {
              componentId: 'inputhidden_documentos_url',
              name: 'url',
              type: 'string',
              required: false,
              
              isList: false,
            },
          ],
        },
      ],
    },
  ],
  states: [
    {
      id: 'state_card_items',
      name: 'cardDetailsItems',
      type: 'any',
      imports: [],
      defaultValue: '[]',
    },
    {
      id: 'state_modalidade_val',
      name: 'radioModalidadeInteresseValue',
      type: 'string | undefined',
      imports: [],
      defaultValue: '',
    },
    {
      id: 'state_modalidade_opt',
      name: 'radioModalidadeInteresseOptions',
      type: 'IGRPOptionsProps[]',
      imports: [],
      defaultValue: '[]',
    },
    {
      id: 'state_finalidade_val',
      name: 'radioFinalidadeAluguelValue',
      type: 'string | undefined',
      imports: [],
      defaultValue: '',
    },
    {
      id: 'state_finalidade_opt',
      name: 'radioFinalidadeAluguelOptions',
      type: 'IGRPOptionsProps[]',
      imports: [],
      defaultValue: '[]',
    },
    {
      id: 'state_selectedUtente',
      name: 'selectedUtenteValue',
      type: 'string | undefined',
      imports: [],
      defaultValue: '',
    },
    {
      id: 'state_selectedGeo',
      name: 'selectedGeografiaValue',
      type: 'string | undefined',
      imports: [],
      defaultValue: '',
    },
    {
      id: 'state_error_contact',
      name: 'contactsError',
      type: 'string | undefined',
      imports: [],
      defaultValue: '',
    },
    {
      id: 'state_is_uploading_documentos',
      name: 'isUploadingDocumentos',
      type: 'any',
      imports: [],
      defaultValue: '{}',
    },
    {
      id: 'state_uploaded_files_documentos',
      name: 'uploadedFilesDocumentos',
      type: 'any',
      imports: [],
      defaultValue: '{}',
    },
    {
      id: 'state_selected_fracao_id',
      name: 'selectedFracaoId',
      type: 'string | undefined',
      imports: [],
      defaultValue: 'undefined',
    },
  ],
  functions: [
    {
      id: 'fnc_submit_manifestacao',
      name: 'handleFormSubmit',
      code: "const documentosOptions = Array.isArray(selectidTipoDocumentoOptions) ? selectidTipoDocumentoOptions : [];\nconst documentosClean = Array.isArray(values?.documentos)\n  ? values.documentos\n      .filter((d: any) => !!d?.url && String(d?.idTipoDocumento ?? '').trim() !== '')\n      .map((d: any) => ({\n        ...d,\n        idTipoDocumento: d?.idTipoDocumento,\n        descricaoTipoDocumento: documentosOptions.find((opt: any) => String(opt?.value) === String(d?.idTipoDocumento))?.label,\n      }))\n  : [];\n\nif (values?.modalidade !== 'ALUGUEL') {\n  delete (values as any).finalidade;\n}\n\nconst payload = {\n  ...values,\n  documentos: documentosClean,\n};\n\nconst router = useRouter();\n\ntry {\n  if(!selectedFracaoId) {\n    router.push('/imoveis');\n    return;\n  }\n  await submitManifestacaoInteresse(selectedFracaoId, payload);\n  igrpToast({ title: 'Sucesso', description: 'Manifestação gravada com sucesso', type: 'success' });\n  router.push(`/imoveis/${fracao?.idImovel}`);\n } catch (error: any) {\n  igrpToast({ title: 'Erro', description: `Ocorreu um erro ao enviar a manifestação. [${error?.message}]`, type: 'error' });\n  console.log(error);\n}\n",
      returnValue: {
        type: 'void',
        isNullable: true,
        isList: false,
      },
      imports: [
        {
          namespace: "import { submitManifestacaoInteresse } from '@/app/(myapp)/functions/imovel'",
          id: 'import_submit_manifestacao',
        },
      ],
      arguments: [
        {
          id: '1',
          name: 'values',
          type: 'z.infer<any>',
          isList: false,
          isOptional: false,
          isInterface: false,
          isFunction: false,
          isState: false,
          functionParameters: [],
        },
      ],
      isAsync: true,
    },
    {
      id: 'fnc_upload_documentos',
      name: 'handleUploadDocumentoFile',
      code: "const file = e?.target?.files?.[0];\nif (!file) return;\n\nsetUploadedFilesDocumentos((prev: any) => ({\n  ...prev,\n  [index]: { file, uploaded: false },\n}));\n\nsetIsUploadingDocumentos((prev: any) => ({\n  ...prev,\n  [index]: true,\n}));\n\ntry {\n  const currentFormData = formformManifestacaoRef.current?.getValues();\n  const uploadResponse = await uploadDocument({ file });\n\n  setUploadedFilesDocumentos((prev: any) => ({\n    ...prev,\n    [index]: {\n      file,\n      uploaded: true,\n      url: uploadResponse.fileId,\n    },\n  }));\n\n  const updatedDocumentos = [...(currentFormData?.documentos || [])];\n  updatedDocumentos[index] = {\n    ...updatedDocumentos[index],\n    url: uploadResponse.fileId,\n  };\n\n  setFormManifestacaoData((prev: any) => ({\n    ...prev,\n    ...currentFormData,\n    documentos: updatedDocumentos,\n  }));\n\n  igrpToast({ title: 'Sucesso', description: 'Arquivo enviado com sucesso!', type: 'success' });\n} catch (error) {\n  igrpToast({ title: 'Erro', description: 'Erro ao enviar arquivo. Tente novamente.', type: 'error' });\n  setUploadedFilesDocumentos((prev: any) => { const ns = { ...prev }; delete ns[index]; return ns; });\n} finally {\n  setIsUploadingDocumentos((prev: any) => ({ ...prev, [index]: false }));\n}\n",
      returnValue: {
        type: 'void',
        isNullable: true,
        isList: false,
      },
      imports: [
        {
          namespace: "import {uploadDocument} from '@/app/(myapp)/hooks/use-contribuinte'",
          id: 'import_upload_documentos',
        },
      ],
      isAsync: true,
      arguments: [
        {
          id: '1',
          name: 'index',
          type: 'number',
          isList: false,
          isOptional: false,
          isInterface: false,
          isFunction: false,
          isState: false,
          functionParameters: [],
        },
        {
          id: '2',
          name: 'e',
          type: 'any',
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
  imports: [
    {
      id: 'import_enums_multi',
      namespace: "import { useMultipleEnumOptions } from '@/app/(myapp)/hooks/use-enum-options'",
    },
    {
      id: 'import_enums_single',
      namespace: "import { useEnumOptions } from '@/app/(myapp)/hooks/use-enum-options'",
    },
    {
      id: 'import_combobox',
      namespace: "import { useComboBox } from '@/app/(myapp)/hooks/use-combobox'",
    },
  ],
  components: {
    id: 'component_root',
    tag: 'component_root',
    componentName: 'component',
    
    properties: {
      commonProperties: {
        generateReference: false,
      },
    },
    childProperties: {},
    children: [
      {
        id: 'form_manifestacao',
        tag: 'formManifestacao',
        componentName: 'form',
        
        type: 'group',
        children: [
          {
            id: 'tabs_manifestacao',
            tag: 'tabs1',
            componentName: 'tabs',
            
            children: [
              {
                id: 'tab_manifestacao',
                tag: 'tabsItemManifestacao',
                componentName: 'tabsItem',
                
                properties: {
                  value: 'tabsItemManifestacao',
                  
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
                children: [
                  {
                    id: 'carddetails_fracao',
                    tag: 'cardDetailsFracao',
                    componentName: 'cardDetails',
                    
                    children: [],
                    data: {
                      items: {
                        state: {
                          id: '',
                          name: 'cardDetailsItems',
                          type: '',
                          imports: [],
                          generate: false,
                        },
                      },
                    },
                    properties: {
                      title: 'Detalhes da Fração',
                      description: '',
                      commonProperties: {
                        generateReference: false,
                      },
                      items: [],
                    },
                    childProperties: {},
                    style: {
                      spacing: {
                        margin: {
                          top: {
                            value: '0',
                            unit: 'px',
                          },
                          right: {
                            value: '0',
                            unit: 'px',
                          },
                          bottom: {
                            value: '0',
                            unit: 'px',
                          },
                          left: {
                            value: '0',
                            unit: 'px',
                          },
                        },
                        padding: {
                          top: {
                            value: '0',
                            unit: 'px',
                          },
                          right: {
                            value: '0',
                            unit: 'px',
                          },
                          bottom: {
                            value: '0',
                            unit: 'px',
                          },
                          left: {
                            value: '0',
                            unit: 'px',
                          },
                        },
                      },
                    },
                  },
                  {
                    id: 'grid_manifestacao_radio',
                    tag: 'grid-manifestacao',
                    componentName: 'grid',
                    
                    properties: {
                      gap: 4,
                      variant: {
                        default: 'cols1',
                        md: 'cols2',
                        lg: 'cols2',
                      },
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    childProperties: {},
                    children: [
                      {
                        id: 'radio_modalidade',
                        tag: 'ModalidadeInteresse',
                        componentName: 'radio',
                        
                        data: {
                          value: {
                            state: {
                              id: '',
                              name: 'radioModalidadeInteresseValue',
                              type: 'string | undefined',
                              imports: [],
                              generate: false,
                            },
                          },
                          options: {
                            state: {
                              id: '',
                              name: 'radioModalidadeInteresseOptions',
                              type: 'IGRPOptionsProps[]',
                              imports: [],
                              generate: false,
                            },
                          },
                        },
                        properties: {
                          
                          variant: 'default',
                          required: true,
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'radio_finalidade',
                        tag: 'FinalidadeAluguel',
                        componentName: 'radio',
                        
                        data: {
                          value: {
                            state: {
                              id: '',
                              name: 'radioFinalidadeAluguelValue',
                              type: 'string | undefined',
                              imports: [],
                              generate: false,
                            },
                          },
                          options: {
                            state: {
                              id: '',
                              name: 'radioFinalidadeAluguelOptions',
                              type: 'IGRPOptionsProps[]',
                              imports: [],
                              generate: false,
                            },
                          },
                        },
                        properties: {
                          
                          variant: 'default',
                          required: true,
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                        rules: [
                          {
                            type: 'visibility',
                            condition: "radioModalidadeInteresseValue === 'ALUGUEL'",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: 'tab_requerente',
                tag: 'tabsItemRequerente',
                componentName: 'tabsItem',
                
                properties: {
                  value: 'tabsItemRequerente',
                  
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
                children: [
                  {
                    id: 'grid_requerente',
                    tag: 'grid-requerente',
                    componentName: 'grid',
                    
                    properties: {
                      gap: 4,
                      variant: {
                        default: 'cols1',
                        md: 'cols1',
                        lg: 'cols1',
                      },
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    children: [
                      {
                        id: 'grid_cgy6jw',
                        tag: 'grid1',
                        componentName: 'grid',
                        
                        type: 'group',
                        children: [
                          {
                            id: 'combobox_tipopessoa',
                            tag: 'TipoPessoa',
                            componentName: 'combobox',
                            
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  type: 'string | undefined',
                                  name: 'selectTipoPessoaValue',
                                  defaultValue: '',
                                  imports: [],
                                  generate: true,
                                },
                              },
                              options: {
                                state: {
                                  id: '',
                                  type: 'IGRPOptionsProps[]',
                                  name: 'selectTipoPessoaOptions',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              
                              variant: 'single',
                              placeholder: 'Select an option...',
                              required: true,

                              showSearch: true,
                              iconProperties: {
                                showIcon: false,
                              },
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              options: [],
                            },
                            childProperties: {},
                          },
                          {
                            id: 'combobox_tipodocumento',
                            tag: 'TipoDocumento',
                            componentName: 'combobox',
                            
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  type: 'string | undefined',
                                  name: 'selectTipoDocumentoValue',
                                  defaultValue: '',
                                  imports: [],
                                  generate: true,
                                },
                              },
                              options: {
                                state: {
                                  id: '',
                                  type: 'IGRPOptionsProps[]',
                                  name: 'selectTipoDocumentoOptions',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              
                              variant: 'single',
                              placeholder: 'Select an option...',
                              required: true,

                              showSearch: true,
                              iconProperties: {
                                showIcon: false,
                              },
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
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
                            default: 'cols2',
                            md: 'cols2',
                            lg: 'cols2',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {
                          className: 'col-span-1',
                        },
                      },
                      {
                        id: 'grid_yfv3jg',
                        tag: 'grid2',
                        componentName: 'grid',
                        
                        type: 'group',
                        children: [
                          {
                            id: 'input_nome',
                            tag: 'Nome',
                            componentName: 'inputText',
                            
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  name: 'inputNomeValue',
                                  type: 'string',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              
                              required: true,
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
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
                                  "selectTipoPessoaValue === 'CIDADAO' || selectTipoPessoaValue === 'EMPRESA'",
                              },
                            ],
                          },
                          {
                            id: 'combobox_sexo',
                            tag: 'Sexo',
                            componentName: 'combobox',
                            
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  type: 'string | undefined',
                                  name: 'selectSexoValue',
                                  defaultValue: '',
                                  imports: [],
                                  generate: true,
                                },
                              },
                              options: {
                                state: {
                                  id: '',
                                  type: 'IGRPOptionsProps[]',
                                  name: 'selectSexoOptions',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              
                              variant: 'single',
                              placeholder: 'Select an option...',
                              required: true,

                              showSearch: true,
                              iconProperties: {
                                showIcon: false,
                              },
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              options: [],
                            },
                            childProperties: {},
                            rules: [
                              {
                                type: 'visibility',
                                condition: "selectTipoPessoaValue === 'CIDADAO'",
                              },
                            ],
                          },
                          {
                            id: 'date_nascimento',
                            tag: 'dataNascimento',
                            componentName: 'datePickerSingle',
                            
                            data: {},
                            properties: {
                              date: '',
                              
                              placeholder: 'Please select a date...',
                              required: true,
                              dateFormat: 'dd/MM/yyyy',
                              numberOfMonths: '1',
                              pagedNavigation: false,
                              reverseMonths: false,
                              captionLayout: 'dropdown',
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                            rules: [
                              {
                                type: 'visibility',
                                condition: "selectTipoPessoaValue === 'CIDADAO'",
                              },
                            ],
                          },
                          {
                            id: 'combobox_estadocivil',
                            tag: 'EstadoCivil',
                            componentName: 'combobox',
                            
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  type: 'string | undefined',
                                  name: 'selectEstadoCivilValue',
                                  defaultValue: '',
                                  imports: [],
                                  generate: true,
                                },
                              },
                              options: {
                                state: {
                                  id: '',
                                  type: 'IGRPOptionsProps[]',
                                  name: 'selectEstadoCivilOptions',
                                  defaultValue: '[]',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              
                              variant: 'single',
                              placeholder: 'Select an option...',
                              required: true,

                              showSearch: true,
                              iconProperties: {
                                showIcon: false,
                              },
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              options: [],
                            },
                            childProperties: {},
                            rules: [
                              {
                                type: 'visibility',
                                condition: "selectTipoPessoaValue === 'CIDADAO'",
                              },
                            ],
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          gap: 4,
                          variant: {
                            default: 'cols4',
                            md: 'cols2',
                            lg: 'cols4',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {
                          className: 'col-span-1',
                        },
                      },
                      {
                        id: 'search_utente',
                        tag: 'SearchUtenteBar1',
                        componentName: 'SearchUtenteBar',
                        
                        children: [],
                        interactions: {},
                        data: {},
                        properties: {
                          customProperties: {},
                        },
                        childProperties: {},
                      },
                      {
                        id: 'nif_search_placeholder',
                        tag: 'nifSearch',
                        componentName: 'paragraph',
                        
                        properties: {
                          content: 'Dados do Requerente',
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'separator_6ry49e',
                        tag: 'separator1',
                        componentName: 'separator',
                        
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          orientation: 'horizontal',
                          commonProperties: {},
                        },
                        childProperties: {},
                      },
                      {
                        id: 'grid_4d24bf',
                        tag: 'grid4',
                        componentName: 'grid',
                        
                        type: 'group',
                        children: [
                          {
                            id: 'input_pai',
                            tag: 'nomePai',
                            componentName: 'inputText',
                            
                            data: {},
                            properties: {
                              
                              required: false,
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                            rules: [
                              {
                                type: 'visibility',
                                condition: "selectTipoPessoaValue === 'CIDADAO'",
                              },
                            ],
                          },
                          {
                            id: 'input_mae',
                            tag: 'nomeMae',
                            componentName: 'inputText',
                            
                            data: {},
                            properties: {
                              
                              required: false,
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                            rules: [
                              {
                                type: 'visibility',
                                condition: "selectTipoPessoaValue === 'CIDADAO'",
                              },
                            ],
                          },
                          {
                            id: 'input_reg_com',
                            tag: 'numRegistoComercial',
                            componentName: 'inputText',
                            
                            data: {},
                            properties: {
                              
                              required: true,
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {},
                            rules: [
                              {
                                type: 'visibility',
                                condition: "selectTipoPessoaValue === 'EMPRESA'",
                              },
                            ],
                          },
                          {
                            id: 'input_nif',
                            tag: 'nif',
                            componentName: 'inputText',
                            
                            data: {},
                            properties: {
                              
                              required: true,
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
                          gap: 4,
                          variant: {
                            default: 'cols2',
                            md: 'cols2',
                            lg: 'cols2',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {
                          className: 'col-span-1',
                        },
                      },
                      {
                        id: 'input_num_func',
                        tag: 'numFuncionarioInss',
                        componentName: 'inputText',
                        
                        data: {},
                        properties: {
                          
                          required: false,
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
                      {
                        id: 'grid_qex31q',
                        tag: 'grid5',
                        componentName: 'grid',
                        
                        type: 'group',
                        children: [
                          {
                            id: 'search_localizacao',
                            tag: 'SearchGeografiaBar1',
                            componentName: 'SearchGeografiaBar',
                            
                            children: [],
                            interactions: {},
                            data: {
                              text: {
                                state: {
                                  id: '',
                                  name: 'selectedGeografiaValue',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                            },
                            properties: {
                              customProperties: {
                                text: 'Localização',
                              },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'input_endereco',
                            tag: 'endereco',
                            componentName: 'inputText',
                            
                            data: {},
                            properties: {
                              
                              required: true,
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
                          gap: 4,
                          variant: {
                            default: 'cols2',
                            md: 'cols2',
                            lg: 'cols2',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {
                          className: 'col-span-1',
                        },
                      },
                      {
                        id: 'paragraph_r2mx02',
                        tag: 'paragraph1',
                        componentName: 'paragraph',
                        
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          content: 'Contactos',
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'separator_3xotzg',
                        tag: 'separator2',
                        componentName: 'separator',
                        
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          orientation: 'horizontal',
                          commonProperties: {},
                        },
                        childProperties: {},
                      },
                      {
                        id: 'grid_uzj63l',
                        tag: 'grid6',
                        componentName: 'grid',
                        
                        type: 'group',
                        children: [
                          {
                            id: 'input_telefone',
                            tag: 'Telefone',
                            componentName: 'inputText',
                            
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  name: 'inputTelefoneValue',
                                  type: 'string',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              
                              required: false,
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
                          {
                            id: 'input_email',
                            tag: 'Email',
                            componentName: 'inputText',
                            
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  name: 'inputEmailValue',
                                  type: 'string',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              
                              required: false,
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
                          {
                            id: 'input_telemovel',
                            tag: 'Telemovel',
                            componentName: 'inputText',
                            
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  name: 'inputTelemovelValue',
                                  type: 'string',
                                  imports: [],
                                  generate: true,
                                },
                              },
                            },
                            properties: {
                              
                              required: false,
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
                          gap: 4,
                          variant: {
                            default: 'cols3',
                            md: 'cols3',
                            lg: 'cols3',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {
                          className: 'col-span-1',
                        },
                      },
                    ],
                    childProperties: {
                      className: 'col-span-1',
                    },
                  },
                ],
              },
              {
                id: 'tab_anexos',
                tag: 'tabsItemAnexos',
                componentName: 'tabsItem',
                
                properties: {
                  value: 'tabsItemAnexos',
                  
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
                children: [
                  {
                    id: 'formlist_documentos',
                    tag: 'documentos',
                    componentName: 'formList',
                    
                    childProperties: {},
                    children: [
                      {
                        id: 'grid_documentos',
                        tag: 'grid3',
                        componentName: 'grid',
                        
                        childProperties: {},
                        children: [
                          {
                            id: 'combobox_id_tipo_doc',
                            tag: 'idTipoDocumento',
                            componentName: 'combobox',
                            
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  type: 'string | undefined',
                                  name: 'select{{id}}Value',
                                  defaultValue: '{{value}}',
                                  imports: [],
                                  generate: true,
                                },
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
                              },
                            },
                            properties: {
                              
                              variant: 'single',
                              placeholder: 'Select an option...',
                              required: false,

                              showSearch: true,
                              iconProperties: {
                                showIcon: false,
                                iconName: 'CornerDownRight',
                              },
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              options: [],
                            },
                            childProperties: {},
                          },
                          {
                            id: 'combobox_obrigatoriedade',
                            tag: 'Obrigatorio',
                            componentName: 'combobox',
                            
                            data: {
                              value: {
                                state: {
                                  id: '',
                                  type: 'string | undefined',
                                  name: 'select{{id}}Value',
                                  defaultValue: '{{value}}',
                                  imports: [],
                                  generate: true,
                                },
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
                              },
                            },
                            properties: {
                              
                              variant: 'single',
                              placeholder: 'Select an option...',
                              required: false,

                              showSearch: true,
                              iconProperties: {
                                showIcon: false,
                              },
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              options: [],
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputfile_doc',
                            tag: 'documento',
                            componentName: 'inputFile',
                            
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: {
                                  type: 'function',
                                  fnCustomCode: {
                                    imports: [],
                                  },
                                  fnCustomSet: '(e: any)=>handleUploadDocumentoFile(index,e)',
                                },
                                action: {},
                              },
                            },
                            properties: {
                              
                              accept: 'application/pdf',
                              required: false,
                              dataProperties: {
                                isVirtual: true,
                                isType: false,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              multiple: false,
                            },
                            childProperties: {},
                            rules: [
                              {
                                type: 'visibility',
                                condition: 'isEditingDocumentos[index]',
                              },
                            ],
                          },
                          {
                            id: 'inputhidden_documentos_url',
                            tag: 'url',
                            componentName: 'inputHidden',
                            
                            properties: {
                              
                              required: false,
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
                      },
                    ],
                    data: {
                      defaultItem: {
                        state: {
                          id: '',
                          type: '{{type}}',
                          name: 'formList{{id}}Default',
                          defaultValue: '{}',
                          imports: [],
                          generate: true,
                        },
                      },
                    },
                    properties: {
                      
                      iconProperties: {
                        showIcon: true,
                        addButtonIconName: 'Plus',
                        iconName: 'Blocks',
                      },
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                  },
                ],
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              variant: 'default',
              badgePlacement: 'end',
              orientation: 'vertical',
              iconProperties: {
                showIcon: false,
                iconPlacement: 'start',
              },
              commonProperties: {
                generateReference: false,
              },
            },
            childProperties: {},
          },
        ],
        interactions: {
          onLoad: {
            type: 'function',
            function: {
              type: 'function',
              fnCustomCode: {
                imports: [
                  {
                    id: 'import_router',
                    namespace: 'import { useRouter } from "next/navigation"',
                  },
                  {
                    id: 'import_enums_multi',
                    namespace:
                      "import { useMultipleEnumOptions } from '@/app/(myapp)/hooks/use-enum-options'",
                  },
                  {
                    id: 'import_enums_single',
                    namespace:
                      "import { useEnumOptions } from '@/app/(myapp)/hooks/use-enum-options'",
                  },
                  {
                    id: 'import_combobox',
                    namespace: "import { useComboBox } from '@/app/(myapp)/hooks/use-combobox'",
                  },
                ],
                fnCode:
                  "const router = useRouter();\n\nuseEffect(() => {\n  if (shouldSubmit) {\n    formformManifestacaoRef.current?.submit();\n    onAfterSubmit?.();\n  }\n}, [shouldSubmit, onAfterSubmit]);\n\nuseEffect(() => {\n  if (initialData) {\n    setFormManifestacaoData({\n      ...initialData,\n    });\n  }\n}, [initialData]);\n\nuseEffect(() => {\n  if (!fracao) return;\n  const items = [\n    {  content: fracao?.codigo ?? '' },\n    {  content: fracao?.tipologia ?? '' },\n    {  content: typeof fracao?.area === 'number' ? String(fracao.area) : fracao?.area ?? '' },\n    {  content: (typeof fracao?.valorFracao === 'number' ? fracao.valorFracao : fracao?.valorFracao ?? '-') + ' F CFA' },\n    {  content: fracao?.estadoFracaoDescricao ?? fracao?.estadoFracao ?? '' },\n    {  content: fracao?.complementoLocalizacao ?? '' },\n  ];\n  setSelectedFracaoId(fracao?.id);\n  setCardDetailsItems(items);\n}, [fracao]);\n\nconst { options, isLoading: isLoadingEnums } = useMultipleEnumOptions([ 'ModalidadeInteresse', 'FinalidadeAluguel', 'TipoPessoa', 'TipoDocumento', 'Sexo', 'EstadoCivil' ]);\nconst { options: obrigOptions, isLoading: isLoadingObrig } = useEnumOptions('Obrigatorio');\nconst { data: tiposDocumentoProc, isLoading: loadingTiposDoc } = useComboBox('tipos-documento-processo', { codigoProcesso: 'P5.1.2' });\n\nuseEffect(() => {\n  if (isLoadingEnums) return;\n  setRadioModalidadeInteresseOptions(options['ModalidadeInteresse'] || []);\n  setRadioFinalidadeAluguelOptions(options['FinalidadeAluguel'] || []);\n  setSelectTipoPessoaOptions(options['TipoPessoa'] || []);\n  setSelectTipoDocumentoOptions(options['TipoDocumento'] || []);\n  setSelectSexoOptions(options['Sexo'] || []);\n  setSelectEstadoCivilOptions(options['EstadoCivil'] || []);\n}, [isLoadingEnums]);\n\nuseEffect(() => {\n  if (isLoadingObrig) return;\n  setSelectObrigatorioOptions(obrigOptions || []);\n}, [isLoadingObrig]);\n\nuseEffect(() => {\n  if (loadingTiposDoc) return;\n  setSelectidTipoDocumentoOptions(tiposDocumentoProc?.map((item: any) => ({ value: item?.value, label: item?.label })) || []);\n}, [loadingTiposDoc, tiposDocumentoProc]);\n",
              },
            },
            action: {},
          },
          onSubmit: {
            type: 'function',
            function: {
              fnCustomSet: '',
              type: 'function',
              fnCustomCode: {
                imports: [],
              },
              fnName: 'handleFormSubmit',
            },
            action: {
              actionCustomSet: '(e) => {}',
            },
          },
        },
        data: {
          defaultValues: {
            state: {
              id: '',
              type: 'any',
              name: 'formManifestacaoData',
              defaultValue: 'initFormManifestacao',
              imports: [],
              generate: true,
            },
          },
        },
        dataType: 'formManifestacao',
        childProperties: {},
      },
    ],
  },
};
beforeAll(async () => {
  await initComponents();
  setEngineConfiguration({ environment: 'development' });
});

describe('Component module', () => {
  it('should save the component configuration file', async () => {
    await newComponent(componentConfig2, OUTPUT_DIR);
  });
});
