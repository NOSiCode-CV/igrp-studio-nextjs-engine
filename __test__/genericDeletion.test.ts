import { deleteElement } from '../src';
import type { ComponentConfig, DeleteConfig } from '../src/interfaces/types';
import fs from 'fs-extra';
import os from 'os';
import path from 'path';

describe('Generic component deletion', () => {
  let outputDir: string;

  beforeEach(async () => {
    outputDir = await fs.mkdtemp(path.join(os.tmpdir(), 'nextjs-engine-delete-'));
  });

  afterEach(async () => {
    await fs.remove(outputDir);
  });

  it('deletes the component source and configuration files', async () => {
    const component: ComponentConfig = {
      id: 'cardComponent1',
      type: 'component',
      name: 'card',
      scope: 'app',
      components: {},
    };
    const componentConfigPath = path.join(outputDir, '.igrpstudio', 'components', 'card.json');
    const componentSourcePath = path.join(outputDir, 'src', 'components', 'card.tsx');
    await fs.outputJson(componentConfigPath, component);
    await fs.outputFile(componentSourcePath, 'export default function Card() {}');

    const element: DeleteConfig = {
      id: component.id,
      name: component.name,
      type: 'component',
    };

    await deleteElement(element, outputDir);

    expect(await fs.pathExists(componentConfigPath)).toBe(false);
    expect(await fs.pathExists(componentSourcePath)).toBe(false);
  });
});
