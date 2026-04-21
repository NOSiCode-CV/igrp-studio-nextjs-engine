# Workspace Migration Validation Test Guide

This guide validates the feature described in `docs/WORKSPACE_MIGRATION.md`.

The goal is to prove that:
- `@igrp/igrp-workspace-engine` builds and functions independently
- `@igrp/igrp-studio-nextjs-engine` builds without any workspace code
- All workspace functionality works through the new standalone package
- Zero coupling remains between the two packages
- Template downloads from Sonatype work correctly
- Placeholder replacement functions properly

---

## Scope

This guide covers every workspace operation that must be validated in the new architecture:

| Area | Covered here |
| --- | --- |
| Package build validation | Yes |
| Workspace function exports | Yes |
| Template download from Sonatype | Yes |
| Placeholder replacement | Yes |
| Project/service management | Yes |
| Workspace creation flow | Yes |
| Dependency independence | Yes |
| Import/export validation | Yes |

---

## Source Coverage

This guide was derived from the workspace migration reference:
- `docs/WORKSPACE_MIGRATION.md`
- `src/index.ts` - workspace exports removal
- `src/modules/workspace/` - all 9 workspace modules
- `src/schema/baseWorkspace.ts` and `src/schema/workspaceProjectConfig.ts`
- `src/interfaces/types.ts` - workspace types
- `public/templates/workspace/` - .env templates
- `src/docker_services/` - service name constants
- `src/utils/` and `src/modules/common/` - shared utilities

---

## Test Strategy

Use 4 validation layers together:

1. **Static code validation**
2. **Build validation** 
3. **Runtime API validation**
4. **Network/file validation**

---

## Jest Unit Test Implementation

### Overview
In addition to manual validation scenarios below, implement Jest unit tests in `__test__/` folder following Next.js Engine patterns:

### Test Structure
```typescript
// Example test file: __test__/workspaceMigration.test.ts
import { 
  newWorkspace, 
  addProjectToWorkspace, 
  removeProjectFromWorkspace,
  initServices,
  setEngineConfiguration
} from '../src';
import { WorkspaceConfig, ProjectWorkspace } from '../src/interfaces/types';
import { OUTPUT_WORKSPACE_TEST } from '../src/utils/testPath';

beforeAll(async () => {
  setEngineConfiguration({ environment: 'development' });
  await initServices();
});

describe('Workspace Migration Tests', () => {
  test('Should create workspace independently', async () => {
    const config: WorkspaceConfig = {
      name: 'Test Workspace',
      slug: 'test-workspace',
      id: 'test-123'
    };
    
    await newWorkspace(config, OUTPUT_WORKSPACE_TEST);
    // Verify workspace structure exists
  });
});
```

### Key Test Areas

#### 1. Package Independence Tests
- **Workspace Creation**: Verify `newWorkspace()` works without engine coupling
- **Project Management**: Test `addProjectToWorkspace()`, `updateProjectToWorkspace()`, `removeProjectFromWorkspace()`
- **Service Management**: Test service CRUD operations independently
- **File Operations**: Verify workspace files are created correctly

#### 2. Template Independence Tests  
- **Placeholder Replacement**: Test template variables are resolved correctly
- **Environment Files**: Verify `.env` files are generated without unresolved placeholders
- **Template Downloads**: Test Sonatype template fetching works independently

#### 3. Type System Tests
- **Interface Independence**: Verify workspace types work without engine types
- **Function Signatures**: Test all workspace functions accept correct parameters
- **Return Types**: Verify functions return expected data structures

#### 4. Utility Independence Tests
- **File System Operations**: Test file operations work with copied utilities
- **Path Resolution**: Verify paths are resolved correctly in new package
- **Error Handling**: Test error scenarios are handled properly

### Test Data Patterns

#### Mock Workspace Config
```typescript
const testWorkspaceConfig: WorkspaceConfig = {
  name: 'Test Migration Workspace',
  slug: 'test-migration-workspace', 
  description: 'Workspace for migration testing',
  id: 'test-migration-id-12345'
};
```

#### Mock Project Config
```typescript
const testProjectConfig: ProjectWorkspace = {
  id: 'test-project-123',
  config: {
    type: 'nextjs',
    name: 'test-nextjs-app',
    description: 'Test NextJS application',
    projectStructureStyle: 'simple'
  }
};
```

