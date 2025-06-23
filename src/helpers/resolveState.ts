import {
  ActionConfig,
  CustomFunctionConfig,
  Layout,
  PageConfig,
  RegisterState,
  RenderContext,
  State,
} from '../interfaces/types';
import { extractComponentData, replaceTemplate, resolveExportedPath } from '../utils/helpers';
import { Component } from '../components';
import { generateAction } from '../modules/actions/generateAction';
import { capitalize } from './stringHelpers';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';
import { renderState } from './resolveCodeBlocks';

export function resolveStates(config: Layout, registry: Record<string, Component>): string {

  if(!config) return ''

  const stateDefinitions = new Set<string>();

  const components = new Set<{ componentName: string, id: string, tag: string, properties: Record<string, any>, interactions: Record<string, any>, data: Record<string, any>, forceStateLoad: boolean, dataType?: string}>();
  extractComponentData(config, components, registry);

  // add default component states
  components.forEach((component) => {
    if(config.properties?.generateState || component.forceStateLoad) {
      const metadata = registry[component.componentName];
      if (metadata?.states) {
        const value = isBool(component.componentName)
          ? (component.properties?.disabled ?? 'false')
          : (component.properties?.value ?? '');
        const type = component.dataType ? capitalize(component.dataType) : 'any';
        metadata.states.forEach((imp: RegisterState) => {
            //imp.state.name = replaceTemplate(imp.state.name, { id: component.tag, });
            //imp.state.defaultValue = imp.state.defaultValue? replaceTemplate(imp.state.defaultValue, { value, type }) : undefined;
            //imp.state.type = replaceTemplate(imp.state.type, { type });

            // TODO: find a better way to handle any type
            if(imp.state.type === 'z.infer<anyZodType>') {
              imp.state.type = 'z.infer<any>'
            }

            if(imp.state.type === 'anyZodType') {
              imp.state.type = 'any'
            }

            if(imp.required) {
              stateDefinitions.add(renderState(imp.state, component));
            }
          }
        );
      }
    }
  });



  // Define actions imports
  const actionsConfigs: Layout[] | undefined = Array.from(components)?.filter((it) => it.interactions);
  const dataConfigs: Layout[] | undefined = Array.from(components)?.filter((it) => it.data);

  // Define Table states
  if(actionsConfigs) {
    actionsConfigs.forEach((c) => {
      Object.entries(c.interactions!).forEach(([_, value]) => {
        
        if(value?.function && value?.type === 'function') {
          value?.function.fnCustomCode?.states?.forEach((s: any) => {
            const value = isBool(c.componentName)
              ? (c.properties?.disabled ?? 'false')
              : (c.properties?.value ?? '');

            const type = c.dataType ? capitalize(c.dataType) : 'any';

            /*s.name = replaceTemplate(s.name, { id: c.tag });
            s.defaultValue = s.defaultValue
              ? replaceTemplate(s.defaultValue, { value, type })
              : undefined;
            s.type = replaceTemplate(s.type, { type });*/

            // TODO: find a better way to handle any type
            if(s.type === 'z.infer<anyZodType>') {
              s.type = 'z.infer<any>'
            }

            if(s.type === 'anyZodType') {
              s.type = 'any'
            }

            stateDefinitions.add(renderState(s, c));
          });
        }
      })
    })
  }

  // Define Table states
  if(dataConfigs) {
    dataConfigs.forEach((c) => {
      Object.entries(c.data!).forEach(([_, value]) => {

        if(value.state?.generate) {
          const defaultValue = isBool(c.componentName)
            ? (c.properties?.disabled ?? 'false')
            : (c.properties?.value ?? '');

          const type = c.dataType ? capitalize(c.dataType) : 'any';

          /*value.state.name = replaceTemplate(value.state.name, { id: c.tag });
          value.state.defaultValue = value.state.defaultValue !== undefined
            ? replaceTemplate(value.state.defaultValue, { defaultValue, type })
            : undefined;
          value.state.type = replaceTemplate(value.state.type, { type });*/

          // TODO: find a better way to handle any type
          if(value.state.type === 'z.infer<anyZodType>') {
            value.state.type = 'z.infer<any>'
          }

          stateDefinitions.add(renderState(value.state, c));
        }

      })
    })
  }

  return Array.from(stateDefinitions).join('\n  ');
}

const isBool = (name: string) => {
  return name === 'button'
}