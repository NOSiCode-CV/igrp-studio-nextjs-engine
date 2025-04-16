import path from 'path';
import fs from 'fs-extra';
import { saveToFile } from '../common/saveToFile';
import { renderTemplate } from '../common/renderTemplate';
import {
  RenderContext, RestartTypes,
  WorkspaceConfig,
  WorkspaceProject,
  WorkspaceProjectsConfig,
} from '../../interfaces/types';
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
        const isSpringBoot = proj.type === 'springboot';
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
    services: [
      {
        id: "igrp_access_management_db",
        name: "postgres",
        properties: {
          image: "postgres:16-alpine",
          container_name: `${baseContext.resourceConfig.slug}-am-db`,
          restart: "always" as RestartTypes,
          hostname: "${IGRP_ACCESS_MANAGEMENT_DB_HOSTNAME}",
          shm_size: "128mb",
          environments: [
            { key: "POSTGRES_DB", value: "${IGRP_ACCESS_MANAGEMENT_DB_NAME}" },
            { key: "POSTGRES_USER", value: "${IGRP_ACCESS_MANAGEMENT_DB_USER}" },
            { key: "POSTGRES_PASSWORD", value: "${IGRP_ACCESS_MANAGEMENT_DB_PASSWORD}" },
          ],
          volumes: [
            {
              name: "igrp_access_management_data",
              path: "/var/lib/postgresql/data2",
              driver: "local"
            }
          ],
          ports: [
            {
              internal: 5432,
              external: 5432
            }
          ],
          networks: [
            { network: `${baseContext.resourceConfig.slug}-network` }
          ],
          labels: [
            { key: 'type', value: 'database'}
          ]
        },
      },
      {
        id: "igrp_iam_db",
        name: "postgres",
        properties: {
          image: "postgres:16-alpine",
          container_name: `${baseContext.resourceConfig.slug}-iam-db`,
          restart: "always" as RestartTypes,
          hostname: "${IGRP_IAM_DB_HOSTNAME}",
          shm_size: "128mb",
          environments: [
            { key: "POSTGRES_DB", value: "${IGRP_IAM_DB_NAME}" },
            { key: "POSTGRES_USER", value: "${IGRP_IAM_DB_USER}" },
            { key: "POSTGRES_PASSWORD", value: "${IGRP_IAM_DB_PASSWORD}" },
          ],
          volumes: [
            {
              name: "igrp_iam_data",
              path: "/var/lib/postgresql/data2",
              driver: "local"
            }
          ],
          ports: [
            {
              internal: 5433,
              external: 5433
            }
          ],
          networks: [
            { network: `${baseContext.resourceConfig.slug}-network` }
          ],
          labels: [
            { key: 'type', value: 'database'}
          ]
        },
      },
      {
        id: "igrp_keycloak",
        name: "keycloak",
        properties: {
          image: "keycloak:25.0.4",
          container_name: `${baseContext.resourceConfig.slug}-keycloak`,
          dependsOn: [
            { service: `${baseContext.resourceConfig.slug}-iam-db` }
          ],
          hostname: "${IGRP_IAM_HOSTNAME}",
          restart: "always" as RestartTypes,
          env_file: [
            { file: ".igrp.env" },
            { file: ".iam.igrp.env" },
          ],
          volumes: [
            {
              name: "./data/",
              path: "/opt/keycloak/data/import",
              driver: "none"
            }
          ],
          extra_hosts: [
            { hostname: "${IGRP_IAM_HOSTNAME}", ip: "host-gateway" }
          ],
          command: [
            { instruction: 'start' },
            { instruction: '--import-realm' },
            { instruction: '--features=admin-fine-grained-authz' },
          ],
          ports: [
            {
              internal: 8080,
              external: 8080
            }
          ],
          networks: [
            { network: `${baseContext.resourceConfig.slug}-network` }
          ],
          healthcheck: {
            test: [
              {
                instruction: "CMD-SHELL"
              },
              {
                instruction: "exec 3<>/dev/tcp/localhost/8080;"
              },
              { instruction: "echo -e \"GET /health/ready HTTP/1.1" },
              { instruction: "host: localhost:8080\\n" },
              { instruction: ">&3;" },
              { instruction: "timeout --preserve-status 1 cat <&3 | grep -m 1 status | grep -m 1 UP;" },
              { instruction: "ERROR=$$?;" },
              { instruction: "exec 3<&-;" },
              { instruction: "exec 3>&-;" },
              { instruction: "exit $$ERROR" },
            ],
            interval: "10s",
            timeout: "5s",
            retries: 5
          },
          labels: [
            { key: 'type', value: 'auth'}
          ],
        },
      },
      {
        id: "igrp_minio",
        name: "minio",
        properties: {
          image: "minio/minio:latest",
          container_name: "igrp-minio",
          hostname: "igrp-minio",
          restart: "no" as RestartTypes,
          env_file: [
            { file: ".igrp.env" },
            { file: ".file.igrp.env" },
          ],
          volumes: [
            {
              name: 'igrp_minio_db_data',
              path: '/minio_data',
              driver: 'local'
            }
          ],
          command: [
            { instruction: 'server' },
            { instruction: '/data' },
            { instruction: '--console-address :9001' },
          ],
          entrypoint: [
            { instruction: "/bin/sh -c",},
            { instruction: "'" },
            { instruction: "isAlive() { curl -sf http://127.0.0.1:9000/minio/health/live; }" },
            { instruction: "minio $0 \"$@\" --quiet & echo $! > /tmp/minio.pid" },
            { instruction: "while ! isAlive; do sleep 0.1; done" },
            { instruction: "mc alias set minio http://127.0.0.1:9000 ${IGRP_FILE_MANAGEMENT_USER} ${IGRP_FILE_MANAGEMENT_PASSWORD}" },
            { instruction: "mc mb minio/\${IGRP_FILE_MANAGEMENT_STORAGE_NAME}|| true" },
            { instruction: "mc anonymous set public minio/${IGRP_FILE_MANAGEMENT_STORAGE_NAME}" },
            { instruction: "kill -s INT $(cat /tmp/minio.pid) && rm /tmp/minio.pid" },
            { instruction: "while isAlive; do sleep 0.1; done" },
            { instruction: "exec minio $0 \"$@\"" },
            { instruction: "'" },
          ],
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
          networks: [
            { network: `${baseContext.resourceConfig.slug}-network` }
          ],
          labels: [
            { key: 'type', value: 'file'}
          ]
        }
      },
      {
        id: "igrp_um",
        name: "igrpUserManagement",
        properties: {
          image: "registry.nosi.cv/formacao-igrp/igrp-user-management-api:demo-local",
          container_name: `${baseContext.resourceConfig.slug}-user-management`,
          dependsOn: [
            { service: `${baseContext.resourceConfig.slug}-keycloak` }
          ],
          env_file: [
            { file: '.um.igrp.env' }
          ],
          ports: [
            {
              internal: 8081,
              external: 8081
            }
          ],
          networks: [
            { network: `${baseContext.resourceConfig.slug}-network` }
          ],
          labels: [
            { key: 'type', value: 'web'}
          ]
        },
      },
      {
        id: "igrp_am",
        name: "igrpAppManagement",
        properties: {
          image: "registry.nosi.cv/formacao-igrp/app-manager-api:demo-local",
          container_name: `${baseContext.resourceConfig.slug}-app-manager`,
          dependsOn: [
            { service: `${baseContext.resourceConfig.slug}-keycloak` }
          ],
          env_file: [
            { file: '.am.igrp.env' }
          ],
          ports: [
            {
              internal: 8082,
              external: 8082
            }
          ],
          networks: [
            { network: `${baseContext.resourceConfig.slug}-network` }
          ],
          labels: [
            { key: 'type', value: 'web'}
          ]
        },
      },
      {
        id: "igrp_ui",
        name: "igrpUi",
        properties: {
          image: "registry.nosi.cv/formacao-igrp/igrp-ui-dev:demo-local",
          container_name: `${baseContext.resourceConfig.slug}-ui`,
          dependsOn: [
            { service: `${baseContext.resourceConfig.slug}-user-management` },
            { service: `${baseContext.resourceConfig.slug}-app-manager` }
          ],
          env_file: [
            { file: '.igrp.env' },
            { file: '.ui.igrp.env' },
          ],
          ports: [
            {
              internal: 3000,
              external: 3000
            }
          ],
          networks: [
            { network: `${baseContext.resourceConfig.slug}-network` }
          ],
          labels: [
            { key: 'type', value: 'web'}
          ]
        },
      },
    ],
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