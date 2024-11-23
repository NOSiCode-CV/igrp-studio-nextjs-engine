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
yarn add @igrp/nextjs-engine@0.0.5 --registry=https://sonatype.nosi.cv/repository/npm-group/
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
  type: 'baseApp',
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
  pageName: 'user',
  path: 'users',
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
  pageName: 'user',
  path: 'users',
  components: [],
};

const components: Component [] = [
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
                  },
                  {
                    type: 'Select2Input',
                    config: {
                      type: 'select',
                      name: 'userOptions',
                      label: 'User Options',
                      placeholder: 'select an option',
                      colSize: 4,
                    },
                  },
                ],
              }
            ],
          },
        ],
      },
    ],
  },

  // add button component
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

  // add table component
  {
    Row: [
      {
        Col: [
          {
              id: 'col_2',
            colSize: 6,
            components: [
              {
                id: 'tablecomponent',
                componentName: 'TableComponent',
                config: {
                  title: 'Pokemons',
                  showTitle: true,
                  pageSize: 5,
                  isGlobalFilter: true,
                  SearchPlaceholder: 'Search...',
                  isPagination: true,
                  isSortable: true,
                  servrSsidePagination: true,
                  actionTitle: 'Actions',
                },
                fields: [
                  { header: 'Name', accessorKey: 'name', enableColumnFilter: false },
                  { header: 'Url', accessorKey: 'url', enableColumnFilter: false },
                ],
                actions: [
                  {
                    type: 'Button',
                    config: {target:'sendRow', icon: 'ri-pencil-line', buttonColor: 'btn-ghost-info mx-1'}
                  },
                  {
                    type: 'Button',
                    config: {target:'deleteRow', icon: 'ri-delete-bin-5-line', buttonColor: 'btn-ghost-danger mx-1'}
                  }
                ]
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

import { IuserService } from '@/app/pages/user/page'

/**
* This is the service that will be inject in to the user page, 
* you have to implemented this method if you want to use this
*
* To ensure that every method your are implemented remove the partial and typscript will provide a script verification
*/

interface IPokemon {
  count: number,
  results: {
    name: string,
    url: string
  }[]
}
export const UserService: IuserService = {
  company: {
    populate: () => ({
      firstName: '',
      age: 25,
      userOptions: null
    })
  },

  tablecomponent: {
    populate: async (page?: number, size?: number, globalFilter?: string, orderBy?: any, direction?: any) => {
      const params = new URLSearchParams()

      if (page !== undefined) {
        params.append("offset", page.toString())
      }

      if (size !== undefined) {
        params.append("limit", String(size))
      }

      if (globalFilter) {
        params.append("search", globalFilter)
      }

      if (orderBy !== undefined && orderBy !== null) {
        params.append("orderBy", orderBy)
        params.append("direction", direction || 'asc')
      }

      const url = `https://pokeapi.co/api/v2/pokemon?${params.toString()}`

      const response = await fetch(url)
      const data: IPokemon = await response.json()
      return {
        rows: data.results,
        rowCount: data.count
      }
    },
  },
  
  sendData: function (data?: Record<string, unknown>): void {
    console.log(data)
  },

  deleteRow: function (data?: Record<string, any>): void {
    console.log('Deleting... ', data)
  },
  sendRow: function (data?: Record<string, any>): void {
    console.log('Sending... ', data)
  }
}
```
You should now see the new components added, such as the form and the table shown in the image in the next section.
![Application Preview](./assets/componentPage.png)

#### Delete Page
You can delete the page you created using the following example:
```ts
import { deletePage } from '@igrp/nextjs-engine';

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'user',
  path: 'users',
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
  type: 'baseApp';
  appName: string;
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
  componentName: ComponentNames
  config: ColumnConfig;
  fields?: Field[] | TableFields[]; 
  actions?: IAction[]
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
  type: "Button"| "Link";
  config: IActionConfig;
}

export interface IActionConfig {
  icon?: string;
  buttonText?: string;
  target?: string;
  buttonColor?: string;
}

export interface IButton {
  formRefs?: any;
  serviceAction?: (data: Record<string, any>) => void;
  buttonText?: string;
  buttonColor?: string;
  values?: any;
  icon?: string;
};

export interface ColumnConfig {
  title?: string;
  showTitle?: boolean,
  colSize?: number;
  pageSize?: number, 
  isPagination?: boolean, 
  isGlobalFilter?: boolean,
  SearchPlaceholder?: string,
  isSortable?: boolean,
  actionTitle?: string,
  servrSsidePagination?: boolean,
  buttonText?: string,
  buttonColor?: string,
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
  options?: {
    value: string;
    label: string;
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