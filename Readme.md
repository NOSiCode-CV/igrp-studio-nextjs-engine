# Application Execution Guide

## Project Description
This application is developed using TypeScript and Handlebars. It allows users to quickly and easily create configurable Next.js applications with TypeScript. Once the application is created, users can also create pages and add or remove components from those pages, providing a flexible and efficient way to manage their Next.js projects.

## Prerequisites

Before running this application, ensure the following software is installed on your machine::

- [Nodejs](https://nodejs.org/en/download/package-manager/current)

## Installation and Execution Steps

### 1. Download the Project:

Clone or download the project to your local machine.

### 2. Install Dependencies:

Navigate to the project's root directory and run the following command to install all necessary dependencies:

```bash
npm install
```

### Running Tests:

To run tests, execute the following command, replacing fileNameTest with the name of the test file you want to run:

```bash 
npm test fileNameTest
```
You can find all test files in the test directory

### Important Notes

- To get accurate test results, ensure that the tests not of current interest are commented out. This will help you focus on the results of the specific tests you wish to evaluate.


## Examples of use as a package:

### Install the package:
In your project:
```
yarn add @igrp/nextjs-engine@latest --registry=https://sonatype.nosi.cv/repository/npm-group/
```

### Using the Package:

You can use this package to:
- #### create a Next.js application. 
The following example demonstrates how to initialize and set up a base structure for an application based on the provided configuration:


```typescript
import { newApp } from '@igrp/nextjs-engine';
import { AppConfig } from '@igrp/nextjs-engine/dist/interfaces/types';

const basePath = 'Path where the application will be created';

const appConfig: AppConfig = {
  type: 'nextjs',
  appName: 'appTest',
};

const createApp = async () => {
  try {
    await newApp(appConfig, basePath);
    console.log('App created successfully');
  } catch (error) {
    console.error('Error when creating project:', error);
  }
};

createApp();
```
Open a terminal in the generated application root directory or use a code editor with an integrated terminal. Then, run the following command to install all the project dependencies:
```bash
yarn
```
Once the dependencies are installed, run the following command to start the application in development mode:
```bash
yarn run dev
```
If all went well, the application will be running at the following URL:
```bash
http://localhost:3000
```
Open that address in your browser and you should see the welcome page, similar to the one shown in the image below.
![Application Preview](./assets/welcomePage.png)

- #### add Page to the Application
```ts
import { newPage } from '@igrp/nextjs-engine';
import { PageConfig } from '@igrp/nextjs-engine/dist/interfaces/types';

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'form',
  path: 'form',
  components: [],
};

const createPage = async () => {
  try {
    await newPage(pageConfig, basePath);
    console.log('Page created successfully');
  } catch (error) {
    console.error('Error when creating page:', error);
  }
};

createPage();
```
After running the above code, you can view the created page by navigating to the following URL in your browser:
```bash
http://localhost:3000/pages/user
```
![Application Preview](./assets/newPage.png)

#### Add Components to the Page
```ts
import { addComponentToPage } from '@igrp/nextjs-engine';
import { PageConfig, Component } from '@igrp/nextjs-engine/dist/interfaces/types';

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'form',
  path: 'form',
  components: [],
};

const components: Component[] = [

  // add personal info form component 
  {
    Row: [
      {
        Col: [
          {
            id: 'col_nihdj',
            colSize: 12,
            components: [
              {
                id: 'personalInfo',
                componentName: 'FormLayout',
                config: {
                  title: 'Personal Info',
                  showTitle: false,
                },
                fields: [
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'name',
                      label: 'Name',
                      required: true,
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
                      placeholder: 'Enter your first name',
                      colSize: 6,
                    },
                    validation: {
                      minLeng: 13,
                      errorMinLeng: 'Min 13',
                      maxLeng: 100,
                      errorMaxLeng: 'Max 100',
                    },
                  }
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  
  // // add company form component 
  {
    Row: [
      {
        Col: [
          {
            id: 'col_nihdj',
            colSize: 12,
            components: [
              {
                id: 'companyInfo',
                componentName: 'FormLayout',
                config: {
                  title: 'Company Info',
                  showTitle: true,
                },
                fields: [
                  {
                    type: 'TextInput',
                    config: {
                      type: 'text',
                      name: 'company',
                      label: 'Company',
                      required: true,
                      placeholder: 'Enter your first name',
                      colSize: 4,
                    },
                  },
                  {
                    type: 'SelectInput',
                    config: {
                      type: 'select',
                      name: 'city',
                      label: 'City',
                      required: true,
                      options: [
                        { value: 'Madrid', label: 'Madrid' },
                        { value: 'Luanda', label: 'Luanda' },
                        { value: 'Praia', label: 'Praia' },
                      ],
                      colSize: 4,
                    }
                  },
                  {
                    type: 'PhoneNumberInput',
                    config: {
                      type: 'tel',
                      name: 'phone',
                      label: 'Pone Number',
                      required: true,
                      colSize: 4,
                    },
                    validation: {
                      requiredMessage: 'Phone Number is required'
                    },
                  },
                  
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // add pageButton
  {
    Row: [
      {
        Col: [
          {
            id: 'buttoncomponent',
            colSize: 6,
            components: [
              {
                id: 'pageButton',
                componentName: 'Button',
                config: {
                  applyToAllForms: true,
                  refreshTable: true, //you need to set it true if you want refresh the table after the action type is executed
                  actionType: 'submitAll',
                  buttonText: 'Enviar',
                  className: 'btn-info mb-2 mx-2',
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // // add clienteside table component
  {
    Row: [
      {
        Col: [
          {
            id: 'col_2',
            colSize: 12,
            components: [
              {
                id: 'tablecomponent',
                componentName: 'TableComponent',
                config: {
                  title: 'Members',
                  showTitle: true,
                  pageSize: 5,
                  isGlobalFilter: true,
                  SearchPlaceholder: 'Search...',
                  isPagination: true,
                  isSortable: true,
                  servrSsidePagination: false,
                  actionTitle: 'Actions'
                },
                fields: [
                  { header: "Name", accessorKey: "name", enableColumnFilter: false },
                  { header: "Age", accessorKey: "age", enableColumnFilter: false },
                  { header: "Tel", accessorKey: "phone", enableColumnFilter: false },
                  { header: "City", accessorKey: "city", enableColumnFilter: false },
                  { header: "Company", accessorKey: "company", enableColumnFilter: false },
                ],
                actions: [
                  {
                    id:'editRow',
                    type: 'Button',
                    config: {
                      icon: 'ri-pencil-fill',
                      color: 'info',
                      className: 'btn-ghost-info',
                    },
                  },
                  {
                    id:'deleteRow',
                    type: 'Button',
                    config: {
                      refreshTable: true,
                      icon: 'ri-delete-bin-5-line',
                      className: 'btn-ghost-danger',
                      actionType: 'alert'
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

];

const addComponent = async () => {
  try {
    await addComponentToPage(pageConfig, components, basePath);
    console.log('Components added successfully');
  } catch (error) {
    console.error('Error when adding components to page:', error);
  }
};

addComponent();

```

### Implementacion del servicio:
Follow the steps below to implement the service logic in the form:
1. Update the UserService.ts file located in services/user/UserService.ts with the following code:
```ts

import { IformService } from "@/app/pages/form/page";

/**
 * This is the service that will be inject in to the form page,
 * you have to implemented this method if you want to use this
 *
 * To ensure that every method your are implemented remove the partial and typscript will provide a script verification
 */

let companyData = [];

export const FormService: IformService = {
  personalinfo: {
    populate: () => ({
      name: null,
      age: null
    })
  },

  companyinfo: {
    populate: () => ({
      company: null,
      city: null,
      phone: null,
    })
  },
 
  tablecomponent: {
    populate: async () => {
     return {
      rows: companyData,
      rowsCount: companyData.length
     }
    }
  },
  
  pageButton: function (data: any): void {
    companyData = [...companyData, { id: getId(), ...data.personalInfo, ...data.companyInfo }]
  },

  deleteRow: (data: any) => companyData = companyData.filter((c) => c.id !== data.id),

  editRow: function (data?: Record<string, any>): void {
    console.log(data);
  },
};

const getId = () => {
  const lastId = companyData.length > 0 ? companyData[companyData.length - 1].id : '0';
  return (Number(lastId) + 1).toString();
};
```
You should now see the new components added, such as the form and the table shown in the image in the next section.
![Application Preview](./assets/componentPage.png)

#### Delete Page
You can delete the page you created using the following example:
```ts
import { deletePage } from '@igrp/nextjs-engine';

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'form',
  path: 'form',
  components: [],
};

const removePage = async () => {
  try {
    await deletePage(pageConfig, basePath);
    console.log('Page removed successfully');
  } catch (error) {
    console.error('Error when removing page:', error);
  }
};

removePage();
```

### Types and Interfaces
```ts
import { COMPONENTS_NAMES, COMPONENTS_TYPES, FIELD_TYPES } from '@/utils/constants';

export interface AppConfig {
  type: 'nextjs';
  appName: string;
  description?: string
}

export interface PageConfig {
  type: 'page';
  pageName: string;
  path: string;
  components?: Component[];
}

export interface Component {
  Row: RowLayout[];
}

export interface RowLayout {
  Col: ColumnLayout[];
}

export interface ColumnLayout {
  id: string;
  colSize: number;
  components?: ColumnComponent[];
}

export interface ColumnComponent {
  id: string;
  formRefs?: any;
  values?: any;
  serviceAction?: any;
  target?: string;
  componentName: ComponentNames;
  config: ColumnConfig;
  fields?: Field[] | TableFields[];
  actions?: IAction[];
}

export interface Field {
  type: string;
  config: FieldConfig;
  validation?: {
    minLeng?: number;
    maxLeng?: number;
    errorMinLeng?: string;
    errorMaxLeng?: string;
    requiredMessage?: string;
  };
}

export interface IAction {
  id: string;
  type: 'Button' | 'Link' | 'IGRP_ButtonInput';
  config: IActionConfig;
}

export interface IActionConfig {
  icon?: string;
  buttonText?: string;
  target?: string;
  className?: string;
  color?: string;
  refreshTable?: boolean;
  actionType?: string, //All buttons must have an action type, indicating the action you want to happen when the button is clicked.
  // Use the following properties in the config of the button to customize the information in the dialog alert. It's work only when the action type is 'alert'
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
}

export interface IButton {
  formRefs?: any;
  serviceAction?: (data: Record<string, any>) => void;
  buttonText?: string;
  className?: string;
  values?: any;
  icon?: string;
  actionType: string,
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
  
}

export interface ColumnConfig {
  title?: string;
  showTitle?: boolean;
  colSize?: number;
  pageSize?: number;
  isPagination?: boolean;
  isGlobalFilter?: boolean;
  SearchPlaceholder?: string;
  isSortable?: boolean;
  actionTitle?: string;
  servrSsidePagination?: boolean;
  buttonText?: string;
  className?: string;
  applyToAllForms?: boolean; 
  targetForms?: string[], 
  refreshTable?: boolean,
  actionType?: string
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
}

export interface TableFields {
  header?: string;
  accessorKey?: string;
  enableColumnFilter?: boolean;
}

export interface FieldConfig {
  type: FieldTypes;
  name: string;
  label?: string;
  colSize?: number;
  required?: boolean;
  placeholder?: string;
  color?: string;
  className?: string;
  buttonText?: string;
  actionType?: string;
  targetForms?: string[];
  applyToAllForms?: boolean;
  alertTitle?: string;
  alertMessage?: string;
  alertIcon?: string;
  alertConfirmButtonLabel?: string;
  alertCancelButtonLabel?: string;
  alertConfirmButtonClass?: string;
  alertCancelButtonClass?: string;
  refreshTable?: boolean
  options?: {
    value: string;
    label: string;
  }[];
}

export interface PageMetaConfig {
  type: "UI"; //aplication type
  url: string; // application url
  description: string; //aplication description
  resourceItems?: {
    name: string; // page name
    url: string; //page path,
    resourceItemType: 'PAGE';
    description: string; // page description
  }[];
}

export type RenderContext<T = undefined> = {
  resourceConfig: T;
  basePath: string;
  baseConfig?: AppConfig;
  velzonImports?: string[];
  formRefs?: string[];
};

export type FieldTypes = (typeof FIELD_TYPES)[number];
export type ComponentTypes = (typeof COMPONENTS_TYPES)[number];
export type ComponentNames = (typeof COMPONENTS_NAMES)[number];
```
## End
#### To read more valuable information about the NextJS Engine, we recommend taking a look at its corresponding documentation.