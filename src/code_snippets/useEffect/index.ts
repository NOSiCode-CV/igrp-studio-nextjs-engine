import { CodeSnippets, hbsRenderer } from '../index';
import { useEffectDefaultProperties, useEffectProperties } from './properties';

export default {

  register(codeSnippet: CodeSnippets) {
    codeSnippet.loadImports([]);
    codeSnippet.loadStates([]);
    codeSnippet.loadName(USE_EFFECT);
    codeSnippet.loadTitle("Use Effect");
    codeSnippet.loadDescription("Code snippet to handle events on the page.");
    codeSnippet.getProperties(useEffectProperties());
    codeSnippet.getDefaultProperties(useEffectDefaultProperties());
    codeSnippet.setRenderer(hbsRenderer);
  }

};

const USE_EFFECT = 'useEffect'

export { USE_EFFECT };