import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

export const inputLayout: Layout = {
  id: 'default_section',
  componentName: 'section',
  properties: {
    spaceY: 6,
  },
  children: [
    {
      id: 'grid_inputs',
      componentName: 'grid',
      properties: {
        variant: 'cols3',
        className: 'border rounded-lg',
        padding: '10',
        gap: '4',
      },
      childProperties: {
        //padding: '4'
      },
      children: [
        {
          id: 'input_text',
          componentName: 'inputText',
          properties: {
            placeholder: 'Enter your text',
          },
        },
        {
          id: 'input_password',
          componentName: 'inputPassword',
          properties: {
            type: 'password',
            placeholder: 'Enter your password',
          },
        },
        {
          id: 'input_readonly',
          componentName: 'inputText',
          properties: {
            type: 'text',
            placeholder: 'See the details',
            value: "Look but don't touch!",
            readOnly: true,
          },
        },
        {
          id: 'input_date_start_req',
          componentName: 'inputDatePicker',
          properties: {
            labelText: 'Registration Date',
            format: 'dd/MM/yyyy',
            locale: 'pt',
            iconPlacement: 'start',
            required: true
          },
          interactions: {
            onDateChange: {
              fnCustomSet: '(e) => setInputRegDate(e)',
              fnCustomCode: {
                states: [
                  { state: `const [inputRegDate, setInputRegDate] = useState < Date | undefined > (new Date());` }
                ]
              },
              type: 'function'
            },
            date: {
              fnCustomSet: 'inputRegDate',
              type: 'function'
            }
          }
        },
        {
          id: 'input_date_end_not_req',
          componentName: 'inputDatePicker',
          properties: {
            labelText: 'Birthdate',
            placeholder: 'Enter the birthdate',
            //floatingLabel: true,
            format: 'yyyy-MM-dd',
            locale: 'en',
            iconPlacement: 'end',
            required: false
          },
          interactions: {
            onDateChange: {
              fnCustomSet: '(e) => setInputBirthdate(e)',
              fnCustomCode: {
                states: [
                  { state: `const [inputBirthdate, setInputBirthdate] = useState < Date | undefined > (new Date());` }
                ]
              },
              type: 'function'
            },
            date: {
              fnCustomSet: 'inputBirthdate',
              type: 'function'
            }
          }
        },
        {
          id: 'input_text_label_not_req',
          componentName: 'inputText',
          properties: {
            labelText: 'Name',
            placeholder: 'Enter your text',
            required: false,
          },
        },
        {
          id: 'input_text_label_floating_req',
          componentName: 'inputText',
          properties: {
            labelText: 'Category',
            //floatingLabel: true,
            placeholder: 'Enter your text',
            required: true,
          },
        },
        {
          id: 'input_text_label_icon_start',
          componentName: 'inputText',
          properties: {
            labelText: 'Location',
            showIcon: true,
            iconName: 'House',
            iconSize: '16',
            iconPlacement: 'start',
            placeholder: 'Enter your text',
          },
        },
        {
          id: 'input_text_label_icon_end',
          componentName: 'inputText',
          properties: {
            labelText: 'Address',
            showIcon: true,
            iconName: 'House',
            iconSize: '16',
            iconPlacement: 'end',
            placeholder: 'Enter your text',
            required: true,
          },
        },
        {
          id: 'input_select',
          componentName: 'select',
          properties: {
            labelText: 'Type',
            placeholder: 'Choose an option',
            options: [
              { value: '01', label: 'Option 1' },
              { value: '02', label: 'Option 2' },
              { value: '03', label: 'Option 3' },
            ],
          },
          interactions: {
            onChange: {
              fnCustomSet: '(e) => setSelect(e)',
              fnCustomCode: {
                states: [
                  { state: `const [select, setSelect] = useState("");` }
                ]
              },
              type: 'function'
            },
            value: {
              fnCustomSet: 'select',
              type: 'function'
            }
          }
        },
        {
          id: 'input_color',
          componentName: 'inputColor',
          properties: {
            labelText: 'Color',
            showIcon: true,
            iconName: 'House',
            iconSize: '16',
            iconPlacement: 'end',
            placeholder: 'Select a color',
            error: 'Invalid color',
            defaultValue: '#999999',
            required: true,
          },
          interactions: {
            onChange: {
              fnCustomSet: '(e) => setColor(e)',
              fnCustomCode: {
                states: [
                  { state: `const [color, setColor] = useState("#6366f1");` }
                ]
              },
              type: 'function'
            },
            value: {
              fnCustomSet: 'color',
              type: 'function'
            }
          }
        },
        {
          id: 'input_file_single',
          componentName: 'inputFile',
          properties: {
            labelText: 'File',
            placeholder: 'Upload a file...',
            error: 'Unsupported file extension',
            required: true,
          },
          interactions: {
            onChange: {
              fnCustomSet: '(e) => setFileSingle(e.target.value)',
              fnCustomCode: {
                states: [
                  { state: `const [fileSingle, setFileSingle] = useState(null);` }
                ]
              },
              type: 'function'
            },
            value: {
              fnCustomSet: 'fileSingle',
              type: 'function'
            }
          }
        },
        {
          id: 'input_file_multiple',
          componentName: 'inputFile',
          properties: {
            labelText: 'Files',
            placeholder: 'Upload many files...',
            multiple: true,
            error: 'Unsupported file(s) extension(s)',
            required: true,
          },
          interactions: {
            onChange: {
              fnCustomSet: '(e) => setFileMultiple(e.target.value)',
              fnCustomCode: {
                states: [
                  { state: `const [fileMultiple, setFileMultiple] = useState(null);` }
                ]
              },
              type: 'function'
            },
            value: {
              fnCustomSet: 'fileMultiple',
              type: 'function'
            }
          }
        },
        {
          id: 'input_number',
          componentName: 'inputNumber',
          properties: {
            labelText: 'Number',
            description: 'A number from 1 to 10',
            placeholder: 'Enter a number...',
            min: 1,
            max: 10,
            step: 2,
            errorMessage: 'Invalid number format',
            required: true,
          },
          interactions: {
            onChange: {
              fnCustomSet: '(e) => setInputNumber(e)',
              fnCustomCode: {
                states: [
                  { state: `const [inputNumber, setInputNumber] = useState(0);` }
                ]
              },
              type: 'function'
            },
            value: {
              fnCustomSet: 'inputNumber',
              type: 'function'
            }
          }
        },
        {
          id: 'input_phone',
          componentName: 'inputPhone',
          properties: {
            labelText: 'Phone Number',
            placeholder: 'Enter a phone number...',
            error: 'Invalid phone number',
            countries: ['CV', 'PT', 'US', 'BR'],
            defaultCountry: 'CV',
            required: true,
          },
          interactions: {
            onChange: {
              fnCustomSet: '(e) => setPhoneNumber(e)',
              fnCustomCode: {
                states: [
                  { state: `const [phoneNumber, setPhoneNumber] = useState("");` }
                ]
              },
              type: 'function'
            },
            value: {
              fnCustomSet: 'phoneNumber',
              type: 'function'
            }
          }
        },
        {
          id: 'input_time',
          componentName: 'inputTime',
          properties: {
            labelText: 'Time',
            helperText: 'Enter the time',
            error: 'Invalid time format',
            required: true,
          },
          interactions: {
            onChange: {
              fnCustomSet: '(e) => setInputTime(e)',
              fnCustomCode: {
                states: [
                  { state: `const [inputTime, setInputTime] = useState("");` }
                ]
              },
              type: 'function'
            },
            value: {
              fnCustomSet: 'inputTime',
              type: 'function'
            }
          }
        },
        {
          id: 'input_add_on',
          componentName: 'inputAddOn',
          properties: {
            labelText: 'Add On',
            helperText: 'Select an option',
            error: 'Invalid option',
            options: [
              { value: '01', label: 'Option 1' },
              { value: '02', label: 'Option 2' },
              { value: '03', label: 'Option 3' },
            ],
            required: true,
          },
          interactions: {
            onSelectValueChange: {
              fnCustomSet: '(e) => setInputAddOn(e)',
              fnCustomCode: {
                states: [
                  { state: `const [inputAddOn, setInputAddOn] = useState("");` }
                ]
              },
              type: 'function'
            },
            value: {
              fnCustomSet: 'inputAddOn',
              type: 'function'
            }
          }
        },
        {
          id: 'input_url',
          componentName: 'inputUrl',
          properties: {
            labelText: 'Website',
            helperText: 'Enter the website',
            error: 'Invalid URL format',
            defaultProtocol: 'https://',
            protocols: ["https://", "wss://"],
            required: true,
          },
          interactions: {
            onChange: {
              fnCustomSet: '(e) => setInputUrl(e)',
              fnCustomCode: {
                states: [
                  { state: `const [inputUrl, setInputUrl] = useState("");` }
                ]
              },
              type: 'function'
            },
            value: {
              fnCustomSet: 'inputUrl',
              type: 'function'
            }
          }
        },
      ],
    },
    {
      id: 'input_textarea',
      componentName: 'inputTextarea',
      properties: {
        labelText: 'Text Area',
        helperText: 'Describe your problem',
        rows: 6
      },
      interactions: {
        onChange: {
          fnCustomSet: '(e) => setTextarea(e.target.value)',
          fnCustomCode: {
            states: [
              { state: `const [textarea, setTextarea] = useState("");` }
            ]
          },
          type: 'function'
        },
        value: {
          fnCustomSet: 'textarea',
          type: 'function'
        }
      }
    },
  ]
};

const pageConfig: PageConfig = {
  id: 'i76Typ9lm2m1',
  type: 'page',
  pageName: 'inputs',
  path: 'inputs',
  components: inputLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Inputs module',() =>{
  it('should save the input page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
