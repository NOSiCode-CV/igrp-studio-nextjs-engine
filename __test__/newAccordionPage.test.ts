import { initComponents, newPage, setEngineConfiguration } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { inputLayout } from './newInputPage.test';
import { buttonLayout } from './newButtonPage.test';
import { badgeLayout } from './newBadgePage.test';
//import { inputLayout } from "./newInputPage.test";

export const OUTPUT_DIR = OUTPUT_TEST;

const accordionLayout: Layout = {
  id: 'section_accordion',
  tag: 'section_accordion',
  componentName: 'section',
  properties: {
    variant: 'compact',
    spaceY: '6'
  },
  children: [
    {
      id: 'headline',
      tag: 'headline',
      componentName: 'headline',
      properties: {
        variant: 'h4',
        title: 'Accordion',
        description: 'A demo accordion component',
      }
    },
    {
      id: 'copyTo',
      tag: 'copyTo',
      componentName: 'copyTo',
      properties: {
        value: 'Copy me please',
      },
      interactions: {
        onCopySuccess: {
          function: {
            fnCustomSet: `(value) => console.log(\`Copied! \${value}\`)`,
          },
          type: 'function',
        },
        onCopyError: {
          function: {
            fnCustomSet: `(error) => console.log(\`Error: \${error}\`)`,
          },
          type: 'function',
        },

      },
    },
    {
      id: 'accordion_default',
      tag: 'accordion_default',
      componentName: 'accordion',
      properties: {
        value: 'Name',
        name: 'Basic Info'
      },
      children: [
        {
          id: 'accordion_default_item_1',
          tag: 'accordion_default_item_1',
          componentName: 'accordionItem',
          properties: {
            title: 'Name',
            content: "John Doe"
          },
          children: [
          ],
        },
        {
          id: 'accordion_default_item_2',
          tag: 'accordion_default_item_2',
          componentName: 'accordionItem',
          properties: {
            title: 'Birthdate',
            content: '01-01-2001'
          },
          children: [
          ],
        },
      ],
    },
  ],
};

const pageConfig: PageConfig = {
  id: 'apvVsat4aSj0',
  types: [],
  type: 'page',
  pageName: 'accordion',
  path: 'accordion',
  components: accordionLayout,
};

beforeAll(async () => {
  setEngineConfiguration({ environment: 'development' })
  await initComponents();
});

describe('Accordion module',() =>{
  it('should save the accordion page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
