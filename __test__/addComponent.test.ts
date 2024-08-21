import fs from 'fs-extra';
import { newApp } from '../src/newApp';
import { newPage } from '../src/newPage'; 
import { OUTPUT_DIR } from '../src/utils/constants';
import { PageConfig, Component, AppConfig } from '../src/interfaces/types';
import { addComponentToPageConfig } from '../src/modules/components/addComponentToPageConfig';
import { addComponentToPage as addComponentToPage } from '../src/addComponentToPage';



const appConfig: AppConfig = {
  type: 'baseApp',
  appName: 'NextAppTest',
};


const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'Form',
  path: 'form',
  components: [],
};

const component: Component = {
  Row: [
    {
      Col: [
        {
          colSize: 12,
          componentName: 'Form Layout',
          type: 'form',
          attributes: [],
          fields: [
            {
              type: 'FormInput',
              config: {
                type: 'text', name: 'firstname', label: 'First Name', maxLength: 10, minLength: 2,
                colSize: 6
              },
            }
          ]
        }
      ]
    }
  ]
};

beforeEach(async () => {
  // await fs.mkdir(OUTPUT_DIR, { recursive: true });
  // await newApp(appConfig, OUTPUT_DIR);
});


it('should create a new page', async () => {
  await addComponentToPage(pageConfig, component, OUTPUT_DIR)
  // await newPage(pageConfig, OUTPUT_DIR)
});

