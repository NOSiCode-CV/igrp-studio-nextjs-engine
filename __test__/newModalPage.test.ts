import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const modalLayout: Layout = {
  id: "grid_modals",
  componentName: "grid",
  properties: {
    variant: "cols3",
    className: "border rounded-lg center",
    padding: '10',
    gap: '4',
  },
  children: [
    {
      id: "modal_dialog_default",
      componentName: "modalDialog",
      properties: {
        title: "Icon Position Start",
        description: "This dialog has the icon positioned at the start.",
        type: "info",
        iconProperties: {
          iconPosition: "start",
        },
        triggerText: "Open Dialog",
        triggerVariant: "default"
      },
      children: [

      ]
    },
    {
      id: "modal_dialog_success",
      componentName: "modalDialog",
      properties: {
        title: "Icon Position End",
        description: "This dialog has successfully position the icon at the end.",
        type: "success",
        iconProperties: {
          iconPosition: "end",
        },
        triggerText: "Success",
        triggerVariant: "secondary"
      },
      children: [

      ]
    },
    {
      id: "modal_dialog_destructive",
      componentName: "modalDialog",
      properties: {
        title: "Delete Confirmation",
        description: "Are you sure you want to delete this item? This action cannot be undone.",
        type: "delete",
        requireConfirmation: true,
        confirmationText: "CONFIRM",
        triggerText: "Delete Item",
        triggerVariant: "destructive",
      },
      children: [

      ]
    },
    {
      id: "modal_dialog_warning",
      componentName: "modalDialog",
      properties: {
        title: "Careful",
        description: "Are you sure you want to do this? This action can cause issues in the system.",
        type: "warning",
        size: 'xl',
        requireConfirmation: true,
        footerDirection: "column",
        confirmationText: "JUST DO IT",
        triggerText: "Don't touch",
        triggerVariant: "ghost",
      },
      children: [

      ]
    },
    {
      id: "modal_dialog_full",
      componentName: "modalDialog",
      properties: {
        title: "Icon Position Start",
        description: "This dialog has the icon positioned at the start.",
        type: "modal",
        size: "full",
        iconProperties: {
          iconPosition: "modal",
        },
        triggerText: "Open Full",
        triggerVariant: "outline"
      },
      children: [

      ]
    },
    {
      id: "modal_dialog_small",
      componentName: "modalDialog",
      properties: {
        title: "Small Alert",
        description: "This dialog is small.",
        type: "alert",
        size: "sm",
        iconProperties: {
          iconPosition: "top",
        },
        triggerText: "Open Small",
        triggerVariant: "link"
      },
      children: [

      ]
    },
    {
      id: "modal_dialog_reversed",
      componentName: "modalDialog",
      properties: {
        title: "Reversed Info",
        description: "This dialog has a reversed button positions.",
        type: "info",
        size: "lg",
        reverseFooterButtons: true,
        iconProperties: {
          iconPosition: "top",
        },
        triggerText: "Open Reversed",
        triggerVariant: "primary"
      },
      children: [

      ]
    },
  ]
};

const pageConfig: PageConfig = {
  id: 'm12Djk0zp2q4',
  type: 'page',
  pageName: 'modals',
  path: 'modals',
  components: modalLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Modals module',() =>{
  it('should save the modal page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
