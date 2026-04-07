import {
  addProjectToWorkspace,
  updateProjectToWorkspace,
  removeProjectFromWorkspace,
  addServiceToWorkspace,
  updateServiceToWorkspace,
  removeServiceToWorkspace,
  saveCustomWorkspaceComposeFile,
  initServices,
  setEngineConfiguration
} from '../src';
import { WorkspaceProjectsConfig, ProjectWorkspace, ServiceWorkspace } from '../src/interfaces/types';
import { OUTPUT_WORKSPACE_TEST } from '../src/utils/testPath';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as yaml from 'js-yaml';

export const OUTPUT_DIR = OUTPUT_WORKSPACE_TEST;

const baseWorkspaceConfig: WorkspaceProjectsConfig = {
  id: 'workspace-functions-test-12345',
  workspace: 'workspace-functions-test',
  projects: [
    {
      config: {
        type: 'nextjs',
        name: 'test-nextjs-project',
        description: 'Test NextJS project for workspace functions',
        projectStructureStyle: 'simple'
      },
      basePath: 'test-nextjs-project',
      environments: [
        { key: 'NODE_ENV', value: 'development' },
        { key: 'PORT', value: '3000' }
      ],
      ports: {
        internal: 3000,
        external: 3000
      },
      dependsOn: []
    },
    {
      config: {
        type: 'springboot',
        name: 'test-springboot-project',
        description: 'Test Spring Boot project for workspace functions',
        projectStructureStyle: 'simple',
        group: 'com.test',
        artifact: 'test-springboot'
      },
      basePath: 'test-springboot-project',
      environments: [
        { key: 'SPRING_PROFILES_ACTIVE', value: 'dev' },
        { key: 'SERVER_PORT', value: '8080' }
      ],
      ports: {
        internal: 8080,
        external: 8080
      },
      dependsOn: ['test-nextjs-project']
    }
  ],
  services: [
    {
      name: 'test-postgres',
      type: 'postgres',
      image: 'postgres:15',
      ports: {
        internal: 5432,
        external: 5432
      },
      environments: [
        { key: 'POSTGRES_DB', value: 'testdb' },
        { key: 'POSTGRES_USER', value: 'testuser' },
        { key: 'POSTGRES_PASSWORD', value: 'testpass' }
      ]
    },
    {
      name: 'test-redis',
      type: 'redis',
      image: 'redis:7-alpine',
      ports: {
        internal: 6379,
        external: 6379
      },
      environments: [
        { key: 'REDIS_PASSWORD', value: 'redis123' }
      ]
    }
  ]
};

beforeAll(async () => {
  setEngineConfiguration({ environment: 'development' });
  await initServices();
  
  // Clean test directory
  if (await fs.pathExists(OUTPUT_DIR)) {
    await fs.remove(OUTPUT_DIR);
  }
  
  // Create base workspace directory structure
  const workspaceDir = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace);
  await fs.ensureDir(workspaceDir);
  await fs.ensureDir(path.join(workspaceDir, '.igrpstudio'));
  await fs.ensureDir(path.join(workspaceDir, 'projects'));
  
  // Create initial workspace.json
  const initialWorkspaceJson = {
    id: baseWorkspaceConfig.id,
    name: baseWorkspaceConfig.workspace,
    slug: baseWorkspaceConfig.workspace,
    description: 'Test workspace for workspace functions',
    projects: [],
    services: []
  };
  
  await fs.writeJson(
    path.join(workspaceDir, '.igrpstudio', 'workspace.json'),
    initialWorkspaceJson,
    { spaces: 2 }
  );
});

describe('Workspace Functions - Project Management', () => {

  test('addProjectToWorkspace should add projects independently', async () => {
    await addProjectToWorkspace(baseWorkspaceConfig, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.projects).toHaveLength(2);
    expect(workspaceData.projects[0].name).toBe('test-nextjs-project');
    expect(workspaceData.projects[1].name).toBe('test-springboot-project');
    
    // Verify project directories were created
    const nextjsDir = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace, 'projects', 'test-nextjs-project');
    const springbootDir = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace, 'projects', 'test-springboot-project');
    
    expect(await fs.pathExists(nextjsDir)).toBe(true);
    expect(await fs.pathExists(springbootDir)).toBe(true);
  });

  test('updateProjectToWorkspace should update project configurations', async () => {
    const updatedConfig = { ...baseWorkspaceConfig };
    updatedConfig.projects[0].config.name = 'updated-nextjs-project';
    updatedConfig.projects[0].environments.push({ key: 'NEW_ENV_VAR', value: 'new_value' });
    updatedConfig.projects[0].ports.internal = 3001;
    
    await updateProjectToWorkspace(updatedConfig, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.projects[0].name).toBe('updated-nextjs-project');
    expect(workspaceData.projects[0].environments).toHaveLength(3);
    expect(workspaceData.projects[0].environments[2].key).toBe('NEW_ENV_VAR');
    expect(workspaceData.projects[0].ports.internal).toBe(3001);
  });

  test('removeProjectFromWorkspace should remove projects', async () => {
    await removeProjectFromWorkspace({
      id: baseWorkspaceConfig.id,
      workspace: baseWorkspaceConfig.workspace,
      projectName: 'test-nextjs-project'
    }, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.projects).toHaveLength(1);
    expect(workspaceData.projects[0].name).toBe('test-springboot-project');
    
    // Verify project directory was removed
    const nextjsDir = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace, 'projects', 'test-nextjs-project');
    expect(await fs.pathExists(nextjsDir)).toBe(false);
  });

});

