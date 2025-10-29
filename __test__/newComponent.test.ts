import { initComponents, newComponent } from '../src';
import { ComponentConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const componentConfig2: ComponentConfig =  {
  type: 'component',
  scope: 'page',
  pagePath: 'contribuintes',
  pageName: 'contribuintes',
  description: 'ContribuinteForm',
  name: 'contribuinteForm',
  id: 'iznykl6s1s',
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
    id: 'component_0hkjfi',
    componentName: 'component',

    properties: { commonProperties: { generateReference: false } },
    children: [
      {
        id: 'form_bkqda6',
        tag: 'form1',
        componentName: 'form',

        type: 'group',
        children: [
          {
            id: 'columns_sis1nx',
            tag: 'columns1',
            componentName: 'columns',

            type: 'group',
            children: [
              {
                id: 'column_c8l63e',
                tag: 'column1',
                componentName: 'column',

                children: [
                  {
                    id: 'menunavigation_gyktj3',
                    tag: 'menuNavigation1',
                    componentName: 'menuNavigation',

                    type: 'group',
                    children: [
                      {
                        id: 'menunavigationitem_twxi07',
                        tag: 'menuNavigationItem1',
                        componentName: 'menuNavigationItem',

                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'identificacao',

                          iconProperties: { icon: 'Building' },
                          commonProperties: { generateReference: false },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menunavigationitem_cru33e',
                        tag: 'menuNavigationItem6',
                        componentName: 'menuNavigationItem',

                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'actividadesEconomicas',

                          iconProperties: { icon: 'Briefcase' },
                          commonProperties: { generateReference: false },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menunavigationitem_fmrfvv',
                        tag: 'menuNavigationItem3',
                        componentName: 'menuNavigationItem',

                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'enderecos',

                          iconProperties: { icon: 'MapPin' },
                          commonProperties: { generateReference: false },
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
                              top: { value: '0', unit: 'px' },
                              right: { value: '0', unit: 'px' },
                              bottom: { value: '0', unit: 'px' },
                              left: { value: '0', unit: 'px' },
                            },
                            padding: {
                              top: { value: '0', unit: 'px' },
                              right: { value: '0', unit: 'px' },
                              bottom: { value: '0', unit: 'px' },
                              left: { value: '0', unit: 'px' },
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

                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'contactos',

                          iconProperties: { icon: 'Phone' },
                          commonProperties: { generateReference: false },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menunavigationitem_xw9e0p',
                        tag: 'menuNavigationItem5',
                        componentName: 'menuNavigationItem',

                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'dadosBancarios',

                          iconProperties: { icon: 'CreditCard' },
                          commonProperties: { generateReference: false },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menunavigationitem_kef1ox',
                        tag: 'menuNavigationItem2',
                        componentName: 'menuNavigationItem',

                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'anexos',

                          iconProperties: { icon: 'FileText' },
                          commonProperties: { generateReference: false },
                        },
                        childProperties: {},
                      },
                      {
                        id: 'menunavigationitem_hts48h',
                        tag: 'menuNavigationItem8',
                        componentName: 'menuNavigationItem',

                        type: '',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          targetRef: 'obs',

                          iconProperties: { icon: 'MessageSquare' },
                          commonProperties: { generateReference: false },
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
                        value: { id: '', code: '' },
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
                      commonProperties: { generateReference: false },
                      isStickyTop: true,
                      className: 'top-32',
                    },
                    childProperties: {},
                    style: { backgrounds: [] },
                  },
                  {
                    id: 'alert_slynmu',
                    tag: 'alert1',
                    componentName: 'alert',

                    type: 'group',
                    children: [
                      {
                        id: 'text_wncsxk',
                        tag: 'text3',
                        componentName: 'text',

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
                          commonProperties: { generateReference: false },
                          className: 'mb-0',
                        },
                        childProperties: {},
                      },
                      {
                        id: 'text_xfexaf',
                        tag: 'text2',
                        componentName: 'text',

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
                          commonProperties: { generateReference: false },
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
                      textColored: true,
                      borderColored: true,
                      bgColored: true,
                      iconProperties: {
                        showIcon: true,
                        iconName: 'Dot',
                        iconPlacement: 'end',
                        linkIcon: 'ArrowRight',
                      },
                      commonProperties: { generateReference: false },
                    },
                    childProperties: {},
                  },
                ],
                interactions: {},
                allowTypes: false,
                data: {},
                properties: {
                  variant: { default: 'span1' },
                  commonProperties: { generateReference: false },
                },
                childProperties: {},
                style: {},
              },
              {
                id: 'column_2_1bpcg2',
                componentName: 'column',

                properties: {
                  variant: { default: 'span3' },
                  commonProperties: { generateReference: false },
                },
                children: [
                  {
                    id: 'card_asn7ee',
                    tag: 'identificacao',
                    componentName: 'card',

                    type: 'group',
                    children: [
                      {
                        id: 'cardheader_uyqkqs',
                        tag: 'cardHeader1',
                        componentName: 'cardHeader',

                        children: [
                          {
                            id: 'flex_cz2w6b',
                            tag: 'flex1',
                            componentName: 'flex',

                            type: 'group',
                            children: [
                              {
                                id: 'headline_uep1az',
                                tag: 'headline1',
                                componentName: 'headline',

                                type: 'group',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  title: 'Informações Básicas',
                                  description: 'Dados principais do contribuinte',
                                  variant: 'h5',
                                  roleColor: 'solid',
                                  color: 'primary',
                                  iconProperties: { showIcon: true, iconName: 'Building' },
                                  commonProperties: { generateReference: false },
                                  className: 'mt-3',
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
                                      top: { value: '0', unit: 'px' },
                                      right: { value: '0', unit: 'px' },
                                      bottom: { value: '0', unit: 'px' },
                                      left: { value: '0', unit: 'px' },
                                    },
                                    padding: {
                                      top: { value: '0', unit: 'px' },
                                      right: { value: '0', unit: 'px' },
                                      bottom: { value: '0', unit: 'px' },
                                      left: { value: '0', unit: 'px' },
                                    },
                                  },
                                },
                              },
                              {
                                id: 'badge_r2ihcm',
                                tag: 'badge1',
                                componentName: 'badge',

                                type: 'group',
                                children: [],
                                interactions: {},
                                allowTypes: false,
                                data: {},
                                properties: {
                                  color: 'primary',
                                  variant: 'solid',
                                  size: 'md',
                                  content: 'Obrigatório',
                                  iconProperties: {
                                    showIcon: false,
                                    iconName: 'Info',
                                    iconPlacement: 'start',
                                  },
                                  commonProperties: { generateReference: false },
                                  dot: true,
                                },
                                childProperties: {},
                              },
                            ],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              variant: '',
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                            style: {
                              layout: {
                                type: 'flex',
                                flex: {
                                  direction: 'row',
                                  wrap: 'nowrap',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
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
                        ],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: { commonProperties: {} },
                        childProperties: {},
                      },
                      {
                        id: 'cardcontent_04zpeq',
                        tag: 'cardContent1',
                        componentName: 'cardContent',

                        children: [
                          {
                            id: 'grid_5i65am',
                            tag: 'grid6',
                            componentName: 'grid',

                            type: 'group',
                            children: [
                              {
                                id: 'combobox_su2ger',
                                tag: 'tipoDocumento',
                                componentName: 'combobox',

                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
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
                                      type: 'string',
                                      name: 'select{{id}}Value',
                                      defaultValue: '',
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
                                  required: true,
                                  selectLabel: 'No option found',
                                  showSearch: true,
                                  iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                                  dataProperties: { isVirtual: false, isType: true },
                                  commonProperties: { generateReference: false },
                                  gridSize: 'full',
                                },
                                childProperties: {},
                              },
                              {
                                id: 'inputtext_tricll',
                                tag: 'numDocumentoInscricao',
                                componentName: 'inputText',

                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
                                    type: 'function',
                                    function: { type: 'function' },
                                    action: {},
                                  },
                                },
                                allowTypes: false,
                                data: {},
                                properties: {

                                  iconProperties: { showIcon: false },
                                  required: true,
                                  dataProperties: { isVirtual: false, isType: true },
                                  commonProperties: { generateReference: false },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'inputtext_94m7xo',
                                tag: 'denominacaoSocial',
                                componentName: 'inputText',

                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
                                    type: 'function',
                                    function: { type: 'function' },
                                    action: {},
                                  },
                                },
                                allowTypes: false,
                                data: {},
                                properties: {

                                  iconProperties: { showIcon: false },
                                  required: true,
                                  dataProperties: { isVirtual: false, isType: true },
                                  commonProperties: { generateReference: false },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'inputtext_927gy6',
                                tag: 'nomeComercial',
                                componentName: 'inputText',

                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
                                    type: 'function',
                                    function: { type: 'function' },
                                    action: {},
                                  },
                                },
                                allowTypes: false,
                                data: {},
                                properties: {

                                  iconProperties: { showIcon: false },
                                  required: true,
                                  dataProperties: { isVirtual: false, isType: true },
                                  commonProperties: { generateReference: false },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'combobox_8hi371',
                                tag: 'codigoEstatuto',
                                componentName: 'combobox',

                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
                                    type: 'function',
                                    function: { fnCustomSet: '() => {}', type: 'function' },
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
                                  required: true,
                                  selectLabel: 'No option found',
                                  showSearch: true,
                                  gridSize: 'full',
                                  dataProperties: { isVirtual: false, isType: true },
                                  commonProperties: { generateReference: false },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'combobox_q4ey1i',
                                tag: 'tipoRepresentacao',
                                componentName: 'combobox',

                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
                                    type: 'function',
                                    function: {
                                      fnCustomSet:
                                        '(value)=>setSelecttipoRepresentacaoValue(value as string)',
                                      type: 'function',
                                      fnCustomCode: { imports: [] },
                                    },
                                    action: { actionCustomSet: '() => {}' },
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
                                  required: true,
                                  selectLabel: 'No option found',
                                  showSearch: true,
                                  iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                                  dataProperties: { isVirtual: false, isType: true },
                                  commonProperties: { generateReference: false },
                                  gridSize: '',
                                },
                                childProperties: {},
                                rules: [],
                              },
                              {
                                id: 'inputtext_24oey4',
                                tag: 'nomeResponsavel',
                                componentName: 'inputText',

                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
                                    type: 'function',
                                    function: { type: 'function' },
                                    action: {},
                                  },
                                },
                                allowTypes: false,
                                data: {},
                                properties: {

                                  iconProperties: { showIcon: false },
                                  required: true,
                                  dataProperties: { isVirtual: false, isType: true },
                                  commonProperties: { generateReference: false },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'inputdatepicker_po3deb',
                                tag: 'dataInicioAtividade',
                                componentName: 'inputDatePicker',

                                type: 'group',
                                children: [],
                                interactions: {
                                  onDateChange: {
                                    type: 'function',
                                    function: { type: 'function' },
                                    action: {},
                                  },
                                },
                                allowTypes: false,
                                data: {},
                                properties: {
                                  date: '2025-01-01',

                                  placeholder: 'Please select a date...',
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
                                  pagedNavigation: false,
                                  reverseMonths: false,
                                  captionLayout: 'label',
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
                              variant: { default: 'cols1', md: 'cols2', lg: '', xs: '' },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: { className: 'col-span-1' },
                            style: {},
                          },
                          {
                            id: 'container_4n20xj',
                            tag: 'container1',
                            componentName: 'container',

                            type: 'group',
                            children: [
                              {
                                id: 'text_dys27z',
                                tag: 'text1',
                                componentName: 'text',

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
                                  commonProperties: { generateReference: false },
                                },
                                childProperties: {},
                              },
                              {
                                id: 'combobox_fk02jf',
                                tag: 'uuidSede',
                                componentName: 'combobox',

                                type: 'group',
                                children: [],
                                interactions: {
                                  onChange: {
                                    type: 'function',
                                    function: { fnCustomSet: '() => {}', type: 'function' },
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

                                  variant: 'single',
                                  placeholder: 'Select an option...',
                                  required: true,
                                  selectLabel: 'No option found',
                                  showSearch: true,
                                  iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                                  dataProperties: { isVirtual: false, isType: true },
                                  commonProperties: { generateReference: false },
                                  gridSize: 'full',
                                },
                                childProperties: {},
                              },
                            ],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {
                              commonProperties: { generateReference: false },
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

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              required: false,
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
                          spaceX: '3',
                          spaceY: '3',
                          commonProperties: {},
                          className: '',
                        },
                        childProperties: { className: '', commonProperties: {} },
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

                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: { commonProperties: {} },
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: { commonProperties: { generateReference: true } },
                    childProperties: {},
                  },
                  {
                    id: 'formlist_4ayxgn',
                    tag: 'actividadesEconomicas',
                    componentName: 'formList',

                    type: 'group',
                    children: [
                      {
                        id: 'grid_00pig4',
                        tag: 'grid2',
                        componentName: 'grid',

                        type: 'group',
                        children: [
                          {
                            id: 'combobox_39cam7',
                            tag: 'idActividadeEconomica',
                            componentName: 'combobox',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: {
                                  fnCustomSet:
                                    '(value) => {updateActividade(value as string, index)}',
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
                              required: true,
                              selectLabel: 'No option found',
                              showSearch: true,
                              iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputnumber_ezr6bm',
                            tag: 'soat',
                            componentName: 'inputNumber',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: { type: 'function' },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {

                              name: 'number',
                              max: 9999999,
                              step: 1,
                              required: true,
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                              disabled: true,
                            },
                            childProperties: {},
                          },
                          {
                            id: 'checkbox_bi8c08',
                            tag: 'principal',
                            componentName: 'checkbox',

                            type: 'group',
                            children: [],
                            interactions: {
                              onCheckedChange: {
                                type: 'function',
                                function: { type: 'function' },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {

                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputhidden_c3pyhj',
                            tag: 'inputHidden2',
                            componentName: 'inputHidden',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              required: false,
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
                          variant: { default: 'cols1', md: 'cols2', lg: 'cols4' },
                          commonProperties: { generateReference: false },
                        },
                        childProperties: { className: 'col-span-1' },
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
                        value: { id: '', code: '' },
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

                      description: 'Atividades econômicas do contribuinte',
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: 'SOAT Ponderado: 0.00%',
                      computeLabel: { code: 'Item ${index}' },
                      iconProperties: {
                        showIcon: false,
                        addButtonIconName: 'Plus',
                        iconName: 'Briefcase',
                      },
                      addButtonLabel: 'Add',
                      commonProperties: { generateReference: true },
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

                    type: 'group',
                    children: [
                      {
                        id: 'grid_wpujgp',
                        tag: 'grid3',
                        componentName: 'grid',

                        type: 'group',
                        children: [
                          {
                            id: 'combobox_28kwl8',
                            tag: 'tipoEndereco',
                            componentName: 'combobox',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: { fnCustomSet: '() => {}', type: 'function' },
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
                              required: true,
                              selectLabel: 'No option found',
                              showSearch: true,
                              iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                              gridSize: '',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputtext_9s7kmv',
                            tag: 'rua',
                            componentName: 'inputText',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: { type: 'function' },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: { showIcon: false },
                              required: true,
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputtext_iwa52m',
                            tag: 'pontoRef',
                            componentName: 'inputText',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: { type: 'function' },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: { showIcon: false },
                              required: true,
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'combobox_w4zn59',
                            tag: 'idGeografia',
                            componentName: 'combobox',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: { fnCustomSet: '() => {}', type: 'function' },
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
                              required: true,
                              selectLabel: 'No option found',
                              showSearch: true,
                              iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                              gridSize: '',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputtext_u4ya54',
                            tag: 'caixaPostal',
                            componentName: 'inputText',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: { type: 'function' },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: { showIcon: false },
                              required: false,
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputtext_dm8n05',
                            tag: 'numPorta',
                            componentName: 'inputText',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: { type: 'function' },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: { showIcon: false },
                              required: false,
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputhidden_7ez4pt',
                            tag: 'inputHidden1',
                            componentName: 'inputHidden',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              required: false,
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
                          variant: { default: 'cols1', md: 'cols2', lg: 'cols4' },
                          commonProperties: { generateReference: false },
                        },
                        childProperties: { className: 'col-span-1' },
                        style: {},
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

                      description: 'Endereços do contribuinte',
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: '',
                      computeLabel: { code: 'Item ${index}' },
                      iconProperties: {
                        showIcon: false,
                        addButtonIconName: 'Plus',
                        iconName: 'MapPin',
                      },
                      addButtonLabel: 'Add',
                      commonProperties: { generateReference: true },
                    },
                    childProperties: {},
                  },
                  {
                    id: 'formlist_j5e1ei',
                    tag: 'contactos',
                    componentName: 'formList',

                    type: 'group',
                    children: [
                      {
                        id: 'grid_t2sdvb',
                        tag: 'grid1',
                        componentName: 'grid',

                        type: 'group',
                        children: [
                          {
                            id: 'combobox_wunewz',
                            tag: 'tipoContacto',
                            componentName: 'combobox',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: { fnCustomSet: '() => {}', type: 'function' },
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
                              required: true,
                              selectLabel: 'No option found',
                              showSearch: true,
                              iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                              gridSize: '',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputtext_03844c',
                            tag: 'contacto',
                            componentName: 'inputText',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: { type: 'function' },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: { showIcon: false },
                              required: false,
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputhidden_v89g4u',
                            tag: 'inputHidden3',
                            componentName: 'inputHidden',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              required: false,
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
                          variant: 'cols2',
                          commonProperties: { generateReference: false },
                        },
                        childProperties: { className: 'col-span-1' },
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
                        value: { id: '', code: '' },
                      },
                    },
                    properties: {

                      computeLabel: { code: 'Item ${index}' },
                      addButtonLabel: 'Add',
                      addButtonIconName: 'Plus',
                      commonProperties: { generateReference: true },
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: '',
                      iconProperties: { showIcon: true, iconName: 'Phone' },
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

                    type: 'group',
                    children: [
                      {
                        id: 'grid_j24fe6',
                        tag: 'grid4',
                        componentName: 'grid',

                        type: 'group',
                        children: [
                          {
                            id: 'combobox_vy4apt',
                            tag: 'idOperadora',
                            componentName: 'combobox',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: { fnCustomSet: '() => {}', type: 'function' },
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

                              variant: 'single',
                              placeholder: 'Select an option...',
                              required: true,
                              selectLabel: 'No option found',
                              showSearch: true,
                              iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                              gridSize: 'full',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputtext_vzm1mj',
                            tag: 'nib',
                            componentName: 'inputText',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: { showIcon: false },
                              required: true,
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputtext_mtqayc',
                            tag: 'numConta',
                            componentName: 'inputText',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              iconProperties: { showIcon: false },
                              required: true,
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputhidden_2lmdr8',
                            tag: 'inputHidden4',
                            componentName: 'inputHidden',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              required: false,
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
                          variant: { default: 'cols1', md: 'cols2', lg: 'cols3' },
                          commonProperties: { generateReference: false },
                        },
                        childProperties: { className: 'col-span-1' },
                        style: {},
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

                      description: 'Informações bancárias do contribuinte',
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: '',
                      computeLabel: { code: 'Item ${index}' },
                      iconProperties: {
                        showIcon: true,
                        addButtonIconName: 'Plus',
                        iconName: 'CreditCard',
                      },
                      addButtonLabel: 'Add',
                      commonProperties: { generateReference: true },
                    },
                    childProperties: {},
                  },
                  {
                    id: 'formlist_i0c7bj',
                    tag: 'anexos',
                    componentName: 'formList',

                    type: 'group',
                    children: [
                      {
                        id: 'grid_v41n5f',
                        tag: 'grid5',
                        componentName: 'grid',

                        type: 'group',
                        children: [
                          {
                            id: 'combobox_xcimvq',
                            tag: 'idTipoDocumento',
                            componentName: 'combobox',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: { fnCustomSet: '() => {}', type: 'function' },
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

                              variant: 'single',
                              placeholder: 'Select an option...',
                              selectLabel: 'No option found',
                              showSearch: true,
                              iconProperties: { showIcon: false, iconName: 'CornerDownRight' },
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                              gridSize: 'full',
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputfile_k2fl4m',
                            tag: 'inputFile1',
                            componentName: 'inputFile',

                            type: 'group',
                            children: [],
                            interactions: {
                              onChange: {
                                type: 'function',
                                function: {
                                  type: 'function',
                                  fnCustomCode: { imports: [] },
                                  fnCustomSet: '(e)=>handleUploadFile(index,e)',
                                },
                                action: {},
                              },
                            },
                            allowTypes: false,
                            data: {},
                            properties: {

                              accept: 'application/pdf',
                              required: false,
                              dataProperties: { isVirtual: true, isType: true },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'uploadstate_lotvqj',
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
                              index: { value: { id: '', code: 'index' } },
                            },
                            properties: { customProperties: {} },
                            childProperties: {},
                          },
                          {
                            id: 'inputhidden_3pr884',
                            tag: 'url',
                            componentName: 'inputHidden',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              required: false,
                              dataProperties: { isVirtual: false, isType: true },
                              commonProperties: { generateReference: false },
                            },
                            childProperties: {},
                          },
                          {
                            id: 'inputhidden_wjyqmr',
                            tag: 'inputHidden5',
                            componentName: 'inputHidden',

                            type: 'group',
                            children: [],
                            interactions: {},
                            allowTypes: false,
                            data: {},
                            properties: {

                              required: false,
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
                          variant: { default: 'cols1', md: 'cols2', lg: 'cols4' },
                          commonProperties: { generateReference: false },
                        },
                        childProperties: { className: 'col-span-1' },
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

                      description: 'Documentos do contribuinte',
                      color: 'primary',
                      variant: 'solid',
                      badgeValue: '',
                      computeLabel: { code: 'Item ${index}' },
                      iconProperties: {
                        showIcon: true,
                        addButtonIconName: 'Plus',
                        iconName: 'FileText',
                      },
                      addButtonLabel: 'Add',
                      commonProperties: { generateReference: true },
                    },
                    childProperties: {},
                  },
                  {
                    id: 'container_jt1kmy',
                    tag: 'obs',
                    componentName: 'container',

                    type: 'group',
                    children: [
                      {
                        id: 'inputtextarea_bzhoju',
                        tag: 'observacao',
                        componentName: 'inputTextarea',

                        type: 'group',
                        children: [],
                        interactions: {
                          onChange: {
                            type: 'function',
                            function: { type: 'function' },
                            action: {},
                          },
                        },
                        allowTypes: false,
                        data: {},
                        properties: {
                          name: 'textarea',

                          rows: '3a',
                          required: true,
                          dataProperties: { isVirtual: false, isType: true },
                          commonProperties: { generateReference: false },
                          placeholder:
                            '123456',
                        },
                        childProperties: {},
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: { commonProperties: { generateReference: true } },
                    childProperties: {},
                  },
                ],
                interactions: [],
                tag: '',
                childProperties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              variant: { default: 'cols1', md: '', lg: 'cols4' },
              gap: 4,
              commonProperties: { generateReference: false },
            },
            childProperties: {},
          },
        ],
        interactions: {
          onSubmit: {
            type: 'function',
            function: {
              fnCustomSet: '',
              type: 'function',
              fnCustomCode: { imports: [] },
              fnName: 'handleFormSubmit',
            },
            action: { actionCustomSet: '(e) => {}' },
          },
        },
        allowTypes: true,
        data: {
          defaultValues: {
            state: {
              id: 'oevk6snrjf',
              type: 'any',
              name: 'formContribuinteData',
              defaultValue: 'initFormContribuinte',
              imports: [],
              generate: true,
            },
          },
        },
        properties: {
          validationMode: 'onBlur',
          gridClassName: '',
          commonProperties: { generateReference: false },
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
                namespace:
                  "import {useNewContribuinteParameterizations} from '@/app/(myapp)/hooks/use-parameterization'",
                id: 'tbwwrd2njo',
              },
              {
                id: 'import_rL8Qze',
                namespace: 'import { useRouter } from "next/navigation"',
              },
              {
                namespace:
                  "import {createOrUpdateContribuinte} from '@/app/(myapp)/hooks/use-contribuinte'",
                id: 'vzvpikea7d',
              },
            ],
            fnCode:
              "const router = useRouter()\nconst { tipoContato, tipoEndereco, tiposDocumento, tiposActividades, geografias, tiposAnexos, tiposEstaduto, bancos, tiposRespresentacao, sedes, isLoading } = useNewContribuinteParameterizations();\n\nuseEffect(() => {\n  if (isLoading) return;\n  setSelecttipoDocumentoOptions(tiposDocumento || [])\n  setSelecttipoEnderecoOptions(tipoEndereco || []);\n  setSelecttipoContactoOptions(tipoContato || []);\n  setSelectcodigoEstatutoOptions(tiposEstaduto || [])\n  setSelectidOperadoraOptions(bancos || [])\n  setSelectidTipoDocumentoOptions(tiposAnexos || [])\n  setSelectidActividadeEconomicaOptions((tiposActividades || []) as any);\n  setSelectidGeografiaOptions(geografias || [])\n  setSelecttipoRepresentacaoOptions(tiposRespresentacao || [])\n  setSelectuuidSedeOptions(sedes || [])\n\n\n\n}, [isLoading]);\n\nuseEffect(() => {\n  if (formform1Ref.current) {\n    const subscription = formform1Ref.current.watch((value) => {\n      setActividadesEconomicas(value.actividadesEconomicas);\n    });\n\n    return () => subscription.unsubscribe();\n  }\n}, [formform1Ref.current]);\n\nuseEffect(() => {\n  if (actividadesEconomicas) {\n    const weighted = calculeSOATPoderado();\n    setActividadesEconomicasBadgeValue(`SOAT Ponderado:${weighted}%`);\n  }\n}, [actividadesEconomicas]);\n\nuseEffect(() => {\n  if (shouldSubmit) {\n    formform1Ref.current?.submit();\n    onAfterSubmit?.();\n  }\n}, [shouldSubmit, onAfterSubmit]);\n\nuseEffect(() => {\n  if (initialData) {\n    setFormContribuinteData({\n      ...initialData,\n      dataInicioAtividade: initialData.dataInicioAtividade\n        ? new Date(initialData.dataInicioAtividade)\n        : undefined,\n    });\n    setMenuNavigation1BadgeContent(isEdit ? 'Edição' : 'Novo');\n  }\n}, [initialData, isEdit]);\n",
          },
        },
        action: {},
      },
    },
    childProperties: {},
  },
  functions: [
    {
      id: 'fnc_YV1t3t',
      name: 'calculeSOATPoderado',
      code: "if (actividadesEconomicas && actividadesEconomicas.length > 0) {\n  const total = actividadesEconomicas.reduce(\n    (sum: number, act: any) => sum + (Number.parseFloat(act.soat) || 0),\n    0,\n  );\n  const weighted = (total / actividadesEconomicas.length).toFixed(2);\n  return weighted;\n} else {\n  return '0.00';\n}",
      returnValue: { type: 'string', isOptional: true, isList: false },
      imports: [],
      arguments: [],
    },
    {
      id: 'fnc_AxVGnC',
      name: 'updateActividade',
      code: "// Find the selected CAE code\nconst selectedCae = tiposActividades.find((cae) => cae.value?.toString() === value.toString());\n\n// Get current form values\nconst currentValues = formform1Ref.current?.getValues();\n\n// Create the updated atividadesEconomicas array\nconst updatedAtividades = [...(currentValues?.actividadesEconomicas || [])];\nif (selectedCae && index !== undefined && index >= 0) {\n  updatedAtividades[index] = {\n    ...updatedAtividades[index],\n    soat: selectedCae.metadata?.taxa || 0,\n  };\n}\n\nformform1Ref.current?.setValue('actividadesEconomicas', updatedAtividades);\n\nconst weighted = calculeSOATPoderado();\n\nformform1Ref.current?.setValue('soatUsado', weighted);\n\n",
      returnValue: { type: 'void', isOptional: true, isList: false },
      imports: [],
      arguments: [
        {
          id: '1',
          name: 'value',
          type: 'string',
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
      isAsync: false,
    },
    {
      id: 'fnc_ampnHI',
      name: 'handleUploadFile',
      code: "const file = e?.target?.files?.[0];\n    if (!file) return;\n    console.log('File selected:', file);\n    console.log('Index:', index);\n    console.log('File name:', file.name);\n    console.log('File size:', file.size);\n    console.log('File type:', file.type);\n\n    // Store the file in state\n    setUploadedFiles((prev) => ({\n      ...prev,\n      [index]: { file, uploaded: false },\n    }));\n\n    // Set uploading state\n    setIsUploading((prev) => ({\n      ...prev,\n      [index]: true,\n    }));\n\n    try {\n      // Get the tipo documento from the form\n      const currentFormData = formform1Ref.current?.getValues();\n\n      // Upload the file\n      const uploadResponse =await uploadDocument({ file });\n\n      console.log(uploadResponse);\n\n      // Update the uploaded file state\n      setUploadedFiles((prev: any) => ({\n        ...prev,\n        [index]: {\n          file,\n          uploaded: true,\n          url: uploadResponse.displayName,\n        },\n      }));\n      // Update the form with the uploaded file URL\n      const updatedDocumentos = [...(currentFormData?.anexos || [])];\n      updatedDocumentos[index] = {\n        ...updatedDocumentos[index],\n        url: uploadResponse.displayName,\n      };\n\n      setFormContribuinteData((prev: any) => ({\n        ...prev,\n        ...currentFormData,\n        anexos: updatedDocumentos,\n      }));\n\n      igrpToast({\n        title: 'Sucesso',\n        description: 'Arquivo enviado com sucesso!',\n        type: 'success',\n      });\n    } catch (error) {\n      igrpToast({\n        title: 'Erro',\n        description: 'Erro ao enviar arquivo. Tente novamente.',\n        type: 'error',\n      });\n\n      // Remove the file from state on error\n      setUploadedFiles((prev) => {\n        const newState = { ...prev };\n        delete newState[index];\n        return newState;\n      });\n    } finally {\n      // Clear uploading state\n      setIsUploading((prev) => ({\n        ...prev,\n        [index]: false,\n      }));\n    }",
      returnValue: { type: 'void', isOptional: true, isList: false },
      imports: [
        {
          namespace: "import {uploadDocument} from '@/app/(myapp)/hooks/use-contribuinte'",
          id: 'dah9a88mlv',
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
      id: 'fnc_M_s6lA',
      name: 'handleFormSubmit',
      code: "const contribuinte: any = {\n  ...values,\n  contribuinteId: initialData?.contribuinteId\n};\ntry {\n  await createOrUpdateContribuinte(contribuinte);\n  igrpToast({\n    title: 'Sucesso',\n    description: isEdit\n      ? 'Contribuinte atualizado com sucesso'\n      : 'Contribuinte gravado com sucesso',\n    type: 'success',\n  });\n  router.push('/contribuintes');\n} catch (error:any) {\n  igrpToast({\n    title: 'Erro',\n    description: `Ocorreu um erro ao processar o formulário. [${error.message}]`,\n    type: 'error',\n  });\n  console.log(error);\n}\n",
      returnValue: { type: 'void', isOptional: true, isList: false },
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
          isList: false,
        },
        {
          componentId: 'inputtext_tricll',
          name: 'numDocumentoInscricao',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'inputtext_94m7xo',
          name: 'denominacaoSocial',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'inputtext_927gy6',
          name: 'nomeComercial',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'combobox_8hi371',
          name: 'codigoEstatuto',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'combobox_q4ey1i',
          name: 'tipoRepresentacao',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'inputtext_24oey4',
          name: 'nomeResponsavel',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'inputdatepicker_po3deb',
          name: 'dataInicioAtividade',
          type: 'date',
          required: true,
          defaultValue: '',
          isList: false,
        },
        {
          componentId: 'combobox_fk02jf',
          name: 'uuidSede',
          type: 'string',
          required: false,
          isList: false,
        },
        {
          componentId: 'inputhidden_vtwlok',
          name: 'soatUsado',
          type: 'string',
          required: false,
          isList: false,
        },
        {
          componentId: 'formlist_4ayxgn',
          name: 'actividadesEconomicas',
          type: 'object',
          required: false,
          isList: true,
          fields: [
            {
              componentId: 'combobox_39cam7',
              name: 'idActividadeEconomica',
              type: 'number',
              required: true,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputnumber_ezr6bm',
              name: 'soat',
              type: 'number',
              required: false,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'checkbox_bi8c08',
              name: 'principal',
              type: 'boolean',
              required: false,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputhidden_c3pyhj',
              name: 'id',
              type: 'number',
              required: false,

              isList: false,
            },
          ],
        },
        {
          componentId: 'formlist_x67fp6',
          name: 'enderecos',
          type: 'object',
          required: false,
          isList: true,
          fields: [
            {
              componentId: 'combobox_28kwl8',
              name: 'tipoEndereco',
              type: 'string',
              required: true,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputtext_9s7kmv',
              name: 'rua',
              type: 'string',
              required: true,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputtext_iwa52m',
              name: 'pontoRef',
              type: 'string',
              required: true,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'combobox_w4zn59',
              name: 'idGeografia',
              type: 'number',
              required: true,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputtext_u4ya54',
              name: 'caixaPostal',
              type: 'string',
              required: false,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputtext_dm8n05',
              name: 'numPorta',
              type: 'string',
              required: false,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputhidden_7ez4pt',
              name: 'id',
              type: 'number',
              required: false,

              isList: false,
            },
          ],
        },
        {
          componentId: 'formlist_j5e1ei',
          name: 'contactos',
          type: 'object',
          required: false,
          isList: true,
          fields: [
            {
              componentId: 'combobox_wunewz',
              name: 'tipoContacto',
              type: 'string',
              required: true,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputtext_03844c',
              name: 'contacto',
              type: 'string',
              required: false,
              defaultValue: '',
              isList: false,
              validation: {  },
            },
            {
              componentId: 'inputhidden_v89g4u',
              name: 'id',
              type: 'number',
              required: false,

              isList: false,
            },
          ],
        },
        {
          componentId: 'formlist_3flio8',
          name: 'dadosBancarios',
          type: 'object',
          required: false,
          isList: true,
          fields: [
            {
              componentId: 'combobox_vy4apt',
              name: 'idOperadora',
              type: 'number',
              required: true,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputtext_vzm1mj',
              name: 'nib',
              type: 'string',
              required: true,
              defaultValue: '',

              isList: false,
              validation: { regex: '/^[0-9]+$/', startsWith: '', maxLength: 21 },
            },
            {
              componentId: 'inputtext_mtqayc',
              name: 'numConta',
              type: 'string',
              required: true,
              defaultValue: '',

              isList: false,
              validation: { regex: '/^[0-9]+$/' },
            },
            {
              componentId: 'inputhidden_2lmdr8',
              name: 'id',
              type: 'number',
              required: false,

              isList: false,
            },
          ],
        },
        {
          componentId: 'formlist_i0c7bj',
          name: 'anexos',
          type: 'object',
          required: false,
          isList: true,
          fields: [
            {
              componentId: 'combobox_xcimvq',
              name: 'idTipoDocumento',
              type: 'number',
              required: true,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputhidden_3pr884',
              name: 'url',
              type: 'string',
              required: false,
              defaultValue: '',

              isList: false,
            },
            {
              componentId: 'inputhidden_wjyqmr',
              name: 'id',
              type: 'number',
              required: false,

              isList: false,
            },
          ],
        },
        {
          componentId: 'inputtextarea_bzhoju',
          name: 'observacao',
          type: 'string',
          required: true,
          defaultValue: '',
          isList: false,
        },
      ],
    },
  ],
  states: [
    {
      id: 'state__mQ5Zh',
      name: 'actividadesEconomicasBadgeValue',
      type: 'string',
      imports: [],
      defaultValue: "'SOAT Ponderado: 0.00%'",
    },
    {
      id: 'state_KBZkPH',
      name: 'actividadesEconomicas',
      type: 'any',
      defaultValue: '',
      imports: [],
    },
    {
      id: 'state_tubki7',
      name: 'menuNavigation1BadgeContent',
      type: 'string',
      imports: [],
      defaultValue: "'Novo'",
    },
    {
      id: 'state_SIyLL',
      name: 'isUploading',
      type: 'UploadingState',
      defaultValue: '{}',
      imports: [
        { namespace: "import {UploadingState} from '@/app/(myapp)/types/index'", id: '2z11xvk1c3' },
      ],
    },
    {
      id: 'state_C3Q8dt',
      name: 'uploadedFiles',
      type: 'UploadingFiles',
      defaultValue: '{}',
      imports: [
        { namespace: "import {UploadingFiles} from '@/app/(myapp)/types/index'", id: '20jwv4g1lv' },
      ],
    },
  ],
  imports: [],
};

beforeAll(async () => {
  await initComponents();
});

describe('Component module', () => {
  it('should save the component configuration file', async () => {
    await newComponent(componentConfig2, OUTPUT_DIR);
  });
});
