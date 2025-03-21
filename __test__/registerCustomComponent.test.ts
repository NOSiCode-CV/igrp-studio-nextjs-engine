import { initComponents, registerComponents } from '../src';
import { ComponentRegistrationConfig } from '../src/interfaces/types';
import { registryAsObject } from '../src/components';

describe('Register Custom Components', () => {

  const config: ComponentRegistrationConfig = {
    components: [
      {
        name: "MyComponent",
        imports: [`import { MyComponent } from '@components/mycomponent/myComponent'`],
        group: "Custom",
        label: "My Component",
        variants: {},
        childProperties: {},
        properties: {
          title: {type: 'string', required: true, default: 'New Component'},
        },
        propertiesMapping: {
          title: { property: 'title' }
        },
        states: [],
        childrenTypes: [],
        acceptedChildren: [],
        defaultValue: false,
        renderer: 'hbs'
      },

      {
        name: "MyForm",
        imports: [`import { MyForm } from '@components/myform/myForm'`],
        group: "Form",
        label: "My Form",
        variants: {},
        childProperties: {},
        properties: {
          title: {type: 'string', required: true, default: 'New Component'},
        },
        propertiesMapping: {
          title: { className: 'title' }
        },
        states: [],
        childrenTypes: [],
        acceptedChildren: [],
        defaultValue: false,
        renderer: 'default'
      }
    ]
  }

  test('Get component', async () => {
     registerComponents(config)
     console.log(registryAsObject());
  });

});