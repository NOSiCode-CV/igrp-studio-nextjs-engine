import { initComponents, loadRegistry } from '../src';

describe('Load Components', () => {

  beforeAll(async () => {
    await initComponents();
  });

  test('Get component', async () => {
     console.log("Generic : ", loadRegistry().components.find((it) => it.name === 'dropdown')?.childrenTypes);
     console.log("Table : ", loadRegistry().components.find((it) => it.name === 'table')?.acceptedChildren.find((it) => it.name === 'dropdown')?.childrenTypes);
  });

});
