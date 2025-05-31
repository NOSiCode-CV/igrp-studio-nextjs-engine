# iGRP Studio Next.js Engine

A powerful engine for Next.js projects that serves as a dependency for iGRP Studio. This engine provides functionality to create and manage Next.js applications, pages, components, services, workspaces, and more.

## Overview

The Next.js Engine is designed to be injected as a dependency in the iGRP Studio. It exposes methods from `src/index.ts` that can be invoked to perform various actions such as creating new apps, pages, components, services, workspaces, etc. The engine receives JSON configurations and renders Next.js code, Docker services, or React code snippets, writing them to the target files.

## Installation

```bash
npm install @igrp/igrp-studio-nextjs-engine:latest
```

## Publishing

```bash
npm run build
npm run deploy
```

## Project Structure

```
nextjs-engine/
├── src/
│   ├── components/         # Component definitions and implementations
│   ├── code_snippets/      # Code snippet definitions
│   ├── docker_services/    # Docker service definitions
│   ├── helpers/            # Helper functions for specific tasks
│   ├── interfaces/         # TypeScript interfaces and types
│   ├── modules/            # Core functionality modules
│   ├── registries/         # Registry implementations
│   ├── schema/             # JSON validation schema definitions
│   ├── utils/              # Utility functions and constants
│   └── index.ts            # Main entry point and API exports
├── public/                 # Public assets and templates
├── __test__/               # Test files
└── package.json            # Project dependencies and scripts
```

## Core Functionality

The Next.js Engine provides the following core functionality:

### Application Management

- **Creating New Applications**: Generate new Next.js applications with the required directory structure, configuration files, and dependencies.
- **Page Generation**: Create new pages with the specified components, layouts, and functionality.
- **Component Management**: Add, modify, and delete components within pages.
- **Workspace Management**: Create and manage workspaces containing multiple projects.

## Generation Flow

This section provides a detailed explanation of the flow from the API calls in `src/index.ts` through each method until the target file is generated.

### Creating a New Workspace

The `newWorkspace` method is the entry point for creating a new workspace. Here's the detailed flow:

1. **API Call**: The process begins when a client calls the `newWorkspace` function exported from `src/index.ts`, providing a workspace configuration object and a base path.

   ```typescript
   // Client code
   import { newWorkspace } from 'nextjs-engine';

   const workspaceConfig = {
     name: 'my-workspace',
     description: 'My Next.js Workspace',
     // Additional configuration...
   };

   await newWorkspace(workspaceConfig, '/path/to/destination');
   ```

2. **Configuration Validation**: The workspace configuration is validated against a JSON schema to ensure it contains all required properties and that they are of the correct type.

3. **Directory Creation**: The engine creates the workspace directory structure at the specified base path.
   - It first checks if the directory exists and is empty.
   - If the directory doesn't exist, it creates it.
   - If the directory exists but isn't empty, it may throw an error or merge the content based on configuration.

4. **Template Processing**: The engine processes workspace templates from the `public/templates/workspace` directory.
   - It uses Handlebars as the templating engine to replace placeholders with actual values from the configuration.
   - Templates include files like `igrp-compose.yml`, `.igrp.env`, and other configuration files needed for an iGRP Workspace.

5. **File Generation**: The processed templates are written to the appropriate locations in the workspace directory.
   - The engine uses Node.js file system operations to write the files.
   - It creates the directory structure if it doesn't exist.

6. **Environment Setup**: The engine sets up environment variables and other configuration needed for the workspace.
   - This includes creating `.env` files, setting up Docker configurations if needed, and configuring any other environment-specific settings.

### Creating a New Application

The `newApp` method is the entry point for creating a new Next.js application. Here's the detailed flow:

1. **API Call**: The process begins when a client calls the `newApp` function exported from `src/index.ts`, providing an application configuration object and a base path.

   ```typescript
   // Client code
   import { newApp } from 'nextjs-engine';

   const appConfig = {
     name: 'my-app',
     description: 'My Next.js Application',
     // Additional configuration...
   };

   await newApp(appConfig, '/path/to/destination');
   ```

2. **Configuration Validation**: The application configuration is validated against a JSON schema to ensure it contains all required properties and that they are of the correct type.

3. **Directory Creation**: The engine creates the application directory structure at the specified base path.
   - It first checks if the directory exists and is empty.
   - If the directory doesn't exist, it creates it.
   - If the directory exists but isn't empty, it may throw an error or merge the content based on configuration.

4. **Base Project Extraction**: The engine extracts the ZIP template with the base project files that are not present in the engine as Handlebars templates.

5. **Template Processing**: The engine processes application templates from the `public/templates/app` directory.
   - It uses Handlebars as the templating engine to replace placeholders with actual values from the configuration.
   - Templates include files like `package.json`, `next.config.js`, `tsconfig.json`, and other configuration files needed for a Next.js application.

