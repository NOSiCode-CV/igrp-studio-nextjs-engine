import { addProjectsToWorkspace } from '../src';
import { WorkspaceProjectsConfig } from '../src/interfaces/types';
import { OUTPUT_WORKSPACE_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_WORKSPACE_TEST;

const baseConfig: WorkspaceProjectsConfig = {
  id: 'a03Yl1rsM1P1',
  workspace: 'my-workspace',
  platform: {
    dataSource: {
      imageVersion: '16-alpine',
      dbUser: 'igrp',
      dbPassword: '1234',
      dbName: 'igrp_platform_db',
      dbHostName: 'igrp_db',
      ports: {
        internal: 5432,
        external: 5432
      },
      volumes: {
        name: 'igrp_db_data',
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
        name: 'igrp_keycloak_db_data',
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
  projects: [
    {
      config: {
        type: 'springboot',
        apiName: 'demoDomain',
        group: 'com.petshop',
        artifact: 'animals',
        description: 'Demo project for Spring Boot',
        database: 'Postgresql',
        projectStructureStyle: 'domain',
        enableObservability: true,
        enableEntityRevision: true,
        igrpCoreVersion: "0.0.1-alpha",
        enableGraalVm: false
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
      dataSource: {
        imageVersion: '16-alpine',
        dbUser: 'demo',
        dbPassword: 'password',
        dbName: 'demodomain_db',
        dbHostName: 'db_domain',
        ports: {
          internal: 5434,
          external: 5434
        },
        volumes: {
          name: 'domain_db_data',
          path: '/var/lib/postgresql/data2',
          driver: 'local'
        }
      },
    },
    {
      config: {
        type: 'springboot',
        apiName: 'demoTechnical',
        group: 'cv.nosi',
        artifact: 'users',
        description: 'Demo project for Spring Boot',
        database: 'Postgresql',
        projectStructureStyle: 'technical',
        enableObservability: true,
        enableEntityRevision: false,
        igrpCoreVersion: "0.0.1-alpha",
        enableGraalVm: true
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
      dataSource: {
        imageVersion: '16-alpine',
        dbUser: 'demo',
        dbPassword: 'password',
        dbName: 'demotechnical_db',
        dbHostName: 'db_technical',
        ports: {
          internal: 5435,
          external: 5435
        },
        volumes: {
          name: 'technical_db_data',
          path: '/var/lib/postgresql/data2',
          driver: 'local'
        }
      },
    },
    {
      config: {
        id: 'teste',
        type: 'nextjs',
        appName: 'testeMan',
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
  ]
};

describe('Add projects to workspace module', () => {

  test('Should generate the compose and environment variables file for workspace', async () => {
     await addProjectsToWorkspace(baseConfig, OUTPUT_DIR);
  });
});
