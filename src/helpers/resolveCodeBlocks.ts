import {
  CustomFunctionConfig,
  FunctionDef,
  Layout,
  PageConfig,
  TypeDef,
} from '../interfaces/types';
import { replaceTemplate } from '../utils/helpers';
import { Component } from '../components';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';

export function resolveCodeBlocks(page: PageConfig, config: Layout, registry: Record<string, Component>): string {

  let codeBlock : string = ''

  if (config) {
    codeBlock += resolveComponentCodeBlocks(page, config, registry);
  }

  if(page.functions) {
    page.functions.forEach((fun) => {
      codeBlock += renderFunction(fun)
    });
  }

  if(page.actions) {
    page.actions.forEach((act) => {
      codeBlock += '\n' + act.code + '\n'
    });
  }
  
  return codeBlock

}

function resolveComponentCodeBlocks(page: PageConfig, config: Layout, registry: Record<string, Component>): string {

  if(!config) return ''

  let codeBlock : string = ''

  const baseComponent = registry[config.componentName]

  if(baseComponent) {
    const id = config.id

    if(baseComponent.codeBlock) codeBlock += replaceTemplate(baseComponent.codeBlock, { id })

    if(config.interactions) {
      Object.entries(config.interactions).forEach(([_, value]) => {
        if(value.type !== 'action' && value.fnCustomCode?.fnCode) codeBlock += ('\n' + value.fnCustomCode.fnCode + '\n')
      })
    }

    config.children?.forEach((child) => codeBlock += resolveComponentCodeBlocks(page, child, registry))
  }

  return codeBlock

}

const renderFunction = (fun: CustomFunctionConfig) => {
  return renderSyncTemplate(
    TEMPLATES.DEFAULT_FUNCTION,
    { resourceConfig: fun },
  );
};