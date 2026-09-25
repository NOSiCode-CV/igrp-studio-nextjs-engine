import { initComponents, setEngineConfiguration } from '../src';
import type { Layout } from '../src/interfaces/types';
import { getComponent } from '../src/components';
import { renderLayout } from '../src/utils/renderLayout';

describe('Button asChild', () => {
  beforeAll(async () => {
    setEngineConfiguration({ environment: 'development' });
    await initComponents();
  });

  test('does not emit asChild for a leaf button from existing metadata', () => {
    const button: Layout = {
      id: 'button1',
      tag: 'button1',
      componentName: 'button',
      properties: { content: 'Open dialog', asChild: true },
      children: [],
    };

    const rendered = renderLayout(button);
    expect(rendered).toContain('<IGRPButton');
    expect(rendered).toContain('Open dialog');
    expect(rendered).not.toContain('asChild');
    expect(button.properties?.asChild).toBe(true);
  });

  test('does not offer asChild for leaf buttons in the component registry', () => {
    expect(getComponent('button')?.properties).not.toHaveProperty('asChild');
  });

  test('removes asChild from data bindings and custom properties on text buttons', () => {
    const button: Layout = {
      id: 'button1',
      tag: 'button1',
      componentName: 'button',
      properties: {
        content: 'Open dialog',
        commonProperties: { customProperties: { asChild: true, 'aria-label': 'Open dialog' } },
      },
      data: { asChild: { value: { code: 'true' } } },
      children: [],
    };

    const rendered = renderLayout(button);
    expect(rendered).not.toContain('asChild');
    expect(rendered).toContain('aria-label');
    expect(button.properties?.commonProperties?.customProperties?.asChild).toBe(true);
    expect(button.data?.asChild).toBeDefined();
  });

  test('removes asChild when content wins over a layout child', () => {
    const button: Layout = {
      id: 'button1',
      tag: 'button1',
      componentName: 'button',
      properties: { content: 'Open dialog', asChild: true },
      children: [{ id: 'child1', tag: 'child1', componentName: 'badge', properties: { content: 'Child' } }],
    };

    const rendered = renderLayout(button);
    expect(rendered).toContain('Open dialog');
    expect(rendered).not.toContain('asChild');
    expect(rendered).not.toContain('Child');
  });

  test('keeps asChild for a single rendered element child', () => {
    const button: Layout = {
      id: 'button1',
      tag: 'button1',
      componentName: 'button',
      properties: { asChild: true },
      children: [{ id: 'child1', tag: 'child1', componentName: 'badge', properties: { content: 'Child' } }],
    };

    const rendered = renderLayout(button);
    expect(rendered).toMatch(/<IGRPButton[^>]*asChild=\{\s*true\s*\}/);
    expect(rendered).toContain('<IGRPBadge');
  });

  test('removes asChild when the button has multiple element children', () => {
    const button: Layout = {
      id: 'button1',
      tag: 'button1',
      componentName: 'button',
      properties: { asChild: true },
      children: [
        { id: 'child1', tag: 'child1', componentName: 'badge', properties: { content: 'First' } },
        { id: 'child2', tag: 'child2', componentName: 'badge', properties: { content: 'Second' } },
      ],
    };

    const rendered = renderLayout(button);
    expect(rendered).not.toContain('asChild');
    expect(rendered).toContain('First');
    expect(rendered).toContain('Second');
  });
});
