import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const inputLayout: Layout = {
  id: "grid_inputs",
  componentName: "grid",
  properties: {
    variant: "cols3",
    className: "border rounded-lg",
    padding: "4"
  },
  children: [
    {
      id: "input_text",
      componentName: "input",
      properties: {
        type: 'text',
        placeholder: 'Enter your text',
      }
    },
    {
      id: "input_password",
      componentName: "input",
      properties: {
        type: 'password',
        placeholder: 'Enter your password',
      }
    },
    {
      id: "input_readonly",
      componentName: "input",
      properties: {
        type: 'text',
        placeholder: 'See the details',
        value: "Look but don't touch!",
        readOnly: true
      }
    }
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
