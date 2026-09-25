import { initComponents, newProcess, setEngineConfiguration } from '../src';
import { ProcessConfig } from '../src/interfaces/types';
import fs from 'fs-extra';
import os from 'os';
import path from 'path';

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
      name: 'pedido',
      key: 'Pedido.v1',
    },
  ],
};

beforeAll(async () => {
  await initComponents();
  setEngineConfiguration({ environment: 'development' });
});

describe('Process module', () => {
  let outputDir: string;

  beforeEach(async () => {
    outputDir = await fs.mkdtemp(path.join(os.tmpdir(), 'nextjs-engine-process-'));
  });

  afterEach(async () => {
    await fs.remove(outputDir);
  });

  it('should save the process configuration file', async () => {
    await newProcess(processConfig, outputDir);

    const configPath = path.join(
      outputDir,
      '.igrpstudio',
      'process',
      processConfig.name,
      `${processConfig.name}.json`,
    );
    expect(await fs.readJson(configPath)).toEqual(processConfig);
  });
});
