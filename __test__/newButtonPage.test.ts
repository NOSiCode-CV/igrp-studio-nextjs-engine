import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const buttonLayout: Layout = {
  id: "grid_buttons",
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
      componentName: "button",
      properties: {
        variant: 'default',
        size: 'default',
        label: 'Default'
      },
    },
    {
      id: "button_default_disabled",
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
      componentName: "button",
      properties: {
        variant: 'destructive',
        size: 'default',
        label: 'Destructive'
      },
    },
    {
      id: "button_outline",
      componentName: "button",
      properties: {
        variant: 'outline',
        size: 'default',
        label: 'Outline'
      }
    },
    {
      id: "button_secondary",
      componentName: "button",
      properties: {
        variant: 'secondary',
        size: 'default',
        label: 'Secondary'
      }
    },
    {
      id: "button_ghost",
      componentName: "button",
      properties: {
        variant: 'ghost',
        size: 'default',
        label: 'Ghost'
      }
    },
    {
      id: "button_link",
      componentName: "button",
      properties: {
        variant: 'link',
        size: 'default',
        label: 'Link'
      }
    },
    {
      id: "button_icon_start",
      componentName: "button",
      properties: {
        variant: 'default',
        size: 'default',
        hasIcon: true,
        label: 'Left',
        iconProperties: {
          iconName: 'ArrowLeft',
          iconPosition: 'start'
        }
      }
    },
    {
      id: "button_icon_end",
      componentName: "button",
      properties: {
        variant: 'default',
        size: 'default',
        hasIcon: true,
        label: 'Right',
        iconProperties: {
          iconName: 'ArrowRight',
          iconPosition: 'end'
        }
      }
    },
    {
      id: "button_icon_size",
      componentName: "button",
      properties: {
        variant: 'default',
        size: 'icon',
        iconProperties: {
          iconName: 'Eye'
        }
      }
    },
  ]
};

const pageConfig: PageConfig = {
  id: 'b76Typ9lm2m1',
  type: 'page',
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
