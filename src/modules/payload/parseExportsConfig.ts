import path from 'path';
import { AppExportsConfig } from '../../interfaces/types';
import { parseTypes } from './parseTypes';
import { parseFunctions } from './parseFunctions';
import { parseActions } from './parseActions';
import { parseComponents } from './parseComponents';

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
    types: (await parseMultiple(config.types || [], parseTypes)).flat().filter(Boolean),
    actions: (await parseMultiple(config.actions || [], parseActions)).flat().filter(Boolean),
    functions: (await parseMultiple(config.functions || [], parseFunctions)).flat().filter(Boolean),
    components: (await parseMultiple(config.components || [], parseComponents)).flat().filter(Boolean)
  };
}