import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const radioLayout: Layout = {
  id: "grid_radios",
  tag: "grid_radios",
  componentName: "grid",
  properties: {
    variant: "cols3",
    className: "border rounded-lg center",
    padding: '10',
    gap: '4',
  },
  children: [

    /* ================= VERTICAL ================= */ 
    
    /* SMALL */

    // Default Variant
    {
      id: "radio_default_sm",
      tag: "radio_default_sm",
      componentName: "radio",
      properties: {
        size: "sm",
        variant: 'default',
        label: 'Default Small',
        dir: 'ltr',
        orientation: 'vertical',
        helperText: 'Choose an option'
      },
      data: {
        value: {
          state: {
            id: '',
            name: 'radio{{id}}Value',
            type: 'string',
            defaultValue: '{{value}}'
          }
        },
        options: {
          state: {
            id: '',
            name: 'radio{{id}}Options',
            type: 'IGRPOptionsProps[]',
            defaultValue: '[]'
          }
        }
      },
      interactions: {
        onValueChange: {
          type: 'function',
          function: {
            fnName: 'setRadioradio_default_smValue'
          }
        }
      }
    },
    
    // Outline Variant
    {
      id: "radio_outline_sm",
      tag: "radio_outline_sm",
      componentName: "radio",
      properties: {
        size: "sm",
        variant: 'outline',
        label: 'Outline Small',
        dir: 'ltr',
        orientation: 'vertical',
        helperText: 'Choose an option'
      },
      data: {
        value: {
          state: {
            id: '',
            name: 'radio{{id}}Value',
            type: 'string',
            defaultValue: '{{value}}'
          }
        },
        options: {
          state: {
            id: '',
            name: 'radio{{id}}Options',
            type: 'IGRPOptionsProps[]',
            defaultValue: '[]'
          }
        }
      },
      interactions: {
        onValueChange: {
          type: 'function',
          function: {
            fnName: 'setRadioradio_outline_smValue'
          }
        }
      }
    },
    
    // Soft Variant
    {
      id: "radio_soft_sm",
      tag: "radio_soft_sm",
      componentName: "radio",
      properties: {
        size: "sm",
        variant: 'soft',
        label: 'Soft Small',
        dir: 'ltr',
        orientation: 'vertical',
        helperText: 'Choose an option'
      },
      data: {
        value: {
          state: {
            id: '',
            name: 'radio{{id}}Value',
            type: 'string',
            defaultValue: '{{value}}'
          }
        },
        options: {
          state: {
            id: '',
            name: 'radio{{id}}Options',
            type: 'IGRPOptionsProps[]',
            defaultValue: '[]'
          }
        }
      },
      interactions: {
        onValueChange: {
          type: 'function',
          function: {
            fnName: 'setRadioradio_soft_smValue'
          }
        }
      }
    },
    
    /* MEDIUM */

    // Default Variant
    {
      id: "radio_default_md",
      tag: "radio_default_md",
      componentName: "radio",
      properties: {
        size: "md",
        variant: 'default',
        label: 'Default Medium',
        dir: 'ltr',
        orientation: 'vertical',
        helperText: 'Choose an option'
      },
      data: {
        value: {
          state: {
            id: '',
            name: 'radio{{id}}Value',
            type: 'string',
            defaultValue: '{{value}}'
          }
        },
        options: {
          state: {
            id: '',
            name: 'radio{{id}}Options',
            type: 'IGRPOptionsProps[]',
            defaultValue: '[]'
          }
        }
      },
      interactions: {
        onValueChange: {
          type: 'function',
          function: {
            fnName: 'setRadioradio_default_mdValue'
          }
        }
      }
    },

    // Outline Variant
    {
      id: "radio_outline_md",
      tag: "radio_outline_md",
      componentName: "radio",
      properties: {
        size: "md",
        variant: 'outline',
        label: 'Outline Medium',
        dir: 'ltr',
        orientation: 'vertical',
        helperText: 'Choose an option'
      },
      data: {
        value: {
          state: {
            id: '',
            name: 'radio{{id}}Value',
            type: 'string',
            defaultValue: '{{value}}'
          }
        },
        options: {
          state: {
            id: '',
            name: 'radio{{id}}Options',
            type: 'IGRPOptionsProps[]',
            defaultValue: '[]'
          }
        }
      },
      interactions: {
        onValueChange: {
          type: 'function',
          function: {
            fnName: 'setRadioradio_outline_mdValue'
          }
        }
      }
    },

    // Soft Variant
    {
      id: "radio_soft_md",
      tag: "radio_soft_md",
      componentName: "radio",
      properties: {
        size: "md",
        variant: 'soft',
        label: 'Soft Medium',
        dir: 'ltr',
        orientation: 'vertical',
        helperText: 'Choose an option'
      },
      data: {
        value: {
          state: {
            id: '',
            name: 'radio{{id}}Value',
            type: 'string',
            defaultValue: '{{value}}'
          }
        },
        options: {
          state: {
            id: '',
            name: 'radio{{id}}Options',
            type: 'IGRPOptionsProps[]',
            defaultValue: '[]'
          }
        }
      },
      interactions: {
        onValueChange: {
          type: 'function',
          function: {
            fnName: 'setRadioradio_soft_mdValue'
          }
        }
      }
    },
    
    /* LARGE */

    // Default Variant
    {
      id: "radio_default_lg",
      tag: "radio_default_lg",
      componentName: "radio",
      properties: {
        size: "lg",
        variant: 'default',
        label: 'Default Large',
        dir: 'ltr',
        orientation: 'vertical',
        helperText: 'Choose an option'
      },
      data: {
        value: {
          state: {
            id: '',
            name: 'radio{{id}}Value',
            type: 'string',
            defaultValue: '{{value}}'
          }
        },
        options: {
          state: {
            id: '',
            name: 'radio{{id}}Options',
            type: 'IGRPOptionsProps[]',
            defaultValue: '[]'
          }
        }
      },
      interactions: {
        onValueChange: {
          type: 'function',
          function: {
            fnName: 'setRadioradio_default_lgValue'
          }
        }
      }
    },

    // Outline Variant
    {
      id: "radio_outline_lg",
      tag: "radio_outline_lg",
      componentName: "radio",
      properties: {
        size: "lg",
        variant: 'outline',
        label: 'Outline Large',
        dir: 'ltr',
        orientation: 'vertical',
        helperText: 'Choose an option'
      },
      data: {
        value: {
          state: {
            id: '',
            name: 'radio{{id}}Value',
            type: 'string',
            defaultValue: '{{value}}'
          }
        },
        options: {
          state: {
            id: '',
            name: 'radio{{id}}Options',
            type: 'IGRPOptionsProps[]',
            defaultValue: '[]'
          }
        }
      },
      interactions: {
        onValueChange: {
          type: 'function',
          function: {
            fnName: 'setRadioradio_outline_lgValue'
          }
        }
      }
    },

    // Soft Variant
    {
      id: "radio_soft_lg",
      tag: "radio_soft_lg",
      componentName: "radio",
      properties: {
        size: "lg",
        variant: 'soft',
        label: 'Soft Large',
        dir: 'ltr',
        orientation: 'vertical',
        helperText: 'Choose an option'
      },
      data: {
        value: {
          state: {
            id: '',
            name: 'radio{{id}}Value',
            type: 'string',
            defaultValue: '{{value}}'
          }
        },
        options: {
          state: {
            id: '',
            name: 'radio{{id}}Options',
            type: 'IGRPOptionsProps[]',
            defaultValue: '[]'
          }
        }
      },
      interactions: {
        onValueChange: {
          type: 'function',
          function: {
            fnName: 'setRadioradio_soft_lgValue'
          }
        }
      }
    },

  ]
};

