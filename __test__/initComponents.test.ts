import { initComponents, loadRegistry } from '../src';
import path from 'path';
import fs from 'fs-extra';

describe('Load Components', () => {

  beforeAll(async () => {
    await initComponents();
  });

  test('Get component', async () => {
     console.log(JSON.stringify(loadRegistry()));
     //console.log("Generic : ", loadRegistry().components.find((it) => it.name === 'table')?.childrenTypes);
     //console.log("Specific : ", loadRegistry().components.find((it) => it.name === 'table')?.acceptedChildren.find((it) => it.name === 'tableColumns')?.childrenTypes);
  });

  test('Get component and write to file', async () => {
    try {
      const registryContent = loadRegistry();
      // Stringify the object with pretty printing (2 spaces indent) for readability
      const jsonString = JSON.stringify(registryContent);

      // Define the output path
      const outputPath = path.join(__dirname, '/output/registry.json');

      // Ensure the output directory exists (optional, but good practice)
      const outputDir = path.dirname(outputPath);
      await fs.mkdir(outputDir, { recursive: true });

      // Write the JSON string to the file
      await fs.writeFile(outputPath, jsonString, 'utf8');
      console.log(`Successfully wrote registry data to: ${outputPath}`);

    } catch (error) {
      console.error('Error writing registry file:', error);
      // Depending on your test framework, you might want to fail the test here
      throw error;
    }
  });


});
