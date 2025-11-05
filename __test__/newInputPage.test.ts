import { initComponents, newPage, setEngineConfiguration } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

export const inputLayout: Layout = {
  id: 'default_section',
  tag: 'default_section',
  componentName: 'section',
  properties: {
    spaceY: 6,
  },
  children: [
    {
      id: 'grid_inputs',
      tag: 'grip_inputs',
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
          tag: 'input_text',
          componentName: 'inputText',
          properties: {
            placeholder: 'Enter your text',
          },
        },
        {
          id: 'input_password',
          tag: 'input_password',
          componentName: 'inputPassword',
          properties: {
            placeholder: 'Enter your password',
          },
        },
        {
          id: 'input_readonly',
          tag: 'input_readonly',
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
          tag: 'input_date_start_req',
          componentName: 'inputDatePicker',
          properties: {
            label: 'Registration Date',
            format: 'dd/MM/yyyy',
            locale: 'pt',
            iconPlacement: 'start',
            disabledBefore: '2025-01-01',
            required: true
          },
          data: {
            date: {
              state: {
                id: 'date_picker_val_st',
                name: 'datePickerDate',
                type: 'Date | undefined',
                defaultValue: 'new Date()',
                generate: true,
              },
            },
          },
          interactions: {
            onDateChange: {
              type: 'function',
              function: {
                fnName: 'setDatePickerDate',
              },
            },
          },
        },
        {
          id: 'input_date_single',
          tag: 'input_date_single',
          componentName: 'inputDatePickerSingle',
          properties: {
            label: 'Registration Date',
            format: 'dd/MM/yyyy',
            locale: 'pt',
            iconPlacement: 'start',
            disabledBefore: '2025-01-01',
            required: true
          },
          data: {
            date: {
              state: {
                id: 'date_picker_single_val_st',
                name: 'inputDatePickerSingleDate',
                type: 'Date | undefined',
                defaultValue: 'new Date()',
                generate: true,
              },
            },
          },
          interactions: {
            onDateChange: {
              type: 'function',
              function: {
                fnName: 'setInputDatePickerSingleDate',
              },
            },
          },
        },
        {
          id: 'date_picker_range',
          tag: 'date_picker_range',
          componentName: 'datePickerRange',
          properties: {
            label: 'Registration Interval',
            placeholder: 'Select the registration interval',
            disabledBefore: '2025-01-01'
          },
          data: {
            date: {
              state: {
                id: 'date_picker_range_val_st',
                name: 'datePickerRangeDate',
                type: 'DateRange | undefined',
                defaultValue: 'undefined',
                generate: true,
              },
            },
          },
          interactions: {
            onDateChange: {
              type: 'function',
              function: {
                fnName: 'setDatePickerRangeDate',
              },
            },
          },
        },
        {
          id: 'calendar_single',
          tag: 'calendar_single',
          componentName: 'calendarSingle',
          properties: {
            label: 'Registration Date',
            format: 'dd/MM/yyyy',
            disableBefore: '2025-8-12',
            disableAfter: '2025-11-12',
            disableDayOfWeek: ['0', '6']
          },
          data: {
            date: {
              state: {
                id: 'calendar_single_val_st',
                name: 'calendarSingleDate',
                type: 'Date | undefined',
                defaultValue: 'new Date()',
                generate: true,
              },
            },
          },
          interactions: {
            onDateChange: {
              type: 'function',
              function: {
                fnName: 'setCalendarSingleDate',
              },
            },
          },
        },
        {
          id: 'calendar_single_time',
          tag: 'calendar_single_time',
          componentName: 'calendarSingleTime',
          properties: {
            label: 'Audition Date and Time',
          },
          data: {
            date: {
              state: {
                id: 'calendar_single_time_val_st',
                name: 'calendarSingleTimeDate',
                type: 'Date | undefined',
                defaultValue: 'new Date()',
                generate: true,
              },
            },
            startTime: {
              state: {
                id: 'calendar_single_time_start_time_val_st',
                name: 'calendarSingleTimeStartTime',
                type: 'string | undefined',
                defaultValue: '',
                generate: true,
              },
            },
          },
          interactions: {
            onDateChange: {
              type: 'function',
              function: {
                fnName: 'setCalendarSingleTimeDate',
              },
            },
            onStartTime: {
              type: 'function',
              function: {
                fnName: 'setCalendarSingleTimeStartTime',
              },
            },
          },
        },
        {
          id: 'calendar_range',
          tag: 'calendar_range',
          componentName: 'calendarRange',
          properties: {
            disableBefore: '2025-8-12',
            disableAfter: '2025-11-12',
            disableDayOfWeek: ['0', '6']
          },
          data: {
            date: {
              state: {
                id: 'calendar_range_val_st',
                name: 'calendarRangeDate',
                type: 'DateRange | undefined',
                defaultValue: 'undefined',
                generate: true,
              },
            },
          },
          interactions: {
            onDateChange: {
              type: 'function',
              function: {
                fnName: 'setCalendarRangeDate',
              },
            },
          }
        },
        {
          id: 'calendar_range_time',
          tag: 'calendar_range_time',
          componentName: 'calendarRangeTime',
          properties: {
            label: 'Calendar Range Time',
            disableBefore: '2025-8-12',
            disableAfter: '2025-11-12',
            disableDayOfWeek: ['0', '6']
          },
          data: {
            date: {
              state: {
                id: 'calendar_range_time_val_st',
                name: 'calendarRangeTimeDate',
                type: 'DateRange | undefined',
                defaultValue: 'undefined',
                generate: true,
              },
            },
            startTime: {
              state: {
                id: 'calendar_range_time_start_time_val_st',
                name: 'calendarRangeTimeStartTime',
                type: 'string | undefined',
                defaultValue: '',
                generate: true,
              },
            },
          },
          interactions: {
            onDateChange: {
              type: 'function',
              function: {
                fnName: 'setCalendarRangeTimeDate',
              },
            },
            onStartTime: {
              type: 'function',
              function: {
                fnName: 'setCalendarRangeTimeStartTime',
              },
            },
          },
        },
        {
          id: 'calendar_multiple',
          tag: 'calendar_multiple',
          componentName: 'calendarMultiple',
          properties: {
            label: 'Scheduled Dates',
            disableBefore: '2025-8-12',
            disableAfter: '2025-11-12',
            disableDayOfWeek: ['0', '6']
          },
          data: {
            date: {
              state: {
                id: 'calendar_multiple_val_st',
                name: 'calendarMultipleDate',
                type: 'Date[] | undefined',
                defaultValue: '[]',
                generate: true,
              },
            },
          },
          interactions: {
            onDateChange: {
              type: 'function',
              function: {
                fnName: 'setCalendarMultipleDate',
              },
            },
          },
        },
        {
          id: 'calendar_multiple_time',
          tag: 'calendar_multiple_time',
          componentName: 'calendarMultipleTime',
          properties: {
            label: 'Scheduled Dates and Times',
          },
          data: {
            date: {
              state: {
                id: 'calendar_multiple_time_val_st',
                name: 'calendarMultipleTimeDate',
                type: 'Date[] | undefined',
                defaultValue: '[]',
                generate: true,
              },
            },
            startTime: {
              state: {
                id: 'calendar_multiple_time_start_time_val_st',
                name: 'calendarMultipleTimeStartTime',
                type: 'string | undefined',
                defaultValue: '',
                generate: true,
              },
            },
          },
          interactions: {
            onDateChange: {
              type: 'function',
              function: {
                fnName: 'setCalendarMultipleTimeDate',
              },
            },
            onStartTime: {
              type: 'function',
              function: {
                fnName: 'setCalendarMultipleTimeStartTime',
              },
            },
          },
        },
        {
          id: 'input_text_label_not_req',
          tag: 'input_text_label_not_req',
          componentName: 'inputText',
          properties: {
            label: 'Name',
            placeholder: 'Enter your text',
            required: false,
          },
        },
        {
          id: 'input_text_label_floating_req',
          tag: 'input_text_label_floating_req',
          componentName: 'inputText',
          properties: {
            label: 'Category',
            //floatingLabel: true,
            placeholder: 'Enter your text',
            required: true,
          },
        },
        {
          id: 'input_text_label_icon_start',
          tag: 'input_text_label_icon_start',
          componentName: 'inputText',
          properties: {
            label: 'Location',
            showIcon: true,
            iconName: 'House',
            iconSize: '16',
            iconPlacement: 'start',
            placeholder: 'Enter your text',
          },
        },
        {
          id: 'input_text_label_icon_end',
          tag: 'input_text_label_icon_end',
          componentName: 'inputText',
          properties: {
            label: 'Address',
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
          tag: 'input_select',
          componentName: 'select',
          properties: {
            label: 'Type',
            placeholder: 'Choose an option',
            showSearch: true,
            showGroup: true,
            showStatus: true,
            showIcon: true,
            iconProperties: {
              iconName: "CornerDownRight",
            },
            options: [
              { value: 'opt01', label: 'Option 1' },
              { value: 'opt02', label: 'Option 2' },
              { value: 'opt03', label: 'Option 3' },
            ],
          },
          data: {
            value: {
              state: {
                id: 'select_val_st',
                name: 'select',
                type: 'string | undefined',
                defaultValue: '',
                generate: true,
              },
            },
          },
          interactions: {
            onValueChange: {
              type: 'function',
              function: {
                fnName: 'setSelect',
              },
            },
          },
        },
        {
          id: 'input_combobox',
          tag: 'input_combobox',
          componentName: 'combobox',
          properties: {
            label: 'Type',
            placeholder: 'Choose an option',
            showSearch: true,
            showGroup: true,
            showStatus: true,
            showIcon: true,
            iconProperties: {
              iconName: "CornerDownRight",
            },
            options: [
              { value: 'opt01', label: 'Option 1' },
              { value: 'opt02', label: 'Option 2' },
              { value: 'opt03', label: 'Option 3' },
            ],
          },
          data: {
            value: {
              state: {
                id: 'combobox_val_st',
                name: 'combobox',
                isOptional: false,
                defaultValue: '',
                generate: true,
              },
            },
          },
          interactions: {
            onChange: {
              type: 'function',
              function: {
                fnName: 'setCombobox',
              },
            },
          },
        },
        {
          id: 'input_color',
          tag: 'input_color',
          componentName: 'inputColor',
          properties: {
            name: 'input_color',
            label: 'Color',
            showIcon: true,
            iconName: 'House',
            iconSize: '16',
            iconPlacement: 'end',
            placeholder: 'Select a color',
            error: 'Invalid color',
            defaultValue: '#999999',
            required: true,
          },
          data: {
            value: {
              state: {
                id: 'color_val_st',
                name: 'color',
                type: 'string',
                defaultValue: '#6366f1',
                generate: true,
              },
            },
          },
          interactions: {
            onChange: {
              type: 'function',
              function: {
                fnName: 'setColor',
              },
            },
          },
        },
        {
          id: 'input_file_single',
          tag: 'input_file_single',
          componentName: 'inputFile',
          properties: {
            name: 'input_file_single',
            label: 'File',
            placeholder: 'Upload a file...',
            error: 'Unsupported file extension',
            required: true,
          },
          data: {
            value: {
              state: {
                id: 'file_single_val_st',
                name: 'fileSingle',
                type: 'any',
                defaultValue: '',
                generate: true,
              },
            },
          },
          interactions: {
            onChange: {
              type: 'function',
              function: {
                fnCustomSet: '(e) => setFileSingle(e.target.value)',
              },
            },
          },
        },
        {
          id: 'input_file_multiple',
          tag: 'input_file_multiple',
          componentName: 'inputFile',
          properties: {
            name: 'input_file_multiple',
            label: 'Files',
            placeholder: 'Upload many files...',
            multiple: true,
            error: 'Unsupported file(s) extension(s)',
            required: true,
          },
          data: {
            value: {
              state: {
                id: 'file_multiple_st',
                name: 'fileMultiple',
                type: 'any',
                defaultValue: '',
                generate: true,
              },
            },
          },
          interactions: {
            onChange: {
              type: 'function',
              function: {
                fnCustomSet: '(e) => setFileMultiple(e.target.value)',
              },
            },
          },
        },
        {
          id: 'input_number',
          tag: 'input_number',
          componentName: 'inputNumber',
          properties: {
            name: 'input_number',
            label: 'Number',
            description: 'A number from 1 to 10',
            placeholder: 'Enter a number...',
            min: 1,
            max: 10,
            step: 2,
            errorMessage: 'Invalid number format',
            required: true,
          },
          data: {
            value: {
              state: {
                id: 'input_number_val_st',
                name: 'inputNumber',
                type: 'number',
                defaultValue: '0',
                generate: true,
              },
            },
          },
          interactions: {
            onChange: {
              type: 'function',
              function: {
                fnName: 'setInputNumber',
              },
            },
          },
        },
        {
          id: 'input_phone',
          tag: 'input_phone',
          componentName: 'inputPhone',
          properties: {
            name: 'input_phone',
            label: 'Phone Number',
            placeholder: 'Enter a phone number...',
            error: 'Invalid phone number',
            countries: ['CV', 'PT', 'US', 'BR'],
            defaultCountry: 'CV',
            required: true,
          },
          data: {
            value: {
              state: {
                id: 'phone_number_val_st',
                name: 'phoneNumber',
                type: 'string | undefined',
                defaultValue: '',
                generate: true,
              },
            },
          },
          interactions: {
            onChange: {
              type: 'function',
              function: {
                fnName: 'setPhoneNumber',
              },
            },
          },
        },
        {
          id: 'input_time',
          tag: 'input_time',
          componentName: 'inputTime',
          properties: {
            name: 'input_time',
            label: 'Time',
            helperText: 'Enter the time',
            error: 'Invalid time format',
            required: true,
          },
          data: {
            value: {
              state: {
                id: 'input_time_val_st',
                name: 'inputTime',
                type: 'string',
                defaultValue: '',
                generate: true,
              },
            },
          },
          interactions: {
            onChange: {
              type: 'function',
              function: {
                fnName: 'setInputTime',
              },
            },
          },
        },
        {
          id: 'input_add_on',
          tag: 'input_add_on',
          componentName: 'inputAddOn',
          properties: {
            label: 'Add On',
            helperText: 'Select an option',
            error: 'Invalid option',
            options: [
              { value: 'opt01', label: 'Option 1' },
              { value: 'opt02', label: 'Option 2' },
              { value: 'opt03', label: 'Option 3' },
            ],
            required: true,
          },
          data: {
            value: {
              state: {
                id: 'input_add_on_val_st',
                name: 'inputAddOn',
                type: 'string',
                defaultValue: '',
                generate: true,
              },
            },
          },
          interactions: {
            onSelectValueChange: {
              type: 'function',
              function: {
                fnName: 'setInputAddOn',
              },
            },
          },
        },
        {
          id: 'input_url',
          tag: 'input_url',
          componentName: 'inputUrl',
          properties: {
            name: 'input_url',
            label: 'Website',
            helperText: 'Enter the website',
            error: 'Invalid URL format',
            defaultProtocol: 'https://',
            protocols: ["https://", "wss://"],
            required: true,
          },
          data: {
            value: {
              state: {
                id: 'input_url_val_st',
                name: 'inputUrl',
                type: 'string',
                defaultValue: '',
                generate: true,
              },
            },
          },
          interactions: {
            onChange: {
              type: 'function',
              function: {
                fnName: 'setInputUrl',
              },
            },
          },
        },
        {
          id: 'input_hidden',
          tag: 'input_hidden',
          componentName: 'inputHidden',
          properties: {
            name: 'input_hidden',
            label: 'Input Hidden',
            helperText: 'This is hidden',
          },
        },
        {
          id: 'input_switch',
          tag: 'input_switch',
          componentName: 'switch',
          properties: {
            name: 'switch_1',
            label: 'Switch',
            helperText: 'Enable or disable',
          },
        },
      ],
    },
    {
      id: 'input_textarea',
      tag: 'input_textarea',
      componentName: 'inputTextarea',
      properties: {
        name: 'input_textarea',
        label: 'Text Area',
        helperText: 'Describe your problem',
        rows: 6
      },
      data: {
        value: {
          state: {
            id: 'textarea_val_st',
            name: 'textarea',
            type: 'string',
            defaultValue: '',
            generate: true,
          },
        },
      },
      interactions: {
        onChange: {
          type: 'function',
          function: {
            fnCustomSet: '(e) => setTextarea(e.target.value)',
          },
        },
      },
    },
  ]
};

const pageConfig: PageConfig = {
  id: 'i76Typ9lm2m1',
  types: [],
  type: 'page',
  pageName: 'inputs',
  path: 'inputs',
  components: inputLayout,
};

beforeAll(async () => {
  await setEngineConfiguration({ environment: 'development' })
  await initComponents();
});

describe('Inputs module',() =>{
  it('should save the input page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
