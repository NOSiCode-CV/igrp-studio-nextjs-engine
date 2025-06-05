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
  id: 'i6g2datcmk',
  type: 'page',
  description: 'Meu Projetão em Português',
  path: 'todolist',
  components: {
    id: 'page_0hkjfi',
    componentName: 'page',
    label: 'page',
    properties: {
      variant: 'default',
      commonProperties: {},
    },
    children: [
      {
        id: 'section_gk4epq',
        componentName: 'section',
        label: 'section',
        properties: {
          spaceX: '3',
          spaceY: '3',
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
                id: 'button_e1w7ab',
                tag: 'button1',
                componentName: 'button',
                label: 'Button',
                type: 'group',
                children: [],
                interactions: {
                  onClick: {
                    type: 'navigate',
                    function: {
                      fnCustomSet: '() => {}',
                      fnCustomCode: {
                        imports: [],
                      },
                      type: 'function',
                    },
                    action: {
                      actionCustomSet: '() => {}',
                    },
                    navigate: {
                      path: 'utentes',
                      name: 'goTolistaDeUtente',
                    },
                  },
                },
                allowTypes: false,
                data: {},
                properties: {
                  label: 'Cancelar',
                  variant: 'outline',
                  size: 'default',
                  iconProperties: {
                    showIcon: true,
                  },
                  disabled: false,
                  commonProperties: {},
                  content: 'Voltar',
                },
                childProperties: {},
              },
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
                  content: 'Salvar Benificiário',
                },
                childProperties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              title: 'Novo Benificiário',
              description: '',
              variant: 'h3',
              commonProperties: {},
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
                id: 'card_asn7ee',
                tag: 'card1',
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
                          title: 'Idenficaçāo de Benificiário',
                          description: '',
                          variant: 'h6',
                          commonProperties: {},
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
                  {
                    id: 'cardcontent_04zpeq',
                    tag: 'cardContent1',
                    componentName: 'cardContent',
                    label: 'Card Content',
                    childProperties: {
                      className: 'col-span-2',
                    },
                    children: [
                      {
                        id: 'select_8suc5w',
                        tag: 'select1',
                        componentName: 'select',
                        label: 'Select',
                        type: 'group',
                        children: [],
                        interactions: {
                          onValueChange: {
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
                              name: 'selectselect1Value',
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
                              name: 'selectselect1Options',
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
                          label: 'Select Input',
                          placeholder: 'Select an option...',
                          options: [],
                          gridSize: 'full',
                          dataProperties: {
                            isVirtual: false,
                            isType: true,
                          },
                          commonProperties: {},
                        },
                      },
                      {
                        id: 'grid',
                        tag: 'grid',
                        componentName: 'grid',
                        properties: {},
                        childProperties: {
                          className: 'col-span-1',
                        },
                        children: [
                          {
                            id: 'select_8suc5w2',
                            tag: 'select122',
                            componentName: 'select',
                            label: 'Select',
                            type: 'group',
                            children: [],
                            interactions: {
                              onValueChange: {
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
                                  name: 'selectselect1Value',
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
                                  name: 'selectselect1Options',
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
                              label: 'Test Child Property',
                              placeholder: 'Select an option...',
                              options: [],
                              gridSize: 'full',
                              dataProperties: {
                                isVirtual: false,
                                isType: true,
                              },
                              commonProperties: {},
                            },
                          },
                        ]
                      },
                      {
                        id: 'combobox_72p27z',
                        tag: 'combobox1',
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
                              name: 'selectcombobox1Value',
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
                              name: 'selectcombobox1Options',
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
                          label: 'Combobox Input',
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
                        },
                      },
                      {
                        id: 'inputnumber_ujt3ms',
                        tag: 'inputNumber1',
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
                          label: 'Input Number',
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
                          commonProperties: {},
                        },
                      },
                      {
                        id: 'inputdatepicker_5xhz6r',
                        tag: 'inputDatePicker1',
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
                          label: 'Date Picker',
                          placeholder: 'Please select a date...',
                          helperText: '',
                          disabled: false,
                          required: false,
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
                        },
                      },
                      {
                        id: 'inputtext_tricll',
                        tag: 'inputText1',
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
                          label: 'Input Text',
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
                          commonProperties: {},
                        },
                      },
                      {
                        id: 'inputtext_94m7xo',
                        tag: 'inputText2',
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
                          label: 'Input Text',
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
                          commonProperties: {},
                        },
                      },
                      {
                        id: 'combobox_nxd4h2',
                        tag: 'combobox2',
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
                              name: 'selectcombobox2Value',
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
                              name: 'selectcombobox2Options',
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
                          label: 'Combobox Input',
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
                        },
                      },
                      {
                        id: 'combobox_keg9v6',
                        tag: 'combobox3',
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
                              name: 'selectcombobox3Value',
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
                              name: 'selectcombobox3Options',
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
                          label: 'Combobox Input',
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
                        },
                      },
                      {
                        id: 'inputdatepicker_r0r8vk',
                        tag: 'inputDatePicker2',
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
                          label: 'Date Picker',
                          placeholder: 'Please select a date...',
                          helperText: '',
                          disabled: false,
                          required: false,
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
                        },
                      },
                      {
                        id: 'combobox_jn3n4l',
                        tag: 'combobox4',
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
                              name: 'selectcombobox4Value',
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
                              name: 'selectcombobox4Options',
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
                          label: 'Combobox Input',
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
                        },
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
                  commonProperties: {},
                },
              },
              {
                id: 'card_b9hyyp',
                tag: 'card2',
                componentName: 'card',
                label: 'Card',
                type: 'group',
                children: [
                  {
                    id: 'cardheader_ov6zup',
                    tag: 'cardHeader2',
                    componentName: 'cardHeader',
                    label: 'Card Header',
                    children: [
                      {
                        id: 'headline_uv4cvl',
                        tag: 'headline2',
                        componentName: 'headline',
                        label: 'Headline',
                        type: 'group',
                        children: [],
                        interactions: {},
                        allowTypes: false,
                        data: {},
                        properties: {
                          title: 'Page Title',
                          description: 'Page Description',
                          variant: 'h3',
                          commonProperties: {},
                        },
                      },
                    ],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      commonProperties: {},
                    },
                  },
                  {
                    id: 'cardcontent_j8u9tr',
                    tag: 'cardContent2',
                    componentName: 'cardContent',
                    label: 'Card Content',
                    children: [],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      spaceX: '3',
                      spaceY: '3',
                      commonProperties: {},
                    },
                  },
                  {
                    id: 'cardfooter_lqyash',
                    tag: 'cardFooter2',
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
                  commonProperties: {},
                },
              },
            ],
            interactions: {
              onSubmit: {
                type: 'function',
                function: {
                  fnCustomSet: '(e) => {}',
                  type: 'function',
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
                  defaultValue: 'null',
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
          },
        ],
        tag: 'section1',
        data: {},
        interactions: {},
      },
    ],
    tag: 'page1',
    data: {},
    interactions: {
      onLoad: {
        type: 'function',
        function: {
          type: 'function',
        },
        action: {},
      },
    },
    childProperties: {},
  },
  functions: [],
  types: [],
  states: [],
  imports: [],
  pageName: 'todoList',
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