const radioPage: Layout = {
  id: 'main_page',
  tag: 'main_page',
  componentName: 'page',
  children: [radioLayout],
  interactions: {
    onLoad: {
      type: 'function',
      function: {
        fnCustomCode: {
          imports: [],
          fnCode: `
          useEffect(() => {
            loadFormFields()
          }
          
          const options = [
            { value: 'option1', label: 'Option 1', description: 'This is the first option' },
            { value: 'option2', label: 'Option 2', description: 'This is the second option' },
            { value: 'option3', label: 'Option 3', description: 'This is the third option' },
          ]
          
          const loadFormFields = async () => {
            
            setRadio_default_smOptions(options)
            setRadio_default_mdOptions(options)
            setRadio_default_lgOptions(options)
            
            setRadio_outline_smOptions(options)
            setRadio_outline_mdOptions(options)
            setRadio_outline_lgOptions(options)
            
            setRadio_soft_smOptions(options)
            setRadio_soft_mdOptions(options)
            setRadio_soft_lgOptions(options)
            
          }
          
          `,
        }
      }
    }
  }
}

const pageConfig: PageConfig = {
  id: 'v91Qsm1rb210',
  types: [],
  type: 'page',
  pageName: 'radios',
  path: 'radios',
  components: radioLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Radios module',() =>{
  it('should save the radio page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
