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
  type: 'page',
  pageName: 'alertPage',
  path: 'alert-page',
  description: 'Alert Page',
  forceDynamic: false,
  id: '5ksy1yoe4b',
  types: [],
  states: [],
  functions: [],
  args: [],
  components: {
    id: 'page_of832h',
    componentName: 'page',
    label: 'page',
    properties: { variant: 'default', commonProperties: {} },
    children: [
      {
        id: 'section_jun6km',
        componentName: 'section',
        label: 'section',
        properties: { spaceX: '6', spaceY: '6', commonProperties: {} },
        children: [
          {
            id: 'alertdialog_d8uwat',
            tag: 'alertDialog1',
            componentName: 'alertDialog',
            label: 'Alert Dialog',
            type: 'group',
            children: [],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: {
              name: 'alertDialog',
              variant: 'primary',
              title: 'Alert Dialog',
              description: 'A alert dialog',
              type: 'default',
              size: 'md',
              showCancel: true,
              iconProperties: { showIcon: false },
              cancelLabel: 'Cancel',
              actionLabel: 'Confirm',
              actionProps: {
                content: 'Button',
                variant: 'default',
                size: 'default',
                disabled: false,
                iconProperties: {},
                commonProperties: {},
              },
              cancelProps: {
                content: 'Button',
                variant: 'default',
                size: 'default',
                disabled: false,
                iconProperties: {},
                commonProperties: {},
              },
              commonProperties: { generateReference: false },
            },
            childProperties: {},
          },
        ],
        tag: 'section2',
        data: {},
        interactions: {},
      },
    ],
    tag: 'page2',
    data: {},
    interactions: { onLoad: { type: 'function', function: { type: 'function' }, action: {} } },
  },
  imports: [],
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
