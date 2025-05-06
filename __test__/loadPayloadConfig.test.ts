import { initComponents, loadPayloadMetadata, loadRegistry } from '../src';
import { OUTPUT_TEST } from '../src/utils/testPath';

const OUTPUT_DIR = OUTPUT_TEST;

describe('Load Payload', () => {

  beforeAll(async () => {
    await initComponents();
  });

  test('Get payload', async () => {
     console.log(JSON.stringify(await loadPayloadMetadata(OUTPUT_DIR)));
    //console.log((await loadPayloadMetadata(OUTPUT_DIR)).actions.map((action) => action.args));
    //console.log((await loadPayloadMetadata(OUTPUT_DIR)).types.map((type) => type.fields));
  });

});
