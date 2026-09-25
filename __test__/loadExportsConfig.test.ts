import fs from 'fs-extra';
import os from 'os';
import path from 'path';
import { loadExportsConfig } from '../src/modules/payload/loadExportsConfig';

describe('Load Exports', () => {
  let outputDir: string;

  beforeAll(async () => {
    outputDir = await fs.mkdtemp(path.join(os.tmpdir(), 'nextjs-engine-exports-'));
  });

  afterAll(async () => {
    await fs.remove(outputDir);
  });

  test('extracts all configured export groups', async () => {
    const configPath = path.join(outputDir, 'igrp.config.ts');
    await fs.writeFile(
      configPath,
      `export default {
        types: ['types/user', 'types/role'],
        actions: ['actions/save'],
        functions: ['functions/format'],
        components: ['components/card'],
      };`,
    );

    expect(loadExportsConfig(configPath)).toEqual({
      types: ['types/user', 'types/role'],
      actions: ['actions/save'],
      functions: ['functions/format'],
      components: ['components/card'],
    });
  });
});
