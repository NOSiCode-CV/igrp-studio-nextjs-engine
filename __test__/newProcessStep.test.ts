import { initComponents, newProcessStep, setEngineConfiguration } from '../src';
import { ProcessStepConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { badgeLayout } from './newBadgePage.test';

export const OUTPUT_DIR = OUTPUT_TEST;

const processStepConfig: ProcessStepConfig = {
  id: 'process_step_2',
  version: '0.1.0-beta',
  type: 'processStep',
  name: 'qualificacao',
  key: 'Qualificacao.v2',
  processKey: 'inscricao',
  processVersion: 'v5',
  types: [],
  components: {
    id: 'processstep_yneyw4',
    componentName: 'processStep',
    properties: {
      commonProperties: {
        generateReference: false,
      },
    },
    children: [
      badgeLayout
    ],
    tag: 'pedido',
    data: {},
    interactions: {},
    childProperties: {},
  },
  projectArtifactId: '',
  taskKey: '',
  artifactVariables: [],
};

beforeAll(async () => {
  await initComponents();
  setEngineConfiguration({ environment: 'development' })
});

describe('Process Step module', () => {
  it('should save the process step configuration file', async () => {
    await newProcessStep(processStepConfig, OUTPUT_DIR);
  });
});
