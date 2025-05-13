import { ActionConfig, Layout, PageConfig, RenderContext, TypeDef } from '../interfaces/types';
import { extractComponentData, resolveExportedPath } from '../utils/helpers';
import { Component } from '../components';
import { generateAction } from '../modules/actions/generateAction';

export function resolveImports(config: Layout, registry: Record<string, Component>, pageName: string, basePath: string, page?: PageConfig): string {

  if(!config) return ''

  const imports = new Set<string>();

  imports.add(`import { useState, useEffect, useRef } from 'react';`)

  /*if(isPage)
    imports.add(`import { ${capitalize(pageName)}Service} from '@/services/${toLowerCase(pageName)}/${capitalize(pageName)}Service'`)*/

  const components = new Set<{ componentName: string, id: string, tag: string, interactions: Record<string, any>, forceStateLoad: boolean, dataType?: string }>();
  extractComponentData(config, components, registry);

  components.forEach((component) => {
    const metadata = registry[component.componentName];
    if (metadata?.imports) {
      metadata.imports.forEach((imp) => imports.add(imp));
    }
  });

  if(page?.types) {
    page.types.forEach((type) => {
      if (type.path) {
        imports.add(`import { ${type.name} } from "${resolveExportedPath(type.path)}";`);
      }
    });
  }

  if(page?.functions) {
    page.functions.forEach((fun) => {
      fun.imports?.map((it) => it.namespace).forEach((imp) => imports.add(imp));
    });
  }

  if(page?.actions) {
    page.actions.forEach((act) => {
      act.imports?.map((it) => it.namespace).forEach((imp) => imports.add(imp));
    });
  }

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
                !page?
                `import { ${actionConfig.actionName} } from "@/app/pages/${pageName.toLowerCase()}/actions/${actionConfig.actionName.toLowerCase()}"`
                  :
                `import { ${actionConfig.actionName} } from "@/components/${pageName.toLowerCase()}/actions/${actionConfig.actionName.toLowerCase()}"`
              );
            } else {
              console.error("actionName is undefined for", actionConfig);
            }

            generateAction(context, !page)

          }

          if (value?.type !== 'action') {
            value?.fnCustomCode?.imports?.forEach((imp: any) => imports.add(imp.namespace));
          }

      })
    });
  }

  return Array.from(imports).join('\n');
}