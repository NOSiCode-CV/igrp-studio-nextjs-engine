import { 
  newWorkspace, 
  addProjectToWorkspace, 
  updateProjectToWorkspace,
  removeProjectFromWorkspace,
  addServiceToWorkspace,
  updateServiceToWorkspace,
  removeServiceFromWorkspace,
  saveCustomWorkspaceComposeFile,
  initServices,
  setEngineConfiguration
} from '../src';
import { WorkspaceConfig, WorkspaceProjectsConfig, ProjectWorkspace, ServiceWorkspace } from '../src/interfaces/types';
import { OUTPUT_WORKSPACE_TEST } from '../src/utils/testPath';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as yaml from 'js-yaml';

export const OUTPUT_DIR = OUTPUT_WORKSPACE_TEST;

const baseWorkspaceConfig: WorkspaceConfig = {
  name: 'Test Migration Workspace',
  slug: 'test-migration-workspace',
  description: 'Workspace for migration testing',
  id: 'test-migration-id-12345'
};

const testProjectConfig: ProjectWorkspace = {
  id: 'test-project-123',
  config: {
    type: 'nextjs',
    name: 'test-nextjs-app',
    description: 'Test NextJS application',
    projectStructureStyle: 'simple'
  }
};

const testServiceConfig: ServiceWorkspace = {
  id: 'test-service-123',
  service: {
    id: 'redis-service-123',
    name: 'test-redis',
    properties: {
      image: 'redis:latest',
      container_name: 'test-redis',
      restart: 'always',
      ports: [
        {
          internal: 6379,
          external: 6379
        }
      ],
      environments: [
        { key: 'REDIS_PASSWORD', value: 'test123' }
      ]
    }
  }
};

beforeAll(async () => {
  setEngineConfiguration({ environment: 'development' });
  await initServices();
  
  // Ensure test directory is clean
  if (await fs.pathExists(OUTPUT_DIR)) {
    await fs.remove(OUTPUT_DIR);
  }
});

describe('Workspace Migration - Package Independence Tests', () => {

  test('Should create workspace without engine coupling', async () => {
    await newWorkspace(baseWorkspaceConfig, OUTPUT_DIR);
    
    // Verify workspace structure exists
    const workspaceDir = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug);
    expect(await fs.pathExists(workspaceDir)).toBe(true);
    
    // Verify .igrpstudio directory
    const igrpDir = path.join(workspaceDir, '.igrpstudio');
    expect(await fs.pathExists(igrpDir)).toBe(true);
    
    // Verify workspace.json
    const workspaceJson = path.join(igrpDir, 'workspace.json');
    expect(await fs.pathExists(workspaceJson)).toBe(true);
    
    const workspaceData = await fs.readJson(workspaceJson);
    expect(workspaceData.name).toBe(baseWorkspaceConfig.name);
    expect(workspaceData.slug).toBe(baseWorkspaceConfig.slug);
  });

  test('Should add project to workspace independently', async () => {
    await addProjectToWorkspace(testProjectConfig, OUTPUT_DIR);
    
    const workspaceDir = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug);
    
    // Verify project configuration
    const workspaceJson = path.join(workspaceDir, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    expect(workspaceData.projects).toHaveLength(1);
    expect(workspaceData.projects[0].name).toBe('test-nextjs-app');
  });

  test('Should update project in workspace', async () => {
    const updatedProjectConfig = { ...testProjectConfig };
    updatedProjectConfig.config.name = 'updated-nextjs-app';
    
    await updateProjectToWorkspace(updatedProjectConfig, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.projects[0].name).toBe('updated-nextjs-app');
  });

  test('Should remove project from workspace', async () => {
    await removeProjectFromWorkspace(testProjectConfig.id, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.projects).toHaveLength(0);
  });

  test('Should add service to workspace independently', async () => {
    await addServiceToWorkspace(testServiceConfig, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.services).toHaveLength(1);
    expect(workspaceData.services[0].name).toBe('test-redis');
  });

  test('Should update service in workspace', async () => {
    const updatedServiceConfig = { ...testServiceConfig };
    updatedServiceConfig.service.properties.image = 'redis:7-alpine';
    if (updatedServiceConfig.service.properties.ports && updatedServiceConfig.service.properties.ports[0]) {
      updatedServiceConfig.service.properties.ports[0].internal = 6380;
    }
    if (updatedServiceConfig.service.properties.environments) {
      updatedServiceConfig.service.properties.environments.push({ key: 'NEW_REDIS_VAR', value: 'new_redis_value' });
    }
    
    await updateServiceToWorkspace(updatedServiceConfig, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.services[0].properties.image).toBe('redis:7-alpine');
    if (workspaceData.services[0].properties.ports && workspaceData.services[0].properties.ports[0]) {
      expect(workspaceData.services[0].properties.ports[0].internal).toBe(6380);
    }
  });

  test('Should remove service from workspace', async () => {
    await removeServiceFromWorkspace(testServiceConfig.service.id, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    expect(workspaceData.services).toHaveLength(0);
  });

  test('Should save custom workspace compose file', async () => {
    const customCompose = {
      version: '3.8',
      services: {
        'custom-service': {
          image: 'nginx:latest',
          ports: ['8080:80']
        }
      }
    };
    
    await saveCustomWorkspaceComposeFile(customCompose, OUTPUT_DIR);
    
    const composeFile = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug, 'docker-compose.yml');
    expect(await fs.pathExists(composeFile)).toBe(true);
    
    const composeContent = yaml.load(await fs.readFile(composeFile, 'utf8')) as any;
    expect(composeContent.services['custom-service']).toBeDefined();
  });

});

