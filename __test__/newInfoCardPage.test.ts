import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { inputLayout } from './newInputPage.test';
import { buttonLayout } from './newButtonPage.test';
import { badgeLayout } from './newBadgePage.test';
//import { inputLayout } from "./newInputPage.test";

export const OUTPUT_DIR = OUTPUT_TEST;

const infoCardLayout: Layout = {
  id: 'section_infoCards',
  tag: 'section_infoCards',
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
        title: 'InfoCard',
        description: 'A demo infoCard component',
      }
    },
    {
      id: 'infoCard_default',
      tag: 'infoCard_default',
      componentName: 'infoCard',
      properties: {
        variantSection: 'solid',
        colorSection: 'primary',
        title: 'Info'
      },
      children: [
        {
          id: 'info_card_default_section_1',
          tag: 'info_card_default_section_1',
          componentName: 'infoSection',
          children: [
            {
              id: 'infoCard_default_info_item_1',
              tag: 'infoCard_default_info_item_1',
              componentName: 'infoItem',
              properties: {
                text: 'Something new is coming!',
                label: 'News',
                variantItem: 'soft',
                colorItem: 'primary',
                iconProperties: {
                  icon: 'Lightbulb',
                }
              },
              children: [
              ],
            },
            {
              id: 'infoCard_default_info_item_2',
              tag: 'infoCard_default_info_item_2',
              componentName: 'infoItem',
              properties: {
                text: 'New version has been released!',
                label: 'News',
                variantItem: 'outline',
                colorItem: 'secondary',
                iconProperties: {
                  icon: 'Info',
                }
              },
              children: [
              ],
            },
          ]
        },
        {
          id: 'info_card_default_section_2',
          tag: 'info_card_default_section_2',
          componentName: 'infoSection',
          children: [
            {
              id: 'infoCard_default_info_item_3',
              tag: 'infoCard_default_info_item_3',
              componentName: 'infoItem',
              properties: {
                text: 'Pay attention to this information!',
                label: 'Attention',
                variantItem: 'solid',
                colorItem: 'destructive',
                iconProperties: {
                  icon: 'CircleAlert',
                }
              },
              children: [
              ],
            },
            {
              id: 'infoCard_default_info_item_4',
              tag: 'infoCard_default_info_item_4',
              componentName: 'infoItem',
              properties: {
                text: 'Careful with this message!',
                label: 'Warning',
                variantItem: 'soft',
                colorItem: 'warning',
                iconProperties: {
                  icon: 'TriangleAlert',
                }
              },
              children: [
              ],
            },
          ]
        },

      ],
    },
  ],
};

const pageConfig: PageConfig = {
  id: 'tetVsbtLa4p0',
  types: [],
  type: 'page',
  pageName: 'infoCard',
  path: 'infoCard',
  components: infoCardLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('InfoCard module',() =>{
  it('should save the infoCard page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
