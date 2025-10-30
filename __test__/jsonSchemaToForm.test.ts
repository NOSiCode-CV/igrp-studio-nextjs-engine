// Example usage with a JSON schema
import {
  convertJsonSchemaToForm,
  initCodeSnippets,
  initComponents,
  newPage,
  setEngineConfiguration,
} from '../src/index';
import { PageConfig } from '../src/interfaces/types';
import { JsonSchema } from '../src/modules/converters/jsonSchemaToForm';
import { OUTPUT_TEST } from '../src/utils/testPath';

const OUTPUT_DIR = OUTPUT_TEST;

const exampleSchema: JsonSchema = {
  type: 'object',
  required: ['nome', 'email'],
  properties: {
    nome: {
      type: 'string',
      title: 'Nome Completo',
      minLength: 2,
      maxLength: 100,
    },
    email: {
      type: 'string',
      format: 'email',
      title: 'E-mail',
    },
    telefone: {
      type: 'number',
      format: 'tel',
      title: 'Telefone',
    },
    ativo: {
      type: 'boolean',
      title: 'Ativo',
    },
    tipo: {
      type: 'string',
      enum: ['PF', 'PJ'],
      title: 'Tipo de Pessoa',
    },
    dataNascimento: {
      type: 'string',
      format: 'date',
      title: 'Data de Nascimento',
    },
    endereco: {
      type: 'object',
      title: 'Endereço',
      properties: {
        rua: { type: 'string', title: 'Rua' },
        numero: { type: 'string', title: 'Número' },
        cidade: { type: 'string', title: 'Cidade' },
      },
    },
    dependentes: {
      type: 'array',
      title: 'Dependentes',
      items: {
        type: 'object',
        properties: {
          nome: { type: 'string', title: 'Nome do Dependente' },
          parentesco: {
            type: 'string',
            enum: ['Filho(a)', 'Cônjuge', 'Outro'],
            title: 'Parentesco',
          },
        },
      },
    },
  },
};

const igrpFormChildren = convertJsonSchemaToForm(exampleSchema);
console.log(JSON.stringify(igrpFormChildren, null, 2));

const pageConfig: PageConfig = {
  id: 'f10Hmv1ps7z2',
  types: [],
  functions: [],
  type: 'page',
  pageName: 'forms',
  forceDynamic: true,
  path: 'forms',
  components: {
    id: 'form_56r85w',
    tag: 'form1',
    componentName: 'form',
    label: 'Form',
    type: 'group',
    children: igrpFormChildren,
    interactions: {
      onSubmit: {
        type: 'function',
        function: {
          fnCustomSet: '(e) => {}',
          type: 'function',
        },
        action: {},
      },
    },
    allowTypes: true,
    data: {
      defaultValues: {
        state: {
          id: '',
          type: 'z.infer<{{type}}ZodType>',
          name: 'contentForm{{id}}',
          defaultValue: 'null',
          imports: [],
          generate: true,
        },
      },
    },
    properties: {
      validationMode: 'onBlur',
      commonProperties: {},
    },
  },
};

beforeAll(async () => {
  setEngineConfiguration({ environment: 'development' });
  await initComponents();
  await initCodeSnippets();
});

describe('Json Schema to Form module', () => {
  it('should save the form page configuration file', async () => {
    await newPage(pageConfig, OUTPUT_DIR);
  });
});