describe('Workspace Functions - Service Management', () => {

  test('addServiceToWorkspace should add services independently', async () => {
    await addServiceToWorkspace(baseWorkspaceConfig, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.services).toHaveLength(2);
    expect(workspaceData.services[0].name).toBe('test-postgres');
    expect(workspaceData.services[1].name).toBe('test-redis');
  });

  test('updateServiceToWorkspace should update service configurations', async () => {
    const updatedConfig = { ...baseWorkspaceConfig };
    updatedConfig.services[0].image = 'postgres:16';
    updatedConfig.services[0].ports.internal = 5433;
    updatedConfig.services[0].environments.push({ key: 'POSTGRES_MAX_CONNECTIONS', value: '100' });
    
    await updateServiceToWorkspace(updatedConfig, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.services[0].image).toBe('postgres:16');
    expect(workspaceData.services[0].ports.internal).toBe(5433);
    expect(workspaceData.services[0].environments).toHaveLength(4);
    expect(workspaceData.services[0].environments[3].key).toBe('POSTGRES_MAX_CONNECTIONS');
  });

  test('removeServiceFromWorkspace should remove services', async () => {
    await removeServiceFromWorkspace({
      id: baseWorkspaceConfig.id,
      workspace: baseWorkspaceConfig.workspace,
      serviceName: 'test-postgres'
    }, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.services).toHaveLength(1);
    expect(workspaceData.services[0].name).toBe('test-redis');
  });

});

describe('Workspace Functions - Compose File Management', () => {

  test('saveCustomWorkspaceComposeFile should save custom compose', async () => {
    const customCompose = {
      version: '3.8',
      services: {
        'custom-nginx': {
          image: 'nginx:alpine',
          ports: ['8080:80'],
          environment: {
            'NGINX_HOST': 'localhost',
            'NGINX_PORT': '80'
          }
        },
        'custom-db': {
          image: 'mysql:8.0',
          ports: ['3306:3306'],
          environment: {
            'MYSQL_ROOT_PASSWORD': 'rootpass',
            'MYSQL_DATABASE': 'customdb'
          }
        }
      },
      networks: {
        'custom-network': {
          driver: 'bridge'
        }
      }
    };
    
    await saveCustomWorkspaceComposeFile(customCompose, OUTPUT_DIR);
    
    const composeFile = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace, 'docker-compose.yml');
    expect(await fs.pathExists(composeFile)).toBe(true);
    
    const composeContent = yaml.load(await fs.readFile(composeFile, 'utf8')) as any;
    expect(composeContent.version).toBe('3.8');
    expect(composeContent.services['custom-nginx']).toBeDefined();
    expect(composeContent.services['custom-db']).toBeDefined();
    expect(composeContent.networks['custom-network']).toBeDefined();
    
    // Verify service configurations
    expect(composeContent.services['custom-nginx'].image).toBe('nginx:alpine');
    expect(composeContent.services['custom-nginx'].ports).toEqual(['8080:80']);
    expect(composeContent.services['custom-nginx'].environment['NGINX_HOST']).toBe('localhost');
    
    expect(composeContent.services['custom-db'].image).toBe('mysql:8.0');
    expect(composeContent.services['custom-db'].environment['MYSQL_ROOT_PASSWORD']).toBe('rootpass');
  });

});

