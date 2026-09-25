import { ActionConfig, ComponentConfig, Layout, PageConfig, RenderContext } from '../interfaces/types';
import { extractComponentData } from '../utils/helpers';
import { Component } from '../components';
import { generateAction } from '../modules/actions/generateAction';

export function resolveImports(config: Layout, registry: Record<string, Component>, pageName: string, basePath: string, page?: PageConfig, component?: ComponentConfig): string {

  if(!config) return ''

  const imports = new Set<string>();

  // Align with the page/component/processStep .liquid templates, which emit
  // the `'use client'` directive unless `useClient === false`. The same rule
  // governs whether the React `use*` imports must be present: if the file is
  // a client component (explicitly or by default when `useClient` is omitted),
  // include them. Only skip when the caller explicitly opted out with `false`.
  //
  // Also honour `component?.useClient`: the component.liquid template passes
  // `page` as undefined and the real config as `component`, so process steps
  // and custom components were previously always missing these imports.
  const useClient = page?.useClient ?? component?.useClient;
  if (useClient !== false) {
    imports.add(`import { use, useState, useEffect, useRef } from 'react';`);
  }


  imports.add(`import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';`)

  /*if(isPage)
    imports.add(`import { ${capitalize(pageName)}Service} from '@/services/${toLowerCase(pageName)}/${capitalize(pageName)}Service'`)*/

  const components = new Set<{ componentName: string, id: string, tag: string, interactions: Record<string, any>, forceStateLoad: boolean, dataType?: string }>();
  extractComponentData(config, components, registry);

  const classes = new Set<string>();

  components.forEach((component) => {
    const metadata = registry[component.componentName];

    if (metadata?.componentClass) {
      classes.add(metadata.componentClass);
    }
    if (metadata?.imports) {
      metadata.imports.forEach((imp) => imports.add(imp));
    }
  });

  if (classes.size > 0) {
    imports.add(
      `import { 
  ${Array.from(classes).join(',\n\t')} 
} from "@igrp/igrp-framework-react-design-system";`,
    );
  }

  if(page?.types) {
    page.types.forEach((type) => {
      if (type.path) {
        imports.add(`import { ${type.name} } from "${type.path}";`);
      }
    });
  }

  if(component?.types) {
    component.types.forEach((type) => {
      if (type.path) {
        imports.add(`import { ${type.name} } from "${type.path}";`);
      }
    });
  }

  if(page?.functions) {
    page.functions.forEach((fun) => {
      fun.imports?.map((it) => it.namespace).forEach((imp) => imports.add(imp));
      if (fun.path) {
        imports.add(`import { ${fun.name} } from "${fun.path}";`);
      }
    });
  }

  if(component?.functions) {
    component.functions.forEach((fun) => {
      fun.imports?.map((it) => it.namespace).forEach((imp) => imports.add(imp));
      if (fun.path) {
        imports.add(`import { ${fun.name} } from "${fun.path}";`);
      }
    });
  }

  if(page?.actions) {
    page.actions.forEach((act) => {
      act.imports?.map((it) => it.namespace).forEach((imp) => imports.add(imp));
      if (act.path) {
        imports.add(`import { ${act.name} } from "${act.path}";`);
      }
    });
  }

  if(component?.actions) {
    component.actions.forEach((act) => {
      act.imports?.map((it) => it.namespace).forEach((imp) => imports.add(imp));
      if (act.path) {
        imports.add(`import { ${act.name} } from "${act.path}";`);
      }
    });
  }

  if(page?.states) {
    page.states.forEach((st) => {
      st.imports?.map((it) => it.namespace).forEach((imp) => imports.add(imp));
    });
  }

  if(component?.states) {
    component.states.forEach((st) => {
      st.imports?.map((it) => it.namespace).forEach((imp) => imports.add(imp));
    });
  }

  if(page?.references) {
    page.references.forEach((ref) => {
      ref.imports?.map((it) => it.namespace).forEach((imp) => imports.add(imp));
    });
  }

  if(component?.references) {
    component.references.forEach((ref) => {
      ref.imports?.map((it) => it.namespace).forEach((imp) => imports.add(imp));
    });
  }

  if(page?.imports) {
    page.imports.map((it) => it.namespace).forEach((imp) => imports.add(imp));
  }

  if(component?.imports) {
    component.imports.map((it) => it.namespace).forEach((imp) => imports.add(imp));
  }

  // Define actions imports
  const actionConfigs: Layout[] | undefined = Array.from(components)?.filter((it) => it.interactions);

  if(actionConfigs) {
    actionConfigs.forEach((component) => {
      Object.entries(component.interactions!).forEach(([_, value]) => {

          if(!value.type) return

          if(value?.type === 'action') {

            const actionConfig: ActionConfig = {
              id: value.action.actionName,
              pageName: pageName,
              actionName: value.action.actionName,
              imports: value.action.actionCustomCode.imports,
              code: value.action.actionCustomCode.actionCode
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
            if(value.function && value.type === 'function') {
              value?.function.fnCustomCode?.imports?.forEach((imp: any) => imports.add(imp.namespace));
            }
            if(value.navigate && value.type === 'navigate') {
              imports.add(`import { useRouter } from "next/navigation";`)
            }
          }

      })
    });
  }

  // Permission-rule imports (added in 0.2.0-beta.23).
  // Walk the whole tree collecting which permission actions the JSON author
  // used, then add the corresponding imports. Fine-grained so we don't drag
  // in `IGRPAuthorization` on pages that don't gate anything.
  const permActions = collectPermissionActions(config);
  const isClient = (page?.useClient ?? component?.useClient) !== false;

  if (permActions.has('hide') || permActions.has('replace')) {
    imports.add(`import { IGRPAuthorization } from '@igrp/framework-next-ui';`);
  }
  if (permActions.has('disable')) {
    imports.add(`import { usePermissions } from '@igrp/framework-next-ui';`);
  }
  if (permActions.has('assert')) {
    // Server file → real assert; client file → the guard wrapper.
    if (!isClient) {
      imports.add(`import { igrpAssertAuthorize } from '@igrp/framework-next';`);
    } else {
      imports.add(`import { IGRPGuardPage } from '@igrp/framework-next-ui';`);
    }
  }

  return Array.from(imports).join('\n');
}

/**
 * Walks a Layout tree collecting the set of permission-rule `action`
 * values in use. Used by the resolver above to decide which framework
 * imports to add. Descends into `children[]` AND into `rules[].fallback`
 * subtrees so a fallback that uses its own permission rule is also
 * counted.
 */
function collectPermissionActions(root: Layout | undefined): Set<string> {
  const acc = new Set<string>();
  const walk = (node: Layout | undefined): void => {
    if (!node) return;
    if (node.rules) {
      for (const rule of node.rules) {
        if (rule.type !== 'permission') continue;
        const action = (rule as any).action ?? 'hide';
        acc.add(action);
        // Fallback subtree can carry its own rules.
        const fb = (rule as any).fallback as Layout | undefined;
        if (fb) walk(fb);
      }
    }
    if (Array.isArray(node.children)) {
      for (const child of node.children) walk(child);
    }
  };
  walk(root);
  return acc;
}