#### Mock Service Config
```typescript
const testServiceConfig: ServiceWorkspace = {
  id: 'test-service-123',
  service: {
    id: 'redis-service-123',
    name: 'test-redis',
    properties: {
      image: 'redis:latest',
      container_name: 'test-redis',
      restart: 'always',
      ports: [{ internal: 6379, external: 6379 }],
      environments: [{ key: 'REDIS_PASSWORD', value: 'test123' }]
    }
  }
};
```

### Running Tests

#### Execute All Tests
```bash
npm test
```

#### Execute Specific Test File
```bash
npm test -- --testPathPattern="workspaceMigration.test.ts"
```

#### Execute with Coverage
```bash
npm test -- --coverage
```

### Test Environment Setup

#### Test Directory Constants
```typescript
import { OUTPUT_WORKSPACE_TEST } from '../src/utils/testPath';
// Uses: c:\igrp-workspace\generatedWorkspace17
```

#### Service Initialization
```typescript
beforeAll(async () => {
  setEngineConfiguration({ environment: 'development' });
  await initServices();
});
```

#### Cleanup
```typescript
afterAll(async () => {
  if (await fs.pathExists(OUTPUT_WORKSPACE_TEST)) {
    await fs.remove(OUTPUT_WORKSPACE_TEST);
  }
});
```

### Expected Test Results

#### Successful Test Indicators
- ✅ All TypeScript compilation errors resolved
- ✅ Tests execute without runtime errors  
- ✅ Workspace directories created correctly
- ✅ Project/service operations work independently
- ✅ Template placeholders resolved
- ✅ No engine coupling detected

#### Common Issues to Debug
- **Missing ID fields**: All workspace objects require `id` property
- **Type mismatches**: Use correct interfaces (`ProjectWorkspace` vs `WorkspaceProjectsConfig`)
- **Path issues**: Ensure test output directory exists
- **Service initialization**: Call `initServices()` before tests

### Integration with Manual Tests

Use Jest unit tests to validate:
- **T20-T40 scenarios** programmatically
- **Static validation** through code analysis
- **Build validation** through import testing

Use manual tests to validate:
- **Network connectivity** to Sonatype
- **File system permissions** 
- **Docker compose execution**
- **End-to-end workflows**

---

## Manual Validation Scenarios
   - prove there are no workspace imports/exports in the engine
   - prove the new package exports all required functions
   - prove no coupling references remain

2. **Build validation**
   - prove both packages build independently
   - prove no import errors between packages
   - prove all dependencies are properly resolved

3. **Runtime API validation**
   - call every workspace function through the new package
   - verify Sonatype template downloads work
   - verify placeholder replacement works correctly

4. **Network / file system validation**
   - during runtime scenarios, verify Sonatype downloads occur
   - verify no local file dependencies remain
   - verify proper file generation in target directories

---

## Prerequisites

Set these variables before running the tests:

```bash
WORKSPACE_PACKAGE_PATH=/path/to/igrp-workspace-engine
ENGINE_PACKAGE_PATH=/path/to/igrp-studio-nextjs-engine
TEST_WORKSPACE_DIR=/tmp/test-workspace-$(date +%s)
SONATYPE_WORKSPACE_URL=https://repository.sonatype.org/service/local/artifact/maven/redirect?r=central&g=com.igrp&a=igrp-workspace-template&v=LATEST
TEST_WORKSPACE_CONFIG='{"name": "test-workspace", "description": "Test workspace for migration validation"}'
```

Recommended observability while testing:
- Enable build logs at INFO level
- Monitor network requests to Sonatype
- Capture file system operations during workspace creation
- Monitor package import resolution

### Dependency rule

Run setup and creation scenarios before any scenario that depends on their data:

- Build both packages successfully first
- Verify package independence before testing workspace functions
- Create test workspace directory before testing project/service operations
- Use fresh test data for each scenario to avoid collisions

### Test data dependency map

| Scenario | Depends on |
| --- | --- |
| T10 Package build validation | None |
| T20 Workspace creation | T10 |
| T30 Project management | T20 |
| T40 Service management | T20 |
| T50 Template validation | T10, T20 |

---

## Static Validation Scenarios

### T00 - No workspace imports/exports remain in engine

**Purpose**
- Prove that the engine no longer contains any workspace-related code.

**Checks**

Run searches from the engine project root:

