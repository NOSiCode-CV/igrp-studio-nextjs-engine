import { initComponents, newComponent, setEngineConfiguration } from '../src';
import { ComponentConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const componentConfig2: ComponentConfig = {
  type: 'component',
  scope: 'page',
  pagePath: 'imoveis',
  pageName: 'imoveis',
  description: 'ImovelForm',
  name: 'imovelForm',
  id: 'imovelForm_component',
  args: [
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
      id: '3',
      name: 'initialData',
      type: 'any',
      isList: false,
      isOptional: true,
      isInterface: false,
      isFunction: false,
      isState: false,
    },
    {
      id: '5',
      name: 'shouldSubmit',
      type: 'boolean',
      isList: false,
      isOptional: false,
      isInterface: false,
      isFunction: false,
      isState: false,
    },
    {
      id: '6',
      name: 'onAfterSubmit',
      type: 'void',
      isList: false,
      isOptional: false,
      isInterface: false,
      isFunction: true,
      isState: false,
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
    children: [
      {
        id: 'form_imovel',
        tag: 'form1',
        componentName: 'form',

        type: 'group',
        children: [
          {
            id: 'columns_top',
            tag: 'columns1',
            componentName: 'columns',

            type: 'group',
            children: [
              {
                id: 'column_menu',
                tag: 'column1',
                componentName: 'column',

                children: [
                  {
                    id: 'menu_nav',
                    tag: 'menuNavigation1',
                    componentName: 'menuNavigation',

                    type: 'group',
                    children: [
                      {
                        id: 'menu_item_basicas',
                        tag: 'menuNavigationItem1',
                        componentName: 'menuNavigationItem',

                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'identificacao',

                          iconProperties: {
                            icon: 'Building',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menu_item_fracao',
                        tag: 'menuNavigationItem2',
                        componentName: 'menuNavigationItem',

                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'fracao',

                          iconProperties: {
                            icon: 'Blocks',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menu_item_anexos',
                        tag: 'menuNavigationItem3',
                        componentName: 'menuNavigationItem',

                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'anexos',

                          iconProperties: {
                            icon: 'Attachment',
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
                    data: {
                      activeSection: {
                        state: {
                          id: '',
                          type: 'string',
                          name: 'menuNavigationmenuNavigation1ActiveSection',
                          defaultValue: '',
                          imports: [],
                          generate: true,
                        },
                        value: {
                          id: '',
                          code: '',
                        },
                      },
                      badgeContent: {
                        state: {
                          id: '',
                          name: 'menuNavigation1BadgeContent',
                          type: '',
                          imports: [],
                          generate: false,
                        },
                      },
                    },
                    properties: {
                      title: 'Menu',
                      badgeColor: 'secondary',
                      badgeVariant: 'solid',
                      badgeContent: 'Novo',
                      showChevron: true,
                      commonProperties: {
                        generateReference: false,
                      },
                      isStickyTop: true,
                      className: 'top-32',
                    },
                    childProperties: {},
                  },
                ],
                interactions: {},
                allowTypes: false,
                data: {},
                properties: {
                  variant: {
                    default: 'span1',
                  },
                  commonProperties: {
                    generateReference: false,
                  },
                },
                childProperties: {},
                style: {},
              },
              {
                id: 'column_content',
                componentName: 'column',

                properties: {
                  variant: {
                    default: 'span3',
                  },
                  commonProperties: {
                    generateReference: false,
                  },
                },
                children: [
                  {
                    id: 'card_identificacao',
                    tag: 'identificacao',
                    componentName: 'card',

                    type: 'group',
                    children: [
                      {
                        id: 'cardheader_basicas',
                        tag: 'cardHeader1',
                        componentName: 'cardHeader',

                        children: [
                          {
                            id: 'headline_basicas',
                            tag: 'headline1',
                            componentName: 'headline',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              title: 'Informações Básicas',
                              description: 'Dados principais do imóvel',
                              variant: 'h5',
                              roleColor: 'solid',
                              color: 'primary',
                              iconProperties: {
                                showIcon: true,
                                iconName: 'Building',
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              className: 'mt-3',
                            },
                            childProperties: {},
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          variant: '',
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'cardcontent_basicas',
                        tag: 'cardContent1',
                        componentName: 'cardContent',

                        children: [
                          {
                            id: 'grid_basicas',
                            tag: 'grid1',
                            componentName: 'grid',

                            type: 'group',
                            children: [
                              {
                                id: 'inputtext_codigo',
                                tag: 'codigo',
                                componentName: 'inputText',

                                type: 'group',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {

                                  iconProperties: {
                                    showIcon: false,
                                  },
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
                              {
                                id: 'combobox_localizacao',
                                tag: 'localizacao',
                                componentName: 'combobox',

                                type: 'group',
                                children: [],
                                interactions: {},
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
                                  required: true,
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
                                  gridSize: 'full',
                                  options: [],
                                },
                                childProperties: {},
                              },
                              {
                                id: 'inputtext_morada',
                                tag: 'complementoLocalizacao',
                                componentName: 'inputText',

                                type: 'group',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {

                                  iconProperties: {
                                    showIcon: false,
                                  },
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
                                id: 'inputnumber_valor',
                                tag: 'valor',
                                componentName: 'inputNumber',

                                type: 'group',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {

                                  iconProperties: {
                                    showIcon: false,
                                  },
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
                                default: 'cols2',
                                md: 'cols2',
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
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          commonProperties: {
                            generateReference: true,
                          },
                        },
                        childProperties: {},
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    childProperties: {},
                  },
                  {
                    id: 'headline_factores',
                    tag: 'headlineFactores',
                    componentName: 'headline',

                    type: 'group',
                    children: [],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      title: 'Factores',
                      description: 'Lista de factores da fracção',
                      variant: 'h5',
                      roleColor: 'solid',
                      color: 'primary',
                      iconProperties: {
                        showIcon: true,
                        iconName: 'Blocks',
                      },
                      commonProperties: {
                        generateReference: false,
                      },
                      className: 'mt-3',
                    },
                    childProperties: {},
                  },
                  {
                    id: 'formlist_fracao',
                    tag: 'fracao',
                    componentName: 'formList',

                    type: 'group',
                    children: [
                      {
                        id: 'grid_fracao',
                        tag: 'grid2',
                        componentName: 'grid',

                        type: 'group',
                        children: [
                          {
                            id: 'inputtext_fracao_codigo',
                            tag: 'codigo',
                            componentName: 'inputText',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: {
                                showIcon: false,
                              },
                              required: true,
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              gridSize: 'full',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputtext_fracao_rua',
                            tag: 'complementoLocalizacao',
                            componentName: 'inputText',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: {
                                showIcon: false,
                              },
                              required: false,
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              gridSize: 'full',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputnumber_fracao_valor',
                            tag: 'valor',
                            componentName: 'inputNumber',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: {
                                showIcon: false,
                              },
                              required: false,
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              gridSize: 'full',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'combobox_fracao_tipologia',
                            tag: 'tipologia',
                            componentName: 'combobox',

                            type: 'group',
                            children: [],
                            interactions: {},
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
                              gridSize: 'full',
                              options: [],
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputnumber_fracao_area',
                            tag: 'area',
                            componentName: 'inputNumber',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: {
                                showIcon: false,
                              },
                              required: false,
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              gridSize: 'full',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputfile_fracao_docs',
                            tag: 'fracaoDocumentos',
                            componentName: 'inputFile',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                'function': {
                                  type: 'function',
                                  fnCustomCode: {
                                    imports: [],
                                  },
                                  fnCustomSet: '(e)=>handleUploadFile(index,e)',
                                },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: {
                                showIcon: false,
                              },
                              required: false,
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              multiple: true,
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
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
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

                      description: 'Informações da fracção',
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: '',
                      computeLabel: {
                        code: '${item.codigo} - ${item.tipologia} - ${item.area}',
                      },
                      iconProperties: {
                        showIcon: true,
                        addButtonIconName: 'Plus',
                        iconName: 'Blocks',
                      },
                      commonProperties: {
                        generateReference: true,
                      },
                    },
                    childProperties: {},
                  },
                  {
                    id: 'headline_documentos',
                    tag: 'headlineDocumentos',
                    componentName: 'headline',

                    type: 'group',
                    children: [],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      title: 'Documentos',
                      description: 'Anexos e documentos do imóvel',
                      variant: 'h5',
                      roleColor: 'solid',
                      color: 'primary',
                      iconProperties: {
                        showIcon: true,
                        iconName: 'FileText',
                      },
                      commonProperties: {
                        generateReference: false,
                      },
                      className: 'mt-3',
                    },
                    childProperties: {},
                  },
                  {
                    id: 'formlist_anexos',
                    tag: 'anexos',
                    componentName: 'formList',

                    type: 'group',
                    children: [
                      {
                        id: 'grid_anexos',
                        tag: 'grid3',
                        componentName: 'grid',

                        type: 'group',
                        children: [
                          {
                            id: 'inputfile_doc',
                            tag: 'documento',
                            componentName: 'inputFile',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                'function': {
                                  type: 'function',
                                  fnCustomCode: {
                                    imports: [],
                                  },
                                  fnCustomSet: '(e)=>handleUploadFile(index,e)',
                                },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: {
                                showIcon: false,
                              },
                              required: false,
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              multiple: false,
                            },
                            childProperties: {},
                          },
                          {
                            id: 'uploadstate_anexos',
                            tag: 'UploadState1',
                            componentName: 'UploadState',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {
                              isUploading: {
                                state: {
                                  id: '',
                                  name: 'isUploading',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                              uploadedFiles: {
                                state: {
                                  id: '',
                                  name: 'uploadedFiles',
                                  type: '',
                                  imports: [],
                                  generate: false,
                                },
                              },
                              index: {
                                value: {
                                  id: '',
                                  code: 'index',
                                },
                              },
                            },
                            properties: {
                              customProperties: {},
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputtext_tipo_doc',
                            tag: 'descricaoTipoDocumento',
                            componentName: 'inputText',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: {
                                showIcon: false,
                              },
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
                            default: 'cols2',
                            md: 'cols2',
                          },
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
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

                      description: 'Documentos do imóvel',
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: '',
                      computeLabel: {
                        code: '${item.descricaoTipoDocumento}',
                      },
                      iconProperties: {
                        showIcon: true,
                        addButtonIconName: 'Plus',
                        iconName: 'FileText',
                      },
                      commonProperties: {
                        generateReference: true,
                      },
                    },
                    childProperties: {},
                  },
                ],
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              spaceX: '3',
              spaceY: '3',
              commonProperties: {},
            },
            childProperties: {},
          },
        ],
        interactions: {
          onSubmit: {
            type: 'function',
            'function': {
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
        allowTypes: false,
        data: {
          defaultValues: {
            state: {
              id: '',
              type: 'any',
              name: 'formImovelData',
              defaultValue: 'initFormImovel',
              imports: [],
              generate: true,
            },
          },
        },
        properties: {
          commonProperties: {
            generateReference: false,
          },
        },
        dataType: 'formImovel',
        childProperties: {},
      },
    ],
    interactions: {
      onLoad: {
        type: 'function',
        'function': {
          type: 'function',
          fnCustomCode: {
            imports: [
              {
                id: 'import_router',
                namespace: 'import { useRouter } from "next/navigation"',
              },
            ],
            fnCode:
              'const router = useRouter()\n\nuseEffect(() => {\n  if (shouldSubmit) {\n    formform1Ref.current?.submit();\n    onAfterSubmit?.();\n  }\n}, [shouldSubmit, onAfterSubmit]);\n\nuseEffect(() => {\n  if (initialData) {\n    setFormImovelData({\n      ...initialData,\n    });\n    setMenuNavigation1BadgeContent(isEdit ? \'Edição\' : \'Novo\');\n  }\n}, [initialData, isEdit]);',
          },
        },
        action: {},
      },
    },
    allowTypes: false,
    data: {},
    childProperties: {},
  },
  imports: [],
  functions: [
    {
      id: 'fnc_upload_imovel',
      name: 'handleUploadFile',
      code: 'const file = e?.target?.files?.[0];\n    if (!file) return;\n\n    setUploadedFiles((prev) => ({\n      ...prev,\n      [index]: { file, uploaded: false },\n    }));\n\n    setIsUploading((prev) => ({\n      ...prev,\n      [index]: true,\n    }));\n\n    try {\n      const currentFormData = formform1Ref.current?.getValues();\n      const uploadResponse = await uploadDocument({ file });\n\n      setUploadedFiles((prev) => ({\n        ...prev,\n        [index]: {\n          file,\n          uploaded: true,\n          url: uploadResponse.fileId,\n        },\n      }));\n\n      const updatedAnexos = [...(currentFormData?.anexos || [])];\n      updatedAnexos[index] = {\n        ...updatedAnexos[index],\n        url: uploadResponse.fileId,\n      };\n\n      setFormImovelData((prev) => ({\n        ...prev,\n        ...currentFormData,\n        anexos: updatedAnexos,\n      }));\n\n      igrpToast({\n        title: \'Sucesso\',\n        description: \'Arquivo enviado com sucesso!\',\n        type: \'success\',\n      });\n    } catch (error) {\n      igrpToast({\n        title: \'Erro\',\n        description: \'Erro ao enviar arquivo. Tente novamente.\',\n        type: \'error\',\n      });\n\n      setUploadedFiles((prev) => {\n        const newState = { ...prev };\n        delete newState[index];\n        return newState;\n      });\n    } finally {\n      setIsUploading((prev) => ({\n        ...prev,\n        [index]: false,\n      }));\n    }',
      returnValue: {
        type: 'void',
        isNullable: true,
        isList: false,
      },
      imports: [
        {
          namespace: 'import {uploadDocument} from \'@/app/(myapp)/hooks/use-contribuinte\'',
          id: 'import_upload',
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
    {
      id: 'fnc_submit_imovel',
      name: 'handleFormSubmit',
      code: 'const imovel: any = {\n  ...values,\n};\ntry {\n  // TODO: implementar createOrUpdateImovel(imovel)\n  igrpToast({\n    title: \'Sucesso\',\n    description: isEdit\n      ? \'Imóvel atualizado com sucesso\'\n      : \'Imóvel gravado com sucesso\',\n    type: \'success\',\n  });\n  router.push(\'/imoveis\');\n} catch (error: any) {\n  igrpToast({\n    title: \'Erro\',\n    description: `Ocorreu um erro ao processar o formulário. [${error.message}]`,\n    type: \'error\',\n  });\n  console.log(error);\n}\n',
      returnValue: {
        type: 'void',
        isNullable: true,
        isList: false,
      },
      imports: [],
      isAsync: true,
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
    },
  ],
  types: [
    {
      componentId: 'form_imovel',
      name: 'formImovel',
      path: '',
      fields: [
        {
          componentId: 'inputtext_codigo',
          name: 'codigo',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'combobox_localizacao',
          name: 'localizacao',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'inputtext_morada',
          name: 'complementoLocalizacao',
          type: 'string',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'inputnumber_valor',
          name: 'valor',
          type: 'number',
          required: false,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'formlist_fracao',
          name: 'fracao',
          type: 'object',
          required: false,
          defaultValue: '',
          isList: true,
          fields: [
            {
              componentId: 'inputtext_fracao_codigo',
              name: 'codigo',
              type: 'string',
              required: true,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputtext_fracao_rua',
              name: 'complementoLocalizacao',
              type: 'string',
              required: false,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputnumber_fracao_valor',
              name: 'valor',
              type: 'number',
              required: false,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'combobox_fracao_tipologia',
              name: 'tipologia',
              type: 'string',
              required: false,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputnumber_fracao_area',
              name: 'area',
              type: 'number',
              required: false,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputfile_fracao_docs',
              name: 'fracaoDocumentos',
              type: 'string',
              required: false,
              defaultValue: '',

              isList: false,
            },
          ],
        },
        {
          componentId: 'formlist_anexos',
          name: 'anexos',
          type: 'object',
          required: false,
          defaultValue: '',
          isList: true,
          fields: [
            {
              componentId: 'inputfile_doc',
              name: 'documento',
              type: 'string',
              required: false,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputtext_tipo_doc',
              name: 'descricaoTipoDocumento',
              type: 'string',
              required: false,
              defaultValue: '',

              isList: false,
            },
          ],
        },
      ],
    },
  ],
  states: [
    {
      id: 'state_menu_badge',
      name: 'menuNavigation1BadgeContent',
      type: 'string',
      imports: [],
      defaultValue: '\'Novo\'',
    },
    {
      id: 'state_is_uploading',
      name: 'isUploading',
      type: 'any',
      imports: [],
      defaultValue: '{}',
    },
    {
      id: 'state_uploaded_files',
      name: 'uploadedFiles',
      type: 'any',
      imports: [],
      defaultValue: '{}',
    },
  ],
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
