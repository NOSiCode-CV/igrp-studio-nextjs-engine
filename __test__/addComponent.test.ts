import fs from 'fs-extra';
import { addComponentToPage } from '../src/index';
import { PageConfig, Component } from '../src/interfaces/types';

export const OUTPUT_DIR = 'C:/Users/Eduardo Fernando/Downloads/myapp';

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'user',
  path: 'user',
  components: [],
};

const components: Component [] = [
  {
    Row: [
      {
        Col: [
          {
            componentName: 'FormLayout',
            id: 'userData',
            config: {
              title: 'Form Test',
              colSize: 6
            },
            fields: [
              {
                type: 'TextInput',
                config: {
                  type: 'text',
                  name: 'firstName',
                  label: 'First Name',
                  placeholder: 'Enter your first name',
                  colSize: 6,
                },
              },
              {
                type: 'NumberInput',
                config: {
                  type: 'number',
                  name: 'age',
                  label: 'Age',
                  placeholder: 'Enter your age',
                  colSize: 6,
                },
              }
            ],
          }
        ]
      }
    ]
  },
];

beforeEach(async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  // await newApp(appConfig, OUTPUT_DIR);
});

it('should create a new page', async () => {
  pageConfig.components = components
  await addComponentToPage(pageConfig, components, OUTPUT_DIR);
});
