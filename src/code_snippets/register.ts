import { register } from './index';
import formReferenceUsageModule, { FORM_REFERENCE_USAGE } from './formReferenceUsage/index';
import toastCustomModule, { TOAST_CUSTOM } from './toastCustom/index';
import toastErrorModule, { TOAST_ERROR } from './toastError/index';
import toastInfoModule, { TOAST_INFO } from './toastInfo/index';
import toastPromiseModule, { TOAST_PROMISE } from './toastPromise/index';
import toastSuccessModule, { TOAST_SUCCESS } from './toastSuccess/index';
import toastWarningModule, { TOAST_WARNING } from './toastWarning/index';
import useEffectModule, { USE_EFFECT } from './useEffect/index';

export function registerAllCodeSnippets() {

  register(FORM_REFERENCE_USAGE, formReferenceUsageModule.register);
  register(USE_EFFECT, useEffectModule.register);
  register(TOAST_CUSTOM, toastCustomModule.register);
  register(TOAST_ERROR, toastErrorModule.register);
  register(TOAST_INFO, toastInfoModule.register);
  register(TOAST_PROMISE, toastPromiseModule.register);
  register(TOAST_SUCCESS, toastSuccessModule.register);
  register(TOAST_WARNING, toastWarningModule.register);

}