6. **File Generation**: The processed templates are written to the appropriate locations in the application directory.
   - The engine uses Node.js file system operations to write the files.
   - It creates the directory structure if it doesn't exist.

### Generating a New Page

The `newPage` method is the entry point for generating a page in a Next.js application. Here's the detailed flow:

1. **API Call**: The process begins when a client calls the `newPage` function exported from `src/index.ts`, providing a page configuration object and a base path.

   ```typescript
   // Client code
   import { newPage } from 'nextjs-engine';

   const pageConfig = {
     name: 'home',
     route: '/',
     layout: {
       // Layout configuration...
     },
     // Additional configuration...
   };

   await newPage(pageConfig, '/path/to/app');
   ```

2. **Configuration Validation**: The page configuration is validated against a JSON schema to ensure it contains all required properties and that they are of the correct type.

3. **Path Resolution**: The engine resolves the path where the page should be created.
   - For Next.js applications, this is typically in the `pages` or `app` directory, depending on the Next.js version and routing system being used.

4. **Component Resolution**: The engine resolves any components that should be included in the page.
   - This involves looking up component definitions in the component registry.
   - Components are instantiated with their properties as specified in the configuration.

5. **Layout Processing**: The engine processes the layout configuration for the page.
   - This includes determining the layout structure, such as headers, footers, sidebars, and main content areas.
   - The layout is rendered using a template system, typically Handlebars.

6. **Template Processing**: The engine processes page templates from the `public/templates/app/page` directory.
   - It uses Handlebars as the templating engine to replace placeholders with actual values from the configuration.
   - Templates include the page component, any imports needed, and the layout structure.

7. **Component Rendering**: Each component in the page is rendered using its own rendering logic.
   - Components are rendered accordingly with their renderer that could be default for basic `div` components, Handlebars for components that requires instantiation and custom for custom components instantiation
   - Components are rendered recursively, with child components being rendered within their parents.
   - The rendered components are inserted into the page template.

8. **File Generation**: The processed templates are written to the appropriate locations in the application directory.
   - The engine uses Node.js file system operations to write the files.
   - It creates the directory structure if it doesn't exist.

### Generating a New Component

The `newComponent` method is the entry point for creating a new component in a Next.js application. Here's the detailed flow:

1. **API Call**: The process begins when a client calls the `newComponent` function exported from `src/index.ts`, providing a component configuration object and a base path.

   ```typescript
   // Client code
   import { newComponent } from 'nextjs-engine';

   const componentConfig = {
     name: 'MyButton',
     type: 'button',
     properties: {
       label: 'Click Me',
       // Additional properties...
     },
     // Additional configuration...
   };

   await newComponent(componentConfig, '/path/to/app');
   ```

2. **Configuration Validation**: The component configuration is validated against a JSON schema to ensure it contains all required properties and that they are of the correct type.

3. **Component Type Resolution**: The engine resolves the component type from the registry.
   - This involves register the component definition in the component registry based on the `name` property.
   - The component definition includes information about how to render the component, its properties, interactions, styles and any other attributes.

4. **Path Resolution**: The engine resolves the path where the component should be created.
   - For Next.js applications, this is typically in the `components` directory.

5. **Template Processing**: The engine processes component templates from the `public/templates/component` directory or from the component's own template.
   - It uses Handlebars as the templating engine to replace placeholders with actual values from the configuration.
   - Templates include the component implementation, any imports needed, and the component's properties.

6. **Property Processing**: The engine processes the component's properties as specified in the configuration.
   - Properties are validated against the component's property schema.
   - Default values are applied for any properties not specified in the configuration.

7. **File Generation**: The processed templates are written to the appropriate locations in the application directory.
   - The engine uses Node.js file system operations to write the files.
   - It creates the directory structure if it doesn't exist.

### Adding a Component to a Page

The `addComponentToPage` method is the entry point for adding a component to an existing page. Here's the detailed flow:

1. **API Call**: The process begins when a client calls the `addComponentToPage` function exported from `src/index.ts`, providing a configuration object and a base path.

   ```typescript
   // Client code
   import { addComponentToPage } from 'nextjs-engine';

   const config = {
     pageId: 'home',
     component: {
       type: 'button',
       properties: {
         label: 'Click Me',
         // Additional properties...
       },
       // Additional configuration...
     },
   };

   await addComponentToPage(config, '/path/to/app');
   ```

2. **Configuration Validation**: The configuration is validated against a JSON schema to ensure it contains all required properties and that they are of the correct type.

