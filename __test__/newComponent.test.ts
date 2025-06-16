import { initComponents, newComponent } from '../src';
import { ComponentConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const componentConfig: ComponentConfig = {
  type: 'component',
  scope: 'page',
  pagePath: '(contribuinte)/contribuintes',
  pageName: 'contribuintes',
  description: 'ContribuinteForm',
  name: 'contribuinteForm',
  id: 'axcuwf9jty',
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
      id: '2',
      name: 'onSubmitForm',
      type: 'any',
      isList: false,
      isOptional: true,
      isInterface: false,
      isFunction: true,
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
      id: '4',
      name: 'onCancel',
      type: 'any',
      isList: false,
      isOptional: true,
      isInterface: false,
      isFunction: true,
      isState: false,
    },
  ],
  components: {
    id: 'component_0hkjfi',
    componentName: 'component',
    label: 'component',
    properties: {
      variant: 'default',
      commonProperties: {},
    },
    children: [
      {
        id: 'pageheader_ei6aw3',
        tag: 'pageHeader1',
        componentName: 'pageHeader',
        label: 'Page Header',
        type: 'group',
        children: [
          {
            id: 'button_e2y2w6',
            tag: 'button2',
            componentName: 'button',
            label: 'Button',
            type: 'group',
            children: [],
            interactions: {
              onClick: {
                type: 'formSubmit',
                function: {
                  fnCustomSet: '() => {}',
                  type: 'function',
                  fnCustomCode: {
                    imports: [],
                  },
                },
                action: {
                  actionCustomSet: '() => {}',
                },
                formSubmit: {
                  formId: '',
                  targetForm: 'form1',
                },
              },
            },
            allowTypes: false,
            data: {},
            properties: {
              label: 'Gravar Utente',
              variant: 'default',
              size: 'default',
              iconProperties: {
                showIcon: true,
                iconName: 'Save',
              },
              disabled: false,
              commonProperties: {},
              content: 'Salvar Contribuinte',
            },
            childProperties: {},
          },
        ],
        interactions: {},
        allowTypes: false,
        data: {},
        properties: {
          title: 'Novo Contribuinte',
          description: '',
          variant: 'h3',
          commonProperties: {},
          showBackButton: true,
          urlBackButton: '(contribuinte)/contribuintes',
          iconProperties: {
            iconBackButton: 'ArrowLeft',
          },
          isSticky: true,
          className: 'top-10 z-8 -mt-4',
        },
        childProperties: {},
      },
      {
        id: 'form_bkqda6',
        tag: 'form1',
        componentName: 'form',
        label: 'Form',
        type: 'group',
        children: [
          {
            id: 'columns_sis1nx',
            tag: 'columns1',
            componentName: 'columns',
            label: 'Columns',
            type: 'group',
            children: [
              {
                id: 'column_c8l63e',
                tag: 'column1',
                componentName: 'column',
                label: 'Column',
                children: [
                  {
                    id: 'menunavigation_gyktj3',
                    tag: 'menuNavigation1',
                    componentName: 'menuNavigation',
                    label: 'Menu Navigation',
                    type: 'group',
                    children: [
                      {
                        id: 'menunavigationitem_twxi07',
                        tag: 'menuNavigationItem1',
                        componentName: 'menuNavigationItem',
                        label: 'Menu Navigation Item',
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'identificacao',
                          label: 'Informações Básicas',
                          iconProperties: {
                            icon: 'Building',
                          },
                          disabled: false,
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menunavigationitem_cru33e',
                        tag: 'menuNavigationItem6',
                        componentName: 'menuNavigationItem',
                        label: 'Menu Navigation Item',
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: '',
                          label: 'Sector de Actividade/SOAT',
                          iconProperties: {
                            icon: 'Briefcase',
                          },
                          disabled: false,
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menunavigationitem_fmrfvv',
                        tag: 'menuNavigationItem3',
                        componentName: 'menuNavigationItem',
                        label: 'Menu Navigation Item',
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          label: 'Endereços',
                          iconProperties: {
                            icon: 'MapPin',
                          },
                          disabled: false,
                          commonProperties: {},
                          targetRef: 'residencia',
                        },
                        childProperties: {},
                        style: {
                          layout: {
                            type: 'flex',
                            flex: {
                              direction: 'row',
                              wrap: 'nowrap',
                              alignItems: 'stretch',
                              justifyContent: 'flex-start',
                              gap: '2',
                            },
                            grid: {
                              templateColumns: '4',
                              templateRows: '1',
                              gap: '2',
                              justifyItems: 'start',
                              alignItems: 'start',
                              direction: 'row',
                              dense: false,
                            },
                            block: {},
                          },
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
                          backgrounds: [
                            {
                              type: 'color',
                              value: '#ce1212',
                              size: 'cover',
                              position: 'center',
                              repeat: 'no-repeat',
                              attachment: 'scroll',
                              blendMode: 'normal',
                            },
                          ],
                        },
                      },
                      {
                        id: 'menunavigationitem_z22k7t',
                        tag: 'menuNavigationItem27',
                        componentName: 'menuNavigationItem',
                        label: 'Menu Navigation Item',
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          label: 'Contacto',
                          iconProperties: {
                            icon: 'Phone',
                          },
                          disabled: false,
                          commonProperties: {},
                          targetRef: 'formList1',
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menunavigationitem_xw9e0p',
                        tag: 'menuNavigationItem5',
                        componentName: 'menuNavigationItem',
                        label: 'Menu Navigation Item',
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          label: 'Dados Bancários',
                          iconProperties: {
                            icon: 'CreditCard',
                          },
                          disabled: false,
                          commonProperties: {},
                          targetRef: 'contaBancaria',
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menunavigationitem_kef1ox',
                        tag: 'menuNavigationItem2',
                        componentName: 'menuNavigationItem',
                        label: 'Menu Navigation Item',
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'documentos',
                          label: 'Documentos',
                          iconProperties: {
                            icon: 'FileText',
                          },
                          disabled: false,
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menunavigationitem_hts48h',
                        tag: 'menuNavigationItem8',
                        componentName: 'menuNavigationItem',
                        label: 'Menu Navigation Item',
                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          label: 'Observaçōes',
                          iconProperties: {
                            icon: 'MessageSquare',
                          },
                          disabled: false,
                          commonProperties: {},
                          targetRef: 'obs',
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
                    },
                    properties: {
                      title: 'Menu',
                      badgeColor: 'secondary',
                      badgeVariant: 'solid',
                      badgeContent: 'Novo',
                      showChevron: true,
                      isStickyTop: true,
                      commonProperties: {},
                      className: 'top-32',
                      targetRef: '',
                    },
                    childProperties: {},
                    style: {
                      backgrounds: [],
                    },
                  },
                  {
                    id: 'alert_slynmu',
                    tag: 'alert1',
                    componentName: 'alert',
                    label: 'Alert',
                    type: 'group',
                    children: [
                      {
                        id: 'text_wncsxk',
                        tag: 'text3',
                        componentName: 'text',
                        label: 'Text',
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {
                          highlight: {
                            state: {
                              id: '',
                              type: 'string[]',
                              name: 'highlight{{id}}Text',
                              defaultValue: '[]',
                              imports: [],
                              generate: true,
                            },
                          },
                        },
                        properties: {
                          content: 'Dicas',
                          variant: 'info',
                          weight: 'semibold',
                          size: 'default',
                          align: 'left',
                          spacing: 'normal',
                          animate: false,
                          truncate: false,
                          maxLines: 3,
                          commonProperties: {
                            generateReference: false,
                          },
                          className: 'mb-0',
                        },
                        childProperties: {},
                      },
                      {
                        id: 'text_xfexaf',
                        tag: 'text2',
                        componentName: 'text',
                        label: 'Text',
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {
                          highlight: {
                            state: {
                              id: '',
                              type: 'string[]',
                              name: 'highlight{{id}}Text',
                              defaultValue: '[]',
                              imports: [],
                              generate: true,
                            },
                          },
                        },
                        properties: {
                          content:
                            'Preencha todos os campos obrigatórios marcados com * e utilize a navegação lateral para se mover entre as seções.',
                          variant: 'info',
                          weight: 'normal',
                          size: 'sm',
                          align: 'left',
                          spacing: 'normal',
                          animate: false,
                          truncate: false,
                          maxLines: 3,
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
                      color: 'info',
                      variant: 'soft',
                      showLink: false,
                      textColored: true,
                      borderColored: true,
                      bgColored: true,
                      iconProperties: {
                        icon: 'Dot',
                        linkIcon: 'ArrowRight',
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
                  variant: 'span3',
                },
              },
              {
                id: 'column_2_1bpcg2',
                componentName: 'column',
                label: 'Column 2',
                properties: {
                  variant: 'span9',
                },
                children: [
                  {
                    id: 'card_asn7ee',
                    tag: 'identificacao',
                    componentName: 'card',
                    label: 'Card',
                    type: 'group',
                    children: [
                      {
                        id: 'cardheader_uyqkqs',
                        tag: 'cardHeader1',
                        componentName: 'cardHeader',
                        label: 'Card Header',
                        children: [
                          {
                            id: 'headline_uep1az',
                            tag: 'headline1',
                            componentName: 'headline',
                            label: 'Headline',
                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              title: 'Informações Básicas',
                              description: 'Dados principais do contribuinte',
                              variant: 'h5',
                              commonProperties: {},
                              className: 'mt-3',
                              roleColor: 'solid',
                              color: 'primary',
                              iconProperties: {
                                showIcon: true,
                                iconName: 'Building',
                              },
                            },
                            childProperties: {},
                            style: {
                              layout: {
                                type: 'flex',
                                flex: {
                                  direction: 'row',
                                  wrap: 'nowrap',
                                  alignItems: 'stretch',
                                  justifyContent: 'flex-start',
                                  gap: '2',
                                },
                                grid: {
                                  templateColumns: '4',
                                  templateRows: '1',
                                  gap: '2',
                                  justifyItems: 'start',
                                  alignItems: 'start',
                                  direction: 'row',
                                  dense: false,
                                },
                                block: {},
                              },
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
                              backgrounds: [
                                {
                                  type: 'color',
                                  value: '#FFFFFF',
                                  size: 'cover',
                                  position: 'center',
                                  repeat: 'no-repeat',
                                  attachment: 'scroll',
                                  blendMode: 'normal',
                                },
                              ],
                            },
                          },
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          commonProperties: {},
                        },
                        childProperties: {},
                      },
                      {
                        id: 'cardcontent_04zpeq',
                        tag: 'cardContent1',
                        componentName: 'cardContent',
                        label: 'Card Content',
                        children: [
                          {
                            id: 'grid_5i65am',
                            tag: 'grid6',
                            componentName: 'grid',
                            label: 'Grid',
                            type: 'group',
                            children: [
                              {
                                id: 'combobox_su2ger',
                                tag: 'tipoDocumento',
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
                                    action: {
                                      actionCustomSet: '() => {}',
                                    },
                                  },
                                },
                                allowTypes: false,
                                data: {
                                  value: {
                                    state: {
                                      id: '',
                                      type: 'string',
                                      name: 'select{{id}}Value',
                                      defaultValue: '',
                                      imports: [],
                                      generate: true,
                                    },
                                    value: {
                                      id: '',
                                      code: '',
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
                                    value: {
                                      id: '',
                                      code: '',
                                    },
                                  },
                                },
                                properties: {
                                  label: 'Tipo de documento de inscrição',
                                  variant: 'single',
                                  placeholder: 'Select an option...',
                                  selectLabel: 'No option found',
                                  showSearch: true,
                                  gridSize: 'full',
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
                                  },
                                  commonProperties: {},
                                  required: true,
                                },
                                childProperties: {},
                              },
                              {
                                id: 'inputtext_tricll',
                                tag: 'numDocumentoInscricao',
                                componentName: 'inputText',
                                label: 'Input Text',
                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
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
                                  value: '',
                                  label: 'Número de documento de inscrição',
                                  placeholder: '',
                                  helperText: '',
                                  iconProperties: {
                                    showIcon: false,
                                  },
                                  disabled: false,
                                  required: true,
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
                                  },
                                  commonProperties: {},
                                },
                                childProperties: {},
                              },
                              {
                                id: 'inputtext_94m7xo',
                                tag: 'denominacaoSocial',
                                componentName: 'inputText',
                                label: 'Input Text',
                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
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
                                  value: '',
                                  label: 'Denominação Social',
                                  placeholder: '',
                                  helperText: '',
                                  iconProperties: {
                                    showIcon: false,
                                  },
                                  disabled: false,
                                  required: true,
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
                                  },
                                  commonProperties: {},
                                },
                                childProperties: {},
                              },
                              {
                                id: 'inputtext_927gy6',
                                tag: 'nomeComercial',
                                componentName: 'inputText',
                                label: 'Input Text',
                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
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
                                  value: '',
                                  label: 'Nome Comercial',
                                  placeholder: '',
                                  helperText: '',
                                  iconProperties: {
                                    showIcon: false,
                                  },
                                  disabled: false,
                                  required: true,
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
                                  },
                                  commonProperties: {},
                                },
                                childProperties: {},
                              },
                              {
                                id: 'combobox_8hi371',
                                tag: 'codigoEstatuto',
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
                                  value: {
                                    state: {
                                      id: '',
                                      type: 'string',
                                      name: 'select{{id}}Value',
                                      defaultValue: '{{value}}',
                                      imports: [],
                                      generate: true,
                                    },
                                    value: {
                                      id: '',
                                      code: '',
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
                                    value: {
                                      id: '',
                                      code: '',
                                    },
                                  },
                                },
                                properties: {
                                  label: 'Estatuto Juridico',
                                  variant: 'single',
                                  placeholder: 'Select an option...',
                                  required: true,
                                  selectLabel: 'No option found',
                                  showSearch: true,
                                  gridSize: 'full',
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
                                id: 'combobox_q4ey1i',
                                tag: 'tipoRepresentacao',
                                componentName: 'combobox',
                                label: 'Combobox',
                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
                                    type: 'function',
                                    function: {
                                      fnCustomSet: 'setSelecttipoRepresentacaoValue',
                                      type: 'function',
                                      fnCustomCode: {
                                        imports: [],
                                      },
                                    },
                                    action: {
                                      actionCustomSet: '() => {}',
                                    },
                                  },
                                },
                                allowTypes: false,
                                data: {
                                  value: {
                                    state: {
                                      id: '',
                                      type: 'string',
                                      name: 'select{{id}}Value',
                                      defaultValue: '',
                                      imports: [],
                                      generate: true,
                                    },
                                    value: {
                                      id: '',
                                      code: '',
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
                                    value: {
                                      id: '',
                                      code: '',
                                    },
                                  },
                                },
                                properties: {
                                  label: 'Tipo de representação',
                                  variant: 'single',
                                  placeholder: 'Select an option...',
                                  required: true,
                                  selectLabel: 'No option found',
                                  showSearch: true,
                                  gridSize: 'full',
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
                                  },
                                  commonProperties: {},
                                },
                                childProperties: {},
                                rules: [],
                              },
                              {
                                id: 'inputtext_24oey4',
                                tag: 'nomeResponsavel',
                                componentName: 'inputText',
                                label: 'Input Text',
                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
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
                                  value: '',
                                  label: 'Nome do Responsável ',
                                  placeholder: '',
                                  helperText: '',
                                  iconProperties: {
                                    showIcon: false,
                                  },
                                  disabled: false,
                                  required: true,
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
                                  },
                                  commonProperties: {},
                                },
                                childProperties: {},
                              },
                              {
                                id: 'inputdatepicker_po3deb',
                                tag: 'dataInicioAtividade',
                                componentName: 'inputDatePicker',
                                label: 'Date Picker',
                                type: 'group',
                                children: [],
                                interactions: {
                                  onDateChange: {
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
                                  date: '2025-01-01',
                                  label: 'Data de Início de Atividade',
                                  placeholder: 'Please select a date...',
                                  helperText: '',
                                  disabled: false,
                                  required: true,
                                  gridSize: 'full',
                                  dateFormat: 'dd/MM/yyyy',
                                  today: '2025-01-01',
                                  startDate: '1900-01-01',
                                  endDate: '2099-12-31',
                                  defaultMonth: '2025-01-01',
                                  startMonth: '2025-01-01',
                                  month: '2025-01-01',
                                  endMonth: '2025-12-31',
                                  numberOfMonths: '1',
                                  weekStartsOn: 0,
                                  pagedNavigation: false,
                                  reverseMonths: false,
                                  hideNavigation: false,
                                  disableNavigation: false,
                                  fixedWeeks: false,
                                  hideWeekdays: false,
                                  showOutsideDays: false,
                                  showWeekNumber: false,
                                  animate: false,
                                  broadcastCalendar: false,
                                  ISOWeek: false,
                                  captionLayout: 'label',
                                  dataProperties: {
                                    isVirtual: false,
                                    isType: true,
                                  },
                                  commonProperties: {},
                                  className: '',
                                },
                                childProperties: {},
                              },
                            ],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              gap: 4,
                              variant: 'cols3',
                              commonProperties: {
                                generateReference: false,
                              },
                            },
                            childProperties: {
                              className: 'col-span-1',
                            },
                            style: {
                              layout: {
                                type: 'grid',
                                flex: {
                                  direction: 'row',
                                  wrap: 'nowrap',
                                  alignItems: 'stretch',
                                  justifyContent: 'flex-start',
                                  gap: '2',
                                },
                                grid: {
                                  templateColumns: '3',
                                  templateRows: '1',
                                  gap: '2',
                                  justifyItems: 'stretch',
                                  alignItems: 'start',
                                  direction: 'row',
                                  dense: false,
                                },
                                block: {},
                              },
                            },
                          },
                          {
                            id: 'container_4n20xj',
                            tag: 'container1',
                            componentName: 'container',
                            label: 'Container',
                            type: 'group',
                            children: [
                              {
                                id: 'text_dys27z',
                                tag: 'text1',
                                componentName: 'text',
                                label: 'Text',
                                type: 'group',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {
                                  highlight: {
                                    state: {
                                      id: '',
                                      type: 'string[]',
                                      name: 'highlight{{id}}Text',
                                      defaultValue: '[]',
                                      imports: [],
                                      generate: true,
                                    },
                                  },
                                },
                                properties: {
                                  content: 'Informações da SEDE',
                                  variant: 'primary',
                                  weight: 'semibold',
                                  size: 'sm',
                                  align: 'left',
                                  spacing: 'normal',
                                  animate: false,
                                  truncate: false,
                                  maxLines: 3,
                                  commonProperties: {
                                    generateReference: false,
                                  },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'combobox_fk02jf',
                                tag: 'uuidSede',
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
                                  label: 'Contribuinte SEDE',
                                  variant: 'single',
                                  placeholder: 'Select an option...',
                                  required: true,
                                  selectLabel: 'No option found',
                                  showSearch: true,
                                  gridSize: 'full',
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
                              commonProperties: {
                                generateReference: false,
                              },
                              className: 'border rounded-sm p-2',
                            },
                            childProperties: {},
                            style: {
                              layout: {
                                type: 'grid',
                                flex: {
                                  direction: 'row',
                                  wrap: 'nowrap',
                                  alignItems: 'stretch',
                                  justifyContent: 'flex-start',
                                  gap: '2',
                                },
                                grid: {
                                  templateColumns: '3',
                                  templateRows: '1',
                                  gap: '2',
                                  justifyItems: 'stretch',
                                  alignItems: 'start',
                                  direction: 'row',
                                  dense: false,
                                },
                                block: {},
                              },
                            },
                            rules: [
                              {
                                type: 'visibility',
                                condition: "selecttipoRepresentacaoValue==='F'",
                              },
                            ],
                          },
                          {
                            id: 'inputhidden_vtwlok',
                            tag: 'soatUsado',
                            componentName: 'inputHidden',
                            label: 'Input Hidden',
                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              value: '',
                              label: 'soatUsado',
                              helperText: '',
                              iconProperties: {
                                showIcon: false,
                              },
                              disabled: false,
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
                          spaceX: '3',
                          spaceY: '3',
                          commonProperties: {},
                          className: '',
                        },
                        childProperties: {
                          className: '',
                          commonProperties: {},
                        },
                        style: {
                          layout: {
                            type: 'block',
                            flex: {
                              direction: 'row',
                              wrap: 'nowrap',
                              alignItems: 'stretch',
                              justifyContent: 'flex-start',
                              gap: '2',
                            },
                            grid: {
                              templateColumns: '4',
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
                        id: 'cardfooter_hbqeuz',
                        tag: 'cardFooter1',
                        componentName: 'cardFooter',
                        label: 'Card Footer',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          commonProperties: {},
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
                  {
                    id: 'formlist_4ayxgn',
                    tag: 'actividadesEconomicas',
                    componentName: 'formList',
                    label: 'Form List',
                    type: 'group',
                    children: [
                      {
                        id: 'grid_00pig4',
                        tag: 'grid2',
                        componentName: 'grid',
                        label: 'Grid',
                        type: 'group',
                        children: [
                          {
                            id: 'combobox_39cam7',
                            tag: 'idActividadeEconomica',
                            componentName: 'combobox',
                            label: 'Combobox',
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: {
                                  fnCustomSet: '(value) => {updateActividade(value, index)}',
                                  type: 'function',
                                  fnCustomCode: {
                                    imports: [],
                                  },
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
                                value: {
                                  id: '',
                                  code: '',
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
                                value: {
                                  id: '',
                                  code: '',
                                },
                              },
                            },
                            properties: {
                              label: 'Actividade',
                              variant: 'single',
                              placeholder: 'Select an option...',
                              selectLabel: 'No option found',
                              showSearch: true,
                              gridSize: 'full',
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {
                                generateReference: false,
                              },
                              required: true,
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputnumber_ezr6bm',
                            tag: 'soat',
                            componentName: 'inputNumber',
                            label: 'Number',
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
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
                              value: '',
                              label: 'SOAT',
                              name: 'number',
                              defaultValue: 0,
                              formatOptions: '',
                              min: 0,
                              max: 9999999,
                              step: 1,
                              disabled: true,
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
                            id: 'checkbox_bi8c08',
                            tag: 'nivelActividade',
                            componentName: 'checkbox',
                            label: 'Checkbox',
                            type: 'group',
                            children: [],
                            interactions: {
                              onCheckedChange: {
                                type: 'function',
                                function: {
                                  type: 'function',
                                },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {
                              checked: {},
                            },
                            properties: {
                              label: 'Principal',
                              commonProperties: {
                                generateReference: false,
                              },
                              dataProperties: {
                                isType: true,
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
                          variant: 'cols2',
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
                        value: {
                          id: '',
                          code: '',
                        },
                      },
                      badgeValue: {
                        state: {
                          id: '',
                          name: 'actividadesEconomicasBadgeValue',
                          type: '',
                          imports: [],
                          generate: false,
                        },
                      },
                    },
                    properties: {
                      label: 'Sector de Actividade/SOAT',
                      description: 'Atividades econômicas do contribuinte',
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: 'SOAT Ponderado: 0.00%',
                      computeLabel: {
                        code: 'Item ${index}',
                      },
                      iconProperties: {
                        showIcon: false,
                        iconName: 'Briefcase',
                        addButtonIconName: 'Plus',
                      },
                      addButtonLabel: 'Add',
                      dot: false,
                      className: '',
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    childProperties: {},
                    style: {
                      layout: {
                        type: 'block',
                        flex: {
                          direction: 'row',
                          wrap: 'nowrap',
                          alignItems: 'stretch',
                          justifyContent: 'flex-start',
                          gap: '2',
                        },
                        grid: {
                          templateColumns: '2',
                          templateRows: '1',
                          gap: '2',
                          justifyItems: 'stretch',
                          alignItems: 'start',
                          direction: 'row',
                          dense: false,
                        },
                        block: {},
                      },
                    },
                  },
                  {
                    id: 'formlist_x67fp6',
                    tag: 'enderecos',
                    componentName: 'formList',
                    label: 'Form List',
                    type: 'group',
                    children: [
                      {
                        id: 'grid_wpujgp',
                        tag: 'grid3',
                        componentName: 'grid',
                        label: 'Grid',
                        type: 'group',
                        children: [
                          {
                            id: 'combobox_28kwl8',
                            tag: 'tipoEndereco',
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
                              value: {
                                state: {
                                  id: '',
                                  type: 'string',
                                  name: 'select{{id}}Value',
                                  defaultValue: '{{value}}',
                                  imports: [],
                                  generate: true,
                                },
                                value: {
                                  id: '',
                                  code: '',
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
                                value: {
                                  id: '',
                                  code: '',
                                },
                              },
                            },
                            properties: {
                              label: 'Tipo de Endereço',
                              variant: 'single',
                              placeholder: 'Select an option...',
                              required: true,
                              selectLabel: 'No option found',
                              showSearch: true,
                              gridSize: 'full',
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
                            id: 'inputtext_9s7kmv',
                            tag: 'rua',
                            componentName: 'inputText',
                            label: 'Input Text',
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
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
                              value: '',
                              label: 'Endereço',
                              placeholder: '',
                              helperText: '',
                              iconProperties: {
                                showIcon: false,
                              },
                              disabled: false,
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
                            id: 'inputtext_iwa52m',
                            tag: 'pontoRef',
                            componentName: 'inputText',
                            label: 'Input Text',
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
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
                              value: '',
                              label: 'Ponto Referência  ',
                              placeholder: '',
                              helperText: '',
                              iconProperties: {
                                showIcon: false,
                              },
                              disabled: false,
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
                            id: 'combobox_w4zn59',
                            tag: 'idGeografia',
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
                              value: {
                                state: {
                                  id: '',
                                  type: 'string',
                                  name: 'select{{id}}Value',
                                  defaultValue: '{{value}}',
                                  imports: [],
                                  generate: true,
                                },
                                value: {
                                  id: '',
                                  code: '',
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
                                value: {
                                  id: '',
                                  code: '',
                                },
                              },
                            },
                            properties: {
                              label: 'Região',
                              variant: 'single',
                              placeholder: 'Select an option...',
                              required: true,
                              selectLabel: 'No option found',
                              showSearch: true,
                              gridSize: 'full',
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
                            id: 'inputtext_u4ya54',
                            tag: 'caixaPostal',
                            componentName: 'inputText',
                            label: 'Input Text',
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
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
                              value: '',
                              label: 'Caixa Postal',
                              placeholder: '',
                              helperText: '',
                              iconProperties: {
                                showIcon: false,
                              },
                              disabled: false,
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
                            id: 'inputtext_dm8n05',
                            tag: 'numPorta',
                            componentName: 'inputText',
                            label: 'Input Text',
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
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
                              value: '',
                              label: 'Numero de Porta',
                              placeholder: '',
                              helperText: '',
                              iconProperties: {
                                showIcon: false,
                              },
                              disabled: false,
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
                          variant: 'cols3',
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
                      label: 'Endereços',
                      description: 'Endereços do contribuinte',
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: '',
                      computeLabel: {
                        code: 'Item ${index}',
                      },
                      iconProperties: {
                        showIcon: false,
                        iconName: 'MapPin',
                        addButtonIconName: 'Plus',
                      },
                      addButtonLabel: 'Add',
                      dot: false,
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    childProperties: {},
                  },
                  {
                    id: 'formlist_j5e1ei',
                    tag: 'contactos',
                    componentName: 'formList',
                    label: 'Form List',
                    type: 'group',
                    children: [
                      {
                        id: 'grid_t2sdvb',
                        tag: 'grid1',
                        componentName: 'grid',
                        label: 'Grid',
                        type: 'group',
                        children: [
                          {
                            id: 'combobox_wunewz',
                            tag: 'tipoContacto',
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
                              value: {
                                state: {
                                  id: '',
                                  type: 'string',
                                  name: 'select{{id}}Value',
                                  defaultValue: '{{value}}',
                                  imports: [],
                                  generate: true,
                                },
                                value: {
                                  id: '',
                                  code: '',
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
                                value: {
                                  id: '',
                                  code: '',
                                },
                              },
                            },
                            properties: {
                              label: 'Tipo de Contato',
                              variant: 'single',
                              placeholder: 'Select an option...',
                              required: true,
                              selectLabel: 'No option found',
                              showSearch: true,
                              gridSize: 'full',
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
                            id: 'inputtext_03844c',
                            tag: 'contacto',
                            componentName: 'inputText',
                            label: 'Input Text',
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
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
                              value: '',
                              label: 'Contacto',
                              placeholder: '',
                              helperText: '',
                              iconProperties: {
                                showIcon: false,
                              },
                              disabled: false,
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
                          variant: 'cols2',
                          commonProperties: {
                            generateReference: false,
                          },
                        },
                        childProperties: {
                          className: 'col-span-1',
                        },
                        style: {
                          layout: {
                            type: 'grid',
                            flex: {
                              direction: 'row',
                              wrap: 'nowrap',
                              alignItems: 'stretch',
                              justifyContent: 'flex-start',
                              gap: '2',
                            },
                            grid: {
                              templateColumns: '2',
                              templateRows: '1',
                              gap: '2',
                              justifyItems: 'stretch',
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
                    data: {
                      defaultItem: {
                        state: {
                          id: '',
                          type: 'any',
                          name: 'formListformList1Default',
                          defaultValue: '{}',
                          imports: [],
                          generate: true,
                        },
                        value: {
                          id: '',
                          code: '',
                        },
                      },
                    },
                    properties: {
                      label: 'Contactos',
                      computeLabel: {
                        code: 'Item ${index}',
                      },
                      addButtonLabel: 'Add',
                      addButtonIconName: 'Plus',
                      commonProperties: {
                        generateReference: true,
                      },
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: '',
                      iconProperties: {
                        showIcon: true,
                        iconName: 'Phone',
                      },
                      dot: false,
                      className: 'md:grid-cols-2',
                    },
                    childProperties: {},
                    style: {
                      layout: {
                        type: 'block',
                        flex: {
                          direction: 'row',
                          wrap: 'nowrap',
                          alignItems: 'stretch',
                          justifyContent: 'flex-start',
                          gap: '2',
                        },
                        grid: {
                          templateColumns: '4',
                          templateRows: '1',
                          gap: '2',
                          justifyItems: 'stretch',
                          alignItems: 'start',
                          direction: 'row',
                          dense: false,
                        },
                        block: {},
                      },
                    },
                  },
                  {
                    id: 'formlist_3flio8',
                    tag: 'dadosBancarios',
                    componentName: 'formList',
                    label: 'Form List',
                    type: 'group',
                    children: [
                      {
                        id: 'grid_j24fe6',
                        tag: 'grid4',
                        componentName: 'grid',
                        label: 'Grid',
                        type: 'group',
                        children: [
                          {
                            id: 'combobox_vy4apt',
                            tag: 'idOperadora',
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
                              label: 'Banco',
                              variant: 'single',
                              placeholder: 'Select an option...',
                              required: true,
                              selectLabel: 'No option found',
                              showSearch: true,
                              gridSize: 'full',
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
                            id: 'inputnumber_rnc302',
                            tag: 'nib',
                            componentName: 'inputNumber',
                            label: 'Number',
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
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
                              value: '',
                              label: 'NIB',
                              name: 'number',
                              defaultValue: 0,
                              formatOptions: '',
                              min: 0,
                              max: 9999999,
                              step: 1,
                              disabled: false,
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
                            id: 'inputnumber_jeukei',
                            tag: 'numConta',
                            componentName: 'inputNumber',
                            label: 'Number',
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
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
                              value: '',
                              label: 'N Conta',
                              name: 'number',
                              defaultValue: 0,
                              formatOptions: '',
                              min: 0,
                              max: 9999999,
                              step: 1,
                              disabled: false,
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
                          variant: 'cols3',
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
                      label: 'Dados Bancários',
                      description: 'Informações bancárias do contribuinte',
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: '',
                      computeLabel: {
                        code: 'Item ${index}',
                      },
                      iconProperties: {
                        showIcon: true,
                        iconName: 'CreditCard',
                        addButtonIconName: 'Plus',
                      },
                      addButtonLabel: 'Add',
                      dot: false,
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    childProperties: {},
                  },
                  {
                    id: 'formlist_i0c7bj',
                    tag: 'anexos',
                    componentName: 'formList',
                    label: 'Form List',
                    type: 'group',
                    children: [
                      {
                        id: 'grid_v41n5f',
                        tag: 'grid5',
                        componentName: 'grid',
                        label: 'Grid',
                        type: 'group',
                        children: [
                          {
                            id: 'combobox_xcimvq',
                            tag: 'idTipoDocumento',
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
                              label: 'Tipo de Documento',
                              variant: 'single',
                              placeholder: 'Select an option...',
                              selectLabel: 'No option found',
                              showSearch: true,
                              gridSize: 'full',
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
                            id: 'inputfile_k2fl4m',
                            tag: 'inputFile1',
                            componentName: 'inputFile',
                            label: 'Upload File',
                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
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
                              value: '',
                              label: 'Input File',
                              accept: 'application/pdf',
                              multiple: false,
                              disabled: false,
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
                            id: 'inputhidden_3pr884',
                            tag: 'idDocumento',
                            componentName: 'inputHidden',
                            label: 'Input Hidden',
                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              value: '',
                              label: 'Hidden',
                              helperText: '',
                              iconProperties: {
                                showIcon: false,
                              },
                              disabled: false,
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
                          variant: 'cols2',
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
                      label: 'Documentos',
                      description: 'Documentos do contribuinte',
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: '',
                      computeLabel: {
                        code: 'Item ${index}',
                      },
                      iconProperties: {
                        showIcon: true,
                        iconName: 'FileText',
                        addButtonIconName: 'Plus',
                      },
                      addButtonLabel: 'Add',
                      dot: false,
                      commonProperties: {
                        generateReference: false,
                      },
                    },
                    childProperties: {},
                  },
                  {
                    id: 'container_jt1kmy',
                    tag: 'obs',
                    componentName: 'container',
                    label: 'Container',
                    type: 'group',
                    children: [
                      {
                        id: 'inputtextarea_bzhoju',
                        tag: 'observacao',
                        componentName: 'inputTextarea',
                        label: 'Textarea',
                        type: 'group',
                        children: [],
                        interactions: {
                          onChange: {
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
                          value: '',
                          name: 'textarea',
                          label: 'Observaçōes',
                          helperText: '',
                          rows: 3,
                          disabled: false,
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
                      commonProperties: {
                        generateReference: true,
                      },
                    },
                    childProperties: {},
                  },
                ],
                interactions: [],
                tag: '',
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              variant: 'cols12',
              gap: 4,
              commonProperties: {},
            },
            childProperties: {},
          },
        ],
        interactions: {
          onSubmit: {
            type: 'function',
            function: {
              fnCustomSet: 'handleFormSubmit',
              type: 'function',
              fnCustomCode: {
                imports: [
                  {
                    namespace: "import {useUtente} from '@/app/[locale]/(myapp)/hooks/use-utente'",
                    id: 'fk313ak7qd',
                  },
                ],
              },
            },
            action: {
              actionCustomSet: '(e) => {}',
            },
          },
        },
        allowTypes: true,
        data: {
          defaultValues: {
            state: {
              id: '',
              type: 'z.infer<any>',
              name: 'contentFormform1',
              defaultValue: 'initFormContribuinte',
              imports: [],
              generate: true,
            },
            value: {
              id: '',
              code: '',
            },
          },
        },
        properties: {
          validationMode: 'onBlur',
          gridClassName: 'flex flex-col',
          resetAfterSubmit: false,
          commonProperties: {},
        },
        childProperties: {},
        dataType: 'formContribuinte',
      },
    ],
    tag: 'component1',
    data: {},
    interactions: {
      onLoad: {
        type: 'function',
        function: {
          type: 'function',
          fnCustomCode: {
            imports: [
              {
                namespace: "import {submitUtente} from '@/app/[locale]/(myapp)/hooks/use-utente'",
                id: '5ryc7nkzwe',
              },
              {
                id: 'import_zUTfna',
                namespace:
                  "import { useIGRPToast, } from '@igrp/igrp-framework-react-design-system';",
              },
              {
                namespace:
                  "import {useNewContribuinteParameterizations} from '@/app/[locale]/(myapp)/hooks/use-parameterization'",
                id: 'tbwwrd2njo',
              },
              {
                namespace:
                  "import {submitContribuinte} from '@/app/[locale]/(myapp)/hooks/use-contribuinte'",
                id: 'fzso5yrgh2',
              },
              {
                namespace: "import {useUtente} from '@/app/[locale]/(myapp)/hooks/use-utente'",
                id: '2hgqctwz6i',
              },
            ],
            fnCode:
              "const { igrpToast } = useIGRPToast();\nconst { tipoContato, tipoEndereco, tiposDocumento, tiposActividades, geografias, tiposAnexos, tiposEstaduto, bancos, tiposRespresentacao, sedes, isLoading } = useNewContribuinteParameterizations();\n\nuseEffect(() => {\n  if (isLoading) return;\n  setSelecttipoDocumentoOptions(tiposDocumento || [])\n  setSelecttipoEnderecoOptions(tipoEndereco || []);\n  setSelecttipoContactoOptions(tipoContato || []);\n  setSelectcodigoEstatutoOptions(tiposEstaduto || [])\n  setSelectidOperadoraOptions(bancos || [])\n  setSelectidTipoDocumentoOptions(tiposAnexos || [])\n  setSelectidActividadeEconomicaOptions(tiposActividades || [])\n  setSelectidGeografiaOptions(geografias || [])\n  setSelecttipoRepresentacaoOptions(tiposRespresentacao || [])\n  setSelectuuidSedeOptions(sedes || [])\n\n\n}, [isLoading]);\n\nuseEffect(() => {\n  if (formform1Ref.current) {\n    const subscription = formform1Ref.current.watch((value) => {\n      setActividadesEconomicas(value.actividadesEconomicas);\n    });\n\n    return () => subscription.unsubscribe();\n  }\n}, [formform1Ref.current]);\n\nuseEffect(() => {\n  if (actividadesEconomicas) {\n    const weighted = calculeSOATPoderado();\n    setActividadesEconomicasBadgeValue(`SOAT Ponderado:${weighted}%`);\n  }\n}, [actividadesEconomicas]);\n\nconst handleFormSubmit = async (values: z.infer<Form1ZodType>) => {\n  // TODO: Map form values to Beneficiario type here\n  const contribuinte: any = {\n    ...values,\n  };\n  try {\n    await submitContribuinte(contribuinte);\n    igrpToast({\n      title: 'Sucesso',\n      description: 'Contribuinte gravado com sucesso',\n    });\n  } catch (error) {\n    igrpToast({\n      title: 'Erro',\n      description: 'Ocorreu um erro ao processar o formulário.',\n    })\n  }\n};",
          },
        },
      },
    },
    childProperties: {},
  },
  functions: [
    {
      id: 'fnc_YV1t3t',
      name: 'calculeSOATPoderado',
      code: "if (actividadesEconomicas && actividadesEconomicas.length > 0) {\n  const total = actividadesEconomicas.reduce(\n    (sum: number, act: any) => sum + (Number.parseFloat(act.soat) || 0),\n    0,\n  );\n  const weighted = (total / actividadesEconomicas.length).toFixed(2);\n  return weighted;\n} else {\n  return '0.00';\n}",
      returnValue: {
        type: 'string',
        isNullable: true,
        isList: false,
      },
      imports: [],
      arguments: [],
    },
    {
      id: 'fnc_AxVGnC',
      name: 'updateActividade',
      code: "// Find the selected CAE code\nconst selectedCae = tiposActividades.find((cae) => cae.value === value);\n\n// Get current form values\nconst currentValues = formform1Ref.current?.getValues();\n\n// Create the updated atividadesEconomicas array\nconst updatedAtividades = [...(currentValues?.actividadesEconomicas || [])];\nif (selectedCae && index !== undefined && index >= 0) {\n  updatedAtividades[index] = {\n    ...updatedAtividades[index],\n    soat: selectedCae.metadata.taxa,\n  };\n}\n\nformform1Ref.current?.setValue('actividadesEconomicas', updatedAtividades);\n\nconst weighted = calculeSOATPoderado();\n\nformform1Ref.current?.setValue('soatUsado', weighted);\n\n",
      returnValue: {
        type: 'void',
        isNullable: true,
        isList: false,
      },
      imports: [],
      arguments: [
        {
          id: '1',
          name: 'value',
          type: 'number',
          isList: false,
          isOptional: false,
          isInterface: false,
          isFunction: false,
          isState: false,
        },
        {
          id: '2',
          name: 'index',
          type: 'number',
          isList: false,
          isOptional: false,
          isInterface: false,
          isFunction: false,
          isState: false,
        },
      ],
    },
  ],
  types: [
    {
      componentId: 'form_bkqda6',
      name: 'formContribuinte',
      path: '',
      fields: [
        {
          componentId: 'combobox_su2ger',
          name: 'tipoDocumento',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: 'inputtext_tricll',
          name: 'numDocumentoInscricao',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: 'inputtext_94m7xo',
          name: 'denominacaoSocial',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: 'inputtext_927gy6',
          name: 'nomeComercial',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: 'combobox_8hi371',
          name: 'codigoEstatuto',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: 'combobox_q4ey1i',
          name: 'tipoRepresentacao',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: 'inputtext_24oey4',
          name: 'nomeResponsavel',
          type: 'string',
          required: true,
          defaultValue: '',
        },
        {
          componentId: 'inputdatepicker_po3deb',
          name: 'dataInicioAtividade',
          type: 'date',
          required: true,
          defaultValue: '',
        },
        {
          componentId: 'combobox_fk02jf',
          name: 'uuidSede',
          type: 'string',
          required: false,
          defaultValue: '',
        },
        {
          componentId: 'inputhidden_vtwlok',
          name: 'soatUsado',
          type: 'string',
          required: false,
          defaultValue: '',
        },
        {
          componentId: 'formlist_4ayxgn',
          name: 'actividadesEconomicas',
          type: 'object',
          required: false,
          defaultValue: '',
          isList: true,
          fields: [
            {
              componentId: 'combobox_39cam7',
              name: 'idActividadeEconomica',
              type: 'number',
              required: true,
              defaultValue: '',
            },
            {
              componentId: 'inputnumber_ezr6bm',
              name: 'soat',
              type: 'number',
              required: false,
              defaultValue: '',
            },
            {
              componentId: 'checkbox_bi8c08',
              name: 'nivelActividade',
              type: 'boolean',
              required: false,
              defaultValue: '',
            },
          ],
        },
        {
          componentId: 'formlist_x67fp6',
          name: 'enderecos',
          type: 'object',
          required: false,
          defaultValue: '',
          isList: true,
          fields: [
            {
              componentId: 'combobox_28kwl8',
              name: 'tipoEndereco',
              type: 'string',
              required: true,
              defaultValue: '',
            },
            {
              componentId: 'inputtext_9s7kmv',
              name: 'rua',
              type: 'string',
              required: true,
              defaultValue: '',
            },
            {
              componentId: 'inputtext_iwa52m',
              name: 'pontoRef',
              type: 'string',
              required: true,
              defaultValue: '',
            },
            {
              componentId: 'combobox_w4zn59',
              name: 'idGeografia',
              type: 'number',
              required: true,
              defaultValue: '',
            },
            {
              componentId: 'inputtext_u4ya54',
              name: 'caixaPostal',
              type: 'string',
              required: false,
              defaultValue: '',
            },
            {
              componentId: 'inputtext_dm8n05',
              name: 'numPorta',
              type: 'string',
              required: false,
              defaultValue: '',
            },
          ],
        },
        {
          componentId: 'formlist_j5e1ei',
          name: 'contactos',
          type: 'object',
          required: false,
          defaultValue: '',
          isList: true,
          fields: [
            {
              componentId: 'combobox_wunewz',
              name: 'tipoContacto',
              type: 'string',
              required: true,
              defaultValue: '',
            },
            {
              componentId: 'inputtext_03844c',
              name: 'contacto',
              type: 'string',
              required: true,
              defaultValue: '',
            },
          ],
        },
        {
          componentId: 'formlist_3flio8',
          name: 'dadosBancarios',
          type: 'object',
          required: false,
          defaultValue: '',
          isList: true,
          fields: [
            {
              componentId: 'combobox_vy4apt',
              name: 'idOperadora',
              type: 'number',
              required: true,
              defaultValue: '',
            },
            {
              componentId: 'inputnumber_rnc302',
              name: 'nib',
              type: 'number',
              required: true,
              defaultValue: '',
            },
            {
              componentId: 'inputnumber_jeukei',
              name: 'numConta',
              type: 'number',
              required: true,
              defaultValue: '',
            },
          ],
        },
        {
          componentId: 'formlist_i0c7bj',
          name: 'anexos',
          type: 'object',
          required: false,
          defaultValue: '',
          isList: true,
          fields: [
            {
              componentId: 'combobox_xcimvq',
              name: 'idTipoDocumento',
              type: 'number',
              required: true,
              defaultValue: '',
            },
            {
              componentId: 'inputfile_k2fl4m',
              name: 'upload',
              type: 'string',
              required: false,
              defaultValue: '',
            },
            {
              componentId: 'inputhidden_3pr884',
              name: 'idDocumento',
              type: 'string',
              required: false,
              defaultValue: '',
            },
          ],
        },
        {
          componentId: 'inputtextarea_bzhoju',
          name: 'observacao',
          type: 'string',
          required: true,
          defaultValue: '',
        },
      ],
    },
  ],
  states: [
    {
      id: 'state_0wBXiI',
      name: 'inputText2HelperText',
      type: 'string',
      imports: [],
      defaultValue: 'fgfgfgffgff',
    },
    {
      id: 'state__mQ5Zh',
      name: 'actividadesEconomicasBadgeValue',
      type: 'string',
      imports: [],
      defaultValue: 'SOAT Ponderado: 0.00%',
    },
    {
      id: 'state_KBZkPH',
      name: 'actividadesEconomicas',
      type: 'any',
      defaultValue: '',
      imports: [],
    },
  ],
  imports: [],
};

beforeAll(async () => {
  await initComponents();
});

describe('Component module', () => {
  it('should save the component configuration file', async () => {
    await newComponent(componentConfig, OUTPUT_DIR);
  });
});
