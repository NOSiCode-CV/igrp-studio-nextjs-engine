import { ElementField, Layout, TypeDef } from '../interfaces/types';

const FORM = 'form';
const FORM_LIST = 'formList';

/**
 * Widget/legacy type aliases → Zod primitive, mirroring `LEGACY_TYPE_MAP` in
 * the Studio's binding-configuration-modal so an auto-derived schema is the
 * same one the Binding Config "Auto" would have produced.
 */
const TYPE_MAP: Record<string, { type: string; isList?: boolean }> = {
  text: { type: 'string' },
  password: { type: 'string' },
  tel: { type: 'string' },
  color: { type: 'string' },
  select: { type: 'string' },
  select2: { type: 'string' },
  radio: { type: 'string' },
  time: { type: 'string' },
  range: { type: 'number' },
  checkbox: { type: 'boolean' },
  switch: { type: 'boolean' },
  button: { type: 'boolean' },
  string: { type: 'string' },
  boolean: { type: 'boolean' },
  textarea: { type: 'string' },
  array: { type: 'string', isList: true },
  integer: { type: 'number' },
  long: { type: 'number' },
  double: { type: 'number' },
  float: { type: 'number' },
  datetime: { type: 'date' },
};

/** lodash-style camelCase (splits on separators and case boundaries), as the Studio uses. */
const camelCase = (value: string): string => {
  const words = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) ?? [];
  return words
    .map((w, i) => (i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()))
    .join('');
};

/** Same fallback chain as the Studio's `deriveFieldName`: tag → camelCased label → id. */
const deriveFieldName = (node: Layout): string => {
  const tag = node.tag?.trim();
  if (tag) return tag;
  const label = (node.properties?.label ?? node.properties?.headerTitle ?? (node as any).label ?? '').toString().trim();
  if (label) return camelCase(label);
  return node.id ?? '';
};

const isTypedField = (node: Layout): boolean => {
  const dp = node.properties?.dataProperties;
  return !!dp && !dp.isVirtual && !!dp.isType;
};

const toField = (node: Layout, type: string, isList?: boolean): ElementField => {
  const mapped = TYPE_MAP[type];
  return {
    componentId: node.id,
    name: deriveFieldName(node),
    type: mapped?.type ?? type,
    isList: mapped?.isList ?? isList ?? false,
    required: false,
  };
};

/**
 * Mirrors the Studio's Binding Config "Auto" field extraction: every
 * descendant flagged `dataProperties.isType` (and not `isVirtual`) becomes a
 * field; a `formList` becomes a list-of-object field whose nested fields are
 * its own typed descendants.
 */
export const extractFormFields = (children: Layout[] = []): ElementField[] => {
  const fields: ElementField[] = [];

  const visit = (node: Layout) => {
    if (!node) return;

    if (node.componentName === FORM_LIST) {
      const nested: ElementField[] = [];
      const visitNested = (n: Layout) => {
        if (!n) return;
        if (isTypedField(n)) nested.push(toField(n, 'string'));
        (n.children ?? []).forEach(visitNested);
      };
      (node.children ?? []).forEach(visitNested);
      fields.push({ ...toField(node, 'object', true), type: 'object', isList: true, fields: nested });
      return;
    }

    if (isTypedField(node)) {
      fields.push(toField(node, node.properties?.dataProperties?.type || 'string'));
    }

    (node.children ?? []).forEach(visit);
  };

  children.forEach(visit);
  return fields;
};

const schemaNameFor = (form: Layout): string => {
  const base = camelCase(form.tag || form.id || 'form') || 'form';
  return `${base}Schema`;
};

/**
 * Returns a copy of the page/component/step config in which every `form`
 * without a binding (`dataType`) gets an auto-derived Zod type, so the
 * generated `<IGRPForm>` always receives a `schema`. The DS passes `schema`
 * straight to `zodResolver`, which throws on `undefined`.
 *
 * The input config is never mutated, so the saved manifest keeps the form
 * unbound; the schema is re-derived on every emission.
 */
export function withDerivedFormSchemas<T extends { components?: unknown; types?: TypeDef[] }>(config: T): T {
  if (!config || !config.components || typeof config.components !== 'object') return config;

  const clone = structuredClone(config) as T & { components: Layout; types?: TypeDef[] };
  const derived: TypeDef[] = [];
  const usedNames = new Set((clone.types ?? []).map((t) => t.name));

  const walk = (node: Layout) => {
    if (!node || typeof node !== 'object') return;
    if (node.componentName === FORM && !node.dataType) {
      let name = schemaNameFor(node);
      for (let i = 2; usedNames.has(name); i++) name = `${schemaNameFor(node)}${i}`;
      usedNames.add(name);
      node.dataType = name;
      derived.push({ componentId: node.id, name, path: '', fields: extractFormFields(node.children) });
    }
    (node.children ?? []).forEach(walk);
  };

  walk(clone.components);

  if (derived.length === 0) return config;
  clone.types = [...(clone.types ?? []), ...derived];
  return clone;
}
