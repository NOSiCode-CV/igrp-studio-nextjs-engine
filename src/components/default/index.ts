import { Component, customRenderer, defaultRenderer, hbsRenderer, noRenderer } from '../index';
import { ComponentRegisterConfig } from '../../interfaces/types';

export default {
  register(component: Component, config: ComponentRegisterConfig) {
    component.loadImports(config.imports);
    component.loadDefault(config.defaultValue);
    component.loadGroup(config.group);
    component.loadLabel(config.label);

    if(config.customComponentTag !== undefined)
      component.loadCustomComponentTag(config.customComponentTag);

    if(config.customClassName !== undefined)
      component.loadCustomClassName(config.customClassName);

    component.loadTemplatePath(config.templatePath);
    component.loadVariants(config.variants)
    component.loadMetadata(config.metadata)
    component.getProperties(config.properties);
    component.getPropertiesMapping(config.propertiesMapping);
    component.getChildProperties(config.childProperties);
    component.getChildPropertiesMapping(config.childPropertiesMapping);
    component.loadStates(config.states);
    component.getInteractions(config.interactions)
    component.getInteractionsMapping(config.interactionsMapping)
    component.getStyle(config.style)
    component.getStyleMapping(config.styleMapping)
    component.getRules(config.rules)
    component.getRulesMapping(config.rulesMapping)
    component.setRenderer(config.renderer === 'default' ? defaultRenderer : config.renderer === 'hbs' ? hbsRenderer : config.renderer === 'custom' ? customRenderer : noRenderer);
  }
};