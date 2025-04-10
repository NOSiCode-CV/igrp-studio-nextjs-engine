import path from 'path';
import fs from 'fs-extra';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import { RenderContext, WorkspaceConfig, WorkspaceProject, WorkspaceProjectsConfig } from '../../interfaces/types';
import {
  TEMPLATES,
  SRC_CONFIG_FILES,
  DST_CONFIG_FILES, ENVIRONMENT_FILES,
} from '../../utils/constants';
import { workspaceConfigValidate } from '../../schema/baseWorkspace';
import { getPaths } from '../../index';
import { saveBaseWorkspaceFileConfig } from './saveBaseWorkspaceConfig';

export type BASE_CONFIG_FILES = { src: string; dest: string }[];
export type BASE_API_FILES = { output: string; template: string; name: string }[];

/**
 * 
 * @param context 
 */
export const saveWorkspaceFileConfig = async (context: RenderContext<WorkspaceConfig, WorkspaceConfig>) => {
  const baseWorkspaceFiles = generateBaseWorkspaceFiles(context);
  const baseConfigFiles = generateConfigFiles(context);

  await saveBaseWorkspaceFiles(baseWorkspaceFiles, baseConfigFiles, context);
};

const generateBaseWorkspaceFiles = (context: RenderContext<WorkspaceConfig, WorkspaceConfig>): BASE_API_FILES => {

  const isBaseConfigValid = workspaceConfigValidate(context.resourceConfig);

  if (!isBaseConfigValid && workspaceConfigValidate.errors) throw workspaceConfigValidate.errors;

  return [
    { output: context.basePath, template: TEMPLATES.WORKSPACE_COMPOSE, name: SRC_CONFIG_FILES.IGRP_COMPOSE },
    { output: context.basePath, template: TEMPLATES.AM_IGRP_ENV, name: ENVIRONMENT_FILES.AM_IGRP_ENV },
    { output: context.basePath, template: TEMPLATES.UM_IGRP_ENV, name: ENVIRONMENT_FILES.UM_IGRP_ENV },
    { output: context.basePath, template: TEMPLATES.UI_IGRP_ENV, name: ENVIRONMENT_FILES.UI_IGRP_ENV },
    { output: context.basePath, template: TEMPLATES.IAM_IGRP_ENV, name: ENVIRONMENT_FILES.IAM_IGRP_ENV },
    { output: context.basePath, template: TEMPLATES.FILE_IGRP_ENV, name: ENVIRONMENT_FILES.FILE_IGRP_ENV },
    { output: context.basePath, template: TEMPLATES.IGRP_ENV, name: ENVIRONMENT_FILES.IGRP_ENV },
  ];

};

/**
 * 
 * @param context 
 * @returns 
 */
const generateConfigFiles = (context: RenderContext<WorkspaceConfig, WorkspaceConfig>): BASE_CONFIG_FILES => {
  return [
    {src: path.join(getPaths().configs, SRC_CONFIG_FILES.WORKSPACE_GITIGNORE), dest: path.join(context.basePath, DST_CONFIG_FILES.GITIGNORE)},
  ]
}

const saveBaseWorkspaceFiles = async (baseFiles: BASE_API_FILES, baseConfigFiles: BASE_CONFIG_FILES, baseContext: RenderContext<WorkspaceConfig, WorkspaceConfig>) => {

  const baseConfig =  {
    id: baseContext.resourceConfig.id,
    workspace: baseContext.resourceConfig.slug,
    projects: baseContext.resourceConfig.projects?.map(
      (proj, index): WorkspaceProject => {
        const isSpringBoot = proj.type === 'stringboot';
        const basePort = isSpringBoot ? 8083 : 3001;
        return {
          config: proj,
          basePath: `${proj.name ?? proj.name}`,
          environments: [],
          ports: {
            internal: basePort + index,
            external: basePort + index, // ensure uniqueness by index
          },
          dependsOn: [],
          dataSource: isSpringBoot? {
            dbPassword: "password",
            dbName: `${proj.name}_db`,
            ports: {
              internal: 5434 + index,
              external: 5434 + index,
            },
            volumes: {
              name: `${proj.name}_data`,
              path: '/var/lib/postgresql/data2',
              driver: 'local'
            }
          } : undefined
        };
      }
    ) ?? [],
    services: [],
    platform: {
      dataSource: {
        dbPassword: '1234',
        dbName: 'igrp_platform_db',
        ports: {
          internal: 5432,
          external: 5432
        },
        volumes: {
          name: 'igrp_access_management_data',
          path: '/var/lib/postgresql/data2',
          driver: 'local'
        }
      },
      appManager: {
        containerName: 'igrp_am',
        ports: {
          internal: 8082,
          external: 8082
        },
      },
      userManager: {
        containerName: 'igrp_um',
        ports: {
          internal: 8081,
          external: 8081
        },
      },
      ui: {
        containerName: 'igrp_ui',
        ports: {
          internal: 3000,
          external: 3000
        },
      },
      auth: {
        containerName: 'igrp_keycloak',
        ports: {
          internal: 8080,
          external: 8080
        },
        dataSource: {
          imageVersion: '16-alpine',
          dbUser: 'keycloak',
          dbPassword: 'password',
          dbName: 'igrp_keycloak_db',
          dbHostName: 'keycloak_db',
          ports: {
            internal: 5433,
            external: 5433
          },
          volumes: {
            name: 'igrp_keycloak_db_data',
            path: '/var/lib/postgresql/data2',
            driver: 'local'
          }
        },
        adminUser: 'admin',
        adminPassword: 'password',
        hostname: 'keycloak_db',
        volumes: {
          name: 'igrp_keycloak_data',
          path: '/opt/keycloak/data/import',
          driver: 'local'
        }
      },
      file: {
        containerName: 'igrp_minio',
        ports: [
          {
            internal: 9000,
            external: 9000
          },
          {
            internal: 9001,
            external: 9001
          },
        ],
        enableSecurity: false,
        adminUser: 'admin',
        adminPassword: 'admin12345678',
        volumes: {
          name: 'igrp_minio_db_data',
          path: '/minio_data',
          driver: 'local'
        }
      },
      mail: {
        containerName: 'mailhog',
        sender: '',
        host: '',
        port: 587,
        username: '',
        password: ''
      }
    },
  }

  const context: RenderContext<WorkspaceProjectsConfig, WorkspaceProjectsConfig> = {
    resourceConfig: baseConfig,
    basePath: baseContext.basePath,
  };

  await Promise.all(
    baseFiles.map(async (file) => {
      const template = await renderTemplate(file.template, context);
      const outputPath = path.join(file.output, file.name);
      await saveToFile(template, outputPath);
    }),
  );

  await Promise.all(
    baseConfigFiles.map(async file => {
      await fs.copyFile(file.src, file.dest);
    })
  )

  await saveBaseWorkspaceFileConfig(baseConfig, baseContext.basePath);

};