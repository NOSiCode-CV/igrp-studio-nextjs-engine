import path from 'path';
import { PayloadConfig } from '../../interfaces/types';
import { parseTypes } from './parseTypes';
import { parseFunctions } from './parseFunctions';
import { parseActions } from './parseActions';

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
    types: await parseMultiple(config.types || [], parseTypes),
    actions: await parseMultiple(config.actions || [], parseActions),
    functions: await parseMultiple(config.functions || [], parseFunctions),
  };
}
