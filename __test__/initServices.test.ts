import { initServices, loadServiceRegistry } from '../src';

describe('Load Services', () => {

  beforeAll(async () => {
    await initServices();
  });

  test('Get service', async () => {
     console.log(loadServiceRegistry());
     //console.log("Generic : ", loadRegistry().components.find((it) => it.name === 'table')?.childrenTypes);
     //console.log("Specific : ", loadRegistry().components.find((it) => it.name === 'table')?.acceptedChildren.find((it) => it.name === 'tableColumns')?.childrenTypes);
  });

});
