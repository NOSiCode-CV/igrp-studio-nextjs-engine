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
  "id": "m29noinqel",
  "type": "page",
  "path": "grid",
  "components": {
    "id": "page_gzomhi",
    "componentName": "page",
    "label": "page",
    "properties": {
      "commonProperties": {},
      "variant": "default"
    },
    "children": [
      {
        "id": "section_tlcd03",
        "componentName": "section",
        "label": "section",
        "properties": {
          "commonProperties": {},
          "variant": "compact"
        },
        "children": [
          {
            "id": "pageheader_tfjgow",
            "tag": "pageHeader1",
            "componentName": "pageHeader",
            "label": "Page Header",
            "type": "group",
            "children": [
              {
                "id": "button_q5waz9",
                "tag": "button2",
                "componentName": "button",
                "label": "Button",
                "type": "group",
                "children": [],
                "interactions": {
                  "onClick": {
                    "type": "function"
                  }
                },
                "allowTypes": false,
                "data": {},
                "properties": {
                  "label": "Cancelar",
                  "variant": "secondary",
                  "size": "default",
                  "iconProperties": {
                    "showIcon": false,
                    "iconName": "Plus"
                  },
                  "disabled": false,
                  "commonProperties": {}
                }
              },
              {
                "id": "button_ijzuj2",
                "tag": "button1",
                "componentName": "button",
                "label": "Button",
                "type": "group",
                "children": [],
                "interactions": {
                  "onClick": {
                    "type": "function",
                    "fnCustomSet": "formform1Ref.current?.submit((values: any) => someFunction(values))()",
                    "fnCustomCode": {
                      "imports": []
                    }
                  }
                },
                "allowTypes": false,
                "data": {},
                "properties": {
                  "label": "Salvar contribuiente",
                  "variant": "default",
                  "size": "default",
                  "iconProperties": {
                    "showIcon": true,
                    "iconName": "Save"
                  },
                  "disabled": false,
                  "commonProperties": {}
                }
              }
            ],
            "interactions": {},
            "allowTypes": false,
            "data": {},
            "properties": {
              "title": "Novo Contribuinte",
              "description": "",
              "variant": "h3",
              "commonProperties": {}
            }
          },
          {
            "id": "form_g5wvh4",
            "tag": "form1",
            "componentName": "form",
            "label": "Form",
            "type": "group",
            "children": [
              {
                "id": "columns_5xvjp2",
                "tag": "columns1",
                "componentName": "columns",
                "label": "Columns",
                "type": "group",
                "children": [
                  {
                    "id": "column_orvydw",
                    "tag": "column1",
                    "componentName": "column",
                    "label": "Column",
                    "children": [
                      {
                        "id": "card_jogrf2",
                        "tag": "card1",
                        "componentName": "card",
                        "label": "Card",
                        "type": "group",
                        "children": [
                          {
                            "id": "cardheader_9xhsj6",
                            "tag": "cardHeader1",
                            "componentName": "cardHeader",
                            "label": "Card Header",
                            "children": [
                              {
                                "id": "headline_3hk20p",
                                "tag": "headline1",
                                "componentName": "headline",
                                "label": "Headline",
                                "type": "group",
                                "children": [],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "title": "Informações Básicas",
                                  "description": "",
                                  "variant": "h3",
                                  "commonProperties": {}
                                }
                              }
                            ],
                            "interactions": {},
                            "allowTypes": false,
                            "data": {},
                            "properties": {
                              "commonProperties": {}
                            }
                          },
                          {
                            "id": "cardcontent_s23ybb",
                            "tag": "cardContent1",
                            "componentName": "cardContent",
                            "label": "Card Content",
                            "children": [
                              {
                                "id": "grid_ajdypy",
                                "tag": "grid2",
                                "componentName": "grid",
                                "label": "Grid",
                                "type": "group",
                                "children": [
                                  {
                                    "id": "combobox_1ol3kz",
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
                                          "type": "any",
                                          "name": "selectOptions",
                                          "defaultValue": "[]",
                                          "imports": []
                                        }
                                      }
                                    },
                                    "properties": {
                                      "label": "Tipo",
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
                                    "id": "inputtext_5tbcd8",
                                    "tag": "inputText5",
                                    "componentName": "inputText",
                                    "label": "Input Text",
                                    "type": "group",
                                    "children": [],
                                    "interactions": {
                                      "onChange": {
                                        "type": "function"
                                      }
                                    },
                                    "allowTypes": false,
                                    "data": {
                                      "value": {}
                                    },
                                    "properties": {
                                      "label": "Número",
                                      "placeholder": "Número de identificação",
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
                                    }
                                  }
                                ],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "gap": 4,
                                  "variant": "cols2"
                                },
                                "childProperties": {
                                  "className": "col-span-1"
                                }
                              },
                              {
                                "id": "inputtext_hozkxz",
                                "tag": "inputText1",
                                "componentName": "inputText",
                                "label": "Input Text",
                                "type": "group",
                                "children": [],
                                "interactions": {
                                  "onChange": {
                                    "type": "function"
                                  }
                                },
                                "allowTypes": false,
                                "data": {
                                  "value": {}
                                },
                                "properties": {
                                  "label": "Nome do Responsável",
                                  "placeholder": "Nome completo do responsável",
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
                                }
                              },
                              {
                                "id": "grid_ear36d",
                                "tag": "grid1",
                                "componentName": "grid",
                                "label": "Grid",
                                "type": "group",
                                "children": [
                                  {
                                    "id": "inputtext_jpvw88",
                                    "tag": "inputText3",
                                    "componentName": "inputText",
                                    "label": "Input Text",
                                    "type": "group",
                                    "children": [],
                                    "interactions": {
                                      "onChange": {
                                        "type": "function"
                                      }
                                    },
                                    "allowTypes": false,
                                    "data": {
                                      "value": {}
                                    },
                                    "properties": {
                                      "label": "Nome Comercial",
                                      "placeholder": "Nome comercial ou fantasia",
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
                                    }
                                  },
                                  {
                                    "id": "inputtext_8wu964",
                                    "tag": "inputText2",
                                    "componentName": "inputText",
                                    "label": "Input Text",
                                    "type": "group",
                                    "children": [],
                                    "interactions": {
                                      "onChange": {
                                        "type": "function"
                                      }
                                    },
                                    "allowTypes": false,
                                    "data": {
                                      "value": {}
                                    },
                                    "properties": {
                                      "label": "Denominação Social",
                                      "placeholder": "Denominação social completa",
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
                                    }
                                  }
                                ],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "gap": 4,
                                  "variant": "cols2"
                                },
                                "childProperties": {
                                  "className": "col-span-1"
                                }
                              },
                              {
                                "id": "inputtext_ekrkzq",
                                "tag": "inputText4",
                                "componentName": "inputText",
                                "label": "Input Text",
                                "type": "group",
                                "children": [],
                                "interactions": {
                                  "onChange": {
                                    "type": "function"
                                  }
                                },
                                "allowTypes": false,
                                "data": {
                                  "value": {}
                                },
                                "properties": {
                                  "label": "Nome Normalizado",
                                  "placeholder": "Nome normalizado para indexação",
                                  "helperText": "Nome padronizado para fins de busca e indexação",
                                  "iconProperties": {
                                    "showIcon": false
                                  },
                                  "disabled": false,
                                  "required": false,
                                  "className": "",
                                  "dataProperties": {
                                    "isVirtual": false,
                                    "isType": true
                                  },
                                  "commonProperties": {}
                                }
                              }
                            ],
                            "interactions": {},
                            "allowTypes": false,
                            "data": {},
                            "properties": {
                              "commonProperties": {}
                            }
                          },
                          {
                            "id": "cardfooter_eltakr",
                            "tag": "cardFooter1",
                            "componentName": "cardFooter",
                            "label": "Card Footer",
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
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "commonProperties": {}
                        }
                      },
                      {
                        "id": "card_wk9nak",
                        "tag": "card3",
                        "componentName": "card",
                        "label": "Card",
                        "type": "group",
                        "children": [
                          {
                            "id": "cardheader_c9jzth",
                            "tag": "cardHeader3",
                            "componentName": "cardHeader",
                            "label": "Card Header",
                            "children": [
                              {
                                "id": "headline_reabvs",
                                "tag": "headline2",
                                "componentName": "headline",
                                "label": "Headline",
                                "type": "group",
                                "children": [],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "title": "Informações de Registro",
                                  "description": "",
                                  "variant": "h3",
                                  "commonProperties": {}
                                }
                              }
                            ],
                            "interactions": {},
                            "allowTypes": false,
                            "data": {},
                            "properties": {
                              "commonProperties": {}
                            }
                          },
                          {
                            "id": "cardcontent_vtkhrx",
                            "tag": "cardContent3",
                            "componentName": "cardContent",
                            "label": "Card Content",
                            "children": [
                              {
                                "id": "grid_4yivlq",
                                "tag": "grid3",
                                "componentName": "grid",
                                "label": "Grid",
                                "type": "group",
                                "children": [
                                  {
                                    "id": "inputtext_y9tw69",
                                    "tag": "inputText7",
                                    "componentName": "inputText",
                                    "label": "Input Text",
                                    "type": "group",
                                    "children": [],
                                    "interactions": {
                                      "onChange": {
                                        "type": "function"
                                      }
                                    },
                                    "allowTypes": false,
                                    "data": {
                                      "value": {}
                                    },
                                    "properties": {
                                      "label": "Número de Representação",
                                      "placeholder": "Número de representação",
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
                                    }
                                  },
                                  {
                                    "id": "inputdatepicker_c00n5d",
                                    "tag": "inputDatePicker1",
                                    "componentName": "inputDatePicker",
                                    "label": "Date Picker",
                                    "type": "group",
                                    "children": [],
                                    "interactions": {
                                      "onDateChange": {
                                        "type": "function"
                                      }
                                    },
                                    "allowTypes": false,
                                    "data": {
                                      "date": {}
                                    },
                                    "properties": {
                                      "label": "Data de Contrato",
                                      "placeholder": "Selecione a data (opcional)",
                                      "name": "",
                                      "helperText": "",
                                      "disabled": false,
                                      "required": false,
                                      "startDate": "1900-01-01",
                                      "endDate": "2099-12-31",
                                      "dataProperties": {
                                        "isVirtual": false,
                                        "isType": true
                                      },
                                      "commonProperties": {}
                                    }
                                  }
                                ],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "gap": 4,
                                  "variant": "cols2"
                                },
                                "childProperties": {
                                  "className": "col-span-1"
                                }
                              }
                            ],
                            "interactions": {},
                            "allowTypes": false,
                            "data": {},
                            "properties": {
                              "commonProperties": {}
                            }
                          },
                          {
                            "id": "cardfooter_v9dzw9",
                            "tag": "cardFooter3",
                            "componentName": "cardFooter",
                            "label": "Card Footer",
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
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "commonProperties": {}
                        }
                      }
                    ],
                    "interactions": {},
                    "allowTypes": false,
                    "data": {},
                    "properties": {
                      "variant": "span8"
                    }
                  },
                  {
                    "id": "column_2_29io9k",
                    "componentName": "column",
                    "label": "Column 2",
                    "properties": {
                      "variant": "span4"
                    },
                    "children": [
                      {
                        "id": "card_qg79hd",
                        "tag": "card2",
                        "componentName": "card",
                        "label": "Card",
                        "type": "group",
                        "children": [
                          {
                            "id": "cardheader_8vz0ox",
                            "tag": "cardHeader2",
                            "componentName": "cardHeader",
                            "label": "Card Header",
                            "children": [
                              {
                                "id": "headline_yzz08m",
                                "tag": "headline3",
                                "componentName": "headline",
                                "label": "Headline",
                                "type": "group",
                                "children": [],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "title": "Estado",
                                  "description": "",
                                  "variant": "h3",
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
                            }
                          },
                          {
                            "id": "cardcontent_r0yy2k",
                            "tag": "cardContent2",
                            "componentName": "cardContent",
                            "label": "Card Content",
                            "children": [
                              {
                                "id": "combobox_ec1uhl",
                                "tag": "combobox2",
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
                                      "type": "any",
                                      "name": "selectOptions",
                                      "defaultValue": "[]",
                                      "imports": []
                                    }
                                  }
                                },
                                "properties": {
                                  "label": "Estado",
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
                            "interactions": {},
                            "allowTypes": false,
                            "data": {},
                            "properties": {
                              "commonProperties": {}
                            }
                          },
                          {
                            "id": "cardfooter_t77nfb",
                            "tag": "cardFooter2",
                            "componentName": "cardFooter",
                            "label": "Card Footer",
                            "children": [
                              {
                                "id": "badge_d6ccrn",
                                "tag": "badge1",
                                "componentName": "badge",
                                "label": "Badge",
                                "type": "group",
                                "children": [],
                                "interactions": {},
                                "allowTypes": false,
                                "data": {},
                                "properties": {
                                  "color": "default",
                                  "variant": "solid",
                                  "size": "md",
                                  "children": "Novo",
                                  "commonProperties": {}
                                }
                              }
                            ],
                            "interactions": {},
                            "allowTypes": false,
                            "data": {},
                            "properties": {
                              "commonProperties": {}
                            }
                          }
                        ],
                        "interactions": {},
                        "allowTypes": false,
                        "data": {},
                        "properties": {
                          "commonProperties": {}
                        }
                      }
                    ],
                    "interactions": []
                  }
                ],
                "interactions": {},
                "allowTypes": false,
                "data": {},
                "properties": {
                  "variant": "cols12",
                  "gap": 4,
                  "commonProperties": {}
                }
              }
            ],
            "interactions": {
              "onSubmit": {
                "type": "function",
                "fnCustomCode": {
                  "imports": [
                    {
                      "namespace": "import {onSubmitForm} from '@/app/(myapp)/functions/page-service'",
                      "id": "7vpx1hgrp"
                    }
                  ]
                },
                "fnCustomSet": "() => onSubmitForm()"
              }
            },
            "allowTypes": true,
            "data": {
              "defaultValue": {
                "fnCustomSet": "undefined",
                "type": "function"
              }
            },
            "properties": {
              "validationMode": "onBlur",
              "formClassName": "flex flex-col",
              "gridClassName": "flex flex-col",
              "resetAfterSubmit": false,
              "commonProperties": {}
            },
            "dataType": "form1"
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
          "fnCode": "  loadPage({});",
          "imports": [
            {
              "namespace": "import {loadPage} from '@/app/(myapp)/functions/page-service'",
              "id": "x6qmss6c2u"
            }
          ]
        },
        "type": "function",
        "fnName": ""
      }
    }
  },
  "functions": [],
  "types": [
    {
      "componentId": "form_g5wvh4",
      "name": "form1",
      "path": "",
      "fields": [
        {
          "componentId": "combobox_1ol3kz",
          "name": "combobox1",
          "type": "string",
          "required": false,
          "validation": "",
          "defaultValue": ""
        },
        {
          "componentId": "inputtext_5tbcd8",
          "name": "inputText5",
          "type": "string",
          "required": false,
          "validation": "",
          "defaultValue": ""
        },
        {
          "componentId": "inputtext_hozkxz",
          "name": "inputText1",
          "type": "string",
          "required": false,
          "validation": "",
          "defaultValue": ""
        },
        {
          "componentId": "inputtext_jpvw88",
          "name": "inputText3",
          "type": "string",
          "required": false,
          "validation": "",
          "defaultValue": ""
        },
        {
          "componentId": "inputtext_8wu964",
          "name": "inputText2",
          "type": "string",
          "required": false,
          "validation": "",
          "defaultValue": ""
        },
        {
          "componentId": "inputtext_ekrkzq",
          "name": "inputText4",
          "type": "string",
          "required": false,
          "validation": "",
          "defaultValue": ""
        },
        {
          "componentId": "inputtext_y9tw69",
          "name": "inputText7",
          "type": "string",
          "required": false,
          "validation": "",
          "defaultValue": ""
        },
        {
          "componentId": "inputdatepicker_c00n5d",
          "name": "inputDatePicker1",
          "type": "string",
          "required": false,
          "validation": "",
          "defaultValue": ""
        },
        {
          "componentId": "combobox_ec1uhl",
          "name": "combobox2",
          "type": "string",
          "required": false,
          "validation": "",
          "defaultValue": ""
        }
      ]
    }
  ],
  "states": [
    {
      "id": "state_dDN7em",
      "name": "status",
      "type": "string",
      "defaultValue": "a",
      "imports": []
    }
  ],
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
