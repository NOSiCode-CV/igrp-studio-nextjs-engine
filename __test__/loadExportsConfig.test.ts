import { initComponents, loadAppExports } from '../src';
import { OUTPUT_TAXPAYER_TEST, OUTPUT_TEST2 } from '../src/utils/testPath';

//export const WORKSPACE_DIR = "C:\\Users\\marcelo.monteiro\\IdeaProjects\\inss";
//export const OUTPUT_DIR = WORKSPACE_DIR + "\\projects\\inss-sisgb-core-cadastro-frontend";

export const OUTPUT_DIR = "C:\\Users\\marcelo.monteiro\\IdeaProjects\\inss-sisgb-core-cadastro-frontend"
//export const OUTPUT_DIR = OUTPUT_TEST2

describe('Load Exports', () => {

  beforeAll(async () => {
    await initComponents();
  });

  test('Get exports', async () => {
     console.log(JSON.stringify(await loadAppExports(OUTPUT_DIR)));
    //console.log((await loadAppExports(OUTPUT_DIR)).actions.map((action) => action.args));
    //console.log((await loadAppExports(OUTPUT_DIR)).types.map((type) => type.fields));
  });

});
