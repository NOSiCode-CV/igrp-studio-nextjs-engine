import path from 'path';
import { AppExportsConfig } from '../../interfaces/types';
import { parseTypes } from './parseTypes';
import { parseFunctions } from './parseFunctions';
import { parseActions } from './parseActions';

export async function parseExportsConfig(config: any, basePath: string): Promise<AppExportsConfig> {
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
    types: (await parseMultiple(config.types || [], parseTypes)).filter((it: any) => it !== undefined && it !== null),
    actions: (await parseMultiple(config.actions || [], parseActions)).filter((it: any) => it !== undefined && it !== null),
    functions: (await parseMultiple(config.functions || [], parseFunctions)).filter((it: any) => it !== undefined && it !== null),
  };
}