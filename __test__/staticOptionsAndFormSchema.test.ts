import { initComponents, setEngineConfiguration } from '../src';
import type { Layout } from '../src/interfaces/types';
import { registry } from '../src/components';
import { resolveStates } from '../src/helpers/resolveState';
import { extractFormFields, withDerivedFormSchemas } from '../src/helpers/deriveFormSchemas';

const optionsData = (name: string, defaultValue = '[]') => ({
  options: { state: { id: '', type: 'IGRPOptionsProps[]', name, defaultValue, generate: true } },
});

const typed = (extra: Record<string, unknown> = {}) => ({ dataProperties: { isVirtual: false, isType: true, ...extra } });

describe('Static options (PR7)', () => {
  beforeAll(async () => {
    setEngineConfiguration({ environment: 'development' });
    await initComponents();
  });

  const page = (child: Layout): Layout => ({ id: 'root', tag: 'root', componentName: 'page', properties: {}, children: [child] });

  test('panel options become the initial value of the generated options state', () => {
    const select: Layout = {
      id: 'sel1',
      tag: 'sel1',
      componentName: 'select',
      properties: { options: [{ id: 'row1', value: 'yes', label: 'Sim' }, { value: 'no', label: 'Não' }] },
      data: optionsData('select{{id}}Options'),
    };

    const states = resolveStates(page(select), registry);
    expect(states).toContain('useState<IGRPOptionsProps[]>([{"label":"Sim","value":"yes"},{"label":"Não","value":"no"}])');
    expect(states).not.toContain('row1');
    expect(select.data?.options.state.defaultValue).toBe('[]');
  });

  test('applies to radio and combobox too', () => {
    for (const [componentName, name] of [['radio', 'radio{{id}}Options'], ['combobox', 'select{{id}}Options']]) {
      const node: Layout = {
        id: 'opt1',
        tag: 'opt1',
        componentName,
        properties: { options: [{ value: 'a', label: 'A' }] },
        data: optionsData(name),
      };
      expect(resolveStates(page(node), registry)).toContain('([{"label":"A","value":"a"}])');
    }
  });

  test('never overrides an explicit default or an empty panel', () => {
    const explicit: Layout = {
      id: 'sel2',
      tag: 'sel2',
      componentName: 'select',
      properties: { options: [{ value: 'ignored', label: 'Ignored' }] },
      data: optionsData('select{{id}}Options', "[{ value: 'api', label: 'From code' }]"),
    };
    const empty: Layout = { id: 'sel3', tag: 'sel3', componentName: 'select', properties: {}, data: optionsData('select{{id}}Options') };

    expect(resolveStates(page(explicit), registry)).toContain('From code');
    expect(resolveStates(page(explicit), registry)).not.toContain('ignored');
    expect(resolveStates(page(empty), registry)).toContain('useState<IGRPOptionsProps[]>([])');
  });
});

describe('Form schema derivation (PR14)', () => {
  const form = (overrides: Partial<Layout> = {}): Layout => ({
    id: 'formProc',
    tag: 'formProc',
    componentName: 'form',
    properties: {},
    children: [
      { id: 'nome', tag: 'nome', componentName: 'inputText', properties: typed() },
      { id: 'idade', tag: 'idade', componentName: 'inputNumber', properties: typed({ type: 'number' }) },
      { id: 'aceita', tag: 'aceita', componentName: 'checkbox', properties: typed({ type: 'checkbox' }) },
      { id: 'virtual', tag: 'virtual', componentName: 'inputText', properties: typed({ isVirtual: true }) },
      {
        id: 'grid', tag: 'grid', componentName: 'grid', properties: {},
        children: [{ id: 'obs', tag: 'obs', componentName: 'inputTextarea', properties: typed() }],
      },
      {
        id: 'itens', tag: 'itens', componentName: 'formList', properties: typed(),
        children: [{ id: 'descricao', tag: 'descricao', componentName: 'inputText', properties: typed() }],
      },
    ],
    ...overrides,
  });

  test('extracts fields the same way as the Studio Binding Config "Auto"', () => {
    const fields = extractFormFields(form().children);
    expect(fields.map((f) => [f.name, f.type, f.isList])).toEqual([
      ['nome', 'string', false],
      ['idade', 'number', false],
      ['aceita', 'boolean', false],
      ['obs', 'string', false],
      ['itens', 'object', true],
    ]);
    expect(fields[4].fields?.map((f) => f.name)).toEqual(['descricao']);
    expect(fields.every((f) => f.required === false)).toBe(true);
  });

  test('binds an unbound form to a derived type on a copy, leaving the manifest untouched', () => {
    const config = { components: form(), types: [] };
    const derived = withDerivedFormSchemas(config);

    expect((derived.components as Layout).dataType).toBe('formProcSchema');
    expect(derived.types).toHaveLength(1);
    expect(derived.types[0]).toMatchObject({ componentId: 'formProc', name: 'formProcSchema', path: '' });
    expect(config.components.dataType).toBeUndefined();
    expect(config.types).toHaveLength(0);
  });

  test('leaves bound forms and form-less configs as they are', () => {
    const bound = { components: form({ dataType: 'mySchema' }), types: [] };
    expect(withDerivedFormSchemas(bound)).toBe(bound);

    const noForm = { components: { id: 'root', tag: 'root', componentName: 'page', children: [] } as Layout };
    expect(withDerivedFormSchemas(noForm)).toBe(noForm);
  });

  test('avoids clashing with an existing type name', () => {
    const config = { components: form(), types: [{ componentId: 'other', name: 'formProcSchema', path: '', fields: [] }] };
    expect((withDerivedFormSchemas(config).components as Layout).dataType).toBe('formProcSchema2');
  });
});
