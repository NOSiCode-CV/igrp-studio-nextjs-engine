import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const inputLayout: Layout = {
  id: 'grid_inputs',
  componentName: 'grid',
  properties: {
    variant: 'cols3',
    className: 'border rounded-lg',
    padding: '4',
  },
  children: [
    {
      id: 'input_text',
      componentName: 'input',
      properties: {
        type: 'text',
        placeholder: 'Enter your text',
      },
    },
    {
      id: 'input_password',
      componentName: 'input',
      properties: {
        type: 'password',
        placeholder: 'Enter your password',
      },
    },
    {
      id: 'input_readonly',
      componentName: 'input',
      properties: {
        type: 'text',
        placeholder: 'See the details',
        value: "Look but don't touch!",
        readOnly: true,
      },
    },
    {
      id: 'input_date',
      componentName: 'input',
      properties: {
        type: 'date',
        placeholder: 'Enter your birthdate',
        format: 'dd/MM/yyyy'
      },
    },
    {
      id: 'input_text_label_not_req',
      componentName: 'input',
      properties: {
        type: 'text',
        labelText: 'Name',
        placeholder: 'Enter your text',
        required: false,
      },
    },
    {
      id: 'input_text_label_floating_req',
      componentName: 'input',
      properties: {
        type: 'text',
        labelText: 'Category',
        floatingLabel: true,
        placeholder: 'Enter your text',
        required: true,
      },
    },
    {
      id: 'input_text_label_icon_start',
      componentName: 'input',
      properties: {
        type: 'text',
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
      componentName: 'input',
      properties: {
        type: 'text',
        labelText: 'Address',
        showIcon: true,
        iconName: 'House',
        iconSize: '16',
        iconPlacement: 'end',
        placeholder: 'Enter your text',
        required: true,
      },
    },
    /*{
      id: 'input_select',
      componentName: 'select',
      properties: {
        labelText: 'Type',
        helperText: 'This will help you',
        options: [
          { value: '01', label: 'Option 1' },
          { value: '02', label: 'Option 2' },
          { value: '03', label: 'Option 3' },
        ],
        optionLabel: 'Type Option'
      },
    },*/
  ],
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
