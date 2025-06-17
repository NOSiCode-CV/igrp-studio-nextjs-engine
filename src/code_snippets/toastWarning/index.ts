import { CodeSnippets, hbsRenderer } from '../index';
import { toastWarningDefaultProperties, toastWarningProperties } from './properties';

export default {

  register(codeSnippet: CodeSnippets) {
    codeSnippet.loadImports([]);
    codeSnippet.loadStates([]);
    codeSnippet.loadName(TOAST_WARNING);
    codeSnippet.loadTitle("Toast Warning");
    codeSnippet.loadDescription("Code snippet to trigger a warning toast.");
    codeSnippet.getProperties(toastWarningProperties());
    codeSnippet.getDefaultProperties(toastWarningDefaultProperties());
    codeSnippet.setRenderer(hbsRenderer);
  }

};

const TOAST_WARNING = 'toastWarning'

export { TOAST_WARNING };