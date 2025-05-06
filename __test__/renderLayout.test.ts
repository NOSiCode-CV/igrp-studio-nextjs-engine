import { renderLayout } from '../src/utils/renderLayout';
import { Layout } from '../src/interfaces/types';

const dashboardLayout: Layout = {
  id: "grid_dashboard",
  tag: "grid_dashboard",
  componentName: "grid",
  properties: {
    variant: "cols2",
    className: "gap-6 border rounded-lg",
    padding: "4"
  },
  children: [
    {
      id: "flex_sidebar",
      tag: "flex_sidebar",
      componentName: "flex",
      properties: {
        variant: "col",
        className: "border-r",
        width: "1/4",
        padding: "4"
      },
      children: [
        {
          id: "card_profile",
          tag: "card_profile",
          componentName: "card",
          properties: {
            variant: "bordered"
          }
        }
      ]
    },
    {
      id: "container_main",
      tag: "container_main",
      componentName: "container",
      properties: {
        variant: "default"
      },
      children: [
        {
          id: "section_content",
          tag: "section_content",
          componentName: "section",
          properties: {
            className: "bg-gray-100 rounded-lg",
            padding: "6"
          }
        }
      ]
    }
  ]
};

describe('Render Layout module', () => {
  it('should render a complex dashboard layout', () => {
    console.log(renderLayout(dashboardLayout));
  });
});
