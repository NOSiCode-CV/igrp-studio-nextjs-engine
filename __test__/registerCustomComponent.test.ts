import { getOneComponent, initComponents, registerComponents } from '../src';
import { ComponentRegistrationConfig } from '../src/interfaces/types';

describe('Register Custom Components', () => {

  const config: ComponentRegistrationConfig = {
    components: [
      {
        name: "MyComponent",
        imports: [`import { MyComponent } from '@components/myComponent'`],
        icon: "component",
        group: "Custom",
        label: "My Component",
        variants: {},
        parentProperties: {},
        properties: {
          title: {type: 'string', required: true, default: 'New Component'},
        },
        propertiesMapping: {
          title: { property: 'title' }
        },
        states: [],
        renderer: 'hbs'
      },

      {
        name: "MyForm",
        imports: [`import { MyForm } from '@components/myForm'`],
        icon: "form",
        group: "Form",
        label: "My Form",
        variants: {},
        parentProperties: {},
        properties: {
          title: {type: 'string', required: true, default: 'New Component'},
        },
        propertiesMapping: {
          title: { className: 'title' }
        },
        states: [],
        renderer: 'default'
      }
    ]
  }

  test('Get component', async () => {
     registerComponents(config)
     console.log(getOneComponent({ name: 'MyComponent' }));
  });

});