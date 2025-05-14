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
  "id": "p2o6p3dyxf",
  "type": "page",
  "path": "teste",
  "pageName": "teste",
  "components": {
    "id": "container_89db3l",
    "componentName": "container",
    "label": "container",
    "properties": {
      "variant": "default"
    },
    "children": [
      {
        "id": "section_4r8j2x",
        "componentName": "section",
        "label": "section",
        "properties": {
          "variant": "default"
        },
        "children": [
          {
            "id": "pageheader_5u79tu",
            "tag": "pageHeader1",
            "componentName": "pageHeader",
            "label": "Page Header",
            "type": "group",
            "properties": {
              "title": "Page Title",
              "description": "Page Description",
              "variant": "h3",
              "commonProperties": {}
            },
            "children": [
              {
                "id": "button_xw0r3t",
                "tag": "button1",
                "componentName": "button",
                "label": "Button",
                "type": "group",
                "properties": {
                  "label": "Button",
                  "variant": "default",
                  "size": "default",
                  "iconProperties": {
                    "showIcon": false
                  },
                  "disabled": false,
                  "commonProperties": {}
                },
                "children": [],
                "interactions": {
                  "onClick": {
                    "fnCustomSet": "() => {}"
                  }
                },
                "allowTypes": false
              }
            ],
            "interactions": {},
            "allowTypes": false
          },
          {
            "id": "combobox_jjqdsp",
            "tag": "combobox1",
            "componentName": "combobox",
            "label": "Combobox",
            "type": "group",
            "children": [],
            "interactions": {
              "onChange": {
                "fnCustomSet": "() => {}"
              }
            },
            "allowTypes": false,
            "data": {
              "value": {},
              "options": {
                "state": {
                  "id": "",
                  "type": "array",
                  "name": "select{{id}}Options",
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
          }
        ],
        "interactions": [],
        "tag": ""
      }
    ],
    "interactions": [],
    "tag": ""
  },
  "functions": [],
  "types": [],
  "states": [
    {
      "id": "_drtane",
      "name": "select{{id}}Value",
      "type": "string",
      "defaultValue": "{{value}}"
    }
  ],
  "imports": []
};

beforeAll(async () => {
  await initComponents();
});

describe('Page module',() =>{
  it('should save the page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