```bash
# In ENGINE_PACKAGE_PATH
rg -n "workspace" src/ --type ts
rg -n "WorkspaceConfig|WorkspaceProjectsConfig" src/ --type ts
rg -n "newWorkspace|addProjectToWorkspace|removeProjectFromWorkspace" src/ --type ts
rg -n "addServiceToWorkspace|updateServiceToWorkspace|removeServiceToWorkspace" src/ --type ts
rg -n "saveCustomWorkspaceComposeFile" src/ --type ts
rg -n "src/modules/workspace" src/ --type ts
rg -n "public/templates/workspace" src/
```

**Expected result**
- No matches for:
  - workspace imports
  - workspace function exports
  - workspace module references
  - workspace template references

**Migration proof**
- Confirms that all workspace code has been removed from the engine.

---

### T01 - New package exports all required functions

**Purpose**
- Prove that the new workspace package provides the complete public API.

**Checks**

Run searches from the workspace package root:

```bash
# In WORKSPACE_PACKAGE_PATH
rg -n "export.*newWorkspace" src/ --type ts
rg -n "export.*addProjectToWorkspace" src/ --type ts
rg -n "export.*updateProjectToWorkspace" src/ --type ts
rg -n "export.*removeProjectFromWorkspace" src/ --type ts
rg -n "export.*addServiceToWorkspace" src/ --type ts
rg -n "export.*updateServiceToWorkspace" src/ --type ts
rg -n "export.*removeServiceFromWorkspace" src/ --type ts
rg -n "export.*saveCustomWorkspaceComposeFile" src/ --type ts
rg -n "export.*WorkspaceConfig|WorkspaceProjectsConfig" src/ --type ts
```

**Expected result**
- All 8 workspace functions are exported
- All required workspace types are exported
- No missing exports from the public API

**Migration proof**
- Confirms that the new package provides the complete workspace functionality.

---

## Build Validation Scenarios

### T10 - Both packages build independently

**Purpose**
- Prove that both packages can build without any coupling dependencies.

**Steps**

```bash
# Build workspace engine
cd "$WORKSPACE_PACKAGE_PATH"
npm run build

# Build nextjs-engine
cd "$ENGINE_PACKAGE_PATH"
npm run build
```

**Expected result**
- Both builds complete successfully
- No import errors in either package
- No missing dependencies
- Build artifacts generated correctly

**Migration proof**
- Previously, workspace code was coupled with engine code.
- Now both packages build independently.

---

### T11 - No cross-package import dependencies

**Purpose**
- Prove that neither package imports from the other.

**Checks**

```bash
# Check engine doesn't import workspace package
cd "$ENGINE_PACKAGE_PATH"
rg -n "@igrp/igrp-workspace-engine" package.json
rg -n "igrp-workspace-engine" src/ --type ts

# Check workspace package doesn't import engine
cd "$WORKSPACE_PACKAGE_PATH"
rg -n "@igrp/igrp-studio-nextjs-engine" package.json
rg -n "igrp-studio-nextjs-engine" src/ --type ts
```

**Expected result**
- No cross-package imports in either direction
- No cross-package dependencies in package.json files

**Migration proof**
- Confirms complete package independence.

---

## Runtime Validation Scenarios

## 1. Workspace Creation

### T20 - Create workspace using Sonatype template

**Former coupling point**
- `extractBaseWorkspace` using local ZIP file

**New package function**
- `newWorkspace` from `@igrp/igrp-workspace-engine`

**Test script**

```bash
cd "$WORKSPACE_PACKAGE_PATH"
node -e "
const { newWorkspace } = require('./dist/index.js');
const path = require('path');

const context = {
  targetPath: '$TEST_WORKSPACE_DIR',
  config: $TEST_WORKSPACE_CONFIG,
  template: {
    url: '$SONATYPE_WORKSPACE_URL'
  }
};

newWorkspace(context)
  .then(() => console.log('Workspace created successfully'))
  .catch(err => console.error('Workspace creation failed:', err));
"
```

**Expected result**
- `200 OK` equivalent response
- Workspace directory created at `$TEST_WORKSPACE_DIR`
- Docker compose file extracted from Sonatype ZIP
- .env files generated with placeholder replacement

**File system assertions**
- `$TEST_WORKSPACE_DIR/docker-compose.yml` exists
- `$TEST_WORKSPACE_DIR/.igrpstudio/workspace.json` exists
- Service .env files exist with proper values
- No local template file dependencies