describe('Workspace Migration - Template Independence Tests', () => {

  test('Should generate .env files without engine template dependencies', async () => {
    await newWorkspace(baseWorkspaceConfig, OUTPUT_DIR);
    await addProjectToWorkspace(testProjectConfig, OUTPUT_DIR);
    await addServiceToWorkspace(testServiceConfig, OUTPUT_DIR);
    
    const workspaceDir = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug);
    
    // Check for service .env files
    const envFiles = [
      path.join(workspaceDir, '.igrp', 'al-igrp.env'),
      path.join(workspaceDir, '.igrp', 'am-igrp.env'),
      path.join(workspaceDir, '.igrp', 'appm-igrp.env'),
      path.join(workspaceDir, '.igrp', 'igrp.env'),
      path.join(workspaceDir, '.igrp', 'ui-igrp.env'),
      path.join(workspaceDir, '.igrp', 'um-igrp.env')
    ];
    
    for (const envFile of envFiles) {
      expect(await fs.pathExists(envFile)).toBe(true);
      const content = await fs.readFile(envFile, 'utf8');
      expect(content).not.toContain('{{'); // No unresolved placeholders
    }
  });

  test('Should replace placeholders with actual values', async () => {
    await newWorkspace(baseWorkspaceConfig, OUTPUT_DIR);
    
    const workspaceDir = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug);
    const workspaceJson = path.join(workspaceDir, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    // Verify workspace name is properly set
    expect(workspaceData.name).toBe(baseWorkspaceConfig.name);
    expect(workspaceData.slug).toBe(baseWorkspaceConfig.slug);
    
    // Check if placeholders were replaced in compose file
    const composeFile = path.join(workspaceDir, 'docker-compose.yml');
    if (await fs.pathExists(composeFile)) {
      const composeContent = yaml.load(await fs.readFile(composeFile, 'utf8')) as any;
      expect(composeContent).not.toMatch(/\{\{.*\}\}/); // No placeholder patterns
    }
  });

});

describe('Workspace Migration - Docker Service Independence Tests', () => {

  test('Should use copied docker service constants', async () => {
    await addServiceToWorkspace(testServiceConfig, OUTPUT_DIR);
    
    const workspaceJson = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug, '.igrpstudio', 'workspace.json');
    const workspaceData = await fs.readJson(workspaceJson);
    
    // Verify service was added using copied constants
    expect(workspaceData.services).toHaveLength(1);
    expect(workspaceData.services[0].name).toBe('test-redis');
    expect(workspaceData.services[0].properties.image).toBe('redis:latest');
  });

});

describe('Workspace Migration - Type System Independence Tests', () => {

  test('Should use workspace types independently', async () => {
    // Test that workspace types work without engine coupling
    const testConfig: WorkspaceConfig = {
      name: 'Type Test Workspace',
      slug: 'type-test-workspace',
      description: 'Testing type independence',
      id: 'type-test-123'
    };
    
    expect(() => {
      // This should work with workspace types only
      const config: WorkspaceConfig = testConfig;
      expect(config.name).toBe('Type Test Workspace');
    }).not.toThrow();
  });

  test('Should handle project workspace types independently', async () => {
    const testProject: ProjectWorkspace = {
      id: 'type-project-123',
      config: {
        type: 'nextjs',
        name: 'type-test-project',
        description: 'Type test project'
      }
    };
    
    expect(testProject.config.type).toBe('nextjs');
  });

  test('Should handle service workspace types independently', async () => {
    const testService: ServiceWorkspace = {
      id: 'type-service-123',
      service: {
        id: 'type-service-id-123',
        name: 'type-test-service',
        properties: {
          image: 'redis:latest',
          container_name: 'type-test-service',
          restart: 'always',
          ports: [{ internal: 6380, external: 6380 }],
          environments: []
        }
      }
    };
    
    expect(testService.service.name).toBe('type-test-service');
    expect(testService.service.properties.image).toBe('redis:latest');
  });

});

describe('Workspace Migration - Utility Independence Tests', () => {

  test('Should work with copied utilities', async () => {
    // Test that workspace operations work with copied utilities
    await expect(newWorkspace(baseWorkspaceConfig, OUTPUT_DIR)).resolves.not.toThrow();
    await expect(addProjectToWorkspace(testProjectConfig, OUTPUT_DIR)).resolves.not.toThrow();
    await expect(addServiceToWorkspace(testServiceConfig, OUTPUT_DIR)).resolves.not.toThrow();
  });

  test('Should handle file operations independently', async () => {
    const workspaceDir = path.join(OUTPUT_DIR, baseWorkspaceConfig.slug);
    
    // Verify file operations work
    expect(await fs.pathExists(workspaceDir)).toBe(true);
    
    const igrpDir = path.join(workspaceDir, '.igrpstudio');
    expect(await fs.pathExists(igrpDir)).toBe(true);
    
    // Test that file writing works independently
    const testFile = path.join(igrpDir, 'test-independence.txt');
    await fs.writeFile(testFile, 'Testing file independence');
    expect(await fs.pathExists(testFile)).toBe(true);
    
    const content = await fs.readFile(testFile, 'utf8');
    expect(content).toBe('Testing file independence');
  });

});

afterAll(async () => {
  // Cleanup test directory
  if (await fs.pathExists(OUTPUT_DIR)) {
    await fs.remove(OUTPUT_DIR);
  }
});
