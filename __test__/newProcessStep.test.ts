import {
  initComponents,
  newProcess,
  newProcessStep,
  registerComponents,
  setEngineConfiguration,
} from '../src';
import { ProcessConfig, ProcessStepConfig } from '../src/interfaces/types';
import { badgeLayout } from './newBadgePage.test';
import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle,
} from '../src/components/default/properties';
import { INTERACTIONS_DEFAULTS } from '../src/utils/constants';
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
      {
        id: 'declaracaoform_dgilcb',
        tag: 'DeclaracaoForm1',
        componentName: 'DeclaracaoForm',
        children: [],
        interactions: {
          onAfterSubmit: {
            type: 'function',
            function: {
              fnCustomCode: {
                imports: [],
              },
              fnName: 'handleAfterSubmit',
            },
          },
          setIsSubmitting: {
            type: 'function',
            function: {
              fnCustomCode: {
                imports: [],
              },
              fnName: 'setIsSubmitting',
            },
          },
        },
        data: {
          shouldSubmit: {
            state: {
              id: '',
              name: 'shouldSubmit',
              type: '',
              imports: [],
              generate: false,
            },
          },
          isSubmitting: {
            state: {
              id: '',
              name: 'isSubmitting',
              imports: [],
              generate: false,
            },
          },
        },
        properties: {
          customProperties: {
            isEdit: false,
          },
        },
        childProperties: {},
      },
      {
        id: 'item_paragraph',
        tag: 'item_paragraph',
        componentName: 'paragraph',
        properties: {
          className: 'animate-pulse',
        },
        data: {
          content: {
            value: {
              code: 'generateSample()',
            },
          },
        },
      },
      badgeLayout,
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
  setEngineConfiguration({ environment: 'development' });
  registerComponents({
    components: [
      {
        name: 'DeclaracaoForm',
        imports: [
          `import Declaracaoform from '@/app/(igrp)/(generated)/declaracoes/components/declaracaoform'`,
        ],
        group: 'custom',
        label: 'DeclaracaoForm',
        customComponentTag: 'Declaracaoform',
        customClassName: '',
        states: [],
        renderer: 'custom',
        defaultValue: false,
        variants: {},
        properties: {},
        propertiesMapping: {},
        childrenTypes: [],
        acceptedChildren: [],
        allowTypes: false,
        metadata: {},
        interactions: {
          onAfterSubmit: {
            ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, 'On After Submit'),
            required: true,
          },
          setIsSubmitting: {
            ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, 'Is Submitting'),
            required: true,
          },
        },
        interactionsMapping: {},
        data: {
          shouldSubmit: {
            ...baseData(undefined, 'Should Submit'),
          },
          isSubmitting: {
            ...baseData(undefined, 'Is Submitting'),
          },
        },
        dataMapping: {},
        style: { ...baseStyle() },
        styleMapping: {},
        rules: { ...baseRules() },
        rulesMapping: {},
        defaultChildren: [],
      },
    ],
  });
});

describe('Process Step module', () => {
  let outputDir: string;

  beforeEach(async () => {
    outputDir = await fs.mkdtemp(path.join(os.tmpdir(), 'nextjs-engine-process-step-'));
    await newProcess(processConfig, outputDir);
  });

  afterEach(async () => {
    await fs.remove(outputDir);
  });

  it('should save the process step configuration file', async () => {
    await newProcessStep(processStepConfig, outputDir);

    const processPath = path.join(
      outputDir,
      '.igrpstudio',
      'process',
      processConfig.name,
      `${processConfig.name}.json`,
    );
    const savedProcess = await fs.readJson(processPath);
    expect(savedProcess.processVersion).toBe(processStepConfig.processVersion);
    expect(savedProcess.steps).toContainEqual({
      id: processStepConfig.id,
      name: processStepConfig.name,
      key: processStepConfig.key,
    });
  });
});
