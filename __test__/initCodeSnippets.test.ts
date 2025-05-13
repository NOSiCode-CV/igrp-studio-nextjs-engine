import { initCodeSnippets, loadCodeSnippetsRegistry } from '../src';

describe('Load Code Snippets', () => {

  beforeAll(async () => {
    await initCodeSnippets();
  });

  test('Get code snippets', async () => {
     console.log(loadCodeSnippetsRegistry());
  });

});
