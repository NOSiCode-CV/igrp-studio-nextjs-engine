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
  DST_CONFIG_FILES, ENVIRONMENT_FILES, COMMON_FILES, DIRECTORIES,
} from '../../utils/constants';
import { workspaceConfigValidate } from '../../schema/baseWorkspace';
import { getPaths } from '../../index';
import { saveBaseWorkspaceFileConfig } from './saveBaseWorkspaceConfig';
import { IGRP_ACCESS_MANAGEMENT } from '../../docker_services/igrpAccessManagement/index';
import { MINIO } from '../../docker_services/minio/index';
import { KEYCLOAK } from '../../docker_services/keycloak/index';
import { POSTGRES } from '../../docker_services/postgres/index';
import { IGRP_APPLICATION_CENTER } from '../../docker_services/igrpApplicationCenter/index';
import { IGRP_API_GATEWAY } from '../../docker_services/igrpApiGateway/index';
import { EUREKA } from '../../docker_services/eureka/index';
import { REDIS } from '../../docker_services/redis/index';
import { NGINX } from '../../docker_services/nginx/index';
import { PGADMIN } from '../../docker_services/pgadmin/index';

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
    { output: context.basePath, template: TEMPLATES.IGRP_ENV, name: ENVIRONMENT_FILES.IGRP_ENV },
    { output: context.basePath, template: TEMPLATES.IGRP_NGINX, name: SRC_CONFIG_FILES.IGRP_NGINX },
    { output: context.basePath, template: TEMPLATES.IGRP_REDIS, name: SRC_CONFIG_FILES.IGRP_REDIS },
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
    {src: path.join(getPaths().configs, SRC_CONFIG_FILES.INIT_IGRP_DB), dest: path.join(context.basePath, DIRECTORIES.IGRPSTUDIO, COMMON_FILES.INIT_IGRP_DB)},
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
        };
      }
    ) ?? [],
    services: [
      {
        id: 'igrp_nginx',
        name: NGINX,
        properties: {
          image: 'nginx:1.25-alpine',
          container_name: `${baseContext.resourceConfig.slug}-igrp-nginx`,
          volumes: [
            { name: './nginx.conf', path: '/etc/nginx/nginx.conf:ro', driver: 'local' },
            { name: './logs/nginx', path: '/var/log/nginx', driver: 'local' },
          ],
          ports: [
            {
              internal: 2575,//"${NGINX_HTTP_PORT:-2575}",
              external: 2575//"${NGINX_HTTP_PORT:-2575}"
            }
          ],
          restart: 'unless-stopped' as RestartTypes,
          healthcheck: {
            test: [
              { instruction: 'CMD'},
              { instruction: 'wget'},
              { instruction: '--quiet'},
              { instruction: '--tries=1'},
              { instruction: '--spider'},
              { instruction: 'http://127.0.0.1:80/health'},
            ],
            interval: '30s',
            timeout: '10s',
            retries: 3,
            start_period: '40'
          },
          labels: [
            { key: 'type', value: 'service-discovery'},
            { key: 'name', value: NGINX}
          ]
        }
      },
      {
        id: "igrp_db",
        name: POSTGRES,
        properties: {
          image: "postgres:16-alpine",
          container_name: `${baseContext.resourceConfig.slug}-igrp-database-postgres`,
          restart: "unless-stopped" as RestartTypes,
          hostname: "${IGRP_LOCAL_DATABASE_HOSTNAME}",
          shm_size: "256mb",
          environments: [
            { key: "POSTGRES_DB", value: "${IGRP_DATABASE_NAME}" },
            { key: "POSTGRES_USER", value: "${IGRP_DATABASE_USER}" },
            { key: "POSTGRES_PASSWORD", value: "${IGRP_DATABASE_PASSWORD}" },
            { key: "POSTGRES_INITDB_ARGS", value: "--auth-host=scram-sha-256" },
          ],
          volumes: [
            {
              name: "igrp-postgres_data",
              path: "/var/lib/postgresql/data",
              driver: "local"
            },
            {
              name: `./${DIRECTORIES.IGRPSTUDIO}/${COMMON_FILES.INIT_IGRP_DB}`,
              path: "/docker-entrypoint-initdb.d:ro",
              driver: "none"
            }
          ],
          healthcheck: {
            test: [
              { instruction: 'CMD-SHELL'},
              { instruction: 'pg_isready -U ${IGRP_DATABASE_USER} -d ${IGRP_DATABASE_NAME}'},
            ],
            interval: '30s',
            timeout: '10s',
            retries: 5,
            start_period: '60'
          },
          labels: [
            { key: 'type', value: 'database'},
            { key: 'name', value: POSTGRES}
          ]
        },
      },
      {
        id: "igrp_api_gateway",
        name: IGRP_API_GATEWAY,
        properties: {
          image: "registry.nosi.cv/igrp/igrp-gateway:latest",
          container_name: `${baseContext.resourceConfig.slug}-igrp-gateway`,
          dependsOn: [
            { service: `${baseContext.resourceConfig.slug}-igrp-eureka` }
          ],
          environments: [
            { key: 'SPRING_PROFILES_ACTIVE', value: 'development' },
            { key: 'SERVER_PORT', value: '8080' },
            { key: 'EUREKA_CLIENT_SERVICEURL_DEFAULTZONE', value: '${EUREKA_SERVICE_URL}'},
            { key: 'EUREKA_CLIENT_REGISTERWITHEUREKA', value: 'true'},
            { key: 'EUREKA_CLIENT_FETCHREGISTRY', value: 'true'},
            { key: 'SPRING_CLOUD_DISCOVERY_ENABLED', value: 'true'},
            { key: 'SPRING_CLOUD_GATEWAY_DISCOVERY_LOCATOR_ENABLED', value: 'true'},
            { key: 'SPRING_CLOUD_GATEWAY_DISCOVERY_LOCATOR_LOWER_CASE_SERVICE_ID', value: 'true'},
            { key: 'JAVA_OPTS', value: '-Xmx512m -Xms256m -XX:+UseG1GC'},
          ],
          restart: 'unless-stopped' as RestartTypes,
          healthcheck: {
            test: [
              { instruction: 'CMD-SHELL'},
              { instruction: 'curl -f http://localhost:8080/actuator/health || exit 1'},
            ],
            interval: '30s',
            timeout: '10s',
            retries: 3,
            start_period: '60'
          },
          labels: [
            { key: 'type', value: 'web'},
            { key: 'name', value: IGRP_API_GATEWAY},
          ]
        },
      },
      {
        id: "igrp_eureka",
        name: EUREKA,
        properties: {
          image: "registry.nosi.cv/igrp/igrp-eureka:latest",
          container_name: `${baseContext.resourceConfig.slug}-igrp-eureka`,
          restart: 'unless-stopped' as RestartTypes,
          environments: [
            { key: 'SERVER_PORT', value: '8761' },
            { key: 'EUREKA_INSTANCE_PREFER_IP_ADDRESS', value: 'true' },
          ],
          healthcheck: {
            test: [
              { instruction: 'CMD-SHELL'},
              { instruction: 'curl -f http://localhost:8761/actuator/health || exit 1'},
            ],
            interval: '30s',
            timeout: '10s',
            retries: 5,
            start_period: '60'
          },
          labels: [
            { key: 'type', value: 'service-discovery'},
            { key: 'name', value: EUREKA},
          ]
        },
      },
      {
        id: "igrp_keycloak",
        name: KEYCLOAK,
        properties: {
          image: "quay.io/keycloak/keycloak:26.3.2",
          container_name: `${baseContext.resourceConfig.slug}-igrp-iam-keycloak`,
          dependsOn: [
            { service: `${baseContext.resourceConfig.slug}-igrp-database-postgres` }
          ],
          hostname: `${baseContext.resourceConfig.slug}-igrp-iam-keycloak`,
          restart: "unless-stopped" as RestartTypes,
          volumes: [
            {
              name: `./${DIRECTORIES.IGRPSTUDIO}/auth/data/igrp-realm.json`,
              path: "/opt/keycloak/data/import/igrp-realm.json:ro",
              driver: "none"
            }
          ],
          command: [
            { instruction: 'start-dev' },
            { instruction: '--import-realm' },
          ],
          environments: [
            { key: 'KC_HTTP_ENABLED', value: 'true' },
            { key: 'KC_ENABLE_STATISTICS', value: 'true' },
            { key: 'KC_ENABLE_HEALTH_ENDPOINTS', value: 'true' },
            { key: 'KC_PROXY_HEADERS', value: 'xforwarded' },
            { key: 'KC_PROXY_ADDRESS_FORWARDING', value: 'true' },
            { key: 'KC_HTTP_RELATIVE_PATH', value: 'auth' },
            { key: 'KC_HOSTNAME', value: "${DOCKERIP}" },
            { key: 'KC_HOSTNAME_STRICT', value: 'false' },
            { key: 'KC_HOSTNAME_STRICT_HTTPS', value: 'false' },
            { key: 'KC_HOSTNAME_PORT', value: "${NGINX_HTTP_PORT}" },
            { key: 'KC_FRONTEND_URL', value: "http://${DOCKER_IP}:${NGINX_HTTP_PORT}/auth" },
            { key: 'KC_BOOTSTRAP_ADMIN_USERNAME', value: "${IGRP_IAM_ADMIN_USER}" },
            { key: 'KC_BOOTSTRAP_ADMIN_PASSWORD', value: "${IGRP_IAM_ADMIN_PASSWORD}" },
            { key: 'KC_DB_VENDOR', value: "postgresql" },
            { key: 'KC_DB_HOST', value: "${IGRP_LOCAL_DATABASE_HOSTNAME}" },
            { key: 'KC_DB_PORT', value: "5432" },
            { key: 'KC_DB_NAME', value: "${IGRP_IAM_DATABASE_NAME}" },
            { key: 'KC_DB_USER', value: "${IGRP_DATABASE_USER}" },
            { key: 'KC_DB_PASSWORD', value: "${IGRP_DATABASE_PASSWORD}" },
            { key: 'JAVA_OPTS', value: '-Xmx512m -Xms256m -XX:+UseG1GC'}
          ],
          healthcheck: {
            test: [
              {
                instruction: "CMD-SHELL"
              },
              {
                instruction: "exec 3<>/dev/tcp/localhost/8080;"
              },
            ],
            interval: '10s',
            timeout: '5s',
            retries: 5
          },
          labels: [
            { key: 'type', value: 'auth'},
            { key: 'name', value: KEYCLOAK},
          ],
        },
      },
      {
        id: "igrp_minio",
        name: MINIO,
        properties: {
          image: "minio/minio:latest",
          container_name: `${baseContext.resourceConfig.slug}-igrp-minio`,
          restart: "unless-stopped" as RestartTypes,
          volumes: [
            {
              name: 'igrp-minio_data',
              path: '/data',
              driver: 'local'
            },
            {
              name: `./${DIRECTORIES.IGRPSTUDIO}/igrp-minio-init.sh`,
              path: '/docker-entrypoint.sh',
              driver: 'none'
            }
          ],
          command: [
            { instruction: 'server' },
            { instruction: '/data' },
            { instruction: '--console-address' },
            { instruction: ':9001' },
          ],
          entrypoint: [
            { instruction: '/docker-entrypoint.sh' }
          ],
          healthcheck: {
            test: [
              { instruction: 'CMD' },
              { instruction: 'curl' },
              { instruction: '-f' },
              { instruction: 'http://localhost:9000/minio/health/live' },
            ],
            interval: '30s',
            timeout: '20s',
            retries: 3,
            start_period: '60'
          },
          labels: [
            { key: 'type', value: 'file'},
            { key: 'name', value: MINIO},
          ]
        }
      },
      {
        id: "igrp_am",
        name: IGRP_ACCESS_MANAGEMENT,
        properties: {
          image: "registry.nosi.cv/igrp/access-management-api:latest",
          container_name: `${baseContext.resourceConfig.slug}-igrp-access-management`,
          dependsOn: [
            { service: `${baseContext.resourceConfig.slug}-igrp-iam-keycloak` },
            { service: `${baseContext.resourceConfig.slug}-igrp-database-postgres` }
          ],
          environments: [
            { key: 'SPRING_PROFILES_ACTIVE', value: 'development' },
            { key: 'SERVER_PORT', value: '8080' },
            { key: 'SPRING_APPLICATION_NAME', value: 'access-management' },
            { key: 'SPRING_JPA_HIBERNATE_DDL_AUTO', value: 'update' },
            { key: 'ENABLE_SWAGGER', value: 'true' },
            { key: 'JAVA_OPTS', value: '-Xmx512m -Xms256m -XX:+UseG1GC' },

            // Database configuration
            { key: 'POSTGRES_HOST', value: '${IGRP_LOCAL_DATABASE_HOSTNAME}' },
            { key: 'POSTGRES_DATABASE', value: '${IGRP_DATABASE_NAME}' },
            { key: 'POSTGRES_USER', value: '${IGRP_DATABASE_USER}' },
            { key: 'POSTGRES_PASSWORD', value: '${IGRP_DATABASE_PASSWORD}' },

            // Keycloak configuration
            { key: 'IGRP_KEYCLOAK_SERVER_URL', value: 'http://${IGRP_IAM_HOSTNAME}:8080/auth' },
            { key: 'IGRP_KEYCLOAK_REALM', value: '${IGRP_IAM_TENANT}' },
            { key: 'IGRP_KEYCLOAK_CLIENT_ID', value: '${IGRP_IAM_CLIENT_ID:-access-management}' },
            { key: 'IGRP_KEYCLOAK_CLIENT_SECRET', value: '${IGRP_IAM_CLIENT_SECRET:-**********}' },
            { key: 'IGRP_KEYCLOAK_GRANT_TYPE', value: 'client_credentials' },
            { key: 'AUTH_JWT_ISSUER', value: 'http://${DOCKER_IP}:${NGINX_HTTP_PORT}/auth/realms/igrp' },

            // Object storage configuration
            { key: 'MINIO_URL', value: '${MINIO_URL}' },
            { key: 'MINIO_PORT', value: '${MINIO_PORT}' },
            { key: 'MINIO_SECURITY', value: '${MINIO_SECURITY}' },
            { key: 'MINIO_ACCESS_KEY', value: '${MINIO_ACCESS_KEY}' },
            { key: 'MINIO_SECRET_KEY', value: '${MINIO_SECRET_KEY}' },
            { key: 'MINIO_BUCKET_NAME', value: '${MINIO_BUCKET_NAME}' },
            { key: 'MINIO_PRESIGNED_URL_EXPIRATION_TIME', value: '10s' },

            // Eureka discovery
            { key: 'EUREKA_CLIENT_ENABLED', value: 'true' },
            { key: 'SPRING_CLOUD_DISCOVERY_ENABLED', value: 'true' },
            { key: 'EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE', value: '${EUREKA_SERVICE_URL}' },

            // Redis
            { key: 'SPRING_DATA_REDIS_HOST', value: 'redis' },
            { key: 'SPRING_DATA_REDIS_PASSWORD', value: 'jdflijd6542g4642yu4' },

            // Swagger configuration
            { key: 'SPRINGDOC_SWAGGER_UI_DISABLE_SWAGGER_DEFAULT_URL', value: 'true' },
            { key: 'SPRINGDOC_SWAGGER_UI_CONFIG_URL', value: '/gateway-api/access-management/v3/api-docs/swagger-config' },
            { key: 'SPRINGDOC_SWAGGER_UI_URL', value: '/gateway-api/access-management/v3/api-docs' },
          ],
          command: [
            { instruction: '/app/access-management'},
            { instruction: '--spring.profiles.active=development'},
          ],
          healthcheck: {
            test: [
              { instruction: 'CMD-SHELL' },
              { instruction: 'curl -f http://localhost:8080/actuator/health || exit 1' },
            ],
            interval: '30s',
            timeout: '20s',
            retries: 3,
            start_period: '60'
          },
          restart: 'unless-stopped' as RestartTypes,
          labels: [
            { key: 'type', value: 'web'},
            { key: 'name', value: IGRP_ACCESS_MANAGEMENT},
          ]
        },
      },
      {
        id: "igrp_application_center",
        name: IGRP_APPLICATION_CENTER,
        properties: {
          image: "registry.nosi.cv/igrp/igrp-application-center:latest",
          container_name: `${baseContext.resourceConfig.slug}-igrp-application-center`,
          dependsOn: [
            { service: `${baseContext.resourceConfig.slug}-igrp-access-management` }
          ],
          healthcheck: {
            test: [
              { instruction: 'CMD' },
              { instruction: 'curl' },
              { instruction: '-f' },
              { instruction: 'http://localhost:3000/api/health' },
            ],
            interval: '30s',
            timeout: '20s',
            retries: 3,
            start_period: '60'
          },
          environments: [
            {
              key: "KEYCLOAK_ISSUER",
              value: "http://${DOCKER_IP}:${NGINX_HTTP_PORT}/auth/realms/igrp",
            },
            {
              key: "KEYCLOAK_CLIENT_ID",
              value: "${IGRP_IAM_CLIENT_ID:-access-management}",
            },
            {
              key: "KEYCLOAK_CLIENT_SECRET",
              value: "${IGRP_IAM_CLIENT_SECRET:-**********}",
            },
            {
              key: "NEXTAUTH_URL",
              value: "http://${DOCKER_IP}:${NGINX_HTTP_PORT}",
            },
            {
              key: "NEXTAUTH_SECRET",
              value: "${NEXTAUTH_SECRET:-4oC9C+V7ZrANFWiGhcmyvu3GTlOfVDthdxUyn3V3Mtk=}",
            },
            {
              key: "APP_MANAGER_API",
              value: `http://${baseContext.resourceConfig.slug}-igrp-gateway:8080/access-management`,
            },
            {
              key: "APP_URL",
              value: "http://${DOCKER_IP}",
            },
            {
              key: "NEXT_PUBLIC_BASE_URL",
              value: "http://${DOCKER_IP}:${NGINX_HTTP_PORT}",
            },
            {
              key: "NODE_ENV",
              value: "production",
            },
            {
              key: "IGRP_APP_MANAGER_API",
              value: "http://${DOCKER_IP}:${NGINX_HTTP_PORT}/gateway-api/access-management",
            },
            {
              key: "IGRP_APP_CODE",
              value: "APP_IGRP_CENTER",
            },
            {
              key: "IGRP_PREVIEW_MODE",
              value: "false",
            },
            {
              key: "IGRP_LOGIN_URL",
              value: "/login",
            },
            {
              key: "IGRP_LOGOUT_URL",
              value: "/logout",
            },
            {
              key: "IGRP_APP_NAME_DESCRIPTION",
              value: "IGRP",
            },
            {
              key: "NEXTAUTH_TRUST_HOST",
              value: "true",
            }
          ],
          labels: [
            { key: 'type', value: 'web'},
            { key: 'name', value: IGRP_APPLICATION_CENTER},
          ]
        },
      },
      {
        id: 'igrp_redis',
        name: REDIS,
        properties: {
          image: 'redis:latest',
          container_name: `${baseContext.resourceConfig.slug}-redis`,
          restart: 'unless-stopped' as RestartTypes,
          volumes: [
            { name: './redis.conf', path: '/usr/local/etc/redis/redis.conf', driver: 'local' },
          ],
          command: [
            { instruction: 'redis-server' },
            { instruction: '/usr/local/etc/redis/redis.conf' },
          ]
        }
      },
      {
        id: 'igrp_pgadmin',
        name: PGADMIN,
        properties: {
          image: 'dpage/pgadmin4:latest',
          container_name: `${baseContext.resourceConfig.slug}-igrp-pgadmin`,
          restart: 'unless-stopped' as RestartTypes,
          environments: [
            {  key: 'PGADMIN_DEFAULT_EMAIL', value: '${PGADMIN_DEFAULT_EMAIL:-admin@igrp.cv}' },
            {  key: 'PGADMIN_DEFAULT_PASSWORD', value: '${PGADMIN_DEFAULT_PASSWORD:-igrp123456}' },
            {  key: 'SCRIPT_NAME', value: '/pgadmin' },
            { key: 'PGADMIN_LISTEN_PORT', value: '${PGADMIN_LISTEN_PORT:-80}' },
          ],
          volumes: [
            { name: 'igrp-pgadmin_data', path: '/var/lib/pgadmin', driver: 'local' }
          ],
          expose: [
            { port: 80 }
          ]
        }
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
      const isShellScript = file.src.endsWith('.sh');
      if (isShellScript) {
        // Read, normalize line endings, and write
        const content = await fs.readFile(file.src, 'utf-8');
        const normalizedContent = content.replace(/\r\n/g, '\n');
        await fs.writeFile(file.dest, normalizedContent, { encoding: 'utf-8' });
      } else {
        await fs.copyFile(file.src, file.dest);
      }
    })

  );

  await saveBaseWorkspaceFileConfig(baseConfig, baseContext.basePath);

};