3. **Page Resolution**: The engine resolves the page where the component should be added.
   - This involves finding the page file based on the `pageId` property.
   - The page file is parsed to understand its structure.

4. **Component Type Resolution**: The engine resolves the component type from the registry.
   - This involves looking up the component definition in the component registry based on the `name` property.
   - The component definition includes information about how to render the component, its properties, and any dependencies.

5. **Component Rendering**: The component is rendered using its own rendering logic.
   - The rendered component is prepared for insertion into the page.

6. **Page Modification**: The engine modifies the page file to include the new component.
   - This may involve adding imports for the component.
   - The component is inserted at the appropriate location in the page's JSX structure.

7. **File Update**: The modified page file is written back to disk.
   - The engine uses Node.js file system operations to write the file.

### File Generation Process

The file generation process is a critical part of the Next.js Engine. Here's a detailed explanation of how files are generated:

1. **Template Loading**: The engine loads templates from the `public/templates` directory or from component-specific templates.
   - Templates are typically Handlebars templates with placeholders for dynamic content.

2. **Data Preparation**: The engine prepares the data that will be used to fill the template placeholders.
   - This data comes from the configuration objects provided to the API methods.
   - The data may be transformed or enhanced before being used in the templates.

3. **Template Rendering**: The engine renders the templates using Handlebars.
   - Placeholders in the templates are replaced with actual values from the prepared data.
   - Handlebars helpers may be used to perform more complex transformations or conditionals.

4. **Path Resolution**: The engine resolves the path where the generated file should be written.
   - This involves determining the appropriate directory structure based on the file type and configuration.

5. **Directory Creation**: The engine creates any directories needed for the file path.
   - This ensures that the directory structure exists before attempting to write the file.

6. **File Writing**: The engine writes the rendered content to the specified file path.
   - This is typically done using Node.js file system operations.
   - The engine may check if the file already exists and handle conflicts based on configuration.

### Component System

The engine uses a register pattern for components, making it easy to add and remove components. Each component has:

- **index.ts**: Contains the component implementation and rendering logic.
- **properties.ts**: Defines the component's properties, including JSON schema for validation.

Components are registered in the `register.ts` file, which makes them available to the engine and exposes their configuration to iGRP Studio.

### Docker Service System

Similar to components, Docker services use the register pattern:

- Each service has its own directory with an `index.ts` and `properties.ts` file.
- The `properties.ts` file contains the properties for a Docker Compose service, exposed as a JSON schema.
- Services are registered in the `docker_services/register.ts` file.

### Code Snippets System

Code snippets follow the same register pattern:

- Each snippet has its own directory with an `index.ts` and `properties.ts` file.
- Snippets are registered in the `code_snippets/register.ts` file.

## API Documentation

### Main Exports

The main API is exported from `src/index.ts`:

#### Application Management

```typescript
// Create a new workspace
export const newWorkspace = async (
  workspaceConfig: WorkspaceConfig,
  basePath: string
): Promise<void>;

// Create a new application
export const newApp = async (
  baseConfig: AppConfig,
  basePath: string
): Promise<void>;

// Create a new page
export const newPage = async (
  pageConfig: PageConfig,
  basePath: string
): Promise<void>;

// Create a new component
export const newComponent = async (
  componentConfig: ComponentConfig,
  basePath: string
): Promise<void>;

// Add a component to a page
export const addComponentToPage = async (
  config: PageComponentConfig,
  basePath: string
): Promise<void>;

// Load application exports configuration
export async function loadAppExports(
  basePath: string
): Promise<AppExportsConfig>;
```

#### Registration

```typescript
// Register custom components
export const registerComponents = (
  config: ComponentRegistrationConfig
): void;

// Register custom Docker services
export const registerServices = (
  config: DockerServiceRegistrationConfig
): void;

// Register custom code snippets
export const registerCodeSnippets = (
  config: CodeSnippetRegistrationConfig
): void;
```

### Component Configuration

Components are configured using the `ComponentConfig` interface:

```typescript
export interface ComponentConfig extends IdentifiableElement {
  name: string;
  type: string;
  properties: Record<string, any>;
  children?: ComponentConfig[];
  // Additional properties...
}
```

### Page Configuration

Pages are configured using the `PageConfig` interface:

```typescript
export interface PageConfig extends IdentifiableElement {
  name: string;
  route: string;
  layout: Layout;
  meta?: PageMetaConfig;
  // Additional properties...
}
```

### Docker Service Configuration

Docker services are configured using the `DockerServiceRegisterConfig` interface:

```typescript
export interface DockerServiceRegisterConfig {
  name: string;
  properties: Record<string, any>;
  // Additional properties...
}
```

## Component System Details

### Component Registration

Components are registered using the `registerAllComponents` function in `src/components/register.ts`. This function registers all built-in components and makes them available to the engine.

