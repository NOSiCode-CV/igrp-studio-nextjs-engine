import { CodeSnippets, hbsRenderer } from '../index';
import { toastInfoDefaultProperties, toastInfoProperties } from './properties';

export default {

  register(codeSnippet: CodeSnippets) {
    codeSnippet.loadImports([]);
    codeSnippet.loadStates([]);
    codeSnippet.loadName(TOAST_INFO);
    codeSnippet.loadTitle("Toast Info");
    codeSnippet.loadDescription("Code snippet to trigger a info toast.");
    codeSnippet.getProperties(toastInfoProperties());
    codeSnippet.getDefaultProperties(toastInfoDefaultProperties());
    codeSnippet.setRenderer(hbsRenderer);
  }

};

const TOAST_INFO = 'toastInfo'

export { TOAST_INFO };