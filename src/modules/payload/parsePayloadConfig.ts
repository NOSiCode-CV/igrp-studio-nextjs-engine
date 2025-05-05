import path from 'path';
import { PayloadConfig } from '../../interfaces/types';
import { parseTypeFile } from './parseTypes';
import { parseFunctionFile } from './parseFunctions';
import { parseActionFile } from './parseActions';

export async function parsePayloadConfig(config: any, basePath: string): Promise<PayloadConfig> {
  const srcRoot = path.join(basePath, 'src/app/(myapp)');

  const parseMultiple = async (entries: string[], parser: Function) => {
    return await Promise.all(
      entries.map(async (entry) => {
        const absolutePath = path.join(srcRoot, `${entry}.ts`);
        return parser(absolutePath);
      }),
    );
  };

  return {
    types: await parseMultiple(config.types || [], parseTypeFile),
    actions: await parseMultiple(config.actions || [], parseActionFile),
    functions: await parseMultiple(config.functions || [], parseFunctionFile),
  };
}
