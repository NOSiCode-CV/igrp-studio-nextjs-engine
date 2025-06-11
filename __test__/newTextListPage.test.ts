import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { inputLayout } from './newInputPage.test';
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
          id: 'textList_default_item_1',
          tag: 'textList_default_item_1',
          componentName: 'textListItem',
          properties: {
            badgeText: 'Buttons',
            badgeVariant: 'outline',
            badgeColor: 'primary',
            iconProperties: {
              icon: 'ArrowRight'
            }
          },
          children: [
            {
              id: 'textList_default_content',
              tag: 'textList_default_content',
              componentName: 'textListItemContent',
              properties: {
              },
              children: [
                {
                  id: 'text_default',
                  tag: 'text_default',
                  componentName: 'text',
                  properties: {
                    content: 'iGRP',
                    variant: 'primary',
                    weight: 'bold',
                    size: 'lg',
                    align: 'center'
                  }
                }
              ],
            },
            {
              id: 'textList_default_subitem',
              tag: 'textList_default_subitems',
              componentName: 'textListSubItems',
              properties: {
              },
              children: [
                {
                  id: 'textList_default_subitem_1',
                  tag: 'textList_default_subitem_1',
                  componentName: 'textListItem',
                  properties: {
                    badgeText: 'SubItem1',
                    badgeVariant: 'soft',
                    badgeColor: 'secondary',
                    iconProperties: {
                      icon: 'ArrowLeft'
                    }
                  },
                  children: [
                    {
                      id: 'textList_default_content_subitem',
                      tag: 'textList_default_content_subitem',
                      componentName: 'textListItemContent',
                      properties: {
                        content: 'Text Subitem 1'
                      },
                      children: [

                      ],
                    },
                    {
                      id: 'textList_default_subitem_2',
                      tag: 'textList_default_subitems_2',
                      componentName: 'textListSubItems',
                      properties: {
                      },
                      children: [

                      ],
                    },

                  ],
                },
              ],
            },

          ],
        },

      ],
    },
  ],
};

const pageConfig: PageConfig = {
  id: 'qbcTgr4Ny2z1',
  types: [],
  type: 'page',
  pageName: 'textList',
  path: 'textList',
  components: textListLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Text List module',() =>{
  it('should save the text list page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
