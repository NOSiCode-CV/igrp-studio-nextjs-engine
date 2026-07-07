import {
  ComponentConfig,
  CustomFunctionConfig,
  Layout,
  Navigate,
  PageConfig,
  Reference,
  State
} from '../interfaces/types';
import { replaceTemplate } from '../utils/helpers';
import { Component } from '../components';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';
import { isLayout } from '../modules/page/generatePage';
import { MENU_NAVIGATION } from '../components/menuNavigation/index';

export function resolveCodeBlocks(
  config: Layout,
  registry: Record<string, Component>,
  page?: PageConfig,
  component?: ComponentConfig
): string {
  let codeBlock: string = '';

  if (page?.states) {
    page.states.forEach((state) => {
      codeBlock += '\n' + renderState(state) + '\n';
    });
  }

  if (component?.states) {
    component.states.forEach((state) => {
      codeBlock += '\n' + renderState(state) + '\n';
    });
  }

  if (page?.references) {
    page.references.forEach((ref) => {
      codeBlock += '\n' + renderReference(ref) + '\n';
    });
  }

  if (component?.references) {
    component.references.forEach((ref) => {
      codeBlock += '\n' + renderReference(ref) + '\n';
    });
  }

  if(isLayout(page?.components)) {
    const containsNavigations = hasNavigationInteraction(page.components);
    const containsMenuNavigations = hasMenuNavigationInteraction(page.components);

    codeBlock += '\n' + `const { igrpToast } = useIGRPToast()` + '\n';

    if (containsNavigations) {
      codeBlock += '\n' + `const router = useRouter()` + '\n';
    }

    if (containsMenuNavigations) {
      codeBlock += '\n' + `const { getSectionRef } = useIGRPMenuNavigation();` + '\n';
    }

    // Permission `disable` action needs `can(...)` in scope. Hoist once
    // at the top so `renderLayout` can splice `!can('perm')` into any
    // `disabled` binding without re-emitting the hook per usage.
    if (hasDisablePermissionAction(page.components)) {
      codeBlock += '\n' + `const { can } = usePermissions();` + '\n';
    }
  }

  if(isLayout(component?.components)) {
    const containsNavigations = hasNavigationInteraction(component.components);
    const containsMenuNavigations = hasMenuNavigationInteraction(component.components);

    codeBlock += '\n' + `const { igrpToast } = useIGRPToast()` + '\n';

    if (containsNavigations) {
      codeBlock += '\n' + `const router = useRouter()` + '\n';
    }

    if (containsMenuNavigations) {
      codeBlock += '\n' + `const { getSectionRef } = useIGRPMenuNavigation();` + '\n';
    }

    if (hasDisablePermissionAction(component.components)) {
      codeBlock += '\n' + `const { can } = usePermissions();` + '\n';
    }
  }

  if (page?.functions) {
    page.functions
      .flatMap((fn) => fn.states ?? [])
      .forEach((state) => {
        codeBlock += '\n' + renderState(state) + '\n';
      });

    page.functions.forEach((fun) => {
      if (!fun.path) {
        codeBlock += '\n' + renderFunction(fun) + '\n';
      }
    });
  }

  if (page?.actions) {
    page.actions
      .flatMap((fn) => fn.states ?? [])
      .forEach((state) => {
        codeBlock += '\n' + renderState(state) + '\n';
      });

    page.actions.forEach((act) => {
      codeBlock += '\n' + act.code + '\n';
    });
  }

  if (component?.functions) {
    component.functions
      .flatMap((fn) => fn.states ?? [])
      .forEach((state) => {
        codeBlock += '\n' + renderState(state) + '\n';
      });

    component.functions.forEach((fun) => {
      if (!fun.path) {
        codeBlock += '\n' + renderFunction(fun) + '\n';
      }
    });
  }

  if (component?.actions) {
    component.actions
      .flatMap((fn) => fn.states ?? [])
      .forEach((state) => {
        codeBlock += '\n' + renderState(state) + '\n';
      });

    component.actions.forEach((act) => {
      codeBlock += '\n' + act.code + '\n';
    });
  }

  if (config) {
    codeBlock += resolveComponentCodeBlocks(config, registry, page);
  }

  return codeBlock;
}

function resolveComponentCodeBlocks(
  config: Layout,
  registry: Record<string, Component>,
  page?: PageConfig,
): string {
  if (!config) return '';

  let codeBlock: string = '';

  const baseComponent = registry[config.componentName];

  if (baseComponent) {
    const id = config.id;

    if (baseComponent.codeBlock) codeBlock += replaceTemplate(baseComponent.codeBlock, { id });

    if (config.interactions) {

      Object.entries(config.interactions).forEach(([_, value]) => {

        if (value.type === 'function' && value.function?.fnCustomCode?.fnCode)
          codeBlock += '\n' + value.function.fnCustomCode.fnCode + '\n';
        if (value.type === 'navigate' && value.navigate?.path) {
          codeBlock +=
            '\n' +
            renderNavigate({
              id: '',
              tag: config.tag,
              name: replaceTemplate(value.navigate.name, { id: config.tag }),
              path: value.navigate.path,
              params: value.navigate.params,
              segments: value.navigate.segments,
              inRow: value.navigate.inRow
            }) +
            '\n';
        }
      });

    }

    config.children?.forEach(
      (child) => (codeBlock += resolveComponentCodeBlocks(child, registry, page)),
    );
  }

  return codeBlock;
}

const renderFunction = (fun: CustomFunctionConfig) => {
  return renderSyncTemplate(TEMPLATES.DEFAULT_FUNCTION, { resourceConfig: fun });
};

export const renderState = (state: State, component?: any) => {
  return renderSyncTemplate(TEMPLATES.DEFAULT_STATE, {
    resourceConfig: { defaultValue: state.defaultValue, ...state, component: component},
  });
};

export const renderReference = (reference: Reference, component?: any) => {
  return renderSyncTemplate(TEMPLATES.DEFAULT_REFERENCE, {
    resourceConfig: { defaultValue: reference.defaultValue, component: component, ...reference },
  });
};

export const renderNavigate = (navigate: Navigate) => {
  return renderSyncTemplate(TEMPLATES.DEFAULT_NAVIGATE, { resourceConfig: navigate });
};

function hasNavigationInteraction(layout: Layout): boolean {

  const containsNavigate = Object.values(layout.interactions || {}).some(
    (interaction) => interaction.type === 'navigate' && !!interaction.navigate?.path
  );

  if (containsNavigate) return true;

  return (layout.children || []).some(hasNavigationInteraction);
}

function hasMenuNavigationInteraction(layout: Layout): boolean {

  if (layout.componentName === MENU_NAVIGATION) {
    return true;
  }

  // Recursive case: check children
  return (layout.children || []).some((child) => hasMenuNavigationInteraction(child));
}

/**
 * True when the tree contains at least one permission rule with
 * `action: "disable"`. Used to decide whether to hoist
 * `const { can } = usePermissions();` at the top of the emitted
 * component body. Walks `children[]` AND descends into
 * `rules[].fallback` subtrees (fallbacks can carry their own permission
 * rules — cosmetic but still valid).
 */
function hasDisablePermissionAction(layout: Layout): boolean {
  if (!layout) return false;
  if (layout.rules) {
    for (const rule of layout.rules) {
      if (rule.type !== 'permission') continue;
      const action = (rule as any).action ?? 'hide';
      if (action === 'disable') return true;
      const fallback = (rule as any).fallback as Layout | undefined;
      if (fallback && hasDisablePermissionAction(fallback)) return true;
    }
  }
  return (layout.children || []).some((child) => hasDisablePermissionAction(child));
}
