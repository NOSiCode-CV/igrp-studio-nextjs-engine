import { Layout } from '../interfaces/types';
import { replaceTemplate } from '../utils/helpers';
import { Component } from '../components';

export function resolveCodeBlocks(config: Layout, registry: Record<string, Component>): string {

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

    config.children?.forEach((child) => codeBlock += resolveCodeBlocks(child, registry))
  }

  return codeBlock

}