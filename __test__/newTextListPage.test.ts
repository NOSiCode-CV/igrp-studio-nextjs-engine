import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { inputLayout } from './newInputPage.test';
import { buttonLayout } from './newButtonPage.test';
import { badgeLayout } from './newBadgePage.test';
//import { inputLayout } from "./newInputPage.test";

export const OUTPUT_DIR = OUTPUT_TEST;

const textListLayout: Layout = {
  id: 'section_textLists',
  tag: 'section_textLists',
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
        title: 'Text List',
        description: 'A demo text list component',
      }
    },
    {
      id: 'textlist_default',
      tag: 'textlist_default',
      componentName: 'textList',
      properties: {
        iconProperties: {
          customItem: 'ArrowRight'
        }
      },
      children: [
        {
          id: 'textList_default_buttons',
          tag: 'textList_default_buttons',
          componentName: 'textListItem',
          properties: {
            value: 'button',
            badgeText: 'Buttons',
            badgeVariant: 'outline',
            badgeColor: 'primary',
            iconProperties: {
              icon: 'ArrowRight'
            }
          },
          children: [
            buttonLayout
          ],
        },
        {
          id: 'textList_default_badge',
          tag: 'textList_default_badge',
          componentName: 'textListItem',
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
  pageName: 'textList',
  path: 'textList',
  components: textListLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('TextList module',() =>{
  it('should save the textList page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