**Migration proof**
- Workspace creation works through Sonatype download, not local files.
- No coupling to engine's template system.

---

### T21 - Placeholder replacement works correctly

**Purpose**
- Prove that workspace placeholders are replaced with actual values.

**Dependencies**
- Run **T20** first

**Checks**

```bash
# Check placeholder replacement in .env files
grep -r "test-workspace" "$TEST_WORKSPACE_DIR"
grep -r "Test workspace for migration validation" "$TEST_WORKSPACE_DIR/.igrpstudio/workspace.json"

# Verify no placeholder patterns remain
grep -r "{{.*}}" "$TEST_WORKSPACE_DIR" || echo "No placeholders found - good"
```

**Expected result**
- Workspace name appears in configuration files
- No unresolved placeholder patterns remain
- Configuration values match the input config

**Migration proof**
- Placeholder replacement works independently in the new package.

---

## 2. Project Management

### T30 - Add project to workspace

**Former coupling point**
- `addProjectToWorkspace` using engine utilities

**New package function**
- `addProjectToWorkspace` from `@igrp/igrp-workspace-engine`

**Test script**

```bash
cd "$WORKSPACE_PACKAGE_PATH"
node -e "
const { addProjectToWorkspace } = require('./dist/index.js');
const path = require('path');

const projectConfig = {
  name: 'test-project',
  type: 'nextjs',
  port: 3000,
  domains: ['localhost']
};

const context = {
  workspacePath: '$TEST_WORKSPACE_DIR',
  project: projectConfig
};

addProjectToWorkspace(context)
  .then(() => console.log('Project added successfully'))
  .catch(err => console.error('Project addition failed:', err));
"
```

**Expected result**
- Project configuration added to workspace
- Docker compose file updated with new project
- Project-specific .env file generated

**File system assertions**
- Project entry in `$TEST_WORKSPACE_DIR/.igrpstudio/workspace.json`
- Project service in docker-compose.yml
- Project .env file exists

**Migration proof**
- Project management works independently in the new package.

---

### T31 - Update project in workspace

**Former coupling point**
- `updateProjectToWorkspace` using engine utilities

**Test script**

```bash
cd "$WORKSPACE_PACKAGE_PATH"
node -e "
const { updateProjectToWorkspace } = require('./dist/index.js');

const updatedConfig = {
  name: 'test-project-updated',
  type: 'nextjs',
  port: 3001,
  domains: ['localhost', 'test.localhost']
};

const context = {
  workspacePath: '$TEST_WORKSPACE_DIR',
  projectName: 'test-project',
  project: updatedConfig
};

updateProjectToWorkspace(context)
  .then(() => console.log('Project updated successfully'))
  .catch(err => console.error('Project update failed:', err));
"
```

**Expected result**
- Project configuration updated in workspace
- Docker compose file reflects changes
- Updated .env file generated

**Migration proof**
- Project updates work independently in the new package.

---

### T32 - Remove project from workspace

**Test script**

```bash
cd "$WORKSPACE_PACKAGE_PATH"
node -e "
const { removeProjectFromWorkspace } = require('./dist/index.js');

const context = {
  workspacePath: '$TEST_WORKSPACE_DIR',
  projectName: 'test-project-updated'
};

removeProjectFromWorkspace(context)
  .then(() => console.log('Project removed successfully'))
  .catch(err => console.error('Project removal failed:', err));
"
```

**Expected result**
- Project removed from workspace configuration
- Docker compose file updated
- Project .env file removed

**Migration proof**
- Project removal works independently in the new package.

---

## 3. Service Management

### T40 - Add service to workspace

**Former coupling point**
- `addServiceToWorkspace` using engine docker services

**Test script**

```bash
cd "$WORKSPACE_PACKAGE_PATH"
node -e "
const { addServiceToWorkspace } = require('./dist/index.js');

const serviceConfig = {
  name: 'test-redis',
  type: 'redis',
  port: 6379,
  image: 'redis:latest'
};

const context = {
  workspacePath: '$TEST_WORKSPACE_DIR',
  service: serviceConfig
};

addServiceToWorkspace(context)
  .then(() => console.log('Service added successfully'))
  .catch(err => console.error('Service addition failed:', err));
"
```

**Expected result**
- Service configuration added to workspace
- Docker compose file updated with new service
- Service-specific configuration generated

**Migration proof**
- Service management uses copied docker service constants, not engine imports.

---

