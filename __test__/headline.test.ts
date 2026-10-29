import { initComponents, setEngineConfiguration } from '../src';
import { getComponent } from '../src/components';
import type { Layout } from '../src/interfaces/types';
import { jsonSchemaToIGRPForm } from '../src/modules/converters/jsonSchemaToForm';
import { renderLayout } from '../src/utils/renderLayout';

describe('Headline design system compatibility', () => {
  beforeAll(async () => {
    setEngineConfiguration({ environment: 'development' });
    await initComponents();
  });

  test('offers CSS class styling without deprecated color settings in Studio', () => {
    const properties = getComponent('headline')?.properties;
    expect(properties).not.toHaveProperty('roleColor');
    expect(properties).not.toHaveProperty('color');
    expect(properties).toHaveProperty('className');
    expect(properties).toHaveProperty('headlineContentClassName');
  });

  test('regenerates saved headlines without deprecated props and preserves supported styling', () => {
    const headline: Layout = {
      id: 'headline1',
      tag: 'headline1',
      componentName: 'headline',
      properties: {
        title: 'Education area',
        description: 'Manage education areas',
        variant: 'h2',
        roleColor: 'solid',
        color: 'success',
        className: 'text-success',
        headlineContentClassName: 'gap-2',
        iconProperties: { showIcon: true, iconName: 'Info' },
      },
    };
    const original = JSON.stringify(headline);

    const rendered = renderLayout(headline);
    expect(rendered).toContain('<IGRPHeadline');
    expect(rendered).toContain('Education area');
    expect(rendered).toContain('Manage education areas');
    expect(rendered).toMatch(/variant=\{\s*`h2`\s*\}/);
    expect(rendered).toContain('text-success');
    expect(rendered).toContain('headlineContentClassName');
    expect(rendered).toContain('gap-2');
    expect(rendered).toContain('iconName');
    expect(rendered).not.toMatch(/\b(?:roleColor|color)=/);
    expect(JSON.stringify(headline)).toBe(original);
  });

  test('omits deprecated data bindings and custom properties without mutating metadata', () => {
    const headline: Layout = {
      id: 'headline1',
      tag: 'headline1',
      componentName: 'headline',
      properties: {
        title: 'Education area',
        commonProperties: {
          customProperties: { roleColor: 'soft', color: 'info', 'aria-label': 'Education area' },
        },
      },
      data: {
        roleColor: { value: { code: 'headlineRole' } },
        color: { value: { code: 'headlineColor' } },
        description: { value: { code: 'headlineDescription' } },
      },
    };
    const original = JSON.stringify(headline);

    const rendered = renderLayout(headline);
    expect(rendered).not.toMatch(/\b(?:roleColor|color)=/);
    expect(rendered).toContain('aria-label');
    expect(rendered).toContain('headlineDescription');
    expect(JSON.stringify(headline)).toBe(original);
  });

  test('creates form headlines without deprecated color defaults', () => {
    const [headline] = jsonSchemaToIGRPForm({ type: 'object', properties: {} });
    expect(headline.componentName).toBe('headline');
    expect(headline.properties).not.toHaveProperty('roleColor');
    expect(headline.properties).not.toHaveProperty('color');
  });
});
