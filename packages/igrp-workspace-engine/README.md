# @igrp/igrp-workspace-engine

Standalone workspace management package extracted from IGRP Studio Next.js Engine.

## Features

- Workspace creation and management
- Project and service management in workspaces
- Docker compose file generation
- Environment file templating
- Template download from Sonatype
- Placeholder replacement
- File system operations

## Installation

```bash
npm install @igrp/igrp-workspace-engine
```

## Usage

```typescript
import { 
  newWorkspace, 
  addProjectToWorkspace, 
  addServiceToWorkspace 
} from '@igrp/igrp-workspace-engine';

// Create a new workspace
await newWorkspace(workspaceConfig, '/path/to/workspace');

// Add project to workspace
await addProjectToWorkspace(projectConfig, '/path/to/workspace');

// Add service to workspace
await addServiceToWorkspace(serviceConfig, '/path/to/workspace');
```

## API

### Workspace Functions
- `newWorkspace(config, basePath)` - Create new workspace
- `addProjectToWorkspace(config, basePath)` - Add project to workspace
- `updateProjectToWorkspace(config, basePath)` - Update project in workspace
- `removeProjectFromWorkspace(projectId, basePath)` - Remove project from workspace
- `addServiceToWorkspace(config, basePath)` - Add service to workspace
- `updateServiceToWorkspace(config, basePath)` - Update service in workspace
- `removeServiceFromWorkspace(serviceId, basePath)` - Remove service from workspace
- `saveCustomWorkspaceComposeFile(yaml, basePath)` - Save custom compose file

### Configuration Types
- `WorkspaceConfig` - Workspace configuration
- `ProjectWorkspace` - Project workspace configuration
- `ServiceWorkspace` - Service workspace configuration
- `WorkspaceProjectsConfig` - Projects and services configuration

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Test
npm test

# Watch mode
npm run dev
```
