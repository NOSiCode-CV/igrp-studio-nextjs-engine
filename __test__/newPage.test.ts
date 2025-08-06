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
  "type": "page",
  "pageName": "Agregados",
  "path": "(utente)/utentes/[uuid]/agregados",
  "description": "Agregados",
  "forceDynamic": false,
  "id": "1lgj6xeomz",
  "types": [
    {
      "componentId": "table_8ikc83",
      "name": "table1",
      "path": "",
      "fields": [
        {
          "componentId": "tablehiddencell_2dudz0",
          "name": "utenteId",
          "type": "string",
          "required": false,
          "defaultValue": ""
        },
        {
          "componentId": "tabletextcell_0v0d2r",
          "name": "numeroUtente",
          "type": "string",
          "required": false,
          "defaultValue": ""
        },
        {
          "componentId": "tabletextcell_vkzdkd",
          "name": "nome",
          "type": "string",
          "required": false,
          "defaultValue": ""
        },
        {
          "componentId": "tabletextcell_yrdh7a",
          "name": "dtNascimento",
          "type": "string",
          "required": false,
          "defaultValue": ""
        },
        {
          "componentId": "tablebadgecell_zie5kn",
          "name": "sexoDesc",
          "type": "string",
          "required": false,
          "defaultValue": ""
        },
        {
          "componentId": "tabletextcell_b1o1nl",
          "name": "dtInscricao",
          "type": "string",
          "required": false,
          "defaultValue": ""
        },
        {
          "componentId": "tablebadgecell_0pqc9l",
          "name": "estado",
          "type": "string",
          "required": false,
          "defaultValue": ""
        }
      ]
    }
  ],
  "states": [
    {
      "id": "state_Bhg83S",
      "name": "select1Placeholder",
      "type": "string",
      "imports": [],
      "defaultValue": ""
    },
    {
      "id": "state_tlz9Y",
      "name": "showFilter",
      "type": "boolean",
      "defaultValue": "false",
      "imports": []
    },
    {
      "id": "state_lDU4Xi",
      "name": "searchValue",
      "type": "string",
      "imports": [],
      "defaultValue": " "
    },
    {
      "id": "state_ZFWkE",
      "name": "openAdicaoRapida",
      "type": "boolean",
      "defaultValue": "false",
      "imports": []
    },
    {
      "id": "state_JvdgxA",
      "name": "openModalCessar",
      "type": "boolean",
      "defaultValue": "false",
      "imports": []
    },
    {
      "id": "state_wPzakH",
      "name": "currentUtente",
      "type": "any",
      "defaultValue": "",
      "imports": []
    }
  ],
  "functions": [],
  "args": [
    {
      "id": "jict2wqikf",
      "type": "string",
      "name": "uuid",
      "isList": false,
      "isOptional": false,
      "isInterface": false,
      "isFunction": false,
      "isState": false
    }
  ],
  "components": {
    "id": "page_etie93",
    "componentName": "page",
    "label": "page",
    "properties": {
      "variant": "default",
      "commonProperties": {
        "generateReference": false
      }
    },
    "children": [
      {
        "id": "section_6sx8k0",
        "componentName": "section",
        "label": "section",
        "properties": {
          "spaceX": "3",
          "spaceY": "6",
          "commonProperties": {}
        },
        "children": [
          {
            "id": "pageheader_okzejp",
            "tag": "pageHeader1",
            "componentName": "pageHeader",
            "label": "Page Header",
            "type": "group",
            "children": [
              {
                "id": "button_32zgrt",
                "tag": "button1",
                "componentName": "button",
                "label": "Button",
                "type": "group",
                "children": [],
                "interactions": {
                  "onClick": {
                    "type": "navigate",
                    "function": {
                      "fnCustomSet": "() => {}",
                      "type": "function",
                      "fnCustomCode": {
                        "imports": []
                      }
                    },
                    "action": {
                      "actionCustomSet": "() => {}"
                    },
                    "navigate": {
                      "path": "(utente)/utentes/[uuid]/agregados/novo",
                      "name": "goTonovoAgregado",
                      "params": {},
                      "segments": [
                        {
                          "name": "[uuid]",
                          "tag": "uuid",
                          "context": "variable"
                        }
                      ]
                    }
                  }
                },
                "allowTypes": false,
                "data": {},
                "properties": {
                  "content": "Novo",
                  "variant": "secondary",
                  "size": "default",
                  "iconProperties": {
                    "showIcon": true,
                    "iconName": "Plus"
                  },
                  "commonProperties": {
                    "generateReference": false
                  }
                },
                "childProperties": {},
                "style": {}
              }
            ],
            "interactions": {},
            "allowTypes": false,
            "data": {},
            "properties": {
              "title": "Agregados",
              "description": "",
              "variant": "h3",
              "iconProperties": {
                "iconBackButton": "ArrowLeft"
              },
              "commonProperties": {
                "generateReference": false
              },
              "showBackButton": true,
              "urlBackButton": "(utente)/utentes"
            },
            "childProperties": {}
          },
          {
            "id": "grid_mx6nlw",
            "tag": "grid1",
            "componentName": "grid",
            "label": "Grid",
            "type": "group",
            "children": [
              {
                "id": "statscard_9fseux",
                "tag": "statsCard3",
                "componentName": "statsCard",
                "label": "Stats Card",
                "type": "group",
                "children": [],
                "interactions": {
                  "onClick": {
                    "type": "function",
                    "function": {
                      "fnCustomSet": "() => {}",
                      "type": "function"
                    },
                    "action": {
                      "actionCustomSet": "() => {}"
                    }
                  }
                },
                "allowTypes": false,
                "data": {
                  "value": {
                    "state": {
                      "id": "",
                      "type": "string | number",
                      "name": "statstatsCard3Value",
                      "defaultValue": "0",
                      "imports": [],
                      "generate": true
                    },
                    "value": {
                      "id": "",
                      "code": ""
                    }
                  }
                },
                "properties": {
                  "cardBorderPosition": "top",
                  "cardBorder": "rounded-md",
                  "cardVariant": "warning",
                  "iconBackground": "rounded",
                  "title": "Total de Agregado",
                  "titleSize": "sm",
                  "valueSize": "sm",
                  "iconProperties": {
                    "showIcon": true,
                    "iconName": "UsersRound",
                    "iconSize": "md",
                    "iconVariant": "warning",
                    "iconPlacement": "end"
                  },
                  "itemPlacement": "start",
                  "commonProperties": {
                    "generateReference": false
                  },
                  "showIconBackground": true
                },
                "childProperties": {}
              }
            ],
            "interactions": {},
            "allowTypes": false,
            "data": {},
            "properties": {
              "gap": 4,
              "variant": {
                "default": "cols1",
                "md": "cols2",
                "lg": "cols4"
              },
              "commonProperties": {
                "generateReference": false
              }
            },
            "childProperties": {
              "className": "col-span-1"
            }
          },
          {
            "id": "container_us5b4f",
            "tag": "container4",
            "componentName": "container",
            "label": "Container",
            "type": "group",
            "children": [
              {
                "id": "container_cua2ew",
                "tag": "container1",
                "componentName": "container",
                "label": "Container",
                "type": "group",
                "children": [
                  {
                    "id": "container_rb9e8l",
                    "tag": "container2",
                    "componentName": "container",
                    "label": "Container",
                    "type": "group",
                    "children": [
                      {
                        "id": "container_f7tvd0",
                        "tag": "container3",
                        "componentName": "container",
                        "label": "Container",
                        "type": "group",
                        "children": [
                          {
                            "id": "inputsearch_m9mipl",
                            "tag": "inputSearch2",
                            "componentName": "inputSearch",
                            "label": "Input Search",
                            "type": "group",
                            "children": [],
                            "interactions": {
                              "setValueChange": {
                                "type": "function",
                                "function": {
                                  "fnCustomSet": "(value) => setSearchValue(value )\n",
                                  "type": "function",
                                  "fnCustomCode": {
                                    "imports": []
                                  }
                                },
                                "action": {
                                  "actionCustomSet": "(value) => ''"
                                }
                              },
                              "onSearch": {
                                "type": "function",
                                "function": {
                                  "fnCustomCode": {
                                    "imports": []
                                  },
                                  "fnCustomSet": "()=>setShowFilter(!showFilter)\n"
                                }
                              }
                            },
                            "allowTypes": false,
                            "data": {
                              "value": {
                                "state": {
                                  "id": "",
                                  "name": "searchValue",
                                  "type": "",
                                  "imports": [],
                                  "generate": false
                                }
                              }
                            },
                            "properties": {
                              "label": "",
                              "value": "",
                              "placeholder": "Pesquisar por nome, número ou NIF...",
                              "helperText": "",
                              "iconProperties": {
                                "showStartIcon": true,
                                "startIcon": "Search",
                                "submitIcon": "SlidersVertical"
                              },
                              "showSubmitButton": true,
                              "disabled": false,
                              "required": false,
                              "dataProperties": {
                                "isVirtual": false,
                                "isType": true
                              },
                              "commonProperties": {},
                              "submitButtonLabel": "Filters",
                              "className": "py-1",
                              "submitButtonClassName": ""
                            },
                            "childProperties": {}
                          }
                        ],
                        "interactions": {},
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "className": "flex-1 min-w-[240px]",
                          "commonProperties": {}
                        },
                        "childProperties": {}
                      },
                      {
                        "id": "flex_kujoxb",
                        "tag": "flex1",
                        "componentName": "flex",
                        "label": "Flex",
                        "type": "group",
                        "children": [
                          {
                            "id": "button_se0lgo",
                            "tag": "button3",
                            "componentName": "button",
                            "label": "Button",
                            "type": "group",
                            "children": [],
                            "interactions": {
                              "onClick": {
                                "type": "function",
                                "function": {
                                  "fnCustomSet": "() => {}",
                                  "type": "function"
                                },
                                "action": {
                                  "actionCustomSet": "() => {}"
                                }
                              }
                            },
                            "allowTypes": false,
                            "data": {},
                            "properties": {
                              "content": "Exportar Utente",
                              "variant": "outline",
                              "size": "icon",
                              "iconProperties": {
                                "showIcon": true,
                                "iconName": "Download"
                              },
                              "disabled": false,
                              "commonProperties": {}
                            },
                            "childProperties": {}
                          },
                          {
                            "id": "button_or7nbs",
                            "tag": "button4",
                            "componentName": "button",
                            "label": "Button",
                            "type": "group",
                            "children": [],
                            "interactions": {
                              "onClick": {
                                "type": "function",
                                "function": {
                                  "fnCustomSet": "() => {}",
                                  "type": "function"
                                },
                                "action": {
                                  "actionCustomSet": "() => {}"
                                }
                              }
                            },
                            "allowTypes": false,
                            "data": {},
                            "properties": {
                              "content": "Import Utente",
                              "variant": "outline",
                              "size": "icon",
                              "iconProperties": {
                                "showIcon": true,
                                "iconName": "Upload"
                              },
                              "disabled": false,
                              "commonProperties": {}
                            },
                            "childProperties": {}
                          },
                          {
                            "id": "button_h32wdc",
                            "tag": "button2",
                            "componentName": "button",
                            "label": "Button",
                            "type": "group",
                            "children": [],
                            "interactions": {
                              "onClick": {
                                "type": "function",
                                "function": {
                                  "fnCustomSet": "() => {}",
                                  "type": "function"
                                },
                                "action": {
                                  "actionCustomSet": "() => {}"
                                }
                              }
                            },
                            "allowTypes": false,
                            "data": {},
                            "properties": {
                              "content": "Atualizar lista",
                              "variant": "outline",
                              "size": "icon",
                              "iconProperties": {
                                "showIcon": true,
                                "iconName": "RefreshCw"
                              },
                              "disabled": false,
                              "commonProperties": {}
                            },
                            "childProperties": {}
                          }
                        ],
                        "interactions": {},
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "commonProperties": {}
                        },
                        "childProperties": {},
                        "style": {
                          "layout": {
                            "type": "flex",
                            "flex": {
                              "direction": "row",
                              "wrap": "wrap",
                              "alignItems": "stretch",
                              "justifyContent": "flex-end",
                              "gap": "2"
                            },
                            "grid": {
                              "templateColumns": "1",
                              "templateRows": "1",
                              "gap": "2",
                              "justifyItems": "start",
                              "alignItems": "start",
                              "direction": "row",
                              "dense": false
                            },
                            "block": {}
                          }
                        }
                      }
                    ],
                    "interactions": {},
                    "allowTypes": false,
                    "data": {},
                    "properties": {
                      "commonProperties": {},
                      "className": ""
                    },
                    "childProperties": {},
                    "style": {
                      "layout": {
                        "type": "flex",
                        "flex": {
                          "direction": "row",
                          "wrap": "wrap",
                          "alignItems": "center",
                          "justifyContent": "space-between",
                          "gap": "2"
                        },
                        "grid": {
                          "templateColumns": "1",
                          "templateRows": "1",
                          "gap": "2",
                          "justifyItems": "start",
                          "alignItems": "start",
                          "direction": "row",
                          "dense": false
                        },
                        "block": {}
                      }
                    }
                  },
                  {
                    "id": "separator_ivc9k0",
                    "tag": "separator1",
                    "componentName": "separator",
                    "label": "Separator",
                    "type": "group",
                    "children": [],
                    "interactions": {},
                    "allowTypes": false,
                    "data": {},
                    "properties": {
                      "orientation": "horizontal",
                      "className": "my-3",
                      "commonProperties": {}
                    },
                    "childProperties": {},
                    "rules": [
                      {
                        "type": "visibility",
                        "condition": "showFilter"
                      }
                    ]
                  },
                  {
                    "id": "grid_l18109",
                    "tag": "grid2",
                    "componentName": "grid",
                    "label": "Grid",
                    "type": "group",
                    "children": [
                      {
                        "id": "inputtext_c2fyrt",
                        "tag": "nomeFlt",
                        "componentName": "inputText",
                        "label": "Input Text",
                        "type": "group",
                        "children": [],
                        "interactions": {
                          "onChange": {
                            "type": "function",
                            "function": {
                              "type": "function"
                            },
                            "action": {}
                          }
                        },
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "value": "",
                          "label": "Nome",
                          "placeholder": "",
                          "helperText": "",
                          "iconProperties": {
                            "showIcon": false
                          },
                          "disabled": false,
                          "required": false,
                          "dataProperties": {
                            "isVirtual": false,
                            "isType": true
                          },
                          "commonProperties": {}
                        },
                        "childProperties": {}
                      },
                      {
                        "id": "inputtext_9y90u6",
                        "tag": "numeroFlt",
                        "componentName": "inputText",
                        "label": "Input Text",
                        "type": "group",
                        "children": [],
                        "interactions": {
                          "onChange": {
                            "type": "function",
                            "function": {
                              "type": "function"
                            },
                            "action": {}
                          }
                        },
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "value": "",
                          "label": "Numero",
                          "placeholder": "",
                          "helperText": "",
                          "iconProperties": {
                            "showIcon": false
                          },
                          "disabled": false,
                          "required": false,
                          "dataProperties": {
                            "isVirtual": false,
                            "isType": true
                          },
                          "commonProperties": {}
                        },
                        "childProperties": {}
                      },
                      {
                        "id": "combobox_08pf10",
                        "tag": "tipoUtenteFlt",
                        "componentName": "combobox",
                        "label": "Combobox",
                        "type": "group",
                        "children": [],
                        "interactions": {
                          "onChange": {
                            "type": "function",
                            "function": {
                              "fnCustomSet": "() => {}",
                              "type": "function"
                            },
                            "action": {}
                          }
                        },
                        "allowTypes": false,
                        "data": {
                          "value": {
                            "state": {
                              "id": "",
                              "type": "string",
                              "name": "select{{id}}Value",
                              "defaultValue": "{{value}}",
                              "imports": [],
                              "generate": true
                            }
                          },
                          "options": {
                            "state": {
                              "id": "",
                              "type": "IGRPOptionsProps[]",
                              "name": "select{{id}}Options",
                              "defaultValue": "[]",
                              "imports": [],
                              "generate": true
                            }
                          }
                        },
                        "properties": {
                          "label": "Tipo de Utente",
                          "variant": "single",
                          "placeholder": "Select an option...",
                          "selectLabel": "No option found",
                          "showSearch": true,
                          "gridSize": "full",
                          "dataProperties": {
                            "isVirtual": false,
                            "isType": true
                          },
                          "commonProperties": {
                            "generateReference": false
                          }
                        },
                        "childProperties": {}
                      },
                      {
                        "id": "combobox_l1zife",
                        "tag": "estadoflt",
                        "componentName": "combobox",
                        "label": "Combobox",
                        "type": "group",
                        "children": [],
                        "interactions": {
                          "onChange": {
                            "type": "function",
                            "function": {
                              "fnCustomSet": "() => {}",
                              "type": "function"
                            },
                            "action": {}
                          }
                        },
                        "allowTypes": false,
                        "data": {
                          "value": {
                            "state": {
                              "id": "",
                              "type": "string",
                              "name": "select{{id}}Value",
                              "defaultValue": "{{value}}",
                              "imports": [],
                              "generate": true
                            }
                          },
                          "options": {
                            "state": {
                              "id": "",
                              "type": "IGRPOptionsProps[]",
                              "name": "select{{id}}Options",
                              "defaultValue": "[]",
                              "imports": [],
                              "generate": true
                            }
                          }
                        },
                        "properties": {
                          "label": "Estado",
                          "variant": "single",
                          "placeholder": "Select an option...",
                          "selectLabel": "No option found",
                          "showSearch": true,
                          "iconProperties": {
                            "showIcon": false,
                            "iconName": "CornerDownRight"
                          },
                          "dataProperties": {
                            "isVirtual": false,
                            "isType": true
                          },
                          "commonProperties": {
                            "generateReference": false
                          },
                          "gridSize": "full"
                        },
                        "childProperties": {}
                      }
                    ],
                    "interactions": {},
                    "allowTypes": false,
                    "data": {},
                    "properties": {
                      "gap": 4,
                      "variant": {
                        "default": "cols1",
                        "md": "cols2",
                        "lg": "cols4"
                      },
                      "commonProperties": {
                        "generateReference": false
                      }
                    },
                    "childProperties": {
                      "className": "col-span-1 "
                    },
                    "style": {},
                    "rules": [
                      {
                        "type": "visibility",
                        "condition": "showFilter"
                      }
                    ]
                  },
                  {
                    "id": "flex_gzk6wy",
                    "tag": "flex2",
                    "componentName": "flex",
                    "label": "Flex",
                    "type": "group",
                    "children": [
                      {
                        "id": "button_2c64es",
                        "tag": "button5",
                        "componentName": "button",
                        "label": "Button",
                        "type": "group",
                        "children": [],
                        "interactions": {
                          "onClick": {
                            "type": "function",
                            "function": {
                              "fnCustomSet": "() => {}",
                              "type": "function"
                            },
                            "action": {
                              "actionCustomSet": "() => {}"
                            }
                          }
                        },
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "content": "Limpar Filtros",
                          "variant": "outline",
                          "size": "default",
                          "iconProperties": {
                            "showIcon": true,
                            "iconName": "X"
                          },
                          "disabled": false,
                          "commonProperties": {}
                        },
                        "childProperties": {}
                      }
                    ],
                    "interactions": {},
                    "allowTypes": false,
                    "data": {},
                    "properties": {
                      "commonProperties": {},
                      "className": ""
                    },
                    "childProperties": {},
                    "style": {
                      "layout": {
                        "type": "flex",
                        "flex": {
                          "direction": "row",
                          "wrap": "wrap",
                          "alignItems": "stretch",
                          "justifyContent": "flex-end",
                          "gap": "2"
                        },
                        "grid": {
                          "templateColumns": "1",
                          "templateRows": "1",
                          "gap": "2",
                          "justifyItems": "start",
                          "alignItems": "start",
                          "direction": "row",
                          "dense": false
                        },
                        "block": {}
                      }
                    },
                    "rules": [
                      {
                        "type": "visibility",
                        "condition": "showFilter"
                      }
                    ]
                  }
                ],
                "interactions": {},
                "allowTypes": false,
                "data": {},
                "properties": {
                  "className": "px-4 pt-2 space-y-3",
                  "commonProperties": {}
                },
                "childProperties": {}
              },
              {
                "id": "table_8ikc83",
                "tag": "table1",
                "componentName": "table",
                "label": "Table",
                "type": "group",
                "children": [
                  {
                    "id": "tablecolumns_bk6z31",
                    "tag": "tableColumns1",
                    "componentName": "tableColumns",
                    "label": "Table Column",
                    "children": [
                      {
                        "id": "tablehiddencell_2dudz0",
                        "tag": "utenteId",
                        "componentName": "tableHiddenCell",
                        "label": "Hidden Column",
                        "type": "",
                        "children": [],
                        "interactions": {},
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "headerTitle": "UUID",
                          "dataProperties": {
                            "isVirtual": false,
                            "isType": true
                          },
                          "commonProperties": {
                            "generateReference": false
                          }
                        },
                        "childProperties": {}
                      },
                      {
                        "id": "tabletextcell_0v0d2r",
                        "tag": "numeroUtente",
                        "componentName": "tableTextCell",
                        "label": "Text Column",
                        "type": "",
                        "children": [],
                        "interactions": {},
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "headerTitle": "Numero",
                          "dataProperties": {
                            "isVirtual": false,
                            "isType": true
                          },
                          "variant": "default",
                          "commonProperties": {}
                        },
                        "childProperties": {}
                      },
                      {
                        "id": "tabletextcell_vkzdkd",
                        "tag": "nome",
                        "componentName": "tableTextCell",
                        "label": "Text Column",
                        "type": "",
                        "children": [],
                        "interactions": {},
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "headerType": "sortToggle",
                          "headerTitle": "Nome",
                          "dataProperties": {
                            "isVirtual": false,
                            "isType": true
                          },
                          "variant": "default",
                          "commonProperties": {}
                        },
                        "childProperties": {}
                      },
                      {
                        "id": "tabletextcell_yrdh7a",
                        "tag": "dtNascimento",
                        "componentName": "tableTextCell",
                        "label": "Text Column",
                        "type": "",
                        "children": [],
                        "interactions": {},
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "headerTitle": "Data de Nascimento",
                          "dataProperties": {
                            "isVirtual": false,
                            "isType": true
                          },
                          "variant": "default",
                          "commonProperties": {}
                        },
                        "childProperties": {}
                      },
                      {
                        "id": "tablebadgecell_zie5kn",
                        "tag": "sexoDesc",
                        "componentName": "tableBadgeCell",
                        "label": "Badge Column",
                        "type": "",
                        "children": [],
                        "interactions": {
                          "customize": {
                            "type": "function",
                            "function": {
                              "type": "function"
                            },
                            "action": {}
                          }
                        },
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "headerTitle": "Sexo",
                          "dataProperties": {
                            "isVirtual": false,
                            "isType": true
                          },
                          "iconProperties": {
                            "showIcon": false,
                            "iconName": "Info",
                            "iconPlacement": "start"
                          },
                          "variant": "soft",
                          "commonProperties": {}
                        },
                        "childProperties": {}
                      },
                      {
                        "id": "tabletextcell_b1o1nl",
                        "tag": "dtInscricao",
                        "componentName": "tableTextCell",
                        "label": "Text Column",
                        "type": "",
                        "children": [],
                        "interactions": {},
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "headerTitle": "Data Inscriçāo",
                          "dataProperties": {
                            "isVirtual": false,
                            "isType": true
                          },
                          "variant": "default",
                          "commonProperties": {
                            "generateReference": false
                          }
                        },
                        "childProperties": {}
                      },
                      {
                        "id": "tablebadgecell_0pqc9l",
                        "tag": "estado",
                        "componentName": "tableBadgeCell",
                        "label": "Badge Column",
                        "type": "",
                        "children": [],
                        "interactions": {
                          "customize": {
                            "type": "function",
                            "function": {
                              "type": "function",
                              "fnCustomCode": {
                                "imports": [
                                  {
                                    "namespace": "import {getStatusColorUtente} from '@/app/(myapp)/functions/global'",
                                    "id": "rm9gh86ptu"
                                  }
                                ]
                              },
                              "fnName": "getStatusColorUtente"
                            },
                            "action": {}
                          }
                        },
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "headerTitle": "Estado",
                          "dataProperties": {
                            "isVirtual": false,
                            "isType": true
                          },
                          "iconProperties": {
                            "showIcon": false,
                            "iconName": "Info",
                            "iconPlacement": "start"
                          },
                          "variant": "soft",
                          "commonProperties": {
                            "generateReference": false
                          }
                        },
                        "childProperties": {}
                      },
                      {
                        "id": "tableactionlistcell_rz79fw",
                        "tag": "tableActionListCell1",
                        "componentName": "tableActionListCell",
                        "label": "Actions Column",
                        "type": "",
                        "children": [
                          {
                            "id": "tabledropdownmenucell_1t20lu",
                            "tag": "tableDropdownMenuCell1",
                            "componentName": "tableDropdownMenuCell",
                            "label": "Dropdown Column",
                            "type": "",
                            "children": [
                              {
                                "id": "tablelinkdropdownitem_t6ax9g",
                                "tag": "tableLinkDropdownItem1",
                                "componentName": "tableLinkDropdownItem",
                                "label": "Link Item",
                                "type": "",
                                "children": [],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "labelTrigger": "Visualizar",
                                  "showIcon": true,
                                  "iconProperties": {
                                    "iconName": "Eye"
                                  },
                                  "href": "(utente)/utentes/[uuid]/view",
                                  "commonProperties": {
                                    "generateReference": false
                                  },
                                  "segments": [
                                    {
                                      "name": "[uuid]",
                                      "tag": "uuid",
                                      "context": "variable"
                                    }
                                  ]
                                },
                                "childProperties": {}
                              },
                              {
                                "id": "tablelinkdropdownitem_s3d4oy",
                                "tag": "tableLinkDropdownItem2",
                                "componentName": "tableLinkDropdownItem",
                                "label": "Link Item",
                                "type": "",
                                "children": [],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "labelTrigger": "Editar",
                                  "showIcon": true,
                                  "iconProperties": {
                                    "iconName": "SquarePen"
                                  },
                                  "href": "(utente)/utentes/[uuid]/agregados/[uuidAgregado]/edit",
                                  "commonProperties": {
                                    "generateReference": false
                                  },
                                  "segments": [
                                    {
                                      "name": "[uuid]",
                                      "tag": "uuid",
                                      "context": "pageParam"
                                    },
                                    {
                                      "name": "[uuidAgregado]",
                                      "tag": "utenteId",
                                      "context": "column"
                                    }
                                  ],
                                  "params": []
                                },
                                "childProperties": {}
                              },
                              {
                                "id": "tablecustomdropdownitem_xmxogk",
                                "tag": "tableCustomDropdownItem4",
                                "componentName": "tableCustomDropdownItem",
                                "label": "Custom Item",
                                "type": "",
                                "children": [],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "labelTrigger": "Falecimento",
                                  "showIcon": true,
                                  "iconProperties": {
                                    "iconName": "Skull"
                                  },
                                  "commonProperties": {
                                    "generateReference": false
                                  }
                                },
                                "childProperties": {}
                              },
                              {
                                "id": "tablecustomdropdownitem_bzyw41",
                                "tag": "tableCustomDropdownItem3",
                                "componentName": "tableCustomDropdownItem",
                                "label": "Custom Item",
                                "type": "",
                                "children": [],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "labelTrigger": "Reativar",
                                  "showIcon": true,
                                  "iconProperties": {
                                    "iconName": "UserRoundCheck"
                                  },
                                  "commonProperties": {
                                    "generateReference": false
                                  }
                                },
                                "childProperties": {}
                              },
                              {
                                "id": "tablecustomdropdownitem_pw7mau",
                                "tag": "tableCustomDropdownItem2",
                                "componentName": "tableCustomDropdownItem",
                                "label": "Custom Item",
                                "type": "",
                                "children": [],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "labelTrigger": "Suspender",
                                  "showIcon": true,
                                  "iconProperties": {
                                    "iconName": "UserX"
                                  },
                                  "commonProperties": {
                                    "generateReference": false
                                  }
                                },
                                "childProperties": {}
                              },
                              {
                                "id": "tablecustomdropdownitem_6qq5ee",
                                "tag": "tableCustomDropdownItem1",
                                "componentName": "tableCustomDropdownItem",
                                "label": "Custom Item",
                                "type": "",
                                "children": [],
                                "interactions": {
                                  "action": {
                                    "type": "function",
                                    "function": {
                                      "fnCustomCode": {
                                        "imports": []
                                      },
                                      "fnCustomSet": "()=>{setOpenModalCessar(!openModalCessar); setCurrentUtente(rowData)\n}\n"
                                    }
                                  }
                                },
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "labelTrigger": "Cessar",
                                  "showIcon": true,
                                  "iconProperties": {
                                    "iconName": "ArchiveX"
                                  },
                                  "commonProperties": {
                                    "generateReference": false
                                  }
                                },
                                "childProperties": {}
                              }
                            ],
                            "interactions": {},
                            "allowTypes": false,
                            "data": {},
                            "properties": {
                              "labelTrigger": "Dropdown Actions",
                              "iconProperties": {
                                "iconName": "ArrowRight"
                              },
                              "variant": "default",
                              "commonProperties": {}
                            },
                            "childProperties": {}
                          }
                        ],
                        "interactions": {},
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "headerTitle": "Açōes",
                          "type": "inline",
                          "commonProperties": {
                            "generateReference": false
                          }
                        },
                        "childProperties": {}
                      }
                    ],
                    "interactions": {},
                    "allowTypes": false,
                    "data": {},
                    "properties": {
                      "commonProperties": {}
                    },
                    "childProperties": {}
                  },
                  {
                    "id": "tablefilters_pi9a7r",
                    "tag": "tableFilters1",
                    "componentName": "tableFilters",
                    "label": "Table Filter",
                    "children": [],
                    "interactions": {},
                    "allowTypes": false,
                    "data": {},
                    "properties": {
                      "commonProperties": {}
                    }
                  }
                ],
                "interactions": {},
                "allowTypes": true,
                "data": {
                  "data": {
                    "state": {
                      "id": "",
                      "type": "Table1[]",
                      "name": "contentTabletable1",
                      "defaultValue": "[]",
                      "imports": [],
                      "generate": true
                    },
                    "value": {
                      "id": "",
                      "code": ""
                    }
                  }
                },
                "properties": {
                  "commonProperties": {
                    "generateReference": false
                  },
                  "showFilter": true,
                  "showPagination": true,
                  "showToggleColumn": false,
                  "isNumericPagination": false,
                  "isServerSide": false,
                  "tableClassName": "rounded-none",
                  "paginationClassName": "px-3 pb-3"
                },
                "dataType": "table1",
                "childProperties": {}
              }
            ],
            "interactions": {},
            "allowTypes": false,
            "data": {},
            "properties": {
              "className": "border rounded-sm",
              "commonProperties": {}
            },
            "childProperties": {}
          }
        ],
        "tag": "section2",
        "data": {},
        "interactions": {},
        "childProperties": {}
      },
      {
        "id": "section_av7rta",
        "componentName": "section",
        "label": "section",
        "properties": {
          "spaceX": "6",
          "spaceY": "6",
          "commonProperties": {
            "generateReference": false
          }
        },
        "children": [
          {
            "id": "cessarutente_m6xei2",
            "tag": "CessarUtente1",
            "componentName": "CessarUtente",
            "label": "Cessar Utente",
            "type": "group",
            "children": [],
            "interactions": {
              "setOpen": {
                "type": "function",
                "function": {
                  "fnCustomCode": {
                    "imports": []
                  },
                  "fnCustomSet": "()=>setOpenModalCessar(!openModalCessar)\n"
                }
              }
            },
            "allowTypes": false,
            "data": {
              "utente": {
                "state": {
                  "id": "",
                  "name": "currentUtente",
                  "type": "",
                  "imports": [],
                  "generate": false
                }
              },
              "open": {
                "state": {
                  "id": "",
                  "name": "openModalCessar",
                  "type": "",
                  "imports": [],
                  "generate": false
                }
              }
            },
            "properties": {
              "customProperties": {}
            },
            "childProperties": {}
          }
        ],
        "tag": "",
        "data": {},
        "interactions": {},
        "childProperties": {}
      }
    ],
    "tag": "page2",
    "data": {},
    "interactions": {
      "onLoad": {
        "type": "function",
        "function": {
          "type": "function",
          "fnCustomCode": {
            "imports": [
              {
                "id": "import_Cp42TZ",
                "namespace": "import { IGRPLoadingSpinner } from '@igrp/igrp-framework-react-design-system';"
              },
              {
                "namespace": "import {useUtente} from '@/app/(myapp)/hooks/use-utente'",
                "id": "menu6ir50b"
              },
              {
                "namespace": "import {useUtenteParameterizations} from '@/app/(myapp)/hooks/use-parameterization'",
                "id": "3gjgcqvmq7"
              }
            ],
            "fnCode": "const {\n  tiposUtente,\n  estadoUtente,\n  isLoading: isLoadingParams,\n} = useUtenteParameterizations();\n\nuseEffect(() => {\n  if (isLoadingParams) return;\n  setSelecttipoUtenteFltOptions(tiposUtente || []);\n  setSelectestadofltOptions(estadoUtente || [])\n}, [isLoadingParams]);\n\nconst { data, stats, isLoading, error } = useUtente({ search: searchValue, beneficiarioId: uuid });\n\nuseEffect(() => {\n  if(isLoading && !data) return\n  setContentTabletable1(\n    (data?.content || []).map((item: any) => ({\n      ...item,\n    })),\n  );\n  setStatstatsCard3Value(stats?.total || 0)\n\n  }, [isLoading]);\n\n  if (isLoading && !error) {\n    return (\n      <div className=\"flex items-center gap2 flex-col\">\n        <IGRPLoadingSpinner />\n        <span>loading utentes...</span>\n      </div>\n    );\n  }\n"
          }
        },
        "action": {}
      }
    },
    "childProperties": {}
  },
  "imports": []
}

beforeAll(async () => {
  await initComponents();
  await initCodeSnippets();
});

describe('Page module', () => {
  it('should save the page configuration file', async () => {
    await newPage(pageConfig, OUTPUT_DIR);
  });
});