Custom components can be registered using the `registerComponents` function exported from `src/index.ts`.

### Component Structure

Each component follows a similar structure:

1. **index.ts**: Contains the component implementation, including:
   - A function to render the component
   - Logic to handle component properties
   - Template rendering using Handlebars

2. **properties.ts**: Defines the component's properties, including:
   - JSON schema for validation
   - Default values
   - Property descriptions

### Component Variants

Components can have variants, which are different configurations of the same component. Variants are defined in the component's registration and can be used to provide different styles or behaviors for the component.

## Docker Service Details

### Service Registration

Docker services are registered using the `registerAllServices` function in `src/docker_services/register.ts`. This function registers all built-in services and makes them available to the engine.

### Service Structure

Each Docker service follows a similar structure:

1. **index.ts**: Contains the service implementation, including:
   - A function to render the service configuration
   - Logic to handle service properties
   - Template rendering using Handlebars

2. **properties.ts**: Defines the service's properties, including:
   - JSON schema for validation
   - Default values
   - Property descriptions

## Code Snippets Details

### Snippet Registration

Code snippets are registered using the `registerAllCodeSnippets` function in `src/code_snippets/register.ts`. This function registers all built-in snippets and makes them available to the engine.

### Snippet Structure

Each code snippet follows a similar structure:

1. **index.ts**: Contains the snippet implementation, including:
   - A function to render the snippet
   - Logic to handle snippet properties
   - Template rendering using Handlebars

2. **properties.ts**: Defines the snippet's properties, including:
   - JSON schema for validation
   - Default values
   - Property descriptions

## Utility Functions

The engine provides various utility functions to help with common tasks:

### Template Rendering

```typescript
// Replace template placeholders with values
export function replaceTemplate(
  template: string,
  values: Record<string, any>
): string;
```

### File System Operations

```typescript
// Get the directory path for a file
export function getDirectoryPath(filePath: string): string;

// Check if a directory is empty
export function checkIfDirectoryIsEmpty(dirPath: string): boolean;
```

### Configuration Loading

```typescript
// Load configuration from a file
export function loadConfig(configPath: string): any;

// Load page configuration
export function loadPageConfig(pagePath: string): PageConfig;
```

## Usage Examples

### Creating a New Application

```typescript
import { newApp } from 'nextjs-engine';

const appConfig = {
  name: 'my-app',
  description: 'My Next.js Application',
  // Additional configuration...
};

newApp(appConfig, '/path/to/destination');
```

### Creating a New Page

```typescript
import { newPage } from 'nextjs-engine';

const pageConfig = {
  name: 'home',
  route: '/',
  layout: {
    // Layout configuration...
  },
  // Additional configuration...
};

newPage(pageConfig, '/path/to/app');
```

### Adding a Component to a Page

```typescript
import { addComponentToPage } from 'nextjs-engine';

const componentConfig = {
  pageId: 'home',
  component: {
    type: 'button',
    properties: {
      label: 'Click Me',
      // Additional properties...
    },
    // Additional configuration...
  },
};

addComponentToPage(componentConfig, '/path/to/app');
```

### Registering a Custom Component

```typescript
import { registerComponents } from 'nextjs-engine';

const customComponentConfig = {
  components: [
    {
      name: 'MyCustomComponent',
      type: 'myCustomComponent',
      // Additional configuration...
    },
  ],
  imports: [
    'import { MyCustomComponent } from "@components/myCustomComponent"',
  ],
  // Additional configuration...
};

registerComponents(customComponentConfig);
```

## Unit Testing

The Next.js Engine includes a comprehensive suite of unit tests to ensure that all functionality works as expected. Here's how to work with the tests:

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will run all tests in the `__test__` directory using Jest.

To run a specific test file, use:

```bash
npm test -- __test__/path/to/test.test.ts
```

### Test Structure

The tests are organized in the `__test__` directory, with test files corresponding to the functionality they test. For example:

- `newWorkspace.test.ts`: Tests for creating new workspaces
- `newApp.test.ts`: Tests for creating new applications
- `newPage.test.ts`: Tests for creating new pages
- `newComponent.test.ts`: Tests for creating new components
- `addComponentToPage.test.ts`: Tests for adding components to pages

Each test file typically includes multiple test cases that cover different aspects of the functionality being tested.

### Test Coverage

The engine aims for high test coverage to ensure that all functionality is properly tested. You can generate a test coverage report using:

```bash
npm run test:coverage
```

This will generate a coverage report in the `coverage` directory, which you can open in a browser to see detailed coverage information.

## Contributing

Contributions to the Next.js Engine are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes
4. Write tests for your changes
5. Run the tests to ensure they pass
6. Submit a pull/merge request
