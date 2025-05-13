import { CodeSnippets, hbsRenderer } from '../index';
import { formReferenceUsageDefaultProperties, formReferenceUsageProperties } from './properties';

export default {

  register(codeSnippet: CodeSnippets) {
    codeSnippet.loadImports([]);
    codeSnippet.loadStates([]);
    codeSnippet.loadName(FORM_REFERENCE_USAGE);
    codeSnippet.loadTitle("Form Reference Usage");
    codeSnippet.loadDescription("Code snippet to handle form submit through form references.");
    codeSnippet.getProperties(formReferenceUsageProperties());
    codeSnippet.getDefaultProperties(formReferenceUsageDefaultProperties());
    codeSnippet.setRenderer(hbsRenderer);
  }

};

const FORM_REFERENCE_USAGE = 'formReferenceUsage'

export { FORM_REFERENCE_USAGE };