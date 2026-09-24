import { initComponents, loadRegistry } from '../src';

describe('Load Components', () => {
  beforeAll(async () => {
    await initComponents();
  });

  test('loads the component registry', () => {
    const registry = loadRegistry();

    expect(registry.components.length).toBeGreaterThan(0);
    expect(registry.components.some((component) => component.name === 'modalDialog')).toBe(true);
  });
});
