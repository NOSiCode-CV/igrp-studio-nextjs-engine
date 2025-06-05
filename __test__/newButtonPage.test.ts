import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

export const buttonLayout: Layout = {
  id: "grid_buttons",
  tag: "grid_buttons",
  componentName: "grid",
  properties: {
    variant: "cols3",
    className: "border rounded-lg center",
    padding: '10',
    gap: '4',
  },
  children: [
    {
      id: "button_default",
      tag: "button_default",
      componentName: "button",
      properties: {
        variant: 'default',
        size: 'default',
        label: 'Default'
      },
    },
    {
      id: "button_default_disabled",
      tag: "button_default_disabled",
      componentName: "button",
      properties: {
        variant: 'default',
        size: 'default',
        disabled: true,
        label: 'Disabled'
      }
    },
    {
      id: "button_destructive",
      tag: "button_destructive",
      componentName: "button",
      properties: {
        variant: 'destructive',
        size: 'default',
        label: 'Destructive'
      },
    },
    {
      id: "button_outline",
      tag: "button_outline",
      componentName: "button",
      properties: {
        variant: 'outline',
        size: 'default',
        label: 'Outline'
      }
    },
    {
      id: "button_secondary",
      tag: "button_secondary",
      componentName: "button",
      properties: {
        variant: 'secondary',
        size: 'default',
        label: 'Secondary'
      }
    },
    {
      id: "button_ghost",
      tag: "button_ghost",
      componentName: "button",
      properties: {
        variant: 'ghost',
        size: 'default',
        label: 'Ghost'
      }
    },
    {
      id: "button_link",
      tag: "button_link",
      componentName: "button",
      properties: {
        variant: 'link',
        size: 'default',
        label: 'Link'
      }
    },
    {
      id: "button_icon_start",
      tag: "button_icon_start",
      componentName: "button",
      properties: {
        variant: 'default',
        size: 'default',
        label: 'Left',
        iconProperties: {
          showIcon: true,
          iconName: 'ArrowLeft',
          iconPlacement: 'start'
        }
      }
    },
    {
      id: "button_icon_end",
      tag: "button_icon_end",
      componentName: "button",
      properties: {
        variant: 'default',
        size: 'default',
        label: 'Right',
        iconProperties: {
          showIcon: true,
          iconName: 'ArrowRight',
          iconPlacement: 'end'
        }
      }
    },
    {
      id: "button_icon_size",
      tag: "button_icon_size",
      componentName: "button",
      properties: {
        variant: 'default',
        size: 'icon',
        iconProperties: {
          iconName: 'Eye'
        }
      }
    },
    {
      id: "button_navigate",
      tag: "button_navigate",
      componentName: "button",
      properties: {
        variant: 'default',
        size: 'default',
        label: 'Navigate to Input Page',
        iconProperties: {
          showIcon: true,
          iconName: 'Globe',
          iconPlacement: 'end'
        },
      },
      interactions: {
        onClick: {
          type: 'navigate',
          navigate: {
            name: 'handlebutton_navigateNavigation',
            path: '/inputs'
          }
        }
      }
    },
  ]
};

const pageConfig: PageConfig = {
  id: 'b76Typ9lm2m1',
  type: 'page',
  types: [],
  pageName: 'buttons',
  path: 'buttons',
  components: buttonLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Buttons module',() =>{
  it('should save the button page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })
})
