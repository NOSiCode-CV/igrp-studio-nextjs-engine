import { CodeSnippets, liquidRenderer } from '../index';
import { toastErrorDefaultProperties, toastErrorProperties } from './properties';

export default {

  register(codeSnippet: CodeSnippets) {
    codeSnippet.loadImports([]);
    codeSnippet.loadStates([]);
    codeSnippet.loadName(TOAST_ERROR);
    codeSnippet.loadTitle("Toast Error");
    codeSnippet.loadDescription("Code snippet to trigger a error toast.");
    codeSnippet.getProperties(toastErrorProperties());
    codeSnippet.getDefaultProperties(toastErrorDefaultProperties());
    codeSnippet.setRenderer(liquidRenderer);
  }

};

const TOAST_ERROR = 'toastError'

export { TOAST_ERROR };