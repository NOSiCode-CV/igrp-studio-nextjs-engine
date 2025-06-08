import {
  ComponentConfig,
  CustomFunctionConfig,
  FunctionDef,
  Layout,
  Navigate,
  PageConfig,
  Reference,
  State,
  TypeDef,
} from '../interfaces/types';
import { replaceTemplate } from '../utils/helpers';
import { Component } from '../components';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';
import { isLayout } from '../modules/page/generatePage';

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

    if (containsNavigations) {
      codeBlock += '\n' + `const router = useRouter()` + '\n';
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
  if (!config || !page) return '';

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

export const renderState = (state: State) => {
  return renderSyncTemplate(TEMPLATES.DEFAULT_STATE, {
    resourceConfig: { defaultValue: state.defaultValue ?? 'any', ...state },
  });
};

export const renderReference = (reference: Reference) => {
  return renderSyncTemplate(TEMPLATES.DEFAULT_REFERENCE, {
    resourceConfig: { defaultValue: reference.defaultValue ?? 'any', ...reference },
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