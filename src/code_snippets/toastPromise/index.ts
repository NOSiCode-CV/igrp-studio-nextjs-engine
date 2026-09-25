import { CodeSnippets, liquidRenderer } from '../index';
import { toastPromiseDefaultProperties, toastPromiseProperties } from './properties';

export default {

  register(codeSnippet: CodeSnippets) {
    codeSnippet.loadImports([]);
    codeSnippet.loadStates([]);
    codeSnippet.loadName(TOAST_PROMISE);
    codeSnippet.loadTitle("Toast Promise");
    codeSnippet.loadDescription("Code snippet to trigger a promise toast.");
    codeSnippet.getProperties(toastPromiseProperties());
    codeSnippet.getDefaultProperties(toastPromiseDefaultProperties());
    codeSnippet.setRenderer(liquidRenderer);
  }

};

const TOAST_PROMISE = 'toastPromise'

export { TOAST_PROMISE };