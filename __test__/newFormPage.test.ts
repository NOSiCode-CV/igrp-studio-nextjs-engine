import { addCodeSnippet, initCodeSnippets, initComponents, newPage } from '../src';
import { CodeSnippetConfig, Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

function loadContext(codeSnippet: string): PageConfig {

  const formId = 'form_1'

  const formLayout: Layout = {
    id: 'default_section',
    tag: 'default_section',
    componentName: 'section',
    properties: {
      spaceY: 6,
    },
    children: [
      {
        id: formId,
        tag: 'form_1',
        dataType: 'User',
        componentName: 'form',
        properties: {
          formClassName: 'flex flex-col',
          gridClassName: 'flex flex-col',
          formRef: 'formform_1Ref'
        },
        interactions: {
          onSubmit: {
            fnCustomSet: '(values) => alert(`Submitted externally: ${JSON.stringify(values)}`)',
          }
        },
        data: {
          defaultValues: {
            state: {
              id: 'state_Form_1',
              name: 'contentFormform_1',
              type: 'z.infer<User>',
              defaultValue: 'initUser',
            },
          }
        },
        childProperties: {
        },
        children: [
          {
            id: 'headline',
            tag: 'headline',
            componentName: 'headline',
            properties: {
              variant: 'h3',
              title: 'Form',
              description: 'A demo form component',
            }
          },
          {
            id: 'grid_inputs',
            tag: 'grid_inputs',
            componentName: 'grid',
            properties: {
              gap: 4,
              variant: 'cols4'
            },
            children: [
              /*{
                id: 'input_hidden',
                tag: 'id',
                componentName: 'inputHidden',
                properties: {
                  name: 'id',
                },
              },*/
              {
                id: 'input_text',
                tag: 'name',
                componentName: 'inputText',
                properties: {
                  label: "Name",
                  placeholder: 'Enter your name',
                  required: true,
                },
              },
              {
                id: 'input_number',
                tag: 'age',
                componentName: 'inputNumber',
                properties: {
                  name: 'input_number',
                  label: 'Age',
                  description: 'Age from 1-99',
                  placeholder: 'Enter your age...',
                  min: 1,
                  max: 99,
                  step: 1,
                  required: true,
                },
              },
              /*{
                id: 'checkbox_1',
                tag: 'isActive',
                componentName: 'checkbox',
                properties: {
                  label: 'User Active?',
                  className: 'h-5 w-5 rounded-md border-2 transition-colors',
                  required: true,
                },
              },*/
            ]
          },
        ],
      },
      {
        id: 'button_submit',
        tag: 'button_submit',
        componentName: "button",
        properties: {
          type: "submit",
          label: 'Submit'
        },
        interactions: {
          onClick: {
            fnCustomSet: `() => ${codeSnippet}`,
            type: 'function'
          }
        }
      }
    ]
  };

  return {
    id: 'f10Hmv1ps7z2',
    types: [
      {
        componentId: formId,
        name: 'User',
        path: '',
        fields: [
          /*{
            "name": "id",
            "type": "string",
            "required": true
          },*/
          {
            componentId: "input_text",
            "name": "name",
            "type": "string",
            defaultValue: "",
            "required": true
          },
          {
            componentId: "input_number",
            "name": "age",
            "type": "number",
            defaultValue: "18",
            "required": true
          },
          /*{
            "name": "isActive",
            "type": "boolean",
            "required": true
          }*/
        ]
      }
    ],
    functions: [
      {
        id: 'function1',
        name: 'submitForm1',
        code: 'alert(JSON.stringify(data))',
        arguments: [
          {
            id: "arg1",
            name: 'data',
            type: 'any',
            isNullable: false
          }
        ],
        returnValue: {
          type: 'void',
          isNullable: false
        }
      }
    ],
    type: 'page',
    pageName: 'forms',
    forceDynamic: true,
    path: 'forms',
    components: formLayout,
  };

}

beforeAll(async () => {
  await initComponents();
  await initCodeSnippets();
});

describe('Form module',() =>{
  it('should save the form page configuration file', async()=> {
    const formRefCodeSnippet: CodeSnippetConfig = {
      id: 'code_1',
      name: 'formReferenceUsage',
      properties: {
        formTag: 'form_1',
        submitFunction: 'submitForm1'
      }
    }
    const codeSnippet = addCodeSnippet(formRefCodeSnippet);
    await newPage(loadContext(codeSnippet), OUTPUT_DIR);
  })

})