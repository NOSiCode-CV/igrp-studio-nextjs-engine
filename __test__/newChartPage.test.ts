import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { baseInteraction } from '../src/components/default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../src/utils/constants';

export const OUTPUT_DIR = OUTPUT_TEST;

export const inputLayout: Layout = {
  id: 'default_section',
  componentName: 'section',
  properties: {
    spaceY: 6,
  },
  children: [
    {
      id: 'grid_inputs',
      componentName: 'grid',
      properties: {
        variant: 'cols3',
        className: 'border rounded-lg',
        padding: '10',
        gap: '4',
      },
      childProperties: {
        //padding: '4'
      },
      children: [
        {
          id: 'chart_area',
          componentName: 'areachart',
          properties: {
            areas: [
              {
                type: 'linear',
              },

            ]
          }
        },
      ]
    },
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
