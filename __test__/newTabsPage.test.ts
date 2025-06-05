import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { inputLayout } from './newInputPage.test';
import { buttonLayout } from './newButtonPage.test';
import { badgeLayout } from './newBadgePage.test';
//import { inputLayout } from "./newInputPage.test";

export const OUTPUT_DIR = OUTPUT_TEST;

const tabsLayout: Layout = {
  id: 'section_tabss',
  tag: 'section_tabss',
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
        title: 'Tabs',
        description: 'A demo tabs component',
      }
    },
    {
      id: 'tabs_default',
      tag: 'tabs_default',
      componentName: 'tabs',
      properties: {
        variant: 'default',
        iconProperties: {
          showIcon: true,
          iconPlacement: 'end',
        }
      },
      children: [
        {
          id: 'tabs_default_buttons',
          tag: 'tabs_default_buttons',
          componentName: 'tabsItem',
          properties: {
            value: 'button',
            label: 'Buttons',
            iconProperties: {
              icon: 'ArrowRight'
            }
          },
          children: [
            buttonLayout
          ],
        },
        {
          id: 'tabs_default_badge',
          tag: 'tabs_default_badge',
          componentName: 'tabsItem',
          properties: {
            value: 'badge',
            label: 'Badges',
            iconProperties: {
              icon: 'ArrowRight'
            }
          },
          children: [
            badgeLayout
          ],
        },
      ],
    },
  ],
};

const pageConfig: PageConfig = {
  id: 'tabTgb1La4p0',
  types: [],
  type: 'page',
  pageName: 'tabs',
  path: 'tabs',
  components: tabsLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Tabs module',() =>{
  it('should save the tabs page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
