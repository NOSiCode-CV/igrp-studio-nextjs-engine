import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const badgeLayout: Layout = {
  id: "grid_badges",
  componentName: "grid",
  properties: {
    variant: "cols3",
    className: "border rounded-lg center",
    padding: '10',
    gap: '4',
  },
  children: [
    {
      id: "badge_default_fill",
      componentName: "badge",
      properties: {
        variant: 'fill',
        intent: 'default',
        children: 'Badge'
      },
    },
  ]
};

const pageConfig: PageConfig = {
  id: 'v91Qsm1rb210',
  type: 'page',
  pageName: 'badges',
  path: 'badges',
  components: badgeLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Badges module',() =>{
  it('should save the badge page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
