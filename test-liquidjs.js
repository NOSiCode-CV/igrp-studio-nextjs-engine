const { newPage, initComponents, setEngineConfiguration } = require('./dist/index.cjs.js');
const fs = require('fs-extra');
const path = require('path');

async function testLiquidJS() {
  console.log('Starting LiquidJS test...\n');
  
  try {
    // Set engine configuration first
    console.log('Setting engine configuration...');
    setEngineConfiguration({
      environment: 'development'
    });
    
    // Initialize components (this will load partials internally)
    console.log(' Initializing components...');
    await initComponents();
    
    console.log('✅ Initialization complete\n');
    
    // Create a minimal valid page configuration
    const pageConfig = {
      type: "page",
      id: "test_page_001",
      pageName: "testPage",
      path: "test-page",
      types: [],
      imports: [],
      states: [],
      functions: [],
      args: [],
      components: {
        id: "page_testPage",
        componentName: "page",
        tag: "page_testPage",
        properties: {},
        interactions: {},
        data: {},
        children: []
      }
    };
    
    console.log(' Generating test page...');
    const testOutputPath = path.join(__dirname, 'test-output');
    
    // Clean up test output directory if it exists
    if (fs.existsSync(testOutputPath)) {
      fs.removeSync(testOutputPath);
    }
    
    await newPage(pageConfig, testOutputPath);
    
    console.log('✅ Page generation completed\n');
    
    // Check if files were generated
    const generatedPagePath = path.join(testOutputPath, 'src', 'app', 'pages', 'testPage', 'page.tsx');
    const generatedConfigPath = path.join(testOutputPath, '.igrpstudio', 'pages', 'testPage.json');
    
    if (fs.existsSync(generatedPagePath)) {
      console.log('✅ Page file generated:', generatedPagePath);
      const pageContent = fs.readFileSync(generatedPagePath, 'utf-8');
      console.log(' First 200 characters of generated page:');
      console.log(pageContent.substring(0, 200) + '...\n');
    } else {
      console.log('❌ Page file not generated at expected path');
    }
    
    if (fs.existsSync(generatedConfigPath)) {
      console.log('✅ Config file generated:', generatedConfigPath);
    } else {
      console.log('❌ Config file not generated at expected path');
    }
    
    console.log('\n LiquidJS test completed successfully!');
    
  } catch (error) {
    console.error('\n❌ LiquidJS test failed:');
    console.error(error);
    process.exit(1);
  }
}

testLiquidJS();
