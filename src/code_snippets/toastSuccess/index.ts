import { CodeSnippets, liquidRenderer } from '../index';
import { toastSuccessDefaultProperties, toastSuccessProperties } from './properties';

export default {

  register(codeSnippet: CodeSnippets) {
    codeSnippet.loadImports([]);
    codeSnippet.loadStates([]);
    codeSnippet.loadName(TOAST_SUCCESS);
    codeSnippet.loadTitle("Toast Success");
    codeSnippet.loadDescription("Code snippet to trigger a success toast.");
    codeSnippet.getProperties(toastSuccessProperties());
    codeSnippet.getDefaultProperties(toastSuccessDefaultProperties());
    codeSnippet.setRenderer(liquidRenderer);
  }

};

const TOAST_SUCCESS = 'toastSuccess'

export { TOAST_SUCCESS };