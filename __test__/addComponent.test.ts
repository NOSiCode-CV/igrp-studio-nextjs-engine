import fs from 'fs-extra';
import { newApp } from '../src/newApp';
import { newPage } from '../src/newPage';
import { PageConfig, Component, AppConfig } from '../src/interfaces/types';
import { addComponentToPageConfig } from '../src/modules/components/addComponentToPageConfig';
import { addComponentToPage as addComponentToPage } from '../src/addComponentToPage';
export const OUTPUT_DIR = 'C:/Users/Eduardo Fernando/Downloads/nextjs_projects_test';

const appConfig: AppConfig = {
  type: 'baseApp',
  appName: 'NextAppTest',
};

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'Invoices',
  path: 'invoices',
  components: [],
};

const component: Component = {
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
                placeholder: 'Enter your firstname',
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
                placeholder: 'Enter your lastname',
                colSize: 6,
              },
            },
            {
              type: 'FormInput',
              config: {
                type: 'text',
                name: 'compnayNameinput',
                label: 'Company Name',
                maxLength: 50,
                minLength: 2,
                placeholder: 'Enter company name',
                colSize: 12,
              },
            },
            {
              type: 'FormInput',
              config: {
                type: 'tel',
                name: 'phonenumberInput',
                label: 'Phone Number',
                maxLength: 15,
                minLength: 9,
                placeholder: '+(245) 451 45123',
                colSize: 6,
              },
            },
            {
              type: 'FormInput',
              config: {
                type: 'email',
                name: 'emailidInput',
                label: 'Email Address',
                maxLength: 50,
                minLength: 2,
                placeholder: 'example@gamil.com',
                colSize: 6,
              },
            },
            {
              type: 'FormInput',
              config: {
                type: 'text',
                name: 'address1ControlTextarea',
                label: 'Address',
                maxLength: 50,
                minLength: 2,
                placeholder: 'Address 1',
                colSize: 12,
              },
            },
            {
              type: 'FormInput',
              config: {
                type: 'text',
                name: 'citynameInput',
                label: 'City',
                maxLength: 50,
                minLength: 2,
                placeholder: 'Enter your city',
                colSize: 6,
              },
            },
            {
              type: 'FormInput',
              config: {
                type: 'select',
                name: 'ForminputState',
                label: 'State',
                colSize: 6,
              },
            },
          ],
        },
        {
          colSize: 6,
          componentName: 'FormSelect',
          type: 'FormSelect',
          attributes: [],
          fields:[
            {
              type: 'FormInput',
              config: {
                type: 'select',
                name: 'ForminputState',
                label: 'Country',
                colSize: 6,
              },
            },
          ]
        }
      ]
    }
  ],
};

beforeEach(async () => {
  // await fs.mkdir(OUTPUT_DIR, { recursive: true });
  // await newApp(appConfig, OUTPUT_DIR);
});

it('should create a new page', async () => {
  await addComponentToPage(pageConfig, component, OUTPUT_DIR);
  // await newPage(pageConfig, OUTPUT_DIR)
});
