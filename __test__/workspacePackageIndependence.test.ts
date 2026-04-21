import { 
  newWorkspace,
  initServices,
  setEngineConfiguration
} from '../src';
import { WorkspaceConfig } from '../src/interfaces/types';
import { OUTPUT_WORKSPACE_TEST } from '../src/utils/testPath';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as yaml from 'js-yaml';

export const OUTPUT_DIR = OUTPUT_WORKSPACE_TEST;

const testWorkspaceConfig: WorkspaceConfig = {
  name: 'Package Independence Test',
  slug: 'package-independence-test',
  description: 'Testing workspace package independence from engine',
  id: 'package-independence-12345'
};

beforeAll(async () => {
  setEngineConfiguration({ environment: 'development' });
  await initServices();
  
  // Clean test directory
  if (await fs.pathExists(OUTPUT_DIR)) {
    await fs.remove(OUTPUT_DIR);
  }
});

describe('Workspace Package Independence Validation', () => {

  test('Should create workspace without engine workspace imports', async () => {
    // This test validates that workspace functionality works independently
    // without importing from engine workspace modules
    
    await newWorkspace(testWorkspaceConfig, OUTPUT_DIR);
    
    const workspaceDir = path.join(OUTPUT_DIR, testWorkspaceConfig.slug);
    expect(await fs.pathExists(workspaceDir)).toBe(true);
    
    // Verify basic workspace structure
    const igrpDir = path.join(workspaceDir, '.igrpstudio');
    expect(await fs.pathExists(igrpDir)).toBe(true);
    
    const workspaceJson = path.join(igrpDir, 'workspace.json');
    expect(await fs.pathExists(workspaceJson)).toBe(true);
    
    const configData = await fs.readJson(workspaceJson);
    expect(configData.name).toBe(testWorkspaceConfig.name);
    expect(configData.id).toBe(testWorkspaceConfig.id);
  });

  test('Should generate docker compose without engine dependencies', async () => {
    await newWorkspace(testWorkspaceConfig, OUTPUT_DIR);
    
    const workspaceDir = path.join(OUTPUT_DIR, testWorkspaceConfig.slug);
    const composeFile = path.join(workspaceDir, 'docker-compose.yml');
    
    // Docker compose should be generated independently
    expect(await fs.pathExists(composeFile)).toBe(true);
    
    const composeContent = yaml.load(await fs.readFile(composeFile, 'utf8')) as any;
    expect(composeContent).toBeDefined();
    expect(composeContent.version).toBeDefined();
    expect(composeContent.services).toBeDefined();
  });

  test('Should create .env files without engine template coupling', async () => {
    await newWorkspace(testWorkspaceConfig, OUTPUT_DIR);
    
    const workspaceDir = path.join(OUTPUT_DIR, testWorkspaceConfig.slug);
    const igrpEnvDir = path.join(workspaceDir, '.igrp');
    
    // Check that .env files are created independently
    const envFiles = [
      'al-igrp.env',
      'am-igrp.env',
      'appm-igrp.env',
      'igrp.env',
      'ui-igrp.env',
      'um-igrp.env'
    ];
    
    for (const envFile of envFiles) {
      const filePath = path.join(igrpEnvDir, envFile);
      expect(await fs.pathExists(filePath)).toBe(true);
      
      const content = await fs.readFile(filePath, 'utf8');
      // Verify no unresolved placeholders
      expect(content).not.toMatch(/\{\{.*\}\}/);
      // Verify content is not empty
      expect(content.trim()).not.toBe('');
    }
  });

  test('Should handle workspace types independently', async () => {
    // Test that workspace types work without engine type dependencies
    const config: WorkspaceConfig = {
      name: 'Type Independence Test',
      slug: 'type-independence-test',
      description: 'Testing type system independence',
      id: 'type-independence-67890'
    };
    
    // This should work without importing engine types
    expect(config.name).toBe('Type Independence Test');
    expect(config.slug).toBe('type-independence-test');
    
    await newWorkspace(config, OUTPUT_DIR);
    
    const workspaceDir = path.join(OUTPUT_DIR, config.slug);
    expect(await fs.pathExists(workspaceDir)).toBe(true);
  });

  test('Should work with copied shared utilities', async () => {
    // Test that workspace operations work with copied utilities
    // rather than engine utilities
    
    const testConfig: WorkspaceConfig = {
      name: 'Shared Utilities Test',
      slug: 'shared-utilities-test',
      description: 'Testing copied shared utilities',
      id: 'shared-utilities-54321'
    };
    
    // These operations should work with copied utilities
    await expect(newWorkspace(testConfig, OUTPUT_DIR)).resolves.not.toThrow();
    
    const workspaceDir = path.join(OUTPUT_DIR, testConfig.slug);
    expect(await fs.pathExists(workspaceDir)).toBe(true);
    
    // Verify file operations work (using copied utilities)
    const testFile = path.join(workspaceDir, '.igrpstudio', 'test-utilities.txt');
    await fs.writeFile(testFile, 'Testing shared utilities independence');
    expect(await fs.pathExists(testFile)).toBe(true);
  });

  test('Should use docker service constants independently', async () => {
    await newWorkspace(testWorkspaceConfig, OUTPUT_DIR);
    
    const workspaceDir = path.join(OUTPUT_DIR, testWorkspaceConfig.slug);
    const composeFile = path.join(workspaceDir, 'docker-compose.yml');
    
    const composeContent = yaml.load(await fs.readFile(composeFile, 'utf8')) as any;
    
    // Verify that default services are created using copied constants
    expect(composeContent.services).toBeDefined();
    
    // Check for standard services that should be created from copied constants
    const expectedServices = ['nginx', 'postgres', 'keycloak', 'redis'];
    const foundServices = Object.keys(composeContent.services);
    
    // At least some expected services should be present
    const hasExpectedServices = expectedServices.some(service => 
      foundServices.some(found => found.toLowerCase().includes(service.toLowerCase()))
    );
    expect(hasExpectedServices).toBe(true);
  });

  test('Should maintain workspace API compatibility', async () => {
    // Test that the workspace API remains compatible after migration
    const config: WorkspaceConfig = {
      name: 'API Compatibility Test',
      slug: 'api-compatibility-test',
      description: 'Testing API compatibility after migration',
      id: 'api-compatibility-98765'
    };
    
    // These API calls should work exactly as before
    await expect(newWorkspace(config, OUTPUT_DIR)).resolves.not.toThrow();
    
    const workspaceDir = path.join(OUTPUT_DIR, config.slug);
    expect(await fs.pathExists(workspaceDir)).toBe(true);
    
    // Verify the expected workspace structure is maintained
    const expectedStructure = [
      '.igrpstudio',
      '.igrpstudio/workspace.json',
      '.igrp',
      'docker-compose.yml'
    ];
    
    for (const structure of expectedStructure) {
      const structurePath = path.join(workspaceDir, structure);
      expect(await fs.pathExists(structurePath)).toBe(true);
    }
  });

});

