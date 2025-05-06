import fs from 'fs-extra';

export function loadPayloadConfig(configPath: string) {
  const configContent = fs.readFileSync(configPath, 'utf-8');

  // Enhanced extractor that handles:
  // - Multi-line arrays
  // - Various spacing patterns
  // - Comments in the config
  const extract = (category: string, prop: string) => {
    const regex = new RegExp(
      `${category}:\\s*\\{[^}]*${prop}:\\s*\\[\\s*([^\\]]*)\\]`,
      'gs'
    );

    const match = configContent.match(regex);
    if (!match) return [];

    // Extract all quoted strings, ignoring comments and extra whitespace
    return [...match[0].matchAll(/'([^']+)'|"([^"]+)"/g)]
      .map(m => m[1] || m[2])
      .filter(Boolean);
  };

  const result = {
    form: {
      types: extract('form', 'types'),
      actions: extract('form', 'actions'),
      functions: extract('form', 'functions')
    },
    table: {
      types: extract('table', 'types'),
      actions: extract('table', 'actions'),
      functions: extract('table', 'functions')
    },
    chart: {
      types: extract('chart', 'types'),
      actions: extract('chart', 'actions'),
      functions: extract('chart', 'functions')
    },
    select: {
      types: extract('select', 'types'),
      actions: extract('select', 'actions'),
      functions: extract('select', 'functions')
    }
  };

  // Clean empty categories
  return Object.fromEntries(
    Object.entries(result)
      .filter(([_, category]) =>
        category.types.length > 0 ||
        category.actions.length > 0 ||
        category.functions.length > 0
      )
  );
}