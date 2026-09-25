import { initComponents, setEngineConfiguration } from '../src';
import { getComponent, registryAsObject } from '../src/components';
import type { Layout } from '../src/interfaces/types';
import { renderLayout } from '../src/utils/renderLayout';

describe('Modal Dialog Trigger', () => {
  beforeAll(async () => {
    setEngineConfiguration({ environment: 'development' });
    await initComponents();
  });

  test('delegates rendering to its button child', () => {
    const trigger: Layout = {
      id: 'modalDialogTrigger1',
      tag: 'modalDialogTrigger1',
      componentName: 'modalDialogTrigger',
      properties: {
        commonProperties: {
          generateReference: false,
        },
      },
      children: [
        {
          id: 'button1',
          tag: 'button1',
          componentName: 'button',
          properties: {
            content: 'Open dialog',
            variant: 'default',
            size: 'default',
          },
        },
      ],
    };

    const rendered = renderLayout(trigger);

    expect(rendered).toMatch(/<IGRPModalDialogTrigger[^>]*asChild=\{\s*true\s*\}/);
    expect(rendered).toContain('<IGRPButton');
  });

  test('preserves custom properties without mutating the source layout', () => {
    const trigger: Layout = {
      id: 'modalDialogTrigger1',
      tag: 'modalDialogTrigger1',
      componentName: 'modalDialogTrigger',
      properties: {
        commonProperties: {
          customProperties: {
            'aria-label': 'Open dialog',
          },
        },
      },
      children: [
        {
          id: 'button1',
          tag: 'button1',
          componentName: 'button',
          properties: {
            content: 'Open dialog',
          },
        },
      ],
    };

    const rendered = renderLayout(trigger);

    expect(rendered).toContain('aria-label={ `Open dialog` }');
    expect(rendered).toMatch(/asChild=\{\s*true\s*\}/);
    expect(trigger.properties?.commonProperties?.customProperties).toEqual({
      'aria-label': 'Open dialog',
    });
  });

  test('serializes the custom renderer as a liquid renderer', () => {
    // Full registry serialization currently warns about unrelated missing table references.
    const consoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);

    try {
      const modalDialog = registryAsObject().components.find(
        (component) => component.name === 'modalDialog',
      );
      const trigger = modalDialog?.childrenTypes.find(
        (component) => component.name === 'modalDialogTrigger',
      );

      expect(trigger?.renderer).toBe('liquid');
    } finally {
      consoleWarn.mockRestore();
    }
  });

  test('allows at most one child', () => {
    const trigger = getComponent('modalDialogTrigger');

    expect(trigger?.maxChildren).toBe(1);
  });

  test('does not use asChild when the trigger has no child', () => {
    const trigger: Layout = {
      id: 'modalDialogTrigger1',
      tag: 'modalDialogTrigger1',
      componentName: 'modalDialogTrigger',
      properties: {},
      children: [],
    };

    expect(renderLayout(trigger)).not.toContain('asChild');
  });

  test('rejects malformed layouts with multiple children', () => {
    const trigger: Layout = {
      id: 'modalDialogTrigger1',
      tag: 'modalDialogTrigger1',
      componentName: 'modalDialogTrigger',
      properties: {},
      children: [
        {
          id: 'button1',
          tag: 'button1',
          componentName: 'button',
          properties: { content: 'First action' },
        },
        {
          id: 'button2',
          tag: 'button2',
          componentName: 'button',
          properties: { content: 'Second action' },
        },
      ],
    };

    expect(() => renderLayout(trigger)).toThrow(
      'The component modalDialogTrigger allows only 1 children.',
    );
  });
});
