import {
  baseData,
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function pdfViewerProperties() {
  return {
    title: { type: 'string', required: true, default: 'File' },
    description: { type: 'string', required: true, default: 'A PDF File' },
    author: { type: 'string', required: true, default: 'iGRP' },
    date: { type: 'string', required: true, default: '2025-01-01' },
    fileUrl: { type: 'string', required: true, default: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', 'x-ui-widget': 'uri' },
    displayMode: { type: 'string', required: false, default: 'inline', enum: ['modal', 'inline' ] },
    viewerPreference: { type: 'string', required: false, default: 'auto', enum: ['google', 'native', 'auto' ] },
    labelButtonCancel: { type: 'string', required: false, default: 'Cancel' },
    labelButtonNewTab: { type: 'string', required: false, default: 'Open New Tab' },
    inlineHeight: { type: 'string', required: false },
    notFoundLabel: { type: 'string', required: false, default: 'Not Found' },
    loadErrorLabel: { type: 'string', required: false, default: 'Not Found' },
    loadTimeoutMs: { type: 'number', required: false, 'x-meta': { label: 'Load Timeout (ms)' } },
    documents: { type: 'array', required: false, items: { type: 'object', properties: { id: { type: 'string' }, url: { type: 'string' }, name: { type: 'string' } } } },
    defaultDocument: { type: 'string', required: false },

    ...classProperties(),
    ...commonProperties(),
  };
}

export function pdfViewerPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function pdfViewerChildProperties() {
  return {};
}

export function pdfViewerChildPropertiesMapping() {
  return {};
}

export function pdfViewerVariants() {
  return {};
}

export function pdfViewerStyle() {
  return {
    ...baseStyle()
  }
}

export function pdfViewerRules() {
  return {
    ...baseRules()
  }
}

export function pdfViewerData() {
  return {
    highlight: {
      ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.HIGHLIGHT, {
        id: '',
        name: 'highlight{{id}}PdfViewer',
        type: 'string[]',
        defaultValue: '[]'
      }), required: false
    }
  }
}