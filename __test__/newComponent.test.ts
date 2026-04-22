import { initComponents, newComponent, setEngineConfiguration } from '../src';
import { ComponentConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const componentConfig2: ComponentConfig = {
  type: 'component',
  scope: 'page',
  pagePath: 'imoveis',
  pageName: 'imoveis',
  description: 'Entrega de Chaves Modal',
  name: 'EntregaChavesModal',
  id: 'entrega_chaves_modal',
  args: [
    {
      id: '1',
      name: 'manifestacao',
      type: 'any',
      isList: false,
      isOptional: true,
      isInterface: false,
      isFunction: false,
      isState: false,
    },
    {
      id: '2',
      name: 'isOpen',
      type: 'boolean',
      isList: false,
      isOptional: false,
      isInterface: false,
      isFunction: false,
      isState: false,
      functionParameters: [],
    },
    {
      id: '3',
      name: 'setIsOpen',
      type: 'void',
      isList: false,
      isOptional: false,
      isInterface: false,
      isFunction: true,
      isState: false,
      functionParameters: [
        {
          id: '1764780963311',
          name: 'isOpen',
          type: 'boolean',
          isOptional: false,
          isList: false,
          isInterface: false,
          isFunction: false,
          isState: false,
        },
      ],
    },
    {
      id: '4',
      name: 'uuid',
      type: 'string',
      isList: false,
      isOptional: true,
      isInterface: false,
      isFunction: false,
      isState: false,
      functionParameters: [],
    },
    {
      id: '5',
      name: 'isEdit',
      type: 'boolean',
      isList: false,
      isOptional: true,
      isInterface: false,
      isFunction: false,
      isState: false,
      functionParameters: [],
    },
  ],
  forceDynamic: true,
  types: [],
  states: [
    {
      id: 'state_initEntregaData',
      name: 'initEntregaData',
      type: 'any',
      imports: [],
      defaultValue: 'undefined',
      isOptional: true,
    },
  ],
  functions: [],
  components: {
    id: 'component_root',
    componentName: 'component',
    
    properties: { commonProperties: { generateReference: false } },
    children: [
      {
        id: 'modaldialog_echaves',
        tag: 'modalDialogEntrega',
        componentName: 'modalDialog',
        
        type: 'group',
        children: [
          {
            id: 'modaldialogcontent_echaves',
            tag: 'modalDialogContentEntrega',
            componentName: 'modalDialogContent',
            
            children: [
              {
                id: 'modaldialogheader_echaves',
                tag: 'modalDialogHeaderEntrega',
                componentName: 'modalDialogHeader',
                
                children: [
                  {
                    id: 'modaldialogtitle_echaves',
                    tag: 'modalDialogTitleEntrega',
                    componentName: 'modalDialogTitle',
                    
                    children: [],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: {
                      content: 'Entrega de Chaves',
                      commonProperties: { generateReference: false },
                    },
                    childProperties: { className: '' },
                  },
                  {
                    id: 'modaldialogdescription_echaves',
                    tag: 'modalDialogDescriptionEntrega',
                    componentName: 'modalDialogDescription',
                    
                    children: [],
                    interactions: {},
                    allowTypes: false,
                    data: {},
                    properties: { content: '', commonProperties: { generateReference: false } },
                    childProperties: { className: '' },
                  },
                ],
                interactions: {},
                allowTypes: false,
                data: {},
                properties: { commonProperties: {} },
              },
              {
                id: 'modaldialogfooter_echaves',
                tag: 'modalDialogFooterEntrega',
                componentName: 'modalDialogFooter',
                
                children: [],
                interactions: {},
                allowTypes: false,
                data: {},
                properties: { commonProperties: {} },
              },
              {
                id: 'fragment_echaves',
                tag: 'fragmentEntrega',
                componentName: 'fragment',
                
                children: [
                  {
                    id: 'entregaChavesForm_01',
                    tag: 'EntregaChavesForm1',
                    componentName: 'EntregaChavesForm',
                    
                    type: 'group',
                    children: [],
                    interactions: {},
                    allowTypes: false,
                    data: {
                      manifestacao: { value: { id: '', code: 'manifestacao' } },
                      initialData: {
                        state: {
                          id: '',
                          name: 'initEntregaData',
                          type: '',
                          imports: [],
                          generate: false,
                        },
                      },
                      isEdit: { value: { id: '', code: 'isEdit' } },
                      uuid: { value: { id: '', code: 'uuid' } },
                    },
                    properties: { customProperties: {} },
                    childProperties: {},
                  },
                ],
                interactions: {},
                allowTypes: false,
                data: {},
                properties: {},
              },
            ],
            interactions: {},
            allowTypes: false,
            data: {},
            properties: { size: 'lg', commonProperties: { generateReference: false } },
            childProperties: { className: '' },
          },
          {
            id: 'modaldialogtrigger_echaves',
            tag: 'modalDialogTriggerEntrega',
            componentName: 'modalDialogTrigger',
            
            children: [],
            interactions: {
              onClick: {
                type: 'function',
                function: { fnCustomSet: '() => {}', type: 'function' },
                action: {},
              },
            },
            allowTypes: false,
            data: {},
            properties: { commonProperties: { generateReference: false } },
            childProperties: {},
          },
        ],
        interactions: {
          onOpenChange: {
            type: 'function',
            function: { fnCustomCode: { imports: [] }, fnCustomSet: 'setIsOpen' },
          },
        },
        allowTypes: false,
        data: { open: { value: { id: '', code: 'isOpen' } } },
        properties: { commonProperties: { generateReference: false } },
        childProperties: {},
      },
    ],
    interactions: {},
    childProperties: {},
  },
  imports: [],
};
beforeAll(async () => {
  await initComponents();
  setEngineConfiguration({ environment: 'development' });
});

describe('Component module', () => {
  it('should save the component configuration file', async () => {
    await newComponent(componentConfig2, OUTPUT_DIR);
  });
});
