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
  path: 'todolist',
  components: {
    id: 'page_plnw6v',
    componentName: 'page',
    label: 'page',
    properties: {
      variant: 'default',
      commonProperties: {},
    },
    children: [
      {
        id: 'section_ulvula',
        componentName: 'section',
        label: 'section',
        properties: {
          spaceX: '3',
          spaceY: '3',
          commonProperties: {},
        },
        children: [
          {
            id: 'inputsearch_w6ntra',
            tag: 'inputSearch1',
            componentName: 'inputSearch',
            label: 'Input Search',
            type: 'group',
            children: [],
            style: {
              layout: {
                type: 'flex',
                flex: {
                  direction: 'row',
                  wrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                },
              },
              spacing: {
                margin: {
                  top: {
                    value: 10,
                    unit: 'px',
                  },
                  bottom: {
                    value: 10,
                    unit: 'px',
                  },
                },
                padding: {
                  left: {
                    value: 20,
                    unit: 'px',
                  },
                  right: {
                    value: 20,
                    unit: 'px',
                  },
                },
              },
            },
            interactions: {
              onSearch: {
                type: 'function',
              },
            },
            allowTypes: false,
            data: {},
            properties: {
              label: 'Input Search',
              placeholder: '',
              helperText: '',
              iconProperties: {
                showStartIcon: false,
                startIcon: 'Search',
                submitIcon: 'ArrowRight',
              },
              showSubmitButton: false,
              disabled: false,
              required: false,
              dataProperties: {
                isVirtual: false,
                isType: true,
              },
              className: 'flex flex-col',
              commonProperties: {},
            },
          },
        ],
        tag: 'section2',
        data: {},
        interactions: {},
      },
    ],
    tag: 'page2',
    data: {},
    interactions: {
      onLoad: {
        type: 'function',
      },
    },

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
