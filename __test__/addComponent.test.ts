import fs from 'fs-extra';
import { addComponentToPage } from '../src/index';
import { PageConfig, Component } from '../src/interfaces/types';

export const OUTPUT_DIR = '';

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'test',
  path: 'test',
  components: [],
};

const components: Component [] = [
  {
    Row: [
      {
        Col: [
          {
            colSize: 6,
            componentName: 'FormLayout',
            type: 'Form',
            attributes: [],
            submitBtnText: 'send',
            fields: [
              {
                type: 'FormInput',
                config: {
                  type: 'text',
                  name: 'firstNameinput',
                  label: 'First Name',
                  maxLength: 10,
                  minLength: 2,
                  placeholder: 'Enter your first name',
                  colSize: 6,
                },
              },
              {
                type: 'FormInput',
                config: {
                  type: 'text',
                  name: 'lastNameinput',
                  label: 'Last Name',
                  maxLength: 10,
                  minLength: 2,
                  placeholder: 'Enter your last name',
                  colSize: 6,
                },
              },
            ],
          }
        ]
      },
      {
        Col: [
          {
            colSize: 6,
            componentName: 'FormLayout',
            type: 'Form',
            attributes: [],
            submitBtnText: 'send',
            fields: [
              {
                type: 'FormInput',
                config: {
                  type: 'text',
                  name: 'firstNameinput',
                  label: 'First Name',
                  maxLength: 10,
                  minLength: 2,
                  placeholder: 'Enter your first name',
                  colSize: 6,
                },
              },
              {
                type: 'FormInput',
                config: {
                  type: 'text',
                  name: 'lastNameinput',
                  label: 'Last Name',
                  maxLength: 10,
                  minLength: 2,
                  placeholder: 'Enter your last name',
                  colSize: 6,
                },
              },
            ],
          }
        ]
      }
    ],
  }
];

beforeEach(async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  // await newApp(appConfig, OUTPUT_DIR);
});

it('should create a new page', async () => {
  pageConfig.components = components
  await addComponentToPage(pageConfig, components, OUTPUT_DIR);
});