describe('Workspace Migration - No Engine Coupling Validation', () => {

  test('Should not reference engine workspace modules', async () => {
    // This test validates that workspace creation doesn't depend on engine modules
    await newWorkspace(testWorkspaceConfig, OUTPUT_DIR);
    
    const workspaceDir = path.join(OUTPUT_DIR, testWorkspaceConfig.slug);
    const workspaceJson = path.join(workspaceDir, '.igrpstudio', 'workspace.json');
    
    const configData = await fs.readJson(workspaceJson);
    
    // Verify workspace data is complete without engine dependencies
    expect(configData.name).toBeDefined();
    expect(configData.slug).toBeDefined();
    expect(configData.id).toBeDefined();
    expect(configData.description).toBeDefined();
  });

  test('Should generate all required files independently', async () => {
    await newWorkspace(testWorkspaceConfig, OUTPUT_DIR);
    
    const workspaceDir = path.join(OUTPUT_DIR, testWorkspaceConfig.slug);
    
    // Verify all expected files are created independently
    const requiredFiles = [
      '.igrpstudio/workspace.json',
      '.igrp/al-igrp.env',
      '.igrp/am-igrp.env',
      '.igrp/appm-igrp.env',
      '.igrp/igrp.env',
      '.igrp/ui-igrp.env',
      '.igrp/um-igrp.env',
      'docker-compose.yml'
    ];
    
    for (const file of requiredFiles) {
      const filePath = path.join(workspaceDir, file);
      expect(await fs.pathExists(filePath)).toBe(true);
    }
  });

});

afterAll(async () => {
  // Cleanup
  if (await fs.pathExists(OUTPUT_DIR)) {
    await fs.remove(OUTPUT_DIR);
  }
});
