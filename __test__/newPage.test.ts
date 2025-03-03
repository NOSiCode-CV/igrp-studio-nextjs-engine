import { newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const dashboardLayout: Layout = {
  id: "grid_dashboard",
  componentName: "grid",
  properties: {
    variant: "cols2",
    className: "border rounded-lg",
    padding: "4",
    gap: "6"
  },
  children: [
    {
      id: "flex_sidebar",
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
          componentName: "card",
          properties: {
            variant: "bordered"
          }
        }
      ]
    },
    {
      id: "container_main",
      componentName: "container",
      properties: {
        variant: "default"
      },
      children: [
        {
          id: "section_content",
          componentName: "section",
          properties: {
            className: "bg-gray-100 rounded-lg",
            padding: "6"
          }
        },
        {
          id: "label_field",
          componentName: 'label',
          content: "Name",
        },
        {
          id: "input_field",
          componentName: 'input',
          specs: {
            placeholder: "Enter the name"
          }
        },
        {
          id: "button_submit",
          componentName: 'button',
          content: "Submit"
        },
      ]
    }
  ]
};

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'registros',
  path: 'registros',
  components: dashboardLayout,
};

describe('Page module',() =>{
  it('should save the page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
