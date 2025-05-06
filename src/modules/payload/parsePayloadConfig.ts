import path from 'path';
import { PayloadConfig } from '../../interfaces/types';
import { parseTypes } from './parseTypes';
import { parseFunctions } from './parseFunctions';
import { parseActions } from './parseActions';

export async function parsePayloadConfig(config: any, basePath: string): Promise<PayloadConfig> {
  const srcRoot = path.join(basePath, 'src/app/(myapp)');

  const parseCategory = async (category: any) => {
    if (!category) return undefined;

    const parseMultiple = async (entries: string[], parser: Function) => {
      return await Promise.all(
        entries.map(async (entry) => {
          const absolutePath = path.join(srcRoot, `${entry}.ts`);
          return parser(absolutePath);
        }),
      );
    };

    return {
      types: (await parseMultiple(category.types || [], parseTypes)).filter((it: any) => it !== undefined && it !== null),
      actions: (await parseMultiple(category.actions || [], parseActions)).filter((it: any) => it !== undefined && it !== null),
      functions: (await parseMultiple(category.functions || [], parseFunctions)).filter((it: any) => it !== undefined && it !== null),
    };
  };

  return {
    ...(config.form ? { form: await parseCategory(config.form) } : {}),
    ...(config.table ? { table: await parseCategory(config.table) } : {}),
    ...(config.chart ? { chart: await parseCategory(config.chart) } : {}),
    ...(config.select ? { select: await parseCategory(config.select) } : {}),
  };
}