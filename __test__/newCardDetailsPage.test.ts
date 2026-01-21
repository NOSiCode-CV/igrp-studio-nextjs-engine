import { initComponents, newPage, setEngineConfiguration } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { inputLayout } from './newInputPage.test';
import { buttonLayout } from './newButtonPage.test';
import { badgeLayout } from './newBadgePage.test';
//import { inputLayout } from "./newInputPage.test";

export const OUTPUT_DIR = OUTPUT_TEST;

const cardDetailsLayout: Layout = {
  id: 'section_card_details',
  tag: 'section_card_details',
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
        title: 'Card Details',
        description: 'A demo cardDetails component',
      }
    },
    {
      id: 'cardDetails_default',
      tag: 'cardDetails_default',
      componentName: 'cardDetails',
      properties: {
        description: 'A demo basic info card details',
        title: 'Basic Info'
      },
      children: [
        {
          id: 'card_details_default_item_1',
          tag: 'card_details_default_item_1',
          componentName: 'cardDetailsItem',
          properties: {
            label: 'Name',
            content: "John Doe",
            showCopyTo: true
          },
          children: [
          ],
        },
        {
          id: 'cardDetails_default_item_2',
          tag: 'cardDetails_default_item_2',
          componentName: 'cardDetailsItem',
          properties: {
            label: 'Birthdate',
          },
          children: [
            {
              id: 'item_paragraph',
              tag: 'item_paragraph',
              componentName: 'paragraph',
              properties: {
                content: '01/01/1999',
                className: 'animate-pulse',
              },
            },
          ],
        },
      ],
    },
  ],
};

const pageConfig: PageConfig = {
  id: 'tcvVsatAa2v1',
  types: [],
  type: 'page',
  pageName: 'cardDetails',
  path: 'cardDetails',
  components: cardDetailsLayout,
};

beforeAll(async () => {
  setEngineConfiguration({ environment: 'development' })
  await initComponents();
});

describe('Card Details module',() =>{
  it('should save the card details page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
