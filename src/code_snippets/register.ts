import { register } from './index';
import formReferenceUsageModule, { FORM_REFERENCE_USAGE } from './formReferenceUsage/index';
import useEffectModule, { USE_EFFECT } from './useEffect/index';

export function registerAllCodeSnippets() {

  register(FORM_REFERENCE_USAGE, formReferenceUsageModule.register);
  register(USE_EFFECT, useEffectModule.register);

}