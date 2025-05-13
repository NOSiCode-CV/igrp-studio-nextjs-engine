import { CodeSnippets, customRenderer, defaultRenderer, hbsRenderer } from '../index';
import { CodeSnippetsRegisterConfig } from '../../interfaces/types';

export default {
  register(codeSnippet: CodeSnippets, config: CodeSnippetsRegisterConfig) {

    codeSnippet.loadImports(config.imports);
    codeSnippet.loadStates(config.states);
    codeSnippet.loadName(config.name);
    codeSnippet.loadTitle(config.title);
    codeSnippet.loadDescription(config.description);

    codeSnippet.loadTemplatePath(config.templatePath);
    codeSnippet.getDefaultProperties(config.defaultProperties);
    codeSnippet.getProperties(config.properties);
    codeSnippet.getPropertiesMapping(config.propertiesMapping);
    codeSnippet.setRenderer(config.renderer === 'default' ? defaultRenderer : config.renderer === 'hbs' ? hbsRenderer : customRenderer);

  }
};