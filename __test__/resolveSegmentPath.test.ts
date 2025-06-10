import { resolveSegmentPath } from '../src/helpers/componentPropertiesHelper';
import { Segment } from '../src/interfaces/types';

describe('Resolve Segment Path', () => {

  beforeAll(async () => {
  });

  test('Resolve Segment Path', async () => {

    const path = '(utente)/utentes';
    const segments: Segment[] = [
      {
        name: '[id]',
        value: '1'
      },
      {
        name: '[id2]',
        value: '2'
      },
    ]

     console.log(resolveSegmentPath(path));
     //console.log("Generic : ", loadRegistry().components.find((it) => it.name === 'table')?.childrenTypes);
     //console.log("Specific : ", loadRegistry().components.find((it) => it.name === 'table')?.acceptedChildren.find((it) => it.name === 'tableColumns')?.childrenTypes);
  });

});
