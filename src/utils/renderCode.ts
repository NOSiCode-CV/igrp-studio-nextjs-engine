import { CodeSnippetConfig, WorkspaceService } from '../interfaces/types';
import { renderServiceTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from './constants';
import { getCodeSnippets, registry } from '../code_snippets/index';

export const renderCode = function (config: CodeSnippetConfig): string {

 // console.log(registry)

  if (!config.name) return '';

  const codeSnippet = getCodeSnippets(config.name)

  if(!codeSnippet) return renderServiceTemplate(TEMPLATES.UNREGISTERED_CODE, { name: config.name })
  
  return codeSnippet.render(config, codeSnippet)

}