import { initComponents, newProcess, setEngineConfiguration } from '../src';
import { ProcessConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const processConfig: ProcessConfig = {
  id: 'process_1',
  version: '0.1.0-beta',
  type: 'process',
  name: 'inscricao',
  processKey: 'inscricao',
  processVersion: 'v1',
  steps: [
    {
      id: 'process_step_1',
      name: 'pedido'
    }
  ]
};

beforeAll(async () => {
  await initComponents();
  setEngineConfiguration({ environment: 'development' })
});

describe('Process module', () => {
  it('should save the process configuration file', async () => {
    await newProcess(processConfig, OUTPUT_DIR);
  });
});