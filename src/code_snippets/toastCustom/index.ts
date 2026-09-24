import { CodeSnippets, liquidRenderer } from '../index';
import { toastCustomDefaultProperties, toastCustomProperties } from './properties';

export default {

  register(codeSnippet: CodeSnippets) {
    codeSnippet.loadImports([]);
    codeSnippet.loadStates([]);
    codeSnippet.loadName(TOAST_CUSTOM);
    codeSnippet.loadTitle("Toast Custom");
    codeSnippet.loadDescription("Code snippet to trigger a custom toast.");
    codeSnippet.getProperties(toastCustomProperties());
    codeSnippet.getDefaultProperties(toastCustomDefaultProperties());
    codeSnippet.setRenderer(liquidRenderer);
  }

};

const TOAST_CUSTOM = 'toastCustom'

export { TOAST_CUSTOM };