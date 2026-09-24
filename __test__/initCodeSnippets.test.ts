import { initCodeSnippets, loadCodeSnippetsRegistry } from '../src';

describe('Load Code Snippets', () => {
  beforeAll(async () => {
    await initCodeSnippets();
  });

  test('loads the code snippet registry', () => {
    expect(loadCodeSnippetsRegistry().codes.length).toBeGreaterThan(0);
  });
});
