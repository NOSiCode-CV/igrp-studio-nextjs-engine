import { addProjectToWorkspace, addServiceToWorkspace, initServices, removeProjectFromWorkspace } from '../src';
import { ProjectWorkspace, ServiceWorkspace, WorkspaceProjectsConfig } from '../src/interfaces/types';
import { OUTPUT_WORKSPACE_TEST } from '../src/utils/testPath';
import { COMMON_FILES, DIRECTORIES } from '../src/utils/constants';

export const OUTPUT_DIR = OUTPUT_WORKSPACE_TEST;

const baseConfig: WorkspaceProjectsConfig = {
  id: 'a03Yl1rsM1P1',
  workspace: 'my-workspace',
  projects: [
    {
      config: {
        type: 'springboot',
        name: 'demoDomain',
        group: 'com.petshop',
        artifact: 'animals',
        description: 'Demo project for Spring Boot',
        database: 'Postgresql',
        projectStructureStyle: 'domain',
        enableObservability: "true",
        enableEntityRevision: "true",
        igrpCoreVersion: "0.0.1-alpha",
        enableGraalVm: "false"
      },
      basePath: 'demoDomain',
      environments: [
        { key: 'TEST_VARIABLE', value: 'value321'},
        { key: 'TEST_ANOTHER_VARIABLE', value: '123'},
      ],
      ports: {
        internal: 8083,
        external: 8083
      },
      dependsOn: [

      ],
    },
    {
      config: {
        type: 'springboot',
        name: 'demoTechnical',
        group: 'cv.nosi',
        artifact: 'users',
        description: 'Demo project for Spring Boot',
        database: 'Postgresql',
        projectStructureStyle: 'technical',
        enableObservability: "true",
        enableEntityRevision: "false",
        igrpCoreVersion: "0.0.1-alpha",
        enableGraalVm: "true"
      },
      basePath: 'demoTechnical',
      environments: [

      ],
      ports: {
        internal: 8084,
        external: 8084
      },
      dependsOn: [

      ],

    },
    {
      config: {
        id: 'teste',
        type: 'nextjs',
        name: 'testeMan',
        workspaceId: 'none'
      },
      basePath: 'testeMan',
      environments: [
      ],
      ports: {
        internal: 3001,
        external: 3001
      },
      dependsOn: [
        { service: 'demoDomain-service'},
        { service: 'demoTechnical-service'}
      ],
    }
  ],
  services: [
    {
      id: "postgres_1",
      name: "postgres",
      properties: {
        image: "postgres:14-alpine",
        container_name: "postgres-test",
        restart: "always",
        hostname: "pgresdb",
        environments: [
          { key: "PGDATA", value: "/var/lib/postgresql/data/pgdata" },
          { key: "POSTGRES_DB", value: "${POSTGRES_DB}" },
          { key: "POSTGRES_USER", value: "${POSTGRES_USER}" },
          { key: "POSTGRES_PASSWORD", value: "${POSTGRES_PASSWORD}" },
        ],
        volumes: [
          {
            name: "postgres_test_data",
            path: "/var/lib/postgresql/data",
            driver: "local"
          }
        ],
        ports: [
          {
            internal: 5434,
            external: 5434
          }
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        env_file: [ {file: ".env"} ],
        labels: [
          { key: 'type', value: 'database'}
        ]
      },
    },
    {
      id: "mysql_1",
      name: "mysql",
      properties: {
        image: "mysql:8.0",
        container_name: "mysql",
        hostname: "mysqldb",
        restart: "always",
        environments: [
          { key: "MYSQL_DATABASE", value: "${MYSQL_DATABASE}" },
          { key: "MYSQL_USER", value: "${MYSQL_USER}" },
          { key: "MYSQL_PASSWORD", value: "${MYSQL_PASSWORD}" },
          { key: "MYSQL_ROOT_PASSWORD", value: "${MYSQL_ROOT_PASSWORD}" },
        ],
        volumes: [
          {
            name: "mysql_data",
            path: "/var/lib/mysql",
            driver: "local"
          }
        ],
        ports: [
          {
            internal: 3306,
            external: 3306
          }
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        env_file: [ {file: ".env"} ],
        labels: [
          { key: 'type', value: 'database'}
        ]
      },
    },
    {
      id: "keycloak_1",
      name: "keycloak",
      properties: {
        image: "keycloak:25.0.4",
        container_name: "keycloak",
        dependsOn: [
          { service: "keycloak_db" }
        ],
        hostname: "keycloak",
        restart: "always",
        environments: [
          { key: "KC_HOSTNAME", value: "http://${KEYCLOAK_URL}" },
          { key: "KC_HOSTNAME_PORT", value: "${KEYCLOAK_HOSTNAME_PORT}" },
          { key: "KC_HOSTNAME_STRICT_BACKCHANNEL", value: "false" },
          { key: "KC_HTTP_ENABLED", value: "true" },
          { key: "KC_HOSTNAME_STRICT_HTTPS", value: "false" },
          { key: "KC_HEALTH_ENABLED", value: "true" },
          { key: "KEYCLOAK_ADMIN", value: "${KEYCLOAK_ADMIN}" },
          { key: "KEYCLOAK_ADMIN_PASSWORD", value: "${KEYCLOAK_ADMIN_PASSWORD}" },
          { key: "KC_HOSTNAME_BACKCHANNEL_DYNAMIC", value: "true" },
          { key: "KC_DB", value: "${POSTGRES_DB}" },
          { key: "KC_DB_URL", value: "jdbc:postgresql://keycloak_db:5434/${POSTGRES_DB}" },
          { key: "KC_DB_USERNAME", value: "${POSTGRES_USER}" },
          { key: "KC_DB_PASSWORD", value: "${POSTGRES_PASSWORD}" },
        ],
        volumes: [
          {
            name: "./data/",
            path: "/opt/keycloak/data/import",
            driver: "local"
          }
        ],
        extra_hosts: [
          { hostname: "${KEYCLOAK_HOSTNAME}", ip: "host-gateway" }
        ],
        command: [
          { instruction: 'start' },
          { instruction: '--import-realm' },
          { instruction: '--features=admin-fine-grained-authz' },
        ],
        ports: [
          {
            internal: 8090,
            external: 8090
          }
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        env_file: [ {file: ".env"} ],
        labels: [
          { key: 'type', value: 'auth'}
        ]
      },
    },
    {
      id: "oracle_1",
      name: "oracle",
      properties: {
        image: "gvenzl/oracle-free:latest",
        container_name: "oracle",
        hostname: "oracledb",
        restart: "always",
        environments: [
          { key: "APP_USER", value: "${APP_USER}" },
          { key: "ORACLE_PASSWORD", value: "${ORACLE_PASSWORD}" },
          { key: "APP_USER_PASSWORD", value: "${APP_USER_PASSWORD}" },
        ],
        volumes: [
          {
            name: "my-init.sql",
            path: "/container-entrypoint-initdb.d/my-init.sql:ro",
            driver: "local"
          }
        ],
        ports: [
          {
            internal: 1521,
            external: 1521
          }
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        env_file: [ {file: ".env"} ],
        labels: [
          { key: 'type', value: 'database'}
        ]
      },
    },
    {
      id: "minio_1",
      name: "minio",
      properties: {
        image: "minio/minio:latest",
        container_name: "minio_service",
        hostname: "minio-service",
        restart: "no",
        environments: [
          { key: "MINIO_SCHEME", value: "http" },
          { key: "MINIO_FORCE_NEW_KEYS", value: "no" },
          { key: "MINIO_API_PORT_NUMBER", value: "9002" },
          { key: "KC_HTTP_ENABLED", value: "true" },
          { key: "MINIO_DEFAULT_BUCKETS", value: "user, apps" },
          { key: "MINIO_BROWSER", value: "on" },
          { key: "MINIO_PROMETHEUS_AUTH_TYPE", value: "public" },
          { key: "MINIO_CONSOLE_PORT_NUMBER", value: "9001" },
          { key: "MINIO_ROOT_USER", value: "root" },
          { key: "MINIO_ROOT_PASSWORD", value: "password" },
          { key: "MINIO_IDENTITY_OPENID_CONFIG_URL_PRIMARY_IAM", value: "http://${IGRP_IAM_HOSTNAME}/realms/${IGRP_IAM_TENANT}/.well-known/openid-configuration" },
          { key: "MINIO_IDENTITY_OPENID_CLIENT_ID", value: "minio" },
          { key: "MINIO_IDENTITY_OPENID_CLIENT_SECRET", value: "************" },
          { key: "MINIO_IDENTITY_OPENID_DISPLAY_NAME", value: "Minio OpenID Login" },
          { key: "MINIO_IDENTITY_OPENID_SCOPES", value: "openid" },
          { key: "MINIO_IDENTITY_OPENID_REDIRECT_URI_DYNAMIC", value: "on" },
          { key: "MINIO_IDENTITY_OPENID_REDIRECT_URI", value: "http://${IGRP_IAM_HOSTNAME}" },
        ],
        volumes: [
          {
            name: "./minio_data/",
            path: "/minio_data",
            driver: "local"
          }
        ],
        command: [
          { instruction: 'start' },
          { instruction: '/data' },
          { instruction: '--console-address :9003' },
        ],
        ports: [
          {
            internal: 9002,
            external: 9002
          },
          {
            internal: 9003,
            external: 9003
          },
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        env_file: [ {file: ".env"} ],
        labels: [
          { key: 'type', value: 'file'}
        ]
      }
    },
    {
      id: "otel_1",
      name: "opentelemetry",
      properties: {
        image: "otel/opentelemetry-collector-contrib:0.82.0",
        container_name: "otel-collector",
        restart: "always",
        volumes: [
          {
            name: "./monitoring/collector/otel-collector.yml",
            path: "/etc/otelcol-cont/otel-collector.yml",
            driver: "none"
          }
        ],
        command: [
          { instruction: '--config=/etc/otelcol-cont/otel-collector.yml' },
        ],
        ports: [
          {
            internal: 1888,
            external: 1888
          },
          {
            internal: 8888,
            external: 8888
          },
          {
            internal: 8889,
            external: 8889
          },
          {
            internal: 13133,
            external: 13133
          },
          {
            internal: 4317,
            external: 4317
          },
          {
            internal: 4318,
            external: 4318
          },
          {
            internal: 55679,
            external: 55679
          },
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        labels: [
          { key: 'type', value: 'observability'}
        ]
      }
    },
    {
      id: "prometheus_1",
      name: "prometheus",
      properties: {
        image: "prom/prometheus:v2.51.2",
        container_name: "prometheus",
        hostname: "prometheus",
        volumes: [
          {
            name: "./monitoring/prometheus/prometheus.yml",
            path: "/etc/prometheus/prometheus.yml",
            driver: "none"
          }
        ],
        command: [
          { instruction: '--config.file=/etc/prometheus/prometheus.yml' },
        ],
        ports: [
          {
            internal: 9090,
            external: 9090
          }
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        labels: [
          { key: 'type', value: 'observability'}
        ]
      }
    },
    {
      id: "promtail_1",
      name: "promtail",
      properties: {
        image: "grafana/promtail:3.0.0",
        container_name: "promtail",
        hostname: "promtail",
        volumes: [
          { name: "./monitoring/promtail/promtail-docker-config.yml", path: "/etc/promtail/docker-config.yml", driver: "none" },
          { name: "/var/lib/docker/containers", path: "/var/lib/docker/containers:ro", driver: "none" },
          { name: "/var/run/docker.sock", path: "/var/run/docker.sock", driver: "none" },
        ],
        ports: [
          {
            internal: 9080,
            external: 9080
          }
        ],
        environments: [
          { key: "PROMTAIL_SERVICE_INTERNAL_PORT", value: "9080" },
          { key: "LOKI_SERVICE_INTERNAL_PORT", value: "3100" },
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        labels: [
          { key: 'type', value: 'observability'}
        ]
      }
    },
    {
      id: "loki_1",
      name: "loki",
      properties: {
        image: "grafana/loki:3.0.0",
        container_name: "loki",
        hostname: "loki",
        ports: [
          {
            internal: 3100,
            external: 3100
          }
        ],
        command: [
          { instruction: '-config.expand-env=true' },
          { instruction: '-config.file=/etc/loki/local-config.yml' },
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        dependsOn: [
          { service: "promtail" }
        ],
        labels: [
          { key: 'type', value: 'observability'}
        ]
      }
    },
    {
      id: "tempo_1",
      name: "tempo",
      properties: {
        image: "grafana/tempo:2.4.1",
        container_name: "tempo",
        hostname: "tempo",
        ports: [
          {
            internal: 3200,
            external: 3200
          },
          {
            internal: 9411,
            external: 9411
          },
          {
            internal: 4317,
            external: 4317,
            reference: 4317,
          },
        ],
        environments: [
          { key: "TEMPO_SERVICE_HTTP_PORT", value: "3200" },
        ],
        volumes: [
          {
            name: "./monitoring/tempo/tempo.yml",
            path: "/etc/tempo-config.yml",
            driver: "none"
          }
        ],
        command: [
          { instruction: '-config.expand-env=true' },
          { instruction: '-config.file /etc/tempo-config.yml' },
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        labels: [
          { key: 'type', value: 'observability'}
        ]
      }
    },
    {
      id: "grafana_1",
      name: "grafana",
      properties: {
        image: "grafana/grafana:10.4.2",
        container_name: "grafana",
        hostname: "grafana",
        ports: [
          {
            internal: 2000,
            external: 2000
          }
        ],
        environments:  [
          { key: "GF_SECURITY_ADMIN_USER", value: "admin" },
          { key: "GF_SECURITY_ADMIN_PASSWORD", value: "password" },
          { key: "GF_USERS_ALLOW_SIGN_UP", value: "false" },
        ],
        volumes: [
          {
            name: "grafana_data",
            path: "/var/lib/grafana",
            driver: "local"
          }
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        labels: [
          { key: 'type', value: 'observability'}
        ]
      }
    },
    {
      id: "redis_1",
      name: "redis",
      properties: {
        image: "redis:8.0-rc1",
        container_name: "redis",
        hostname: "redis",
        restart: "always",
        ports: [
          {
            internal: 6379,
            external: 6379
          }
        ],
        command: [
          { instruction: 'redis-server' },
          { instruction: '--requirepass' },
          { instruction: 'password' },
        ],
        volumes: [
          {
            name: "redis_data",
            path: "/data",
            driver: "local"
          }
        ],
        networks: [
          { network: "my-workspace-network" }
        ],
        labels: [
          { key: 'type', value: 'cache'}
        ]
      }
    }
  ]
};

const projectConfig: ProjectWorkspace = {
  id: "2fabf785-0659-49f2-b03f-c6ea50659646",
  config: {
    id: "2fabf785-0659-49f2-b03f-c6ea50659666",
    type: 'springboot',
    name: 'demoDomain',
    group: 'com.petshop',
    artifact: 'animals',
    description: 'Demo project for Spring Boot',
    database: 'Postgresql',
    projectStructureStyle: 'domain',
    enableObservability: "true",
    enableEntityRevision: "true",
    igrpCoreVersion: "0.0.1-alpha",
    enableGraalVm: "false"
  }
}

const serviceConfig: ServiceWorkspace = {
  "id": "2fabf785-0659-49f2-b03f-c6ea50659646",
  "service": {
    "id": "svc-1744633175793",
    "name": "igrpAppLogic",
    "properties": {
      "image": "registry.nosi.cv/formacao-igrp/igrp-app-logic:latest",
      "container_name": "igrp-app-logic",
      "restart": "always",
      "ports": [
        {
          "external": 5678,
          "internal": 5678
        }
      ],
      "hostname": "igrp-app-logic",
      "environments": [],
      "env_file": [
        {
          "file": ".igrp.env"
        }
      ],
      "networks": [
        {
          "network": "my-workspace-network"
        }
      ],
      "volumes": [
        {
          name: 'igrp_app_logic_storage',
          path: '/home/node/.n8n',
          driver: 'local',
        },
        {
          name: `./${DIRECTORIES.IGRPSTUDIO}/${COMMON_FILES.INIT_IGRP_APP_LOGIC}`,
          path: '/docker-entrypoint.sh',
          driver: 'none',
        },
        {
          name: `./${DIRECTORIES.IGRPSTUDIO}/${COMMON_FILES.IGRP_APP_LOGIC_WORKFLOW_EXPORT}`,
          path: '/scripts/igrp-app-logic-workflow-export.sh',
          driver: 'none',
        },
        {
          name: `./${DIRECTORIES.IGRPSTUDIO}/applogic/${COMMON_FILES.JSON_IGRP_APP_LOGIC}`,
          path: '/data/applogic/igrp-app-logic.json',
          driver: 'none',
        },
        {
          name: `./${DIRECTORIES.IGRPSTUDIO}/applogic/workflows/${COMMON_FILES.JSON_IGRP_APP_LOGIC_CREDENTIALS}`,
          path: '/data/applogic/workflows/igrp-app-logic-credentials.json',
          driver: 'none',
        },
        {
          name: `./${DIRECTORIES.IGRPSTUDIO}/applogic/workflows/${COMMON_FILES.JSON_IGRP_APP_LOGIC_WORKFLOWS}`,
          path: '/data/applogic/workflows/igrp-app-logic-workflows.json',
          driver: 'none',
        },
      ],
      "dependsOn": [
        {
          "service": "postgres"
        }
      ],
      "labels": [
        {
          "key": "type",
          "value": "web"
        },
        {
          "key": "name",
          "value": "igrpAppLogic"
        },
      ]
    }
  }
}

beforeAll(async () => {
  await initServices();
});

describe('Add projects to workspace module', () => {

  test('Should generate the compose and environment variables file for workspace', async () => {
     await addProjectToWorkspace(projectConfig, OUTPUT_DIR);
  });
});

describe('Remove projects from workspace module', () => {

  test('Should generate the compose and environment variables file for workspace', async () => {
     await removeProjectFromWorkspace("2fabf785-0659-49f2-b03f-c6ea50659666", OUTPUT_DIR);
  });
});



describe('Add services to workspace module', () => {

  test('Should generate the compose and environment variables file for workspace', async () => {
    await addServiceToWorkspace(serviceConfig, OUTPUT_DIR);
  });
});
