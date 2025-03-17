import { initComponents, loadRegistry } from '../src';

describe('Load Components', () => {

  beforeAll(async () => {
    await initComponents();
  });

  test('Get component', async () => {
     //console.log(loadRegistry());
     console.log("Generic : ", loadRegistry().components.find((it) => it.name === 'table')?.childrenTypes);
     //console.log("Specific : ", loadRegistry().components.find((it) => it.name === 'table')?.acceptedChildren.find((it) => it.name === 'tableColumns')?.childrenTypes);
  });

});
