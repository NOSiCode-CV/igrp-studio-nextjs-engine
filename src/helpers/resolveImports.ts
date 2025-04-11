import { ActionConfig, DeleteConfig, Layout, RenderContext } from '../interfaces/types';
import { capitalize, extractComponentData } from '../utils/helpers';
import { Component } from '../components';
import { generateAction } from '../modules/actions/generateAction';
import { toLowerCase } from './stringHelpers';

export function resolveImports(config: Layout, registry: Record<string, Component>, pageName: string, basePath: string, isPage: boolean = true): string {

  console.log("Registry Within: ", registry)

  if(!config) return ''

  const imports = new Set<string>();

  imports.add(`import { useState, useEffect } from 'react';`)

  if(isPage)
    imports.add(`import { ${capitalize(pageName)}Service} from '@/services/${toLowerCase(pageName)}/${capitalize(pageName)}Service'`)

  const components = new Set<{ componentName: string, id: string, interactions: Record<string, any> }>();
  extractComponentData(config, components, registry);

  components.forEach((component) => {
    const metadata = registry[component.componentName];
    if (metadata?.imports) {
      metadata.imports.forEach((imp) => imports.add(imp));
    }
  });

  // Define actions imports
  const actionConfigs: Layout[] | undefined = Array.from(components)?.filter((it) => it.interactions);

  if(actionConfigs) {
    actionConfigs.forEach((component) => {
      Object.entries(component.interactions!).forEach(([_, value]) => {

          if(!value.type) return

          if(value?.type !== 'function') {

            const actionConfig: ActionConfig = {
              id: value.fnName,
              pageName: pageName,
              actionName: value.actionName,
              imports: value.fnCustomCode.imports,
              code: value.fnCustomCode.actionCode
            }

            const context: RenderContext<ActionConfig, ActionConfig> = {
              resourceConfig: actionConfig,
              basePath,
            };

            if (actionConfig.actionName) {
              imports.add(
                isPage?
                `import { ${actionConfig.actionName} } from "@/app/pages/${pageName.toLowerCase()}/actions/${actionConfig.actionName.toLowerCase()}"`
                  :
                `import { ${actionConfig.actionName} } from "@/components/${pageName.toLowerCase()}/actions/${actionConfig.actionName.toLowerCase()}"`
              );
            } else {
              console.error("actionName is undefined for", actionConfig);
            }

            generateAction(context, !isPage)

          }

          if (value?.type !== 'action') {
            value?.fnCustomCode?.imports?.forEach((imp: any) => imports.add(imp.namespace));
          }

      })
    });
  }



  return Array.from(imports).join('\n');
}