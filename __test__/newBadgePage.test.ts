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

    /* SMALL */

    // Default color

    {
      id: "badge_default_solid_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        color: 'default',
        children: 'Default Solid'
      },
    },
    {
      id: "badge_default_outline_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        color: 'default',
        children: 'Default Outline'
      },
    },
    {
      id: "badge_default_soft_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        color: 'default',
        children: 'Default Soft'
      },
    },

    // Primary color

    {
      id: "badge_primary_solid_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        color: 'primary',
        children: 'Primary Solid'
      },
    },
    {
      id: "badge_primary_outline_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        color: 'primary',
        children: 'Primary Outline'
      },
    },
    {
      id: "badge_primary_soft_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        color: 'primary',
        children: 'Primary Soft'
      },
    },


    // Secondary color

    {
      id: "badge_secondary_solid_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        color: 'secondary',
        children: 'Secondary Solid'
      },
    },
    {
      id: "badge_secondary_outline_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        color: 'secondary',
        children: 'Secondary Outline'
      },
    },
    {
      id: "badge_secondary_soft_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        color: 'secondary',
        children: 'Secondary Soft'
      },
    },

    // Success color

    {
      id: "badge_success_solid_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        color: 'success',
        children: 'Success Solid'
      },
    },
    {
      id: "badge_success_outline_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        color: 'success',
        children: 'Success Outline'
      },
    },
    {
      id: "badge_success_soft_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        color: 'success',
        children: 'Success Soft'
      },
    },


    // Error color

    {
      id: "badge_error_solid_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        color: 'error',
        children: 'Error Solid'
      },
    },
    {
      id: "badge_error_outline_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        color: 'error',
        children: 'Error Outline'
      },
    },
    {
      id: "badge_error_soft_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        color: 'error',
        children: 'Error Soft'
      },
    },

    /* MEDIUM */

    // Default color

    {
      id: "badge_default_solid_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        color: 'default',
        children: 'Default Solid'
      },
    },
    {
      id: "badge_default_outline_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        color: 'default',
        children: 'Default Outline'
      },
    },
    {
      id: "badge_default_soft_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        color: 'default',
        children: 'Default Soft'
      },
    },

    // Primary color

    {
      id: "badge_primary_solid_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        color: 'primary',
        children: 'Primary Solid'
      },
    },
    {
      id: "badge_primary_outline_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        color: 'primary',
        children: 'Primary Outline'
      },
    },
    {
      id: "badge_primary_soft_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        color: 'primary',
        children: 'Primary Soft'
      },
    },


    // Secondary color

    {
      id: "badge_secondary_solid_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        color: 'secondary',
        children: 'Secondary Solid'
      },
    },
    {
      id: "badge_secondary_outline_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        color: 'secondary',
        children: 'Secondary Outline'
      },
    },
    {
      id: "badge_secondary_soft_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        color: 'secondary',
        children: 'Secondary Soft'
      },
    },

    // Success color

    {
      id: "badge_success_solid_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        color: 'success',
        children: 'Success Solid'
      },
    },
    {
      id: "badge_success_outline_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        color: 'success',
        children: 'Success Outline'
      },
    },
    {
      id: "badge_success_soft_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        color: 'success',
        children: 'Success Soft'
      },
    },


    // Error color

    {
      id: "badge_error_solid_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        color: 'error',
        children: 'Error Solid'
      },
    },
    {
      id: "badge_error_outline_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        color: 'error',
        children: 'Error Outline'
      },
    },
    {
      id: "badge_error_soft_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        color: 'error',
        children: 'Error Soft'
      },
    },

    /* LARGE */

    // Default color

    {
      id: "badge_default_solid_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        color: 'default',
        children: 'Default Solid'
      },
    },
    {
      id: "badge_default_outline_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        color: 'default',
        children: 'Default Outline'
      },
    },
    {
      id: "badge_default_soft_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        color: 'default',
        children: 'Default Soft'
      },
    },

    // Primary color

    {
      id: "badge_primary_solid_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        color: 'primary',
        children: 'Primary Solid'
      },
    },
    {
      id: "badge_primary_outline_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        color: 'primary',
        children: 'Primary Outline'
      },
    },
    {
      id: "badge_primary_soft_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        color: 'primary',
        children: 'Primary Soft'
      },
    },


    // Secondary color

    {
      id: "badge_secondary_solid_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        color: 'secondary',
        children: 'Secondary Solid'
      },
    },
    {
      id: "badge_secondary_outline_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        color: 'secondary',
        children: 'Secondary Outline'
      },
    },
    {
      id: "badge_secondary_soft_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        color: 'secondary',
        children: 'Secondary Soft'
      },
    },

    // Success color

    {
      id: "badge_success_solid_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        color: 'success',
        children: 'Success Solid'
      },
    },
    {
      id: "badge_success_outline_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        color: 'success',
        children: 'Success Outline'
      },
    },
    {
      id: "badge_success_soft_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        color: 'success',
        children: 'Success Soft'
      },
    },


    // Error color

    {
      id: "badge_error_solid_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        color: 'error',
        children: 'Error Solid'
      },
    },
    {
      id: "badge_error_outline_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        color: 'error',
        children: 'Error Outline'
      },
    },
    {
      id: "badge_error_soft_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        color: 'error',
        children: 'Error Soft'
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
