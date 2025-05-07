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
  id: 'e76Typ9lm2m1',
  type: 'page',
  types: [],
  functions: [
    {
      id: 'a8ke20LoP1m3',
      name: 'Normalize Hostname',
      code: `
    /**
     * Normalizes a string to be a valid Docker hostname.
     * - Lowercases the string
     * - Replaces invalid characters with hyphens
     * - Removes leading/trailing hyphens
     * - Trims to 63 characters
     */      
    const normalizeHostname(name: string): string {
      // Convert to lowercase
      let normalized = name.toLowerCase();
    
      // Replace invalid characters with hyphen
      normalized = normalized.replace(/[^a-z0-9-]/g, '-');
    
      // Remove leading and trailing hyphens
      normalized = normalized.replace(/^-+|-+$/g, '');
    
      // Ensure max length of 63 characters
      if (normalized.length > 63) {
        normalized = normalized.substring(0, 63);
      }
    
      // Edge case: If empty after sanitization, fallback
      if (normalized.length === 0) {
        normalized = 'host';
      }
    
      return normalized;
    }        
    `,
    },
    {
      id: 'b9lf31MpQ2n4',
      name: 'Indent Code',
      code: `
    /**
     * Indents each line of a block by the given number of spaces.
     * @param spaces - Number of spaces to indent.
     * @param options - Handlebars options object containing the block content.
     * @returns Indented string.
     */
    const indent(this: any, spaces: number, options: HelperOptions): string {
      const pad = ' '.repeat(spaces);
      return options.fn(this)
        .split('\\n')
        .map(line => line ? pad + line : line)
        .join('\\n');
    }
    `,
    }
  ],
  pageName: 'registros',
  description: "Registros",
  path: '[[...teste]]/[param]/(auth)/login',
  components: dashboardLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Page module',() =>{
  it('should save the page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
