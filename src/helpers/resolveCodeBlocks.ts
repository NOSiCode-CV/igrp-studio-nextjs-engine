import { Layout } from '../interfaces/types';
import { capitalize, extractComponentData, replaceTemplate } from '../utils/helpers';
import { Component } from '../components';

export function resolveCodeBlocks(config: Layout, registry: Record<string, Component>): string {

  if(!config) return ''

  console.log("Config: ", config)

  let codeBlock : string = ''

  const baseComponent = registry[config.componentName]

  if(baseComponent) {
    console.log("Element :", baseComponent )
    const id = config.id
    if(baseComponent.codeBlock) codeBlock += replaceTemplate(baseComponent.codeBlock, { id })
    config.children?.forEach((child) => codeBlock += resolveCodeBlocks(child, registry))
  }

  return codeBlock

}