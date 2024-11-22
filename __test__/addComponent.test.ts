import fs from 'fs-extra';
import { addComponentToPage } from '../src/index';
import { PageConfig, Component } from '../src/interfaces/types';

export const OUTPUT_DIR = '';

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'pokemon',
  path: 'pokemon',
  components: [],
};

const components: Component[] = [
  {
    Row: [
      {
        Col: [
          {
            id: 'col_nihdj',
            colSize: 6,
            components: [
              {
                id: 'company',
                componentName: 'FormLayout',
                config: {
                  title: 'Form Test',
                  showTitle: false,
                },
                fields: [
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'firstName',
                      label: 'First Name',
                      required: true,
                      placeholder: 'Enter your first name',
                      colSize: 4,
                    },
                    validation: { minLeng: 3, errorMinLeng: 'Min 3 characters', maxLeng: 10, errorMaxLeng: 'Max 10 characters' },
                  },
                  {
                    type: 'NumberInput',
                    config: {
                      type: 'number',
                      name: 'age',
                      label: 'Age',
                      placeholder: 'Enter your first name',
                      colSize: 4,
                    },
                    validation: { minLeng: 13, errorMinLeng: 'Min 13', maxLeng: 100, errorMaxLeng: 'Max 100' },
                  }
                ],
              }
            ],
          },
        ],
      },
    ],
  },
  {
    Row: [
      {
        Col: [
          {
            id: 'buttoncomponent',
            colSize: 6,
            components: [
              {
                id:'button',
                componentName: 'Button',
                target:'sendData',
                config: {
                  buttonText: 'Submit',
                  buttonColor: 'btn-primary',
                }
              }
            ],
          },
        ],
      },
    ],
  },
];

beforeEach(async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  // await newApp(appConfig, OUTPUT_DIR);
});

it('should create a new page', async () => {
  pageConfig.components = components;
  await addComponentToPage(pageConfig, components, OUTPUT_DIR);
});
