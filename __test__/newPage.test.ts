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
  "id": "hzdreww0i4",
  "type": "page",
  "path": "test12",
  "components": {
    "id": "page_2g43kv",
    "componentName": "page",
    "label": "page",
    "properties": {
      "commonProperties": {}
    },
    "children": [
      {
        "id": "section_qeffl2",
        "componentName": "section",
        "label": "section",
        "properties": {
          "commonProperties": {}
        },
        "children": [
          {
            "id": "combobox_s12by7",
            "tag": "combobox1",
            "componentName": "combobox",
            "label": "Combobox",
            "type": "group",
            "children": [],
            "interactions": {
              "onChange": {
                "fnCustomSet": "() => {}",
                "type": "function"
              }
            },
            "allowTypes": false,
            "data": {
              "value": {},
              "options": {
                "state": {
                  "id": "",
                  "type": "array",
                  "name": "selectOptions",
                  "defaultValue": "[]",
                  "imports": []
                }
              }
            },
            "properties": {
              "label": "Combobox Input",
              "variant": "single",
              "placeholder": "Select an option...",
              "selectLabel": "No option found",
              "dataProperties": {
                "isVirtual": false,
                "isType": true
              },
              "commonProperties": {}
            }
          },
          {
            "id": "inputsearch_xi4ash",
            "tag": "inputSearch1",
            "componentName": "inputSearch",
            "label": "Input Search",
            "type": "group",
            "children": [],
            "interactions": {
              "onSearch": {
                "type": "function"
              }
            },
            "allowTypes": false,
            "data": {},
            "properties": {
              "label": "Input Search",
              "placeholder": "",
              "helperText": "",
              "iconProperties": {
                "showStartIcon": false,
                "startIcon": "Search",
                "submitIcon": "ArrowRight"
              },
              "showSubmitButton": false,
              "disabled": false,
              "required": false,
              "dataProperties": {
                "isVirtual": false,
                "isType": true
              },
              "commonProperties": {}
            }
          }
        ],
        "tag": "section2",
        "data": {},
        "interactions": {
          "onLoad": {
            "fnCustomCode": {
              "imports": [],
              "states": []
            },
            "type": "function"
          }
        }
      }
    ],
    "tag": "page2",
    "data": {},
    "interactions": {
      "onLoad": {
        "fnCustomCode": {
          "fnCode": "const pageService = new PageTesteService();\npageService.loadPage({\n  setSelectOptions:setSelectOptions,\n  selectOptions: selectOptions\n});",
          "imports": [
            {
              "id": "import_TC4URm",
              "namespace": "import { PageTesteService } from '@/app/(myapp)/functions/page-service';"
            }
          ]
        },
        "type": "function"
      }
    }
  },
  "functions": [],
  "types": [],
  "states": [],
  "imports": [],
  "pageName": "teste"
};

beforeAll(async () => {
  await initComponents();
});

describe('Page module',() =>{
  it('should save the page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