describe('Workspace Functions - Integration Tests', () => {

  test('Should handle multiple projects and services together', async () => {
    const complexConfig: WorkspaceProjectsConfig = {
      id: 'complex-workspace-test',
      workspace: 'complex-workspace',
      projects: [
        {
          config: {
            type: 'nextjs',
            name: 'frontend-app',
            description: 'Frontend application'
          },
          basePath: 'frontend-app',
          environments: [{ key: 'API_URL', value: 'http://backend:8080' }],
          ports: { internal: 3000, external: 3000 },
          dependsOn: ['backend-api']
        },
        {
          config: {
            type: 'springboot',
            name: 'backend-api',
            description: 'Backend API service'
          },
          basePath: 'backend-api',
          environments: [{ key: 'DB_HOST', value: 'postgres' }],
          ports: { internal: 8080, external: 8080 },
          dependsOn: ['postgres-db']
        }
      ],
      services: [
        {
          name: 'postgres-db',
          type: 'postgres',
          image: 'postgres:15',
          ports: { internal: 5432, external: 5432 },
          environments: [
            { key: 'POSTGRES_DB', value: 'complexdb' },
            { key: 'POSTGRES_USER', value: 'complexuser' },
            { key: 'POSTGRES_PASSWORD', value: 'complexpass' }
          ]
        }
      ]
    };
    
    // Create complex workspace
    const complexWorkspaceDir = path.join(OUTPUT_DIR, complexConfig.workspace);
    await fs.ensureDir(complexWorkspaceDir);
    await fs.ensureDir(path.join(complexWorkspaceDir, '.igrpstudio'));
    await fs.ensureDir(path.join(complexWorkspaceDir, 'projects'));
    
    const initialWorkspaceJson = {
      id: complexConfig.id,
      name: complexConfig.workspace,
      slug: complexConfig.workspace,
      description: 'Complex workspace test',
      projects: [],
      services: []
    };
    
    await fs.writeJson(
      path.join(complexWorkspaceDir, '.igrpstudio', 'workspace.json'),
      initialWorkspaceJson,
      { spaces: 2 }
    );
    
    // Add all projects and services
    await addProjectToWorkspace(complexConfig, OUTPUT_DIR);
    await addServiceToWorkspace(complexConfig, OUTPUT_DIR);
    
    const workspaceJson = path.join(complexWorkspaceDir, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.projects).toHaveLength(2);
    expect(workspaceData.services).toHaveLength(1);
    
    // Verify dependencies are handled correctly
    const frontendProject = workspaceData.projects.find((p: any) => p.name === 'frontend-app');
    expect(frontendProject.dependsOn).toContain('backend-api');
    
    const backendProject = workspaceData.projects.find((p: any) => p.name === 'backend-api');
    expect(backendProject.dependsOn).toContain('postgres-db');
  });

  test('Should handle error cases gracefully', async () => {
    // Test with invalid project name
    const invalidConfig = { ...baseWorkspaceConfig };
    invalidConfig.projects[0].basePath = '';
    
    // Should handle error without throwing
    await expect(addProjectToWorkspace(invalidConfig, OUTPUT_DIR)).rejects.toThrow();
  });

});

describe('Workspace Functions - File Generation Validation', () => {

  test('Should generate .env files for projects', async () => {
    await addProjectToWorkspace(baseWorkspaceConfig, OUTPUT_DIR);
    
    const workspaceDir = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace);
    
    // Check for project-specific .env files
    const nextjsEnvFile = path.join(workspaceDir, '.igrp', 'appm-igrp.env');
    const springbootEnvFile = path.join(workspaceDir, '.igrp', 'am-igrp.env');
    
    expect(await fs.pathExists(nextjsEnvFile)).toBe(true);
    expect(await fs.pathExists(springbootEnvFile)).toBe(true);
    
    // Verify environment variables are present
    const nextjsContent = await fs.readFile(nextjsEnvFile, 'utf8');
    expect(nextjsContent).toContain('NODE_ENV=development');
    expect(nextjsContent).toContain('PORT=3000');
    
    const springbootContent = await fs.readFile(springbootEnvFile, 'utf8');
    expect(springbootContent).toContain('SPRING_PROFILES_ACTIVE=dev');
    expect(springbootContent).toContain('SERVER_PORT=8080');
  });

  test('Should generate service configurations in compose', async () => {
    await addServiceToWorkspace(baseWorkspaceConfig, OUTPUT_DIR);
    
    const composeFile = path.join(OUTPUT_DIR, baseWorkspaceConfig.workspace, 'docker-compose.yml');
    const composeContent = yaml.load(await fs.readFile(composeFile, 'utf8')) as any;
    
    // Verify services are in compose file
    expect(composeContent.services['test-postgres']).toBeDefined();
    expect(composeContent.services['test-redis']).toBeDefined();
    
    // Verify service configurations
    const postgresService = composeContent.services['test-postgres'];
    expect(postgresService.image).toBe('postgres:15');
    expect(postgresService.ports).toContain('5432:5432');
    expect(postgresService.environment['POSTGRES_DB']).toBe('testdb');
    
    const redisService = composeContent.services['test-redis'];
    expect(redisService.image).toBe('redis:7-alpine');
    expect(redisService.ports).toContain('6379:6379');
    expect(redisService.environment['REDIS_PASSWORD']).toBe('redis123');
  });

});

afterAll(async () => {
  // Cleanup
  if (await fs.pathExists(OUTPUT_DIR)) {
    await fs.remove(OUTPUT_DIR);
  }
});
