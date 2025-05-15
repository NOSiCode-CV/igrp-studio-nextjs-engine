import { initComponents, loadAppExports } from '../src';
import { OUTPUT_TAXPAYER_TEST, OUTPUT_TEST } from '../src/utils/testPath';

const OUTPUT_DIR = OUTPUT_TAXPAYER_TEST;

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
