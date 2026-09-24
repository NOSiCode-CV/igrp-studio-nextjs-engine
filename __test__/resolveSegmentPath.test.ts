import { resolveSegmentPath } from '../src/helpers/componentPropertiesHelper';
import { Segment } from '../src/interfaces/types';

describe('Resolve Segment Path', () => {
  test('removes route groups and resolves dynamic segments', () => {
    const route = '(utente)/utentes/[id]/[id2]';
    const segments: Segment[] = [
      {
        name: '[id]',
        value: '1',
        context: 'variable',
      },
      {
        name: '[id2]',
        value: '2',
        context: 'variable',
      },
    ];

    expect(resolveSegmentPath(route, segments)).toBe('/utentes/1/2');
  });
});
