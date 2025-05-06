import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const dashboardLayout: Layout = {
  id: "grid_dashboard",
  tag: "grid_dashboard",
  componentName: "grid",
  properties: {
    variant: "cols2",
    className: "border rounded-lg",
    padding: "4"
  },
  children: [
    {
      id: "flex_sidebar",
      tag: "flex_sidebar",
      componentName: "flex",
      properties: {
        variant: "col",
        className: "border-r",
        width: "1/4",
        padding: "4"
      },
      children: [
        {
          id: "card_profile",
          tag: "card_profile",
          componentName: "card",
          properties: {
            variant: "bordered"
          }
        }
      ]
    },
    {
      id: "container_main",
      tag: "container_main",
      componentName: "container",
      properties: {
        variant: "default"
      },
      children: [
        {
          id: "section_content",
          tag: "section_content",
          componentName: "section",
          properties: {
            className: "bg-gray-100 rounded-lg",
            padding: "6"
          }
        },
        {
          id: "label_field",
          tag: "label_field",
          componentName: 'label',
          content: "Name",
        },
        {
          id: "input_field",
          tag: "input_field",
          componentName: 'input',
          properties: {
            placeholder: "Enter the name"
          }
        },
        {
          id: "checkbox_1",
          tag: "checkbox_1",
          componentName: 'checkbox'
        },
        {
          id: "button_submit",
          tag: "button_submit",
          componentName: 'button',
          content: "Submit"
        },

      ]
    }
  ]
};

const pageConfig: PageConfig = {
  id: 'e76Typ9lm2m1',
  type: 'page',
  types: [],
  pageName: 'registros',
  description: "Registros",
  path: '[[...teste]]/[param]/(auth)/login',
  components: dashboardLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Page module',() =>{
  it('should save the page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
