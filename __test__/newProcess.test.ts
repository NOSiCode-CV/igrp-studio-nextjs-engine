import { initComponents, newProcess } from '../src';
import { ProcessConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { badgeLayout } from './newBadgePage.test';
import { inputLayout } from './newInputPage.test';

export const OUTPUT_DIR = OUTPUT_TEST;

const processConfig: ProcessConfig = {
  id: 'process_1',
  version: '0.1.0-beta',
  type: 'process',
  name: 'inscricao',
  processKey: 'inscricao_contribuinte',
  processVersion: 'v2',
  types: [],
  components: {
    id: 'process_zyin3q',
    componentName: 'process',
    label: 'process',
    properties: {
      commonProperties: {
        generateReference: false,
      },
    },
    children: [
      {
        id: 'processstep_yneyw4',
        componentName: 'processStep',
        properties: {
          commonProperties: {
            generateReference: false,
          },
        },
        children: [

        ],
        tag: 'pedido',
        data: {},
        interactions: {},
        childProperties: {},
      },
      {
        id: 'processstep_if63mh',
        componentName: 'processStep',
        properties: {
          projectArtifactId: 'cf7b7c4e-1b82-4774-801c-7615593a0d25',
          taskKey: 'Activity_1fm3mcn',
          name: 'Qualificacao',
          artifactVariables: [],
        },
        children: [
          badgeLayout
        ],
        tag: 'qualificacao',
        data: {},
        interactions: {},
      },
    ],
    tag: 'process2',
    data: {},
    interactions: {
      onLoad: {
        type: 'function',
        function: {
          type: 'function',
        },
        action: {},
      },
    },
    childProperties: {},
  },
};

beforeAll(async () => {
  await initComponents();
});

describe('Process module', () => {
  it('should save the process configuration file', async () => {
    await newProcess(processConfig, OUTPUT_DIR);
  });
});
