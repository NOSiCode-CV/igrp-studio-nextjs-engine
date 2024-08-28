import path from 'path';
import fs from 'fs-extra';
import { Component } from '@/interfaces/types';
import { DIRECTORIES } from '../../utils/constants';

export const saveComponent = async (component: Component, basePath: string) => {
  for (const row of component.Row) {
    for (const col of row.Col) {
      await copyComponent(col.componentName, basePath);
      await copyService(col.type, basePath);
      if (col.fields) {
        for (const field of col.fields) {
          await copyField(field.type, basePath);
        }
      }
    }
  }
};

const copyComponent = async (component: string, basePath: string) => {
  await fs.copy(
    path.join(DIRECTORIES.COMPONENTS, component),
    path.join(basePath, DIRECTORIES.COMPONENTS, component)
  );
};

const copyField = async (field: string, basePath: string) => {
  await fs.copy(
    path.join(DIRECTORIES.FIELDS, field),
    path.join(basePath, DIRECTORIES.FIELDS, field)
  );
};

const copyService = async (field: string, basePath: string) => {
  const servicePath = path.join(DIRECTORIES.SERVICES, field);
  if (await fs.pathExists(servicePath)) {
    await fs.copy(servicePath, path.join(basePath, DIRECTORIES.SERVICES, field));
  }
};
