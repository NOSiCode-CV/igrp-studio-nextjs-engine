import { initComponents, loadRegistry } from '../src';

describe('Load Components', () => {

  beforeAll(async () => {
    await initComponents();
  });

  test('Get component', async () => {
     console.log(loadRegistry());
  });

});
