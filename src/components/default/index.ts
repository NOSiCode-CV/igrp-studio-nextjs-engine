import { Component, defaultRenderer, hbsRenderer } from '../index';
import { ComponentRegisterConfig } from '../../interfaces/types';

export default {
  register(component: Component, config: ComponentRegisterConfig) {
    component.loadImports(config.imports);
    component.loadIcon(config.icon);
    component.loadGroup(config.group);
    component.loadLabel(config.label);
    component.loadTemplatePath(config.templatePath);
    component.loadVariants(config.variants)
    component.getProperties(config.properties);
    component.getPropertiesMapping(config.propertiesMapping);
    component.getChildProperties(config.childProperties);
    component.getChildPropertiesMapping(config.childPropertiesMapping);
    component.loadStates(config.states);
    component.setRenderer(config.renderer === 'default' ? defaultRenderer : config.renderer === 'hbs' ? hbsRenderer : defaultRenderer);
  }
};