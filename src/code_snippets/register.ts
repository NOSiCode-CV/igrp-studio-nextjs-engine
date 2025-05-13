import { register } from './index';
import formReferenceUsageModule, { FORM_REFERENCE_USAGE } from './formReferenceUsage/index';

export function registerAllCodeSnippets() {

  register(FORM_REFERENCE_USAGE, formReferenceUsageModule.register);

}