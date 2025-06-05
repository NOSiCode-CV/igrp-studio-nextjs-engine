import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

export const badgeLayout: Layout = {
  id: "grid_badges",
  tag: "grid_badges",
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
      tag: "badge_default_solid_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        color: 'primary',
        content: 'Default Solid'
      },
    },
    {
      id: "badge_default_outline_sm",
      tag: "badge_default_outline_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        color: 'primary',
        content: 'Default Outline'
      },
    },
    {
      id: "badge_default_soft_sm",
      tag: "badge_default_soft_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        color: 'primary',
        content: 'Default Soft'
      },
    },

    // Primary color

    {
      id: "badge_primary_solid_sm",
      tag: "badge_primary_solid_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        color: 'primary',
        content: 'Primary Solid'
      },
    },
    {
      id: "badge_primary_outline_sm",
      tag: "badge_primary_outline_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        color: 'primary',
        content: 'Primary Outline'
      },
    },
    {
      id: "badge_primary_soft_sm",
      tag: "badge_primary_soft_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        color: 'primary',
        content: 'Primary Soft'
      },
    },


    // Secondary color

    {
      id: "badge_secondary_solid_sm",
      tag: "badge_secondary_solid_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        color: 'secondary',
        content: 'Secondary Solid'
      },
    },
    {
      id: "badge_secondary_outline_sm",
      tag: "badge_secondary_outline_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        color: 'secondary',
        content: 'Secondary Outline'
      },
    },
    {
      id: "badge_secondary_soft_sm",
      tag: "badge_secondary_soft_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        color: 'secondary',
        content: 'Secondary Soft'
      },
    },

    // Success color

    {
      id: "badge_success_solid_sm",
      tag: "badge_success_solid_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        color: 'success',
        content: 'Success Solid'
      },
    },
    {
      id: "badge_success_outline_sm",
      tag: "badge_success_outline_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        color: 'success',
        content: 'Success Outline'
      },
    },
    {
      id: "badge_success_soft_sm",
      tag: "badge_success_soft_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        color: 'success',
        content: 'Success Soft'
      },
    },


    // Error color

    {
      id: "badge_error_solid_sm",
      tag: "badge_error_solid_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        color: 'destructive',
        content: 'Error Solid'
      },
    },
    {
      id: "badge_error_outline_sm",
      tag: "badge_error_outline_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        color: 'destructive',
        content: 'Error Outline'
      },
    },
    {
      id: "badge_error_soft_sm",
      tag: "badge_error_soft_sm",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        color: 'destructive',
        content: 'Error Soft'
      },
    },

    /* MEDIUM */

    // Default color

    {
      id: "badge_default_solid_md",
      tag: "badge_default_solid_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        color: 'primary',
        content: 'Default Solid'
      },
    },
    {
      id: "badge_default_outline_md",
      tag: "badge_default_outline_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        color: 'primary',
        content: 'Default Outline'
      },
    },
    {
      id: "badge_default_soft_md",
      tag: "badge_default_soft_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        color: 'primary',
        content: 'Default Soft'
      },
    },

    // Primary color

    {
      id: "badge_primary_solid_md",
      tag: "badge_primary_solid_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        color: 'primary',
        content: 'Primary Solid'
      },
    },
    {
      id: "badge_primary_outline_md",
      tag: "badge_primary_outline_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        color: 'primary',
        content: 'Primary Outline'
      },
    },
    {
      id: "badge_primary_soft_md",
      tag: "badge_primary_soft_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        color: 'primary',
        content: 'Primary Soft'
      },
    },


    // Secondary color

    {
      id: "badge_secondary_solid_md",
      tag: "badge_secondary_solid_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        color: 'secondary',
        content: 'Secondary Solid'
      },
    },
    {
      id: "badge_secondary_outline_md",
      tag: "badge_secondary_outline_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        color: 'secondary',
        content: 'Secondary Outline'
      },
    },
    {
      id: "badge_secondary_soft_md",
      tag: "badge_secondary_soft_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        color: 'secondary',
        content: 'Secondary Soft'
      },
    },

    // Success color

    {
      id: "badge_success_solid_md",
      tag: "badge_success_solid_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        color: 'success',
        content: 'Success Solid'
      },
    },
    {
      id: "badge_success_outline_md",
      tag: "badge_success_outline_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        color: 'success',
        content: 'Success Outline'
      },
    },
    {
      id: "badge_success_soft_md",
      tag: "badge_success_soft_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        color: 'success',
        content: 'Success Soft'
      },
    },


    // Error color

    {
      id: "badge_error_solid_md",
      tag: "badge_error_solid_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        color: 'destructive',
        content: 'Error Solid'
      },
    },
    {
      id: "badge_error_outline_md",
      tag: "badge_error_outline_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        color: 'destructive',
        content: 'Error Outline'
      },
    },
    {
      id: "badge_error_soft_md",
      tag: "badge_error_soft_md",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        color: 'destructive',
        content: 'Error Soft'
      },
    },

    /* LARGE */

    // Default color

    {
      id: "badge_default_solid_lg",
      tag: "badge_default_solid_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        color: 'primary',
        content: 'Default Solid'
      },
    },
    {
      id: "badge_default_outline_lg",
      tag: "badge_default_outline_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        color: 'primary',
        content: 'Default Outline'
      },
    },
    {
      id: "badge_default_soft_lg",
      tag: "badge_default_soft_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        color: 'primary',
        content: 'Default Soft'
      },
    },

    // Primary color

    {
      id: "badge_primary_solid_lg",
      tag: "badge_primary_solid_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        color: 'primary',
        content: 'Primary Solid'
      },
    },
    {
      id: "badge_primary_outline_lg",
      tag: "badge_primary_outline_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        color: 'primary',
        content: 'Primary Outline'
      },
    },
    {
      id: "badge_primary_soft_lg",
      tag: "badge_primary_soft_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        color: 'primary',
        content: 'Primary Soft'
      },
    },


    // Secondary color

    {
      id: "badge_secondary_solid_lg",
      tag: "badge_secondary_solid_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        color: 'secondary',
        content: 'Secondary Solid'
      },
    },
    {
      id: "badge_secondary_outline_lg",
      tag: "badge_secondary_outline_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        color: 'secondary',
        content: 'Secondary Outline'
      },
    },
    {
      id: "badge_secondary_soft_lg",
      tag: "badge_secondary_soft_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        color: 'secondary',
        content: 'Secondary Soft'
      },
    },

    // Success color

    {
      id: "badge_success_solid_lg",
      tag: "badge_success_solid_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        color: 'success',
        content: 'Success Solid'
      },
    },
    {
      id: "badge_success_outline_lg",
      tag: "badge_success_outline_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        color: 'success',
        content: 'Success Outline'
      },
    },
    {
      id: "badge_success_soft_lg",
      tag: "badge_success_soft_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        color: 'success',
        content: 'Success Soft'
      },
    },


    // Error color

    {
      id: "badge_error_solid_lg",
      tag: "badge_error_solid_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        color: 'destructive',
        content: 'Error Solid'
      },
    },
    {
      id: "badge_error_outline_lg",
      tag: "badge_error_outline_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        color: 'destructive',
        content: 'Error Outline'
      },
    },
    {
      id: "badge_error_soft_lg",
      tag: "badge_error_soft_lg",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        color: 'destructive',
        content: 'Error Soft'
      },
    },

    /* ===================================== With icons ====================================== */

    /* SMALL */

    // Default color

    {
      id: "badge_default_solid_sm_icon",
      tag: "badge_default_solid_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Default Solid'
      },
    },
    {
      id: "badge_default_outline_sm_icon",
      tag: "badge_default_outline_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'primary',
        content: 'Default Outline'
      },
    },
    {
      id: "badge_default_soft_sm_icon",
      tag: "badge_default_soft_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Default Soft'
      },
    },

    // Primary color

    {
      id: "badge_primary_solid_sm_icon",
      tag: "badge_primary_solid_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Primary Solid'
      },
    },
    {
      id: "badge_primary_outline_sm_icon",
      tag: "badge_primary_outline_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'primary',
        content: 'Primary Outline'
      },
    },
    {
      id: "badge_primary_soft_sm_icon",
      tag: "badge_primary_soft_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Primary Soft'
      },
    },


    // Secondary color

    {
      id: "badge_secondary_solid_sm_icon",
      tag: "badge_secondary_solid_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'secondary',
        content: 'Secondary Solid'
      },
    },
    {
      id: "badge_secondary_outline_sm_icon",
      tag: "badge_secondary_outline_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'secondary',
        content: 'Secondary Outline'
      },
    },
    {
      id: "badge_secondary_soft_sm_icon",
      tag: "badge_secondary_soft_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'secondary',
        content: 'Secondary Soft'
      },
    },

    // Success color

    {
      id: "badge_success_solid_sm_icon",
      tag: "badge_success_solid_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'success',
        content: 'Success Solid'
      },
    },
    {
      id: "badge_success_outline_sm_icon",
      tag: "badge_success_outline_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'success',
        content: 'Success Outline'
      },
    },
    {
      id: "badge_success_soft_sm_icon",
      tag: "badge_success_soft_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'success',
        content: 'Success Soft'
      },
    },


    // Error color

    {
      id: "badge_error_solid_sm_icon",
      tag: "badge_error_solid_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'destructive',
        content: 'Error Solid'
      },
    },
    {
      id: "badge_error_outline_sm_icon",
      tag: "badge_error_outline_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'destructive',
        content: 'Error Outline'
      },
    },
    {
      id: "badge_error_soft_sm_icon",
      tag: "badge_error_soft_sm_icon",
      componentName: "badge",
      properties: {
        size: "sm",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'destructive',
        content: 'Error Soft'
      },
    },

    /* MEDIUM */

    // Default color

    {
      id: "badge_default_solid_md_icon",
      tag: "badge_default_solid_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Default Solid'
      },
    },
    {
      id: "badge_default_outline_md_icon",
      tag: "badge_default_outline_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'primary',
        content: 'Default Outline'
      },
    },
    {
      id: "badge_default_soft_md_icon",
      tag: "badge_default_soft_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Default Soft'
      },
    },

    // Primary color

    {
      id: "badge_primary_solid_md_icon",
      tag: "badge_primary_solid_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Primary Solid'
      },
    },
    {
      id: "badge_primary_outline_md_icon",
      tag: "badge_primary_outline_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'primary',
        content: 'Primary Outline'
      },
    },
    {
      id: "badge_primary_soft_md_icon",
      tag: "badge_primary_soft_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Primary Soft'
      },
    },


    // Secondary color

    {
      id: "badge_secondary_solid_md_icon",
      tag: "badge_secondary_solid_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'secondary',
        content: 'Secondary Solid'
      },
    },
    {
      id: "badge_secondary_outline_md_icon",
      tag: "badge_secondary_outline_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'secondary',
        content: 'Secondary Outline'
      },
    },
    {
      id: "badge_secondary_soft_md_icon",
      tag: "badge_secondary_soft_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'secondary',
        content: 'Secondary Soft'
      },
    },

    // Success color

    {
      id: "badge_success_solid_md_icon",
      tag: "badge_success_solid_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'success',
        content: 'Success Solid'
      },
    },
    {
      id: "badge_success_outline_md_icon",
      tag: "badge_success_outline_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'success',
        content: 'Success Outline'
      },
    },
    {
      id: "badge_success_soft_md_icon",
      tag: "badge_success_soft_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'success',
        content: 'Success Soft'
      },
    },


    // Error color

    {
      id: "badge_error_solid_md_icon",
      tag: "badge_error_solid_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'destructive',
        content: 'Error Solid'
      },
    },
    {
      id: "badge_error_outline_md_icon",
      tag: "badge_error_outline_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'destructive',
        content: 'Error Outline'
      },
    },
    {
      id: "badge_error_soft_md_icon",
      tag: "badge_error_soft_md_icon",
      componentName: "badge",
      properties: {
        size: "md",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'destructive',
        content: 'Error Soft'
      },
    },

    /* LARGE */

    // Default color

    {
      id: "badge_default_solid_lg_icon",
      tag: "badge_default_solid_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Default Solid'
      },
    },
    {
      id: "badge_default_outline_lg_icon",
      tag: "badge_default_outline_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'primary',
        content: 'Default Outline'
      },
    },
    {
      id: "badge_default_soft_lg_icon",
      tag: "badge_default_soft_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Default Soft'
      },
    },

    // Primary color

    {
      id: "badge_primary_solid_lg_icon",
      tag: "badge_primary_solid_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Primary Solid'
      },
    },
    {
      id: "badge_primary_outline_lg_icon",
      tag: "badge_primary_outline_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'primary',
        content: 'Primary Outline'
      },
    },
    {
      id: "badge_primary_soft_lg_icon",
      tag: "badge_primary_soft_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'primary',
        content: 'Primary Soft'
      },
    },


    // Secondary color

    {
      id: "badge_secondary_solid_lg_icon",
      tag: "badge_secondary_solid_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'secondary',
        content: 'Secondary Solid'
      },
    },
    {
      id: "badge_secondary_outline_lg_icon",
      tag: "badge_secondary_outline_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'secondary',
        content: 'Secondary Outline'
      },
    },
    {
      id: "badge_secondary_soft_lg_icon",
      tag: "badge_secondary_soft_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'secondary',
        content: 'Secondary Soft'
      },
    },

    // Success color

    {
      id: "badge_success_solid_lg_icon",
      tag: "badge_success_solid_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'success',
        content: 'Success Solid'
      },
    },
    {
      id: "badge_success_outline_lg_icon",
      tag: "badge_success_outline_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'success',
        content: 'Success Outline'
      },
    },
    {
      id: "badge_success_soft_lg_icon",
      tag: "badge_success_soft_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'success',
        content: 'Success Soft'
      },
    },


    // Error color

    {
      id: "badge_error_solid_lg_icon",
      tag: "badge_error_solid_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'solid',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'destructive',
        content: 'Error Solid'
      },
    },
    {
      id: "badge_error_outline_lg_icon",
      tag: "badge_error_outline_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'outline',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'end'
        },
        color: 'destructive',
        content: 'Error Outline'
      },
    },
    {
      id: "badge_error_soft_lg_icon",
      tag: "badge_error_soft_lg_icon",
      componentName: "badge",
      properties: {
        size: "lg",
        variant: 'soft',
        iconProperties: {
          showIcon: true,
          iconName: 'Info',
          iconPlacement: 'start'
        },
        color: 'destructive',
        content: 'Error Soft'
      },
    },

  ]
};

const pageConfig: PageConfig = {
  id: 'v91Qsm1rb210',
  types: [],
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