### T41 - Update service in workspace

**Test script**

```bash
cd "$WORKSPACE_PACKAGE_PATH"
node -e "
const { updateServiceToWorkspace } = require('./dist/index.js');

const updatedServiceConfig = {
  name: 'test-redis-updated',
  type: 'redis',
  port: 6380,
  image: 'redis:7-alpine'
};

const context = {
  workspacePath: '$TEST_WORKSPACE_DIR',
  serviceName: 'test-redis',
  service: updatedServiceConfig
};

updateServiceToWorkspace(context)
  .then(() => console.log('Service updated successfully'))
  .catch(err => console.error('Service update failed:', err));
"
```

**Migration proof**
- Service updates work independently in the new package.

---

### T42 - Remove service from workspace

**Test script**

```bash
cd "$WORKSPACE_PACKAGE_PATH"
node -e "
const { removeServiceToWorkspace } = require('./dist/index.js');

const context = {
  workspacePath: '$TEST_WORKSPACE_DIR',
  serviceName: 'test-redis-updated'
};

removeServiceToWorkspace(context)
  .then(() => console.log('Service removed successfully'))
  .catch(err => console.error('Service removal failed:', err));
"
```

**Migration proof**
- Service removal works independently in the new package.

---

## 4. Template and Network Validation

### T50 - Verify Sonatype download occurs

**Purpose**
- Prove that workspace templates are downloaded from Sonatype, not local files.

**Dependencies**
- Run **T20** first with network monitoring

**Steps**

```bash
# Monitor network calls during workspace creation
tcpdump -i any -n host repository.sonatype.org &
TCPDUMP_PID=$!

# Run workspace creation
cd "$WORKSPACE_PACKAGE_PATH"
node -e "
const { newWorkspace } = require('./dist/index.js');

const context = {
  targetPath: '$TEST_WORKSPACE_DIR-sonatype-test',
  config: $TEST_WORKSPACE_CONFIG,
  template: {
    url: '$SONATYPE_WORKSPACE_URL'
  }
};

newWorkspace(context)
  .then(() => console.log('Sonatype download test completed'))
  .catch(err => console.error('Sonatype download test failed:', err));
"

# Stop network monitoring
kill $TCPDUMP_PID
```

**Expected result**
- Network traffic to Sonatype repository observed
- Workspace template ZIP downloaded successfully
- No local file system access for templates

**Migration proof**
- Template acquisition is now Sonatype-based, not local file-based.

---

## Control Scenario

### T60 - Engine still builds without workspace code

**Purpose**
- Prove that removing workspace code didn't break the engine.

**Steps**

```bash
cd "$ENGINE_PACKAGE_PATH"
npm run build
npm test
```

**Expected result**
- Engine builds successfully
- All existing tests pass
- No workspace-related errors

**Migration proof**
- Engine functionality remains intact after workspace removal.

---

## Negative Business-Rule Scenarios

These validate that error handling still works after migration.

### T70 - Create workspace with invalid config

**Request**
- Repeat **T20** with invalid workspace configuration

**Expected**
- `400 Bad Request` equivalent validation error

### T71 - Add project with duplicate port

**Request**
- Repeat **T30** with a port that already exists in workspace

**Expected**
- `409 Conflict` equivalent validation error

### T72 - Remove non-existent project

**Request**
- Repeat **T32** with a project name that doesn't exist

**Expected**
- `404 Not Found` equivalent validation error

---

## Recommended Execution Order

1. Run **T00** and **T01** (static validation)
2. Run **T10** and **T11** (build validation)
3. Run **T60** to confirm engine still works
4. Create test workspace:
   - **T20**
   - **T21**
5. Run project management scenarios:
   - **T30**
   - **T31**
   - **T32**
6. Run service management scenarios:
   - **T40**
   - **T41**
   - **T42**
7. Run network validation:
   - **T50**
8. Run negative business-rule scenarios

---

## Final Acceptance Checklist

The workspace migration is validated only if all of the following are true:

- No workspace imports/exports remain in engine code
- New workspace package exports all 8 required functions
- Both packages build independently without errors
- No cross-package dependencies exist
- Workspace creation works with Sonatype template downloads
- Placeholder replacement functions correctly
- Project management operations work independently
- Service management operations work independently
- Network traffic shows Sonatype downloads, not local file access
- Engine functionality remains intact after workspace removal
- All business rules and validations still work correctly
